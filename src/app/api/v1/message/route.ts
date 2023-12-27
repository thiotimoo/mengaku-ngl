import prisma from '@/libs/prisma'
import { Prisma } from '@prisma/client';

type PostCreateBody = Prisma.Args<typeof prisma.message, 'create'>['data']

export async function POST(request: Request) {
    const { ...PostCreateBody } = await request.json();
    const data = {...PostCreateBody  };
    console.log('PAYLOAD: ',data)
    const newMessage = await prisma.message.create({ data });
    if (!newMessage) return Response.json({ status: 500, message: "FAILED" });
    return Response.json({status: 200, message: "SUCCESS", data: newMessage});
}
