// app/projects/[slug]/loading.tsx
// Shown instantly by Next.js while the case study page compiles/loads.
// Mirrors the real page layout so the content swap feels seamless.

export default function Loading() {
  return (
    <div className="relative min-h-screen">
      {/* Scanline overlay — identical to the real page */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.15) 2px, rgba(0,255,0,0.15) 4px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      <div className="relative z-10">
        <main className="mx-auto max-w-3xl px-4 pb-24 pt-10 sm:px-6 sm:pt-16">

          {/* Back breadcrumb ghost */}
          <div className="mb-10 h-3 w-28 rounded skeleton-pulse" />

          {/* Hero image skeleton */}
          <div className="relative mb-10 h-52 w-full overflow-hidden rounded-lg border border-white/10 sm:h-72 skeleton-pulse" />

          {/* Stack tag skeletons */}
          <div className="mb-10 flex flex-wrap gap-2">
            {[60, 80, 70, 90, 65].map((w, i) => (
              <div
                key={i}
                className="h-7 rounded skeleton-pulse"
                style={{ width: w }}
              />
            ))}
          </div>

          <div className="space-y-10">

            {/* Section: Overview */}
            <section className="space-y-3">
              <div className="h-3 w-20 rounded skeleton-pulse" />
              <div className="space-y-2">
                <div className="h-3 w-full rounded skeleton-pulse" />
                <div className="h-3 w-[92%] rounded skeleton-pulse" />
                <div className="h-3 w-[85%] rounded skeleton-pulse" />
              </div>
            </section>

            <hr className="border-white/10" />

            {/* Section: Role */}
            <section className="space-y-3">
              <div className="h-3 w-16 rounded skeleton-pulse" />
              <div className="h-3 w-64 rounded skeleton-pulse" />
            </section>

            <hr className="border-white/10" />

            {/* Section: Problem + Solution two-col */}
            <div className="grid gap-10 md:grid-cols-2">
              {[0, 1].map((col) => (
                <section key={col} className="space-y-3">
                  <div className="h-3 w-20 rounded skeleton-pulse" />
                  <div className="space-y-2">
                    <div className="h-3 w-full rounded skeleton-pulse" />
                    <div className="h-3 w-[88%] rounded skeleton-pulse" />
                    <div className="h-3 w-[75%] rounded skeleton-pulse" />
                  </div>
                </section>
              ))}
            </div>

            <hr className="border-white/10" />

            {/* Section: Architecture */}
            <section className="space-y-4">
              <div className="h-3 w-24 rounded skeleton-pulse" />
              <div className="space-y-2">
                <div className="h-3 w-full rounded skeleton-pulse" />
                <div className="h-3 w-[90%] rounded skeleton-pulse" />
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5 space-y-3">
                <div className="h-2.5 w-32 rounded skeleton-pulse" />
                {[95, 88, 92, 85, 90].map((w, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0F0]/20" />
                    <div
                      className="h-3 rounded skeleton-pulse"
                      style={{ width: `${w}%` }}
                    />
                  </div>
                ))}
              </div>
            </section>

            <hr className="border-white/10" />

            {/* Section: Challenges + Impact two-col */}
            <div className="grid gap-10 md:grid-cols-2">
              {[0, 1].map((col) => (
                <section key={col} className="space-y-3">
                  <div className="h-3 w-24 rounded skeleton-pulse" />
                  {[90, 85, 78, 88].map((w, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0F0]/20" />
                      <div
                        className="h-3 rounded skeleton-pulse"
                        style={{ width: `${w}%` }}
                      />
                    </div>
                  ))}
                </section>
              ))}
            </div>

            <hr className="border-white/10" />

            {/* CTA button ghost */}
            <div className="h-10 w-40 rounded skeleton-pulse" />

          </div>

          {/* Prev/Next navigation ghosts */}
          <div className="mt-16 grid grid-cols-2 gap-4">
            <div className="h-16 rounded-lg skeleton-pulse" />
            <div className="h-16 rounded-lg skeleton-pulse" />
          </div>

        </main>
      </div>

      <style>{`
        @keyframes skeleton-shimmer {
          0%   { opacity: 0.04; }
          50%  { opacity: 0.12; }
          100% { opacity: 0.04; }
        }
        .skeleton-pulse {
          background: #00ff00;
          animation: skeleton-shimmer 1.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}