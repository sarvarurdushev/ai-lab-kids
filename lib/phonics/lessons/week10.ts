import type { Lesson } from "@/lib/curriculum/types";

/**
 * First consonant-blend week. No new phonics_sound segments: a blend
 * (bl, cl, fl, gl, pl, sl) isn't a new sound the way a digraph is — it's
 * two already-known sounds said quickly back to back — so the week is
 * built as extra blending PRACTICE with four-tile words instead of new
 * teaching content. See BlendingConfig's teacherNote for the in-lesson
 * framing of that idea for the teacher.
 */
export const ph_week10: Lesson = {
  key: "ph_week10",
  unitKey: "phonics_foundations",
  title: "Two Sounds, Said Fast: l-Blends",
  bigIdeas: [],
  englishFocus: "Blending two known consonants together at the start of a word — bl, cl, fl, gl, pl, sl.",
  koreanL1Note:
    "Korean syllables almost never end or begin with a consonant cluster, so saying two consonants back to back without a vowel between them is a genuinely new articulation skill, not just a reading one — expect kids to want to add a small vowel sound between the two letters (\"buh-lock\" instead of \"block\"). Model it fast and clipped.",
  objectives: [
    "I know that a blend is two sounds I already know, said quickly together.",
    "I can blend four-sound words that start with bl, cl, fl, gl, pl, or sl.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — consonant blends, l-blend family.",
  segments: [
    {
      type: "warmup",
      teacherScript:
        "Say: 'You already know every one of these sounds! Today we just say two of them very fast, right next to each other — no new sound to learn.'",
      prompt: "Two sounds you know, said really fast!",
      promptSimple: "Two sounds, said fast!",
    },
    {
      type: "activity",
      instructions: "These words start with two consonants said quickly — sound out all four tiles, then blend!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote:
          "Every blend here (bl, cl, fl, gl, pl, sl) uses only sounds already taught — nothing new, just faster. If a child inserts a vowel between the two consonants ('buh-lock'), gently model it again without the extra vowel.",
        words: [
          { parts: ["c", "l", "a", "p"], word: "clap", emoji: "👏" },
          { parts: ["f", "l", "a", "g"], word: "flag", emoji: "🚩" },
          { parts: ["p", "l", "u", "g"], word: "plug", emoji: "🔌" },
          { parts: ["s", "l", "i", "p"], word: "slip", emoji: "🧴" },
          { parts: ["g", "l", "a", "d"], word: "glad", emoji: "😊", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "chant",
      title: "Blend It Fast!",
      instructions: "Say the call line, then have the whole class echo the response, clapping once on each blend.",
      lines: [
        { call: "C-L, C-L...", response: "clap, clap, clap!" },
        { call: "F-L, F-L...", response: "flag, flag, flag!" },
        { call: "P-L, P-L...", response: "plug, plug, plug!" },
        { call: "S-L, S-L...", response: "slip, slip, slip!" },
      ],
    },
    {
      type: "movement",
      title: "Blend Actions!",
      instructions: "Call out a word; everyone does its action.",
      moves: [
        { text: "clap — clap your hands", emoji: "👏" },
        { text: "flag — wave an imaginary flag", emoji: "🚩" },
        { text: "plug — mime plugging something in", emoji: "🔌" },
        { text: "slip — mime sliding on ice, careful!", emoji: "🧴" },
      ],
    },
    {
      type: "wrapup",
      summary: "Today we learned that two sounds we already know can blend together fast: clap, flag, plug, slip!",
      summarySimple: "Two sounds, said fast! We made: clap, flag, plug, slip!",
      homework: "At home, try saying 'clap' slowly, then fast — notice it's the same two sounds each time.",
    },
  ],
};
