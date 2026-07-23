import type { Lesson } from "@/lib/curriculum/types";

/** Letters and Sounds Phase 2, Set 5. Cumulative letters through this week: s,a,t,p,i,n,m,d,g,o,c,k,ck,e,u,r,h,b,f,l. */
export const ph_week5: Lesson = {
  key: "ph_week5",
  unitKey: "phonics_foundations",
  title: "Sound It Out: h, b, f, l",
  bigIdeas: [],
  englishFocus: "Hearing and blending h, b, f, l into real words.",
  koreanL1Note:
    "Two real trouble spots land together this week. Korean has no /f/ or /v/ — expect 'f' to slip toward /p/ (the Minimal Pairs f/p game targets exactly this). And now that 'l' joins 'r' from last week, this is the moment to start the Minimal Pairs l/r game regularly.",
  objectives: [
    "I can say the sound each letter makes: h, b, f, l.",
    "I can blend sounds together to read new words.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — Letters and Sounds Phase 2, Set 5.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Quick review: show last week's ck, e, u, r keyword pictures and have the class say each sound.",
      prompt: "Can you still remember ck, e, u, r?",
      promptSimple: "Do you remember ck, e, u, r?",
    },
    {
      type: "phonics_sound",
      letters: "h",
      keyword: "Hat",
      keywordEmoji: "🎩",
      actionCue: "Mime tipping a hat and breathe out a soft h-h-h.",
      teacherNote: "A breathy sound — no voice, just air. Easy to over-say; keep it light.",
    },
    {
      type: "phonics_sound",
      letters: "b",
      keyword: "Ball",
      keywordEmoji: "⚽",
      actionCue: "Mime bouncing a ball and say a clipped b-b-b.",
      teacherNote: "A stop sound with voice (unlike 'p'). It's been several weeks since 'd' — that gap is intentional, since b/d are easy to mix up.",
    },
    {
      type: "phonics_sound",
      letters: "f",
      keyword: "Fish",
      keywordEmoji: "🐟",
      actionCue: "Mime a fish mouth opening and closing, ffff.",
      teacherNote:
        "A continuant — hold it. Korean has no /f/, so expect kids to reach for /p/ instead; that's exactly the contrast the Minimal Pairs f/p game drills.",
    },
    {
      type: "phonics_sound",
      letters: "l",
      keyword: "Leaf",
      keywordEmoji: "🍃",
      actionCue: "Let your hand flutter down slowly like a falling leaf and say l-l-l.",
      teacherNote:
        "Now that both 'l' and 'r' (last week) are taught, play the Minimal Pairs l/r game often — this is the single biggest pronunciation gap for Korean-speaking beginners.",
    },
    {
      type: "activity",
      instructions: "Let's put the sounds together to read real words!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "Sound out each letter, then blend together.",
        words: [
          { parts: ["h", "a", "t"], word: "hat", emoji: "🎩" },
          { parts: ["b", "i", "g"], word: "big", emoji: "📏" },
          { parts: ["f", "a", "n"], word: "fan", emoji: "🌀" },
          { parts: ["l", "e", "g"], word: "leg", emoji: "🦵" },
          { parts: ["b", "u", "s"], word: "bus", emoji: "🚌", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "h — tip your hat, h-h-h", emoji: "🎩" },
        { text: "b — bounce a ball, b-b-b", emoji: "⚽" },
        { text: "f — open and close like a fish, ffff", emoji: "🐟" },
        { text: "l — flutter down like a leaf, l-l-l", emoji: "🍃" },
      ],
    },
    {
      type: "wrapup",
      summary: "Today we learned h, b, f, l and blended them into words: hat, big, fan, leg!",
      summarySimple: "We learned h, b, f, l! We made words: hat, big, fan, leg!",
      homework: "At home, find one thing that starts with h, b, f, or l and tell a grown-up its sound.",
    },
  ],
};
