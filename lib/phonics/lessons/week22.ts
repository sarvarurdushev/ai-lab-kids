import type { Lesson } from "@/lib/curriculum/types";

/** Phonics Unit 2, week 8 — r-controlled vowel: or. Explorers (6+) only. */
export const ph_week22: Lesson = {
  key: "ph_week22",
  unitKey: "phonics_vowel_teams",
  title: "R-Controlled Vowels: or",
  bigIdeas: [],
  englishFocus: "Learning that 'or' makes its own sound, different from 'o' alone.",
  koreanL1Note: "Same idea as last week's ar — 'r' changing the vowel in front of it rather than being a separate sound. No new Korean-L1 concern beyond the ongoing r-modeling.",
  objectives: [
    "I know that 'or' makes its own sound, different from 'o' alone.",
    "I can blend words that use the or pattern.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — r-controlled vowels, or.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Remind the class of last week's ar (car). Say: 'Today, r changes a different vowel this time.'",
      prompt: "R changes another vowel today!",
      promptSimple: "R changes o this time!",
    },
    {
      type: "phonics_sound",
      letters: "or",
      keyword: "Corn",
      keywordEmoji: "🌽",
      actionCue: "Mime eating corn on the cob and say or-or-or.",
      teacherNote: "Same idea as last week's 'ar' — one new combined sound, not 'o' plus 'r' said separately.",
    },
    {
      type: "activity",
      instructions: "Tap each sound, then blend — or is one tile.",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "'or' is one combined sound.",
        words: [
          { parts: ["c", "or", "n"], word: "corn", emoji: "🌽" },
          { parts: ["f", "or", "k"], word: "fork", emoji: "🍴" },
          { parts: ["s", "t", "or", "m"], word: "storm", emoji: "⛈️" },
          { parts: ["sh", "or", "t"], word: "short", emoji: "📏", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "or — mime eating corn, or-or-or", emoji: "🌽" },
        { text: "Mime eating with a fork.", emoji: "🍴" },
        { text: "Mime thunder and lightning in a storm!", emoji: "⛈️" },
        { text: "Show something short with your hands.", emoji: "📏" },
      ],
    },
    {
      type: "wrapup",
      summary: "Today we learned that or makes its own new sound. We made: corn, fork, storm.",
      summarySimple: "or makes its own new sound! We made: corn, fork, storm!",
      homework: "At home, find something with an or sound in its name and tell a grown-up.",
    },
  ],
};
