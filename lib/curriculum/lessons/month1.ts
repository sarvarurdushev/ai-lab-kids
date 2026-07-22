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
      promptSimple: "Look up! Star or moon? ✨",
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
      type: "movement",
      title: "Space Actions!",
      instructions:
        "Call out each space word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Star — twinkle your fingers up high", emoji: "⭐" },
        { text: "Moon — curl into a sleepy crescent shape", emoji: "🌙" },
        { text: "Planet — spin around in a circle", emoji: "🪐", minTrack: "explorers" },
        { text: "Rocket — crouch down then blast up on tiptoes", emoji: "🚀" },
        { text: "Sun — stretch your arms out wide and bright", emoji: "☀️" },
        { text: "Astronaut — walk in slow, bouncy moon steps", emoji: "👨‍🚀" },
      ],
    },
    {
      type: "concept",
      title: "Vora Looks at the Stars",
      bigIdeas: ["reasoning", "learning"],
      lines: [
        {
          text: "Look up — the night sky is full of stars!",
          textSimple: "Look up! So many stars!",
        },
        {
          text: "I look at lots and lots of star pictures, one after another.",
          textSimple: "I look at many star pictures.",
        },
        {
          text: "I find a pattern — like star, moon, star, moon — the same way I sort other pictures.",
          textSimple: "I see a pattern: star, moon, star, moon!",
        },
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
      type: "chant",
      title: "Space Chant!",
      instructions:
        "Say each call line and hold up (or point to) the matching space picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Look up high, what do you see?", response: "It's a star, shining for me!" },
        { call: "Look up high, what's in the night?", response: "It's the moon, glowing bright!" },
        {
          call: "Look up high, what's going up?",
          response: "It's a rocket, blast-off, whoosh!",
          minTrack: "explorers",
        },
        { call: "Look up high, what's shining gold?", response: "It's the sun, warm to hold!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "\"It's a ___.\" — point to a space picture and have a student name it.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned six space words, acted them out, saw how Vora finds a pattern in star pictures, spotted real AI in everyday life, helped Vora follow clear instructions, and chanted about space together.",
      summarySimple: "Today we learned space words, moved our bodies, and sang a space chant with Vora!",
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
        {
          text: "Then I guess — is it a space thing, or an earth thing?",
          textSimple: "Is it a space thing or an earth thing?",
        },
      ],
      teacherNote:
        "Quick reminder before the sort — noticing a picture and guessing its category is Perception, the same skill behind Week 1's pattern-finding. Keep this to a few seconds; the real teaching happens in the game.",
    },
    {
      type: "movement",
      title: "Space or Earth Actions!",
      instructions:
        "Call out each word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Star — twinkle your fingers up high", emoji: "⭐" },
        { text: "Rocket — crouch down then blast up on tiptoes", emoji: "🚀" },
        { text: "Moon — curl into a sleepy crescent shape", emoji: "🌙" },
        { text: "Astronaut — walk in slow, bouncy moon steps", emoji: "👨‍🚀", minTrack: "explorers" },
        { text: "Tree — stand tall and stretch your branches out", emoji: "🌳" },
        { text: "Dog — pant and wag like a puppy", emoji: "🐶" },
        { text: "Book — open your hands like a book", emoji: "📖" },
      ],
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
      type: "chant",
      title: "Space or Earth Chant!",
      instructions:
        "Say each call line and have the whole class echo the response line back to you.",
      lines: [
        { call: "Star, star, what are you?", response: "A space thing, through and through!" },
        { call: "Rocket, rocket, tell me true —", response: "A space thing, blasting through!" },
        {
          call: "Tree, tree, what are you?",
          response: "An earth thing, right on cue!",
          minTrack: "explorers",
        },
        { call: "Dog, dog, tell me true —", response: "An earth thing, barking too!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Point to one picture from today's sort and ask a student: \"Space thing, or earth thing?\"",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — sorting space things from earth things, matching space word pairs, and helping Vora follow clear step-by-step instructions, acted out space and earth words, and chanted about space vs. earth together.",
      summarySimple: "Today we sorted space and earth things, moved our bodies, and sang a chant with Vora!",
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
        {
          text: "The more I see a word and picture together, the better I remember them.",
          textSimple: "Practice helps me remember!",
        },
        { text: "Let's practice remembering space words together!" },
      ],
      teacherNote:
        "Brief reminder before the game — repeated exposure is how both Vora and kids get better at recognizing something, the Learning big idea from Week 1. Keep it to a couple of lines; the matching game is the real practice.",
    },
    {
      type: "movement",
      title: "Space Word Actions!",
      instructions:
        "Call out each space word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Star — twinkle your fingers up high", emoji: "⭐" },
        { text: "Moon — curl into a sleepy crescent shape", emoji: "🌙" },
        { text: "Planet — spin around in a circle", emoji: "🪐" },
        { text: "Rocket — crouch down then blast up on tiptoes", emoji: "🚀" },
        { text: "Sun — stretch your arms out wide and bright", emoji: "☀️" },
        { text: "Astronaut — walk in slow, bouncy moon steps", emoji: "👨‍🚀" },
      ],
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
      type: "chant",
      title: "Memory Match Chant!",
      instructions:
        "Say each call line and have the whole class echo the response line back to you.",
      lines: [
        { call: "Flip, flip, what did you find?", response: "I found a star, shining and kind!" },
        { call: "Flip, flip, what's in your hand?", response: "I found the moon, over the land!" },
        {
          call: "Flip, flip, what did you see?",
          response: "I found a rocket, fast and free!",
          minTrack: "explorers",
        },
        { call: "Flip, flip, one more match —", response: "I found the sun, that's a catch!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Ask a pair: \"Which one did you match?\" and have them answer with the English word.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — a matching game with space words, sorting space things from earth things, and spotting real AI in everyday life, acted out space words, and chanted about our matches together.",
      summarySimple: "Today we played a matching game, moved our bodies, and sang a chant with Vora!",
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
      type: "movement",
      title: "Space Spotting Actions!",
      instructions:
        "Call out each space word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Star — twinkle your fingers up high", emoji: "⭐" },
        { text: "Moon — curl into a sleepy crescent shape", emoji: "🌙" },
        { text: "Rocket — crouch down then blast up on tiptoes", emoji: "🚀" },
        { text: "Sun — stretch your arms out wide and bright", emoji: "☀️" },
        { text: "Astronaut — walk in slow, bouncy moon steps", emoji: "👨‍🚀" },
        { text: "Planet — spin around in a circle", emoji: "🪐" },
      ],
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
      type: "chant",
      title: "I See It! Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching space picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Look way up, what do you spy?", response: "I see a rocket zoom in the sky!" },
        { call: "Look way up, what's shining bright?", response: "I see a star out at night!" },
        {
          call: "Look way up, round and pale —",
          response: "I see the moon, like a sail!",
          minTrack: "explorers",
        },
        { call: "Look way up, warm and gold —", response: "I see the sun, so bold!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "\"I see a ___.\" — each kid points to a space picture and finishes the sentence out loud.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today every kid built and said \"I see a ___\" about a space picture, acted out space words, helped Vora follow clear instructions, spotted real AI in everyday life, and chanted \"I see a ___\" together.",
      summarySimple: "Today we said \"I see a ___\", moved our bodies, and sang \"I see a ___\" with Vora!",
      homework: "Point to something at home and say \"I see a ___\" in English.",
    },
  ],
};
