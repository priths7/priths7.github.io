import Link from "next/link";
import { FC } from "react";

export const Navbar: FC = () => {

    return(
        <nav className="relative z-20 text-white">
            <div className="container mx-auto flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-[15px]">
                <Link href={"/"} className="w-fit">
                    <span className="block max-w-full text-xl font-semibold leading-tight sm:text-2xl">
                        Prithvi Chakravarthy
                    </span>
                </Link>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:justify-end sm:text-base">
                    <Link href={"/Portfolio"} className="transition-colors hover:text-[#0F0]"><span>Portfolio</span></Link>
                    <Link href={"/Resume"} className="transition-colors hover:text-[#0F0]"><span>Resume</span></Link>
                    <Link href={"/Contact"} className="transition-colors hover:text-[#0F0]"><span>Contact</span></Link>
                </div>
            </div>
        </nav>
    );
}
