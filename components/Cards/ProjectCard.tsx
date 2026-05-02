"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import "./style.css";
import { Pill } from "./Pill";

interface ProjectCardProps {
  link: string;
  img: string;
  title: string;
  desc: string;
  delay: number;
  stacks?: string[];
}

export const ProjectCard: FC<ProjectCardProps> = ({
  link,
  img,
  title,
  desc,
  delay,
  stacks,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Toggle the flip state on mouse enter/leave
  const handleHoverStart = () => setIsFlipped(true);
  const handleHoverEnd = () => setIsFlipped(false);
  const handleTap = () => setIsFlipped(!isFlipped);

  return (
    <motion.div
      className="perspective-1000 h-72 w-full gap-4 sm:h-80 lg:h-96"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onTap={handleTap}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }} // Ensures 3D effect for flip
        animate={{
          rotateY: isFlipped ? 180 : 0, // Rotate card based on flip state
        }}
        transition={{ duration: 0.6 }} // Duration of the flip animation
      >
        {/* Front side of the card */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-lg"
          style={{ backfaceVisibility: "hidden" }} // Hide when flipped
        >
          <div
            className="flex h-full w-full flex-col items-start justify-end rounded-lg bg-gradient-to-b from-neutral-900 to-slate-50 px-4 py-4"
            style={{
              backgroundImage: `linear-gradient(180deg,
                    rgba(0, 0, 0, 0),
                    rgba(0, 0, 0, 0.5)), url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center bottom",
            }}
          >
            <span className="mt-4 text-lg font-bold leading-tight text-white">{title}</span>
            <div className="mt-4 flex flex-row flex-wrap gap-2 sm:gap-3">
            {
              stacks?.map((stack: string) => {
                return <Pill text={stack} key={stack}/>
              })
            }
            </div>
            
          </div>
        </div>

        {/* Back side of the card */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-gray-100 transform rotate-y-180 rounded-lg"
          style={{ backfaceVisibility: "hidden" }} // Hide when flipped
        >
          <div
            className="w-full h-full flex flex-col bg-gradient-to-b from-neutral-900 to-slate-50 backdrop-blur-[10px] rounded-lg overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(180deg,
                    rgba(0, 0, 0, 0),
                    rgba(0, 0, 0, 0.45)), url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center bottom",
            }}
          >
            <div className="h-full w-full overflow-y-auto bg-[rgba(0,0,0,0.3)] px-4 py-4 backdrop-blur">
              <span className="mb-2 text-base font-bold text-white sm:text-lg">
                Project Description
              </span>
              <br></br>
              <span className="text-sm leading-relaxed text-white">{desc}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
