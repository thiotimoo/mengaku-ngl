import prisma from '@/libs/prisma'
import { Prisma } from '@prisma/client';

export async function POST(request: Request) {
    const { ...PostCreateBody } = await request.json();
    const data = {...PostCreateBody  };
    const newMessage = await prisma.message.create({ data });
    if (!newMessage) return Response.json({ status: 500, message: "FAILED" });
    return Response.json({status: 200, message: "SUCCESS", data: newMessage});
}
