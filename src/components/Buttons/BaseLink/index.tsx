import Link from "next/link";
import React from "react";
import ButtonProps from "../../../types/ButtonProps";

const BaseButton: React.FC<ButtonProps> = ({ ...buttonProps }) => {
    return (
        <Link
            {...buttonProps}
            className={
                "text-lg p-2 hover:underline hover:text-yellow-400 text-white transition-all " +
                buttonProps.className
            }
        >
            {buttonProps.children}
        </Link>
    );
};

export default BaseButton;
