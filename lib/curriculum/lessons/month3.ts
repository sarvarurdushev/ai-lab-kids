import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";
import { AI_OR_NOT_SETS, INSTRUCT_VORA_SCENARIOS } from "../aiLabBank";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m3_week1: Lesson = {
  ...meta("m3_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Pretend two kids are already playing with blocks. Walk up and ask, hopefully, \"Can I play?\" Have the class echo the question with you before you explain anything.",
      prompt: "Can I play? 🧩",
    },
    {
      type: "vocab",
      title: "Friendship Words",
      words: [
        { word: "friend", emoji: "🧑‍🤝‍🧑" },
        { word: "share", emoji: "🤝" },
        { word: "play", emoji: "🧩" },
        { word: "kind", emoji: "❤️", minTrack: "explorers" },
        { word: "sorry", emoji: "😔" },
        { word: "happy", emoji: "😊" },
      ],
    },
    {
      type: "concept",
      title: "Vora Takes Turns",
      bigIdeas: ["natural_interaction"],
      lines: [
        { text: "When I want to join a game, I ask, \"Can I play?\"" },
        { text: "And when I have something good to share, I say, \"Let's share.\"" },
        { text: "\"Can I ___?\" starts with a little helper word, just like \"Do you ___?\" did.", minTrack: "explorers" },
        { text: "A good voice assistant listens quietly until you stop talking, then it answers — that's how good friends take turns too." },
      ],
      teacherNote:
        "\"Can I ___?\" is the second auxiliary-fronted question in the curriculum after \"Do you ___?\" in the foundations unit — name the shared pattern explicitly so it transfers. The AI thread: natural conversation depends on turn-taking, which is exactly what a voice assistant is designed to imitate (wait for silence, then respond).",
    },
    {
      type: "activity",
      instructions: "Kids take turns tapping the next step of making a new friend. Read each step aloud together as it's placed, then act it out with a partner.",
      config: {
        engine: "sequence_builder",
        title: "Making a Friend",
        steps: [
          { text: "Say hello", emoji: "👋" },
          { text: "Ask their name", emoji: "🙋" },
          { text: "Ask to play", emoji: "🧩" },
          { text: "Say thank you", emoji: "🙏" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[2],
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[2],
    },
    {
      type: "check",
      prompt: "Turn to a partner. One kid asks \"Can I play?\" and the other answers \"Yes! Let's share.\"",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned to ask \"Can I play?\" and offer \"Let's share,\" saw that a good voice assistant listens and takes turns like a good friend, practiced spotting real AI in everyday life, and helped Vora follow clear instructions.",
      homework: "Ask someone at home \"Can I play?\" before you join their game tonight.",
    },
  ],
};

export const m3_week2: Lesson = {
  ...meta("m3_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Say \"Can I play?\" one word at a time, pausing between each word like you're placing a puzzle piece: \"Can... I... play?\" Have the class echo it the same broken-up way, then all together fast.",
      prompt: "Can... I... play? 🧩",
    },
    {
      type: "concept",
      title: "Vora Listens for Order",
      bigIdeas: ["natural_interaction"],
      lines: [
        { text: "Remember: a good friend — and a good voice assistant — waits and listens before answering." },
        { text: "Today let's build the question \"Can I play?\" one word at a time, just like taking turns." },
      ],
      teacherNote:
        "Short recap only — the natural_interaction big idea (turn-taking) was fully taught in Week 1; here it's briefly reconnected to today's word-order game before playing.",
    },
    {
      type: "activity",
      instructions: "Build the question one tile at a time, left to right. Then have a few kids ask the whole question out loud to a partner across the room. Then play a second game to reinforce it.",
      config: {
        engine: "sentence_builder",
        title: "Can I play?",
        words: [
          { text: "Can", role: "other" },
          { text: "I", role: "subject" },
          { text: "play", role: "verb" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Kids flip two cards at a time, trying to find the matching feeling word and face. Say the feeling word aloud together every time there's a match.",
      config: {
        engine: "memory_match",
        title: "Feelings Match",
        pairs: [
          { word: "happy", emoji: "😊" },
          { word: "sad", emoji: "😢" },
          { word: "kind", emoji: "❤️" },
          { word: "excited", emoji: "🤩", minTrack: "explorers" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[2],
    },
    {
      type: "check",
      prompt: "Ask one kid to say the whole question out loud, in order: \"Can I play?\"",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — building the question \"Can I play?\" tile by tile, matching feeling words like happy, sad, and kind to faces, and helping Vora follow clear step-by-step instructions.",
    },
  ],
};

export const m3_week3: Lesson = {
  ...meta("m3_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Make a big happy face, then a sad face, then a kind, gentle face. Ask the class to call out the feeling word for each one before you explain today's game.",
      prompt: "How do I feel? 😊😢❤️",
    },
    {
      type: "concept",
      title: "Vora Notices Feelings",
      bigIdeas: ["natural_interaction"],
      lines: [
        { text: "Good friends notice how you feel, just by listening and watching closely." },
        { text: "Today let's match feeling words to faces, the same way a good friend would." },
      ],
      teacherNote:
        "Short recap only — natural_interaction (turn-taking/listening) was the full Week 1 teach; here it's linked to reading feelings as another way friends pay close attention to each other, before the matching game.",
    },
    {
      type: "activity",
      instructions: "Kids flip two cards at a time, trying to find the matching feeling word and face. Say the feeling word aloud together every time there's a match. Then play a second game to reinforce it.",
      config: {
        engine: "memory_match",
        title: "Feelings Match",
        pairs: [
          { word: "happy", emoji: "😊" },
          { word: "sad", emoji: "😢" },
          { word: "kind", emoji: "❤️" },
          { word: "excited", emoji: "🤩", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Build the question one tile at a time, left to right. Then have a few kids ask the whole question out loud to a partner across the room.",
      config: {
        engine: "sentence_builder",
        title: "Can I play?",
        words: [
          { text: "Can", role: "other" },
          { text: "I", role: "subject" },
          { text: "play", role: "verb" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[3],
    },
    {
      type: "check",
      prompt: "Ask one kid to name one feeling word from the matching game and make that face.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — matching feeling words like happy, sad, and kind to faces, building the question \"Can I play?\" one word at a time, and spotting real AI in everyday life.",
    },
  ],
};

export const m3_week4: Lesson = {
  ...meta("m3_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Say \"light\" and \"right\" slowly, back to back, a few times. Don't explain yet — just let the class notice the sounds are close but different, the same way they did back in Week 2.",
      prompt: "light... right... light... right...",
    },
    {
      type: "concept",
      title: "Listening Like a Good Friend",
      bigIdeas: ["perception"],
      lines: [
        { text: "Remember \"l\" and \"r\"? They're still two different sounds in English." },
        { text: "Good friends listen very carefully to each other — let's listen carefully too." },
        { text: "This time, try to catch the difference before I say each word twice." },
      ],
      teacherNote:
        "Quarter-checkpoint review of the foundations unit's Week 2 Day 3 /l/-/r/ contrast — the single highest-frequency Korean-learner sound gap, since Korean's single liquid consonant covers both English sounds. Expect the same level of difficulty as Week 2; that's normal spaced repetition, not regression. Framing it as \"listening like a good friend\" keeps it tied to this month's theme.",
    },
    {
      type: "activity",
      instructions: "Play each word once (tap the speaker icon), and have kids point to or say the picture they heard. Repeat any pair the class finds hard.",
      config: {
        engine: "minimal_pairs",
        title: "Listen Closely: light or right?",
        targetSound: "/l/ vs /r/",
        teacherNote:
          "Quarter-checkpoint review of the Week 2 Day 3 /l/-/r/ minimal pairs lesson — same pair set, intentionally, since spaced repetition is what makes this contrast stick for Korean L1 speakers.",
        pairs: [
          { wordA: { text: "light", emoji: "💡" }, wordB: { text: "right", emoji: "👉" } },
          { wordA: { text: "lead", emoji: "🚶" }, wordB: { text: "read", emoji: "📖" } },
          { wordA: { text: "load", emoji: "📦" }, wordB: { text: "road", emoji: "🛣️" } },
          { wordA: { text: "lock", emoji: "🔒" }, wordB: { text: "rock", emoji: "🪨" } },
          { wordA: { text: "low", emoji: "⬇️" }, wordB: { text: "row", emoji: "🚣" } },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[3],
    },
    {
      ...AI_OR_NOT_SETS[3],
    },
    {
      type: "check",
      prompt: "Say \"light\" and \"right\" one more time — thumbs up if your ears caught the difference today.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we listened closely for the difference between l and r again, a little easier every time we practice, helped Vora follow clear step-by-step instructions, and spotted real AI in everyday life.",
    },
  ],
};
