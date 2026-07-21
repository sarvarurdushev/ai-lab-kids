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
      type: "movement",
      title: "Family Actions!",
      instructions:
        "Call out each family word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Mom — blow a big kiss", emoji: "👩" },
        { text: "Dad — give a thumbs up", emoji: "👨" },
        { text: "Sister — wave both hands high", emoji: "👧" },
        { text: "Brother — fist bump the air", emoji: "👦" },
        { text: "Grandma — wave slowly like saying hello", emoji: "👵" },
        { text: "Grandpa — pat both knees", emoji: "👴" },
        { text: "Baby — rock your arms like holding a baby", emoji: "👶" },
      ],
    },
    {
      type: "chant",
      title: "My Family Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching family picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Family, family, who's this here?", response: "This is my mom, my mom so dear!" },
        { call: "Family, family, who's over there?", response: "This is my dad, with silly hair!" },
        { call: "Family, family, who do you see?", response: "This is my sister, playing with me!" },
        { call: "Family, family, tell me true —", response: "This is my family, I love you!" },
      ],
    },
    {
      type: "check",
      prompt: "Ask a partner: \"Do you have a sister or a brother?\"",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned family words and how to say \"my\" family members in English, acted out our family words together, and chanted about our families.",
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
      type: "movement",
      title: "Th and S Sound Actions!",
      instructions:
        "Call out each word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Think — tap your finger on your head like thinking", emoji: "🤔" },
        { text: "Sink — cup your hands like washing them in a sink", emoji: "🚰" },
        { text: "Mouth — point to your mouth and open it wide", emoji: "👄" },
        { text: "Mouse — wiggle your nose like a tiny mouse", emoji: "🐭" },
        { text: "Bath — scrub your arms like washing in the bath", emoji: "🛁" },
        { text: "Path — march in place like walking down a path", emoji: "🛤️" },
      ],
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
      type: "chant",
      title: "Think or Sink Chant",
      instructions:
        "Say each call line and have the class echo the response, listening closely for the sound at the start.",
      lines: [
        { call: "Th or s, which do you hear?", response: "Think! Think! Loud and clear!" },
        { call: "Th or s, listen well —", response: "Bath! Bath! Now can you tell?" },
        { call: "Th or s, say it slow —", response: "Mouth! Mouth! Watch it go!" },
        { call: "Th or s, one more time —", response: "Path! Path! Say it in rhyme!" },
      ],
    },
    {
      type: "check",
      prompt: "Say \"think\" and \"sink\" one more time — thumbs up if you can hear the difference now.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we practiced listening for the th sound — the third new sound this unit — acted out th and s words together, and chanted about the sounds we heard. One more to go in Week 8's review!",
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
      type: "movement",
      title: "Counting Actions!",
      instructions:
        "Call out each number and hold up that many fingers together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "One — hold up one finger", emoji: "1️⃣" },
        { text: "Two — hold up two fingers", emoji: "2️⃣" },
        { text: "Three — hold up three fingers", emoji: "3️⃣" },
        { text: "Four — hold up four fingers", emoji: "4️⃣" },
        { text: "Five — hold up five fingers and wave", emoji: "5️⃣" },
      ],
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
      type: "chant",
      title: "Counting Chant",
      instructions:
        "Say each call line and hold up your fingers for the number. The whole class echoes the response line back to you.",
      lines: [
        { call: "Counting, counting, one and two —", response: "I have two dogs, how about you?" },
        { call: "Counting, counting, one, two, three —", response: "I have three dogs, running free!" },
        { call: "Counting, counting, four or more —", response: "I have four dogs at my door!" },
        { call: "Counting, counting, count up high —", response: "I have five dogs, reaching the sky!" },
      ],
    },
    {
      type: "check",
      prompt: "Ask a few kids: \"How many ___ do you have?\" using a word they know.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we counted to five and built the sentence \"I have two dogs\" in the right English word order, acted out the numbers with our fingers, and chanted about counting dogs together.",
      homework: "Count five things at home in English.",
    },
  ],
};
