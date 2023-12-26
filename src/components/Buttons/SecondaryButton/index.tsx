import React from "react";
import ButtonProps from "../ButtonProps";
import BaseButton from "../BaseButton";

const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  href,
  className,
}) => {
  return (
    <BaseButton
      className={"bg-neutral-900 text-white hover:bg-neutral-700 ring-neutral-600 " + className}
      href={href}
      children={children}
    />
  );
};

export default SecondaryButton;
