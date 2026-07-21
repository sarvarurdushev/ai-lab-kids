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
      type: "movement",
      title: "Yummy Food Actions!",
      instructions:
        "Call out each food word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Apple — pretend to take a big bite", emoji: "🍎" },
        { text: "Rice — pretend to scoop rice with a spoon", emoji: "🍚" },
        { text: "Bread — pretend to tear off a piece of bread", emoji: "🍞" },
        { text: "Milk — pretend to drink from a cup", emoji: "🥛" },
        { text: "Egg — crack an imaginary egg", emoji: "🥚" },
        { text: "Kimchi — fan your mouth like it's spicy", emoji: "🥬" },
        { text: "Bibimbap — stir a big bowl with your arm", emoji: "🍲" },
      ],
    },
    {
      type: "chant",
      title: "I Like Food Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching food picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Yummy, yummy, what do you like?", response: "I like apples, take a bite!" },
        { call: "Yummy, yummy, what's for you?", response: "I like rice, and kimchi too!" },
        { call: "Yummy, yummy, tell me true —", response: "I like bibimbap, how about you?" },
        { call: "Yummy, yummy, one more time —", response: "I like bread and milk, so fine!" },
      ],
    },
    {
      type: "check",
      prompt: "Go around the room: each kid says one food they like.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned food words — including some we already knew in Korean — and how to say \"I like ___\" in English, acted out the food words, and chanted about our favorite foods.",
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
      type: "movement",
      title: "Fruit and Veggie Actions!",
      instructions:
        "Call out each fruit or vegetable and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Apple — pretend to take a big bite", emoji: "🍎" },
        { text: "Banana — peel an imaginary banana", emoji: "🍌" },
        { text: "Carrot — crunch like biting a carrot", emoji: "🥕" },
        { text: "Broccoli — make tiny tree branches with your arms", emoji: "🥦" },
        { text: "Corn — pretend to munch corn side to side", emoji: "🌽" },
        { text: "Tomato — squeeze your hands like squishing a tomato", emoji: "🍅" },
      ],
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
      type: "chant",
      title: "Fruit or Vegetable Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching food picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Apple, apple, fruit or not?", response: "That's a fruit — yes, a lot!" },
        { call: "Carrot, carrot, what do you say?", response: "That's a vegetable — hip hip hooray!" },
        { call: "Banana, banana, tell me true —", response: "That's a fruit, yellow and new!" },
        { call: "Broccoli, broccoli, green and small —", response: "That's a vegetable, best of all!" },
      ],
    },
    {
      type: "check",
      prompt: "\"Vora learned faster / slower this time.\" Ask the class which, and why they think so.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we practiced sorting fruit and vegetables, checked whether Vora's learning got faster with practice, acted out fruits and vegetables, and chanted about what's a fruit and what's a vegetable.",
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
      type: "movement",
      title: "Do You Like It? Actions!",
      instructions:
        "Call out each line and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Do you—? — shrug your shoulders and open your hands", emoji: "🤷" },
        { text: "Like — give a big thumbs up", emoji: "👍" },
        { text: "Apples — pretend to take a big bite", emoji: "🍎" },
        { text: "Pizza — pretend to take a big cheesy bite", emoji: "🍕" },
        { text: "Yes, I do! — nod your head big", emoji: "✅" },
        { text: "No, I don't! — shake your head no", emoji: "❌" },
      ],
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
      type: "chant",
      title: "Do You Like It? Chant",
      instructions:
        "Say each call line and have the class echo the response, then really answer for themselves!",
      lines: [
        { call: "Do you like apples? Ask your friend —", response: "Yes, I do! Now ask again!" },
        { call: "Do you like pizza, warm and round?", response: "Yes, I do! Best food in town!" },
        { call: "Do you like apples, hard and sweet?", response: "No, I don't! Not a treat!" },
        { call: "Do you like pizza — one more time?", response: "Yes, I do! Say it in rhyme!" },
      ],
    },
    {
      type: "check",
      prompt: "Partners ask and answer \"Do you like ___?\" three times, swapping the food word.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we built yes/no questions with \"Do you like ___?\" — closing out our week on food and choices, acted out asking and answering, and chanted \"Do you like ___?\" together.",
      homework: "Ask a family member \"Do you like ___?\" about three different foods.",
    },
  ],
};
