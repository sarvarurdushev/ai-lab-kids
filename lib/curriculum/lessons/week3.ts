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
      teacherScript: {
        en: "Hold up something red and ask \"What color is this?\" before teaching the word.",
        ko: "빨간색 물건을 들어 보이며 단어를 알려주기 전에 \"What color is this?\"라고 물어보세요.",
      },
      prompt: { en: "What color is this? 🔴", ko: "이것은 무슨 색깔일까요? 🔴" },
    },
    {
      type: "vocab",
      title: { en: "Colors", ko: "색깔" },
      words: [
        { word: { en: "red", ko: "빨간색" }, emoji: "🔴" },
        { word: { en: "blue", ko: "파란색" }, emoji: "🔵" },
        { word: { en: "yellow", ko: "노란색" }, emoji: "🟡" },
        { word: { en: "green", ko: "초록색" }, emoji: "🟢" },
        { word: { en: "purple", ko: "보라색" }, emoji: "🟣" },
        { word: { en: "orange", ko: "주황색" }, emoji: "🟠" },
      ],
    },
    {
      type: "check",
      prompt: { en: "Point to something in the room and say \"It is ___.\"", ko: "교실 안 물건을 가리키며 \"It is ___.\"라고 말해보세요." },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we learned six colors in English — and good news, color words go in the same place in a sentence as they do in Korean!",
        ko: "오늘은 영어로 색깔 여섯 가지를 배웠어요 — 좋은 소식은, 색깔 단어는 한국어와 같은 자리에 들어간다는 거예요!",
      },
      homework: {
        en: "Find three colorful things at home and say their color in English.",
        ko: "집에서 색깔 있는 물건 세 가지를 찾아 영어로 색깔을 말해보세요.",
      },
    },
  ],
};

export const w3d2_vora_finds_pattern: Lesson = {
  ...meta("w3d2_vora_finds_pattern"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Draw or say a pattern out loud: \"Red, blue, red, blue...\" and ask \"What comes next?\" Let kids call out \"Red!\" before moving on.",
        ko: "패턴을 그리거나 말해보세요: \"Red, blue, red, blue...\" 그리고 \"What comes next?\"라고 물어보세요. 학생들이 \"Red!\"라고 외치게 한 뒤 진행하세요.",
      },
      prompt: { en: "Red, blue, red, blue... what comes next?", ko: "Red, blue, red, blue... 다음은 무엇일까요?" },
    },
    {
      type: "vocab",
      title: { en: "Shapes", ko: "모양" },
      words: [
        { word: { en: "circle", ko: "원" }, emoji: "⭕" },
        { word: { en: "square", ko: "사각형" }, emoji: "🟦" },
        { word: { en: "triangle", ko: "삼각형" }, emoji: "🔺" },
        { word: { en: "star", ko: "별" }, emoji: "⭐" },
      ],
    },
    {
      type: "concept",
      title: { en: "Vora Finds the Pattern", ko: "보라가 패턴을 찾아요" },
      bigIdeas: ["reasoning", "learning"],
      lines: [
        { en: "A pattern is something that repeats — like red, blue, red, blue.", ko: "패턴은 반복되는 거야 — red, blue, red, blue처럼." },
        { en: "Finding patterns is one of the most important things AI does!", ko: "패턴을 찾는 건 AI가 하는 가장 중요한 일 중 하나야!" },
        { en: "Let's practice telling what's the same and what's different.", ko: "무엇이 같고 무엇이 다른지 말하는 연습을 해보자." },
      ],
      teacherNote:
        "This is the conceptual seed for \"machine learning finds patterns in data\" — keep the demonstration physical (blocks, claps, or the warm-up chant), the app activity below only drills the same/different vocabulary that supports it.",
    },
    {
      type: "activity",
      instructions: {
        en: "Each item shows two shapes or colors together. Sort: are they the same, or different?",
        ko: "각 항목에는 모양이나 색깔 두 개가 함께 보여요. 분류해보세요: 같을까요, 다를까요?",
      },
      config: {
        engine: "train_the_robot",
        title: { en: "Same or Different?", ko: "같을까요, 다를까요?" },
        labelA: { en: "Same", ko: "같아요" },
        labelB: { en: "Different", ko: "달라요" },
        emojiA: "🟰",
        emojiB: "🙅",
        items: [
          { word: { en: "red, red", ko: "빨강, 빨강" }, emoji: "🔴🔴", bucket: "a" },
          { word: { en: "blue, blue", ko: "파랑, 파랑" }, emoji: "🔵🔵", bucket: "a" },
          { word: { en: "star, star", ko: "별, 별" }, emoji: "⭐⭐", bucket: "a" },
          { word: { en: "square, square", ko: "사각형, 사각형" }, emoji: "🟦🟦", bucket: "a" },
          { word: { en: "red, blue", ko: "빨강, 파랑" }, emoji: "🔴🔵", bucket: "b" },
          { word: { en: "circle, square", ko: "원, 사각형" }, emoji: "⭕🟦", bucket: "b" },
          { word: { en: "star, triangle", ko: "별, 삼각형" }, emoji: "⭐🔺", bucket: "b" },
        ],
      },
    },
    {
      type: "check",
      prompt: { en: "Show two fingers of the same color and two of different colors — name each: \"same\" or \"different.\"", ko: "같은 색 손가락 두 개와 다른 색 손가락 두 개를 보여주며 \"same\"인지 \"different\"인지 말해보세요." },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we learned shape words and practiced telling same from different — the skill behind every pattern Vora finds.",
        ko: "오늘은 모양 단어를 배우고 같음과 다름을 구별하는 연습을 했어요 — 보라가 패턴을 찾는 데 필요한 바로 그 기술이에요.",
      },
    },
  ],
};

export const w3d3_fan_or_pan: Lesson = {
  ...meta("w3d3_fan_or_pan"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Say \"fan\" and \"pan\" slowly, back to back, a few times, without explaining yet.",
        ko: "\"fan\"과 \"pan\"을 천천히, 반복해서 말해주세요. 아직 설명하지 마세요.",
      },
      prompt: { en: "fan... pan... fan... pan...", ko: "fan... pan... fan... pan..." },
    },
    {
      type: "concept",
      title: { en: "A New Sound: f", ko: "새로운 소리: f" },
      bigIdeas: ["perception"],
      lines: [
        { en: "Korean doesn't have the English \"f\" sound — it's brand new for your mouth!", ko: "한국어에는 영어의 \"f\" 소리가 없어요 — 입 모양이 완전히 새로울 거예요!" },
        { en: "Bite your bottom lip gently and blow air for \"f.\"", ko: "아랫입술을 살짝 물고 바람을 불어 \"f\" 소리를 내보세요." },
        { en: "Let's listen very carefully and pick the word we hear.", ko: "아주 잘 듣고 들리는 단어를 골라봐요." },
      ],
      teacherNote:
        "Unlike the l/r lesson, this contrast is genuinely absent from Korean (not just non-phonemic), so a quick mouth-shape demo here earns its keep before the listening activity.",
    },
    {
      type: "activity",
      instructions: {
        en: "Play each word once, and have kids point to or say the picture they heard. Repeat any pair the class finds hard.",
        ko: "각 단어를 한 번씩 재생하고, 학생들이 들은 단어의 그림을 가리키거나 말하게 하세요. 어려워하는 쌍은 반복해 주세요.",
      },
      config: {
        engine: "minimal_pairs",
        title: { en: "Listen Closely: f or p?", ko: "잘 들어보세요: f일까요, p일까요?" },
        targetSound: "/f/ vs /p/",
        teacherNote: "Korean has no /f/ phoneme; it's regularly approximated with /p/ (ㅍ) or /h/ (ㅎ) in loanwords.",
        pairs: [
          { wordA: { text: "fan", emoji: "🪭", ko: "부채" }, wordB: { text: "pan", emoji: "🍳", ko: "프라이팬" } },
          { wordA: { text: "fine", emoji: "👍", ko: "좋은" }, wordB: { text: "pine", emoji: "🌲", ko: "소나무" } },
          { wordA: { text: "fork", emoji: "🍴", ko: "포크" }, wordB: { text: "pork", emoji: "🥓", ko: "돼지고기" } },
          { wordA: { text: "full", emoji: "🈵", ko: "가득 찬" }, wordB: { text: "pull", emoji: "🚪", ko: "당기다" } },
        ],
      },
    },
    {
      type: "check",
      prompt: { en: "Say \"fan\" and \"pan\" one more time — thumbs up if you can hear the difference now.", ko: "\"fan\"과 \"pan\"을 한 번 더 말해보세요 — 이제 차이가 들리면 엄지를 올려주세요." },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we practiced listening for the f sound — brand new for Korean speakers, so lots of practice is completely normal.",
        ko: "오늘은 f 소리를 듣는 연습을 했어요 — 한국어 화자에게는 완전히 새로운 소리라서, 많이 연습하는 것이 아주 자연스러운 일이에요.",
      },
    },
  ],
};
