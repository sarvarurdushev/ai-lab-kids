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
      teacherScript: {
        en: "Mime waking up and stretching, then ask \"What do I do first in the morning?\"",
        ko: "일어나서 기지개 켜는 동작을 흉내 내며 \"What do I do first in the morning?\"이라고 물어보세요.",
      },
      prompt: { en: "Good morning! 🌞", ko: "좋은 아침! 🌞" },
    },
    {
      type: "vocab",
      title: { en: "Morning Actions", ko: "아침 동작" },
      words: [
        { word: { en: "wake up", ko: "일어나다" }, emoji: "🌞" },
        { word: { en: "get dressed", ko: "옷을 입다" }, emoji: "👕" },
        { word: { en: "eat breakfast", ko: "아침을 먹다" }, emoji: "🥣" },
        { word: { en: "brush teeth", ko: "양치하다" }, emoji: "🪥" },
      ],
    },
    {
      type: "check",
      prompt: { en: "Each kid says one thing they do every morning.", ko: "각자 매일 아침에 하는 일을 한 가지씩 말해보세요." },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we learned four morning actions in English — tomorrow we'll put them in order for Robi.",
        ko: "오늘은 영어로 아침 동작 네 가지를 배웠어요 — 내일은 로비를 위해 순서대로 배열해볼 거예요.",
      },
    },
  ],
};

export const w6d3_bedtime_routine: Lesson = {
  ...meta("w6d3_bedtime_routine"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Ask: \"What's the last thing you do before you sleep?\" and take a few quick answers.",
        ko: "\"잠들기 전 마지막으로 하는 일은 무엇인가요?\"라고 물어보고 몇 가지 답을 들어보세요.",
      },
      prompt: { en: "Good night! 😴", ko: "잘 자요! 😴" },
    },
    {
      type: "vocab",
      title: { en: "Bedtime Actions", ko: "잠자리 준비 동작" },
      words: [
        { word: { en: "put on pajamas", ko: "잠옷을 입다" }, emoji: "🩱" },
        { word: { en: "brush teeth", ko: "양치하다" }, emoji: "🪥" },
        { word: { en: "read a story", ko: "이야기를 읽다" }, emoji: "📖" },
        { word: { en: "go to sleep", ko: "잠들다" }, emoji: "😴" },
      ],
    },
    {
      type: "activity",
      instructions: {
        en: "Same skill as yesterday, new routine — kids take turns tapping the next step and reading it aloud with its sequencing word.",
        ko: "어제와 같은 기술을, 새로운 루틴으로! 학생들이 돌아가며 다음 단계를 탭하고 순서 표현과 함께 소리 내어 읽어요.",
      },
      config: {
        engine: "sequence_builder",
        title: { en: "Getting Ready for Bed", ko: "잠자리 준비" },
        steps: [
          { text: { en: "Put on pajamas", ko: "잠옷을 입기" }, emoji: "🩱" },
          { text: { en: "Brush teeth", ko: "양치하기" }, emoji: "🪥" },
          { text: { en: "Read a story", ko: "이야기 읽기" }, emoji: "📖" },
          { text: { en: "Go to sleep", ko: "잠들기" }, emoji: "😴" },
        ],
      },
    },
    {
      type: "check",
      prompt: { en: "\"First we put on pajamas, next we...\" — have a student finish the whole sequence out loud.", ko: "\"First we put on pajamas, next we...\" — 한 학생이 전체 순서를 소리 내어 이어서 말해보게 하세요." },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we ordered a brand-new routine using first/next/then/last — showing we can use the sequencing skill anywhere, not just for one routine.",
        ko: "오늘은 first/next/then/last를 사용해 완전히 새로운 루틴을 순서대로 배열했어요 — 이 기술을 한 가지 루틴뿐 아니라 어디에든 쓸 수 있다는 걸 보여줬어요.",
      },
    },
  ],
};

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
