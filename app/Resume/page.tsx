import { Navbar } from "@/components/Navbar/Navbar";
import { Details } from "@/sections/Resume/Details";
import { Education } from "@/sections/Resume/Education";
import { WorkEx } from "@/sections/Resume/WorkEx";
import Link from "next/link";
import { FC } from "react";
import dynamic from "next/dynamic";
const Wall = dynamic(() => import('@/components/TextAnimations/wall'), { ssr: false });

export default function Page() {
  return (
    <>
      <Navbar />
      <Wall />
      <div className="flex flex-col items-center gap-10 container px-[15px] mx-auto pb-20">
        <Details />
        <Education />
        <WorkEx />
      </div>
    </>
  );
}
