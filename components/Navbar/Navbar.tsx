import Link from "next/link";
import { FC } from "react";

export const Navbar: FC = () => {

    return(
        <div className="flex text-white justify-between py-4 container px-[15px] mx-auto">
            <Link href={"/"}><span className="text-2xl ">Prithvi Chakravarthy</span></Link>
            <div className="flex gap-4">
                <Link href={"/Portfolio"}><span>Portfolio</span></Link>
                <Link href={"/Resume"}><span>Resume</span></Link>
                <Link href={"/Contact"}><span>Contact</span></Link>
            </div>
        </div>
    );
}