import type { Lesson } from "../types";
import { w1d1_hello_robi, w1d2_robis_classroom, w1d3_what_is_ai } from "./week1";
import { w2d1_animal_safari, w2d2_how_does_robi_see, w2d3_light_or_right } from "./week2";
import { w3d1_rainbow_colors, w3d2_robi_finds_pattern, w3d3_fan_or_pan } from "./week3";
import { w4d1_my_family, w4d2_count_with_robi, w4d3_think_or_sink } from "./week4";
import { w5d1_yummy_food, w5d2_fruit_or_vegetable, w5d3_do_you_like } from "./week5";
import { w6d1_my_morning, w6d2_give_robi_the_steps, w6d3_bedtime_routine } from "./week6";
import { w7d1_what_can_robots_do, w7d2_robots_at_home_and_school, w7d3_robi_makes_a_mistake } from "./week7";
import { w8d1_talking_to_ai_safely, w8d2_review_carnival, w8d3_teach_robi_day } from "./week8";

/**
 * All 24 lessons of "Robi's Classroom," fully authored and playable in the
 * Presentation Player. See docs/SCOPE_AND_SEQUENCE.md for the curriculum
 * map this mirrors.
 */
export const AUTHORED_LESSONS: Lesson[] = [
  w1d1_hello_robi,
  w1d2_robis_classroom,
  w1d3_what_is_ai,
  w2d1_animal_safari,
  w2d2_how_does_robi_see,
  w2d3_light_or_right,
  w3d1_rainbow_colors,
  w3d2_robi_finds_pattern,
  w3d3_fan_or_pan,
  w4d1_my_family,
  w4d2_count_with_robi,
  w4d3_think_or_sink,
  w5d1_yummy_food,
  w5d2_fruit_or_vegetable,
  w5d3_do_you_like,
  w6d1_my_morning,
  w6d2_give_robi_the_steps,
  w6d3_bedtime_routine,
  w7d1_what_can_robots_do,
  w7d2_robots_at_home_and_school,
  w7d3_robi_makes_a_mistake,
  w8d1_talking_to_ai_safely,
  w8d2_review_carnival,
  w8d3_teach_robi_day,
];

const AUTHORED_BY_KEY = new Map(AUTHORED_LESSONS.map((l) => [l.key, l]));

export function getLesson(key: string): Lesson | undefined {
  return AUTHORED_BY_KEY.get(key);
}

export function isLessonAuthored(key: string): boolean {
  return AUTHORED_BY_KEY.has(key);
}
