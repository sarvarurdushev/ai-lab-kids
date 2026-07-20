import type { Lesson } from "../types";
import { getLessonMeta } from "../scopeAndSequence";

function meta(key: string) {
  const m = getLessonMeta(key);
  if (!m) throw new Error(`No scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const w7d1_what_can_robots_do: Lesson = {
  ...meta("w7d1_what_can_robots_do"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Ask: \"Can a robot swim? Can a robot cook?\" Take quick guesses before teaching the verbs.",
        ko: "\"로봇은 수영할 수 있을까요? 요리할 수 있을까요?\"라고 물어보고 동사를 알려주기 전에 빠르게 추측을 들어보세요.",
      },
      prompt: { en: "What can a robot do?", ko: "로봇은 무엇을 할 수 있을까요?" },
    },
    {
      type: "vocab",
      title: { en: "Action Verbs", ko: "동작 동사" },
      words: [
        { word: { en: "clean", ko: "청소하다" }, emoji: "🧹" },
        { word: { en: "cook", ko: "요리하다" }, emoji: "🍳" },
        { word: { en: "drive", ko: "운전하다" }, emoji: "🚗" },
        { word: { en: "fly", ko: "날다" }, emoji: "✈️" },
        { word: { en: "swim", ko: "수영하다" }, emoji: "🏊" },
        { word: { en: "talk", ko: "말하다" }, emoji: "💬" },
      ],
    },
    {
      type: "concept",
      title: { en: "Robots Can...", ko: "로봇은 ~할 수 있어요" },
      bigIdeas: ["societal_impact"],
      lines: [
        { en: "Real robots can clean floors, and real robots can fly!", ko: "진짜 로봇은 바닥을 청소할 수 있고, 하늘을 날 수도 있어!" },
        { en: "\"Can\" tells us what something is able to do.", ko: "\"Can\"은 무언가 할 수 있는 일을 말해줘." },
      ],
      teacherNote: "First real-world grounding of \"robot\" beyond Vora the character — robot vacuums and delivery drones are good concrete examples if kids ask for more.",
    },
    {
      type: "check",
      prompt: { en: "Each kid says one thing a robot can do, using an action verb from today.", ko: "오늘 배운 동사를 사용해 각자 로봇이 할 수 있는 일을 한 가지씩 말해보세요." },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we learned action verbs and how \"can\" describes what something is able to do.",
        ko: "오늘은 동작 동사와 \"can\"이 무언가 할 수 있는 일을 나타내는 방법을 배웠어요.",
      },
    },
  ],
};

export const w7d2_robots_at_home_and_school: Lesson = {
  ...meta("w7d2_robots_at_home_and_school"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Ask: \"Is a calculator an AI helper?\" Let the class debate briefly — there's no shame in disagreeing today.",
        ko: "\"계산기는 AI 도우미일까요?\"라고 물어보세요. 학급이 잠깐 토론하게 해주세요 — 오늘은 의견이 달라도 괜찮아요.",
      },
      prompt: { en: "AI helper, or not AI?", ko: "AI 도우미일까요, AI가 아닐까요?" },
    },
    {
      type: "concept",
      title: { en: "Robots at Home and School", ko: "집과 학교의 로봇" },
      bigIdeas: ["societal_impact", "perception"],
      lines: [
        { en: "Some helpers around you are AI — they learn and answer.", ko: "너희 주변의 어떤 도우미는 AI야 — 배우고 답할 수 있어." },
        { en: "Some helpers are smart tools, but not AI — they just do one job the same way every time.", ko: "어떤 도우미는 똑똑한 도구이지만 AI는 아니야 — 항상 똑같은 방식으로 한 가지 일만 해." },
        { en: "This one is tricky — let's sort them together and talk about why.", ko: "이건 좀 어려워 — 함께 분류하면서 이유를 이야기해보자." },
      ],
      teacherNote:
        "The hardest sort in the unit on purpose — a calculator is fast and \"smart-seeming\" but doesn't learn or adapt, which is exactly the distinction worth sitting with. Expect more \"needs practice\" marks here than any other lesson; that's the activity working as intended, not a sign kids are behind.",
    },
    {
      type: "activity",
      instructions: {
        en: "Go slower than usual here and discuss each one — this sort is meant to be debated, not rushed.",
        ko: "평소보다 천천히 진행하며 각 항목을 이야기해보세요 — 이 분류는 빨리 끝내는 것이 아니라 토론하는 것이 목적이에요.",
      },
      config: {
        engine: "train_the_robot",
        title: { en: "AI Helper or Not AI?", ko: "AI 도우미일까요, AI가 아닐까요?" },
        labelA: { en: "AI Helper", ko: "AI 도우미" },
        labelB: { en: "Not AI", ko: "AI가 아니에요" },
        emojiA: "🤖",
        emojiB: "🔧",
        items: [
          { word: { en: "voice assistant", ko: "음성 비서" }, emoji: "🔊", bucket: "a" },
          { word: { en: "robot vacuum", ko: "로봇 청소기" }, emoji: "🤖", bucket: "a" },
          { word: { en: "smart speaker", ko: "스마트 스피커" }, emoji: "📢", bucket: "a" },
          { word: { en: "calculator", ko: "계산기" }, emoji: "🧮", bucket: "b" },
          { word: { en: "alarm clock", ko: "알람 시계" }, emoji: "⏰", bucket: "b" },
          { word: { en: "flashlight", ko: "손전등" }, emoji: "🔦", bucket: "b" },
          { word: { en: "lamp", ko: "램프" }, emoji: "💡", bucket: "b" },
        ],
      },
    },
    {
      type: "check",
      prompt: { en: "Ask one student to explain, in their own words, why a calculator isn't AI.", ko: "한 학생에게 계산기가 왜 AI가 아닌지 자기 말로 설명해보게 하세요." },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we sorted real helpers into AI and not-AI — the trickiest sort yet, and a big step in understanding what AI actually is.",
        ko: "오늘은 실제 도우미들을 AI와 AI가 아닌 것으로 분류했어요 — 지금까지 중 가장 어려운 분류였고, AI가 실제로 무엇인지 이해하는 큰 걸음이었어요.",
      },
    },
  ],
};

export const w7d3_vora_makes_a_mistake: Lesson = {
  ...meta("w7d3_vora_makes_a_mistake"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Ask: \"Can Vora see a picture? Can Vora feel hungry?\" Let kids guess before the activity.",
        ko: "\"보라는 그림을 볼 수 있을까요? 배고픔을 느낄 수 있을까요?\"라고 물어보고 활동 전에 추측하게 하세요.",
      },
      prompt: { en: "Can Vora do it?", ko: "보라가 할 수 있을까요?" },
    },
    {
      type: "concept",
      title: { en: "Vora Can, Vora Can't", ko: "보라가 할 수 있는 일, 할 수 없는 일" },
      bigIdeas: ["societal_impact", "learning"],
      lines: [
        { en: "I can talk, learn, and sort pictures — you've seen me do it all unit!", ko: "나는 말하고, 배우고, 그림을 분류할 수 있어 — 이번 학기 내내 봤지!" },
        { en: "But I can't feel hungry, and I can't really see the real world like you do.", ko: "하지만 나는 배고픔을 느낄 수 없고, 너희처럼 진짜 세상을 볼 수도 없어." },
        { en: "Knowing what AI can't do is just as important as knowing what it can.", ko: "AI가 할 수 없는 것을 아는 것도 할 수 있는 것을 아는 것만큼 중요해." },
      ],
      teacherNote: "Direct callback to Week 1 Day 3 and Week 2 Day 2's \"AI can be wrong\" thread — this lesson is where that idea gets a name (limitations) and a grammar structure to express it.",
    },
    {
      type: "activity",
      instructions: {
        en: "Build the sentence one tile at a time, left to right. Then invite a few kids to say their own \"Vora can / can't ___\" sentence out loud.",
        ko: "왼쪽에서 오른쪽으로 한 번에 한 단어씩 문장을 만들어요. 그런 다음 몇 명의 학생에게 자신만의 \"Vora can / can't ___\" 문장을 소리 내어 말해보게 하세요.",
      },
      config: {
        engine: "sentence_builder",
        title: { en: "Vora can fly.", ko: "보라는 날 수 있어요." },
        words: [
          { text: "Vora", role: "subject", ko: "보라는" },
          { text: "can", role: "other", ko: "~할 수 있다" },
          { text: "fly", role: "verb", ko: "날다" },
        ],
        translation: { en: "Vora can fly.", ko: "보라는 날 수 있어요." },
      },
    },
    {
      type: "check",
      prompt: { en: "\"Vora can ___. Vora can't ___.\" — each kid completes both blanks out loud.", ko: "\"Vora can ___. Vora can't ___.\" — 각자 두 빈칸을 채워 소리 내어 말해보세요." },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we built can/can't sentences about Vora — putting a grammar structure around the idea that AI has real limits.",
        ko: "오늘은 보라에 대해 can/can't 문장을 만들었어요 — AI에게 진짜 한계가 있다는 생각에 문법 구조를 붙여봤어요.",
      },
      homework: { en: "Tell a family member one thing Vora can do and one thing Vora can't do.", ko: "가족에게 보라가 할 수 있는 일과 할 수 없는 일을 한 가지씩 말해보세요." },
    },
  ],
};
