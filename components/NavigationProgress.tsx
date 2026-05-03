"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// Minimum time (ms) the bar stays visible so it's always seen — even on
// instant cached-page navigations where pushState → pathname change is <50ms.
const MIN_VISIBLE_MS = 400;

export function NavigationProgress() {
  const pathname = usePathname();

  const [width, setWidth]   = useState(0);
  const [fading, setFading] = useState(false);
  const [visible, setVisible] = useState(false);

  const ivRef      = useRef<ReturnType<typeof setInterval>  | null>(null);
  const toRef      = useRef<ReturnType<typeof setTimeout>   | null>(null);
  const startedAt  = useRef<number>(0);
  const navigating = useRef(false);
  const prevPath   = useRef(pathname);

  const clearTimers = () => {
    if (ivRef.current)  { clearInterval(ivRef.current);  ivRef.current  = null; }
    if (toRef.current)  { clearTimeout(toRef.current);   toRef.current  = null; }
  };

  const finish = () => {
    clearTimers();
    setWidth(100);
    // Let the 100% paint land before fading
    toRef.current = setTimeout(() => {
      setFading(true);
      toRef.current = setTimeout(() => {
        setVisible(false);
        setFading(false);
        setWidth(0);
      }, 350);
    }, 80);
  };

  // ── Intercept history.pushState → navigation START ───────────────────────
  useEffect(() => {
    const orig = window.history.pushState.bind(window.history);

    window.history.pushState = (...args: Parameters<typeof orig>) => {
      clearTimers();
      navigating.current = true;
      startedAt.current  = Date.now();

      // Immediately visible at 8% — seen even on sub-100ms navigations
      setFading(false);
      setVisible(true);
      setWidth(8);

      // Crawl toward 80%, decelerating so it never falsely completes
      let w = 8;
      ivRef.current = setInterval(() => {
        const step = Math.random() * 6 + 2;
        w = Math.min(w + step * (1 - w / 85), 80);
        setWidth(w);
        if (w >= 80) { clearInterval(ivRef.current!); ivRef.current = null; }
      }, 120);

      // Safety valve: give up after 8 s
      toRef.current = setTimeout(() => {
        if (!navigating.current) return;
        navigating.current = false;
        finish();
      }, 8000);

      return orig(...args);
    };

    return () => {
      window.history.pushState = orig;
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Pathname change → navigation END ─────────────────────────────────────
  useEffect(() => {
    if (!navigating.current) return;
    if (pathname === prevPath.current) return;
    prevPath.current   = pathname;
    navigating.current = false;
    clearTimers();

    // Respect MIN_VISIBLE_MS — wait out any remaining time before finishing
    const elapsed   = Date.now() - startedAt.current;
    const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);
    toRef.current   = setTimeout(finish, remaining);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => () => clearTimers(), []);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-[2px] w-full"
    >
      <div
        style={{
          height: "100%",
          width: `${width}%`,
          background: "#00ff00",
          boxShadow: "0 0 8px #00ff00, 0 0 2px #00ff00",
          willChange: "width, opacity",
          transition: fading
            ? "width 0.1s ease-out, opacity 0.35s ease"
            : "width 0.12s linear",
          opacity: fading ? 0 : 1,
        }}
      />
    </div>
  );
}