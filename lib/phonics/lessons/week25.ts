import type { Lesson } from "@/lib/curriculum/types";

/** Phonics Unit 2, week 11 — diphthongs: oi, oy. Explorers (6+) only. */
export const ph_week25: Lesson = {
  key: "ph_week25",
  unitKey: "phonics_vowel_teams",
  title: "Vowel Teams: oi, oy",
  bigIdeas: [],
  englishFocus: "Learning that oi and oy both make the same sound.",
  koreanL1Note: "No particular Korean-L1 trouble sound here — the split between oi (middle of word) and oy (end of word) mirrors the ai/ay pattern from earlier in this unit, which should make it click quickly.",
  objectives: [
    "I know that oi and oy make the same sound.",
    "I can blend words that use the oi or oy pattern.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — diphthongs, oi/oy.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Remind the class that ai goes in the middle of a word and ay goes at the end. Say: 'Today's pair works the exact same way.'",
      prompt: "One more team split by word position!",
      promptSimple: "One more sound: oi and oy!",
    },
    {
      type: "phonics_sound",
      letters: "oi",
      keyword: "Coin",
      keywordEmoji: "🪙",
      actionCue: "Mime flipping a coin and say oy-oy-oy.",
      teacherNote: "Used in the middle of a word (coin, boil) — just like 'ai' from earlier in this unit.",
    },
    {
      type: "phonics_sound",
      letters: "oy",
      keyword: "Toy",
      keywordEmoji: "🧸",
      actionCue: "Mime playing with a favorite toy and say the exact same sound: oy-oy-oy.",
      teacherNote: "Used at the end of a word (toy, boy) — the same middle/end split as 'ai' and 'ay.'",
    },
    {
      type: "activity",
      instructions: "Tap each sound, then blend — oi and oy are each one tile.",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "oi shows up in the middle of a word, oy at the end — same pattern as ai/ay.",
        words: [
          { parts: ["c", "oi", "n"], word: "coin", emoji: "🪙" },
          { parts: ["b", "oi", "l"], word: "boil", emoji: "🍲" },
          { parts: ["t", "oy"], word: "toy", emoji: "🧸" },
          { parts: ["b", "oy"], word: "boy", emoji: "🧑", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "oi — flip a coin, oy-oy-oy", emoji: "🪙" },
        { text: "Mime stirring a boiling pot — careful, hot!", emoji: "🍲" },
        { text: "oy — hug your favorite toy, oy-oy-oy", emoji: "🧸" },
        { text: "Give a thumbs up, just like this word ends!", emoji: "👍" },
      ],
    },
    {
      type: "wrapup",
      summary: "Today we learned oi and oy both make the same sound. We made: coin, boil, toy.",
      summarySimple: "oi and oy say the same sound! We made: coin, boil, toy!",
      homework: "At home, find a toy and say its name — can you hear the oy sound?",
    },
  ],
};
