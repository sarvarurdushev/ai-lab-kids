"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ruleReveal, VIEWPORT_ITEM } from "./motion";

/** A 1px hairline divider — the editorial surface's signature rule line. */
export function Rule({
  label,
  align = "left",
  animate = false,
  className = "",
}: {
  label?: ReactNode;
  align?: "left" | "center";
  animate?: boolean;
  className?: string;
}) {
  return <RuleInner label={label} align={align} animate={animate} className={className} />;
}

function RuleInner({
  label,
  align,
  animate,
  className,
}: {
  label?: ReactNode;
  align: "left" | "center";
  animate: boolean;
  className: string;
}) {
  const reduce = useReducedMotion();
  const line = animate && !reduce ? (
    <motion.div
      className="h-px w-full origin-left bg-rule"
      variants={ruleReveal}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_ITEM}
    />
  ) : (
    <div className="h-px w-full bg-rule" />
  );

  if (!label) return <div className={className}>{line}</div>;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {align === "center" && <div className="flex-1">{line}</div>}
      <p className="shrink-0 text-[11px] font-bold tracking-[0.18em] whitespace-nowrap text-navy/70 uppercase">{label}</p>
      <div className="flex-1">{line}</div>
    </div>
  );
}
