import type { Lesson } from "@/lib/curriculum/types";

/**
 * Letters and Sounds Phase 3 consonant digraphs, part 1. Only two new
 * sounds this week (not four) — digraphs are a genuinely new
 * grapheme-to-phoneme leap and deserve more repetition time than a single
 * letter did.
 */
export const ph_week8: Lesson = {
  key: "ph_week8",
  unitKey: "phonics_foundations",
  title: "Sound It Out: ch, sh",
  bigIdeas: [],
  englishFocus: "Learning that two letters can make one brand-new sound — ch and sh.",
  koreanL1Note:
    "Neither 'ch' nor 'sh' is a Korean-L1 trouble sound on its own, but this is the first time two letters make one sound the class hasn't met before (unlike 'ck,' which was just a new spelling of an already-known sound) — expect it to take longer to click than a single letter did.",
  objectives: [
    "I can say the sound ch and sh make.",
    "I can blend a digraph with other sounds to read a word.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — Letters and Sounds Phase 3, consonant digraphs.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask: 'Sometimes TWO letters team up to make ONE new sound. Let's meet two of them today!'",
      prompt: "Can two letters make one new sound?",
      promptSimple: "Two letters, one sound!",
    },
    {
      type: "phonics_sound",
      letters: "ch",
      keyword: "Choo-choo train",
      keywordEmoji: "🚂",
      actionCue: "Pump your arms like a train's wheels and say ch-ch-ch.",
      teacherNote: "A brand-new sound, not just s+h or c+h said separately — model it as one clean unit.",
    },
    {
      type: "phonics_sound",
      letters: "sh",
      keyword: "Shush",
      keywordEmoji: "🤫",
      actionCue: "Put a finger to your lips and say a long shhhh.",
      teacherNote: "A continuant — easy to hold and quiet, which makes it a fun one to exaggerate.",
    },
    {
      type: "activity",
      instructions: "Let's blend ch and sh with sounds we already know!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "Each digraph is one tile, same as 'ck' — tap it once, not letter by letter.",
        words: [
          { parts: ["ch", "i", "p"], word: "chip", emoji: "🍟" },
          { parts: ["sh", "o", "p"], word: "shop", emoji: "🏪" },
          { parts: ["f", "i", "sh"], word: "fish", emoji: "🐟" },
          { parts: ["w", "i", "sh"], word: "wish", emoji: "🌠" },
          { parts: ["ch", "a", "t"], word: "chat", emoji: "💬", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "ch — pump your arms like a train, ch-ch-ch", emoji: "🚂" },
        { text: "sh — finger on lips, shhhh", emoji: "🤫" },
        { text: "Say it fast: ch, sh, ch, sh!", emoji: "🔁" },
        { text: "Now say it slow and clear one more time.", emoji: "🐢" },
      ],
    },
    {
      type: "wrapup",
      summary: "Today two letters teamed up to make one new sound each: ch and sh! We made words: chip, shop, fish, wish.",
      summarySimple: "We learned ch and sh! We made words: chip, shop, fish, wish!",
      homework: "At home, find one thing with a ch or sh sound in its name and tell a grown-up.",
    },
  ],
};
