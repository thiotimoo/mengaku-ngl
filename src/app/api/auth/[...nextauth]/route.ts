import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/libs/prisma"

export const authOption = {
    providers: [
        Google({
            clientId: '196136708856-m45g6gm8qvhomut4998iorj3sffiakng.apps.googleusercontent.com',
            clientSecret: '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'
        })
    ],
    adapter: PrismaAdapter(prisma),
}

const handler = NextAuth(authOption)

export {handler as GET, handler as POST}