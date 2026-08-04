import type { ReactNode } from "react";
import type { Accent } from "../tokens";
import { ACCENT_BG } from "../tokens";

/** A collage speech bubble carrying real (translatable) text — unlike the other decor pieces in this file, `children` is content, not decoration, so it's never aria-hidden. */
export function SpeechBubble({
  children,
  accent = "amber",
  tail = "down-left",
  className = "",
}: {
  children: ReactNode;
  accent?: Accent;
  tail?: "down-left" | "down-right";
  className?: string;
}) {
  return (
    <div
      className={`relative max-w-[180px] rounded-2xl border-2 border-navy px-4 py-2.5 text-center text-sm font-bold text-navy ${ACCENT_BG[accent]} ${className}`}
    >
      {children}
      <span
        aria-hidden="true"
        className={`absolute -bottom-[7px] h-4 w-4 border-r-2 border-b-2 border-navy ${ACCENT_BG[accent]} ${tail === "down-left" ? "left-6 rotate-45" : "right-6 -rotate-[135deg]"}`}
      />
    </div>
  );
}
