"use client";
import React, { useState } from "react";
import Card from "../Card";
import PrimaryButton from "../Buttons/PrimaryButton";
import { Check, Copy } from "@phosphor-icons/react/dist/ssr";

interface Props {
    text: string;
}

const CopyField: React.FC<Props> = ({ text }) => {
    const [copied, setCopied] = useState(false);
    let copiedTimeout: ReturnType<typeof setTimeout> = setTimeout(() => {});
    const copyToClipboard = (event: React.FormEvent) => {
        event.preventDefault();
        setCopied(true);
        navigator.clipboard.writeText(text);
        clearTimeout(copiedTimeout);
        copiedTimeout = setTimeout(() => {
            setCopied(false);
            
        }, 2000);
    };
    return (
        <button className="w-full"onClick={copyToClipboard}>
            <Card className="p-6 hover:bg-neutral-700 transition-all cursor-pointer ">
                <div className="flex flex-row items-center">
                    <div className="w-full flex-1">
                    <p className="w-full text-sm font-bold text-left text-green-400">Bagikan link ini ke teman-temanmu!</p>
                    <p className="w-full text-xl text-left">{text}</p>
                    </div>
                    
                    {!copied ? (
                        <Copy className="h-6 w-6" weight="bold" />
                    ) : (
                        <Check
                            className="h-6 w-6 fill-green-400"
                            weight="bold"
                        />
                    )}
                </div>
            </Card>
        </button>
    );
};

export default CopyField;
