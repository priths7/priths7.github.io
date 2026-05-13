"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import {
  CATEGORY_ORDER,
  resolveCategory,
  resolveLabel,
  type SkillCategory,
} from "@/data/skills";
import { Tab, TabsList } from "../Ui/Tabs";
import { BlinkingCursor } from "@/components/TextAnimations/BlinkingCursor";

// ─── Types ───────────────────────────────────────────────────────────────────

interface SkillEntry {
  raw: string;
  label: string;
  category: SkillCategory;
  /** Number of projects that list this stack */
  count: number;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Derive a de-duplicated, counted list of SkillEntry from all projects. */
function buildSkillEntries(): SkillEntry[] {
  const countMap = new Map<string, number>();

  for (const project of projects) {
    for (const raw of project.stacks) {
      const key = raw.toLowerCase();
      countMap.set(key, (countMap.get(key) ?? 0) + 1);
    }
  }

  return Array.from(countMap.entries())
    .map(([key, count]) => ({
      raw: key,
      label: resolveLabel(key),
      category: resolveCategory(key),
      count,
    }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}

interface SkillPillProps {
  entry: SkillEntry;
  index: number;
}

function SkillPill({ entry, index }: SkillPillProps) {
  const intensity = Math.min(entry.count / 3, 1); // 0–1 scale for glow

  return (
    <motion.div
      key={entry.raw}
      initial={{ opacity: 0, scale: 0.85, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: -4 }}
      transition={{
        delay: index * 0.025,
        duration: 0.2,
        ease: "easeOut",
      }}
      className="group relative"
    >
      <div
        className={[
          "relative flex items-center gap-2 px-3 py-1.5 rounded",
          "border font-mono text-sm cursor-default select-none",
          "transition-all duration-200",
          "border-green-900/60 bg-green-950/20 text-green-300/80",
          "hover:border-green-500/70 hover:bg-green-900/30 hover:text-green-200",
        ].join(" ")}
        style={{
          boxShadow: intensity > 0
            ? `0 0 ${6 + intensity * 10}px rgba(74,222,128,${0.04 + intensity * 0.12})`
            : undefined,
        }}
      >
        {/* Dot indicator: opacity scales with project usage count */}
        <span
          className="block w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"
          style={{ opacity: 0.3 + intensity * 0.7 }}
          aria-hidden
        />
        {entry.label}
        {entry.count > 1 && (
          <span
            className="ml-1 text-xs text-green-600/70 font-mono tabular-nums"
            title={`Used in ${entry.count} projects`}
          >
            ×{entry.count}
          </span>
        )}
      </div>
    </motion.div>
  );
}

// ─── Blinking cursor for the section header ───────────────────────────────────

// function BlinkingCursor() {
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const id = setInterval(() => setVisible((v) => !v), 530);
//     return () => clearInterval(id);
//   }, []);

//   return (
//     <span
//       aria-hidden
//       className="inline-block w-0.5 h-5 bg-green-400 align-middle ml-1"
//       style={{ opacity: visible ? 1 : 0, transition: "opacity 0.05s" }}
//     />
//   );
// }

// ─── Scanline overlay (matches case study page pattern) ──────────────────────

function ScanlineOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-lg overflow-hidden z-10"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
      }}
    />
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SkillVisual() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("All");
  const tabListRef = useRef<HTMLDivElement>(null);

  // Build skill entries once; memoised so it doesn't re-run on re-renders
  const allSkills = useMemo(() => buildSkillEntries(), []);

  // Pre-compute counts per category for tab badges
  const categoryCounts = useMemo(() => {
    const map: Partial<Record<SkillCategory, number>> = {};
    for (const cat of CATEGORY_ORDER) {
      map[cat] =
        cat === "All"
          ? allSkills.length
          : allSkills.filter((s) => s.category === cat).length;
    }
    return map;
  }, [allSkills]);

  // Only show categories that have at least one skill
  const visibleCategories = CATEGORY_ORDER.filter(
    (cat) => (categoryCounts[cat] ?? 0) > 0
  );

  const visibleSkills = useMemo(
    () =>
      activeCategory === "All"
        ? allSkills
        : allSkills.filter((s) => s.category === activeCategory),
    [allSkills, activeCategory]
  );

  // Keyboard navigation for tabs (←/→)
  function handleTabKeyDown(e: React.KeyboardEvent, current: SkillCategory) {
    const idx = visibleCategories.indexOf(current);
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActiveCategory(
        visibleCategories[(idx + 1) % visibleCategories.length]
      );
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActiveCategory(
        visibleCategories[
          (idx - 1 + visibleCategories.length) % visibleCategories.length
        ]
      );
    }
  }

  return (
    <div className="mt-10 mb-6">
      {/* Section header */}
      <div className="flex items-center mb-6">
        <span className="font-mono text-xs text-green-600 tracking-widest uppercase select-none">
          ./skills
        </span>
        <div className="flex-1 h-px bg-green-900/40" />
        <h2 className="font-mono text-base text-green-400 tracking-wide">
          Core Stack
          <BlinkingCursor />
        </h2>
      </div>

      {/* Card container */}
      <div className="relative rounded-lg border border-green-900/50 bg-black/60 backdrop-blur-sm overflow-hidden">
        <ScanlineOverlay />

        {/* Corner decorations */}
        <span aria-hidden className="absolute top-0 left-0 border-t border-l border-green-500/40 rounded-tl" />
        <span aria-hidden className="absolute top-0 right-0 border-t border-r border-green-500/40 rounded-tr" />
        <span aria-hidden className="absolute bottom-0 left-0 border-b border-l border-green-500/40 rounded-bl" />
        <span aria-hidden className="absolute bottom-0 right-0 border-b border-r border-green-500/40 rounded-br" />

        {/* Tab bar */}
        <TabsList className="px-4 border-b border-green-900/40" ref={tabListRef}>
          {visibleCategories.map((cat) => (
            <Tab
              key={cat}
              label={cat}
              isActive={activeCategory === cat}
              badge={categoryCounts[cat]} // Replaced skillCount with badge
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </TabsList>

        {/* Skill pills grid */}
        <div
          className="relative z-0 p-5 "
          role="tabpanel"
          aria-label={`${activeCategory} skills`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex flex-wrap gap-2"
            >
              {visibleSkills.map((entry, i) => (
                <SkillPill key={entry.raw} entry={entry} index={i} />
              ))}

              {visibleSkills.length === 0 && (
                <p className="text-gray-600 font-mono text-sm">
                  no skills mapped to this category yet.
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer status bar */}
        <div className="border-t border-green-900/30 px-5 py-2 flex items-center justify-between">
          <span className="font-mono text-xs text-green-900/70 select-none">
            {visibleSkills.length} skill{visibleSkills.length !== 1 ? "s" : ""}
          </span>
          <span className="font-mono text-xs text-green-900/50 select-none">
            derived from {projects.length} projects
          </span>
        </div>
      </div>

      {/* Legend */}
      <p className="mt-3 text-xs text-gray-600 font-mono text-right">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 opacity-90 align-middle mr-1" />
        brighter dot = used in more projects
      </p>
    </div>
  );
}