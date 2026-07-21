import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";
import { AI_OR_NOT_SETS, INSTRUCT_VORA_SCENARIOS } from "../aiLabBank";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m6_week1: Lesson = {
  ...meta("m6_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask: \"Is a lion big or small? Is a monkey big or small?\" Let kids answer with gut instinct before you teach the sentence pattern.",
      prompt: "Big animal, or small animal? 🦁",
    },
    {
      type: "vocab",
      title: "Wild Animals",
      words: [
        { word: "lion", emoji: "🦁" },
        { word: "elephant", emoji: "🐘" },
        { word: "monkey", emoji: "🐵" },
        { word: "zebra", emoji: "🦓" },
        { word: "penguin", emoji: "🐧" },
        { word: "giraffe", emoji: "🦒", minTrack: "explorers" },
        { word: "tiger", emoji: "🐯" },
      ],
    },
    {
      type: "concept",
      title: "Big Animal, Small Animal",
      bigIdeas: ["perception"],
      lines: [
        { text: "Look — it's a big elephant! And over there, it's a small monkey!" },
        { text: "\"Big\" and \"small\" go right before the animal name, just like in Korean!" },
        { text: "Deep in a forest, a hidden camera watches all day and night. When an animal walks by, AI helps it guess: lion, or mouse?" },
        { text: "Scientists use those camera photos to learn which animals live in a forest — without ever walking in themselves!", minTrack: "explorers" },
      ],
      teacherNote:
        "Adjective-before-noun order (\"a big lion\") matches Korean word order exactly — call this out as an easy win, not everything in English is a hard shift. The wildlife-camera example makes \"perception\" concrete: recognizing an animal from a blurry night photo is a genuinely hard version of the same sorting game Vora's been playing all year.",
    },
    {
      type: "activity",
      instructions: "Sort each animal: is it big, or small?",
      config: {
        engine: "train_the_robot",
        title: "Big Animal or Small Animal?",
        labelA: "Big",
        labelB: "Small",
        emojiA: "🐘",
        emojiB: "🐵",
        items: [
          { word: "elephant", emoji: "🐘", bucket: "a" },
          { word: "lion", emoji: "🦁", bucket: "a" },
          { word: "giraffe", emoji: "🦒", bucket: "a", minTrack: "explorers" },
          { word: "tiger", emoji: "🐯", bucket: "a" },
          { word: "monkey", emoji: "🐵", bucket: "b" },
          { word: "mouse", emoji: "🐭", bucket: "b" },
          { word: "rabbit", emoji: "🐰", bucket: "b" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[5],
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[5],
    },
    {
      type: "check",
      prompt: "Say \"It's a big ___\" or \"It's a small ___\" about an animal picture or toy.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned wild animal words and \"It's a big / small ___\" — and how wildlife cameras use AI to recognize which animal walked by — practiced spotting real AI in everyday life, and helped Vora follow clear instructions.",
      homework: "Find a picture of an animal at home and say \"It's a big ___\" or \"It's a small ___.\"",
    },
  ],
};

export const m6_week2: Lesson = {
  ...meta("m6_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Chant \"Lion, elephant, lion, elephant...\" together and ask \"What comes next?\" before today's pattern game.",
      prompt: "Lion, elephant, lion, elephant... what comes next? 🦁🐘",
    },
    {
      type: "concept",
      title: "Patterns Help Me See",
      bigIdeas: ["perception"],
      lines: [
        { text: "Remember the wildlife camera? It looks for patterns to guess which animal walked by." },
        { text: "Today, you get to find the pattern too!" },
      ],
      teacherNote:
        "Quick callback to Week 1's wildlife-camera example — no new teaching, just a bridge into today's pattern-prediction game.",
    },
    {
      type: "activity",
      instructions: "Look at the animal pattern and pick the picture that comes next. Then play a second game to reinforce it.",
      config: {
        engine: "pattern_predictor",
        title: "What Comes Next?",
        teacherNote:
          "First appearance of the pattern-prediction game this year — it reuses the \"same/different\" vocabulary from the foundations unit's Week 3 colors-and-shapes lesson. Read each sequence aloud with the animal names, not just the emoji, so kids connect the visual pattern to the English words.",
        rounds: [
          { sequence: ["🦁", "🐘", "🦁", "🐘"], answer: "🦁", options: ["🦁", "🐘", "🐧"] },
          { sequence: ["🐧", "🦒", "🐧", "🦒"], answer: "🐧", options: ["🐧", "🦒", "🐯"] },
          {
            sequence: ["🐯", "🐯", "🦓", "🦓", "🐯", "🐯"],
            answer: "🦓",
            options: ["🐯", "🦓", "🐧"],
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Flip two cards at a time to find a matching animal word and picture. If they match, they stay face up!",
      config: {
        engine: "memory_match",
        title: "Animal Words",
        pairs: [
          { word: "lion", emoji: "🦁" },
          { word: "elephant", emoji: "🐘" },
          { word: "monkey", emoji: "🐵" },
          { word: "zebra", emoji: "🦓" },
          { word: "penguin", emoji: "🐧" },
          { word: "giraffe", emoji: "🦒", minTrack: "explorers" },
          { word: "tiger", emoji: "🐯" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[5],
    },
    {
      type: "check",
      prompt: "Ask a partner: \"What comes next?\" about the pattern lion, elephant, lion, elephant.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — guessing what comes next in an animal pattern, matching animal words to pictures, and helping Vora follow clear step-by-step instructions.",
    },
  ],
};

export const m6_week3: Lesson = {
  ...meta("m6_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Flash an animal emoji quickly and have kids call out the English word before today's matching game starts.",
      prompt: "Name that animal, fast! 🐯",
    },
    {
      type: "concept",
      title: "Remembering Like Vora",
      bigIdeas: ["learning"],
      lines: [
        { text: "The more pictures I see, the better I get at remembering them — that's learning!" },
        { text: "Let's practice remembering animal words together." },
      ],
      teacherNote:
        "Short bridge connecting today's memory game to the idea that repetition builds recognition — no new AI content, just framing.",
    },
    {
      type: "activity",
      instructions: "Flip two cards at a time to find a matching animal word and picture. If they match, they stay face up! Then play a second game to reinforce it.",
      config: {
        engine: "memory_match",
        title: "Animal Words",
        pairs: [
          { word: "lion", emoji: "🦁" },
          { word: "elephant", emoji: "🐘" },
          { word: "monkey", emoji: "🐵" },
          { word: "zebra", emoji: "🦓" },
          { word: "penguin", emoji: "🐧" },
          { word: "giraffe", emoji: "🦒", minTrack: "explorers" },
          { word: "tiger", emoji: "🐯" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Look at the animal pattern and pick the picture that comes next.",
      config: {
        engine: "pattern_predictor",
        title: "What Comes Next?",
        teacherNote:
          "First appearance of the pattern-prediction game this year — it reuses the \"same/different\" vocabulary from the foundations unit's Week 3 colors-and-shapes lesson. Read each sequence aloud with the animal names, not just the emoji, so kids connect the visual pattern to the English words.",
        rounds: [
          { sequence: ["🦁", "🐘", "🦁", "🐘"], answer: "🦁", options: ["🦁", "🐘", "🐧"] },
          { sequence: ["🐧", "🦒", "🐧", "🦒"], answer: "🐧", options: ["🐧", "🦒", "🐯"] },
          {
            sequence: ["🐯", "🐯", "🦓", "🦓", "🐯", "🐯"],
            answer: "🦓",
            options: ["🐯", "🦓", "🐧"],
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[0],
    },
    {
      type: "check",
      prompt: "Ask a partner: \"What's this animal?\" and point to one of the matched cards.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — matching animal words to pictures, guessing what comes next in an animal pattern, and spotting real AI in everyday life.",
    },
  ],
};

export const m6_week4: Lesson = {
  ...meta("m6_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Say \"fan\" and \"pan\" slowly, back to back, a few times, without explaining yet.",
      prompt: "fan... pan... fan... pan...",
    },
    {
      type: "concept",
      title: "Remember This Sound?",
      bigIdeas: ["perception"],
      lines: [
        { text: "Remember the \"f\" sound? Bite your bottom lip gently and blow air." },
        { text: "We practiced this sound back in Week 3 of Vora's Classroom — let's see how much you remember!" },
        { text: "Let's listen very carefully and pick the word we hear: fan, or pan?" },
        { text: "Even grown-ups keep practicing sounds that aren't in their first language — you're doing exactly what language learners do!", minTrack: "explorers" },
      ],
      teacherNote:
        "Second quarter-checkpoint review — Korean has no /f/ phoneme, so this contrast is genuinely new rather than just underused, and benefits from repeated exposure across the year. If your class completed the foundations unit, this is a direct callback to Week 3 Day 3; if not, simply treat it as a first introduction.",
    },
    {
      type: "activity",
      instructions: "Play each word once, and have kids point to or say the picture they heard. Since this is review, see how quickly the class remembers before repeating any pair they find hard.",
      config: {
        engine: "minimal_pairs",
        title: "Listen Closely: f or p?",
        targetSound: "/f/ vs /p/",
        teacherNote:
          "This is a quarter-checkpoint review of the foundations unit's Week 3 /f/ vs /p/ contrast — Korean has no /f/ phoneme, so it's commonly approximated with /p/ or /h/ in loanwords. Expect it to still need practice even after Week 3; that's normal for a sound with no Korean equivalent.",
        pairs: [
          { wordA: { text: "fan", emoji: "🪭" }, wordB: { text: "pan", emoji: "🍳" } },
          { wordA: { text: "fine", emoji: "👍" }, wordB: { text: "pine", emoji: "🌲" } },
          { wordA: { text: "fork", emoji: "🍴" }, wordB: { text: "pork", emoji: "🥓" } },
          {
            wordA: { text: "full", emoji: "🈵" },
            wordB: { text: "pull", emoji: "🚪" },
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[0],
    },
    {
      ...AI_OR_NOT_SETS[0],
    },
    {
      type: "check",
      prompt: "Say \"fan\" and \"pan\" one more time — thumbs up if you can hear the difference now.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we reviewed the f sound from Week 3 — a great checkpoint before we meet two more tricky sounds later this year — helped Vora follow clear step-by-step instructions, and spotted real AI in everyday life.",
    },
  ],
};
