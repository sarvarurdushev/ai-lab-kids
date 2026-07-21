import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";
import { AI_OR_NOT_SETS, INSTRUCT_VORA_SCENARIOS } from "../aiLabBank";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m11_week1: Lesson = {
  ...meta("m11_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Make a big happy face, then a sad face, then a surprised face — ask the class each time: \"How do I feel?\" Let them answer in Korean or English before teaching today's sentence pattern.",
      prompt: "How do I feel?",
    },
    {
      type: "vocab",
      title: "Feelings",
      words: [
        { word: "happy", emoji: "😊" },
        { word: "sad", emoji: "😢" },
        { word: "angry", emoji: "😠" },
        { word: "scared", emoji: "😨" },
        { word: "surprised", emoji: "😲", minTrack: "explorers" },
        { word: "tired", emoji: "😴" },
      ],
    },
    {
      type: "concept",
      title: "Vora Sees a Smile",
      bigIdeas: ["natural_interaction", "perception"],
      lines: [
        { text: "Look at my face! Can you guess how I feel?" },
        { text: "I see a big smile, so I might guess: happy! But seeing a smile isn't the same as really knowing how you feel inside." },
        { text: "Only you really know how you feel. Let's practice saying it together: I feel ___." },
        { text: "Even the smartest AI can only guess from a picture — it can't feel a warm hug or a hard day, the way you can.", minTrack: "explorers" },
      ],
      teacherNote:
        "This month's honest AI boundary: recognizing a facial expression (a shape a camera can detect) isn't the same as understanding a feeling. Also flag the grammar shift explicitly: \"I feel ___\" uses a real verb (feel), unlike the \"It's ___\" copula pattern used all year (Months 1, 6, and 7) — a quick side-by-side (\"It's sunny\" vs. \"I feel happy\") helps prevent kids from saying \"I'm feel happy\" or overusing \"it's\" for their own feelings.",
    },
    {
      type: "activity",
      instructions: "As a class, decide together where each feeling goes before anyone taps — happy feelings on one side, not-happy feelings on the other.",
      config: {
        engine: "train_the_robot",
        title: "Happy Feeling or Not Happy Feeling?",
        labelA: "Happy",
        labelB: "Not Happy",
        emojiA: "😊",
        emojiB: "😢",
        items: [
          { word: "happy", emoji: "😊", bucket: "a" },
          { word: "excited", emoji: "🤩", bucket: "a" },
          { word: "laughing", emoji: "😆", bucket: "a" },
          { word: "sad", emoji: "😢", bucket: "b" },
          { word: "angry", emoji: "😠", bucket: "b" },
          { word: "scared", emoji: "😨", bucket: "b" },
          { word: "tired", emoji: "😴", bucket: "b" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[4],
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[4],
    },
    {
      type: "check",
      prompt: "Make a feeling face without talking — can a partner guess and say \"You feel ___\"?",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we named six feelings and learned \"I feel ___\" — how an AI can spot a smile, but can't truly know how someone feels inside — practiced spotting real AI in everyday life, and helped Vora follow clear instructions.",
      homework: "Ask a family member \"How do you feel?\" tonight and really listen to their answer.",
    },
  ],
};

export const m11_week2: Lesson = {
  ...meta("m11_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Act out a huge happy smile and freeze like a photo — ask the class: \"How do I feel?\" Tell them today we're going to build that sentence together, one word at a time.",
      prompt: "Freeze! How do I feel? 📸",
    },
    {
      type: "concept",
      title: "Just a Guess",
      bigIdeas: ["natural_interaction"],
      lines: [
        { text: "Remember — I can see a smile in a picture, but only you really know how you feel inside." },
        { text: "Let's practice saying it together: I feel ___." },
      ],
      teacherNote:
        "Quick reinforcement of Week 1's AI-limits idea — no new teaching here, just a short bridge into today's sentence-building game.",
    },
    {
      type: "activity",
      instructions: "First, act out \"happy\" with your face and body — no words! Then build the sentence tile by tile and say it together. Afterward, play a second game to reinforce it.",
      config: {
        engine: "sentence_builder",
        title: "I feel happy.",
        words: [
          { text: "I", role: "subject" },
          { text: "feel", role: "verb" },
          { text: "happy", role: "other" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Flip two cards at a time. When you find a feeling word, act it out with your face and body before saying it in English!",
      config: {
        engine: "memory_match",
        title: "Feelings Match",
        pairs: [
          { word: "happy", emoji: "😊" },
          { word: "sad", emoji: "😢" },
          { word: "angry", emoji: "😠" },
          { word: "scared", emoji: "😨" },
          { word: "surprised", emoji: "😲", minTrack: "explorers" },
          { word: "tired", emoji: "😴" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[4],
    },
    {
      type: "check",
      prompt: "Ask a partner: \"How do you feel?\" — can they answer with \"I feel ___\"?",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — building the sentence \"I feel happy\" one tile at a time, matching feeling words to faces, and helping Vora follow clear step-by-step instructions.",
      homework: "Act out a feeling for your family tonight and see if they can guess it in English.",
    },
  ],
};

export const m11_week3: Lesson = {
  ...meta("m11_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask the class to make three different feeling faces in a row — happy, sad, surprised — as fast as they can. Then tell them today we'll match feeling words to pictures.",
      prompt: "Happy, sad, surprised — go! 🎭",
    },
    {
      type: "concept",
      title: "Matching Feelings",
      bigIdeas: ["learning"],
      lines: [
        { text: "Remember, I can spot a smile in a photo — but I get better at it by seeing lots and lots of examples, just like you're about to do!" },
        { text: "Let's match some feeling words to faces!" },
      ],
      teacherNote:
        "Brief callback to Week 1's AI-limits idea, reframed through Big Idea 3 (Learning): repeated exposure is how both Vora and kids build recognition.",
    },
    {
      type: "activity",
      instructions: "Flip two cards at a time. When you find a feeling word, act it out with your face and body before saying it in English! Then play a second game to reinforce it.",
      config: {
        engine: "memory_match",
        title: "Feelings Match",
        pairs: [
          { word: "happy", emoji: "😊" },
          { word: "sad", emoji: "😢" },
          { word: "angry", emoji: "😠" },
          { word: "scared", emoji: "😨" },
          { word: "surprised", emoji: "😲", minTrack: "explorers" },
          { word: "tired", emoji: "😴" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "First, act out \"happy\" with your face and body — no words! Then build the sentence tile by tile and say it together.",
      config: {
        engine: "sentence_builder",
        title: "I feel happy.",
        words: [
          { text: "I", role: "subject" },
          { text: "feel", role: "verb" },
          { text: "happy", role: "other" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[5],
    },
    {
      type: "check",
      prompt: "Ask a partner: \"Which feeling did you match?\" — can they say the English word?",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — matching feeling words to faces, building the sentence \"I feel happy\" one tile at a time, and spotting real AI in everyday life.",
      homework: "Play a quick feelings guessing game with your family tonight.",
    },
  ],
};

export const m11_week4: Lesson = {
  ...meta("m11_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask a few kids: \"How do you feel right now — really?\" Quick, honest answers in any language before today's sentence.",
      prompt: "How do you feel today?",
    },
    {
      type: "concept",
      title: "I Feel Happy!",
      bigIdeas: [],
      lines: [
        { text: "I feel happy today, because I get to see you!" },
        { text: "How do YOU feel right now? Happy? Tired? Something else — any true answer is a great answer." },
        { text: "Your feelings are yours. Not even the smartest AI can tell you how you really feel inside — only you know that.", minTrack: "explorers" },
        { text: "Ready? Let's build the sentence together, one word at a time." },
      ],
      teacherNote:
        "Unlike Month 5's \"This is my sister,\" this sentence frame asks for a genuine, in-the-moment answer — encourage kids to swap in their real feeling, not just \"happy.\" Ties back to this month's AI honesty theme: this is one sentence Vora truly can't answer for them.",
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, left to right. Then invite several kids to swap in their own true feeling and say it out loud.",
      config: {
        engine: "sentence_builder",
        title: "I feel happy.",
        words: [
          { text: "I", role: "subject" },
          { text: "feel", role: "verb" },
          { text: "happy", role: "other" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[5],
    },
    {
      ...AI_OR_NOT_SETS[5],
    },
    {
      type: "check",
      prompt: "Every kid says \"I feel ___\" out loud, naming their real feeling right now.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today every child said how they truly feel in English — one of the most personal sentences in the whole year — helped Vora follow clear step-by-step instructions, and spotted real AI in everyday life.",
      homework: "Say \"I feel ___\" about your real feeling to someone at home tonight.",
    },
  ],
};
