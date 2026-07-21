import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";
import { AI_OR_NOT_SETS, INSTRUCT_VORA_SCENARIOS } from "../aiLabBank";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m4_week1: Lesson = {
  ...meta("m4_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Hold up a picture of a plastic bottle and a picture of an apple core. Ask \"Recycle, or trash?\" for each and take quick guesses before you explain anything.",
      prompt: "Recycle or trash? ♻️",
    },
    {
      type: "vocab",
      title: "Earth Words",
      words: [
        { word: "tree", emoji: "🌳" },
        { word: "recycle", emoji: "♻️" },
        { word: "trash", emoji: "🗑️" },
        { word: "earth", emoji: "🌎" },
        { word: "water", emoji: "💧" },
        { word: "air", emoji: "💨", minTrack: "explorers" },
        { word: "plant", emoji: "🌱" },
      ],
    },
    {
      type: "concept",
      title: "Vora Cares for Earth",
      bigIdeas: ["learning", "societal_impact"],
      lines: [
        { text: "There are things we should do for the earth, like \"We should turn off the water.\"" },
        { text: "And things we shouldn't do, like \"We shouldn't throw trash on the ground.\"" },
        { text: "\"Should\" stays exactly the same word every time — it doesn't change for \"I\" or \"we\" like some Korean verb endings do.", minTrack: "explorers" },
        { text: "Scientists use AI to study huge amounts of weather data, so they can understand how our earth is changing." },
      ],
      teacherNote:
        "Modal \"should\" has no verb-final Korean counterpart to lean on — the same challenge as \"can\" back in the foundations unit. Model it as a fixed chunk (\"We should ___\") before analyzing it. The AI thread here is Big Idea 3 (Learning): scientists don't guess about climate randomly, they learn patterns from enormous datasets, the same \"learn from lots of examples\" idea Vora has modeled with pictures all year.",
    },
    {
      type: "activity",
      instructions: "As a class, decide together where each item goes before anyone taps — talk through the tricky ones, like the plastic bag, out loud.",
      config: {
        engine: "train_the_robot",
        title: "Recycle or Trash?",
        labelA: "Recycle",
        labelB: "Trash",
        emojiA: "♻️",
        emojiB: "🗑️",
        items: [
          { word: "bottle", emoji: "🧴", bucket: "a" },
          { word: "can", emoji: "🥫", bucket: "a" },
          { word: "paper", emoji: "📄", bucket: "a" },
          { word: "banana peel", emoji: "🍌", bucket: "b" },
          { word: "tissue", emoji: "🧻", bucket: "b" },
          { word: "broken toy", emoji: "🧸", bucket: "b" },
          { word: "plastic bag", emoji: "🛍️", bucket: "b", minTrack: "explorers" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[3],
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[3],
    },
    {
      type: "check",
      prompt: "Ask one table: name one thing we should recycle at home and one thing that's trash.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned earth words and practiced \"We should / shouldn't ___,\" and sorted recycling from trash — just like scientists sort through huge amounts of data to understand our climate, practiced spotting real AI in everyday life, and helped Vora follow clear instructions.",
      homework: "Find one thing at home that should be recycled, and tell a family member in English.",
    },
  ],
};

export const m4_week2: Lesson = {
  ...meta("m4_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Hold up a picture of a messy, used bottle. Ask \"What do we do first?\" and take a few guesses before revealing today's recycling steps game.",
      prompt: "What do we do first? ♻️",
    },
    {
      type: "concept",
      title: "Vora Follows the Steps",
      bigIdeas: ["learning", "societal_impact"],
      lines: [
        { text: "Remember: scientists use AI to study huge amounts of data to help our earth." },
        { text: "Today, let's follow the exact steps of recycling, one after another." },
      ],
      teacherNote:
        "Short recap only — Week 1 fully introduced the AI-learns-from-data thread through climate science; here it's briefly reconnected to today's ordered-steps game before playing.",
    },
    {
      type: "activity",
      instructions: "Kids take turns tapping the next step of recycling a bottle. Read each step aloud together as it's placed. Then play a second game to reinforce it.",
      config: {
        engine: "sequence_builder",
        title: "Recycling Steps",
        steps: [
          { text: "Rinse it", emoji: "🚿" },
          { text: "Sort it", emoji: "♻️" },
          { text: "Put it in the bin", emoji: "🗑️" },
          { text: "The truck takes it away", emoji: "🚛", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Show the sequence one item at a time and ask kids to guess what comes next before revealing the answer. Encourage them to explain the pattern in their own words.",
      config: {
        engine: "pattern_predictor",
        title: "What Comes Next?",
        teacherNote:
          "Concretely demonstrates the \"learning\" big idea: AI (and people) predict what comes next by finding a pattern in examples — the same idea behind how scientists use patterns in climate data.",
        rounds: [
          { sequence: ["🌱", "🌿", "🌱", "🌿"], answer: "🌱", options: ["🌱", "🌿", "🌳"] },
          { sequence: ["♻️", "🗑️", "♻️", "🗑️"], answer: "♻️", options: ["♻️", "🗑️", "🌎"] },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[3],
    },
    {
      type: "check",
      prompt: "Ask a student to say the recycling steps in order: rinse it, sort it, put it in the bin.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — putting the steps of recycling in order, guessing what comes next in a pattern, and helping Vora follow clear step-by-step instructions.",
    },
  ],
};

export const m4_week3: Lesson = {
  ...meta("m4_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Show three emoji in a row — 🌱🌿🌱 — and ask \"What comes next?\" before revealing today's pattern game.",
      prompt: "What comes next? 🌱🌿🌱...",
    },
    {
      type: "concept",
      title: "Vora Finds the Pattern",
      bigIdeas: ["learning", "societal_impact"],
      lines: [
        { text: "Scientists look for patterns in weather data to understand our changing earth." },
        { text: "Let's practice finding a pattern too, and guess what comes next." },
      ],
      teacherNote:
        "Short recap only — Week 1 introduced the AI-learns-from-data thread through climate science; here it's briefly reconnected to pattern-finding before the prediction game.",
    },
    {
      type: "activity",
      instructions: "Show the sequence one item at a time and ask kids to guess what comes next before revealing the answer. Encourage them to explain the pattern in their own words. Then play a second game to reinforce it.",
      config: {
        engine: "pattern_predictor",
        title: "What Comes Next?",
        teacherNote:
          "Concretely demonstrates the \"learning\" big idea: AI (and people) predict what comes next by finding a pattern in examples — the same idea behind how scientists use patterns in climate data.",
        rounds: [
          { sequence: ["🌱", "🌿", "🌱", "🌿"], answer: "🌱", options: ["🌱", "🌿", "🌳"] },
          { sequence: ["♻️", "🗑️", "♻️", "🗑️"], answer: "♻️", options: ["♻️", "🗑️", "🌎"] },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Kids take turns tapping the next step of recycling a bottle. Read each step aloud together as it's placed.",
      config: {
        engine: "sequence_builder",
        title: "Recycling Steps",
        steps: [
          { text: "Rinse it", emoji: "🚿" },
          { text: "Sort it", emoji: "♻️" },
          { text: "Put it in the bin", emoji: "🗑️" },
          { text: "The truck takes it away", emoji: "🚛", minTrack: "explorers" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[4],
    },
    {
      type: "check",
      prompt: "Show one more pattern and ask a student to say what comes next, and explain why.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — guessing what comes next in a pattern, putting the steps of recycling in order, and spotting real AI in everyday life.",
    },
  ],
};

export const m4_week4: Lesson = {
  ...meta("m4_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask: \"What is one thing we should do for the earth?\" Take a few quick answers before revealing today's sentence.",
      prompt: "We should ___.",
    },
    {
      type: "concept",
      title: "All of Us Together",
      bigIdeas: [],
      lines: [
        { text: "All month we talked about things we should do for the earth." },
        { text: "Today, let's say it together, out loud: We should recycle." },
        { text: "Notice this sentence uses \"We,\" not \"I\" — it's about all of us together, not just one person." },
      ],
      teacherNote:
        "First group-subject (\"we\") sentence in the curriculum — every earlier sentence pattern (\"I see a...\", \"I'm from...\", \"This is my...\") was first-person singular. Call out the shift explicitly: \"we\" means the whole class saying it together, which is a small but genuine grammatical step worth naming.",
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, left to right. Then have the whole class say it together like a chant, a few times.",
      config: {
        engine: "sentence_builder",
        title: "We should recycle.",
        words: [
          { text: "We", role: "subject" },
          { text: "should", role: "other" },
          { text: "recycle", role: "verb" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[4],
    },
    {
      ...AI_OR_NOT_SETS[4],
    },
    {
      type: "check",
      prompt: "Everyone says \"We should recycle!\" together — thumbs up if you said the whole sentence.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we built our first \"we\" sentence together — \"We should recycle\" — closing out a month of caring for the earth, helped Vora follow clear instructions, and spotted real AI in everyday life.",
      homework: "Say \"We should recycle\" with your family tonight, and pick one thing to recycle together.",
    },
  ],
};
