import type { Lesson } from "../types";
import { getLessonMeta } from "../scopeAndSequence";

function meta(key: string) {
  const m = getLessonMeta(key);
  if (!m) throw new Error(`No scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const w1d1_hello_vora: Lesson = {
  ...meta("w1d1_hello_vora"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Wave hello to the class and say \"Hello!\" a few times, encouraging kids to wave back before you introduce Vora.",
      prompt: "Hello! 👋",
    },
    {
      type: "vocab",
      title: "Greeting Words",
      words: [
        { word: "hello", emoji: "👋" },
        { word: "goodbye", emoji: "🙋" },
        { word: "my name is...", emoji: "🧑" },
        { word: "friend", emoji: "🧑‍🤝‍🧑" },
      ],
    },
    {
      type: "concept",
      title: "Meet Vora",
      bigIdeas: ["natural_interaction"],
      lines: [
        { text: "Hi! My name is Vora." },
        { text: "I'm an AI — a computer friend who can talk and learn." },
        { text: "I'm not a real robot toy. I live inside a screen!" },
        { text: "I'm going to learn English with you this whole time we're together." },
      ],
      teacherNote:
        "Keep this concrete: Vora is a friendly character, not a lecture on AI. The goal is just \"Vora = a computer friend who talks and learns,\" nothing more technical yet.",
    },
    {
      type: "check",
      prompt: "Everyone wave and say \"Hello, Vora!\" together.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we said hello and goodbye, and we met Vora, our AI friend for this course.",
      homework: "Say \"hello\" and \"goodbye\" to one family member in English tonight.",
    },
  ],
};

export const w1d2_voras_classroom: Lesson = {
  ...meta("w1d2_voras_classroom"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Hold up a book (or point to one) and ask \"What is this?\" Model the answer \"It's a book\" before kids try.",
      prompt: "What is this?",
    },
    {
      type: "vocab",
      title: "Classroom Objects",
      words: [
        { word: "book", emoji: "📖" },
        { word: "pencil", emoji: "✏️" },
        { word: "chair", emoji: "🪑" },
        { word: "desk", emoji: "🗄️" },
        { word: "bag", emoji: "🎒" },
      ],
    },
    {
      type: "concept",
      title: "Vora Looks Around",
      bigIdeas: ["perception"],
      lines: [
        { text: "I can see things too — just like you!" },
        { text: "When I look at a picture, I try to name what's in it." },
        { text: "That's called perception — how I understand what I see." },
      ],
      teacherNote:
        "First use of the word \"perception\" — say it once, define it in one plain sentence, and move on. Don't quiz on the term itself.",
    },
    {
      type: "check",
      prompt: "Point to something in the room and ask a partner \"What is this?\"",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we named five classroom objects and asked \"What is this?\"",
    },
  ],
};

export const w1d3_what_is_ai: Lesson = {
  ...meta("w1d3_what_is_ai"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask: \"Is a book smart? Is a phone smart?\" Let kids answer with gut instinct — there's no wrong answer yet, you're just activating the idea.",
      prompt: "Smart helper, or regular thing?",
    },
    {
      type: "concept",
      title: "Smart Helper or Regular Thing?",
      bigIdeas: ["perception", "learning"],
      lines: [
        { text: "Some things can learn and answer questions — like me!" },
        { text: "Some things just sit there and don't change. That's okay too." },
        { text: "Let's sort some pictures together: smart helper, or regular thing?" },
      ],
      teacherNote:
        "This is the first classification loop of the course. Frame it as sorting, not testing — wrong guesses are expected and fine.",
    },
    {
      type: "activity",
      instructions: "As a class, decide together where each picture goes before anyone taps — this is a shared sort, not an individual quiz.",
      config: {
        engine: "train_the_robot",
        title: "Smart Helper or Regular Thing?",
        labelA: "Smart Helper",
        labelB: "Regular Thing",
        emojiA: "🤖",
        emojiB: "📦",
        items: [
          { word: "voice assistant", emoji: "🔊", bucket: "a" },
          { word: "phone", emoji: "📱", bucket: "a" },
          { word: "robot", emoji: "🤖", bucket: "a" },
          { word: "book", emoji: "📖", bucket: "b" },
          { word: "pencil", emoji: "✏️", bucket: "b" },
          { word: "chair", emoji: "🪑", bucket: "b" },
          { word: "ball", emoji: "⚽", bucket: "b" },
        ],
      },
    },
    {
      type: "check",
      prompt: "Ask one table: \"Tell me one smart helper you have at home.\"",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned that some things can learn and answer, and some things can't — and we practiced sorting them, just like Vora does.",
    },
  ],
};
