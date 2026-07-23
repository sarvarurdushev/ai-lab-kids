import type { Lesson } from "@/lib/curriculum/types";

/** Third consonant-blend week — s-blends. See week10.ts for why there are no new phonics_sound segments. */
export const ph_week12: Lesson = {
  key: "ph_week12",
  unitKey: "phonics_foundations",
  title: "Two Sounds, Said Fast: s-Blends",
  bigIdeas: [],
  englishFocus: "Blending two known consonants together at the start of a word — sc, sk, sm, sn, sp, st, sw.",
  koreanL1Note:
    "Same articulation challenge as the last two weeks — a word starting with two consonants and no vowel between them. 's' is a Korean sound already, which helps: kids just need practice sliding straight from it into the next consonant.",
  objectives: [
    "I can blend four-sound words that start with sc, sk, sm, sn, sp, st, or sw.",
    "I can tell the difference between a word that starts with 's' alone and one that starts with an s-blend.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — consonant blends, s-blend family.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Say 'sun' (just s), then 'stop' (s-blend) — ask the class which one has two sounds hiding at the start.",
      prompt: "One sound, or two sounds hiding together?",
      promptSimple: "One sound, or two?",
    },
    {
      type: "activity",
      instructions: "Every word below starts with 's' plus another consonant — sound out all four tiles, then blend!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "s-blends are usually the easiest blend family, since 's' is a continuant — kids can hold it while sliding into the next sound.",
        words: [
          { parts: ["s", "t", "o", "p"], word: "stop", emoji: "🛑" },
          { parts: ["s", "p", "o", "t"], word: "spot", emoji: "📍" },
          { parts: ["s", "w", "i", "m"], word: "swim", emoji: "🏊" },
          { parts: ["s", "n", "a", "p"], word: "snap", emoji: "🫰" },
          { parts: ["s", "k", "i", "p"], word: "skip", emoji: "⛷️", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "chant",
      title: "Blend It Fast!",
      instructions: "Say the call line, then have the whole class echo the response.",
      lines: [
        { call: "S-T, S-T...", response: "stop, stop, stop!" },
        { call: "S-P, S-P...", response: "spot, spot, spot!" },
        { call: "S-W, S-W...", response: "swim, swim, swim!" },
        { call: "S-N, S-N...", response: "snap, snap, snap!" },
      ],
    },
    {
      type: "movement",
      title: "Blend Actions!",
      instructions: "Call out a word; everyone does its action.",
      moves: [
        { text: "stop — freeze like a statue", emoji: "🛑" },
        { text: "spot — point to a spot on the floor", emoji: "📍" },
        { text: "swim — mime swimming strokes", emoji: "🏊" },
        { text: "snap — snap your fingers", emoji: "🫰" },
      ],
    },
    {
      type: "wrapup",
      summary: "Today we blended s-blends: stop, spot, swim, snap!",
      summarySimple: "We made s-blend words: stop, spot, swim, snap!",
      homework: "At home, say 'sun,' then 'stop' — can you feel the extra sound in 'stop'?",
    },
  ],
};
