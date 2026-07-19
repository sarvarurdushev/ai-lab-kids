import type { Lesson } from "../types";
import { getLessonMeta } from "../scopeAndSequence";

function meta(key: string) {
  const m = getLessonMeta(key);
  if (!m) throw new Error(`No scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const w4d2_count_with_robi: Lesson = {
  ...meta("w4d2_count_with_robi"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Count five objects in the room out loud together: \"One, two, three, four, five.\"",
        ko: "교실 안 물건 다섯 개를 함께 소리 내어 세어보세요: \"One, two, three, four, five.\"",
      },
      prompt: { en: "1, 2, 3, 4, 5...", ko: "1, 2, 3, 4, 5..." },
    },
    {
      type: "vocab",
      title: { en: "Numbers 1-10", ko: "숫자 1-10" },
      words: [
        { word: { en: "one", ko: "하나" }, emoji: "1️⃣" },
        { word: { en: "two", ko: "둘" }, emoji: "2️⃣" },
        { word: { en: "three", ko: "셋" }, emoji: "3️⃣" },
        { word: { en: "four", ko: "넷" }, emoji: "4️⃣" },
        { word: { en: "five", ko: "다섯" }, emoji: "5️⃣" },
      ],
    },
    {
      type: "concept",
      title: { en: "Robi Counts, Too", ko: "로비도 세어봐요" },
      bigIdeas: ["perception"],
      lines: [
        { en: "When I look at a picture, I can count how many things are in it.", ko: "그림을 보면, 나는 그 안에 몇 개가 있는지 셀 수 있어." },
        { en: "\"How many dogs?\" \"Two dogs!\" — counting is a way of understanding a picture.", ko: "\"강아지가 몇 마리?\" \"두 마리!\" — 세는 것도 그림을 이해하는 한 가지 방법이야." },
      ],
      teacherNote:
        "Keep this light — it's just planting that \"counting what's in a picture\" is something both people and AI do, ahead of the sentence-building activity.",
    },
    {
      type: "activity",
      instructions: {
        en: "Build the sentence one tile at a time, left to right. Say each word aloud as a tile is placed, then read the full sentence together.",
        ko: "왼쪽에서 오른쪽으로 한 번에 한 단어씩 문장을 만들어요. 타일을 놓을 때마다 단어를 소리 내어 말하고, 완성되면 전체 문장을 함께 읽어보세요.",
      },
      config: {
        engine: "sentence_builder",
        title: { en: "I have two dogs.", ko: "나는 강아지 두 마리가 있어요." },
        words: [
          { text: "I", role: "subject", ko: "나는" },
          { text: "have", role: "verb", ko: "가지고 있다" },
          { text: "two", role: "other", ko: "두" },
          { text: "dogs", role: "object", ko: "강아지들" },
        ],
        translation: { en: "I have two dogs.", ko: "나는 강아지 두 마리가 있어요." },
      },
    },
    {
      type: "check",
      prompt: { en: "Ask a few kids: \"How many ___ do you have?\" using a word they know.", ko: "몇몇 학생에게 물어보세요: 아는 단어를 사용해 \"How many ___ do you have?\"" },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we counted to five and built the sentence \"I have two dogs\" in the right English word order.",
        ko: "오늘은 5까지 세고, \"I have two dogs\"를 올바른 영어 어순으로 만들었어요.",
      },
      homework: {
        en: "Count five things at home in English.",
        ko: "집에서 물건 다섯 개를 영어로 세어보세요.",
      },
    },
  ],
};
