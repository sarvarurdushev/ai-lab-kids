import type { BigIdea, LessonMeta } from "./types";
import { getMonth } from "./months";

/**
 * Visual identity for each AI4K12 big idea, used everywhere a lesson's AI
 * concept needs to be *seen*, not just labeled — the month browser, lesson
 * rows, and a persistent banner in the Presentation Player (see
 * components/curriculum/BigIdeaBanner.tsx). Every class name below is a
 * literal Tailwind utility (never string-templated) so Tailwind's compiler
 * picks it up — see app/globals.css for the underlying color tokens.
 */
export interface BigIdeaPresentation {
  emoji: string;
  label: string;
  /** A short phrase a teacher can read straight off the screen — kept to a handful of words, not a full explanation, since this age can't follow multi-clause abstraction. */
  kidLine: string;
  badgeClass: string;
  bannerClass: string;
  accentClass: string;
}

export const BIG_IDEA_PRESENTATION: Record<BigIdea, BigIdeaPresentation> = {
  perception: {
    emoji: "👀",
    label: "Perception",
    kidLine: "Vora sees and hears!",
    badgeClass: "bg-sky/15 text-sky",
    bannerClass: "bg-sky/10 border-sky/30",
    accentClass: "border-sky",
  },
  reasoning: {
    emoji: "🧩",
    label: "Reasoning",
    kidLine: "Vora finds the pattern!",
    badgeClass: "bg-indigo/15 text-indigo-dark",
    bannerClass: "bg-indigo/10 border-indigo/30",
    accentClass: "border-indigo",
  },
  learning: {
    emoji: "🌱",
    label: "Learning",
    kidLine: "Vora learns from examples!",
    badgeClass: "bg-mint/15 text-mint",
    bannerClass: "bg-mint/10 border-mint/30",
    accentClass: "border-mint",
  },
  natural_interaction: {
    emoji: "💬",
    label: "Talking with AI",
    kidLine: "Vora listens, then talks!",
    badgeClass: "bg-coral/15 text-coral",
    bannerClass: "bg-coral/10 border-coral/30",
    accentClass: "border-coral",
  },
  societal_impact: {
    emoji: "🌍",
    label: "AI in Real Life",
    kidLine: "AI helpers are everywhere!",
    badgeClass: "bg-amber/20 text-amber-dark",
    bannerClass: "bg-amber/10 border-amber/40",
    accentClass: "border-amber",
  },
};

/**
 * The AI big idea a lesson row/banner should show: the lesson's own
 * `bigIdeas[0]` if it has one, otherwise (mainly `action_play`/`spotlight`
 * monthly lessons, which teach the idea through play rather than a concept
 * segment) the parent month's `bigIdeaFocus`. Foundations-unit lessons with
 * no big idea and no parent month (e.g. purely-English lessons like colors)
 * correctly resolve to undefined — not every lesson needs to force one.
 */
export function resolveBigIdea(lesson: LessonMeta): BigIdea | undefined {
  if (lesson.bigIdeas[0]) return lesson.bigIdeas[0];
  const month = getMonth(lesson.unitKey);
  return month?.bigIdeaFocus;
}
