import type { BigIdea, Bilingual, LessonMeta } from "./types";
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
  label: Bilingual;
  /** One plain sentence a teacher can read straight off the screen — the answer to "how is this AI?" */
  kidLine: Bilingual;
  badgeClass: string;
  bannerClass: string;
  accentClass: string;
}

export const BIG_IDEA_PRESENTATION: Record<BigIdea, BigIdeaPresentation> = {
  perception: {
    emoji: "👀",
    label: { en: "Perception", ko: "지각" },
    kidLine: {
      en: "This is AI perception — how Vora notices and makes sense of what it sees or hears.",
      ko: "이건 AI의 '지각'이에요 — 보라가 보고 듣는 것을 알아차리고 이해하는 방법이에요.",
    },
    badgeClass: "bg-sky/15 text-sky",
    bannerClass: "bg-sky/10 border-sky/30",
    accentClass: "border-sky",
  },
  reasoning: {
    emoji: "🧩",
    label: { en: "Reasoning", ko: "추론" },
    kidLine: {
      en: "This is AI reasoning — how Vora finds a pattern and figures out what comes next.",
      ko: "이건 AI의 '추론'이에요 — 보라가 패턴을 찾아 다음에 올 것을 알아내는 방법이에요.",
    },
    badgeClass: "bg-indigo/15 text-indigo-dark",
    bannerClass: "bg-indigo/10 border-indigo/30",
    accentClass: "border-indigo",
  },
  learning: {
    emoji: "🌱",
    label: { en: "Learning", ko: "학습" },
    kidLine: {
      en: "This is AI learning — how Vora gets better by seeing lots of examples, and sometimes still guesses wrong.",
      ko: "이건 AI의 '학습'이에요 — 보라가 많은 예시를 보며 점점 더 잘하게 되고, 가끔은 틀리게 추측하기도 해요.",
    },
    badgeClass: "bg-mint/15 text-mint",
    bannerClass: "bg-mint/10 border-mint/30",
    accentClass: "border-mint",
  },
  natural_interaction: {
    emoji: "💬",
    label: { en: "Natural Interaction", ko: "자연스러운 상호작용" },
    kidLine: {
      en: "This is AI natural interaction — how Vora listens, waits its turn, and talks back like a friend.",
      ko: "이건 AI의 '자연스러운 상호작용'이에요 — 보라가 친구처럼 듣고, 차례를 기다리고, 대답하는 방법이에요.",
    },
    badgeClass: "bg-coral/15 text-coral",
    bannerClass: "bg-coral/10 border-coral/30",
    accentClass: "border-coral",
  },
  societal_impact: {
    emoji: "🌍",
    label: { en: "Societal Impact", ko: "사회적 영향" },
    kidLine: {
      en: "This is AI in real life — a real place AI helpers actually show up for people.",
      ko: "이건 실제 생활 속의 AI예요 — 실제로 AI 도우미가 사람들을 돕는 곳이에요.",
    },
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
