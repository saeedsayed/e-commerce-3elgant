import { Attributes } from './types/shippingMethods';
import NextAuth from "next-auth";
import google from "next-auth/providers/google";
import type { Provider } from "next-auth/providers";
import { getData } from "./lib/getAPI";
import createAccount from "./lib/createAccounte";
import credentials from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'


const providers: Provider[] = [credentials(
    {
        credentials: {
            email: {},
            password: {},
        },
        authorize: async (credentials) => {
            try {
                const { email, password } = credentials
                // get user
                let [err, user] = await getData(
                    "accounts",
                    ["*"],
                    [
                        {
                            field: "[email]",
                            operator: "eq",
                            value: email
                        }
                    ]
                );
                if (!user[0]) {
                    throw new Error('User not found');
                }
                const isPasswordMatch = await bcrypt.compare(password as string, user[0].attributes.hashPassword)
                if (!isPasswordMatch) {
                    throw new Error("Incorrect password");
                }
                return user[0]
            } catch (err: any) {
                return null
            }
        }
    }
),
    google];

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers,
    pages: {
        signIn: "/login",
        error: "/error",
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async signIn({ profile }) {
            if (!profile) return true
            const userName = profile?.name?.replace(/\s/g, "_");
            let [_, strapiUser] = await getData(
                "accounts",
                ["*"],
                [{ field: "[email]", operator: "eq", value: profile?.email }]
            );
            if (!strapiUser || strapiUser.length === 0) {
                await createAccount(
                    userName as string,
                    profile?.given_name as string,
                    profile?.family_name as string,
                    profile?.email as string,
                    profile?.picture as string
                );
            }
            return true;
        },
        async jwt({ token, trigger, user }) {
            if (trigger) {
                let userData
                if (!token.email) {
                    userData = user
                } else {
                    let [_, strapiUser] = await getData(
                        "accounts",
                        ["*"],
                        [{ field: "[email]", operator: "eq", value: token?.email }]
                    );
                    userData = strapiUser[0];
                }
                const { userName, avatar, firstName, lastName, email, hashPassword } = userData.attributes
                token.id = userData.id;
                token.userName = userName;
                token.picture = avatar;
                token.firstName = firstName;
                token.lastName = lastName;
                token.email = email;
                token.hashPassword = hashPassword;
                token.wishlistId = userData.attributes.wishlist.data.id;
                token.cartId = userData.attributes.cart.data.id;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id as never;
            session.user.email = token.email as string;
            session.user.userName = token.userName as string;
            session.user.image = token.picture as string;
            session.user.firstName = token.firstName as string;
            session.user.lastName = token.lastName as string;
            session.user.wishlistId = token.wishlistId as number;
            session.user.cartId = token.cartId as number;
            session.user.hashPassword = token.hashPassword as string;
            return session;
        },
    },
});
