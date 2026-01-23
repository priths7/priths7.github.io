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
      className="w-full h-80 sm:h-96 perspective-1000 gap-4"
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
            className="w-full h-full rounded-lg flex flex-col items-start justify-end px-4 py-4 bg-gradient-to-b from-neutral-900 to-slate-50"
            style={{
              backgroundImage: `linear-gradient(180deg,
                    rgba(0, 0, 0, 0),
                    rgba(0, 0, 0, 0.5)), url(${img})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center bottom",
            }}
          >
            <span className="text-lg font-bold mt-4 text-white">{title}</span>
            <div className="flex flex-row mt-4 gap-4 flex-wrap">
            {
              stacks?.map((stack: string) => {
                return <Pill text={stack}/>
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
              backgroundSize: "100% 100%",
              backgroundPosition: "center bottom",
            }}
          >
            <div className="backdrop-blur h-full w-full bg-[rgba(0,0,0,0.3)] px-4 py-4">
              <span className="text-lg font-bold mb-2 text-white">
                Project Description
              </span>
              <br></br>
              <span className="text-sm text-white">{desc}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
