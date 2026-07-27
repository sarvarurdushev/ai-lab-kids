import type { Lesson } from "@/lib/curriculum/types";

/** Phonics Unit 2, week 5 — long-i vowel teams: igh, y. Explorers (6+) only. */
export const ph_week19: Lesson = {
  key: "ph_week19",
  unitKey: "phonics_vowel_teams",
  title: "Vowel Teams: igh, y (long i)",
  bigIdeas: [],
  englishFocus: "Learning that igh and a word-final y can both make the long i sound.",
  koreanL1Note: "No particular Korean-L1 trouble sound here. Worth flagging: 'y' at the end of a short word says long i (fly, my), but at the end of a longer word it often says a soft long-e-ish sound instead (happy) — only the short-word version is taught here.",
  objectives: [
    "I know that igh and a word-final y can both make the long i sound.",
    "I can blend words that use the igh or y (long i) pattern.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — long vowel teams, igh/y.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Remind the class of oa/ow from last week. Say: 'Today, two more spellings for one long sound — this time, long i.'",
      prompt: "Two more spellings, one long i sound!",
      promptSimple: "Two spellings, one sound: igh!",
    },
    {
      type: "phonics_sound",
      letters: "igh",
      keyword: "Light",
      keywordEmoji: "💡",
      actionCue: "Flick your fingers open like a light switching on and say a long i-i-i.",
      teacherNote: "Three letters, one sound — the 'gh' is silent, only there to spell the pattern.",
    },
    {
      type: "phonics_sound",
      letters: "y",
      keyword: "Fly",
      keywordEmoji: "🪰",
      actionCue: "Flap your arms like flying and say a long i-i-i.",
      teacherNote: "This is 'y' at the very end of a short word (fly, my, sky) — a different, shorter sound shows up at the end of longer words, but that's not taught yet.",
    },
    {
      type: "activity",
      instructions: "Tap each sound, then blend — igh is one tile, y stands alone as the long-i sound at the end.",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "Both spellings say long i this week.",
        words: [
          { parts: ["l", "igh", "t"], word: "light", emoji: "💡" },
          { parts: ["n", "igh", "t"], word: "night", emoji: "🌙" },
          { parts: ["f", "l", "y"], word: "fly", emoji: "🪰" },
          { parts: ["s", "k", "y"], word: "sky", emoji: "🌌", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "igh — flick fingers like a light, i-i-i", emoji: "💡" },
        { text: "y — flap your arms and fly, i-i-i", emoji: "🪰" },
        { text: "Mime turning off the light for night time.", emoji: "🌙" },
        { text: "Point up at the sky!", emoji: "🌌" },
      ],
    },
    {
      type: "wrapup",
      summary: "Today we learned igh and y can both say long i. We made: light, night, fly, sky.",
      summarySimple: "igh and y can say long i! We made: light, night, fly, sky!",
      homework: "At home, find something with a long i sound in its name and tell a grown-up.",
    },
  ],
};
