import type { Lesson } from "@/lib/curriculum/types";
import { ph_week1 } from "./lessons/week1";

/**
 * The standalone Phonics program's own lesson registry — deliberately
 * separate from lib/curriculum's AUTHORED_LESSONS so this new, still
 * one-week program never mixes into the AI+English curriculum's own
 * lesson/activity counts (see lib/curriculum/enginePresentation.ts's
 * curriculumStats()). Reuses the exact same Lesson type, Presentation
 * Player, content-override system, and lesson route as the AI+English
 * program — only the content registry is separate.
 */
export const PHONICS_LESSONS: Lesson[] = [ph_week1];

const PHONICS_BY_KEY = new Map(PHONICS_LESSONS.map((lesson) => [lesson.key, lesson]));

export function getPhonicsLesson(key: string): Lesson | undefined {
  return PHONICS_BY_KEY.get(key);
}

export function isPhonicsLessonAuthored(key: string): boolean {
  return PHONICS_BY_KEY.has(key);
}
