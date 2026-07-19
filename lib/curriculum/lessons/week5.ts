import type { Lesson } from "../types";
import { getLessonMeta } from "../scopeAndSequence";

function meta(key: string) {
  const m = getLessonMeta(key);
  if (!m) throw new Error(`No scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const w5d1_yummy_food: Lesson = {
  ...meta("w5d1_yummy_food"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Ask: \"Do you like kimchi?\" Give a thumbs up yourself and encourage kids to react before teaching the sentence frame.",
        ko: "\"Do you like kimchi?\"라고 물어보세요. 문장 표현을 알려주기 전에 선생님이 먼저 엄지를 들어 반응을 보여주세요.",
      },
      prompt: { en: "Do you like kimchi? 🥬", ko: "김치 좋아해요? 🥬" },
    },
    {
      type: "vocab",
      title: { en: "Food", ko: "음식" },
      words: [
        { word: { en: "apple", ko: "사과" }, emoji: "🍎" },
        { word: { en: "rice", ko: "밥" }, emoji: "🍚" },
        { word: { en: "bread", ko: "빵" }, emoji: "🍞" },
        { word: { en: "milk", ko: "우유" }, emoji: "🥛" },
        { word: { en: "egg", ko: "달걀" }, emoji: "🥚" },
        { word: { en: "kimchi", ko: "김치" }, emoji: "🥬" },
        { word: { en: "bibimbap", ko: "비빔밥" }, emoji: "🍲" },
      ],
    },
    {
      type: "concept",
      title: { en: "I Like...", ko: "나는 ~을 좋아해요" },
      bigIdeas: [],
      lines: [{ en: "I like kimchi. I like bibimbap. What do you like?", ko: "I like kimchi. I like bibimbap. 너는 무엇을 좋아해?" }],
      teacherNote:
        "Kimchi and bibimbap are here on purpose: kids already have full L1 confidence with these words, so the new work is only the English sentence frame around a familiar concept — not the vocabulary itself.",
    },
    {
      type: "check",
      prompt: { en: "Go around the room: each kid says one food they like.", ko: "교실을 돌며 각자 좋아하는 음식을 한 가지씩 말해보세요." },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we learned food words — including some we already knew in Korean — and how to say \"I like ___\" in English.",
        ko: "오늘은 음식 단어를 배웠어요 — 이미 한국어로 알고 있던 것도 있었죠 — 그리고 영어로 \"I like ___\"라고 말하는 방법을 배웠어요.",
      },
    },
  ],
};

export const w5d2_fruit_or_vegetable: Lesson = {
  ...meta("w5d2_fruit_or_vegetable"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Ask: \"Is an apple a fruit or a vegetable?\" Kids should answer easily — this warms up the category words before the sort.",
        ko: "\"사과는 과일일까요, 채소일까요?\"라고 물어보세요. 학생들이 쉽게 답할 수 있을 거예요 — 본 활동 전 준비 단계예요.",
      },
      prompt: { en: "Fruit or vegetable?", ko: "과일일까요, 채소일까요?" },
    },
    {
      type: "concept",
      title: { en: "Fruit or Vegetable?", ko: "과일일까요, 채소일까요?" },
      bigIdeas: ["perception", "learning"],
      lines: [
        { en: "We've taught Robi to sort before — remember animals and vehicles?", ko: "우리는 전에도 로비에게 분류하는 법을 가르쳤었죠 — 동물과 탈것 기억나요?" },
        { en: "Let's see if Robi can learn a brand new category: fruit and vegetable!", ko: "이번엔 로비가 완전히 새로운 분류인 과일과 채소를 배울 수 있는지 봐요!" },
      ],
      teacherNote:
        "Second full train/guess classification loop with brand-new vocabulary — a good moment to ask the class to predict out loud whether Robi will learn faster this time.",
    },
    {
      type: "activity",
      instructions: {
        en: "Kids sort the first few together as a class, then Robi starts guessing on its own — the class judges whether Robi got it right.",
        ko: "처음 몇 개는 반 전체가 함께 분류하고, 그 다음엔 로비가 스스로 추측해요 — 로비가 맞았는지 학급이 판단해요.",
      },
      config: {
        engine: "train_the_robot",
        title: { en: "Fruit or Vegetable?", ko: "과일일까요, 채소일까요?" },
        labelA: { en: "Fruit", ko: "과일" },
        labelB: { en: "Vegetable", ko: "채소" },
        emojiA: "🍎",
        emojiB: "🥕",
        items: [
          { word: { en: "apple", ko: "사과" }, emoji: "🍎", bucket: "a" },
          { word: { en: "banana", ko: "바나나" }, emoji: "🍌", bucket: "a" },
          { word: { en: "grapes", ko: "포도" }, emoji: "🍇", bucket: "a" },
          { word: { en: "strawberry", ko: "딸기" }, emoji: "🍓", bucket: "a" },
          { word: { en: "watermelon", ko: "수박" }, emoji: "🍉", bucket: "a" },
          { word: { en: "carrot", ko: "당근" }, emoji: "🥕", bucket: "b" },
          { word: { en: "broccoli", ko: "브로콜리" }, emoji: "🥦", bucket: "b" },
          { word: { en: "corn", ko: "옥수수" }, emoji: "🌽", bucket: "b" },
          { word: { en: "potato", ko: "감자" }, emoji: "🥔", bucket: "b" },
          { word: { en: "tomato", ko: "토마토" }, emoji: "🍅", bucket: "b" },
        ],
      },
    },
    {
      type: "check",
      prompt: { en: "\"Robi learned faster / slower this time.\" Ask the class which, and why they think so.", ko: "\"로비가 이번엔 더 빨리 / 더 천천히 배웠어요.\" 학급에게 어느 쪽인지, 왜 그렇게 생각하는지 물어보세요." },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we practiced sorting fruit and vegetables, and checked whether Robi's learning got faster with practice.",
        ko: "오늘은 과일과 채소를 분류하는 연습을 했고, 연습을 통해 로비의 학습이 더 빨라졌는지 확인했어요.",
      },
    },
  ],
};

export const w5d3_do_you_like: Lesson = {
  ...meta("w5d3_do_you_like"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Ask two or three kids \"Do you like pizza?\" and model a quick \"Yes, I do\" / \"No, I don't\" before the activity.",
        ko: "두세 명의 학생에게 \"Do you like pizza?\"라고 물어보고, 활동 전에 \"Yes, I do\" / \"No, I don't\"를 간단히 보여주세요.",
      },
      prompt: { en: "Do you like pizza? 🍕", ko: "피자 좋아해요? 🍕" },
    },
    {
      type: "concept",
      title: { en: "Asking with \"Do\"", ko: "\"Do\"로 질문하기" },
      bigIdeas: [],
      lines: [
        { en: "In Korean, we ask a question just by changing how our voice sounds.", ko: "한국어에서는 말투만 바꿔서 질문을 만들어요." },
        { en: "In English, we add a new word at the very front: \"Do.\"", ko: "영어에서는 맨 앞에 새로운 단어 \"Do\"를 붙여요." },
        { en: "Let's build the question one word at a time.", ko: "한 단어씩 질문을 만들어봐요." },
      ],
      teacherNote:
        "This is the yes/no question-formation gap — English fronts an auxiliary \"do\" with no direct Korean equivalent. Build it physically with the tiles below rather than explaining the grammar rule abstractly.",
    },
    {
      type: "activity",
      instructions: {
        en: "Build the question one tile at a time, left to right. Say each word aloud as a tile is placed, then read the full question together.",
        ko: "왼쪽에서 오른쪽으로 한 번에 한 단어씩 질문을 만들어요. 타일을 놓을 때마다 단어를 소리 내어 말하고, 완성되면 전체 질문을 함께 읽어보세요.",
      },
      config: {
        engine: "sentence_builder",
        title: { en: "Do you like apples?", ko: "너는 사과를 좋아하니?" },
        words: [
          { text: "Do", role: "other", ko: "(질문을 만드는 단어)" },
          { text: "you", role: "subject", ko: "너는" },
          { text: "like", role: "verb", ko: "좋아하다" },
          { text: "apples", role: "object", ko: "사과를" },
        ],
        translation: { en: "Do you like apples?", ko: "너는 사과를 좋아하니?" },
      },
    },
    {
      type: "check",
      prompt: { en: "Partners ask and answer \"Do you like ___?\" three times, swapping the food word.", ko: "짝과 함께 음식 단어를 바꿔가며 \"Do you like ___?\"를 세 번 묻고 답해보세요." },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we built yes/no questions with \"Do you like ___?\" — closing out our week on food and choices.",
        ko: "오늘은 \"Do you like ___?\"로 yes/no 질문을 만들었어요 — 음식과 선택 주제의 한 주를 마무리했어요.",
      },
      homework: { en: "Ask a family member \"Do you like ___?\" about three different foods.", ko: "가족에게 세 가지 다른 음식에 대해 \"Do you like ___?\"라고 물어보세요." },
    },
  ],
};
