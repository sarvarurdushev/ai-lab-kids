import type { Lesson } from "@/lib/curriculum/types";

/** Letters and Sounds Phase 3, Set 6. Cumulative letters through this week: s,a,t,p,i,n,m,d,g,o,c,k,ck,e,u,r,h,b,f,l,j,v,w,x. */
export const ph_week6: Lesson = {
  key: "ph_week6",
  unitKey: "phonics_foundations",
  title: "Sound It Out: j, v, w, x",
  bigIdeas: [],
  englishFocus: "Hearing and blending j, v, w, x into real words.",
  koreanL1Note:
    "Korean has no /v/ — expect it to slip toward /b/. Keep modeling the buzzing, voiced difference from 'f' (no buzz) taught two weeks ago; a Minimal Pairs v/b round is a natural next addition once there's time to build one.",
  objectives: [
    "I can say the sound each letter makes: j, v, w, x.",
    "I can blend sounds together to read new words.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — Letters and Sounds Phase 3, Set 6.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Quick review: show last week's h, b, f, l keyword pictures and have the class say each sound.",
      prompt: "Can you still remember h, b, f, l?",
      promptSimple: "Do you remember h, b, f, l?",
    },
    {
      type: "phonics_sound",
      letters: "j",
      keyword: "Jelly",
      keywordEmoji: "🍮",
      actionCue: "Wobble your whole body like jelly and say j-j-j.",
      teacherNote: "A stop sound with voice — different from 'ch,' which comes in a couple of weeks.",
    },
    {
      type: "phonics_sound",
      letters: "v",
      keyword: "Volcano",
      keywordEmoji: "🌋",
      actionCue: "Throw your arms up like an erupting volcano and buzz vvvv.",
      teacherNote:
        "A continuant with a buzz — Korean has no /v/, so this often slips toward /b/. Put your fingers on your throat to feel the buzz and have kids copy it.",
    },
    {
      type: "phonics_sound",
      letters: "w",
      keyword: "Water",
      keywordEmoji: "💧",
      actionCue: "Wave your hand like ripples on water and say w-w-w.",
      teacherNote: "Round the lips like blowing out a candle.",
    },
    {
      type: "phonics_sound",
      letters: "x",
      keyword: "Fox",
      keywordEmoji: "🦊",
      actionCue: "Mime fox ears with your hands and say a hissy x-x-x.",
      teacherNote: "Almost always heard at the end of a word (fox, box, six) rather than the start — that's why every word below ends in it.",
    },
    {
      type: "activity",
      instructions: "Let's put the sounds together to read real words!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "Sound out each letter, then blend together. Notice every 'x' word ends with it.",
        words: [
          { parts: ["j", "e", "t"], word: "jet", emoji: "✈️" },
          { parts: ["v", "a", "n"], word: "van", emoji: "🚐" },
          { parts: ["w", "i", "g"], word: "wig", emoji: "💇" },
          { parts: ["f", "o", "x"], word: "fox", emoji: "🦊" },
          { parts: ["b", "o", "x"], word: "box", emoji: "📦", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "j — wobble like jelly, j-j-j", emoji: "🍮" },
        { text: "v — erupt like a volcano, vvvv", emoji: "🌋" },
        { text: "w — wave like water, w-w-w", emoji: "💧" },
        { text: "x — fox ears, x-x-x", emoji: "🦊" },
      ],
    },
    {
      type: "wrapup",
      summary: "Today we learned j, v, w, x and blended them into words: jet, van, wig, fox!",
      summarySimple: "We learned j, v, w, x! We made words: jet, van, wig, fox!",
      homework: "At home, find one thing that starts with j, v, or w, or ends with x, and tell a grown-up.",
    },
  ],
};
