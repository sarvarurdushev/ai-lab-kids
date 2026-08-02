import type { ReactNode } from "react";
import type { Accent, Tilt } from "./tokens";
import { ACCENT_BG, TILT } from "./tokens";

/** The Miro-style floating name-tag — a small colored pill, optionally tilted, optionally with a leading icon (a BigIdeaIcon, an emoji, anything). */
export function PillTag({
  children,
  accent = "navy",
  tilt = 0,
  icon,
  className = "",
}: {
  children: ReactNode;
  accent?: Accent;
  tilt?: Tilt;
  icon?: ReactNode;
  className?: string;
}) {
  const isNavy = accent === "navy";
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold whitespace-nowrap ${ACCENT_BG[accent]} ${isNavy ? "text-white" : "text-navy"} ${TILT[tilt]} ${className}`}
    >
      {icon}
      {children}
    </span>
  );
}
