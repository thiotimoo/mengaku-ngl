import Link from "next/link";
import React from "react";
import ButtonProps from "../../../types/ButtonProps";

const BaseButton: React.FC<ButtonProps> = ({ ...buttonProps }) => {
    return (
        <Link
            {...buttonProps}
            className={
                "text-center rounded-lg px-4 py-2 text-xl inset-0 relative hover:ring-2 ring-offset-2 ring-offset-black transition-all " +
                buttonProps.className
            }
        />
    );
};

export default BaseButton;
