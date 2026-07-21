import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";
import { AI_OR_NOT_SETS, INSTRUCT_VORA_SCENARIOS } from "../aiLabBank";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m2_week1: Lesson = {
  ...meta("m2_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Show a world map or globe (or just sweep your arms wide and say \"the whole world!\") and ask: \"What country are we in right now?\" Let kids answer \"Korea!\" together.",
      prompt: "Hello, world! 🌍",
    },
    {
      type: "vocab",
      title: "World Words",
      words: [
        { word: "world", emoji: "🌍" },
        { word: "flag", emoji: "🚩" },
        { word: "food", emoji: "🍲" },
        { word: "dance", emoji: "💃" },
        { word: "music", emoji: "🎵" },
        { word: "clothes", emoji: "👘", minTrack: "explorers" },
      ],
    },
    {
      type: "concept",
      title: "I'm from Korea!",
      bigIdeas: ["societal_impact"],
      lines: [
        { text: "I'm from Korea!" },
        { text: "There are so many other countries too — like Japan, and the USA." },
        { text: "People in other countries speak different languages — but a translator app uses AI to help everyone understand each other." },
      ],
      teacherNote:
        "Start with \"I'm from Korea\" — every child can say this truthfully and proudly — before naming other countries. This is societal_impact's first appearance: keep the translator-app example concrete (e.g., \"like when a friend visits from another country and doesn't know Korean yet\").",
    },
    {
      type: "movement",
      title: "World Words Actions!",
      instructions:
        "Call out each world word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "World — spin around slowly with arms out wide", emoji: "🌍" },
        { text: "Flag — wave your arm high like a flag", emoji: "🚩" },
        { text: "Food — pretend to eat with a spoon", emoji: "🍲" },
        { text: "Dance — wiggle and dance in place", emoji: "💃" },
        { text: "Music — clap your hands to the beat", emoji: "🎵" },
        { text: "Clothes — pretend to put on a hat", emoji: "👘" },
      ],
    },
    {
      type: "activity",
      instructions: "As a class, decide together where each picture goes before anyone taps — talk through why kimchi and bibimbap are Korean food.",
      config: {
        engine: "train_the_robot",
        title: "From Korea or From Another Country?",
        labelA: "From Korea",
        labelB: "From Another Country",
        emojiA: "🇰🇷",
        emojiB: "🌎",
        items: [
          { word: "kimchi", emoji: "🥬", bucket: "a" },
          { word: "bibimbap", emoji: "🍚", bucket: "a" },
          { word: "hanbok", emoji: "👘", bucket: "a", minTrack: "explorers" },
          { word: "pizza", emoji: "🍕", bucket: "b" },
          { word: "taco", emoji: "🌮", bucket: "b" },
          { word: "sushi", emoji: "🍣", bucket: "b" },
          { word: "baguette", emoji: "🥖", bucket: "b" },
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
      type: "chant",
      title: "World Words Chant",
      instructions:
        "Say each call line and let kids answer with the response. The whole class echoes the response line back to you.",
      lines: [
        { call: "Where are you from, from, from?", response: "I'm from Korea, my home!" },
        { call: "What flies up high and waves so bright?", response: "It's our flag, up so high!" },
        { call: "What do we eat that tastes so great?", response: "That's our food, on every plate!" },
        { call: "What do we do to a happy beat?", response: "We dance, we dance, with happy feet!" },
      ],
    },
    {
      type: "check",
      prompt: "\"I'm from ___.\" — ask one student to say this about themselves.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned six world words, acted them out, practiced saying \"I'm from Korea,\" learned that translator apps use AI to help people understand each other, practiced spotting real AI in everyday life, helped Vora follow clear instructions, and chanted about the world together.",
      homework: "Tell a family member \"I'm from Korea\" in English tonight.",
    },
  ],
};

export const m2_week2: Lesson = {
  ...meta("m2_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Mime zipping up a suitcase and ask: \"What do we do first when we go on a trip?\" Take a few quick guesses before today's game.",
      prompt: "Let's go on a trip! ✈️",
    },
    {
      type: "concept",
      title: "Vora Follows Steps",
      bigIdeas: ["reasoning"],
      lines: [
        { text: "I do things in order, one step at a time — first, next, then, last." },
        { text: "Let's put a pretend trip in order together!" },
      ],
      teacherNote:
        "Quick reminder before the sequencing game — following ordered steps is Representation & Reasoning, the same skill behind an algorithm. Keep this brief; the game does the teaching.",
    },
    {
      type: "movement",
      title: "Pretend Trip Actions!",
      instructions:
        "Call out each trip step and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Pack your bag — pretend to zip a suitcase", emoji: "🧳" },
        { text: "Go to the airport — march in place", emoji: "🛫" },
        { text: "Fly on a plane — stretch your arms out like wings", emoji: "✈️" },
        { text: "Say hello — wave big and smile", emoji: "👋" },
        { text: "Try new food — rub your tummy and say yum", emoji: "🍜" },
      ],
    },
    {
      type: "activity",
      instructions: "Kids take turns tapping the next step. Read each step aloud with its sequencing word (\"First, pack your bag...\") as it's placed. Then play a second game to reinforce it.",
      config: {
        engine: "sequence_builder",
        title: "A Pretend Trip",
        steps: [
          { text: "Pack your bag", emoji: "🧳" },
          { text: "Go to the airport", emoji: "🛫" },
          { text: "Fly on a plane", emoji: "✈️" },
          { text: "Say hello!", emoji: "👋" },
          { text: "Try new food", emoji: "🍜", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Kids take turns flipping two cards. Say the English word out loud together whenever a word card flips.",
      config: {
        engine: "memory_match",
        title: "World Word Match",
        pairs: [
          { word: "world", emoji: "🌍" },
          { word: "flag", emoji: "🚩" },
          { word: "food", emoji: "🍲" },
          { word: "dance", emoji: "💃" },
          { word: "music", emoji: "🎵" },
          { word: "clothes", emoji: "👘", minTrack: "explorers" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[1],
    },
    {
      type: "chant",
      title: "Pretend Trip Chant",
      instructions:
        "Say each call line and act out the step together. The whole class echoes the response line back to you.",
      lines: [
        { call: "What do we do first, first, first?", response: "First we pack our bag, our bag!" },
        { call: "What comes next, tell me true?", response: "Next we go, the airport too!" },
        { call: "Then what do we do up high?", response: "Then we fly, up in the sky!" },
        { call: "Last of all, what do we say?", response: "Say hello — hooray, hooray!" },
      ],
    },
    {
      type: "check",
      prompt: "\"First we pack your bag, next we...\" — have a student finish the whole sequence out loud.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — ordering the steps of a pretend trip, acting out each step, matching world words to pictures, helping Vora follow clear step-by-step instructions, and chanting the trip steps together.",
    },
  ],
};

export const m2_week3: Lesson = {
  ...meta("m2_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Hold up an imaginary card and flip it dramatically. Ask: \"Ready to find matching pairs?\" Take a quick cheer from the class before starting.",
      prompt: "Let's find a match! 🃏",
    },
    {
      type: "concept",
      title: "Vora Remembers",
      bigIdeas: ["learning"],
      lines: [
        { text: "The more I see a word and picture together, the better I remember them." },
        { text: "Let's practice remembering world words together!" },
      ],
      teacherNote:
        "Brief reminder before the game — repeated exposure is how both Vora and kids get better at recognizing something, the Learning big idea. Keep it to a couple of lines; the matching game is the real practice.",
    },
    {
      type: "movement",
      title: "World Words on the Move!",
      instructions:
        "Call out each world word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "World — spin around slowly with arms out wide", emoji: "🌍" },
        { text: "Flag — wave your arm high like a flag", emoji: "🚩" },
        { text: "Food — pretend to eat with a spoon", emoji: "🍲" },
        { text: "Dance — wiggle and dance in place", emoji: "💃" },
        { text: "Music — clap your hands to the beat", emoji: "🎵" },
        { text: "Clothes — pretend to put on a hat", emoji: "👘" },
      ],
    },
    {
      type: "activity",
      instructions: "Kids take turns flipping two cards. Say the English word out loud together whenever a word card flips. Then play a second game to reinforce it.",
      config: {
        engine: "memory_match",
        title: "World Word Match",
        pairs: [
          { word: "world", emoji: "🌍" },
          { word: "flag", emoji: "🚩" },
          { word: "food", emoji: "🍲" },
          { word: "dance", emoji: "💃" },
          { word: "music", emoji: "🎵" },
          { word: "clothes", emoji: "👘", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Kids take turns tapping the next step. Read each step aloud with its sequencing word (\"First, pack your bag...\") as it's placed.",
      config: {
        engine: "sequence_builder",
        title: "A Pretend Trip",
        steps: [
          { text: "Pack your bag", emoji: "🧳" },
          { text: "Go to the airport", emoji: "🛫" },
          { text: "Fly on a plane", emoji: "✈️" },
          { text: "Say hello!", emoji: "👋" },
          { text: "Try new food", emoji: "🍜", minTrack: "explorers" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[2],
    },
    {
      type: "chant",
      title: "Off We Go Chant!",
      instructions:
        "Say each call line and act out the step together. The whole class echoes the response line back to you.",
      lines: [
        { call: "What's the first thing we should do?", response: "Pack our bag, me and you!" },
        { call: "Next, oh next, where do we go?", response: "To the airport, off we go!" },
        { call: "Then, oh then, up in the air?", response: "We fly and fly, without a care!" },
        { call: "Last of all, what do we say?", response: "Hello, hello — hooray, hooray!" },
      ],
    },
    {
      type: "check",
      prompt: "Ask a pair: \"Which one did you match?\" and have them answer with the English word.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — matching world words to pictures, acting them out, ordering the steps of a pretend trip, spotting real AI in everyday life, and chanting our pretend trip together.",
    },
  ],
};

export const m2_week4: Lesson = {
  ...meta("m2_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Point to yourself and say \"I'm from Korea!\" with a big proud smile. Ask kids to point to themselves too.",
      prompt: "Where are you from? 🇰🇷",
    },
    {
      type: "concept",
      title: "I'm from Korea!",
      bigIdeas: [],
      lines: [
        { text: "I'm from Korea. That's my country!" },
        { text: "\"I'm\" is a short way to say \"I am\" — two words squished into one." },
        { text: "Korean doesn't squish words together like that, so let's practice saying \"I'm\" as one quick sound.", minTrack: "explorers" },
      ],
      teacherNote:
        "Call out the contraction briefly (\"I'm\" = \"I am\") since Korean has no equivalent — model it as one chunk, not two words squeezed together, then move straight into building the sentence.",
    },
    {
      type: "movement",
      title: "Proud to Be From Korea!",
      instructions:
        "Call out each phrase and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "I'm — point to yourself with a big smile", emoji: "👉" },
        { text: "From — stretch your arms out wide", emoji: "🌍" },
        { text: "Korea — stand tall and give a thumbs up", emoji: "🇰🇷" },
        { text: "Proud — hands on your hips like a superhero", emoji: "🦸" },
        { text: "Hello — wave big to a friend", emoji: "👋" },
      ],
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, left to right. Then have every kid stand up, one at a time, and say \"I'm from Korea!\" out loud.",
      config: {
        engine: "sentence_builder",
        title: "I'm from Korea.",
        words: [
          { text: "I'm", role: "subject" },
          { text: "from", role: "other" },
          { text: "Korea", role: "object" },
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
      type: "chant",
      title: "I'm From Korea Chant",
      instructions:
        "Say each call line with a big voice. The whole class echoes the response line back to you.",
      lines: [
        { call: "Where are you from, tell me so?", response: "I'm from Korea, that's where I go!" },
        { call: "Say it once, say it loud!", response: "I'm from Korea, and I'm proud!" },
        { call: "Stand up tall, don't be shy!", response: "I'm from Korea — reach for the sky!" },
        { call: "One more time, all together now!", response: "I'm from Korea — take a bow!" },
      ],
    },
    {
      type: "check",
      prompt: "\"I'm from ___.\" — each kid says this with confidence, standing tall.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today every kid stood up and proudly said \"I'm from Korea!\" — a sentence that's true for all of us — acted it out with big proud actions, helped Vora follow clear instructions, spotted real AI in everyday life, and chanted it together.",
      homework: "Say \"I'm from Korea\" to a family member tonight, standing tall and proud.",
    },
  ],
};
