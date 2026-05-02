import { FC } from "react";

interface PillProps {
text: string
}

export const Pill: FC<PillProps> = ({text}) => {
    return(
        <div className="flex min-h-8 items-center rounded-full border px-3 py-1 text-white sm:min-h-10 sm:px-4">
            <span className="text-xs sm:text-sm">{text}</span>
        </div>
    )
}
