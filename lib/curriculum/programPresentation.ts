import type { MonthlySlot } from "./types";

/**
 * Presentation-only reframing of the year curriculum as a designed
 * program — Units, week roles, and Terms — instead of "Month N" / "Week
 * 1-4" labels over a flat list. No data-model change: monthIndex and slot
 * already carry everything needed, this just names them like a syllabus.
 * Consumed by app/(console)/classes/[classId]/page.tsx and
 * app/curriculum/page.tsx so the two surfaces can't say different things.
 */

export const CHECKPOINT_MONTHS = [3, 6, 9, 12];

const WEEK_ROLE_LABEL: Record<MonthlySlot, string> = {
  week1: "Week 1 · Learn",
  week2: "Week 2 · Play & Practice",
  week3: "Week 3 · Second Pass",
  week4: "Week 4 · Speak Up",
};

const CHECKPOINT_WEEK4_LABEL = "Week 4 · Listening Checkpoint";

/** week4 doubles as a quarterly listening checkpoint on months 3/6/9/12, reviewing a specific pronunciation contrast — see docs/KOREAN_L1_NOTES.md. */
export function weekRoleLabel(monthIndex: number, slot: MonthlySlot): string {
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
  checkpointLabel: string;
}

/** Four terms of three units each, each ending on one of the quarterly listening checkpoints. */
export const TERMS: Term[] = [
  { termIndex: 1, monthRange: [1, 3], checkpointMonth: 3, checkpointLabel: "Listening Checkpoint 1 · l / r" },
  { termIndex: 2, monthRange: [4, 6], checkpointMonth: 6, checkpointLabel: "Listening Checkpoint 2 · f / p" },
  { termIndex: 3, monthRange: [7, 9], checkpointMonth: 9, checkpointLabel: "Listening Checkpoint 3 · th / s" },
  {
    termIndex: 4,
    monthRange: [10, 12],
    checkpointMonth: 12,
    checkpointLabel: "Listening Checkpoint 4 · v / b + Capstone Review",
  },
];

export function termForMonth(monthIndex: number): Term | undefined {
  return TERMS.find((t) => monthIndex >= t.monthRange[0] && monthIndex <= t.monthRange[1]);
}

export const PROGRAM_ARC =
  "8-week Foundations unit → 12 themed Units across 4 Terms, each ending on a listening checkpoint → Month 12 capstone review.";
