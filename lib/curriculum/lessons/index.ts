import type { Lesson } from "../types";
import { w1d1_hello_robi, w1d2_robis_classroom, w1d3_what_is_ai } from "./week1";
import { w2d1_animal_safari, w2d2_how_does_robi_see, w2d3_light_or_right } from "./week2";
import { w4d2_count_with_robi } from "./week4";
import { w6d2_give_robi_the_steps } from "./week6";

/**
 * Lessons with full segment-by-segment content, ready to run in the
 * Presentation Player. Everything else in SCOPE_AND_SEQUENCE is planned
 * (real metadata, standards mapping, Korean L1 notes) but not yet authored
 * at this level of detail — see docs/SCOPE_AND_SEQUENCE.md for the honest
 * breakdown of what's built vs. planned.
 */
export const AUTHORED_LESSONS: Lesson[] = [
  w1d1_hello_robi,
  w1d2_robis_classroom,
  w1d3_what_is_ai,
  w2d1_animal_safari,
  w2d2_how_does_robi_see,
  w2d3_light_or_right,
  w4d2_count_with_robi,
  w6d2_give_robi_the_steps,
];

const AUTHORED_BY_KEY = new Map(AUTHORED_LESSONS.map((l) => [l.key, l]));

export function getLesson(key: string): Lesson | undefined {
  return AUTHORED_BY_KEY.get(key);
}

export function isLessonAuthored(key: string): boolean {
  return AUTHORED_BY_KEY.has(key);
}
