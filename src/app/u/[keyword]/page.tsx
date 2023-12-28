import React from "react";
import prisma from "@/libs/prisma";
import MessageForm from "@/components/MessageForm";
import NotFound from "@/app/not-found";

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

    
    if (!targetUser) return <NotFound/>
    return (
        <div className="flex flex-col max-w-screen-sm m-auto w-full min-h-full p-6 gap-4 justify-center items-center">
            <MessageForm targetUser={targetUser}/>
        </div>
    );
};

export default Page;
