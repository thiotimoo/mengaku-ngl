import React from "react";
import ButtonProps from "../../../types/ButtonProps";
import BaseButton from "../BaseButton";

const SecondaryButton: React.FC<ButtonProps> = ({ ...buttonProps }) => {
    return (
        <BaseButton
            {...buttonProps}
            className={
                "bg-neutral-900 text-white hover:bg-neutral-700 ring-neutral-600 " +
                buttonProps.className
            }
        />
    );
};

export default SecondaryButton;
