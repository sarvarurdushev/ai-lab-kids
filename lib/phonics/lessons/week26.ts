import type { Lesson } from "@/lib/curriculum/types";

/**
 * Phonics Unit 2 review and celebration — Explorers (6+) only. Closes
 * with a short decodable Story Time (reusing the existing big-visual
 * Story Time slides, no new code) built entirely from words verified
 * against everything taught across BOTH units, as the payoff moment: a
 * real, connected mini-story the class can actually read together.
 */
export const ph_week26: Lesson = {
  key: "ph_week26",
  unitKey: "phonics_vowel_teams",
  title: "Sound It All Out, Unit 2! (Review)",
  bigIdeas: [],
  englishFocus: "Reviewing every vowel team and r-controlled vowel from Unit 2, then reading a real short story together.",
  koreanL1Note:
    "A genuine second milestone: everything from Unit 1 (every letter, digraphs, blends) plus Unit 2 (silent-e, vowel teams, r-controlled vowels, diphthongs) now combines into real connected text, not just single words — the first time this class reads actual sentences together.",
  objectives: [
    "I can blend words that combine a vowel team with a blend or digraph.",
    "I can read a short story made entirely of words I've learned to sound out.",
  ],
  standardsNote:
    "Systematic synthetic phonics review (National Reading Panel, 2000); every sentence below was checked word by word against only the sounds taught in Units 1 and 2 before being written.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Say: 'You've learned SO many sounds across two whole units. Today, let's put them all together and read a real story!'",
      prompt: "Let's read a real story together!",
      promptSimple: "Time for a real story!",
    },
    {
      type: "activity",
      instructions: "These words combine a vowel team with a blend or a digraph — sound out every tile, then blend!",
      config: {
        engine: "blending",
        title: "Sound It All Out!",
        teacherNote: "Each word below combines a Unit 2 vowel team with a Unit 1 blend or digraph.",
        words: [
          { parts: ["s", "ea", "l"], word: "seal", emoji: "🦭" },
          { parts: ["t", "oa", "s", "t"], word: "toast", emoji: "🍞" },
          { parts: ["b", "ur", "n", "t"], word: "burnt", emoji: "🔥" },
          { parts: ["p", "oi", "n", "t"], word: "point", emoji: "👉", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "story",
      title: "A Story You Can Read!",
      teacherNote:
        "Read it together as a class first, sounding out any word that needs it, then read it again smoothly. Every single word here uses only sounds already taught.",
      panels: [
        { text: "The cat sat in the rain.", emoji: "🐱" },
        { text: "A frog can swim in the pond.", emoji: "🐸" },
        { text: "A bird can fly by the moon.", emoji: "🐦" },
        { text: "You did it! You can read!", emoji: "🎉" },
      ],
      comprehensionQuestions: [
        { question: "Which animal was in the rain?", discussionNote: "The cat — check the first panel's picture and words together." },
        { question: "What could you read in this story that you couldn't read at the start of the year?", discussionNote: "Any specific word or sound the class is proud of — celebrate it." },
      ],
    },
    {
      type: "movement",
      title: "Celebration Actions!",
      instructions: "Do a big action for each — this celebrates finishing Unit 2!",
      moves: [
        { text: "Take a bow — you finished Phonics Unit 2!", emoji: "🎉" },
        { text: "Mime turning the page of a book you just read.", emoji: "📖" },
        { text: "High-five a friend for every vowel team you remember.", emoji: "🙌" },
        { text: "One big cheer for reading a real story!", emoji: "🎊" },
      ],
    },
    {
      type: "wrapup",
      summary:
        "You finished Phonics Unit 2! You know silent-e, ai/ay, ee/ea, oa/ow, igh/y, oo/ue, ar/or/er/ir/ur, and ow/ou/oi/oy — and you read a real story with them.",
      summarySimple: "You finished Phonics Unit 2! You read a real story!",
      homework: "At home, try reading one sign, label, or short sentence out loud using everything you've learned.",
    },
  ],
};
