import type { ReactNode } from "react";
import { Grid } from "./Grid";
import { Rule } from "./Rule";
import { TornEdge } from "./decor/TornEdge";

type Variant = "full" | "offset-left" | "offset-right" | "split" | "wide-bleed";
type Tone = "paper" | "tint-amber" | "tint-sky" | "ink";
type RuleAt = "top" | "bottom" | "both" | "none";
type Edge = "none" | "torn-top" | "torn-bottom" | "torn-both" | "curve-bottom";
type Size = "major" | "minor";

const TONE_BG: Record<Tone, string> = {
  paper: "bg-white",
  "tint-amber": "bg-amber-tint",
  "tint-sky": "bg-sky-tint",
  ink: "bg-terminal-bg",
};

const TONE_FILL: Record<Tone, string> = {
  paper: "fill-white",
  "tint-amber": "fill-amber-tint",
  "tint-sky": "fill-sky-tint",
  ink: "fill-terminal-bg",
};

const SIZE_PADDING: Record<Size, string> = {
  major: "py-20 sm:py-28 lg:py-36",
  minor: "py-14 sm:py-20",
};

/**
 * The workhorse behind "broken grid / asymmetrical / not-a-rectangle": every
 * section on the public surface goes through this rather than being a plain
 * <section>. `variant` names the intended composition (offset-left/right,
 * split, wide-bleed) — it doesn't hard-code column math itself, since that
 * lives in how the caller places its own <GridItem>s inside; for anything
 * but "wide-bleed" it just wraps children in the shared 12-col <Grid>, so
 * the variant name documents intent at each call site (e.g. an
 * offset-left hero places its GridItem at span 7 starting col 1).
 * "wide-bleed" skips the Grid wrapper entirely so a child can escape the
 * max-width via its own negative margin.
 */
export function Section({
  variant = "full",
  tone = "paper",
  rule = "none",
  edge = "none",
  size = "major",
  children,
  className = "",
  id,
}: {
  variant?: Variant;
  tone?: Tone;
  rule?: RuleAt;
  edge?: Edge;
  size?: Size;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const content = variant === "wide-bleed" ? children : <Grid>{children}</Grid>;

  return (
    <section id={id} className={`relative ${TONE_BG[tone]} ${SIZE_PADDING[size]} ${className}`}>
      {(edge === "torn-top" || edge === "torn-both") && <TornEdge position="top" fill={TONE_FILL[tone]} />}
      {edge === "curve-bottom" && <CurveBottom fill={TONE_FILL[tone]} />}
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12 xl:px-16">
        {(rule === "top" || rule === "both") && <Rule className="mb-10 sm:mb-14" />}
        {content}
        {(rule === "bottom" || rule === "both") && <Rule className="mt-10 sm:mt-14" />}
      </div>
      {(edge === "torn-bottom" || edge === "torn-both") && <TornEdge position="bottom" fill={TONE_FILL[tone]} />}
    </section>
  );
}

/** A smooth downward curve painted over the section's lower boundary, in the destination section's fill — the "organic flow between sections" the brief asks for as an alternative to a hard rule. */
function CurveBottom({ fill }: { fill: string }) {
  return (
    <svg
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 -bottom-px h-12 w-full"
    >
      <path d="M0,0 C 300,60 900,60 1200,0 L1200,60 L0,60 Z" className={fill} />
    </svg>
  );
}
