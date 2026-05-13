import { BlinkingCursor } from "@/components/TextAnimations/BlinkingCursor";
import { FC } from "react";

const education = [
  {
    degree: "Master's in Computer Science",
    school: "DePaul University",
    period: "Sept 2025 - Present",
  },
  {
    degree: "Postgraduate Certificate",
    school: "BITS Pilani WILP",
    period: "Nov 2023 - Nov 2024",
  },
  {
    degree: "B.Tech CSE",
    school: "VIT Bhopal",
    period: "2018 - 2022",
  },
];

export const Education: FC = () => {
  return (
    <section className="flex w-full max-w-6xl flex-col">
      <div className="mb-6 flex items-center">
        <span className="select-none font-mono text-xs uppercase tracking-widest text-green-400/70">
          ./education
        </span>
        <div className="h-px flex-1 bg-green-400/20" />
        <h2 className="font-mono text-base tracking-wide text-green-400">
          Education
          <BlinkingCursor />
        </h2>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {education.map((item) => (
          <article
            key={`${item.degree}-${item.school}`}
            className="border-l border-green-400/40 bg-black/20 px-4 py-3"
          >
            <p className="font-mono text-[11px] uppercase tracking-widest text-green-400/80">
              {item.period}
            </p>
            <h3 className="mt-2 text-base font-semibold leading-snug text-white">
              {item.degree}
            </h3>
            <p className="mt-1 text-sm leading-6 text-white/70">{item.school}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
