import type { Lesson } from "../types";
import { getLessonMeta } from "../scopeAndSequence";

function meta(key: string) {
  const m = getLessonMeta(key);
  if (!m) throw new Error(`No scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const w2d1_animal_safari: Lesson = {
  ...meta("w2d1_animal_safari"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Make an animal sound (like a lion's roar) and ask \"What animal is this?\" before revealing the word.",
      prompt: "What animal is this? 🦁",
    },
    {
      type: "vocab",
      title: "Animals",
      words: [
        { word: "cat", emoji: "🐱" },
        { word: "dog", emoji: "🐶" },
        { word: "lion", emoji: "🦁" },
        { word: "rabbit", emoji: "🐰" },
        { word: "bird", emoji: "🐦" },
        { word: "fish", emoji: "🐟" },
      ],
    },
    {
      type: "concept",
      title: "One or Many",
      bigIdeas: [],
      lines: [
        { text: "One cat. Two cats!" },
        { text: "In English, we add -s when there's more than one." },
      ],
      teacherNote:
        "Korean doesn't mark plurals by default, so this needs extra repetition — have kids echo \"one cat, two cats\" as a chant with claps on the -s.",
    },
    {
      type: "check",
      prompt: "Hold up fingers and ask kids to say \"one dog\" / \"three dogs,\" etc.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we learned six animal words and how to make them plural with -s.",
      homework: "Find one animal picture at home and say its name in English, singular and plural.",
    },
  ],
};

export const w2d2_how_does_vora_see: Lesson = {
  ...meta("w2d2_how_does_vora_see"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask: \"Is a lion an animal or a vehicle?\" Kids should answer easily — this warms up the category words before the harder sort.",
      prompt: "Animal or vehicle?",
    },
    {
      type: "concept",
      title: "How Does Vora See?",
      bigIdeas: ["perception", "learning"],
      lines: [
        { text: "I learn by looking at LOTS of examples, not just one." },
        { text: "You show me examples, and I try to learn the pattern." },
        { text: "Sometimes I still guess wrong at first. That's how learning works!" },
      ],
      teacherNote:
        "This is the AI-for-Oceans-style train/guess loop, now revisited from Week 1 Day 3 with a new category — watch whether kids explain the \"Vora can be wrong\" idea in their own words before the activity.",
    },
    {
      type: "activity",
      instructions: "Kids sort the first few together as a class, then Vora starts guessing on its own — the class judges whether Vora got it right.",
      config: {
        engine: "train_the_robot",
        title: "Animal or Vehicle?",
        labelA: "Animal",
        labelB: "Vehicle",
        emojiA: "🐾",
        emojiB: "🚗",
        items: [
          { word: "cat", emoji: "🐱", bucket: "a" },
          { word: "dog", emoji: "🐶", bucket: "a" },
          { word: "lion", emoji: "🦁", bucket: "a" },
          { word: "rabbit", emoji: "🐰", bucket: "a" },
          { word: "bird", emoji: "🐦", bucket: "a" },
          { word: "car", emoji: "🚗", bucket: "b" },
          { word: "bus", emoji: "🚌", bucket: "b" },
          { word: "train", emoji: "🚂", bucket: "b" },
          { word: "bike", emoji: "🚲", bucket: "b" },
        ],
      },
    },
    {
      type: "check",
      prompt: "\"These are animals.\" — have the class say this together, pointing at the animal group.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we practiced sorting animals and vehicles, and saw Vora learn from examples — sometimes getting it wrong, and that's okay.",
    },
  ],
};

export const w2d3_light_or_right: Lesson = {
  ...meta("w2d3_light_or_right"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Say \"light\" and \"right\" slowly, back to back, a few times. Don't explain yet — just let the class notice the sounds are close but different.",
      prompt: "light... right... light... right...",
    },
    {
      type: "concept",
      title: "Two Sounds, One Letter in Korean",
      bigIdeas: ["perception"],
      lines: [
        { text: "In English, \"l\" and \"r\" are two different sounds." },
        { text: "Let's listen very carefully and pick the word we hear." },
      ],
      teacherNote:
        "Do not ask kids to produce the sounds yet — this lesson is receptive (listening) only. Production practice comes later once discrimination is solid; asking for output too early just teaches guessing.",
    },
    {
      type: "activity",
      instructions: "Play each word once (tap the speaker icon), and have kids point to or say the picture they heard. Repeat any pair the class finds hard.",
      config: {
        engine: "minimal_pairs",
        title: "Listen Closely: l or r?",
        targetSound: "/l/ vs /r/",
        teacherNote:
          "The single highest-frequency Korean-learner pronunciation gap — Korean's single liquid consonant covers both English sounds, so this contrast genuinely doesn't exist in the L1.",
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
      type: "check",
      prompt: "Say \"light\" and \"right\" one more time — thumbs up if you can hear the difference now.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we practiced listening for the difference between l and r sounds — a tricky pair for Korean speakers, and totally normal to still be working on.",
    },
  ],
};
