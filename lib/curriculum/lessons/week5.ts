import type { Lesson } from "../types";
import { getLessonMeta } from "../scopeAndSequence";

function meta(key: string) {
  const m = getLessonMeta(key);
  if (!m) throw new Error(`No scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const w5d1_yummy_food: Lesson = {
  ...meta("w5d1_yummy_food"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask: \"Do you like kimchi?\" Give a thumbs up yourself and encourage kids to react before teaching the sentence frame.",
      prompt: "Do you like kimchi? 🥬",
    },
    {
      type: "vocab",
      title: "Food",
      words: [
        { word: "apple", emoji: "🍎" },
        { word: "rice", emoji: "🍚" },
        { word: "bread", emoji: "🍞" },
        { word: "milk", emoji: "🥛" },
        { word: "egg", emoji: "🥚" },
        { word: "kimchi", emoji: "🥬" },
        { word: "bibimbap", emoji: "🍲" },
      ],
    },
    {
      type: "concept",
      title: "I Like...",
      bigIdeas: [],
      lines: [{ text: "I like kimchi. I like bibimbap. What do you like?" }],
      teacherNote:
        "Kimchi and bibimbap are here on purpose: kids already have full L1 confidence with these words, so the new work is only the English sentence frame around a familiar concept — not the vocabulary itself.",
    },
    {
      type: "check",
      prompt: "Go around the room: each kid says one food they like.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned food words — including some we already knew in Korean — and how to say \"I like ___\" in English.",
    },
  ],
};

export const w5d2_fruit_or_vegetable: Lesson = {
  ...meta("w5d2_fruit_or_vegetable"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask: \"Is an apple a fruit or a vegetable?\" Kids should answer easily — this warms up the category words before the sort.",
      prompt: "Fruit or vegetable?",
    },
    {
      type: "concept",
      title: "Fruit or Vegetable?",
      bigIdeas: ["perception", "learning"],
      lines: [
        { text: "We've taught Vora to sort before — remember animals and vehicles?" },
        { text: "Let's see if Vora can learn a brand new category: fruit and vegetable!" },
      ],
      teacherNote:
        "Second full train/guess classification loop with brand-new vocabulary — a good moment to ask the class to predict out loud whether Vora will learn faster this time.",
    },
    {
      type: "activity",
      instructions: "Kids sort the first few together as a class, then Vora starts guessing on its own — the class judges whether Vora got it right.",
      config: {
        engine: "train_the_robot",
        title: "Fruit or Vegetable?",
        labelA: "Fruit",
        labelB: "Vegetable",
        emojiA: "🍎",
        emojiB: "🥕",
        items: [
          { word: "apple", emoji: "🍎", bucket: "a" },
          { word: "banana", emoji: "🍌", bucket: "a" },
          { word: "grapes", emoji: "🍇", bucket: "a" },
          { word: "strawberry", emoji: "🍓", bucket: "a" },
          { word: "watermelon", emoji: "🍉", bucket: "a" },
          { word: "carrot", emoji: "🥕", bucket: "b" },
          { word: "broccoli", emoji: "🥦", bucket: "b" },
          { word: "corn", emoji: "🌽", bucket: "b" },
          { word: "potato", emoji: "🥔", bucket: "b" },
          { word: "tomato", emoji: "🍅", bucket: "b" },
        ],
      },
    },
    {
      type: "check",
      prompt: "\"Vora learned faster / slower this time.\" Ask the class which, and why they think so.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we practiced sorting fruit and vegetables, and checked whether Vora's learning got faster with practice.",
    },
  ],
};

export const w5d3_do_you_like: Lesson = {
  ...meta("w5d3_do_you_like"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask two or three kids \"Do you like pizza?\" and model a quick \"Yes, I do\" / \"No, I don't\" before the activity.",
      prompt: "Do you like pizza? 🍕",
    },
    {
      type: "concept",
      title: "Asking with \"Do\"",
      bigIdeas: [],
      lines: [
        { text: "In Korean, we ask a question just by changing how our voice sounds." },
        { text: "In English, we add a new word at the very front: \"Do.\"" },
        { text: "Let's build the question one word at a time." },
      ],
      teacherNote:
        "This is the yes/no question-formation gap — English fronts an auxiliary \"do\" with no direct Korean equivalent. Build it physically with the tiles below rather than explaining the grammar rule abstractly.",
    },
    {
      type: "activity",
      instructions: "Build the question one tile at a time, left to right. Say each word aloud as a tile is placed, then read the full question together.",
      config: {
        engine: "sentence_builder",
        title: "Do you like apples?",
        words: [
          { text: "Do", role: "other" },
          { text: "you", role: "subject" },
          { text: "like", role: "verb" },
          { text: "apples", role: "object" },
        ],
      },
    },
    {
      type: "check",
      prompt: "Partners ask and answer \"Do you like ___?\" three times, swapping the food word.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we built yes/no questions with \"Do you like ___?\" — closing out our week on food and choices.",
      homework: "Ask a family member \"Do you like ___?\" about three different foods.",
    },
  ],
};
