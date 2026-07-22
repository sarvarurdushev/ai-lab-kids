import type { BigIdea } from "./types";

/**
 * Illustrated art assets (public/images/), layered on top of the flat SVG
 * icon system for spots where a real picture reads faster than an icon +
 * label — one photo-real illustration per AI4K12 big idea, per new segment
 * type, per curriculum month, plus a few standalone hero shots.
 */
export const BIG_IDEA_IMAGE: Record<BigIdea, string> = {
  perception: "/images/big-ideas/perception.png",
  reasoning: "/images/big-ideas/reasoning.png",
  learning: "/images/big-ideas/learning.png",
  natural_interaction: "/images/big-ideas/natural_interaction.png",
  societal_impact: "/images/big-ideas/societal_impact.png",
};

export const SEGMENT_IMAGE = {
  movement: "/images/segments/movement.png",
  chant: "/images/segments/chant.png",
} as const;

/** Keyed by MonthlyUnit.key (see months.ts). */
export const MONTH_IMAGE: Record<string, string> = {
  m1_space: "/images/months/m1_space.png",
  m2_culture: "/images/months/m2_culture.png",
  m3_friends: "/images/months/m3_friends.png",
  m4_environment: "/images/months/m4_environment.png",
  m5_family: "/images/months/m5_family.png",
  m6_animals: "/images/months/m6_animals.png",
  m7_weather: "/images/months/m7_weather.png",
  m8_travel: "/images/months/m8_travel.png",
  m9_body: "/images/months/m9_body.png",
  m10_halloween: "/images/months/m10_halloween.png",
  m11_emotions: "/images/months/m11_emotions.png",
  m12_winter: "/images/months/m12_winter.png",
};

export const HERO_IMAGES = {
  classroom: "/images/hero/classroom.png",
  celebrate: "/images/hero/celebrate.png",
  voraWave: "/images/hero/vora-wave.png",
} as const;
