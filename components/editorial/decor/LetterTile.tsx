import type { Accent, Tilt } from "../tokens";
import { ACCENT_BG, TILT } from "../tokens";

/** A tilted flashcard-style tile carrying a single glyph — the one collage piece that reads as "English," alongside the AI-themed sun/orbit/star vocabulary. Decorative (aria-hidden): the letter itself never carries meaning a screen reader needs, it's flavor for the hero composition. */
export function LetterTile({
  letter,
  accent = "sky",
  size = 62,
  tilt = 0,
  className = "",
}: {
  letter: string;
  accent?: Accent;
  size?: number;
  tilt?: Tilt;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      style={{ width: size, height: size }}
      className={`relative flex items-center justify-center rounded-xl border-2 border-navy ${ACCENT_BG[accent]} ${TILT[tilt]} ${className}`}
    >
      <div className="al-halftone absolute inset-0 rounded-xl text-navy opacity-20" />
      <span
        className="font-editorial relative text-2xl font-extrabold text-navy"
        style={{ fontSize: size * 0.42 }}
      >
        {letter}
      </span>
    </div>
  );
}
