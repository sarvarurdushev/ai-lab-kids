import type { Lesson } from "@/lib/curriculum/types";

/**
 * Letters and Sounds Phase 3, Set 7 — the last of the 26 letters, plus the
 * "qu" pair. Cumulative letters through this week: every letter a-z, plus
 * ck and qu. Worth calling out to the class as a milestone.
 */
export const ph_week7: Lesson = {
  key: "ph_week7",
  unitKey: "phonics_foundations",
  title: "Sound It Out: y, z, qu — Every Letter!",
  bigIdeas: [],
  englishFocus: "Hearing and blending y, z, qu into real words — completing every letter sound in the alphabet.",
  koreanL1Note:
    "None of y/z/qu is a Korean-L1 trouble sound. This is a good checkpoint week: if l/r, f/p, or v/b still need work, use this week's review warm-up to fold in a Minimal Pairs round before moving on to digraphs next week.",
  objectives: [
    "I can say the sound each letter makes: y, z, qu.",
    "I know the sound of every letter in the alphabet now.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — Letters and Sounds Phase 3, Set 7.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Quick review: show last week's j, v, w, x keyword pictures and have the class say each sound.",
      prompt: "Can you still remember j, v, w, x?",
      promptSimple: "Do you remember j, v, w, x?",
    },
    {
      type: "phonics_sound",
      letters: "y",
      keyword: "Yo-yo",
      keywordEmoji: "🪀",
      actionCue: "Mime playing with a yo-yo and say y-y-y.",
      teacherNote: "At the start of a word, 'y' is a consonant sound (yes, yo-yo) — its vowel sound comes up much later.",
    },
    {
      type: "phonics_sound",
      letters: "z",
      keyword: "Zebra",
      keywordEmoji: "🦓",
      actionCue: "Mime zig-zag stripes with your finger and buzz zzzz.",
      teacherNote: "A continuant with a buzz — hold it and let the class feel it in their throat.",
    },
    {
      type: "phonics_sound",
      letters: "qu",
      keyword: "Queen",
      keywordEmoji: "👑",
      actionCue: "Mime placing a crown on your head and say qu-qu-qu.",
      teacherNote: "'q' is never taught alone in English — it's always paired with 'u,' together making one /kw/ sound.",
    },
    {
      type: "activity",
      instructions: "Let's put the sounds together to read real words — and celebrate knowing every letter!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "Every letter sound has now been taught. Celebrate this one with the class before moving on to letter teams next week.",
        words: [
          { parts: ["y", "e", "s"], word: "yes", emoji: "👍" },
          { parts: ["z", "i", "p"], word: "zip", emoji: "🤐" },
          { parts: ["qu", "i", "z"], word: "quiz", emoji: "❓" },
          { parts: ["z", "a", "p"], word: "zap", emoji: "⚡" },
          { parts: ["qu", "i", "t"], word: "quit", emoji: "🛑", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "y — play with a yo-yo, y-y-y", emoji: "🪀" },
        { text: "z — zig-zag stripes, zzzz", emoji: "🦓" },
        { text: "qu — put on a crown, qu-qu-qu", emoji: "👑" },
        { text: "Everyone's favorite sound from this whole unit — do it one more time!", emoji: "🎉" },
      ],
    },
    {
      type: "wrapup",
      summary: "You now know every letter sound in the alphabet! Today: y, z, qu — words like yes, zip, quiz, zap.",
      summarySimple: "We know every letter sound now! We made words: yes, zip, quiz, zap!",
      homework: "At home, see how many letter sounds you can say out loud — all 26, plus qu!",
    },
  ],
};
