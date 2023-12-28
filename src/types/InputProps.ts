import { ChangeEventHandler } from "react";

interface InputProps {
    placeholder?: string,
    className?: string,
    onChange?: ChangeEventHandler,
    value?: string,
}

export default InputProps;