import type { ReactNode } from "react";
import type { Tilt } from "./tokens";
import { TILT } from "./tokens";
import { TornEdge } from "./decor/TornEdge";

type Variant = "bare" | "ruled" | "outlined" | "torn" | "tinted";

/**
 * The deliberate anti-Card: components/ui/Card.tsx is rounded-2xl,
 * shadowed, and used everywhere in the console — this is its editorial
 * opposite. "bare" (no border/shadow/background) is the default, per the
 * brief's "avoid too many cards." Never rounded-2xl/3xl — see the radius
 * policy in the design tokens: pills for anything clickable, square corners
 * for everything structural, rounded-xl reserved for TerminalCard and form
 * inputs only.
 */
export function Panel({
  variant = "bare",
  tint = "amber",
  tilt = 0,
  children,
  className = "",
}: {
  variant?: Variant;
  tint?: "amber" | "sky";
  tilt?: Tilt;
  children: ReactNode;
  className?: string;
}) {
  if (variant === "bare") return <div className={className}>{children}</div>;

  if (variant === "ruled") {
    return <div className={`border-t border-rule pt-6 ${className}`}>{children}</div>;
  }

  if (variant === "outlined") {
    return <div className={`border border-navy/12 p-6 sm:p-8 ${className}`}>{children}</div>;
  }

  if (variant === "tinted") {
    return <div className={`${tint === "amber" ? "bg-amber-tint" : "bg-sky-tint"} p-6 sm:p-8 ${className}`}>{children}</div>;
  }

  // torn: the paper-collage card — white fill, layered shadow, torn top/bottom edges, slight tilt
  return (
    <div className={`relative bg-white p-6 shadow-paper sm:p-8 ${TILT[tilt]} ${className}`}>
      <TornEdge position="top" fill="fill-white" />
      {children}
      <TornEdge position="bottom" fill="fill-white" />
    </div>
  );
}
