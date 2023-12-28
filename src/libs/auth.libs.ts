import { getServerSession } from "next-auth";
import prisma from "@/libs/prisma";
import { authOptions } from "@/utils/authOptions";

export const getUserSession = async () => {
    const session = await getServerSession(authOptions);
    return session?.user;
};


export const getUserDetails = async () => {
    const user = await getUserSession();
    console.log(user)
    if (user?.id)
        return prisma.user.findUnique({ where: { id: user.id } });
    return false;
};
