import type { Lesson } from "@/lib/curriculum/types";

/** Letters and Sounds Phase 2, Set 4. Cumulative letters through this week: s,a,t,p,i,n,m,d,g,o,c,k,ck,e,u,r. */
export const ph_week4: Lesson = {
  key: "ph_week4",
  unitKey: "phonics_foundations",
  title: "Sound It Out: ck, e, u, r",
  bigIdeas: [],
  englishFocus: "Hearing and blending ck, e, u, r into real words — including words that end in the /k/ sound.",
  koreanL1Note:
    "'r' is a real trouble spot: Korean has one sound, ㄹ, that falls between English /l/ and /r/. Model it clearly this week, and once 'l' is taught in a couple of weeks, use the Minimal Pairs (l/r) game often.",
  objectives: [
    "I can say the sound each letter/letter-pair makes: ck, e, u, r.",
    "I can blend sounds together to read new words, including words ending in ck.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — Letters and Sounds Phase 2, Set 4.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Quick review: show last week's g, o, c, k keyword pictures and have the class say each sound.",
      prompt: "Can you still remember g, o, c, k?",
      promptSimple: "Do you remember g, o, c, k?",
    },
    {
      type: "phonics_sound",
      letters: "ck",
      keyword: "Sock",
      keywordEmoji: "🧦",
      actionCue: "Mime pulling on a sock and say a quick k-k-k at the end.",
      teacherNote:
        "Two letters, one sound — the same /k/ as 'c' and 'k,' but spelled this way right after a short vowel at the end of a word (sock, duck, rock). No new sound to learn, just a new spelling.",
    },
    {
      type: "phonics_sound",
      letters: "e",
      keyword: "Elephant",
      keywordEmoji: "🐘",
      actionCue: "Swing your arm like a trunk and say a short e-e-e.",
      teacherNote: "The short vowel sound as in 'red,' not the letter name 'ee.'",
    },
    {
      type: "phonics_sound",
      letters: "u",
      keyword: "Umbrella",
      keywordEmoji: "☂️",
      actionCue: "Mime opening an umbrella and say a short u-u-u.",
      teacherNote: "The short vowel sound as in 'sun,' not the letter name 'you.'",
    },
    {
      type: "phonics_sound",
      letters: "r",
      keyword: "Rabbit",
      keywordEmoji: "🐰",
      actionCue: "Hop like a rabbit and say r-r-r.",
      teacherNote:
        "Watch closely here: Korean has no separate /r/ and /l/ — this is the single biggest pronunciation gap for these students. Model it clearly and don't worry about perfect accuracy yet; the Minimal Pairs game will drill the contrast directly once 'l' is taught.",
    },
    {
      type: "activity",
      instructions: "Let's put the sounds together to read real words — some end in the /k/ sound now!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "Sound out each letter, then blend — 'ck' is one tile, same as a digraph.",
        words: [
          { parts: ["d", "u", "ck"], word: "duck", emoji: "🦆" },
          { parts: ["r", "o", "ck"], word: "rock", emoji: "🪨" },
          { parts: ["r", "e", "d"], word: "red", emoji: "🔴" },
          { parts: ["r", "u", "n"], word: "run", emoji: "🏃" },
          { parts: ["n", "e", "ck"], word: "neck", emoji: "🦒", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "ck — pull on a sock, k-k-k", emoji: "🧦" },
        { text: "e — swing the trunk, e-e-e", emoji: "🐘" },
        { text: "u — open the umbrella, u-u-u", emoji: "☂️" },
        { text: "r — hop like a rabbit, r-r-r", emoji: "🐰" },
      ],
    },
    {
      type: "wrapup",
      summary: "Today we learned ck, e, u, r and blended them into words: duck, rock, red, run!",
      summarySimple: "We learned ck, e, u, r! We made words: duck, rock, red, run!",
      homework: "At home, find one thing that ends with the ck sound and tell a grown-up.",
    },
  ],
};
