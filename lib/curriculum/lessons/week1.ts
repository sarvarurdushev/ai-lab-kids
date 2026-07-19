import type { Lesson } from "../types";
import { getLessonMeta } from "../scopeAndSequence";

function meta(key: string) {
  const m = getLessonMeta(key);
  if (!m) throw new Error(`No scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const w1d1_hello_robi: Lesson = {
  ...meta("w1d1_hello_robi"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Wave hello to the class and say \"Hello!\" a few times, encouraging kids to wave back before you introduce Robi.",
        ko: "반 학생들에게 손을 흔들며 \"Hello!\"를 여러 번 말해보세요. 로비를 소개하기 전에 학생들도 함께 손을 흔들도록 격려해 주세요.",
      },
      prompt: { en: "Hello! 👋", ko: "안녕! 👋" },
    },
    {
      type: "vocab",
      title: { en: "Greeting Words", ko: "인사말" },
      words: [
        { word: { en: "hello", ko: "안녕(만났을 때)" }, emoji: "👋" },
        { word: { en: "goodbye", ko: "안녕(헤어질 때)" }, emoji: "🙋" },
        { word: { en: "my name is...", ko: "내 이름은 ~이에요" }, emoji: "🧑" },
        { word: { en: "friend", ko: "친구" }, emoji: "🧑‍🤝‍🧑" },
      ],
    },
    {
      type: "concept",
      title: { en: "Meet Robi", ko: "로비를 만나요" },
      bigIdeas: ["natural_interaction"],
      lines: [
        { en: "Hi! My name is Robi.", ko: "안녕! 내 이름은 로비야." },
        { en: "I'm an AI — a computer friend who can talk and learn.", ko: "나는 AI야 — 말하고 배울 수 있는 컴퓨터 친구야." },
        { en: "I'm not a real robot toy. I live inside a screen!", ko: "나는 진짜 로봇 장난감이 아니야. 나는 화면 속에서 살아!" },
        { en: "I'm going to learn English with you this whole time we're together.", ko: "나는 우리가 함께하는 동안 너희와 영어를 배울 거야." },
      ],
      teacherNote:
        "Keep this concrete: Robi is a friendly character, not a lecture on AI. The goal is just \"Robi = a computer friend who talks and learns,\" nothing more technical yet.",
    },
    {
      type: "check",
      prompt: { en: "Everyone wave and say \"Hello, Robi!\" together.", ko: "다 함께 손을 흔들며 \"Hello, Robi!\"라고 말해봐요." },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we said hello and goodbye, and we met Robi, our AI friend for this course.",
        ko: "오늘은 hello와 goodbye를 배우고, 이번 학기 동안 함께할 AI 친구 로비를 만났어요.",
      },
      homework: {
        en: "Say \"hello\" and \"goodbye\" to one family member in English tonight.",
        ko: "오늘 저녁, 가족 중 한 명에게 영어로 \"hello\"와 \"goodbye\"를 말해보세요.",
      },
    },
  ],
};

export const w1d2_robis_classroom: Lesson = {
  ...meta("w1d2_robis_classroom"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Hold up a book (or point to one) and ask \"What is this?\" Model the answer \"It's a book\" before kids try.",
        ko: "책을 들어 보이며 \"What is this?\"라고 물어보세요. 학생들이 답하기 전에 \"It's a book\"이라는 답을 먼저 보여주세요.",
      },
      prompt: { en: "What is this?", ko: "이것은 무엇인가요?" },
    },
    {
      type: "vocab",
      title: { en: "Classroom Objects", ko: "교실 물건" },
      words: [
        { word: { en: "book", ko: "책" }, emoji: "📖" },
        { word: { en: "pencil", ko: "연필" }, emoji: "✏️" },
        { word: { en: "chair", ko: "의자" }, emoji: "🪑" },
        { word: { en: "desk", ko: "책상" }, emoji: "🗄️" },
        { word: { en: "bag", ko: "가방" }, emoji: "🎒" },
      ],
    },
    {
      type: "concept",
      title: { en: "Robi Looks Around", ko: "로비가 주위를 둘러봐요" },
      bigIdeas: ["perception"],
      lines: [
        { en: "I can see things too — just like you!", ko: "나도 너희처럼 물건을 볼 수 있어!" },
        { en: "When I look at a picture, I try to name what's in it.", ko: "그림을 보면, 나는 그 안에 무엇이 있는지 이름을 말하려고 해." },
        { en: "That's called perception — how I understand what I see.", ko: "그것을 '지각(perception)'이라고 해 — 내가 보는 것을 이해하는 방법이야." },
      ],
      teacherNote:
        "First use of the word \"perception\" — say it once, define it in one plain sentence, and move on. Don't quiz on the term itself.",
    },
    {
      type: "check",
      prompt: { en: "Point to something in the room and ask a partner \"What is this?\"", ko: "교실 안의 물건을 가리키며 짝에게 \"What is this?\"라고 물어보세요." },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we named five classroom objects and asked \"What is this?\"",
        ko: "오늘은 교실 물건 다섯 가지의 이름을 말하고 \"What is this?\"라고 물어봤어요.",
      },
    },
  ],
};

export const w1d3_what_is_ai: Lesson = {
  ...meta("w1d3_what_is_ai"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Ask: \"Is a book smart? Is a phone smart?\" Let kids answer with gut instinct — there's no wrong answer yet, you're just activating the idea.",
        ko: "\"책은 똑똑할까요? 휴대폰은 똑똑할까요?\"라고 물어보세요. 아직 정답은 없으니 학생들이 직감대로 답하게 해 주세요.",
      },
      prompt: { en: "Smart helper, or regular thing?", ko: "똑똑한 도우미일까요, 보통 물건일까요?" },
    },
    {
      type: "concept",
      title: { en: "Smart Helper or Regular Thing?", ko: "똑똑한 도우미일까요, 보통 물건일까요?" },
      bigIdeas: ["perception", "learning"],
      lines: [
        { en: "Some things can learn and answer questions — like me!", ko: "어떤 것들은 배우고 질문에 답할 수 있어 — 나처럼!" },
        { en: "Some things just sit there and don't change. That's okay too.", ko: "어떤 것들은 그냥 그대로 있고 변하지 않아. 그것도 괜찮아." },
        { en: "Let's sort some pictures together: smart helper, or regular thing?", ko: "그림들을 함께 분류해 보자: 똑똑한 도우미일까, 보통 물건일까?" },
      ],
      teacherNote:
        "This is the first classification loop of the course. Frame it as sorting, not testing — wrong guesses are expected and fine.",
    },
    {
      type: "activity",
      instructions: {
        en: "As a class, decide together where each picture goes before anyone taps — this is a shared sort, not an individual quiz.",
        ko: "탭하기 전에 반 전체가 함께 각 그림이 어디로 가야 할지 정해보세요 — 개인 퀴즈가 아니라 함께하는 분류 활동이에요.",
      },
      config: {
        engine: "train_the_robot",
        title: { en: "Smart Helper or Regular Thing?", ko: "똑똑한 도우미일까요, 보통 물건일까요?" },
        labelA: { en: "Smart Helper", ko: "똑똑한 도우미" },
        labelB: { en: "Regular Thing", ko: "보통 물건" },
        emojiA: "🤖",
        emojiB: "📦",
        items: [
          { word: { en: "voice assistant", ko: "음성 비서" }, emoji: "🔊", bucket: "a" },
          { word: { en: "phone", ko: "휴대폰" }, emoji: "📱", bucket: "a" },
          { word: { en: "robot", ko: "로봇" }, emoji: "🤖", bucket: "a" },
          { word: { en: "book", ko: "책" }, emoji: "📖", bucket: "b" },
          { word: { en: "pencil", ko: "연필" }, emoji: "✏️", bucket: "b" },
          { word: { en: "chair", ko: "의자" }, emoji: "🪑", bucket: "b" },
          { word: { en: "ball", ko: "공" }, emoji: "⚽", bucket: "b" },
        ],
      },
    },
    {
      type: "check",
      prompt: { en: "Ask one table: \"Tell me one smart helper you have at home.\"", ko: "한 모둠에게 물어보세요: \"집에 있는 똑똑한 도우미를 한 가지 말해보세요.\"" },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we learned that some things can learn and answer, and some things can't — and we practiced sorting them, just like Robi does.",
        ko: "오늘은 어떤 것들은 배우고 답할 수 있지만 어떤 것들은 그럴 수 없다는 것을 배웠고, 로비처럼 분류하는 연습을 했어요.",
      },
    },
  ],
};
