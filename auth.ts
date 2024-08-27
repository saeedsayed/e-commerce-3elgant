import NextAuth from "next-auth";
import google from "next-auth/providers/google";
import type { Provider } from "next-auth/providers";
import { getData } from "./lib/getAPI";
import createAccount from "./lib/createAccounte";

const providers: Provider[] = [google];

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers,
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async signIn({ profile }) {
            const username = profile?.name?.replace(/\s/g, "_");
            let [_, strapiUser] = await getData(
                "accounts",
                ["*"],
                [{ filter: "[username]", operator: "eq", value: username }]
            );
            if (!strapiUser || strapiUser.length === 0) {
                await createAccount(
                    username as string,
                    profile?.given_name as string,
                    profile?.family_name as string,
                    profile?.email as string,
                    profile?.picture as string
                );
            }
            return true;
        },
        async jwt({ token }) {
            const username = token?.name?.replace(/\s/g, "_");
            let [_, strapiUser] = await getData(
                "accounts",
                ["*"],
                [{ filter: "[username]", operator: "eq", value: username }]
            );
            const user = strapiUser[0].attributes;
            token.id = strapiUser[0].id;
            token.name = user.username;
            token.picture = user.avatar;
            token.firstName = user.firstname;
            token.lastName = user.lastname;
            token.email = user.email;
            token.wishlistId = user.wishlist.data.id;
            token.cartId = user.cart.data.id;
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id as string;
            session.user.email = token.email as string;
            session.user.name = token.name as string;
            session.user.image = token.picture as string;
            session.user.firstName = token.firstName as string;
            session.user.lastName = token.lastName as string;
            session.user.wishlistId = token.wishlistId as number;
            session.user.cartId = token.cartId as number;
            return session;
        },
    },
});
