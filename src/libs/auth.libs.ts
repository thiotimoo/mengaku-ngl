import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/libs/prisma";

export const getUserSession = async () => {
    const session = await getServerSession(authOption);
    return session?.user;
};


export const getUserDetails = async () => {
    const user = await getUserSession();
    console.log(user)
    if (user?.id)
        return prisma.user.findUnique({ where: { id: user.id } });
    return false;
};
