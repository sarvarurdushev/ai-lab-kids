import type { Lesson } from "@/lib/curriculum/types";

/** Letters and Sounds Phase 2, Set 3. Cumulative letters through this week: s,a,t,p,i,n,m,d,g,o,c,k. */
export const ph_week3: Lesson = {
  key: "ph_week3",
  unitKey: "phonics_foundations",
  title: "Sound It Out: g, o, c, k",
  bigIdeas: [],
  englishFocus: "Hearing and blending g, o, c, k into real words.",
  koreanL1Note:
    "None of g/o/c/k is a Korean-L1 trouble sound. This week's words avoid endings like 'back' or 'sick' on purpose — that /k/-after-short-vowel spelling is 'ck,' its own unit, taught next week.",
  objectives: [
    "I can say the sound each letter makes: g, o, c, k.",
    "I can blend sounds together to read new words.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — Letters and Sounds Phase 2, Set 3.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Quick review: show last week's i, n, m, d keyword pictures and have the class say each sound.",
      prompt: "Can you still remember i, n, m, d?",
      promptSimple: "Do you remember i, n, m, d?",
    },
    {
      type: "phonics_sound",
      letters: "g",
      keyword: "Goat",
      keywordEmoji: "🐐",
      actionCue: "Mime chewing like a goat and say a clipped g-g-g.",
      teacherNote: "A stop sound — quick and clean.",
    },
    {
      type: "phonics_sound",
      letters: "o",
      keyword: "Octopus",
      keywordEmoji: "🐙",
      actionCue: "Wiggle eight arms like an octopus and say a short o-o-o.",
      teacherNote: "The short vowel sound as in 'hot,' not the letter name 'oh.'",
    },
    {
      type: "phonics_sound",
      letters: "c",
      keyword: "Cat",
      keywordEmoji: "🐱",
      actionCue: "Mime cat whiskers and say a clipped c-c-c.",
      teacherNote: "This 'c' makes the same /k/ sound as 'k' — kids don't need to know why yet, just that both spell the same sound.",
    },
    {
      type: "phonics_sound",
      letters: "k",
      keyword: "Kite",
      keywordEmoji: "🪁",
      actionCue: "Mime flying a kite and say a clipped k-k-k.",
      teacherNote: "Same sound as 'c' above. Point that out if a child asks why there are two.",
    },
    {
      type: "activity",
      instructions: "Let's put the sounds together to read real words!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "All four words avoid the 'ck' ending on purpose — that spelling comes next week.",
        words: [
          { parts: ["c", "a", "t"], word: "cat", emoji: "🐱" },
          { parts: ["d", "o", "g"], word: "dog", emoji: "🐶" },
          { parts: ["c", "o", "t"], word: "cot", emoji: "🛏️" },
          { parts: ["k", "i", "d"], word: "kid", emoji: "🧒" },
          { parts: ["g", "o", "t"], word: "got", emoji: "🙌", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "g — chew like a goat, g-g-g", emoji: "🐐" },
        { text: "o — wiggle eight arms, o-o-o", emoji: "🐙" },
        { text: "c — cat whiskers, c-c-c", emoji: "🐱" },
        { text: "k — fly a kite, k-k-k", emoji: "🪁" },
      ],
    },
    {
      type: "wrapup",
      summary: "Today we learned g, o, c, k and blended them into words: cat, dog, cot, kid!",
      summarySimple: "We learned g, o, c, k! We made words: cat, dog, cot, kid!",
      homework: "At home, find one thing that starts with g, o, c, or k and tell a grown-up its sound.",
    },
  ],
};
