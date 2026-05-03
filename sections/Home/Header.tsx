"use client"

import { TextScramble } from "@/components/TextAnimations/TextScramble";
import { FC } from "react";
import dynamic from "next/dynamic";
const Room = dynamic(() => import('@/components/TextAnimations/Room'), { ssr: false })

export const Header: FC = () => {
  const phrases = ["Full stack developer", "Master's student at DePaul", "Systems Architecture", "Software Engineering", "Artificial Intelligence"];
  return (
    <div className="relative container mx-auto flex min-h-[calc(100svh-96px)] w-full flex-col items-center justify-center overflow-hidden px-4 py-16 text-center sm:min-h-[calc(100svh-72px)] sm:px-6 lg:px-[15px]">
      <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden">
        <Room />
      </div>
      

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center px-4 py-6 backdrop-blur-sm sm:px-6">
        <span className="text-3xl font-semibold leading-tight text-[#FFF] sm:text-4xl md:text-5xl">Prithvi Chakravarthy</span>
        <TextScramble texts={phrases} />
      </div>

    </div>
  );
};
