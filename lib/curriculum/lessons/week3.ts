import type { Lesson } from "../types";
import { getLessonMeta } from "../scopeAndSequence";

function meta(key: string) {
  const m = getLessonMeta(key);
  if (!m) throw new Error(`No scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const w3d1_rainbow_colors: Lesson = {
  ...meta("w3d1_rainbow_colors"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Hold up something red and ask \"What color is this?\" before teaching the word.",
      prompt: "What color is this? 🔴",
    },
    {
      type: "vocab",
      title: "Colors",
      words: [
        { word: "red", emoji: "🔴" },
        { word: "blue", emoji: "🔵" },
        { word: "yellow", emoji: "🟡" },
        { word: "green", emoji: "🟢" },
        { word: "purple", emoji: "🟣" },
        { word: "orange", emoji: "🟠" },
      ],
    },
    {
      type: "movement",
      title: "Rainbow Color Actions!",
      instructions:
        "Call out each color word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Red — stomp your feet like a fire truck", emoji: "🔴" },
        { text: "Blue — wave your arms like ocean waves", emoji: "🔵" },
        { text: "Yellow — reach up high like the sun", emoji: "🟡" },
        { text: "Green — wiggle like grass in the wind", emoji: "🟢" },
        { text: "Purple — twirl around like a grape", emoji: "🟣" },
        { text: "Orange — bounce like a round orange", emoji: "🟠" },
      ],
    },
    {
      type: "chant",
      title: "Rainbow Colors Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching color. The whole class echoes the response line back to you.",
      lines: [
        { call: "Colors, colors, what do you see?", response: "It is red, red as can be!" },
        { call: "Colors, colors, look up high,", response: "It is blue, blue like the sky!" },
        { call: "Colors, colors, shining bright,", response: "It is yellow, yellow light!" },
        { call: "Colors, colors, what's your guess?", response: "It is green, green is the best!" },
      ],
    },
    {
      type: "check",
      prompt: "Point to something in the room and say \"It is ___.\"",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned six colors in English — and good news, color words go in the same place in a sentence as they do in Korean — we acted out the colors and chanted \"It is ___\" together.",
      homework: "Find three colorful things at home and say their color in English.",
    },
  ],
};

export const w3d2_vora_finds_pattern: Lesson = {
  ...meta("w3d2_vora_finds_pattern"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Draw or say a pattern out loud: \"Red, blue, red, blue...\" and ask \"What comes next?\" Let kids call out \"Red!\" before moving on.",
      prompt: "Red, blue, red, blue... what comes next?",
    },
    {
      type: "vocab",
      title: "Shapes",
      words: [
        { word: "circle", emoji: "⭕" },
        { word: "square", emoji: "🟦" },
        { word: "triangle", emoji: "🔺" },
        { word: "star", emoji: "⭐" },
      ],
    },
    {
      type: "concept",
      title: "Vora Finds the Pattern",
      bigIdeas: ["reasoning", "learning"],
      lines: [
        { text: "A pattern is something that repeats — like red, blue, red, blue." },
        { text: "Finding patterns is one of the most important things AI does!" },
        { text: "Let's practice telling what's the same and what's different." },
      ],
      teacherNote:
        "This is the conceptual seed for \"machine learning finds patterns in data\" — keep the demonstration physical (blocks, claps, or the warm-up chant), the app activity below only drills the same/different vocabulary that supports it.",
    },
    {
      type: "movement",
      title: "Shape Actions!",
      instructions:
        "Call out each shape word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Circle — draw a big circle in the air", emoji: "⭕" },
        { text: "Square — make a square shape with your arms", emoji: "🟦" },
        { text: "Triangle — make a triangle over your head with your arms", emoji: "🔺" },
        { text: "Star — stretch out your arms and legs like a star", emoji: "⭐" },
      ],
    },
    {
      type: "activity",
      instructions: "Each item shows two shapes or colors together. Sort: are they the same, or different?",
      config: {
        engine: "train_the_robot",
        title: "Same or Different?",
        labelA: "Same",
        labelB: "Different",
        emojiA: "🟰",
        emojiB: "🙅",
        items: [
          { word: "red, red", emoji: "🔴🔴", bucket: "a" },
          { word: "blue, blue", emoji: "🔵🔵", bucket: "a" },
          { word: "star, star", emoji: "⭐⭐", bucket: "a" },
          { word: "square, square", emoji: "🟦🟦", bucket: "a" },
          { word: "red, blue", emoji: "🔴🔵", bucket: "b" },
          { word: "circle, square", emoji: "⭕🟦", bucket: "b" },
          { word: "star, triangle", emoji: "⭐🔺", bucket: "b" },
        ],
      },
    },
    {
      type: "chant",
      title: "Same or Different Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching shapes. The whole class echoes the response line back to you.",
      lines: [
        { call: "Red, red — same or different?", response: "Same, same, that's for certain!" },
        { call: "Circle, square — same or different?", response: "Different, different, plain to see!" },
        { call: "Star, star — same or different?", response: "Same, same, that's the key!" },
        { call: "Triangle, circle — same or different?", response: "Different, different, one two three!" },
      ],
    },
    {
      type: "check",
      prompt: "Show two fingers of the same color and two of different colors — name each: \"same\" or \"different.\"",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we learned shape words, practiced telling same from different — the skill behind every pattern Vora finds — acted out the shapes, and chanted \"same\" and \"different\" together.",
    },
  ],
};

export const w3d3_fan_or_pan: Lesson = {
  ...meta("w3d3_fan_or_pan"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Say \"fan\" and \"pan\" slowly, back to back, a few times, without explaining yet.",
      prompt: "fan... pan... fan... pan...",
    },
    {
      type: "concept",
      title: "A New Sound: f",
      bigIdeas: ["perception"],
      lines: [
        { text: "Korean doesn't have the English \"f\" sound — it's brand new for your mouth!" },
        { text: "Bite your bottom lip gently and blow air for \"f.\"" },
        { text: "Let's listen very carefully and pick the word we hear." },
      ],
      teacherNote:
        "Unlike the l/r lesson, this contrast is genuinely absent from Korean (not just non-phonemic), so a quick mouth-shape demo here earns its keep before the listening activity.",
    },
    {
      type: "movement",
      title: "Fan or Pan Actions!",
      instructions:
        "Call out each word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Fan — wave your hand in front of your face like a fan", emoji: "🪭" },
        { text: "Pan — pretend to flip food in a pan", emoji: "🍳" },
        { text: "Fine — give a big thumbs up", emoji: "👍" },
        { text: "Fork — pretend to eat with a fork", emoji: "🍴" },
        { text: "Pork — rub your tummy like it's yummy", emoji: "🥓" },
        { text: "Pull — pretend to pull open a heavy door", emoji: "🚪" },
      ],
    },
    {
      type: "activity",
      instructions: "Play each word once, and have kids point to or say the picture they heard. Repeat any pair the class finds hard.",
      config: {
        engine: "minimal_pairs",
        title: "Listen Closely: f or p?",
        targetSound: "/f/ vs /p/",
        teacherNote: "Korean has no /f/ phoneme; it's regularly approximated with /p/ or /h/ in loanwords.",
        pairs: [
          { wordA: { text: "fan", emoji: "🪭" }, wordB: { text: "pan", emoji: "🍳" } },
          { wordA: { text: "fine", emoji: "👍" }, wordB: { text: "pine", emoji: "🌲" } },
          { wordA: { text: "fork", emoji: "🍴" }, wordB: { text: "pork", emoji: "🥓" } },
          { wordA: { text: "full", emoji: "🈵" }, wordB: { text: "pull", emoji: "🚪" } },
        ],
      },
    },
    {
      type: "chant",
      title: "Fan or Pan Chant",
      instructions:
        "Say each call line slowly and clearly. The whole class echoes the response line back, listening for the f or p sound.",
      lines: [
        { call: "Fan, fan, listen well,", response: "Fan, fan, I can tell!" },
        { call: "Pan, pan, listen well,", response: "Pan, pan, I can tell!" },
        { call: "Fork or pork, which do you hear?", response: "Fork or pork, listen clear!" },
        { call: "Full or pull, tell me true,", response: "F or P, I hear you!" },
      ],
    },
    {
      type: "check",
      prompt: "Say \"fan\" and \"pan\" one more time — thumbs up if you can hear the difference now.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we practiced listening for the f sound — brand new for Korean speakers, so lots of practice is completely normal — we acted out some of the words and chanted the f and p sounds together.",
    },
  ],
};
