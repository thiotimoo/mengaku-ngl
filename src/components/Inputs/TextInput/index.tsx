import React from "react";
import InputProps from "@/types/InputProps"

const TextInput: React.FC<InputProps> = ({ ...inputProps}) => {
    return (
        <input
            {...inputProps}
            className={"resize-none shadow-lg rounded-lg p-3 bg-neutral-900 border-2 border-neutral-700 text-xl" + ' ' + inputProps.className}
        />
    );
};

export default TextInput;
