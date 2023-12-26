import Link from "next/link";
import React from "react";
import ButtonProps from "../ButtonProps";

const BaseButton: React.FC<ButtonProps> = ({ children, href, className }) => {
  return (
    <Link
      className={
        "rounded-lg px-4 py-2 text-xl inset-0 relative hover:ring-2 ring-offset-2 ring-offset-black transition-all " +
        className
      }
      href={href}
    >
      {children}
    </Link>
  );
};

export default BaseButton;
