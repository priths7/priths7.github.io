import { FC } from "react";

interface PillProps {
  text: string;
}

export const Pill: FC<PillProps> = ({ text }) => {
  return (
    <div className="flex min-h-8 items-center rounded-full border border-[#0F0]/40 bg-black/60 px-3 py-1 text-white backdrop-blur-sm sm:min-h-10 sm:px-4">
      <span className="text-xs sm:text-sm text-green-400">{text}</span>
    </div>
  );
};
