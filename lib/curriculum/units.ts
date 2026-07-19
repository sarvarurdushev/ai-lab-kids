import type { Unit } from "./types";

/**
 * "Robi's Classroom" — an 8-week, 24-lesson pilot unit (3 lessons/week)
 * teaching foundational English *through* AI literacy concepts, for Korean
 * elementary beginners (CEFR pre-A1/A1). See docs/SCOPE_AND_SEQUENCE.md for
 * the full teacher-facing curriculum map and docs/KOREAN_L1_NOTES.md for
 * the phonology/grammar targeting rationale behind each week's focus.
 */
export const UNITS: Unit[] = [
  {
    key: "u1_meet_robi",
    title: { en: "Meet Robi", ko: "로비를 만나요" },
    weekRange: [1, 1],
    summary: {
      en: "Greetings, classroom objects, and the first big idea: what is AI?",
      ko: "인사말, 교실 물건, 그리고 첫 번째 핵심 개념: AI란 무엇일까요?",
    },
  },
  {
    key: "u2_animal_friends",
    title: { en: "Animal Friends", ko: "동물 친구들" },
    weekRange: [2, 2],
    summary: {
      en: "Animal vocabulary, how AI 'sees,' and listening practice for r/l.",
      ko: "동물 어휘, AI가 '보는' 방법, 그리고 r/l 발음 듣기 연습.",
    },
  },
  {
    key: "u3_colors_patterns",
    title: { en: "Colors & Patterns", ko: "색깔과 패턴" },
    weekRange: [3, 3],
    summary: {
      en: "Colors and shapes, why patterns matter to AI, and listening practice for f/p.",
      ko: "색깔과 모양, 패턴이 AI에게 왜 중요한지, 그리고 f/p 발음 듣기 연습.",
    },
  },
  {
    key: "u4_my_family",
    title: { en: "My Family & Numbers", ko: "우리 가족과 숫자" },
    weekRange: [4, 4],
    summary: {
      en: "Family words, counting, simple sentences (I have...), and listening practice for th.",
      ko: "가족 단어, 숫자 세기, 간단한 문장(I have...), 그리고 th 발음 듣기 연습.",
    },
  },
  {
    key: "u5_food_choices",
    title: { en: "Food & Choices", ko: "음식과 선택" },
    weekRange: [5, 5],
    summary: {
      en: "Food vocabulary, sorting fruit vs. vegetable, and asking 'Do you like...?'",
      ko: "음식 어휘, 과일과 채소 분류하기, 그리고 'Do you like...?' 질문하기.",
    },
  },
  {
    key: "u6_my_day",
    title: { en: "My Day", ko: "나의 하루" },
    weekRange: [6, 6],
    summary: {
      en: "Daily routines, sequencing words (first/next/then/last), and algorithms.",
      ko: "일상 루틴, 순서 표현(first/next/then/last), 그리고 알고리즘.",
    },
  },
  {
    key: "u7_robot_helpers",
    title: { en: "Robot Helpers", ko: "로봇 도우미" },
    weekRange: [7, 7],
    summary: {
      en: "What robots can and can't do, simple can/can't sentences, and AI's limits.",
      ko: "로봇이 할 수 있는 일과 없는 일, can/can't 문장, 그리고 AI의 한계.",
    },
  },
  {
    key: "u8_show_what_you_know",
    title: { en: "Show What You Know", ko: "배운 것을 보여줘요" },
    weekRange: [8, 8],
    summary: {
      en: "AI safety rules and a capstone showcase where kids 'teach' Robi something new.",
      ko: "AI 안전 수칙과, 아이들이 로비에게 새로운 것을 '가르치는' 마무리 발표.",
    },
  },
];

export function getUnit(key: string): Unit | undefined {
  return UNITS.find((u) => u.key === key);
}
