"use client";
import React, { ChangeEvent, useState } from "react";
import TextInput from "../Inputs/TextInput";
import TextArea from "../Inputs/TextArea";
import PrimaryButton from "../Buttons/PrimaryButton";
import { MessageCreateBody, sendMessage } from "@/libs/api.libs";
import { User } from "@prisma/client";
import SecondaryButton from "../Buttons/SecondaryButton";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import Loading from "@/app/loading";
interface Props {
    targetUser: User;
}

const MessageForm: React.FC<Props> = ({ targetUser }) => {
    const [message, setMessage] = useState("");
    const [senderName, setSenderName] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleInputMessage = (event: ChangeEvent<HTMLInputElement>) =>
        setMessage(event.target.value);
    const handleInputSender = (event: ChangeEvent<HTMLInputElement>) =>
        setSenderName(event.target.value);
    const handleNewMessage = async (event: React.FormEvent) => {
        event.preventDefault();
        if (loading) return;
        setSuccess(false);
        setError(false);

        if (message.trim() == "") return;
        setLoading(true);
        const dataMessage: MessageCreateBody = {
            message: message.trim(),
            from: senderName.trim(),
            userId: targetUser.id,
        };
        const newMessage = await sendMessage(dataMessage);
        if (newMessage) {
            setLoading(false);
            if (newMessage.status == "200") {
                setMessage("");
                setSenderName("");
                setSuccess(true);
            } else {
                setError(true);
            }
        }
    };

    const handleBackSuccess = (event: React.FormEvent) => {
        event.preventDefault();
        setSuccess(false);
    };
    return success ? (
        <div className="flex flex-col items-center justify-center h-full gap-6">
            <CheckCircle className="w-36 h-36 fill-green-400" weight="bold" />
            <div className="flex flex-col gap-2 w-full">
                <h3
                    className="text-base bg-green-400 w-full text-black px-2
                "
                >
                    Suratmu berhasil dikirim untuk
                </h3>
                <h3 className="text-3xl text-center">{targetUser.name}</h3>
            </div>
            <PrimaryButton href="/">Buat NGL-mu sendiri</PrimaryButton>
            <SecondaryButton href="#" onClick={handleBackSuccess}>
                Kirim surat lain
            </SecondaryButton>
        </div>
    ) : loading ? (
        <Loading />
    ) : (
        <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <h3
                    className="text-base bg-green-400 w-max text-black px-2
                "
                >
                    Pesan untuk
                </h3>
                <h3 className="text-3xl">{targetUser.name}</h3>
            </div>
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
        </div>
    );
};

export default MessageForm;
