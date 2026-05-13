"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { forwardRef, useRef, useState, useEffect, useCallback } from "react";

// ─── Merge Refs Utility ───────────────────────────────────────────────────────
// Combines an internal ref with the forwarded ref via a callback ref.
// This avoids the "Cannot assign to read only property 'current'" error that
// occurs when trying to write directly to a forwarded RefObject.
 
function useMergedRef<T>(
  forwardedRef: React.ForwardedRef<T>
): [React.RefCallback<T>, React.RefObject<T>] {
  const internalRef = useRef<T>(null);
 
  const mergedRef = useCallback(
    (node: T | null) => {
      // Write to our own internal ref (always safe)
      (internalRef as React.MutableRefObject<T | null>).current = node;
 
      // Forward to the external ref in whichever form it arrives
      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else if (forwardedRef !== null) {
        // forwardedRef is a RefObject — we write to it here, NOT elsewhere,
        // so there is no "read-only" violation.
        (forwardedRef as React.MutableRefObject<T | null>).current = node;
      }
    },
    [forwardedRef]
  );
 
  return [mergedRef, internalRef];
}

// ─── Tabs Container ──────────────────────────────────────────────────────────

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ children, className = "", ...props }, forwardedRef) => {
    // mergedRef is the callback ref we pass to the <div>.
    // internalRef lets us call scrollBy / read scrollLeft inside this component.
    const [mergedRef, internalRef] = useMergedRef(forwardedRef);
 
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
 
    const checkScroll = useCallback(() => {
      const el = internalRef.current;
      if (!el) return;
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    }, [internalRef]);
 
    useEffect(() => {
      const el = internalRef.current;
      if (!el) return;
 
      checkScroll();
 
      const ro = new ResizeObserver(checkScroll);
      ro.observe(el);
      el.addEventListener("scroll", checkScroll, { passive: true });
 
      return () => {
        ro.disconnect();
        el.removeEventListener("scroll", checkScroll);
      };
    }, [checkScroll, internalRef]);
 
    const scrollBy = (direction: "left" | "right") => {
      internalRef.current?.scrollBy({
        left: direction === "left" ? -160 : 160,
        behavior: "smooth",
      });
    };
 
    return (
      <div className="relative flex items-center">
        {/* Left arrow */}
        <button
          aria-label="Scroll tabs left"
          onClick={() => scrollBy("left")}
          className={[
            "absolute left-0 z-10 flex items-center justify-center",
            "h-full w-8 shrink-0",
            "bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent",
            "text-gray-400 hover:text-green-400 transition-colors duration-150",
            "focus:outline-none focus-visible:ring-1 focus-visible:ring-green-400",
            canScrollLeft ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
          ].join(" ")}
          tabIndex={canScrollLeft ? 0 : -1}
        >
          <ChevronLeft />
        </button>
 
        {/* Scrollable tab strip */}
        <div
          ref={mergedRef}
          role="tablist"
          className={[
            "flex overflow-x-auto snap-x snap-mandatory gap-0",
            "scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
            className,
          ].join(" ")}
          style={{ WebkitOverflowScrolling: "touch" }}
          {...props}
        >
          {children}
        </div>
 
        {/* Right arrow */}
        <button
          aria-label="Scroll tabs right"
          onClick={() => scrollBy("right")}
          className={[
            "absolute right-0 z-10 flex items-center justify-center",
            "h-full w-8 shrink-0",
            "bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent",
            "text-gray-400 hover:text-green-400 transition-colors duration-150",
            "focus:outline-none focus-visible:ring-1 focus-visible:ring-green-400",
            canScrollRight ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
          ].join(" ")}
          tabIndex={canScrollRight ? 0 : -1}
        >
          <ChevronRight />
        </button>
      </div>
    );
  }
);

TabsList.displayName = "TabsList";

// ─── Individual Tab ──────────────────────────────────────────────────────────

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  badge?: number | string;
}

export function Tab({ label, isActive, badge, onClick }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={[
        "relative flex items-center gap-2 px-4 py-2 text-sm font-mono transition-all duration-200",
        "border-b-2 whitespace-nowrap shrink-0 snap-start focus:outline-none focus-visible:ring-1 focus-visible:ring-green-400",
        isActive
          ? "border-green-400 text-green-400"
          : "border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-600",
      ].join(" ")}
      aria-selected={isActive}
      role="tab"
    >
      {isActive && (
        <span className="text-green-400 select-none" aria-hidden>
          &gt;
        </span>
      )}
      {label}
      
      {badge !== undefined && badge !== 0 && (
        <span
          className={[
            "ml-1 text-xs px-1.5 py-0.5 rounded font-mono tabular-nums",
            isActive
              ? "bg-green-400/15 text-green-400"
              : "bg-white/5 text-gray-600",
          ].join(" ")}
        >
          {badge}
        </span>
      )}
      
      {isActive && <ActiveTabGlow />}
    </button>
  );
}

function ActiveTabGlow() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-green-400 shadow-[0_0_8px_2px_rgba(74,222,128,0.5)]"
    />
  );
}