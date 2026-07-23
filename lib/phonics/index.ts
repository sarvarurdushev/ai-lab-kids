import type { Lesson } from "@/lib/curriculum/types";
import { ph_week1 } from "./lessons/week1";
import { ph_week2 } from "./lessons/week2";
import { ph_week3 } from "./lessons/week3";
import { ph_week4 } from "./lessons/week4";
import { ph_week5 } from "./lessons/week5";
import { ph_week6 } from "./lessons/week6";
import { ph_week7 } from "./lessons/week7";
import { ph_week8 } from "./lessons/week8";
import { ph_week9 } from "./lessons/week9";
import { ph_week10 } from "./lessons/week10";
import { ph_week11 } from "./lessons/week11";
import { ph_week12 } from "./lessons/week12";
import { ph_week13 } from "./lessons/week13";
import { ph_week14 } from "./lessons/week14";

/**
 * The standalone Phonics program's own lesson registry — deliberately
 * separate from lib/curriculum's AUTHORED_LESSONS so this program never
 * mixes into the AI+English curriculum's own lesson/activity counts (see
 * lib/curriculum/enginePresentation.ts's curriculumStats()). Reuses the
 * exact same Lesson type, Presentation Player, content-override system,
 * and lesson route as the AI+English program — only the content registry
 * is separate. Weeks 1-14 form "Unit 1": every letter sound, the four
 * consonant digraphs, every blend family, and the first heart words —
 * strictly cumulative, so week N's blending words never use a sound not
 * yet taught by week N.
 */
export const PHONICS_LESSONS: Lesson[] = [
  ph_week1,
  ph_week2,
  ph_week3,
  ph_week4,
  ph_week5,
  ph_week6,
  ph_week7,
  ph_week8,
  ph_week9,
  ph_week10,
  ph_week11,
  ph_week12,
  ph_week13,
  ph_week14,
];

const PHONICS_BY_KEY = new Map(PHONICS_LESSONS.map((lesson) => [lesson.key, lesson]));

export function getPhonicsLesson(key: string): Lesson | undefined {
  return PHONICS_BY_KEY.get(key);
}

export function isPhonicsLessonAuthored(key: string): boolean {
  return PHONICS_BY_KEY.has(key);
}
