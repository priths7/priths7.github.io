import { getProjectBySlug, getAdjacentProjects, projects } from "@/data/projects";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// ── Static params ────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// ── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study | Prithvi Chakravarthy`,
    description: project.caseStudy.overview,
  };
}

// ── Section heading helper ────────────────────────────────────────────────────
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 flex items-center gap-2 font-semibold uppercase tracking-widest font-mono text-green-400 text-xs sm:text-sm">
      <span className="inline-block h-px w-6 bg-green-400" />
      {children}
    </h2>
  );
}

// ── Pill ─────────────────────────────────────────────────────────────────────
function StackTag({ text }: { text: string }) {
  return (
    <span className="rounded border border-green-400 bg-[#0F0]/5 px-2.5 py-1 font-mono text-xs text-green-400">
      {text}
    </span>
  );
}

// ── Bullet list ───────────────────────────────────────────────────────────────
function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed text-white/80">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />
          {item}
        </li>
      ))}
    </ul>
  );
}

// ── Divider ───────────────────────────────────────────────────────────────────
function Divider() {
  return <hr className="border-white/10" />;
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(params.slug);
  const cs = project.caseStudy;

  return (
    <div className="relative min-h-screen">
      {/* Subtle scanline overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.15) 2px, rgba(0,255,0,0.15) 4px)",
        }}
      />

      {/* Subtle vignette */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      <div className="relative z-10">
        <main className="mx-auto max-w-3xl px-4 pb-10 pt-10 sm:px-6 sm:pt-16 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl">

          {/* ── Back breadcrumb ── */}
          <Link
            href="/Portfolio"
            className="mb-10 inline-flex items-center gap-2 text-xs text-white/50 transition-colors hover:text-green-400"
          >
            ← Back to Portfolio
          </Link>

          {/* ── Hero image ── */}
          <div className="relative mb-10 h-52 w-full overflow-hidden rounded-lg border border-white/10 sm:h-72">
            <Image
              src={project.img}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 48rem"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-5">
              <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-green-400">
                {project.type === "professional" ? "Professional" : "Personal"} Project
              </p>
              <h1 className="text-2xl font-bold text-white sm:text-3xl">
                {project.title}
              </h1>
            </div>
          </div>

          {/* ── Stack tags ── */}
          <div className="mb-10 flex flex-wrap gap-2">
            {project.stacks.map((s) => (
              <StackTag key={s} text={s} />
            ))}
          </div>

          {project.sourceNote && (
            <div className="mb-10 rounded-lg border border-[#0F0]/30 bg-[#0F0]/5 p-4">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-[#0F0]/70">
                Source Availability
              </p>
              <p className="text-sm leading-relaxed text-white/80">
                {project.sourceNote}
              </p>
            </div>
          )}

          <div className="space-y-10">

            {/* ── Overview ── */}
            <section>
              <SectionHeading>Overview</SectionHeading>
              <p className="text-sm leading-relaxed text-white/80">{cs.overview}</p>
            </section>

            <Divider />

            {/* ── Role ── */}
            <section>
              <SectionHeading>Role</SectionHeading>
              <p className="font-mono text-sm text-white/70">{cs.role}</p>
            </section>

            <Divider />

            {/* ── Problem + Solution — two-col on md+ ── */}
            <div className="grid gap-10 md:grid-cols-2">
              <section>
                <SectionHeading>Problem</SectionHeading>
                <p className="text-sm leading-relaxed text-white/80">{cs.problem}</p>
              </section>
              <section>
                <SectionHeading>Solution</SectionHeading>
                <p className="text-sm leading-relaxed text-white/80" dangerouslySetInnerHTML={{__html: cs.solution}}></p>
              </section>
            </div>

            <Divider />

            {/* ── Architecture ── */}
            <section>
              <SectionHeading>Architecture</SectionHeading>
              <p className="mb-5 text-sm leading-relaxed text-white/80">
                {cs.architecture.summary}
              </p>
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
                <p className="mb-4 font-mono text-[12px] uppercase tracking-widest text-green-400">
                  Key Design Decisions
                </p>
                <BulletList items={cs.architecture.highlights} />
              </div>
            </section>

            <Divider />

            {/* ── Challenges + Impact — two-col on md+ ── */}
            <div className="grid gap-10 md:grid-cols-2">
              <section>
                <SectionHeading>Challenges</SectionHeading>
                <BulletList items={cs.challenges} />
              </section>
              <section>
                <SectionHeading>Impact</SectionHeading>
                <BulletList items={cs.impact} />
              </section>
            </div>

            <Divider />

            {/* ── External link ── */}
            { project.repoStatus === "public" && <div className="flex items-center gap-4">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded border border-green-400 px-5 py-2.5 text-sm font-semibold text-green-400 transition-colors hover:bg-green-400 hover:text-black"
              >
                {project.linkLabel ??
                  (project.type === "professional"
                    ? "Visit Live Project"
                    : "View on GitHub")} ↗
              </Link>
            </div>}
            

          </div>

          {/* ── Prev / Next navigation ── */}
          {(prev || next) && (
            <div className="mt-16 grid grid-cols-2 gap-4">
              {prev ? (
                <Link
                  href={`/projects/${prev.slug}`}
                  className="group flex flex-col rounded-lg border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-green-400"
                >
                  <span className="mb-1 font-mono text-[10px] uppercase tracking-widest text-white/40">
                    ← Previous
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-green-400">
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  href={`/projects/${next.slug}`}
                  className="group flex flex-col items-end rounded-lg border border-white/10 bg-white/[0.03] p-4 text-right transition-colors hover:border-green-400"
                >
                  <span className="mb-1 font-mono text-[10px] uppercase tracking-widest text-white/40">
                    Next →
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-green-400">
                    {next.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
