import type { Accent } from "../tokens";
import { ACCENT_STROKE, ACCENT_FILL } from "../tokens";

/** Concentric hand-drawn orbit lines with small dots riding them — echoes SunDisc's `ring` ellipse pair so it reads as the same hand, used as a standalone collage piece rather than attached to a sun. */
export function OrbitRing({
  accent = "navy",
  size = 300,
  rings = 2,
  dots = 2,
  className = "",
}: {
  accent?: Accent;
  size?: number;
  rings?: 1 | 2;
  dots?: 0 | 1 | 2 | 3;
  className?: string;
}) {
  const dotPositions = [
    { cx: 210, cy: 60 },
    { cx: 40, cy: 130 },
    { cx: 170, cy: 190 },
  ].slice(0, dots);

  return (
    <svg
      viewBox="0 0 240 240"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
    >
      <g
        className={ACCENT_STROKE[accent]}
        fill="none"
        strokeWidth={1.5}
        opacity={0.4}
      >
        <ellipse cx="120" cy="120" rx="118" ry="46" />
        {rings === 2 && <ellipse cx="120" cy="120" rx="90" ry="70" />}
      </g>
      {dotPositions.map((d, i) => (
        <circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r={5}
          className={ACCENT_FILL[accent]}
        />
      ))}
    </svg>
  );
}
