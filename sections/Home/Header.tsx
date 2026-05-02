"use client"

import { MatrixRain } from "@/components/TextAnimations/MatrixRain";
import { TextScramble } from "@/components/TextAnimations/TextScramble";
import Image from "next/image";
import { FC, lazy } from "react";
import { Inter } from 'next/font/google'
import dynamic from "next/dynamic";
// import Room from "@/components/TextAnimations/Room";
const Room = dynamic(() => import('@/components/TextAnimations/Room'), { ssr: false })

export const Header: FC = () => {
  const phrases = ["Full stack developer", "Master's student at DePaul", "Systems Architecture", "Software Engineering", "Artificial Intelligence"];
  return (
    <section className="relative container mx-auto flex min-h-[calc(100svh-96px)] w-full flex-col items-center justify-center overflow-hidden px-4 py-16 text-center sm:min-h-[calc(100svh-72px)] sm:px-6 lg:px-[15px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <Room />
      </div>
      

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center px-4 py-6 backdrop-blur-sm sm:px-6">
        {/* <img src="https://storage.googleapis.com/designare-prod/about/prithvi.png" className="w-[40%]"/> */}
        <span className="text-3xl font-semibold leading-tight text-[#FFF] sm:text-4xl md:text-5xl">Prithvi Chakravarthy</span>

        <TextScramble texts={phrases} />
        {/* <div className="mt-20">
          <span className="text-4xl">
            Hi, My name is prithvi chakravarthy<br></br> and i am full stack
            developer
          </span>
        </div> */}
      </div>

      {/* <div className="flex justify-center flex-col items-center">
        <span className="text-white mt-10 w-[50%] text-md text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
      </div> */}
    </section>
  );
};
