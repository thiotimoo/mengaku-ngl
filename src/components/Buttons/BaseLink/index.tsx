import Link from "next/link";
import React from "react";
import ButtonProps from "../ButtonProps";

const BaseButton: React.FC<ButtonProps> = ({ children, href, className }) => {
  return (
    <Link
      className={
        "text-lg p-2 hover:underline hover:text-yellow-400 text-white transition-all " +
        className
      }
      href={href}
    >
      {children}
    </Link>
  );
};

export default BaseButton;
