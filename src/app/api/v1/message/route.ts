import prisma from '@/libs/prisma'

export async function POST(request: Request) {
    const { ...body } = await request.json();
    const data = {...body  };
    const newMessage = await prisma.message.create({ data });
    if (!newMessage) return Response.json({ status: 500, message: "FAILED" });
    return Response.json({status: 200, message: "SUCCESS", data: newMessage});
}
