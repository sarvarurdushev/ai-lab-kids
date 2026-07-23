import type { Lesson } from "@/lib/curriculum/types";

/** Letters and Sounds Phase 3 consonant digraphs, part 2. Cumulative: every single letter + ck, qu, ch, sh, th, wh, ng. */
export const ph_week9: Lesson = {
  key: "ph_week9",
  unitKey: "phonics_foundations",
  title: "Sound It Out: th, wh, ng",
  bigIdeas: [],
  englishFocus: "Learning three more two-letters-one-sound teams — th, wh, ng.",
  koreanL1Note:
    "'th' is a genuine trouble spot: Korean has no /θ/, so it's commonly replaced with /s/ (the exact contrast the Minimal Pairs th/s game drills) — treat this as the start of regular th/s practice, not a one-off.",
  objectives: [
    "I can say the sound th, wh, and ng make.",
    "I can blend a digraph with other sounds to read a word.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — Letters and Sounds Phase 3, consonant digraphs.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Quick review: show last week's ch and sh keyword pictures and have the class say each sound.",
      prompt: "Can you still remember ch and sh?",
      promptSimple: "Do you remember ch and sh?",
    },
    {
      type: "phonics_sound",
      letters: "th",
      keyword: "Thumb",
      keywordEmoji: "👍",
      actionCue: "Stick your tongue very lightly between your teeth and blow: th-th-th.",
      teacherNote:
        "Korean has no /θ/ sound, so kids will often substitute /s/ — that's exactly what the Minimal Pairs th/s game is built to drill. Start playing it regularly from this week on.",
    },
    {
      type: "phonics_sound",
      letters: "wh",
      keyword: "Whale",
      keywordEmoji: "🐳",
      actionCue: "Mime a whale's tail splashing and blow a soft wh-wh-wh.",
      teacherNote: "In most everyday speech this sounds the same as plain 'w' — don't worry about the technical difference at this age.",
    },
    {
      type: "phonics_sound",
      letters: "ng",
      keyword: "Ring",
      keywordEmoji: "💍",
      actionCue: "Hold up a finger like it's wearing a ring and hum ng-ng-ng through your nose.",
      teacherNote: "Only ever heard at the end of a word (ring, song, king) — never at the start.",
    },
    {
      type: "activity",
      instructions: "Let's blend th, wh, and ng with sounds we already know!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "Each digraph is one tile. This is also a great moment to slip in a quick th/s Minimal Pairs round after.",
        words: [
          { parts: ["th", "i", "n"], word: "thin", emoji: "📏" },
          { parts: ["wh", "i", "p"], word: "whip", emoji: "🌪️" },
          { parts: ["k", "i", "ng"], word: "king", emoji: "🤴" },
          { parts: ["s", "o", "ng"], word: "song", emoji: "🎵" },
          { parts: ["wh", "e", "n"], word: "when", emoji: "⏰", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "th — tongue out lightly, th-th-th", emoji: "👍" },
        { text: "wh — whale tail splash, wh-wh-wh", emoji: "🐳" },
        { text: "ng — hold up your ring finger, ng-ng-ng", emoji: "💍" },
        { text: "Say them all in a row: th, wh, ng!", emoji: "🔁" },
      ],
    },
    {
      type: "wrapup",
      summary: "Today we learned th, wh, ng and blended them into words: thin, whip, king, song!",
      summarySimple: "We learned th, wh, ng! We made words: thin, whip, king, song!",
      homework: "At home, find one thing with a th sound in its name and tell a grown-up.",
    },
  ],
};
