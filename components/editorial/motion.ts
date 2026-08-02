// Shared Framer Motion variants for the public/editorial surface
// (components/editorial/**). One place for the animation language so every
// section moves the same way — consistency is what reads as "elegant," not
// per-component variety. See MatrixRain.tsx for the precedent this follows:
// prefers-reduced-motion is handled by rendering the static end-state, never
// by skipping the animation outright (that would strand content at
// opacity: 0 forever) — every duration below must be gated with
// `reduce ? 0 : <duration>`, not conditionally omitted.

export const EASE = [0.16, 1, 0.3, 1] as const; // the repo's house easing (already used in Marketing.tsx / Vora.tsx)

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const fadeUpSmall = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 240, damping: 22 } },
};

export const drawPath = {
  hidden: { pathLength: 0, opacity: 0 },
  show: { pathLength: 1, opacity: 1, transition: { duration: 1.4, ease: EASE } },
};

export const ruleReveal = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.8, ease: EASE } },
};

export function stagger(each = 0.07, delay = 0.05) {
  return { hidden: {}, show: { transition: { staggerChildren: each, delayChildren: delay } } };
}

export const VIEWPORT_SECTION = { once: true, amount: 0.3 } as const;
export const VIEWPORT_ITEM = { once: true, amount: 0.5 } as const;
