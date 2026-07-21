import type { Lesson } from "../types";
import { getLessonMeta } from "../scopeAndSequence";

function meta(key: string) {
  const m = getLessonMeta(key);
  if (!m) throw new Error(`No scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const w4d1_my_family: Lesson = {
  ...meta("w4d1_my_family"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Show a family photo (yours or a drawn example) and point: \"This is my mom.\"",
      prompt: "This is my family.",
    },
    {
      type: "vocab",
      title: "Family",
      words: [
        { word: "mom", emoji: "👩" },
        { word: "dad", emoji: "👨" },
        { word: "sister", emoji: "👧" },
        { word: "brother", emoji: "👦" },
        { word: "grandma", emoji: "👵" },
        { word: "grandpa", emoji: "👴" },
        { word: "baby", emoji: "👶" },
      ],
    },
    {
      type: "concept",
      title: "My Family",
      bigIdeas: [],
      lines: [
        { text: "\"My\" means it belongs to me — my mom, my dad, my family." },
      ],
      teacherNote:
        "Korean family terms encode relative age and the speaker's gender in a way English \"brother/sister\" doesn't — expect kids to want to specify more. Validate that (\"Yes, in Korean we'd say more — in English we just say brother!\") rather than treating it as a mistake.",
    },
    {
      type: "check",
      prompt: "Ask a partner: \"Do you have a sister or a brother?\"",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned family words and how to say \"my\" family members in English.",
      homework: "Introduce your family in English to someone at home.",
    },
  ],
};

export const w4d3_think_or_sink: Lesson = {
  ...meta("w4d3_think_or_sink"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Say \"think\" and \"sink\" slowly, back to back, a few times, without explaining yet.",
      prompt: "think... sink... think... sink...",
    },
    {
      type: "concept",
      title: "A New Sound: th",
      bigIdeas: ["perception"],
      lines: [
        { text: "For \"th,\" put your tongue between your teeth and blow air gently." },
        { text: "Korean doesn't have this sound either — it's another brand-new one!" },
        { text: "Let's listen very carefully and pick the word we hear." },
      ],
      teacherNote: "Korean has no dental fricative /θ/; it's commonly substituted with /s/ or /t/ in loanwords and early L2 production.",
    },
    {
      type: "activity",
      instructions: "Play each word once, and have kids point to or say the picture they heard. Repeat any pair the class finds hard.",
      config: {
        engine: "minimal_pairs",
        title: "Listen Closely: th or s?",
        targetSound: "/θ/ (\"th\") vs /s/",
        teacherNote: "Korean has no /θ/; expect substitution with /s/ or /t/. This is the third of the four sound gaps drilled this unit.",
        pairs: [
          { wordA: { text: "think", emoji: "🤔" }, wordB: { text: "sink", emoji: "🚰" } },
          { wordA: { text: "mouth", emoji: "👄" }, wordB: { text: "mouse", emoji: "🐭" } },
          { wordA: { text: "bath", emoji: "🛁" }, wordB: { text: "bass", emoji: "🐟" } },
          { wordA: { text: "path", emoji: "🛤️" }, wordB: { text: "pass", emoji: "🏈" } },
        ],
      },
    },
    {
      type: "check",
      prompt: "Say \"think\" and \"sink\" one more time — thumbs up if you can hear the difference now.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we practiced listening for the th sound — the third new sound this unit. One more to go in Week 8's review!",
    },
  ],
};

export const w4d2_count_with_vora: Lesson = {
  ...meta("w4d2_count_with_vora"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Count five objects in the room out loud together: \"One, two, three, four, five.\"",
      prompt: "1, 2, 3, 4, 5...",
    },
    {
      type: "vocab",
      title: "Numbers 1-10",
      words: [
        { word: "one", emoji: "1️⃣" },
        { word: "two", emoji: "2️⃣" },
        { word: "three", emoji: "3️⃣" },
        { word: "four", emoji: "4️⃣" },
        { word: "five", emoji: "5️⃣" },
      ],
    },
    {
      type: "concept",
      title: "Vora Counts, Too",
      bigIdeas: ["perception"],
      lines: [
        { text: "When I look at a picture, I can count how many things are in it." },
        { text: "\"How many dogs?\" \"Two dogs!\" — counting is a way of understanding a picture." },
      ],
      teacherNote:
        "Keep this light — it's just planting that \"counting what's in a picture\" is something both people and AI do, ahead of the sentence-building activity.",
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, left to right. Say each word aloud as a tile is placed, then read the full sentence together.",
      config: {
        engine: "sentence_builder",
        title: "I have two dogs.",
        words: [
          { text: "I", role: "subject" },
          { text: "have", role: "verb" },
          { text: "two", role: "other" },
          { text: "dogs", role: "object" },
        ],
      },
    },
    {
      type: "check",
      prompt: "Ask a few kids: \"How many ___ do you have?\" using a word they know.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we counted to five and built the sentence \"I have two dogs\" in the right English word order.",
      homework: "Count five things at home in English.",
    },
  ],
};
