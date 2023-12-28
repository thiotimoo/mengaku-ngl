import { FormEvent, ReactNode } from "react";

interface ButtonProps {
    href: string;
    onClick?: (event: FormEvent) => void;
    className?: string;
    children: ReactNode;
}

export default ButtonProps;