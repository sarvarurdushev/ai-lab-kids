// Literal Tailwind-class lookup tables for components/editorial/**.
//
// Tailwind v4 statically scans source for whole utility class strings — a
// template-built class like `lg:col-span-${n}` or `rotate-${deg}deg` is
// invisible to that scan and silently produces no CSS (the same trap
// documented in lib/curriculum/bigIdeaPresentation.ts for the console).
// Every variant prop in this directory must resolve through one of the
// Records below instead of interpolating a class name directly.

export type Accent = "amber" | "coral" | "sky" | "mint" | "navy";

export const ACCENT_FILL: Record<Accent, string> = {
  amber: "fill-amber",
  coral: "fill-coral",
  sky: "fill-sky",
  mint: "fill-mint",
  navy: "fill-navy",
};

// AA-on-white text colour per accent — for real text (numerals, links,
// labels). Never use ACCENT_COLOR below for text; the pure hues are
// fill-only (~1.7-2.9:1 contrast on white), see globals.css tokens.
export const ACCENT_TEXT: Record<Accent, string> = {
  amber: "text-amber-ink",
  coral: "text-coral-ink",
  sky: "text-sky-ink",
  mint: "text-mint",
  navy: "text-navy",
};

// Pure-hue `text-*` per accent, used only to set an SVG `currentColor`
// context for decorative fills (e.g. a <pattern>'s circles) — never for
// actual text. Kept distinct from ACCENT_TEXT (the ink-safe variant).
export const ACCENT_COLOR: Record<Accent, string> = {
  amber: "text-amber",
  coral: "text-coral",
  sky: "text-sky",
  mint: "text-mint",
  navy: "text-navy",
};

export const ACCENT_BG: Record<Accent, string> = {
  amber: "bg-amber",
  coral: "bg-coral",
  sky: "bg-sky",
  mint: "bg-mint",
  navy: "bg-navy",
};

export const ACCENT_BORDER: Record<Accent, string> = {
  amber: "border-amber",
  coral: "border-coral",
  sky: "border-sky",
  mint: "border-mint",
  navy: "border-navy",
};

export const ACCENT_STROKE: Record<Accent, string> = {
  amber: "stroke-amber",
  coral: "stroke-coral",
  sky: "stroke-sky",
  mint: "stroke-mint",
  navy: "stroke-navy",
};

export type Tilt = -2 | -1 | 0 | 1 | 2;

export const TILT: Record<Tilt, string> = {
  "-2": "-rotate-2",
  "-1": "-rotate-1",
  "0": "",
  "1": "rotate-1",
  "2": "rotate-2",
};

// 12-column grid placement (Section.tsx / Grid.tsx). Only the spans/starts
// actually used across the redesign are listed — extend deliberately, never
// interpolate a number into a class string.
export const COL_SPAN: Record<number, string> = {
  1: "lg:col-span-1",
  2: "lg:col-span-2",
  3: "lg:col-span-3",
  4: "lg:col-span-4",
  5: "lg:col-span-5",
  6: "lg:col-span-6",
  7: "lg:col-span-7",
  8: "lg:col-span-8",
  9: "lg:col-span-9",
  10: "lg:col-span-10",
  11: "lg:col-span-11",
  12: "lg:col-span-12",
};

// Purely visual vertical drift for a grid tile — a `transform`, not a
// margin, so it never perturbs the grid track's own height/gap math (the
// exact class of bug that broke the old Gallery: a margin-based offset on
// items whose span math didn't sum correctly). Safe to apply to any
// uniform-span grid.
export const OFFSET_Y: Record<-1 | 0 | 1, string> = {
  "-1": "lg:-translate-y-6",
  "0": "",
  "1": "lg:translate-y-6",
};

export const COL_START: Record<number, string> = {
  1: "lg:col-start-1",
  2: "lg:col-start-2",
  3: "lg:col-start-3",
  4: "lg:col-start-4",
  5: "lg:col-start-5",
  6: "lg:col-start-6",
  7: "lg:col-start-7",
  8: "lg:col-start-8",
  9: "lg:col-start-9",
  10: "lg:col-start-10",
  11: "lg:col-start-11",
  12: "lg:col-start-12",
};
