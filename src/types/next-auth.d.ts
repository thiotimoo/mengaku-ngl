import { User } from "@prisma/client";
import { DefaultSession } from "next-auth";
import NextAuth from "next-auth/next";
declare module "next-auth" {
    interface Session {
        user: User;
    }
}
