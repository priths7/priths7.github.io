import { FC } from "react";

interface PillProps {
text: string
}

export const Pill: FC<PillProps> = ({text}) => {
    return(
        <div className="rounded-full px-[20px] h-[40px] text-white border flex items-center">
            <span>{text}</span>
        </div>
    )
}