import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";
import { AI_OR_NOT_SETS, INSTRUCT_VORA_SCENARIOS } from "../aiLabBank";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m7_week1: Lesson = {
  ...meta("m7_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Look out the classroom window (or show a photo of the sky) and ask \"What's the weather today?\" Let a few kids answer in Korean before introducing the English words.",
      prompt: "What's the weather today? 🌤️",
    },
    {
      type: "vocab",
      title: "Weather Words",
      words: [
        { word: "sunny", emoji: "☀️" },
        { word: "rainy", emoji: "🌧️" },
        { word: "cloudy", emoji: "☁️" },
        { word: "snowy", emoji: "❄️" },
        { word: "windy", emoji: "💨", minTrack: "explorers" },
        { word: "hot", emoji: "🥵" },
        { word: "cold", emoji: "🥶" },
      ],
    },
    {
      type: "concept",
      title: "Vora Guesses Tomorrow's Weather",
      bigIdeas: ["reasoning"],
      lines: [
        { text: "Yesterday was sunny, and today is sunny too — I wonder about tomorrow!" },
        { text: "A weather forecast isn't magic — it's a careful guess, made by looking at lots of past weather." },
        { text: "I look for a pattern, just like I do with pictures, and then I guess what comes next." },
        { text: "Let's find the weather pattern together!" },
      ],
      teacherNote:
        "Sets up the pattern_predictor activity below — keep \"forecast\" concrete: it just means a careful guess based on a pattern, not magic. This is also the third time this year kids build an \"It's ___\" sentence (Month 1's space objects, Month 6's animals), so expect faster, more confident production and spend the time you save on the new weather vocabulary instead.",
    },
    {
      type: "activity",
      instructions: "Read each weather icon aloud together (\"sunny, cloudy, sunny, cloudy...\") before guessing what comes next. Let the whole class predict out loud before anyone taps an answer.",
      config: {
        engine: "pattern_predictor",
        title: "What Comes Next in the Weather?",
        teacherNote:
          "This is the clearest real-world match yet for the pattern-prediction engine: real weather forecasters do exactly this at a much bigger scale — look for a pattern in a lot of past weather to guess what's coming next. Say the weather word out loud for each icon as it's read, not just the emoji.",
        rounds: [
          { sequence: ["☀️", "☁️", "☀️", "☁️"], answer: "☀️", options: ["☀️", "☁️", "🌧️"] },
          { sequence: ["🌧️", "💨", "🌧️", "💨"], answer: "🌧️", options: ["🌧️", "💨", "❄️"] },
          { sequence: ["🥵", "🥶", "🥵", "🥶"], answer: "🥵", options: ["🥵", "🥶", "☀️"] },
          {
            sequence: ["❄️", "❄️", "☀️", "❄️", "❄️"],
            answer: "☀️",
            options: ["❄️", "☀️", "🌧️"],
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
      prompt: "\"It's ___ today.\" — point to a weather picture (or look outside) and have a student complete the sentence.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned seven weather words, saw how Vora finds a pattern in past weather, the same way a real forecast is made, practiced spotting real AI in everyday life, and helped Vora follow clear instructions.",
      homework: "Ask a family member \"What's the weather?\" in Korean tonight, then answer them in English: \"It's ___ today.\"",
    },
  ],
};

export const m7_week2: Lesson = {
  ...meta("m7_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Mime shivering and hugging yourself for cold, then fan yourself and wipe your brow for hot. Ask \"Hot or cold?\" and have kids mime along before today's sorting game.",
      prompt: "Hot or cold? 🥵🥶",
    },
    {
      type: "concept",
      title: "Vora Looks Closely",
      bigIdeas: ["perception"],
      lines: [
        { text: "A coat, a t-shirt — I look closely at each one before deciding where it goes." },
        { text: "That's called sorting, and it's exactly what you're about to do with today's clothes!" },
      ],
      teacherNote:
        "Keep this brief — Vora and the idea of sorting-by-looking were already introduced back in Week 1's forecast talk. This is just a quick bridge into today's sorting game below.",
    },
    {
      type: "activity",
      instructions: "As a class, decide together whether each clothing item is for hot or cold weather before tapping — then have kids mime actually putting it on (shiver and hug yourself for coats and scarves, fan yourself for shorts and sandals). This doubles nicely as a movement break. Then play a second game to reinforce it.",
      config: {
        engine: "train_the_robot",
        title: "Hot Weather Clothes or Cold Weather Clothes?",
        labelA: "Hot Weather",
        labelB: "Cold Weather",
        emojiA: "🥵",
        emojiB: "🥶",
        items: [
          { word: "shorts", emoji: "🩳", bucket: "a" },
          { word: "t-shirt", emoji: "👕", bucket: "a" },
          { word: "sandals", emoji: "👡", bucket: "a" },
          { word: "sunglasses", emoji: "🕶️", bucket: "a", minTrack: "explorers" },
          { word: "coat", emoji: "🧥", bucket: "b" },
          { word: "scarf", emoji: "🧣", bucket: "b" },
          { word: "boots", emoji: "👢", bucket: "b" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, then have the whole class act out being in sunny weather (shielding their eyes, big smile) as they say it together.",
      config: {
        engine: "sentence_builder",
        title: "It's sunny today.",
        words: [
          { text: "It's", role: "subject" },
          { text: "sunny", role: "object" },
          { text: "today", role: "other" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[0],
    },
    {
      type: "check",
      prompt: "Ask a partner: \"Is a coat hot weather or cold weather?\"",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we sorted clothes into hot weather and cold weather, played a second game building the sentence \"It's sunny today,\" and helped Vora follow clear step-by-step instructions.",
      homework: "Pick out your own clothes for tomorrow's weather and say if they're \"hot weather\" or \"cold weather\" clothes, in English.",
    },
  ],
};

export const m7_week3: Lesson = {
  ...meta("m7_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Draw a big sun on the board (or hold up a sunny-weather photo) and ask \"What's the weather?\" Let kids call out \"sunny!\" before building today's sentence.",
      prompt: "What's the weather? ☀️",
    },
    {
      type: "concept",
      title: "Vora Builds a Sentence",
      bigIdeas: [],
      lines: [
        { text: "Sunny, cloudy, rainy — whatever the weather, there's always a sentence for it: \"It's ___ today.\"" },
        { text: "Let's build it together, one word at a time!" },
      ],
      teacherNote:
        "Just a quick bridge into today's sentence-building game — the \"It's ___\" pattern doesn't need re-teaching by now (see Week 1), this is pure practice.",
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, then have the whole class act out being in sunny weather (shielding their eyes, big smile) as they say it together. Then play a second game to reinforce it.",
      config: {
        engine: "sentence_builder",
        title: "It's sunny today.",
        words: [
          { text: "It's", role: "subject" },
          { text: "sunny", role: "object" },
          { text: "today", role: "other" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "As a class, decide together whether each clothing item is for hot or cold weather before tapping — then have kids mime actually putting it on (shiver and hug yourself for coats and scarves, fan yourself for shorts and sandals). This doubles nicely as a movement break.",
      config: {
        engine: "train_the_robot",
        title: "Hot Weather Clothes or Cold Weather Clothes?",
        labelA: "Hot Weather",
        labelB: "Cold Weather",
        emojiA: "🥵",
        emojiB: "🥶",
        items: [
          { word: "shorts", emoji: "🩳", bucket: "a" },
          { word: "t-shirt", emoji: "👕", bucket: "a" },
          { word: "sandals", emoji: "👡", bucket: "a" },
          { word: "sunglasses", emoji: "🕶️", bucket: "a", minTrack: "explorers" },
          { word: "coat", emoji: "🧥", bucket: "b" },
          { word: "scarf", emoji: "🧣", bucket: "b" },
          { word: "boots", emoji: "👢", bucket: "b" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[1],
    },
    {
      type: "check",
      prompt: "Ask a partner: \"Is it sunny or rainy today?\" and check whether their answer matches the real weather.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — building the sentence \"It's sunny today\" one word at a time, sorting clothes into hot weather and cold weather, and spotting real AI in everyday life.",
      homework: "Look outside tonight and try building today's weather sentence with a family member.",
    },
  ],
};

export const m7_week4: Lesson = {
  ...meta("m7_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Open the blinds or point to a window and ask \"What's it like outside right now?\" Let a few kids answer in Korean before starting today's English sentence.",
      prompt: "What's it like outside? 🪟",
    },
    {
      type: "concept",
      title: "Check the Sky!",
      bigIdeas: [],
      lines: [
        { text: "Look outside the window with me — what do you see?" },
        { text: "However the sky looks, there's a sentence for it: \"It's ___ today.\"" },
        { text: "In Korean, weather doesn't need a subject — but English always keeps a little word: \"It.\"", minTrack: "explorers" },
        { text: "Let's build it together, then check if it's really true outside!" },
      ],
      teacherNote:
        "This is the most immediately real-world-checkable sentence pattern in the curriculum — after building it, look out the window together and see if the class's sentence is actually true today. Also a good moment to flag that English's \"It's\" has no direct Korean equivalent: Korean weather sentences don't need a placeholder subject at all, so kids may want to skip straight to the weather word. Point out that English always keeps \"It's,\" even though nothing specific is \"it.\"",
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time. Once it's complete, look out the window together — is it actually rainy today? If not, rebuild the sentence with the real weather word instead!",
      config: {
        engine: "sentence_builder",
        title: "It's rainy today.",
        words: [
          { text: "It's", role: "subject" },
          { text: "rainy", role: "object" },
          { text: "today", role: "other" },
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
      prompt: "Go around and have every child say \"It's ___ today\" using today's real weather.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we built \"It's ___ today,\" checked it against the real sky outside our window, helped Vora follow clear step-by-step instructions, and spotted real AI in everyday life.",
      homework: "Check the weather every day this week and greet a family member with \"It's ___ today!\" in English.",
    },
  ],
};
