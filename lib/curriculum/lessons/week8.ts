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
      promptSimple: "AI is not a real person.",
    },
    {
      type: "concept",
      title: "Talking to AI Safely",
      bigIdeas: ["natural_interaction", "societal_impact"],
      lines: [
        {
          text: "AI only knows what it's been shown or told — it doesn't know you unless you tell it.",
          textSimple: "AI only knows what you tell it.",
        },
        {
          text: "Never share your real name, address, or photos with an AI without a grown-up.",
          textSimple: "Don't share your name or photos with AI alone.",
        },
        {
          text: "If an AI says something confusing or scary, tell a grown-up right away.",
          textSimple: "If AI says something scary, tell a grown-up.",
        },
        {
          text: "AI can make mistakes — just like I did with the calculator sort! It's okay to double-check.",
          textSimple: "AI can make mistakes. It's okay to double-check!",
        },
      ],
      teacherNote:
        "Read each rule aloud once, then ask the class to repeat it back in their own words (English or Korean, either is fine here) — this is a discussion lesson, not a decoding-practice lesson. Deliberately kept to four short lines.",
    },
    {
      type: "story",
      title: "Junho and the Curious Question",
      teacherNote:
        "Read this right after the four safety rules — it turns the abstract rules into one concrete choice a kid actually makes. Use Junho's choice as the model answer for the check-in question at the end of the lesson.",
      panels: [
        {
          text: "Junho loved chatting with a friendly AI helper on the family tablet, with his mom nearby.",
          textSimple: "Junho chats with an AI helper. Mom is nearby.",
          emoji: "📱",
        },
        {
          text: "One day, the AI helper asked, \"What's your home address? I'd love to know where you live!\"",
          textSimple: "The AI asked for his home address.",
          emoji: "❓",
        },
        {
          text: "Junho paused. He remembered Vora's rule: never share your address without a grown-up.",
          textSimple: "Junho remembered: don't share your address alone!",
          emoji: "🤐",
        },
        {
          text: "Instead of answering, Junho called his mom over and told her what the AI had asked.",
          textSimple: "Junho told his mom instead of answering.",
          emoji: "🙋",
        },
        {
          text: "\"Great choice!\" said Vora. \"An AI only knows what you tell it — checking with a grown-up first keeps you in control.\"",
          textSimple: "\"Great choice!\" said Vora. Asking a grown-up is smart!",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "Why didn't Junho answer the AI helper's question right away?",
          discussionNote: "He remembered the safety rule about not sharing personal information like an address without checking with a grown-up first — the story makes that rule concrete.",
        },
        {
          question: "What would YOU do if an AI or app asked you a question that felt too personal?",
          discussionNote: "Open discussion — guide kids back to telling a grown-up, the same choice Junho made.",
        },
      ],
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
      type: "team_relay",
      title: "AI Safety Relay!",
      instructions:
        "Split the class into two or three teams. Read one prompt aloud at a time; teams take turns racing to give a good answer using today's safety rules. Cheer for every good answer, then move to the next team.",
      prompts: [
        { text: "Name one thing you should NEVER share with an AI without asking a grown-up!", emoji: "🤐" },
        { text: "Name someone you could tell if an AI said something scary or confusing!", emoji: "✋" },
        { text: "Name one rule for talking to AI safely!", emoji: "✅" },
        { text: "Name something you should do if you think an AI made a mistake!", emoji: "🤷", minTrack: "explorers" },
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
        {
          call: "AI, AI, if it's scary —",
          response: "Tell a grown-up, don't be wary!",
          minTrack: "explorers",
        },
        {
          call: "AI, AI, can it be wrong?",
          response: "Yes it can — double-check along!",
          minTrack: "explorers",
        },
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
      summarySimple: "Today we learned safety rules for talking to AI, and chanted them together!",
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
      type: "story",
      title: "Vora Remembers Everything",
      teacherNote:
        "Read this before the four review rounds as a fun framing device — pause on each panel and ask the class which past lesson it's referencing before moving on.",
      panels: [
        {
          text: "Standing at the carnival games, Vora looked back at everything the class had taught it this unit.",
          textSimple: "Vora remembers everything this unit!",
          emoji: "🎉",
        },
        {
          text: "\"Remember when you taught me dogs and birds are animals, but buses and trains are vehicles?\" Vora grinned.",
          textSimple: "\"You taught me animals and vehicles!\"",
          emoji: "🐶",
        },
        {
          text: "\"And you taught me the right order for a morning routine — first, next, then, last!\"",
          textSimple: "\"You taught me the right order too!\"",
          emoji: "🔁",
        },
        {
          text: "\"You even helped me hear the difference between tricky sounds, like light and right!\"",
          textSimple: "\"You helped me hear tricky sounds!\"",
          emoji: "👂",
        },
        {
          text: "Vora wasn't magic at the start of the unit — every single game, it got a little bit better because the class taught it, step by step, example by example.",
          textSimple: "No magic! Vora learned from YOU, bit by bit.",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "Which carnival game reminded you of something Vora learned earlier in the unit?",
          discussionNote: "Open discussion — connect back to specific past lessons (animals/vehicles, the morning routine, the sound-listening lessons).",
        },
        {
          question: "What's one thing YOU got better at this unit, just like Vora did?",
          discussionNote: "Open discussion — encourage personal reflection alongside the parallel to Vora's learning.",
        },
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
      type: "stand_sit",
      title: "Unit Review True or False!",
      instructions:
        "Read each statement. Kids STAND UP if they think it's true, and crouch down low if they think it's false. Reveal the answer, then give the short explanation before moving on.",
      statements: [
        { text: "A dog is a vehicle.", isTrue: false, explanation: "No — a dog is an animal!", emoji: "🐶" },
        { text: "First, next, then, and last help us put steps in the right order.", isTrue: true, explanation: "Yes! Those words tell us the order to do things in.", emoji: "🔁" },
        { text: "\"Light\" and \"right\" sound exactly the same.", isTrue: false, explanation: "No — they start with different sounds, /l/ and /r/!", emoji: "💡" },
        {
          text: "Vora got better at these games because it practiced with YOUR help all unit long.",
          isTrue: true,
          explanation: "Yes! That's exactly how Vora — and real AI — learns: lots of examples and practice.",
          emoji: "🤖",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "chant",
      title: "Carnival Review Chant!",
      instructions:
        "Say each call line and have the whole class echo the response line back to you.",
      lines: [
        { call: "Carnival, carnival, what do you see?", response: "I have two dogs, look at me!" },
        { call: "Carnival, carnival, tell me true —", response: "I have two birds, how about you?" },
        {
          call: "Carnival, carnival, hop this way —",
          response: "I have two rabbits, hip hip hooray!",
          minTrack: "explorers",
        },
        {
          call: "Carnival, carnival, our review's done —",
          response: "We learned so much and had such fun!",
          minTrack: "explorers",
        },
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
      summarySimple: "Today we played review games and sang a carnival chant with Vora!",
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
        {
          text: "This unit, you taught me animals, food, colors, and how AI helpers work.",
          textSimple: "You taught me lots of new things this unit!",
        },
        {
          text: "You showed me that even AI needs lots of examples, and that it's okay to be wrong sometimes.",
          textSimple: "AI needs lots of examples. It's okay to be wrong!",
        },
        {
          text: "Now it's your turn: invent your own category and teach it to me!",
          textSimple: "Now it's your turn to teach me something new!",
        },
      ],
      teacherNote:
        "This is the unit's capstone. Split the class into small groups; each group picks a category (\"toys vs. not toys,\" \"sports vs. not sports\" — anything with real classroom objects works), describes it to the class in English (\"A ___ is a toy\"), then leads the room through a live version of the Train the Robot loop using real objects. The app activity below is one worked example to run together first, as a model.",
    },
    {
      type: "story",
      title: "Somi Teaches Vora Something New",
      teacherNote:
        "Read this right after the concept intro, before the group role-play activity — it's a worked \"story version\" of exactly what each small group is about to do live.",
      panels: [
        {
          text: "On the very last day, it was finally the kids' turn to be the teacher.",
          textSimple: "Today, kids get to teach Vora!",
          emoji: "🍎",
        },
        {
          text: "Somi decided to teach Vora a brand new category: musical instrument, or not a musical instrument.",
          textSimple: "Somi picks a new category: instrument or not!",
          emoji: "🎸",
        },
        {
          text: "She showed just a few examples: a drum and a guitar are instruments. A spoon and a rock are not.",
          textSimple: "Drum and guitar: instruments. Spoon and rock: not!",
          emoji: "🥁",
        },
        {
          text: "Vora thought hard about the examples, comparing them carefully.",
          textSimple: "Vora thought hard about the examples.",
          emoji: "🧠",
        },
        {
          text: "Then Somi held up something brand new: a violin! \"That's a musical instrument!\" guessed Vora — correct!",
          textSimple: "A violin! \"Instrument!\" said Vora. Right!",
          emoji: "🎻",
        },
        {
          text: "Vora wasn't magic — Somi taught it with just a few clear examples, the exact same way Vora has learned everything, all unit long, from the whole class.",
          textSimple: "No magic! Somi taught Vora with examples, like always.",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "How did Somi teach Vora a brand new category it had never seen before?",
          discussionNote: "She showed just a few clear examples of each group — the same train-the-robot pattern used all unit — showing that's really how Vora (and real AI) learns.",
        },
        {
          question: "What category would YOU want to teach Vora today?",
          discussionNote: "Open discussion — this directly sets up each group's own invented category for the live activity.",
        },
      ],
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
      type: "class_vote",
      title: "Pick a Category to Teach!",
      instructions:
        "Read each option aloud. Kids vote by raising their hands for the category they think would be the most fun to teach Vora — celebrate the variety of ideas before groups head off to invent their own real category.",
      question: "Which invented category do you think would be the most fun to teach Vora?",
      options: [
        { text: "Toys vs. not toys", emoji: "🧸" },
        { text: "Sports vs. not sports", emoji: "⚽" },
        { text: "Yummy vs. not yummy", emoji: "🍬" },
        { text: "Something your group invents", emoji: "💡" },
      ],
    },
    {
      type: "chant",
      title: "Teach Vora Chant!",
      instructions:
        "Say each call line and have the whole class echo the response line back to you.",
      lines: [
        { call: "Teacher Vora, what do you see?", response: "A ball is a toy, bounce with me!" },
        { call: "Teacher Vora, tell me true —", response: "A teddy bear's a toy for you!" },
        {
          call: "Teacher Vora, what do you say?",
          response: "A book is not a toy today!",
          minTrack: "explorers",
        },
        {
          call: "Teacher Vora, we've learned so much —",
          response: "Now it's our turn to teach as such!",
          minTrack: "explorers",
        },
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
      summarySimple: "Today you taught Vora something new. Great job!",
    },
  ],
};
