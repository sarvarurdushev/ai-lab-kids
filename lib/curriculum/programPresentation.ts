import type { Bilingual, MonthlySlot } from "./types";

/**
 * Presentation-only reframing of the year curriculum as a designed
 * program — Units, week roles, and Terms — instead of "Month N" / "Week
 * 1-4" labels over a flat list. No data-model change: monthIndex and slot
 * already carry everything needed, this just names them like a syllabus.
 * Consumed by app/(console)/classes/[classId]/page.tsx and
 * app/curriculum/page.tsx so the two surfaces can't say different things.
 */

export const CHECKPOINT_MONTHS = [3, 6, 9, 12];

const WEEK_ROLE_LABEL: Record<MonthlySlot, Bilingual> = {
  week1: { en: "Week 1 · Learn", ko: "1주차 · 배우기" },
  week2: { en: "Week 2 · Play & Practice", ko: "2주차 · 놀이와 연습" },
  week3: { en: "Week 3 · Second Pass", ko: "3주차 · 두 번째 연습" },
  week4: { en: "Week 4 · Speak Up", ko: "4주차 · 말하기" },
};

const CHECKPOINT_WEEK4_LABEL: Bilingual = { en: "Week 4 · Listening Checkpoint", ko: "4주차 · 듣기 점검" };

/** week4 doubles as a quarterly L1-listening checkpoint on months 3/6/9/12 — see lib/curriculum/l1Targets.ts. */
export function weekRoleLabel(monthIndex: number, slot: MonthlySlot): Bilingual {
  if (slot === "week4" && CHECKPOINT_MONTHS.includes(monthIndex)) return CHECKPOINT_WEEK4_LABEL;
  return WEEK_ROLE_LABEL[slot];
}

export function unitLabel(monthIndex: number): string {
  return `Unit ${monthIndex}`;
}

export interface Term {
  termIndex: number;
  monthRange: [number, number];
  checkpointMonth: number;
  checkpointLabel: Bilingual;
}

/** Four terms of three units each, each ending on one of the quarterly listening checkpoints. */
export const TERMS: Term[] = [
  {
    termIndex: 1,
    monthRange: [1, 3],
    checkpointMonth: 3,
    checkpointLabel: { en: "Listening Checkpoint 1 · l / r", ko: "듣기 점검 1 · l / r" },
  },
  {
    termIndex: 2,
    monthRange: [4, 6],
    checkpointMonth: 6,
    checkpointLabel: { en: "Listening Checkpoint 2 · f / p", ko: "듣기 점검 2 · f / p" },
  },
  {
    termIndex: 3,
    monthRange: [7, 9],
    checkpointMonth: 9,
    checkpointLabel: { en: "Listening Checkpoint 3 · th / s", ko: "듣기 점검 3 · th / s" },
  },
  {
    termIndex: 4,
    monthRange: [10, 12],
    checkpointMonth: 12,
    checkpointLabel: { en: "Listening Checkpoint 4 · v / b + Capstone Review", ko: "듣기 점검 4 · v / b + 종합 복습" },
  },
];

export function termForMonth(monthIndex: number): Term | undefined {
  return TERMS.find((t) => monthIndex >= t.monthRange[0] && monthIndex <= t.monthRange[1]);
}

export const PROGRAM_ARC: Bilingual = {
  en: "8-week Foundations unit → 12 themed Units across 4 Terms, each ending on a listening checkpoint → Month 12 capstone review.",
  ko: "8주 기초 과정 → 4개 학기로 나뉜 12개 테마 유닛(학기마다 듣기 점검으로 마무리) → 12개월 차 종합 복습.",
};
