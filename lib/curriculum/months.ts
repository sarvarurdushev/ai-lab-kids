import type { MonthlyUnit } from "./types";

/**
 * The year-long themed curriculum: 12 months, each pairing one real-world
 * topic (adapted from a reference topic-based ELT curriculum for young
 * Korean learners) with one AI4K12 big idea, so AI literacy and English
 * are taught through the same monthly theme instead of as separate tracks.
 * Runs alongside — not instead of — the 8-week "Vora's Classroom"
 * foundations unit (see lib/curriculum/units.ts), which a class typically
 * completes first. See docs/MONTHLY_CURRICULUM.md for the full rationale
 * and docs/SCOPE_AND_SEQUENCE.md for the lesson-level map.
 */
export const MONTHS: MonthlyUnit[] = [
  {
    key: "m1_space",
    monthIndex: 1,
    title: "Space",
    posterTheme: "Space",
    bigIdeaFocus: "reasoning",
    englishFocus: "\"It's a ___.\" + space nouns",
    summary: "Stars, planets, and rockets — and how AI finds patterns in pictures of the night sky.",
  },
  {
    key: "m2_culture",
    monthIndex: 2,
    title: "Culture & Countries",
    posterTheme: "Culture",
    bigIdeaFocus: "societal_impact",
    englishFocus: "\"I'm from ___.\" + world/food/dance nouns",
    summary: "Countries, food, and dance from around the world — and how AI helps people who speak different languages understand each other.",
  },
  {
    key: "m3_friends",
    monthIndex: 3,
    title: "Friends",
    posterTheme: "Friends",
    bigIdeaFocus: "natural_interaction",
    englishFocus: "\"Can I play?\" / \"Let's share.\"",
    summary: "Making and keeping friends — and how a voice assistant listens and takes turns talking, just like a good friend does.",
  },
  {
    key: "m4_environment",
    monthIndex: 4,
    title: "Environment",
    posterTheme: "Environment",
    bigIdeaFocus: "learning",
    englishFocus: "\"We should / shouldn't ___.\"",
    summary: "Recycling and caring for the earth — and how AI learns from huge amounts of data to help scientists understand our climate.",
  },
  {
    key: "m5_family",
    monthIndex: 5,
    title: "Family",
    posterTheme: "Family",
    bigIdeaFocus: "perception",
    englishFocus: "\"This is my ___.\"",
    summary: "Introducing family members — and how face-recognition apps try (and sometimes fail) to tell people apart, unlike how you recognize your own family instantly.",
  },
  {
    key: "m6_animals",
    monthIndex: 6,
    title: "Animals",
    posterTheme: "Animals",
    bigIdeaFocus: "perception",
    englishFocus: "\"It's a big / small ___.\"",
    summary: "Wild animals around the world — and how wildlife cameras use AI to recognize which animal just walked by.",
  },
  {
    key: "m7_weather",
    monthIndex: 7,
    title: "Weather",
    posterTheme: "Weather",
    bigIdeaFocus: "reasoning",
    englishFocus: "\"It's ___ today.\"",
    summary: "Sun, rain, snow, and wind — and how weather forecasts are really just careful, pattern-based guesses about tomorrow.",
  },
  {
    key: "m8_travel",
    monthIndex: 8,
    title: "Travel",
    posterTheme: "Travel",
    bigIdeaFocus: "reasoning",
    englishFocus: "\"Let's go by ___.\"",
    summary: "Planes, trains, and packing a suitcase — and how a map app reasons its way to the fastest route, one step at a time.",
  },
  {
    key: "m9_body",
    monthIndex: 9,
    title: "My Body",
    posterTheme: "Body",
    bigIdeaFocus: "perception",
    englishFocus: "\"Touch your ___.\" (TPR chant)",
    summary: "Body parts through movement and song — and how motion-sensor games and fitness trackers sense when your body moves.",
  },
  {
    key: "m10_halloween",
    monthIndex: 10,
    title: "Halloween",
    posterTheme: "Halloween",
    bigIdeaFocus: "learning",
    englishFocus: "\"Trick or treat!\" / \"I'm a ___.\"",
    summary: "Costumes and spooky fun — and one more round of sorting practice, spooky vs. not-spooky, the same \"learn from examples\" idea Vora's used all year.",
  },
  {
    key: "m11_emotions",
    monthIndex: 11,
    title: "Emotions",
    posterTheme: "Emotions",
    bigIdeaFocus: "natural_interaction",
    englishFocus: "\"I feel ___.\"",
    summary: "Naming feelings — and an honest look at whether AI can really understand emotions, or just recognize a face shape.",
  },
  {
    key: "m12_winter",
    monthIndex: 12,
    title: "Winter Holidays",
    posterTheme: "Christmas",
    bigIdeaFocus: "societal_impact",
    englishFocus: "\"I want ___ for Christmas.\" (capstone review)",
    summary: "Snow, gifts, and holiday cheer — and a capstone that reviews every game and AI idea from the whole year.",
  },
];

export function getMonth(key: string): MonthlyUnit | undefined {
  return MONTHS.find((m) => m.key === key);
}

export function getMonthByIndex(monthIndex: number): MonthlyUnit | undefined {
  return MONTHS.find((m) => m.monthIndex === monthIndex);
}
