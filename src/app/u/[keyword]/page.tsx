import React from "react";
import prisma from "@/libs/prisma";
import MessageForm from "@/components/MessageForm";

interface PageProps {
    params: {
        keyword: string;
    };
}

const Page: React.FC<PageProps> = async ({ params }) => {
    const { keyword } = params;
    const decodedKeyword = decodeURI(keyword);
    const targetUser = await prisma.user.findUnique({
        where: {
            id: decodedKeyword,
        },
    });

    
    if (!targetUser) return <>User Not Found!</>
    return (
        <div className="flex flex-col max-w-screen-sm m-auto w-full min-h-full p-6 gap-3 justify-center">
            <h3 className="font-semibold text-3xl">mengaku ke</h3>
            <h3 className="font-medium text-lg bg-white text-black w-max px-1">
                {targetUser?.name}
            </h3>
            <MessageForm targetUser={targetUser}/>
        </div>
    );
};

export default Page;
