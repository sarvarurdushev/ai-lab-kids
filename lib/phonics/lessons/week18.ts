import type { Lesson } from "@/lib/curriculum/types";

/**
 * Phonics Unit 2, week 4 — long-o vowel teams: oa, ow. Explorers (6+)
 * only. Note for later: 'ow' comes back in week 24 making a DIFFERENT
 * sound (as in "cow") — that lesson explicitly calls back to this one.
 */
export const ph_week18: Lesson = {
  key: "ph_week18",
  unitKey: "phonics_vowel_teams",
  title: "Vowel Teams: oa, ow (long o)",
  bigIdeas: [],
  englishFocus: "Learning that oa and ow (as in \"snow\") both make the long o sound.",
  koreanL1Note: "No particular Korean-L1 trouble sound here. Flag for later: 'ow' will resurface in a few weeks making a completely different sound (as in \"cow\") — worth a quick heads-up now that English spelling sometimes does this.",
  objectives: [
    "I know that oa and ow can both make the long o sound.",
    "I can blend words that use the oa or ow (long o) pattern.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — long vowel teams, oa/ow.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Remind the class of ee/ea from last week. Say: 'Today, two more spellings for one long sound — this time, long o.'",
      prompt: "Two more spellings, one long o sound!",
      promptSimple: "Two spellings, one sound: oa!",
    },
    {
      type: "phonics_sound",
      letters: "oa",
      keyword: "Boat",
      keywordEmoji: "⛵",
      actionCue: "Rock side to side like a boat on water and say a long o-o-o.",
      teacherNote: "Used in the middle of a word (boat, coat) — very reliable, almost always says long o.",
    },
    {
      type: "phonics_sound",
      letters: "ow",
      keyword: "Snow",
      keywordEmoji: "❄️",
      actionCue: "Flutter your fingers down slowly like falling snow and say a long o-o-o.",
      teacherNote:
        "This spelling has two possible sounds in English — today it's the long-o sound (snow, grow). In a few weeks it comes back making a totally different sound, like in 'cow' — that's normal, not a mistake.",
    },
    {
      type: "activity",
      instructions: "Tap each sound, then blend — oa and ow (long o) are each one tile.",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "Both spellings say long o this week — a different 'ow' sound comes up later.",
        words: [
          { parts: ["b", "oa", "t"], word: "boat", emoji: "⛵" },
          { parts: ["c", "oa", "t"], word: "coat", emoji: "🧥" },
          { parts: ["s", "n", "ow"], word: "snow", emoji: "❄️" },
          { parts: ["r", "ow"], word: "row", emoji: "🚣", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "oa — rock like a boat, o-o-o", emoji: "⛵" },
        { text: "ow — flutter like falling snow, o-o-o", emoji: "❄️" },
        { text: "Mime putting on a warm coat.", emoji: "🧥" },
        { text: "Mime rowing a boat.", emoji: "🚣" },
      ],
    },
    {
      type: "wrapup",
      summary: "Today we learned oa and ow can both say long o. We made: boat, coat, snow.",
      summarySimple: "oa and ow can say long o! We made: boat, coat, snow!",
      homework: "At home, find something with an oa or ow sound in its name and tell a grown-up.",
    },
  ],
};
