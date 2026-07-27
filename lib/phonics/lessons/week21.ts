import type { Lesson } from "@/lib/curriculum/types";

/** Phonics Unit 2, week 7 — r-controlled vowel: ar. Explorers (6+) only. */
export const ph_week21: Lesson = {
  key: "ph_week21",
  unitKey: "phonics_vowel_teams",
  title: "R-Controlled Vowels: ar",
  bigIdeas: [],
  englishFocus: "Learning that a vowel followed by r makes a brand-new sound, different from the vowel alone.",
  koreanL1Note:
    "This is where 'r' from Unit 1 shows up again in a new job — it changes the vowel in front of it rather than being its own separate sound. Keep modeling it clearly; the l/r contrast from Unit 1 still applies here.",
  objectives: [
    "I know that 'ar' makes its own sound, different from 'a' alone.",
    "I can blend words that use the ar pattern.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — r-controlled vowels, ar.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Say 'a' alone (like in cat), then 'ar' (like in car). Ask: does the r change how the vowel sounds?",
      prompt: "Does 'r' change how a vowel sounds?",
      promptSimple: "R changes the vowel sound!",
    },
    {
      type: "phonics_sound",
      letters: "ar",
      keyword: "Car",
      keywordEmoji: "🚗",
      actionCue: "Mime holding a steering wheel and say ar-ar-ar.",
      teacherNote: "Not a short 'a' plus a separate 'r' — the two letters together make one new, single sound.",
    },
    {
      type: "activity",
      instructions: "Tap each sound, then blend — ar is one tile, a whole new sound.",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "'ar' is one combined sound, not 'a' plus 'r' said separately.",
        words: [
          { parts: ["c", "ar"], word: "car", emoji: "🚗" },
          { parts: ["s", "t", "ar"], word: "star", emoji: "⭐" },
          { parts: ["f", "ar", "m"], word: "farm", emoji: "🚜" },
          { parts: ["sh", "ar", "k"], word: "shark", emoji: "🦈", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "ar — steer a car, ar-ar-ar", emoji: "🚗" },
        { text: "Reach up and grab a star!", emoji: "⭐" },
        { text: "Mime driving a tractor on a farm.", emoji: "🚜" },
        { text: "Snap your jaws like a shark!", emoji: "🦈" },
      ],
    },
    {
      type: "wrapup",
      summary: "Today we learned that ar makes its own new sound. We made: car, star, farm.",
      summarySimple: "ar makes its own new sound! We made: car, star, farm!",
      homework: "At home, find something with an ar sound in its name and tell a grown-up.",
    },
  ],
};
