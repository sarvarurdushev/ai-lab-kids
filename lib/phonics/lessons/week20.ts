import type { Lesson } from "@/lib/curriculum/types";

/** Phonics Unit 2, week 6 — oo (long, as in moon) and ue (long u). Explorers (6+) only. */
export const ph_week20: Lesson = {
  key: "ph_week20",
  unitKey: "phonics_vowel_teams",
  title: "Vowel Teams: oo, ue",
  bigIdeas: [],
  englishFocus: "Learning the oo sound (as in moon) and the ue sound (as in blue).",
  koreanL1Note: "No particular Korean-L1 trouble sound here. A heads-up for the teacher, not a teaching point yet: 'oo' also makes a second, shorter sound (as in \"book\") — point it out if it comes up, but this week's focus is only the long sound.",
  objectives: [
    "I know the long oo sound (moon) and the ue sound (blue).",
    "I can blend words that use the oo or ue pattern.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — vowel teams, oo/ue.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Remind the class of igh/y from last week. Say: 'Today, two more vowel teams — moon's oo, and blue's ue.'",
      prompt: "Two more vowel teams to learn!",
      promptSimple: "Two more team sounds!",
    },
    {
      type: "phonics_sound",
      letters: "oo",
      keyword: "Moon",
      keywordEmoji: "🌙",
      actionCue: "Make a big circle with your arms like the moon and say a long oo-oo-oo.",
      teacherNote: "'oo' has a second, shorter sound too (as in 'book') — mention it exists if a child brings it up, but don't drill it yet.",
    },
    {
      type: "phonics_sound",
      letters: "ue",
      keyword: "Blue",
      keywordEmoji: "🔵",
      actionCue: "Point to something blue in the room and say a long oo-oo-oo.",
      teacherNote: "Same sound as the 'oo' above, just a different common spelling.",
    },
    {
      type: "activity",
      instructions: "Tap each sound, then blend — oo and ue are each one tile.",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "Both spellings make the same long oo sound this week.",
        words: [
          { parts: ["m", "oo", "n"], word: "moon", emoji: "🌙" },
          { parts: ["s", "p", "oo", "n"], word: "spoon", emoji: "🥄" },
          { parts: ["b", "l", "ue"], word: "blue", emoji: "🔵" },
          { parts: ["g", "l", "ue"], word: "glue", emoji: "🧴", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "oo — make a big moon circle, oo-oo-oo", emoji: "🌙" },
        { text: "ue — point to something blue, oo-oo-oo", emoji: "🔵" },
        { text: "Mime stirring soup with a spoon.", emoji: "🥄" },
        { text: "Mime squeezing glue onto paper.", emoji: "🧴" },
      ],
    },
    {
      type: "wrapup",
      summary: "Today we learned oo and ue can both make the long oo sound. We made: moon, spoon, blue, glue.",
      summarySimple: "oo and ue can say oo! We made: moon, spoon, blue, glue!",
      homework: "At home, find something blue and tell a grown-up its color, stretching out the oo sound.",
    },
  ],
};
