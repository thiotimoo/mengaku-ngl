import React from "react";
import BaseButton from "../BaseButton";
import ButtonProps from "../../../types/ButtonProps";

const PrimaryButton: React.FC<ButtonProps> = ({ ...buttonProps }) => {
    return (
        <BaseButton
            {...buttonProps}
            className={
                "font-bold bg-yellow-500 text-black hover:bg-yellow-100 ring-yellow-600 " +
                buttonProps.className
            }
        />
    );
};

export default PrimaryButton;
