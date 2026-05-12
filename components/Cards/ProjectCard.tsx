"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { Pill } from "./Pill";

interface ProjectCardProps {
  link: string;
  linkLabel?: string;
  img: string;
  title: string;
  desc: string;
  sourceNote?: string;
  delay: number;
  stacks?: string[];
  slug?: string;
  /** Dedicated YouTube demo URL — renders a "Watch Demo ▶" button when present. */
  youtubeLink?: string;
  /**
   * When "private", replaces the Visit/GitHub button with a non-interactive
   * "Private Repo 🔒" badge so the card communicates that the code isn't public.
   */
  repoStatus?: "public" | "private";
}

export const ProjectCard: FC<ProjectCardProps> = ({
  link,
  linkLabel,
  img,
  title,
  desc,
  sourceNote,
  stacks,
  slug,
  youtubeLink,
  repoStatus,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true)
    window.dispatchEvent(new Event('pause-matrix'));
  };

  const handleMouseLeave = () => {
    setIsFlipped(false)
    window.dispatchEvent(new Event('resume-matrix'));
  };

  return (
    // Perspective wrapper — plain div, no JS animation overhead
    <div
    
      className="h-72 w-full cursor-pointer sm:h-80 lg:h-96"
      style={{ perspective: "1000px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsFlipped((f) => !f)}
    >
      {/*
       * Inner container: CSS transform + transition instead of Framer Motion.
       * GPU-accelerated — zero JS overhead regardless of how many cards animate
       * simultaneously.  will-change hints to the browser to promote this layer
       * ahead of time.
       */}
      <div
        className="relative h-full w-full rounded-lg"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
          willChange: "transform",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >
        {/* ── Front face ─────────────────────────────────────────────────── */}
        <div
          className="absolute inset-0 flex flex-col items-start justify-end px-4 py-4 bg-gray-100 overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            background:
              "linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.5))",
          }}
        >
          <span className="mt-4 text-lg font-bold leading-tight text-white">
            {title}
          </span>
          <div className="mt-4 flex flex-row flex-wrap gap-2 sm:gap-3">
            {stacks?.map((stack) => (
              <Pill text={stack} key={stack} />
            ))}
          </div>
        </div>

        {/* ── Back face ──────────────────────────────────────────────────── */}
        <div
          className="absolute inset-0 flex flex-col overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            backgroundColor: "rgba(0, 0, 0, 0.45)",
            transform: "rotateY(180deg)", // pre-rotated so it sits face-down at rest
          }}
        >

            <div className="flex-1 overflow-y-auto px-4 py-4">
              <span className="mb-2 text-base font-bold text-white sm:text-lg">
                Project Description
              </span>
              <br />
              <span className="text-sm leading-relaxed text-white">{desc}</span>
              {sourceNote && (
                <p className="mt-3 rounded border border-[#0F0]/30 bg-black/35 px-3 py-2 font-mono text-[11px] leading-relaxed text-[#0F0]">
                  {sourceNote}
                </p>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 p-4">
              {/* Case study link — always shown when a slug exists */}
              {slug && (
                <Link
                  href={`/projects/${slug}`}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 rounded border border-[#0F0] px-3 py-1.5 text-xs font-semibold text-[#0F0] transition-colors hover:bg-[#0F0] hover:text-black"
                >
                  View Case Study →
                </Link>
              )}

              {/*
               * YouTube demo button — rendered whenever `youtubeLink` is provided,
               * independently of repoStatus. Allows a project to surface a demo
               * video even when the source repo is private.
               */}
              {youtubeLink && (
                <Link
                  href={youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 rounded border border-red-500/70 px-3 py-1.5 text-xs font-semibold text-red-400 transition-colors hover:border-red-400 hover:bg-red-500/10 hover:text-red-300"
                >
                  ▶ Watch Demo
                </Link>
              )}

              {/*
               * Repo / Visit button — three states:
               *   "private"  → non-interactive badge (repo is not public)
               *   otherwise  → clickable Visit / GitHub / live-site link
               *
               * Private projects still show their YouTube demo above when
               * `youtubeLink` is populated, so the card is never left action-less.
               */}
              {repoStatus === "private" ? (
                <span
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex cursor-default items-center gap-1 rounded border border-white/20 px-3 py-1.5 text-xs font-semibold text-white/40 select-none"
                  title="The source repository for this project is private"
                >
                  🔒 Private Repo
                </span>
              ) : (
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 rounded border border-white/40 px-3 py-1.5 text-xs font-semibold text-white/80 transition-colors hover:border-white hover:text-white"
                >
                  {linkLabel ?? "Visit"} ↗
                </Link>
              )}
            </div>
          </div>
      </div>
    </div>
  );
};