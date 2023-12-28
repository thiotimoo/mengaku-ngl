import NextAuth, { Session } from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/libs/prisma";
import { User } from "@prisma/client";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";

export const authOption = {
    providers: [
        Google({
            clientId:
                "196136708856-m45g6gm8qvhomut4998iorj3sffiakng.apps.googleusercontent.com",
            clientSecret: "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",
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

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
