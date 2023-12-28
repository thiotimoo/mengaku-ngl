import { FC, FormEvent, ReactNode } from "react";
import CardProps from  "@/types/CardProps"

const Card: FC<CardProps> = ({children, className}) => {
  return (
    <div className={"bg-neutral-900 border-2 border-neutral-700 rounded-xl p-6 flex-col flex" + ' ' + className}>
        {children}
    </div>
  )
}

export default Card