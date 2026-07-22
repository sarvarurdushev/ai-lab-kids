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
      type: "movement",
      title: "Morning Routine Actions!",
      instructions:
        "Call out each morning action and do the motion together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Wake up — stretch your arms up big and yawn", emoji: "🌞" },
        { text: "Get dressed — pretend to pull a shirt over your head", emoji: "👕" },
        { text: "Eat breakfast — pretend to scoop a spoon to your mouth", emoji: "🥣" },
        { text: "Brush teeth — brush your teeth with your finger", emoji: "🪥" },
      ],
    },
    {
      type: "chant",
      title: "My Morning Chant",
      instructions:
        "Say each call line and act out the action. The whole class echoes the response line back to you.",
      lines: [
        { call: "Morning, morning, what do you do?", response: "I wake up bright, and stretch up too!" },
        { call: "Morning, morning, what comes next?", response: "I get dressed, all fresh and dressed!" },
        {
          call: "Morning, morning, time to eat —",
          response: "I eat breakfast, yummy and sweet!",
          minTrack: "explorers",
        },
        {
          call: "Morning, morning, one more thing —",
          response: "I brush my teeth, then off I spring!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Each kid says one thing they do every morning.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned four morning actions in English, acted them out, and chanted about our morning routine — tomorrow we'll put them in order for Vora.",
      summarySimple: "Today we learned morning words and sang a morning chant with Vora!",
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
      type: "movement",
      title: "Bedtime Routine Actions!",
      instructions:
        "Call out each bedtime action and do the motion together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Put on pajamas — pretend to pull on comfy pajamas", emoji: "🩱" },
        { text: "Brush teeth — brush your teeth with your finger", emoji: "🪥" },
        { text: "Read a story — hold up two hands like an open book", emoji: "📖" },
        { text: "Go to sleep — rest your head on your hands and close your eyes", emoji: "😴" },
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
      type: "chant",
      title: "Bedtime Routine Chant",
      instructions:
        "Say each call line and act out the bedtime step. The whole class echoes the response line back to you.",
      lines: [
        { call: "Bedtime, bedtime, what comes first?", response: "First, put on pajamas — comfy and soft!" },
        { call: "Bedtime, bedtime, what comes next?", response: "Next, brush your teeth, all clean and fresh!" },
        {
          call: "Bedtime, bedtime, then what do you do?",
          response: "Then, read a story, me and you!",
          minTrack: "explorers",
        },
        {
          call: "Bedtime, bedtime, what comes last?",
          response: "Last, go to sleep — sweet dreams at last!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "\"First we put on pajamas, next we...\" — have a student finish the whole sequence out loud.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we ordered a brand-new routine using first/next/then/last — showing we can use the sequencing skill anywhere, not just for one routine, acted out each bedtime step, and chanted the whole routine together.",
      summarySimple: "Today we practiced our bedtime routine in order and sang a bedtime chant!",
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
        {
          text: "Robots do exactly what you tell them — in exactly the order you tell them!",
          textSimple: "Robots do just what you say — in that exact order!",
        },
        {
          text: "That list of steps is called an algorithm.",
          textSimple: "This list of steps has a name: algorithm!",
        },
        {
          text: "If the order is wrong, Vora still follows it — even if it doesn't make sense!",
          textSimple: "If the order is wrong, Vora still does it!",
        },
      ],
      teacherNote:
        "The punchline to land here: order isn't just a grammar rule, it's literally how instructions work for a computer. Consider demonstrating by \"executing\" a deliberately wrong order (e.g., \"eat breakfast, then wake up\") for a laugh before the activity.",
    },
    {
      type: "movement",
      title: "Sequencing Word Actions!",
      instructions:
        "Call out each sequencing word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "First — hold up one finger and take a big step forward", emoji: "1️⃣" },
        { text: "Next — hop to the side", emoji: "➡️" },
        { text: "Then — clap your hands once", emoji: "➡️" },
        { text: "Last — strike a freeze pose", emoji: "🏁" },
      ],
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
      type: "chant",
      title: "First, Next, Then, Last Chant",
      instructions:
        "Say each call line and act out the morning step. The whole class echoes the response line back to you.",
      lines: [
        { call: "Routine, routine, what comes first?", response: "First, we wake up — no time to rest!" },
        { call: "Routine, routine, what comes next?", response: "Next, get dressed — looking your best!" },
        {
          call: "Routine, routine, then what do we do?",
          response: "Then, eat breakfast — yummy for you!",
          minTrack: "explorers",
        },
        {
          call: "Routine, routine, what comes last?",
          response: "Last, brush your teeth — nice and fast!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "\"First we wake up, next we...\" — have a student finish the sentence.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned first/next/then/last and practiced putting a routine in the right order — just like giving Vora an algorithm, acted out the sequencing words, and chanted our morning routine in order.",
      summarySimple: "Today we learned first, next, then, and last, and put our morning routine in order!",
    },
  ],
};
