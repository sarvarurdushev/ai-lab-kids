import type { Lesson } from "../types";
import { getLessonMeta } from "../scopeAndSequence";

function meta(key: string) {
  const m = getLessonMeta(key);
  if (!m) throw new Error(`No scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const w8d1_talking_to_ai_safely: Lesson = {
  ...meta("w8d1_talking_to_ai_safely"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask: \"Is Vora a real person?\" Let kids answer, then say \"Right — and that means talking to Vora has some special rules.\"",
      prompt: "Talking to AI is a little different.",
    },
    {
      type: "concept",
      title: "Talking to AI Safely",
      bigIdeas: ["natural_interaction", "societal_impact"],
      lines: [
        { text: "AI only knows what it's been shown or told — it doesn't know you unless you tell it." },
        { text: "Never share your real name, address, or photos with an AI without a grown-up." },
        { text: "If an AI says something confusing or scary, tell a grown-up right away." },
        { text: "AI can make mistakes — just like I did with the calculator sort! It's okay to double-check." },
      ],
      teacherNote:
        "Read each rule aloud once, then ask the class to repeat it back in their own words (English or Korean, either is fine here) — this is a discussion lesson, not a decoding-practice lesson. Deliberately kept to four short lines.",
    },
    {
      type: "movement",
      title: "AI Safety Actions!",
      instructions:
        "Call out each safety word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Name — zip your lips and shake your head no", emoji: "🤐" },
        { text: "Address — cross your arms in a big X", emoji: "❌" },
        { text: "Photo — cover your face with your hands", emoji: "🙈" },
        { text: "Grown-up — raise your hand high and wave", emoji: "✋" },
        { text: "Mistake — shrug your shoulders", emoji: "🤷" },
        { text: "Double-check — nod your head yes, twice", emoji: "✅" },
      ],
    },
    {
      type: "chant",
      title: "AI Safety Chant!",
      instructions:
        "Say each call line and have the whole class echo the response line back to you.",
      lines: [
        { call: "AI, AI, what's the rule?", response: "Don't share your name, keep it cool!" },
        { call: "AI, AI, what do we do?", response: "Don't share your address, that's true!" },
        { call: "AI, AI, if it's scary —", response: "Tell a grown-up, don't be wary!" },
        { call: "AI, AI, can it be wrong?", response: "Yes it can — double-check along!" },
      ],
    },
    {
      type: "check",
      prompt: "\"Tell me one rule for talking to an AI.\" — go around the room.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned four rules for talking to AI safely — the last new idea before our review week, acted out each safety rule, and chanted them together.",
      homework: "Tell a family member one AI safety rule you learned today.",
    },
  ],
};

export const w8d2_review_carnival: Lesson = {
  ...meta("w8d2_review_carnival"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Tell the class today is a carnival — one quick round of every game they've learned this unit, mixing old favorites.",
      prompt: "Welcome to the Review Carnival! 🎉",
    },
    {
      type: "movement",
      title: "Carnival Warm-Up Actions!",
      instructions:
        "Call out each word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Dog — pant and wag like a puppy", emoji: "🐶" },
        { text: "Bird — flap your arms and tweet", emoji: "🐦" },
        { text: "Rabbit — hop up and down", emoji: "🐰" },
        { text: "Bus — drive a big steering wheel", emoji: "🚌" },
        { text: "Train — chug your arms like train wheels", emoji: "🚂" },
        { text: "Bike — pedal your legs in place", emoji: "🚲" },
      ],
    },
    {
      type: "activity",
      instructions: "Round 1: Classification review — mix of animals and vehicles from Week 2.",
      config: {
        engine: "train_the_robot",
        title: "Review: Animal or Vehicle?",
        labelA: "Animal",
        labelB: "Vehicle",
        emojiA: "🐾",
        emojiB: "🚗",
        items: [
          { word: "dog", emoji: "🐶", bucket: "a" },
          { word: "bird", emoji: "🐦", bucket: "a" },
          { word: "rabbit", emoji: "🐰", bucket: "a" },
          { word: "bus", emoji: "🚌", bucket: "b" },
          { word: "train", emoji: "🚂", bucket: "b" },
          { word: "bike", emoji: "🚲", bucket: "b" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Round 2: Sequencing review — the morning routine from Week 6.",
      config: {
        engine: "sequence_builder",
        title: "Review: My Morning",
        steps: [
          { text: "Wake up", emoji: "🌞" },
          { text: "Get dressed", emoji: "👕" },
          { text: "Eat breakfast", emoji: "🥣" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Round 3: Listening review — a mix of all four sound pairs from this unit.",
      config: {
        engine: "minimal_pairs",
        title: "Review: Mixed Listening",
        targetSound: "l/r, f/p, th/s — cumulative review",
        teacherNote: "One pair from each of the unit's four listening lessons — this is the closest thing to a pronunciation-discrimination assessment in the pilot unit.",
        pairs: [
          { wordA: { text: "light", emoji: "💡" }, wordB: { text: "right", emoji: "👉" } },
          { wordA: { text: "fan", emoji: "🪭" }, wordB: { text: "pan", emoji: "🍳" } },
          { wordA: { text: "think", emoji: "🤔" }, wordB: { text: "sink", emoji: "🚰" } },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Round 4: Sentence review — build \"I have two dogs\" one more time from scratch.",
      config: {
        engine: "sentence_builder",
        title: "Review: I have two dogs.",
        words: [
          { text: "I", role: "subject" },
          { text: "have", role: "verb" },
          { text: "two", role: "other" },
          { text: "dogs", role: "object" },
        ],
      },
    },
    {
      type: "chant",
      title: "Carnival Review Chant!",
      instructions:
        "Say each call line and have the whole class echo the response line back to you.",
      lines: [
        { call: "Carnival, carnival, what do you see?", response: "I have two dogs, look at me!" },
        { call: "Carnival, carnival, tell me true —", response: "I have two birds, how about you?" },
        { call: "Carnival, carnival, hop this way —", response: "I have two rabbits, hip hip hooray!" },
        { call: "Carnival, carnival, our review's done —", response: "We learned so much and had such fun!" },
      ],
    },
    {
      type: "check",
      prompt: "Whole-class check-in: which carnival round was easiest? Which was the trickiest?",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we played one round of every game from this unit — a fun cumulative check of everything we've learned, warmed up acting out review words, and ended with a carnival chant together.",
    },
  ],
};

export const w8d3_teach_vora_day: Lesson = {
  ...meta("w8d3_teach_vora_day"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Tell the class: today, they get to be the teacher. They'll invent a category and teach it to Vora, just like Vora has been learning from them all unit.",
      prompt: "Today, YOU teach Vora!",
    },
    {
      type: "concept",
      title: "Everything We Taught Vora",
      bigIdeas: ["learning", "societal_impact"],
      lines: [
        { text: "This unit, you taught me animals, food, colors, and how AI helpers work." },
        { text: "You showed me that even AI needs lots of examples, and that it's okay to be wrong sometimes." },
        { text: "Now it's your turn: invent your own category and teach it to me!" },
      ],
      teacherNote:
        "This is the unit's capstone. Split the class into small groups; each group picks a category (\"toys vs. not toys,\" \"sports vs. not sports\" — anything with real classroom objects works), describes it to the class in English (\"A ___ is a toy\"), then leads the room through a live version of the Train the Robot loop using real objects. The app activity below is one worked example to run together first, as a model.",
    },
    {
      type: "movement",
      title: "Toy or Not a Toy Actions!",
      instructions:
        "Call out each item and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Ball — bounce like a ball", emoji: "⚽" },
        { text: "Teddy bear — hug yourself tight", emoji: "🧸" },
        { text: "Kite — wave your arms up like flying a kite", emoji: "🪁" },
        { text: "Book — open your hands like a book", emoji: "📖" },
        { text: "Pencil — pretend to write in the air", emoji: "✏️" },
        { text: "Chair — sit down and stand up fast", emoji: "🪑" },
      ],
    },
    {
      type: "activity",
      instructions: "Run this one together as the model round before groups invent their own categories.",
      config: {
        engine: "train_the_robot",
        title: "Example: Toy or Not a Toy?",
        labelA: "Toy",
        labelB: "Not a Toy",
        emojiA: "🧸",
        emojiB: "📚",
        items: [
          { word: "ball", emoji: "⚽", bucket: "a" },
          { word: "teddy bear", emoji: "🧸", bucket: "a" },
          { word: "kite", emoji: "🪁", bucket: "a" },
          { word: "book", emoji: "📖", bucket: "b" },
          { word: "pencil", emoji: "✏️", bucket: "b" },
          { word: "chair", emoji: "🪑", bucket: "b" },
        ],
      },
    },
    {
      type: "chant",
      title: "Teach Vora Chant!",
      instructions:
        "Say each call line and have the whole class echo the response line back to you.",
      lines: [
        { call: "Teacher Vora, what do you see?", response: "A ball is a toy, bounce with me!" },
        { call: "Teacher Vora, tell me true —", response: "A teddy bear's a toy for you!" },
        { call: "Teacher Vora, what do you say?", response: "A book is not a toy today!" },
        { call: "Teacher Vora, we've learned so much —", response: "Now it's our turn to teach as such!" },
      ],
    },
    {
      type: "check",
      prompt: "Each group presents their invented category to the class in English before the live round.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "You did it — eight weeks of English and AI, and today you taught Vora something brand new after acting out toy words and chanting together. Great job, AI Explorers!",
    },
  ],
};
