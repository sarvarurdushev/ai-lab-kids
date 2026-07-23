import type { Lesson } from "@/lib/curriculum/types";

/**
 * Review and celebration week closing out the first phonics unit —
 * every single letter, every digraph, and every blend family taught so
 * far, mixed into words that use more than one at once. Also the first
 * "heart words" introduction: a few very common words with one irregular
 * part, taught to recognize by sight rather than fully sound out — see
 * lib/curriculum/types.ts's MemoryMatchConfig, reused as-is rather than a
 * new engine, since recognition/recall is exactly what heart words need.
 */
export const ph_week14: Lesson = {
  key: "ph_week14",
  unitKey: "phonics_foundations",
  title: "Sound It All Out! (Review)",
  bigIdeas: [],
  englishFocus: "Reading words that combine a blend AND a digraph together, and meeting the first four \"heart words.\"",
  koreanL1Note:
    "A genuine milestone: every sound taught this unit (26 letters, ck/qu, four digraphs, and every blend family) shows up combined in today's words. If l/r, f/p, v/b, or th/s still need work, this review week is a natural place for one more Minimal Pairs round before moving to the next unit.",
  objectives: [
    "I can blend words that use more than one letter-team at once.",
    "I can recognize the heart words the, said, was, and you by sight.",
  ],
  standardsNote:
    "Systematic synthetic phonics review (National Reading Panel, 2000); heart words taught by sounding out the regular part and memorizing only the irregular part, not by rote whole-word memorization.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Say: 'Today we mix EVERYTHING together — letters, letter-teams, and blends, all in the same word!'",
      prompt: "Let's mix everything we've learned together!",
      promptSimple: "Let's mix it all together!",
    },
    {
      type: "activity",
      instructions: "These words each use a blend AND a digraph together — sound out every tile, then blend!",
      config: {
        engine: "blending",
        title: "Sound It All Out!",
        teacherNote: "Each word below combines a blend with a digraph — the hardest combination taught this unit. Take it slow.",
        words: [
          { parts: ["t", "r", "i", "ck"], word: "trick", emoji: "🎩" },
          { parts: ["f", "l", "a", "sh"], word: "flash", emoji: "⚡" },
          { parts: ["ch", "o", "m", "p"], word: "chomp", emoji: "🦈" },
          { parts: ["t", "w", "i", "s", "t"], word: "twist", emoji: "🌀", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Some very common words break the rules a little — we call them \"heart words.\" Sound out the part you can, and just remember the rest!",
      config: {
        engine: "memory_match",
        title: "Heart Words",
        pairs: [
          { word: "the", emoji: "❤️" },
          { word: "said", emoji: "❤️" },
          { word: "was", emoji: "❤️" },
          { word: "you", emoji: "❤️" },
        ],
      },
    },
    {
      type: "movement",
      title: "Celebration Actions!",
      instructions: "Do a big action for each — this is a celebration of everything learned this unit!",
      moves: [
        { text: "Take a bow — you finished the whole first phonics unit!", emoji: "🎉" },
        { text: "High-five a friend for every sound you remember.", emoji: "🙌" },
        { text: "Say your favorite word from this whole unit out loud.", emoji: "💬" },
        { text: "One big cheer for all the sounds you know now!", emoji: "🎊" },
      ],
    },
    {
      type: "wrapup",
      summary:
        "You finished the first phonics unit! You know every letter sound, four letter-teams (ch, sh, th, wh, ng, ck, qu), every blend family, and four heart words: the, said, was, you.",
      summarySimple: "You finished Phonics Unit 1! You know every letter, ch/sh/th/wh/ng, blends, and 4 heart words!",
      homework: "At home, find a book or a sign and try to sound out one whole word using everything you've learned.",
    },
  ],
};
