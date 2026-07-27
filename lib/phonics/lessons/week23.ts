import type { Lesson } from "@/lib/curriculum/types";

/**
 * Phonics Unit 2, week 9 — r-controlled vowels: er, ir, ur. Explorers
 * (6+) only. All three spellings make the exact same sound — the week's
 * whole point is "three spellings, one sound," same framing as Unit 1's
 * c/k or s/a/t/p reviews.
 */
export const ph_week23: Lesson = {
  key: "ph_week23",
  unitKey: "phonics_vowel_teams",
  title: "R-Controlled Vowels: er, ir, ur",
  bigIdeas: [],
  englishFocus: "Learning that er, ir, and ur all make the exact same sound.",
  koreanL1Note: "Same r-controlled idea as the last two weeks, now with three spellings for one sound — no new Korean-L1 concern, just more spelling variety for an already-familiar sound.",
  objectives: [
    "I know that er, ir, and ur all make the same sound.",
    "I can blend words that use any of the three spellings.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — r-controlled vowels, er/ir/ur.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Remind the class of ar and or. Say: 'Today, THREE different spellings all make the exact same sound!'",
      prompt: "Three spellings, one sound — can you believe it?",
      promptSimple: "Three spellings, one sound!",
    },
    {
      type: "phonics_sound",
      letters: "er",
      keyword: "Fern",
      keywordEmoji: "🌿",
      actionCue: "Wiggle your fingers like fern leaves and say er-er-er.",
      teacherNote: "The most common of the three spellings.",
    },
    {
      type: "phonics_sound",
      letters: "ir",
      keyword: "Bird",
      keywordEmoji: "🐦",
      actionCue: "Flap your arms like a bird and say the exact same sound: er-er-er.",
      teacherNote: "Same sound as 'er' above — just a different spelling.",
    },
    {
      type: "phonics_sound",
      letters: "ur",
      keyword: "Turtle",
      keywordEmoji: "🐢",
      actionCue: "Move slowly like a turtle and say the exact same sound again: er-er-er.",
      teacherNote: "Same sound as 'er' and 'ir' — three spellings, one sound. This is the whole point of the lesson.",
    },
    {
      type: "activity",
      instructions: "Tap each sound, then blend — er, ir, and ur are each one tile, and they all sound the same!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "All three spellings make the identical sound — a great moment to ask kids to notice that themselves.",
        words: [
          { parts: ["f", "er", "n"], word: "fern", emoji: "🌿" },
          { parts: ["b", "ir", "d"], word: "bird", emoji: "🐦" },
          { parts: ["b", "ur", "n"], word: "burn", emoji: "🔥" },
          { parts: ["sh", "ir", "t"], word: "shirt", emoji: "👕", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "er — wiggle like fern leaves, er-er-er", emoji: "🌿" },
        { text: "ir — flap like a bird, er-er-er", emoji: "🐦" },
        { text: "ur — move slow like a turtle, er-er-er", emoji: "🐢" },
        { text: "Say all three in a row: er, ir, ur — same sound!", emoji: "🔁" },
      ],
    },
    {
      type: "wrapup",
      summary: "Today we learned three spellings for one sound: er, ir, ur. We made: fern, bird, burn.",
      summarySimple: "er, ir, ur all say the same sound! We made: fern, bird, burn!",
      homework: "At home, find something with an er, ir, or ur sound in its name and tell a grown-up.",
    },
  ],
};
