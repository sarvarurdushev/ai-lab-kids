import type { Unit } from "./types";

/**
 * "Vora's Classroom" — an 8-week, 24-lesson pilot unit (3 lessons/week)
 * teaching foundational English *through* AI literacy concepts, for Korean
 * elementary beginners (CEFR pre-A1/A1). See docs/SCOPE_AND_SEQUENCE.md for
 * the full teacher-facing curriculum map and docs/KOREAN_L1_NOTES.md for
 * the phonology/grammar targeting rationale behind each week's focus.
 */
export const UNITS: Unit[] = [
  {
    key: "u1_meet_vora",
    title: "Meet Vora",
    weekRange: [1, 1],
    summary: "Greetings, classroom objects, and the first big idea: what is AI?",
  },
  {
    key: "u2_animal_friends",
    title: "Animal Friends",
    weekRange: [2, 2],
    summary: "Animal vocabulary, how AI 'sees,' and listening practice for r/l.",
  },
  {
    key: "u3_colors_patterns",
    title: "Colors & Patterns",
    weekRange: [3, 3],
    summary: "Colors and shapes, why patterns matter to AI, and listening practice for f/p.",
  },
  {
    key: "u4_my_family",
    title: "My Family & Numbers",
    weekRange: [4, 4],
    summary: "Family words, counting, simple sentences (I have...), and listening practice for th.",
  },
  {
    key: "u5_food_choices",
    title: "Food & Choices",
    weekRange: [5, 5],
    summary: "Food vocabulary, sorting fruit vs. vegetable, and asking 'Do you like...?'",
  },
  {
    key: "u6_my_day",
    title: "My Day",
    weekRange: [6, 6],
    summary: "Daily routines, sequencing words (first/next/then/last), and algorithms.",
  },
  {
    key: "u7_robot_helpers",
    title: "Robot Helpers",
    weekRange: [7, 7],
    summary: "What robots can and can't do, simple can/can't sentences, and AI's limits.",
  },
  {
    key: "u8_show_what_you_know",
    title: "Show What You Know",
    weekRange: [8, 8],
    summary: "AI safety rules and a capstone showcase where kids 'teach' Vora something new.",
  },
];

export function getUnit(key: string): Unit | undefined {
  return UNITS.find((u) => u.key === key);
}
