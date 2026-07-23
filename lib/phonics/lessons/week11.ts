import type { Lesson } from "@/lib/curriculum/types";

/** Second consonant-blend week — r-blends. See week10.ts for why there are no new phonics_sound segments. */
export const ph_week11: Lesson = {
  key: "ph_week11",
  unitKey: "phonics_foundations",
  title: "Two Sounds, Said Fast: r-Blends",
  bigIdeas: [],
  englishFocus: "Blending two known consonants together at the start of a word — br, cr, dr, fr, gr, tr.",
  koreanL1Note:
    "Every blend this week contains 'r' — the single biggest pronunciation gap for Korean-speaking beginners. This is the best week yet to run a full Minimal Pairs l/r round: kids will hear the contrast matter inside real, meaningful words, not just isolated syllables.",
  objectives: [
    "I can blend four-sound words that start with br, cr, dr, fr, gr, or tr.",
    "I can hear the difference between an l-blend and an r-blend.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — consonant blends, r-blend family.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Say a few of last week's l-blend words (clap, flag), then ask the class to listen for what's different about today's words.",
      prompt: "Listen for the r-sound hiding in these blends!",
      promptSimple: "Listen for the r-sound!",
    },
    {
      type: "activity",
      instructions: "Every word below starts with a consonant blend that has 'r' hiding inside — sound out all four tiles, then blend!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote:
          "This is the week's whole point: every blend contains /r/. Play the Minimal Pairs l/r game right after this activity while it's freshest.",
        words: [
          { parts: ["c", "r", "a", "b"], word: "crab", emoji: "🦀" },
          { parts: ["f", "r", "o", "g"], word: "frog", emoji: "🐸" },
          { parts: ["t", "r", "i", "p"], word: "trip", emoji: "🧳" },
          { parts: ["d", "r", "u", "m"], word: "drum", emoji: "🥁" },
          { parts: ["g", "r", "i", "n"], word: "grin", emoji: "😁", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "chant",
      title: "Blend It Fast!",
      instructions: "Say the call line, then have the whole class echo the response.",
      lines: [
        { call: "C-R, C-R...", response: "crab, crab, crab!" },
        { call: "F-R, F-R...", response: "frog, frog, frog!" },
        { call: "T-R, T-R...", response: "trip, trip, trip!" },
        { call: "D-R, D-R...", response: "drum, drum, drum!" },
      ],
    },
    {
      type: "movement",
      title: "Blend Actions!",
      instructions: "Call out a word; everyone does its action.",
      moves: [
        { text: "crab — walk sideways like a crab", emoji: "🦀" },
        { text: "frog — crouch and hop like a frog", emoji: "🐸" },
        { text: "trip — mime packing a suitcase", emoji: "🧳" },
        { text: "drum — mime playing a drum", emoji: "🥁" },
      ],
    },
    {
      type: "wrapup",
      summary: "Today every blend had an r hiding inside it: crab, frog, trip, drum!",
      summarySimple: "Every blend today had 'r' inside! We made: crab, frog, trip, drum!",
      homework: "At home, say 'crab' and 'club' — can a grown-up tell you're saying two different sounds?",
    },
  ],
};
