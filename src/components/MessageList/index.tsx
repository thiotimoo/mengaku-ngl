import React from "react";
import prisma from "@/libs/prisma";
import {getUserDetails, getUserSession } from "@/libs/auth.libs";
import MessageItem from "../MessageItem";

const MessageList = async () => {
    const currentUser = await getUserDetails();
    console.log(currentUser)
    if (!currentUser) return;
    const messages = await prisma.message.findMany({
        where: {
            userId: currentUser.id,
        },
    });
    return <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
      {
        messages.map((message, index) => {
          return <MessageItem key={message.id} {...message} />;
        })
      }
    </div>;
};

export default MessageList;