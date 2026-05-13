import { BlinkingCursor } from "@/components/TextAnimations/BlinkingCursor";
import { FC } from "react";

const experience = [
  {
    role: "Full-stack Developer",
    company: "Designare Studio",
    period: "March 2022 - August 2025",
    summary:
      "Took full ownership of designing, developing, and scaling end-to-end web and mobile applications from scratch. Operating as a full-stack engineer, I managed the complete development lifecycle, bridging complex system architecture, cloud deployment, and custom algorithm creation.",
    highlights: [
      "Designed, developed, and maintained end-to-end web and mobile applications across front-end, back-end, responsive UI, performance optimization, and third-party integrations.",
      "Built and scaled production-ready platforms from zero to production as a sole engineer, taking full ownership of system architecture, database modeling, cloud deployments, and API design.",
      "Engineered scalable RESTful Node.js backend services backed by PostgreSQL, deployed on Google Cloud Platform (GCP) with GCP Cloud Storage for optimized media handling.",
      "Architected layered Android applications using MVVM with a clean separation between the UI, domain, and data layers , utilizing RxJava, Retrofit, and OkHttp for reactive state and network communication.",
      "Developed a custom recommendation algorithm using a weighted scoring system to tailor user feeds dynamically based on real-time engagement (views, likes, comments).",
      "Orchestrated backend cron jobs for calculating and updating video statistics , while integrating Firebase for authentication/crash analytics and Amplitude for granular user behavioral tracking.",
    ],
  },
];

export const WorkEx: FC = () => {
  return (
    <section className="mb-20 flex w-full max-w-6xl flex-col">
      <div className="mb-6 flex items-center">
        <span className="select-none font-mono text-xs uppercase tracking-widest text-green-400/70">
          ./work_experience
        </span>
        <div className="h-px flex-1 bg-green-400/20" />
        <h2 className="font-mono text-base tracking-wide text-green-400">
          Work Experience
          <BlinkingCursor />
        </h2>
      </div>

      <div className="relative pl-5">
        <div
          aria-hidden
          className="absolute left-[5px] top-2 h-[calc(100%-1rem)] w-px bg-green-400/30"
        />

        <div className="flex flex-col gap-8">
          {experience.map((item) => (
            <article key={`${item.role}-${item.period}`} className="relative">
              <span
                aria-hidden
                className="absolute -left-[20px] top-1.5 h-3 w-3 rounded-full border border-green-400 bg-black shadow-[0_0_10px_rgba(74,222,128,0.65)]"
              />
              <div className="flex flex-col gap-2 border-b border-white/10 pb-8 md:grid md:grid-cols-[minmax(160px,0.34fr)_1fr] md:gap-8">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-green-400/80">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-base font-semibold leading-snug text-white">
                    {item.role}
                  </h3>
                  {item.company && (
                    <p className="mt-1 text-sm text-white/60">{item.company}</p>
                  )}
                </div>

                <div>
                  <p className="text-sm leading-7 text-white/80 sm:text-base">
                    {item.summary}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-white/65">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span
                          aria-hidden
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
