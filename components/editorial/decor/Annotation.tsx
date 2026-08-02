import type { ReactNode } from "react";
import type { Tilt } from "../tokens";
import { TILT } from "../tokens";

/**
 * A cursive handwritten-style caption — real content (not aria-hidden), but
 * must never carry load-bearing information since it's visually
 * de-emphasised by design.
 */
export function Annotation({
  children,
  tone = "navy",
  tilt = -1,
  className = "",
}: {
  children: ReactNode;
  tone?: "navy" | "coral";
  tilt?: Tilt;
  className?: string;
}) {
  return (
    <p
      className={`font-hand text-[1.25rem] leading-none sm:text-[1.75rem] ${tone === "navy" ? "text-navy/75" : "text-coral-ink"} ${TILT[tilt]} ${className}`}
    >
      {children}
    </p>
  );
}
