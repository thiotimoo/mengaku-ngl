"use client"
import React, { ChangeEvent, useState } from "react";
import TextInput from "../Inputs/TextInput";
import TextArea from "../Inputs/TextArea";
import PrimaryButton from "../Buttons/PrimaryButton";
import { MessageCreateBody, sendMessage } from "@/libs/api.libs";
import { User } from "@prisma/client";
interface Props {
    targetUser: User;
}
const MessageForm : React.FC<Props> = ({targetUser}) => {
    const [message, setMessage] = useState("");
    const [senderName, setSenderName] = useState("");

    const handleInputMessage = (event: ChangeEvent<HTMLInputElement>) =>
        setMessage(event.target.value);
    const handleInputSender = (event: ChangeEvent<HTMLInputElement>) =>
        setSenderName(event.target.value);
    const handleNewMessage = async (event: React.FormEvent) => {
        event.preventDefault();
        if (message.trim() == '') return;
        const dataMessage: MessageCreateBody = {
            message: message,
            from: senderName,
            userId: targetUser.id,
        }
        const newMessage = await sendMessage(dataMessage)
        if (newMessage.status == '200') {
            setMessage("");
            setSenderName("");
            alert("Sucessfully sent the message!")
        }
    };
    return (
        <>
            <TextInput
                placeholder="From (optional)"
                value={senderName}
                onChange={handleInputSender}
            />
            <TextArea
                placeholder="Write something here..."
                value={message}
                onChange={handleInputMessage}
            />
            <PrimaryButton href="/" onClick={handleNewMessage}>
                Send
            </PrimaryButton>
        </>
    );
};

export default MessageForm;
