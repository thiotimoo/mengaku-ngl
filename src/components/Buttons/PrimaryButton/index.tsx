import Link from "next/link";
import React from "react";
import BaseButton from "../BaseButton";
import ButtonProps from "../ButtonProps";

const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  href,
  className,
}) => {
  return (
    <BaseButton
      className={
        "font-bold bg-yellow-500 text-black hover:bg-yellow-100 ring-yellow-600 " +
        className
      }
      href={href}
      children={children}
    />
  );
};

export default PrimaryButton;
