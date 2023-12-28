import React from "react";
import prisma from "@/libs/prisma";
import Card from "@/components/Card";
import NotFound from "@/app/not-found";
import TimeAgo from "javascript-time-ago";

const timeAgo = new TimeAgo("en-US");

interface PageProps {
    params: {
        keyword: string;
    };
}

const MessagePage: React.FC<PageProps> = async ({ params }) => {
    const { keyword } = params;

    const decodedKeyword = decodeURI(keyword);
    console.log(decodedKeyword);
    const messageData = await prisma.message.findUnique({
        where: {
            id: decodedKeyword,
        },
    });
    if (!messageData) return <NotFound />;
    return (
        <div className="w-full p-6 m-auto">
            <Card className="w-full max-w-screen-md m-auto gap-4 bg-white text-black">
                {messageData?.from && (
                    <p className="text-2xl text-center text-neutral-600">
                        From:{" "}
                        <span className="font-bold text-black">
                            {messageData?.from}
                        </span>
                    </p>
                )}
                <p className="lg:text-4xl text-3xl text-center">
                    {messageData?.message}
                </p>
                <p className="text-center text-sm tracking-wider text-neutral-800">
                    {timeAgo.format(messageData.createdAt)}
                </p>
            </Card>
        </div>
    );
};

export default MessagePage;
