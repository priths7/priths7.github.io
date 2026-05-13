import SkillVisual from "@/components/Skills/SkillsVisual";
import { BlinkingCursor } from "@/components/TextAnimations/BlinkingCursor";
import { FC } from "react";

export const Details: FC = () => {
  return (
    <section className="flex w-full max-w-6xl flex-col justify-center gap-16 md:gap-28 overflow-auto">
      <div className="flex flex-col gap-4">
        <div className="mt-4 flex flex-col gap-8 md:flex-row-reverse md:items-start">
          <img
            src="/profile_pic.webp"
            alt="Prithvi Chakravarthy"
            className="mx-auto max-w-sm rounded-lg object-cover md:w-[40%] md:max-w-none"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center mb-6">
              <span className="font-mono text-xs text-green-600 tracking-widest uppercase select-none">
                ./about_me
              </span>
              <div className="flex-1 h-px bg-green-900/40" />
              <h2 className="font-mono text-base text-green-400 tracking-wide">
                Few words about myself
                <BlinkingCursor />
              </h2>
            </div>
            <span className="text-sm leading-7 text-white md:text-base">
              I'm a Full-Stack Developer with 3 years of hands-on experience and
              a current Computer Science Master's student at DePaul University.
              I genuinely enjoy the challenge of designing scalable cloud-based
              solutions. Whether I'm building secure APIs, optimizing complex
              distributed architectures, or integrating machine learning for
              predictive analytics and computer vision , my ultimate goal is
              always the same: engineering dependable, data-driven platforms
              that make a real difference in the user experience. I'm currently
              looking for the next exciting challenge where I can bring these
              ideas to life.
            </span>
            <SkillVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
