import InputProps from "@/types/InputProps";
import React from "react";

const TextArea: React.FC<InputProps> = ({ ...inputProps }) => {
    return (
        <textarea
            cols={40}
            rows={5}
            {...inputProps}
            className="resize-none shadow-lg rounded-lg p-3 bg-neutral-900 border-2 border-neutral-700 text-xl"
        />
    );
};

export default TextArea;
