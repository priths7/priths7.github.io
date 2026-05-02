import { Navbar } from "@/components/Navbar/Navbar";
import { Details } from "@/sections/Resume/Details";
import { Education } from "@/sections/Resume/Education";
import { WorkEx } from "@/sections/Resume/WorkEx";
import Link from "next/link";
import { FC } from "react";
import dynamic from "next/dynamic";
const Wall = dynamic(() => import('@/components/TextAnimations/Wall'), { ssr: false });

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Wall />
      <main className="container mx-auto flex flex-col items-center gap-10 px-4 pb-20 pt-8 sm:px-6 md:px-[15px]">
        <Details />
        <Education />
        <WorkEx />
      </main>
    </div>
  );
}
