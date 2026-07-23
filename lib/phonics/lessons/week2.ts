import type { Lesson } from "@/lib/curriculum/types";

/** Letters and Sounds Phase 2, Set 2. Cumulative letters through this week: s,a,t,p,i,n,m,d. */
export const ph_week2: Lesson = {
  key: "ph_week2",
  unitKey: "phonics_foundations",
  title: "Sound It Out: i, n, m, d",
  bigIdeas: [],
  englishFocus: "Hearing and blending i, n, m, d — and reviewing s, a, t, p — into real words.",
  koreanL1Note:
    "None of i/n/m/d is a Korean-L1 trouble sound. Keep reviewing last week's s/a/t/p in the warm-up so blending stays cumulative, not a fresh start each week.",
  objectives: [
    "I can say the sound each letter makes: i, n, m, d.",
    "I can blend sounds together to read new words.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — Letters and Sounds Phase 2, Set 2.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Quick review: show the s, a, t, p keyword pictures from last week and have the class say each sound before moving on.",
      prompt: "Can you still remember s, a, t, p?",
      promptSimple: "Do you remember s, a, t, p?",
    },
    {
      type: "phonics_sound",
      letters: "i",
      keyword: "Igloo",
      keywordEmoji: "🧊",
      actionCue: "Hug yourself and shiver like you're cold in an igloo, and say a short i-i-i.",
      teacherNote: "The short vowel sound as in 'sit,' not the letter name 'eye.'",
    },
    {
      type: "phonics_sound",
      letters: "n",
      keyword: "Nest",
      keywordEmoji: "🪺",
      actionCue: "Cup your hands like a little nest and say n-n-n.",
      teacherNote: "A continuant — hold it. Don't pair this in the same week with 'm': they look and sound similar, but a week apart is enough space at this pace.",
    },
    {
      type: "phonics_sound",
      letters: "m",
      keyword: "Milk",
      keywordEmoji: "🥛",
      actionCue: "Mime drinking a glass of milk and hum mmmm.",
      teacherNote: "Another continuant — easy to hold and enjoyable to exaggerate.",
    },
    {
      type: "phonics_sound",
      letters: "d",
      keyword: "Duck",
      keywordEmoji: "🦆",
      actionCue: "Waddle like a duck and say a clipped d-d-d.",
      teacherNote: "A stop sound — quick and clean, no 'duh.' Save 'b' for a later week so b/d never sit close together.",
    },
    {
      type: "activity",
      instructions: "Let's put the sounds together to read real words!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "Tap each tile, say the sound together, then Blend. All four words reuse only sounds taught so far.",
        words: [
          { parts: ["s", "i", "t"], word: "sit", emoji: "🪑" },
          { parts: ["p", "i", "n"], word: "pin", emoji: "📌" },
          { parts: ["m", "a", "d"], word: "mad", emoji: "😠" },
          { parts: ["m", "a", "n"], word: "man", emoji: "🧑" },
          { parts: ["d", "i", "p"], word: "dip", emoji: "🥣", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "i — shiver in the igloo, i-i-i", emoji: "🧊" },
        { text: "n — cup a little nest, n-n-n", emoji: "🪺" },
        { text: "m — sip the milk, mmmm", emoji: "🥛" },
        { text: "d — waddle like a duck, d-d-d", emoji: "🦆" },
      ],
    },
    {
      type: "wrapup",
      summary: "Today we learned i, n, m, d and blended them into words: sit, pin, mad, man!",
      summarySimple: "We learned i, n, m, d! We made words: sit, pin, mad, man!",
      homework: "At home, find one thing that starts with i, n, m, or d and tell a grown-up its sound.",
    },
  ],
};
