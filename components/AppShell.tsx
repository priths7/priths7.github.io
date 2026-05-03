"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar/Navbar";
import { NavigationProgress } from "@/components/NavigationProgress";

const Wall = dynamic(() => import("@/components/TextAnimations/Wall"), {
  ssr: false,
});

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <NavigationProgress />

      {!isHome && <Wall />}
      <div className="relative z-10 min-h-screen">
        <Navbar />
        {children}
      </div>
    </>
  );
}
