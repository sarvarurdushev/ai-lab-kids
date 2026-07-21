import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";
import { AI_OR_NOT_SETS, INSTRUCT_VORA_SCENARIOS } from "../aiLabBank";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m1_week1: Lesson = {
  ...meta("m1_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Dim the lights if you can, and ask the class: \"What do you see at night, up in the sky?\" Let a few kids call out guesses before you reveal that today's theme is space.",
      prompt: "What's up in the sky? ✨",
    },
    {
      type: "vocab",
      title: "Space Words",
      words: [
        { word: "star", emoji: "⭐" },
        { word: "moon", emoji: "🌙" },
        { word: "planet", emoji: "🪐", minTrack: "explorers" },
        { word: "rocket", emoji: "🚀" },
        { word: "sun", emoji: "☀️" },
        { word: "astronaut", emoji: "👨‍🚀" },
      ],
    },
    {
      type: "concept",
      title: "Vora Looks at the Stars",
      bigIdeas: ["reasoning", "learning"],
      lines: [
        { text: "Look up — the night sky is full of stars!" },
        { text: "I look at lots and lots of star pictures, one after another." },
        { text: "I find a pattern — like star, moon, star, moon — the same way I sort other pictures." },
        { text: "Let's find a pattern together!" },
      ],
      teacherNote:
        "This sets up the pattern_predictor activity below — keep \"pattern\" concrete: it just means \"what repeats.\" Big Idea: Representation & Reasoning (finding and extending a pattern), with a light Learning thread since Vora still needs lots of examples first, echoing Week 1 Day 3/Week 2 Day 2.",
    },
    {
      type: "activity",
      instructions: "Say each emoji in the sequence out loud together before guessing what comes next. Let the whole class predict before anyone taps an answer.",
      config: {
        engine: "pattern_predictor",
        title: "What Comes Next in the Sky?",
        teacherNote:
          "Space is this year's first appearance of the pattern-prediction engine (also used in Months 6, 7, 10, and 12). Read the pattern aloud (\"star, moon, star, moon...\") before revealing the answer choices.",
        rounds: [
          { sequence: ["⭐", "🌙", "⭐", "🌙"], answer: "⭐", options: ["⭐", "🌙", "🚀"] },
          { sequence: ["🚀", "☀️", "🚀", "☀️"], answer: "🚀", options: ["🚀", "☀️", "🌙"] },
          { sequence: ["👨‍🚀", "🌙", "👨‍🚀", "🌙"], answer: "👨‍🚀", options: ["👨‍🚀", "🌙", "⭐"] },
          {
            sequence: ["⭐", "⭐", "🌙", "⭐", "⭐"],
            answer: "🌙",
            options: ["⭐", "🌙", "🚀"],
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[0],
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[0],
    },
    {
      type: "check",
      prompt: "\"It's a ___.\" — point to a space picture and have a student name it.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned six space words, saw how Vora finds a pattern in star pictures, spotted real AI in everyday life, and helped Vora follow clear instructions.",
      homework: "Look up at the sky tonight (or a picture of it) and say \"It's a star!\" or \"It's the moon!\" in English.",
    },
  ],
};

export const m1_week2: Lesson = {
  ...meta("m1_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Hold up two hands like a scale and ask: \"Is a rocket a space thing, or an earth thing?\" Let kids answer fast — this is just a warm-up guess before today's game.",
      prompt: "Space thing, or earth thing? 🚀🌍",
    },
    {
      type: "concept",
      title: "Vora Looks Again",
      bigIdeas: ["perception"],
      lines: [
        { text: "I look at a picture, just like you do." },
        { text: "Then I guess — is it a space thing, or an earth thing?" },
      ],
      teacherNote:
        "Quick reminder before the sort — noticing a picture and guessing its category is Perception, the same skill behind Week 1's pattern-finding. Keep this to a few seconds; the real teaching happens in the game.",
    },
    {
      type: "activity",
      instructions: "As a class, decide together where each picture goes before anyone taps — this is a shared sort, not an individual quiz. Then play a second game to reinforce it.",
      config: {
        engine: "train_the_robot",
        title: "Space Thing or Earth Thing?",
        labelA: "Space Thing",
        labelB: "Earth Thing",
        emojiA: "🚀",
        emojiB: "🌍",
        items: [
          { word: "star", emoji: "⭐", bucket: "a" },
          { word: "rocket", emoji: "🚀", bucket: "a" },
          { word: "moon", emoji: "🌙", bucket: "a" },
          { word: "astronaut", emoji: "👨‍🚀", bucket: "a" },
          { word: "tree", emoji: "🌳", bucket: "b" },
          { word: "dog", emoji: "🐶", bucket: "b" },
          { word: "book", emoji: "📖", bucket: "b" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Kids take turns flipping two cards. Say the English word out loud together whenever a word card flips.",
      config: {
        engine: "memory_match",
        title: "Space Word Match",
        pairs: [
          { word: "star", emoji: "⭐" },
          { word: "moon", emoji: "🌙" },
          { word: "planet", emoji: "🪐", minTrack: "explorers" },
          { word: "rocket", emoji: "🚀" },
          { word: "sun", emoji: "☀️" },
          { word: "astronaut", emoji: "👨‍🚀" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[0],
    },
    {
      type: "check",
      prompt: "Point to one picture from today's sort and ask a student: \"Space thing, or earth thing?\"",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — sorting space things from earth things, matching space word pairs, and helping Vora follow clear step-by-step instructions.",
    },
  ],
};

export const m1_week3: Lesson = {
  ...meta("m1_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Hold up two fingers and say: \"Today we flip cards and find matches — like a memory game!\" Mime flipping a card before starting.",
      prompt: "Ready to find a match? 🃏",
    },
    {
      type: "concept",
      title: "Vora Remembers",
      bigIdeas: ["learning"],
      lines: [
        { text: "The more I see a word and picture together, the better I remember them." },
        { text: "Let's practice remembering space words together!" },
      ],
      teacherNote:
        "Brief reminder before the game — repeated exposure is how both Vora and kids get better at recognizing something, the Learning big idea from Week 1. Keep it to a couple of lines; the matching game is the real practice.",
    },
    {
      type: "activity",
      instructions: "Kids take turns flipping two cards. Say the English word out loud together whenever a word card flips. Then play a second game to reinforce it.",
      config: {
        engine: "memory_match",
        title: "Space Word Match",
        pairs: [
          { word: "star", emoji: "⭐" },
          { word: "moon", emoji: "🌙" },
          { word: "planet", emoji: "🪐", minTrack: "explorers" },
          { word: "rocket", emoji: "🚀" },
          { word: "sun", emoji: "☀️" },
          { word: "astronaut", emoji: "👨‍🚀" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "As a class, decide together where each picture goes before anyone taps — this is a shared sort, not an individual quiz.",
      config: {
        engine: "train_the_robot",
        title: "Space Thing or Earth Thing?",
        labelA: "Space Thing",
        labelB: "Earth Thing",
        emojiA: "🚀",
        emojiB: "🌍",
        items: [
          { word: "star", emoji: "⭐", bucket: "a" },
          { word: "rocket", emoji: "🚀", bucket: "a" },
          { word: "moon", emoji: "🌙", bucket: "a" },
          { word: "astronaut", emoji: "👨‍🚀", bucket: "a" },
          { word: "tree", emoji: "🌳", bucket: "b" },
          { word: "dog", emoji: "🐶", bucket: "b" },
          { word: "book", emoji: "📖", bucket: "b" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[1],
    },
    {
      type: "check",
      prompt: "Ask a pair: \"Which one did you match?\" and have them answer with the English word.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — a matching game with space words, sorting space things from earth things, and spotting real AI in everyday life.",
    },
  ],
};

export const m1_week4: Lesson = {
  ...meta("m1_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Cup your hands around your eyes like binoculars and look around the room. Ask: \"What do you see?\" and take a few quick answers in any language before switching to English.",
      prompt: "What do you see? 👀",
    },
    {
      type: "concept",
      title: "I See...",
      bigIdeas: [],
      lines: [
        { text: "Look up at the sky in this picture." },
        { text: "I see a rocket!" },
        { text: "\"I see ___\" tells everyone exactly what I'm looking at, right now.", minTrack: "explorers" },
      ],
      teacherNote:
        "Builds directly to the sentence_builder activity below — say the full sentence \"I see a rocket\" naturally once before asking kids to build it tile by tile.",
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, left to right. Then invite a few kids to point at a different space picture and say their own \"I see a ___\" sentence out loud.",
      config: {
        engine: "sentence_builder",
        title: "I see a rocket.",
        words: [
          { text: "I", role: "subject" },
          { text: "see", role: "verb" },
          { text: "a rocket", role: "object" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[1],
    },
    {
      ...AI_OR_NOT_SETS[1],
    },
    {
      type: "check",
      prompt: "\"I see a ___.\" — each kid points to a space picture and finishes the sentence out loud.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today every kid built and said \"I see a ___\" about a space picture, helped Vora follow clear instructions, and spotted real AI in everyday life.",
      homework: "Point to something at home and say \"I see a ___\" in English.",
    },
  ],
};
