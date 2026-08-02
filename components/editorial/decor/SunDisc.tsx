import type { Accent } from "../tokens";
import { ACCENT_FILL, ACCENT_STROKE } from "../tokens";

/** The collage "sun" — a flat circle, or a half rising from an edge, with optional concentric orbital rings (the reference's hand-drawn ring lines). */
export function SunDisc({
  variant = "full",
  accent = "amber",
  size = 200,
  ring = false,
  className = "",
}: {
  variant?: "full" | "half-top" | "half-bottom";
  accent?: Accent;
  size?: number;
  ring?: boolean;
  className?: string;
}) {
  const height = variant === "full" ? size : size / 2;
  const path =
    variant === "half-top"
      ? "M0,100 A100,100 0 0 1 200,100 L200,100 L0,100 Z"
      : variant === "half-bottom"
        ? "M0,0 A100,100 0 0 0 200,0 L200,0 L0,0 Z"
        : undefined;

  return (
    <svg
      viewBox={`0 0 200 ${variant === "full" ? 200 : 100}`}
      width={size}
      height={height}
      aria-hidden="true"
      className={className}
    >
      {variant === "full" ? <circle cx="100" cy="100" r="100" className={ACCENT_FILL[accent]} /> : <path d={path} className={ACCENT_FILL[accent]} />}
      {ring && (
        <g className={ACCENT_STROKE[accent]} fill="none" strokeWidth={1} opacity={0.35}>
          <ellipse cx="100" cy={variant === "half-bottom" ? 0 : 100} rx="130" ry="34" />
          <ellipse cx="100" cy={variant === "half-bottom" ? 0 : 100} rx="150" ry="20" />
        </g>
      )}
    </svg>
  );
}
