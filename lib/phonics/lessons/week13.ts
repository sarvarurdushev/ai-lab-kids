import type { Lesson } from "@/lib/curriculum/types";

/**
 * Fourth blend week — final (word-ending) consonant blends, the last new
 * pattern before the review week. Same no-new-phonics_sound-segments shape
 * as weeks 10-12: these are known sounds combined, not new ones.
 */
export const ph_week13: Lesson = {
  key: "ph_week13",
  unitKey: "phonics_foundations",
  title: "Two Sounds at the End: Final Blends",
  bigIdeas: [],
  englishFocus: "Blending two known consonants together at the END of a word — nd, nt, mp, nk, st.",
  koreanL1Note:
    "Same challenge as the starting blends, just at the other end of the word — Korean syllables rarely close on two consonants either. Model holding the first sound briefly before releasing the second, rather than rushing both together.",
  objectives: [
    "I can blend four-sound words that end with two consonants together.",
    "I can hear that a blend can happen at the start OR the end of a word.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — consonant blends, word-final family.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Remind the class: the last few weeks, blends were at the START of words. Today, listen for them at the END instead.",
      prompt: "This time, listen for two sounds at the END of the word!",
      promptSimple: "Listen at the end this time!",
    },
    {
      type: "activity",
      instructions: "Every word below ends with two consonants together — sound out all four tiles, then blend!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "Model holding the first consonant briefly before the second releases, rather than mashing both sounds into one.",
        words: [
          { parts: ["h", "a", "n", "d"], word: "hand", emoji: "✋" },
          { parts: ["j", "u", "m", "p"], word: "jump", emoji: "🤸" },
          { parts: ["p", "i", "n", "k"], word: "pink", emoji: "💗" },
          { parts: ["b", "e", "s", "t"], word: "best", emoji: "🥇" },
          { parts: ["l", "a", "m", "p"], word: "lamp", emoji: "💡", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "chant",
      title: "Blend It Fast!",
      instructions: "Say the call line, then have the whole class echo the response.",
      lines: [
        { call: "-N-D, -N-D...", response: "hand, hand, hand!" },
        { call: "-M-P, -M-P...", response: "jump, jump, jump!" },
        { call: "-N-K, -N-K...", response: "pink, pink, pink!" },
        { call: "-S-T, -S-T...", response: "best, best, best!" },
      ],
    },
    {
      type: "movement",
      title: "Blend Actions!",
      instructions: "Call out a word; everyone does its action.",
      moves: [
        { text: "hand — hold up your hand", emoji: "✋" },
        { text: "jump — jump in place", emoji: "🤸" },
        { text: "pink — point to something pink nearby", emoji: "💗" },
        { text: "best — give a thumbs up, your best smile!", emoji: "🥇" },
      ],
    },
    {
      type: "wrapup",
      summary: "Today's blends were all at the END of the word: hand, jump, pink, best!",
      summarySimple: "We made end-blend words: hand, jump, pink, best!",
      homework: "At home, say 'hand' slowly — can you hear both the n and the d at the end?",
    },
  ],
};
