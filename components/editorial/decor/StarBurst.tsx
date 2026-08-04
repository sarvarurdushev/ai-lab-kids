import type { Accent } from "../tokens";
import { ACCENT_FILL } from "../tokens";

/** A hand-drawn 4-point sparkle — the SVG-native version of the ✨ glyph Vora's Sparkles() uses, for collage contexts where a real emoji would clash with the halftone/print texture. */
export function StarBurst({
  accent = "amber",
  size = 28,
  className = "",
}: {
  accent?: Accent;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
    >
      <path
        d="M20 2c1.5 6.5 3.5 8.5 10 10-6.5 1.5-8.5 3.5-10 10-1.5-6.5-3.5-8.5-10-10 6.5-1.5 8.5-3.5 10-10Z"
        className={ACCENT_FILL[accent]}
      />
    </svg>
  );
}
