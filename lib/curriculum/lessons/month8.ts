import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";
import { AI_OR_NOT_SETS, INSTRUCT_VORA_SCENARIOS } from "../aiLabBank";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m8_week1: Lesson = {
  ...meta("m8_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Hold up (or draw) a suitcase and ask \"Where should we go?\" Let kids call out places before introducing today's travel words.",
      prompt: "Where should we go? 🧳",
    },
    {
      type: "vocab",
      title: "Travel Words",
      words: [
        { word: "airplane", emoji: "✈️" },
        { word: "train", emoji: "🚂" },
        { word: "ship", emoji: "🚢" },
        { word: "suitcase", emoji: "🧳" },
        { word: "map", emoji: "🗺️", minTrack: "explorers" },
        { word: "ticket", emoji: "🎫" },
      ],
    },
    {
      type: "concept",
      title: "Vora Finds the Fastest Way",
      bigIdeas: ["reasoning"],
      lines: [
        { text: "I want to go to the park — but which way is fastest?" },
        { text: "A map app tries out lots of paths, one by one, and reasons about which is best." },
        { text: "Then it picks the best one — just like figuring out the fastest way to school!" },
        { text: "Let's go! Let's go by airplane, by train, or by ship!" },
      ],
      teacherNote:
        "\"Let's ___\" is a fixed suggestion chunk with no word-by-word Korean equivalent to build from — teach it whole, the same approach as \"Can I ___?\" in Month 3. Keep \"reasoning\" concrete here: a map app doesn't magically know the fastest way, it tries out many paths and compares them, the same step-by-step idea behind the sequence_builder activity below.",
    },
    {
      type: "activity",
      instructions: "Kids take turns tapping the next step of getting ready to travel. Read each step aloud together as it's placed, then finish with \"Let's go!\"",
      config: {
        engine: "sequence_builder",
        title: "Let's Go!",
        steps: [
          { text: "Pack your suitcase", emoji: "🧳" },
          { text: "Go to the airport", emoji: "🛫" },
          { text: "Show your ticket", emoji: "🎫", minTrack: "explorers" },
          { text: "Get on the plane", emoji: "✈️" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[1],
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[1],
    },
    {
      type: "check",
      prompt: "\"Let's go by ___.\" — ask a student to finish the sentence with their favorite way to travel.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned six travel words, saw how a map app reasons its way to the fastest route, one step at a time, practiced spotting real AI in everyday life, and helped Vora follow clear instructions.",
      homework: "Plan a pretend trip with a family member tonight — take turns saying \"Let's go by ___.\"",
    },
  ],
};

export const m8_week2: Lesson = {
  ...meta("m8_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Hold up two items — one to pack (like a toothbrush) and one to leave behind (like a sofa cushion) — and ask \"Pack it, or leave it?\" before today's sorting game.",
      prompt: "Pack it, or leave it? 🧳",
    },
    {
      type: "concept",
      title: "Vora Decides What Goes In",
      bigIdeas: ["perception"],
      lines: [
        { text: "A toothbrush, a sofa — I look at each thing and decide: does it belong in the suitcase?" },
        { text: "That's sorting, and it's just what you're about to do with today's things!" },
      ],
      teacherNote:
        "Keep this brief — Vora's reasoning was already introduced in Week 1's map-app talk. This is just a quick bridge into today's packing game below.",
    },
    {
      type: "activity",
      instructions: "As a class, decide together whether each item goes in the suitcase or stays home before anyone taps. Then play a second game to reinforce it.",
      config: {
        engine: "train_the_robot",
        title: "Pack It or Leave It?",
        labelA: "Pack It",
        labelB: "Leave It",
        emojiA: "🧳",
        emojiB: "🚫",
        items: [
          { word: "t-shirt", emoji: "👕", bucket: "a" },
          { word: "toothbrush", emoji: "🪥", bucket: "a" },
          { word: "passport", emoji: "🛂", bucket: "a", minTrack: "explorers" },
          { word: "socks", emoji: "🧦", bucket: "a" },
          { word: "sofa", emoji: "🛋️", bucket: "b" },
          { word: "TV", emoji: "📺", bucket: "b" },
          { word: "bed", emoji: "🛏️", bucket: "b" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Kids take turns flipping two cards at a time, saying the transportation word out loud if they find a match.",
      config: {
        engine: "memory_match",
        title: "Transportation Match",
        pairs: [
          { word: "airplane", emoji: "✈️" },
          { word: "train", emoji: "🚂" },
          { word: "ship", emoji: "🚢" },
          { word: "suitcase", emoji: "🧳" },
          { word: "map", emoji: "🗺️", minTrack: "explorers" },
          { word: "ticket", emoji: "🎫" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[1],
    },
    {
      type: "check",
      prompt: "Ask a partner: name one thing you'd pack for a trip.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — sorting things into pack it and leave it, matching transportation words to pictures, and helping Vora follow clear step-by-step instructions.",
      homework: "Pack a pretend suitcase with a family member tonight, naming each item in English.",
    },
  ],
};

export const m8_week3: Lesson = {
  ...meta("m8_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Flip an imaginary card in the air and ask \"Airplane or train?\" — let kids guess before today's matching game.",
      prompt: "Airplane or train? ✈️🚂",
    },
    {
      type: "concept",
      title: "Vora Remembers",
      bigIdeas: ["learning"],
      lines: [
        { text: "The more times I see \"airplane,\" the faster I remember it — that's learning!" },
        { text: "Let's practice remembering together with today's matching game!" },
      ],
      teacherNote:
        "Brief bridge only — the learning-through-repetition idea doesn't need re-teaching, just let today's game do the reinforcing.",
    },
    {
      type: "activity",
      instructions: "Kids take turns flipping two cards at a time, saying the transportation word out loud if they find a match. Then play a second game to reinforce it.",
      config: {
        engine: "memory_match",
        title: "Transportation Match",
        pairs: [
          { word: "airplane", emoji: "✈️" },
          { word: "train", emoji: "🚂" },
          { word: "ship", emoji: "🚢" },
          { word: "suitcase", emoji: "🧳" },
          { word: "map", emoji: "🗺️", minTrack: "explorers" },
          { word: "ticket", emoji: "🎫" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "As a class, decide together whether each item goes in the suitcase or stays home before anyone taps.",
      config: {
        engine: "train_the_robot",
        title: "Pack It or Leave It?",
        labelA: "Pack It",
        labelB: "Leave It",
        emojiA: "🧳",
        emojiB: "🚫",
        items: [
          { word: "t-shirt", emoji: "👕", bucket: "a" },
          { word: "toothbrush", emoji: "🪥", bucket: "a" },
          { word: "passport", emoji: "🛂", bucket: "a", minTrack: "explorers" },
          { word: "socks", emoji: "🧦", bucket: "a" },
          { word: "sofa", emoji: "🛋️", bucket: "b" },
          { word: "TV", emoji: "📺", bucket: "b" },
          { word: "bed", emoji: "🛏️", bucket: "b" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[2],
    },
    {
      type: "check",
      prompt: "Ask a partner: name one way to travel on land and one way to travel by air or sea.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — matching transportation words to pictures, sorting things into pack it and leave it, and spotting real AI in everyday life.",
      homework: "Name three ways to travel in English before bed tonight.",
    },
  ],
};

export const m8_week4: Lesson = {
  ...meta("m8_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask the class \"If we could go anywhere today, where would you go?\" and let a few kids answer in Korean before today's English sentence.",
      prompt: "Where should we go today? 🗺️",
    },
    {
      type: "concept",
      title: "Where Should We Go?",
      bigIdeas: [],
      lines: [
        { text: "If we could go anywhere today, where would you pick?" },
        { text: "However we get there, there's one sentence for it: \"Let's go by ___.\"" },
        { text: "\"Let's\" is a short way of saying \"let us\" — but we say it as one piece, like a single word.", minTrack: "explorers" },
        { text: "Let's build it together — and pick your favorite way to go!" },
      ],
      teacherNote:
        "\"Let's\" is a fixed suggestion chunk, just like \"Can I ___?\" back in Month 3 — teach it as one piece, not word-by-word. After building the airplane sentence, invite a few kids to rebuild it with train, ship, or another word of their choosing — a real choice makes the sentence feel truer, not just a drill.",
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time. Once it's built, ask a few kids to swap in their own favorite way to travel instead of \"airplane.\"",
      config: {
        engine: "sentence_builder",
        title: "Let's go by airplane.",
        words: [
          { text: "Let's", role: "other" },
          { text: "go", role: "verb" },
          { text: "by airplane", role: "other" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[2],
    },
    {
      ...AI_OR_NOT_SETS[2],
    },
    {
      type: "check",
      prompt: "Ask a few kids \"Let's go by ___?\" and let them answer with their own favorite way to travel.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we built \"Let's go by airplane,\" practiced suggesting our own favorite way to travel, helped Vora follow clear step-by-step instructions, and spotted real AI in everyday life.",
      homework: "Ask a family member \"Let's go by ___?\" tonight and let them pick their favorite way to travel too.",
    },
  ],
};
