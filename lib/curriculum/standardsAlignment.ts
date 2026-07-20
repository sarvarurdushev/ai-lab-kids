import type { ActivityEngine, BigIdea, Bilingual } from "./types";
import { AUTHORED_LESSONS } from "./lessons/index";
import { BIG_IDEA_PRESENTATION, resolveBigIdea } from "./bigIdeaPresentation";

/**
 * Which framework each activity engine is built against, and why —
 * extracted out of components/curriculum/AICurriculumPanel.tsx so that
 * panel and app/curriculum/page.tsx read from one source and can't drift
 * apart as engines change. See docs/AI_CURRICULUM.md "Standards
 * alignment" for the research citations behind each line.
 */
export interface StandardsMapping {
  engine: ActivityEngine;
  activityLabel: Bilingual;
  standardLine: Bilingual;
}

export const STANDARDS_ALIGNMENT: StandardsMapping[] = [
  {
    engine: "ai_or_not",
    activityLabel: { en: "AI Lab · Is It AI?", ko: "AI 랩 · AI일까요?" },
    standardLine: {
      en: "Real-world AI recognition, matching ISTE's elementary recommendation to identify AI in daily life, and AI4K12 Big Idea 5 (Societal Impact).",
      ko: "실생활 속 AI를 알아보는 활동으로, ISTE의 초등 AI 인식 지침과 AI4K12의 다섯 번째 핵심 개념(사회적 영향)에 해당해요.",
    },
  },
  {
    engine: "instruct_vora",
    activityLabel: { en: "AI Lab · Clear Instructions", ko: "AI 랩 · 분명한 지시" },
    standardLine: {
      en: "Precise-instruction practice, matching the UNESCO AI Competency Framework's \"AI techniques and applications\" / \"AI system design\" dimensions.",
      ko: "정확한 지시를 연습하는 활동으로, UNESCO AI 역량 프레임워크의 'AI 기술과 응용' / 'AI 시스템 설계' 영역에 해당해요.",
    },
  },
  {
    engine: "train_the_robot",
    activityLabel: { en: "Sorting Game (Train the Robot)", ko: "분류 게임 (로봇 훈련시키기)" },
    standardLine: {
      en: "Kids label training examples, then test Vora on unseen ones and see why mistakes happen — CSTA 1B-DA-06, AI4K12 Big Ideas 1 & 3 (Perception, Learning).",
      ko: "학생들이 훈련 예시에 이름표를 붙이고, 새로운 예시로 보라를 테스트하며 실수의 이유를 배워요 — CSTA 1B-DA-06, AI4K12 핵심 개념 1과 3(지각, 학습)에 해당해요.",
    },
  },
  {
    engine: "pattern_predictor",
    activityLabel: { en: "Pattern Game", ko: "패턴 게임" },
    standardLine: {
      en: "Finding a rule in examples to predict what comes next — AI4K12 Big Idea 2 (Representation & Reasoning).",
      ko: "예시에서 규칙을 찾아 다음에 올 것을 예측하는 활동 — AI4K12 핵심 개념 2(표현과 추론)에 해당해요.",
    },
  },
];

export interface BigIdeaCoverage {
  bigIdea: BigIdea;
  lessonCount: number;
}

/**
 * How many authored lessons touch each AI4K12 Big Idea, computed from
 * AUTHORED_LESSONS (never hardcoded) so "5/5 Big Ideas covered" can't
 * become marketing fiction as content changes — same anti-drift principle
 * as curriculumStats() in enginePresentation.ts.
 */
export function bigIdeaCoverage(): BigIdeaCoverage[] {
  const counts: Record<BigIdea, number> = {
    perception: 0,
    reasoning: 0,
    learning: 0,
    natural_interaction: 0,
    societal_impact: 0,
  };
  for (const lesson of AUTHORED_LESSONS) {
    const bigIdea = resolveBigIdea(lesson);
    if (bigIdea) counts[bigIdea]++;
  }
  return (Object.keys(BIG_IDEA_PRESENTATION) as BigIdea[]).map((bigIdea) => ({
    bigIdea,
    lessonCount: counts[bigIdea],
  }));
}
