import type { Lesson } from "../types";
import { w1d1_hello_vora, w1d2_voras_classroom, w1d3_what_is_ai } from "./week1";
import { w2d1_animal_safari, w2d2_how_does_vora_see, w2d3_light_or_right } from "./week2";
import { w3d1_rainbow_colors, w3d2_vora_finds_pattern, w3d3_fan_or_pan } from "./week3";
import { w4d1_my_family, w4d2_count_with_vora, w4d3_think_or_sink } from "./week4";
import { w5d1_yummy_food, w5d2_fruit_or_vegetable, w5d3_do_you_like } from "./week5";
import { w6d1_my_morning, w6d2_give_vora_the_steps, w6d3_bedtime_routine } from "./week6";
import { w7d1_what_can_robots_do, w7d2_robots_at_home_and_school, w7d3_vora_makes_a_mistake } from "./week7";
import { w8d1_talking_to_ai_safely, w8d2_review_carnival, w8d3_teach_vora_day } from "./week8";
import { m1_week1, m1_week2, m1_week3, m1_week4 } from "./month1";
import { m2_week1, m2_week2, m2_week3, m2_week4 } from "./month2";
import { m3_week1, m3_week2, m3_week3, m3_week4 } from "./month3";
import { m4_week1, m4_week2, m4_week3, m4_week4 } from "./month4";
import { m5_week1, m5_week2, m5_week3, m5_week4 } from "./month5";
import { m6_week1, m6_week2, m6_week3, m6_week4 } from "./month6";
import { m7_week1, m7_week2, m7_week3, m7_week4 } from "./month7";
import { m8_week1, m8_week2, m8_week3, m8_week4 } from "./month8";
import { m9_week1, m9_week2, m9_week3, m9_week4 } from "./month9";
import { m10_week1, m10_week2, m10_week3, m10_week4 } from "./month10";
import { m11_week1, m11_week2, m11_week3, m11_week4 } from "./month11";
import { m12_week1, m12_week2, m12_week3, m12_week4 } from "./month12";

/**
 * All 24 lessons of "Vora's Classroom" (the foundations unit) plus all 48
 * lessons of the 12-month, 4-weekly-lessons-per-month year curriculum,
 * fully authored and playable in the Presentation Player. See
 * docs/SCOPE_AND_SEQUENCE.md and docs/MONTHLY_CURRICULUM.md for the
 * curriculum maps these mirror.
 */
export const AUTHORED_LESSONS: Lesson[] = [
  w1d1_hello_vora,
  w1d2_voras_classroom,
  w1d3_what_is_ai,
  w2d1_animal_safari,
  w2d2_how_does_vora_see,
  w2d3_light_or_right,
  w3d1_rainbow_colors,
  w3d2_vora_finds_pattern,
  w3d3_fan_or_pan,
  w4d1_my_family,
  w4d2_count_with_vora,
  w4d3_think_or_sink,
  w5d1_yummy_food,
  w5d2_fruit_or_vegetable,
  w5d3_do_you_like,
  w6d1_my_morning,
  w6d2_give_vora_the_steps,
  w6d3_bedtime_routine,
  w7d1_what_can_robots_do,
  w7d2_robots_at_home_and_school,
  w7d3_vora_makes_a_mistake,
  w8d1_talking_to_ai_safely,
  w8d2_review_carnival,
  w8d3_teach_vora_day,
  m1_week1,
  m1_week2,
  m1_week3,
  m1_week4,
  m2_week1,
  m2_week2,
  m2_week3,
  m2_week4,
  m3_week1,
  m3_week2,
  m3_week3,
  m3_week4,
  m4_week1,
  m4_week2,
  m4_week3,
  m4_week4,
  m5_week1,
  m5_week2,
  m5_week3,
  m5_week4,
  m6_week1,
  m6_week2,
  m6_week3,
  m6_week4,
  m7_week1,
  m7_week2,
  m7_week3,
  m7_week4,
  m8_week1,
  m8_week2,
  m8_week3,
  m8_week4,
  m9_week1,
  m9_week2,
  m9_week3,
  m9_week4,
  m10_week1,
  m10_week2,
  m10_week3,
  m10_week4,
  m11_week1,
  m11_week2,
  m11_week3,
  m11_week4,
  m12_week1,
  m12_week2,
  m12_week3,
  m12_week4,
];

const AUTHORED_BY_KEY = new Map(AUTHORED_LESSONS.map((l) => [l.key, l]));

export function getLesson(key: string): Lesson | undefined {
  return AUTHORED_BY_KEY.get(key);
}

export function isLessonAuthored(key: string): boolean {
  return AUTHORED_BY_KEY.has(key);
}
