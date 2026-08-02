"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

/** Bottom-right "Scroll" cue with a looping vertical line, fading out once the page has scrolled past the hero. */
export function ScrollCue({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY < 80);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none flex flex-col items-center gap-2 text-[11px] font-semibold tracking-wide text-navy/40 transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"} ${className}`}
    >
      <span>Scroll</span>
      {reduce ? (
        <span className="h-10 w-px bg-navy/30" />
      ) : (
        <motion.span
          className="h-10 w-px origin-top bg-navy/30"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}
