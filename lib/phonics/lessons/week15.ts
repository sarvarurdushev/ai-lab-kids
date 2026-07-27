import type { Lesson } from "@/lib/curriculum/types";

/**
 * Phonics Unit 2 begins here: long vowels and vowel teams. Built for
 * Explorers (6+) only — see lib/phonics/index.ts's LESSON_MIN_TRACK.
 * Little Sparks (4-5) isn't developmentally there yet and keeps
 * reviewing Unit 1 (every letter, digraphs, blends) instead.
 *
 * Silent-e ("magic e") is represented as one combined tile — "a_e",
 * "i_e", "o_e" — same convention as a digraph: one grapheme PATTERN, one
 * sound, even though the letters aren't contiguous on the page. The
 * silent e itself never gets its own tile (it makes no sound of its
 * own), consistent with the Blending engine's whole premise: tiles are
 * sounds, not just letters.
 */
export const ph_week15: Lesson = {
  key: "ph_week15",
  unitKey: "phonics_vowel_teams",
  title: "Magic e: a_e, i_e, o_e",
  bigIdeas: [],
  englishFocus: "Learning that a silent e at the end of a word makes the vowel before it say its own name.",
  koreanL1Note:
    "This starts Phonics Unit 2 (long vowels), built for Explorers (6+) — Little Sparks should keep reviewing Unit 1 material instead of starting this unit. No particular Korean-L1 trouble sound here; the challenge is purely the new spelling concept.",
  objectives: [
    "I know that a silent e at the end of a word changes the vowel sound before it.",
    "I can blend words that use the a_e, i_e, or o_e pattern.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — long vowels, silent-e (VCe) pattern.",
  segments: [
    {
      type: "warmup",
      teacherScript:
        "Write 'cap' and read it together, then add a silent e to make 'cape' and read it together. Ask: what changed? (The a now says its own name!)",
      prompt: "A silent letter that changes the whole word?",
      promptSimple: "A silent e changes the sound!",
    },
    {
      type: "phonics_sound",
      letters: "a_e",
      keyword: "Cake",
      keywordEmoji: "🍰",
      actionCue: "Trace a big smile in the air — the vowel is smiling because it gets to say its own name! Say a long a-a-a.",
      teacherNote:
        "The 'e' at the end is silent — never say a sound for it. It reaches back over one consonant and makes the vowel say its own letter name instead of the short sound taught in Unit 1.",
    },
    {
      type: "phonics_sound",
      letters: "i_e",
      keyword: "Bike",
      keywordEmoji: "🚲",
      actionCue: "Mime riding a bike and say a long i-i-i, like the letter's own name.",
      teacherNote: "Same silent-e rule as a_e — the i now says its own name instead of the short 'sit' sound.",
    },
    {
      type: "phonics_sound",
      letters: "o_e",
      keyword: "Rope",
      keywordEmoji: "🪢",
      actionCue: "Mime pulling a rope hand over hand and say a long o-o-o, like the letter's own name.",
      teacherNote: "Same silent-e rule again — the o now says its own name instead of the short 'hot' sound.",
    },
    {
      type: "activity",
      instructions: "Tap each sound — the silent e doesn't get its own tile, since it makes no sound of its own!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "Three tiles per word even though the spelling has four letters — the silent e isn't tapped, just remembered when the word is written.",
        words: [
          { parts: ["c", "a_e", "k"], word: "cake", emoji: "🍰" },
          { parts: ["b", "i_e", "k"], word: "bike", emoji: "🚲" },
          { parts: ["r", "o_e", "p"], word: "rope", emoji: "🪢" },
          { parts: ["h", "o_e", "p"], word: "hope", emoji: "🤞", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "a_e — trace a big smile, a-a-a", emoji: "🍰" },
        { text: "i_e — ride a bike, i-i-i", emoji: "🚲" },
        { text: "o_e — pull a rope, o-o-o", emoji: "🪢" },
        { text: "Say 'cap,' then add the silent e: 'cape'!", emoji: "🦸" },
      ],
    },
    {
      type: "wrapup",
      summary: "Today we met the silent e! It changes a vowel's sound: cake, bike, rope.",
      summarySimple: "Silent e changes the sound! We made: cake, bike, rope!",
      homework: "At home, find a word ending in a silent e and say it out loud with a grown-up.",
    },
  ],
};
