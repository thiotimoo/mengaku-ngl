"use client";
import React, { useState } from "react";
import Card from "../Card";
import PrimaryButton from "../Buttons/PrimaryButton";
import { Check, CheckCircle, Copy } from "@phosphor-icons/react/dist/ssr";

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
            <div className="p-6 hover:bg-green-200 bg-green-400 text-black rounded-lg transition-all cursor-pointer ">
                <div className="flex flex-row items-center">
                    <div className="w-full flex-1">
                    <p className="w-full text-sm font-bold text-left text-black">Bagikan link ini ke teman-temanmu!</p>
                    <p className="w-full text-base text-left">{text}</p>
                    </div>
                    
                    {!copied ? (
                        <Copy className="p-2 h-12 w-12 fill-black" weight="bold" />
                    ) : (
                        <CheckCircle
                            className="p-2 h-12 w-12 fill-black"
                            weight="bold"
                        />
                    )}
                </div>
            </div>
        </button>
    );
};

export default CopyField;
