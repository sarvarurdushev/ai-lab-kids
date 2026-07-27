import type { Lesson } from "@/lib/curriculum/types";

/** Phonics Unit 2, week 2 — long-a vowel teams: ai, ay. Explorers (6+) only. */
export const ph_week16: Lesson = {
  key: "ph_week16",
  unitKey: "phonics_vowel_teams",
  title: "Vowel Teams: ai, ay",
  bigIdeas: [],
  englishFocus: "Learning that two vowels together can make one long vowel sound — ai and ay both say long a.",
  koreanL1Note: "No particular Korean-L1 trouble sound here — the challenge is purely learning a new two-letter spelling for a sound already known from last week's a_e.",
  objectives: [
    "I know that ai and ay both make the long a sound.",
    "I can blend words that use the ai or ay pattern.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — long vowel teams, ai/ay.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Remind the class of last week's magic e (cake). Say: 'Today, two vowels standing together make that same long a sound.'",
      prompt: "Two vowels together, one long sound!",
      promptSimple: "Two vowels, one sound!",
    },
    {
      type: "phonics_sound",
      letters: "ai",
      keyword: "Rain",
      keywordEmoji: "🌧️",
      actionCue: "Wiggle your fingers downward like falling rain and say a long a-a-a.",
      teacherNote: "'ai' is used in the middle of a word (rain, train) — never at the very end.",
    },
    {
      type: "phonics_sound",
      letters: "ay",
      keyword: "Day",
      keywordEmoji: "☀️",
      actionCue: "Stretch your arms up like the sun rising on a new day and say a long a-a-a.",
      teacherNote: "'ay' is used at the end of a word (day, play) — the two spellings split the job depending on word position.",
    },
    {
      type: "activity",
      instructions: "Tap each sound, then blend — ai and ay are each one tile.",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "Notice ai shows up in the middle of a word, ay at the end.",
        words: [
          { parts: ["r", "ai", "n"], word: "rain", emoji: "🌧️" },
          { parts: ["d", "ay"], word: "day", emoji: "☀️" },
          { parts: ["p", "l", "ay"], word: "play", emoji: "🧸" },
          { parts: ["t", "r", "ai", "n"], word: "train", emoji: "🚂", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "ai — wiggle fingers like falling rain, a-a-a", emoji: "🌧️" },
        { text: "ay — stretch up like the sun, a-a-a", emoji: "☀️" },
        { text: "Say 'rain,' then 'day' — same sound, different spelling!", emoji: "🔁" },
        { text: "Mime playing your favorite game — play!", emoji: "🧸" },
      ],
    },
    {
      type: "wrapup",
      summary: "Today we learned two spellings for the same long a sound: ai and ay. We made: rain, day, play.",
      summarySimple: "ai and ay both say long a! We made: rain, day, play!",
      homework: "At home, find something with an ai or ay sound in its name and tell a grown-up.",
    },
  ],
};
