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
        {
          text: "I'm an AI — a computer friend who can talk and learn.",
          textSimple: "I'm a computer friend. I can talk and learn!",
        },
        { text: "I'm not a real robot toy. I live inside a screen!" },
        {
          text: "I'm going to learn English with you this whole time we're together.",
          textSimple: "I will learn English with you all year!",
        },
      ],
      teacherNote:
        "Keep this concrete: Vora is a friendly character, not a lecture on AI. The goal is just \"Vora = a computer friend who talks and learns,\" nothing more technical yet.",
    },
    {
      type: "movement",
      title: "Greeting Actions!",
      instructions:
        "Call out each greeting word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Hello — wave both hands big and high", emoji: "👋" },
        { text: "Goodbye — wave slowly and blow a kiss", emoji: "🙋" },
        { text: "My name is... — point to yourself and smile big", emoji: "🧑" },
        { text: "Friend — link arms with a neighbor and hop", emoji: "🧑‍🤝‍🧑" },
      ],
    },
    {
      type: "chant",
      title: "Hello and Goodbye Chant",
      instructions:
        "Say each call line and wave (or point) as you say it. The whole class echoes the response line back to you.",
      lines: [
        { call: "Hello, hello, what do we say?", response: "Hello, hello, hooray, hooray!" },
        { call: "Who is this? Who is this?", response: "It's my friend, it's my friend!" },
        {
          call: "Time to go, what do we say?",
          response: "Goodbye, goodbye, see you today!",
          minTrack: "explorers",
        },
        { call: "Hello, goodbye, what do we say?", response: "Hello, friend! Goodbye, friend!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Everyone wave and say \"Hello, Vora!\" together.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we said hello and goodbye, met Vora, our AI friend for this course, acted out our greetings, and chanted hello and goodbye together.",
      summarySimple: "Today we said hello and goodbye to our new friend Vora!",
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
        {
          text: "When I look at a picture, I try to name what's in it.",
          textSimple: "I look at a picture. I try to name it!",
        },
        {
          text: "That's called perception — how I understand what I see.",
          textSimple: "That's called perception. It means understanding what I see.",
        },
      ],
      teacherNote:
        "First use of the word \"perception\" — say it once, define it in one plain sentence, and move on. Don't quiz on the term itself.",
    },
    {
      type: "movement",
      title: "Classroom Object Actions!",
      instructions:
        "Call out each classroom object and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Book — open your hands like a book and 'read'", emoji: "📖" },
        { text: "Pencil — pretend to write in the air", emoji: "✏️" },
        { text: "Chair — pretend to sit down slowly", emoji: "🪑" },
        { text: "Desk — pat your hands on an imaginary desk", emoji: "🗄️" },
        { text: "Bag — swing an imaginary bag onto your shoulder", emoji: "🎒" },
      ],
    },
    {
      type: "chant",
      title: "What Is This? Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching classroom object. The whole class echoes the response line back to you.",
      lines: [
        { call: "What is this? What is this?", response: "It's a book, it's a book!" },
        { call: "What is this? Tell me true!", response: "It's a pencil, yellow and new!" },
        {
          call: "What is this? Look and see!",
          response: "It's a chair, for you and me!",
          minTrack: "explorers",
        },
        { call: "What is this? What do you spy?", response: "It's a bag, hanging up high!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Point to something in the room and ask a partner \"What is this?\"",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we named five classroom objects, asked \"What is this?\", acted out each object, and chanted \"What is this?\" together.",
      summarySimple: "Today we learned classroom words and chanted 'What is this?' together!",
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
      promptSimple: "Is it smart, or just a thing?",
    },
    {
      type: "concept",
      title: "Smart Helper or Regular Thing?",
      bigIdeas: ["perception", "learning"],
      lines: [
        {
          text: "Some things can learn and answer questions — like me!",
          textSimple: "Some things can learn. I can learn too!",
        },
        {
          text: "Some things just sit there and don't change. That's okay too.",
          textSimple: "Some things don't learn. That's okay!",
        },
        {
          text: "Let's sort some pictures together: smart helper, or regular thing?",
          textSimple: "Let's sort pictures: smart or not smart?",
        },
      ],
      teacherNote:
        "This is the first classification loop of the course. Frame it as sorting, not testing — wrong guesses are expected and fine.",
    },
    {
      type: "movement",
      title: "Smart Helper or Regular Thing Actions!",
      instructions:
        "Call out each item and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        {
          text: "Voice assistant — cup your hand to your ear and say 'Hello!'",
          emoji: "🔊",
          minTrack: "explorers",
        },
        { text: "Phone — hold a pretend phone to your ear", emoji: "📱" },
        { text: "Robot — walk stiffly like a robot", emoji: "🤖" },
        { text: "Book — open your hands like a book", emoji: "📖" },
        { text: "Pencil — pretend to write in the air", emoji: "✏️" },
        { text: "Ball — pretend to bounce a ball", emoji: "⚽" },
      ],
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
      type: "chant",
      title: "Smart Helper Chant",
      instructions:
        "Say each call line and point to (or hold up) the matching picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Robot, robot, what are you?", response: "I'm a smart helper, that is true!" },
        { call: "Phone, phone, tell me so,", response: "I'm a smart helper, yes, I know!" },
        {
          call: "Book, book, can you learn?",
          response: "No, I'm a regular thing, it's my turn!",
          minTrack: "explorers",
        },
        { call: "Ball, ball, smart or plain?", response: "Just a regular thing, again and again!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Ask one table: \"Tell me one smart helper you have at home.\"",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned that some things can learn and answer, and some things can't — we practiced sorting them just like Vora does, acted out smart helpers and regular things, and chanted about them together.",
      summarySimple: "Today we learned that some things are smart helpers and some things are not!",
    },
  ],
};
