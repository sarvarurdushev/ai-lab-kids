import type { Lesson } from "@/lib/curriculum/types";

/**
 * Reference week for the new standalone Phonics program — kept out of
 * lib/curriculum/lessons (and therefore out of AUTHORED_LESSONS /
 * curriculumStats()) so it never mixes into the AI+English program's own
 * lesson/activity counts. Both age tracks start here (Little Sparks
 * already know some letters, per the approved plan), differentiated by
 * one bonus blending word rather than a separate "letters from zero"
 * stage. s/a/t/p is the UK Letters and Sounds Phase 2 starting set —
 * deliberately not a Korean-L1 trouble sound among them, so every child's
 * first blending success is friction-free before harder English-specific
 * contrasts (see the Minimal Pairs games) come later.
 */
export const ph_week1: Lesson = {
  key: "ph_week1",
  unitKey: "phonics_foundations",
  title: "Sound It Out: s, a, t, p",
  bigIdeas: [],
  englishFocus: "Hearing and blending the sounds s, a, t, p into real words.",
  koreanL1Note:
    "None of s/a/t/p is a known trouble sound for Korean speakers (unlike l/r, f/v, th/s) — this first set is chosen so every child's first blending success is friction-free. Harder English-specific contrasts are saved for the Minimal Pairs games once blending itself is familiar.",
  objectives: [
    "I can say the sound each letter makes: s, a, t, p.",
    "I can blend three sounds together to read a word.",
  ],
  standardsNote:
    "Systematic synthetic phonics (National Reading Panel, 2000) using the UK Letters and Sounds Phase 2 starting sequence — a reading-instruction standard, not an AI4K12 big idea.",
  segments: [
    {
      type: "warmup",
      teacherScript:
        "Say each child's name slowly, stretching the very first sound: \"Mmmm-injun,\" \"Sssss-oo-a.\" Ask: can you hear the first sound?",
      prompt: "Let's listen for the first sound in words!",
      promptSimple: "Let's listen to sounds!",
    },
    {
      type: "phonics_sound",
      letters: "s",
      keyword: "Sun",
      keywordEmoji: "☀️",
      actionCue: "Trace a big circle in the air like the sun, and stretch the sound out: sssssss.",
      teacherNote:
        "A continuant sound — kids can hold it. Have them hiss like the sun is \"sizzling.\" Never say \"suh\" — the added vowel makes blending harder later.",
    },
    {
      type: "phonics_sound",
      letters: "a",
      keyword: "Apple",
      keywordEmoji: "🍎",
      actionCue: "Pretend to take a big bite of an apple and say a short \"a-a-a.\"",
      teacherNote:
        "The short vowel sound as in \"cat,\" not the letter name \"ay.\" Kids will hear this sound in almost every word this week.",
    },
    {
      type: "phonics_sound",
      letters: "t",
      keyword: "Tiger",
      keywordEmoji: "🐯",
      actionCue: "Swipe one hand like a tiger's claw and say a clipped \"t, t, t\" — no \"tuh.\"",
      teacherNote: "A stop sound — quick and clipped, not stretched. Model it short so it blends cleanly.",
    },
    {
      type: "phonics_sound",
      letters: "p",
      keyword: "Popcorn",
      keywordEmoji: "🍿",
      actionCue: "Pop your hands open like popcorn popping and say a quick \"p, p, p.\"",
      teacherNote: "Another stop sound — same reminder as t: quick and clean, no added vowel.",
    },
    {
      type: "activity",
      instructions: "Let's put the sounds together to read real words!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote:
          "Tap each tile to reveal it and say the sound together, then press Blend to hear the whole word. Read it as a class before revealing the picture.",
        words: [
          { parts: ["s", "a", "t"], word: "sat", emoji: "🪑" },
          { parts: ["t", "a", "p"], word: "tap", emoji: "🚰" },
          { parts: ["p", "a", "t"], word: "pat", emoji: "🤚" },
          { parts: ["s", "a", "p"], word: "sap", emoji: "🌳", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together. Speed up for a fun round.",
      moves: [
        { text: "s — trace a circle like the sun and hiss sssss", emoji: "☀️" },
        { text: "a — bite the apple and say a-a-a", emoji: "🍎" },
        { text: "t — swipe like a tiger, t-t-t", emoji: "🐯" },
        { text: "p — pop like popcorn, p-p-p", emoji: "🍿" },
      ],
    },
    {
      type: "wrapup",
      summary: "Today we learned 4 new sounds — s, a, t, p — and blended them into real words: sat, tap, pat!",
      summarySimple: "We learned s, a, t, p! We made words: sat, tap, pat!",
      homework: "At home, find one thing that starts with s, a, t, or p and tell a grown-up its sound.",
    },
  ],
};
