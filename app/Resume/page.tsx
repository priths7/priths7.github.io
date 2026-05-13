import { Details } from "@/sections/Resume/Details";
import { Education } from "@/sections/Resume/Education";
import { WorkEx } from "@/sections/Resume/WorkEx";

export default function Page() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto flex flex-col items-center gap-16 px-4 pb-20 pt-8 backdrop-blur-sm sm:px-6 md:px-[15px]">
        <Details />
        <Education />
        <WorkEx />
      </main>
    </div>
  );
}
