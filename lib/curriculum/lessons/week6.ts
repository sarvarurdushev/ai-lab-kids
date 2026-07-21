import type { Lesson } from "../types";
import { getLessonMeta } from "../scopeAndSequence";

function meta(key: string) {
  const m = getLessonMeta(key);
  if (!m) throw new Error(`No scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const w6d1_my_morning: Lesson = {
  ...meta("w6d1_my_morning"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Mime waking up and stretching, then ask \"What do I do first in the morning?\"",
      prompt: "Good morning! 🌞",
    },
    {
      type: "vocab",
      title: "Morning Actions",
      words: [
        { word: "wake up", emoji: "🌞" },
        { word: "get dressed", emoji: "👕" },
        { word: "eat breakfast", emoji: "🥣" },
        { word: "brush teeth", emoji: "🪥" },
      ],
    },
    {
      type: "check",
      prompt: "Each kid says one thing they do every morning.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned four morning actions in English — tomorrow we'll put them in order for Vora.",
    },
  ],
};

export const w6d3_bedtime_routine: Lesson = {
  ...meta("w6d3_bedtime_routine"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask: \"What's the last thing you do before you sleep?\" and take a few quick answers.",
      prompt: "Good night! 😴",
    },
    {
      type: "vocab",
      title: "Bedtime Actions",
      words: [
        { word: "put on pajamas", emoji: "🩱" },
        { word: "brush teeth", emoji: "🪥" },
        { word: "read a story", emoji: "📖" },
        { word: "go to sleep", emoji: "😴" },
      ],
    },
    {
      type: "activity",
      instructions: "Same skill as yesterday, new routine — kids take turns tapping the next step and reading it aloud with its sequencing word.",
      config: {
        engine: "sequence_builder",
        title: "Getting Ready for Bed",
        steps: [
          { text: "Put on pajamas", emoji: "🩱" },
          { text: "Brush teeth", emoji: "🪥" },
          { text: "Read a story", emoji: "📖" },
          { text: "Go to sleep", emoji: "😴" },
        ],
      },
    },
    {
      type: "check",
      prompt: "\"First we put on pajamas, next we...\" — have a student finish the whole sequence out loud.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we ordered a brand-new routine using first/next/then/last — showing we can use the sequencing skill anywhere, not just for one routine.",
    },
  ],
};

export const w6d2_give_vora_the_steps: Lesson = {
  ...meta("w6d2_give_vora_the_steps"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask: \"What do you do first in the morning — wake up, or eat breakfast?\" Kids should answer easily; this sets up why order matters.",
      prompt: "What comes first?",
    },
    {
      type: "vocab",
      title: "Sequencing Words",
      words: [
        { word: "first", emoji: "1️⃣" },
        { word: "next", emoji: "➡️" },
        { word: "then", emoji: "➡️" },
        { word: "last", emoji: "🏁" },
      ],
    },
    {
      type: "concept",
      title: "Vora Follows Exact Steps",
      bigIdeas: ["reasoning"],
      lines: [
        { text: "Robots do exactly what you tell them — in exactly the order you tell them!" },
        { text: "That list of steps is called an algorithm." },
        { text: "If the order is wrong, Vora still follows it — even if it doesn't make sense!" },
      ],
      teacherNote:
        "The punchline to land here: order isn't just a grammar rule, it's literally how instructions work for a computer. Consider demonstrating by \"executing\" a deliberately wrong order (e.g., \"eat breakfast, then wake up\") for a laugh before the activity.",
    },
    {
      type: "activity",
      instructions: "Kids take turns tapping the next step. Read each step aloud with its sequencing word (\"First, wake up...\") as it's placed.",
      config: {
        engine: "sequence_builder",
        title: "My Morning Routine",
        steps: [
          { text: "Wake up", emoji: "🌞" },
          { text: "Get dressed", emoji: "👕" },
          { text: "Eat breakfast", emoji: "🥣" },
          { text: "Brush teeth", emoji: "🪥" },
        ],
      },
    },
    {
      type: "check",
      prompt: "\"First we wake up, next we...\" — have a student finish the sentence.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned first/next/then/last and practiced putting a routine in the right order — just like giving Vora an algorithm.",
    },
  ],
};
