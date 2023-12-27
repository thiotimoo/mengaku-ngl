import { FormEvent } from "react";

interface ButtonProps {
    href: string;
    onClick?: (event: React.FormEvent) => void;
    className?: string;
    children: React.ReactNode;
}

export default ButtonProps;