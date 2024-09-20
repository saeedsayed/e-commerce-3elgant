'use server'

import { signIn, signOut } from "@/auth";

export const login = async (email: string, password: string) => {
    try {
        const r = await signIn('credentials', { email, password, redirectTo: "/", redirect: true })
    } catch (err: any) {
        if (err.type == 'CredentialsSignin' || err.type == 'CallbackRouteError') {
            return "Invalid credentials"
        } else if (err.message == 'NEXT_REDIRECT') {
            return 'success'
        }
        throw err
    }
}

export const logout = async () => {
    await signOut()
}