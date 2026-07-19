import type { Lesson } from "../types";
import { getLessonMeta } from "../scopeAndSequence";

function meta(key: string) {
  const m = getLessonMeta(key);
  if (!m) throw new Error(`No scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const w6d2_give_robi_the_steps: Lesson = {
  ...meta("w6d2_give_robi_the_steps"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Ask: \"What do you do first in the morning — wake up, or eat breakfast?\" Kids should answer easily; this sets up why order matters.",
        ko: "\"아침에 가장 먼저 하는 일은 무엇일까요 — 일어나기, 아니면 아침 먹기?\"라고 물어보세요. 학생들이 쉽게 답할 수 있어요 — 순서가 왜 중요한지 준비하는 단계예요.",
      },
      prompt: { en: "What comes first?", ko: "무엇이 먼저일까요?" },
    },
    {
      type: "vocab",
      title: { en: "Sequencing Words", ko: "순서 표현" },
      words: [
        { word: { en: "first", ko: "먼저" }, emoji: "1️⃣" },
        { word: { en: "next", ko: "다음으로" }, emoji: "➡️" },
        { word: { en: "then", ko: "그다음" }, emoji: "➡️" },
        { word: { en: "last", ko: "마지막으로" }, emoji: "🏁" },
      ],
    },
    {
      type: "concept",
      title: { en: "Robi Follows Exact Steps", ko: "로비는 정확한 순서를 따라요" },
      bigIdeas: ["reasoning"],
      lines: [
        { en: "Robots do exactly what you tell them — in exactly the order you tell them!", ko: "로봇은 너희가 말한 그대로, 정확히 그 순서대로 해!" },
        { en: "That list of steps is called an algorithm.", ko: "그 순서 목록을 '알고리즘'이라고 해." },
        { en: "If the order is wrong, Robi still follows it — even if it doesn't make sense!", ko: "순서가 틀려도 로비는 그대로 따라 해 — 말이 안 되더라도!" },
      ],
      teacherNote:
        "The punchline to land here: order isn't just a grammar rule, it's literally how instructions work for a computer. Consider demonstrating by \"executing\" a deliberately wrong order (e.g., \"eat breakfast, then wake up\") for a laugh before the activity.",
    },
    {
      type: "activity",
      instructions: {
        en: "Kids take turns tapping the next step. Read each step aloud with its sequencing word (\"First, wake up...\") as it's placed.",
        ko: "학생들이 돌아가며 다음 단계를 탭해요. 배치할 때마다 순서 표현과 함께 소리 내어 읽어주세요(\"First, wake up...\").",
      },
      config: {
        engine: "sequence_builder",
        title: { en: "My Morning Routine", ko: "나의 아침 루틴" },
        steps: [
          { text: { en: "Wake up", ko: "일어나기" }, emoji: "🌞" },
          { text: { en: "Get dressed", ko: "옷 입기" }, emoji: "👕" },
          { text: { en: "Eat breakfast", ko: "아침 먹기" }, emoji: "🥣" },
          { text: { en: "Brush teeth", ko: "양치하기" }, emoji: "🪥" },
        ],
      },
    },
    {
      type: "check",
      prompt: { en: "\"First we wake up, next we...\" — have a student finish the sentence.", ko: "\"First we wake up, next we...\" — 한 학생이 문장을 이어서 말해보게 하세요." },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we learned first/next/then/last and practiced putting a routine in the right order — just like giving Robi an algorithm.",
        ko: "오늘은 first/next/then/last를 배우고 루틴을 올바른 순서로 배열하는 연습을 했어요 — 로비에게 알고리즘을 알려주는 것처럼요.",
      },
    },
  ],
};
