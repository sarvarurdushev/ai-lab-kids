import type { Lesson } from "@/lib/curriculum/types";

/**
 * Phonics Unit 2, week 10 — diphthongs: ow (as in "cow"), ou. Explorers
 * (6+) only. 'ow' was already taught in week 18 making the long-o sound
 * (snow) — this lesson explicitly calls that back out, since it's the
 * same spelling now making a completely different sound.
 */
export const ph_week24: Lesson = {
  key: "ph_week24",
  unitKey: "phonics_vowel_teams",
  title: "New Sound, Same Spelling: ow (like cow), ou",
  bigIdeas: [],
  englishFocus: "Learning that ow can say a totally different sound than the one taught a few weeks ago, and meeting ou.",
  koreanL1Note: "No particular Korean-L1 trouble sound here — the challenge is purely that English spelling reuses 'ow' for two unrelated sounds. Naming that explicitly (rather than treating it as a one-off exception) helps kids build the habit of trying more than one sound when a word doesn't make sense at first.",
  objectives: [
    "I know that ow can say the sound in 'cow,' a different sound than the one in 'snow.'",
    "I can blend words that use this ow sound or the ou spelling.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — diphthongs, ow/ou.",
  segments: [
    {
      type: "warmup",
      teacherScript:
        "Say 'snow' (from a few weeks ago), then 'cow.' Both are spelled with 'ow' — ask the class if they sound the same. (They don't!)",
      prompt: "Same spelling, but does it always sound the same?",
      promptSimple: "ow can say two different sounds!",
    },
    {
      type: "phonics_sound",
      letters: "ow",
      keyword: "Cow",
      keywordEmoji: "🐄",
      actionCue: "Mime cow horns with your hands and say ow-ow-ow, like when something surprises you.",
      teacherNote:
        "This is the SAME spelling as week 18's 'snow,' but a completely different sound. If a word with 'ow' doesn't make sense with one sound, try the other.",
    },
    {
      type: "phonics_sound",
      letters: "ou",
      keyword: "Cloud",
      keywordEmoji: "☁️",
      actionCue: "Mime a puffy cloud shape with your arms and say the same ow-ow-ow sound.",
      teacherNote: "Makes the exact same sound as this week's 'ow' — just a different common spelling.",
    },
    {
      type: "activity",
      instructions: "Tap each sound, then blend — ow (cow) and ou are each one tile.",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "This is the 'surprised' ow sound, not the 'snow' sound from week 18 — the same spelling, a different word each time.",
        words: [
          { parts: ["c", "ow"], word: "cow", emoji: "🐄" },
          { parts: ["h", "ow"], word: "how", emoji: "🤔" },
          { parts: ["c", "l", "ou", "d"], word: "cloud", emoji: "☁️" },
          { parts: ["sh", "ou", "t"], word: "shout", emoji: "📣", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "ow — cow horns, ow-ow-ow (surprised sound!)", emoji: "🐄" },
        { text: "Shrug and say 'how?'", emoji: "🤔" },
        { text: "Mime a puffy cloud floating by.", emoji: "☁️" },
        { text: "Cup your hands and shout hooray!", emoji: "📣" },
      ],
    },
    {
      type: "wrapup",
      summary: "Today ow surprised us with a new sound (cow), different from snow's ow. We also met ou: cloud, shout!",
      summarySimple: "ow can say two sounds! We made: cow, how, cloud, shout!",
      homework: "At home, say 'snow' and 'cow' — notice they're spelled the same way but sound different!",
    },
  ],
};
