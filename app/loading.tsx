// app/loading.tsx
// Global fallback shown while any top-level page (Portfolio, Resume, Contact)
// is being compiled or loaded for the first time.

export default function Loading() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center gap-6">

      {/* Matrix-style pulsing brackets */}
      <div className="flex items-center gap-3 font-mono text-[#0F0]">
        <span className="bracket-left text-2xl font-bold">[</span>
        <div className="flex gap-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-5 w-1 rounded-full bg-[#0F0]"
              style={{
                animation: `bar-pulse 1s ease-in-out infinite`,
                animationDelay: `${i * 0.12}s`,
              }}
            />
          ))}
        </div>
        <span className="bracket-right text-2xl font-bold">]</span>
      </div>

      <p className="font-mono text-xs uppercase tracking-widest text-[#0F0]/50">
        Loading
      </p>

      <style>{`
        @keyframes bar-pulse {
          0%, 100% { transform: scaleY(0.3); opacity: 0.3; }
          50%       { transform: scaleY(1);   opacity: 1;   }
        }
      `}</style>
    </div>
  );
}