import type { Lesson } from "@/lib/curriculum/types";

/** Phonics Unit 2, week 3 — long-e vowel teams: ee, ea. Explorers (6+) only. */
export const ph_week17: Lesson = {
  key: "ph_week17",
  unitKey: "phonics_vowel_teams",
  title: "Vowel Teams: ee, ea",
  bigIdeas: [],
  englishFocus: "Learning that ee and ea both make the long e sound.",
  koreanL1Note: "No particular Korean-L1 trouble sound here. 'ea' is worth flagging as the less predictable of the two spellings — it will later show up making other sounds too (a heads-up for the teacher, not something to teach yet).",
  objectives: [
    "I know that ee and ea both make the long e sound.",
    "I can blend words that use the ee or ea pattern.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — long vowel teams, ee/ea.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Remind the class of ai/ay from last week. Say: 'Today, two more vowels team up — this time for the long e sound.'",
      prompt: "Two more vowels, one long sound!",
      promptSimple: "Two vowels, one sound: ee!",
    },
    {
      type: "phonics_sound",
      letters: "ee",
      keyword: "Bee",
      keywordEmoji: "🐝",
      actionCue: "Buzz around like a bee and say a long e-e-e.",
      teacherNote: "The most reliable long-e spelling — 'ee' almost always says long e.",
    },
    {
      type: "phonics_sound",
      letters: "ea",
      keyword: "Sea",
      keywordEmoji: "🌊",
      actionCue: "Mime gentle waves with your hand and say a long e-e-e.",
      teacherNote: "Usually says long e (sea, read, tea) — it occasionally says other sounds in later words, but not any taught so far.",
    },
    {
      type: "activity",
      instructions: "Tap each sound, then blend — ee and ea are each one tile.",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "Both spellings say the exact same sound this week.",
        words: [
          { parts: ["b", "ee"], word: "bee", emoji: "🐝" },
          { parts: ["t", "r", "ee"], word: "tree", emoji: "🌳" },
          { parts: ["s", "ea"], word: "sea", emoji: "🌊" },
          { parts: ["r", "ea", "d"], word: "read", emoji: "📖", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "ee — buzz like a bee, e-e-e", emoji: "🐝" },
        { text: "ea — wave like the sea, e-e-e", emoji: "🌊" },
        { text: "Reach up high like a tall tree!", emoji: "🌳" },
        { text: "Mime reading your favorite book.", emoji: "📖" },
      ],
    },
    {
      type: "wrapup",
      summary: "Today we learned two more spellings for one sound: ee and ea, both long e. We made: bee, tree, sea, read.",
      summarySimple: "ee and ea both say long e! We made: bee, tree, sea, read!",
      homework: "At home, find something with an ee or ea sound in its name and tell a grown-up.",
    },
  ],
};
