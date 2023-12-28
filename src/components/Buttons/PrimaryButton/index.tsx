import React from "react";
import BaseButton from "../BaseButton";
import ButtonProps from "../../../types/ButtonProps";

const PrimaryButton: React.FC<ButtonProps> = ({ ...buttonProps }) => {
    return (
        <BaseButton
            {...buttonProps}
            className={
                "font-bold bg-green-500 text-black hover:bg-green-100 ring-green-600 " +
                buttonProps.className
            }
        />
    );
};

export default PrimaryButton;
