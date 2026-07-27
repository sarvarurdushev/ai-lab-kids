import type { AgeTrack, Lesson } from "@/lib/curriculum/types";
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
import { ph_week15 } from "./lessons/week15";
import { ph_week16 } from "./lessons/week16";
import { ph_week17 } from "./lessons/week17";
import { ph_week18 } from "./lessons/week18";
import { ph_week19 } from "./lessons/week19";
import { ph_week20 } from "./lessons/week20";
import { ph_week21 } from "./lessons/week21";
import { ph_week22 } from "./lessons/week22";
import { ph_week23 } from "./lessons/week23";
import { ph_week24 } from "./lessons/week24";
import { ph_week25 } from "./lessons/week25";
import { ph_week26 } from "./lessons/week26";

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
 * yet taught by week N. Weeks 15-26 form "Unit 2": silent-e, vowel teams,
 * r-controlled vowels, and diphthongs, closing with a decodable mini
 * story. Unit 2 is Explorers (6+) only — see LESSON_MIN_TRACK below —
 * since long vowels aren't developmentally appropriate yet for Little
 * Sparks (4-5), who keep reviewing Unit 1 instead.
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
  ph_week15,
  ph_week16,
  ph_week17,
  ph_week18,
  ph_week19,
  ph_week20,
  ph_week21,
  ph_week22,
  ph_week23,
  ph_week24,
  ph_week25,
  ph_week26,
];

const PHONICS_BY_KEY = new Map(PHONICS_LESSONS.map((lesson) => [lesson.key, lesson]));

export function getPhonicsLesson(key: string): Lesson | undefined {
  return PHONICS_BY_KEY.get(key);
}

export function isPhonicsLessonAuthored(key: string): boolean {
  return PHONICS_BY_KEY.has(key);
}

/**
 * Whole-lesson track gating — something the shared trackContent.ts
 * filtering doesn't do (it only strips within-segment items, never drops
 * an entire segment or lesson). Unit 2 is listed here as Explorers-only.
 * The admin CMS still edits every lesson regardless — this only affects
 * what a teacher sees on the class page.
 */
const LESSON_MIN_TRACK: Partial<Record<string, AgeTrack>> = Object.fromEntries(
  [ph_week15, ph_week16, ph_week17, ph_week18, ph_week19, ph_week20, ph_week21, ph_week22, ph_week23, ph_week24, ph_week25, ph_week26].map(
    (lesson) => [lesson.key, "explorers" as const]
  )
);

export function phonicsLessonsForTrack(track: AgeTrack): Lesson[] {
  return PHONICS_LESSONS.filter((lesson) => !LESSON_MIN_TRACK[lesson.key] || LESSON_MIN_TRACK[lesson.key] === track);
}
