import prismaClient from "@/libs/prisma"
import { Prisma } from "@prisma/client";
export type MessageCreateBody = Prisma.Args<typeof prismaClient.message, 'create'>['data']

export const sendMessage = async (message : MessageCreateBody) => {
    const response = await fetch("/api/v1/message", {
        method: "POST",
        body: JSON.stringify(message)
    });

    const newMessage = await response.json()
    return newMessage;
}