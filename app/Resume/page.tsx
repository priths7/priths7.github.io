import { Details } from "@/sections/Resume/Details";
import { Education } from "@/sections/Resume/Education";
import { WorkEx } from "@/sections/Resume/WorkEx";

export default function Page() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto flex flex-col items-center gap-10 pb-20 pt-8 sm:px-6 md:px-[15px] backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl">
        <Details />
        <Education />
        <WorkEx />
      </main>
    </div>
  );
}
