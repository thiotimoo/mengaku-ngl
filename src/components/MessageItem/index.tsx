import { Message } from "@prisma/client";
import React from "react";
import Card from "../Card";
import TimeAgo from "javascript-time-ago";
import Link from "next/link";
const timeAgo = new TimeAgo("en-US");

const MessageItem = (message: Message) => {
    

    return (
        <Link className="w-full h-full" href={"/m/" + message.id}>
            <Card className="flex flex-col justify-center h-full hover:bg-neutral-700 transition-all">
                <p className="text-sm font-semibold bg-blue-200 px-2 rounded-full text-black w-max">
                    {message.from}
                </p>
                <p className="text-lg font-semibold  text-ellipsis overflow-hidden">
                    {message.message}
                </p>
                <p className="text-sm tracking-wider text-neutral-300">
                    {timeAgo.format(message.createdAt)}
                </p>
            </Card>
        </Link>
    );
};

export default MessageItem;
