import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import Google from "next-auth/providers/google";
import prisma from "@/libs/prisma"

export const authOptions: NextAuthOptions = {
    providers: [
        Google({
            clientId:
                process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        }),
    ],
    callbacks: {
        session: async ({ session, token }: any ) => {
            if (session?.user) {
                session.user.id = token.sub;
            }
            return session;
        },
        jwt: async ({ user, token }: {user: any; token: JWT; }):Promise<any> => {
            if (user) {
                token.uid = user.id;
            }
            return token;
        },
    },
    session: {
        strategy: "jwt" as const, 
    },
    adapter: PrismaAdapter(prisma),
};