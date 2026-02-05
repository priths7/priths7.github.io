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
  const phrases = ["Full stack developer", "Based in chicago", "Open Source Enthusiast"];
  return (
    <div className="relative h-[100%] w-[100%] flex flex-col items-center justify-center container px-[15px] mx-auto">
      <div className="absolute">
      <Room />
      </div>
      

      <div className="flex flex-col items-center px-6 py-6 backdrop-blur-sm">
        {/* <img src="https://storage.googleapis.com/designare-prod/about/prithvi.png" className="w-[40%]"/> */}
        <span className="text-4xl text-[#FFF] font-inter ">Prithvi Chakravarthy</span>

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
    </div>
  );
};
