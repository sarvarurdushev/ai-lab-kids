import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m5_week1: Lesson = {
  ...meta("m5_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Show a family photo (yours, or a simple drawing on the board) and point to one person: \"This is my mom.\" Ask kids to guess who else might be in the photo before you teach the other words.",
        ko: "가족 사진(선생님 사진이나 칠판에 그린 간단한 그림)을 보여주며 한 사람을 가리키세요: \"This is my mom.\" 다른 단어를 가르치기 전에 사진 속 다른 사람이 누구일지 학생들이 추측하게 해보세요.",
      },
      prompt: { en: "Who is this? 👨‍👩‍👧‍👦", ko: "이 사람은 누구일까요? 👨‍👩‍👧‍👦" },
    },
    {
      type: "vocab",
      title: { en: "Family", ko: "가족" },
      words: [
        { word: { en: "mom", ko: "엄마" }, emoji: "👩" },
        { word: { en: "dad", ko: "아빠" }, emoji: "👨" },
        { word: { en: "sister", ko: "언니/누나/여동생" }, emoji: "👧" },
        { word: { en: "brother", ko: "형/오빠/남동생" }, emoji: "👦" },
        { word: { en: "grandma", ko: "할머니" }, emoji: "👵" },
        { word: { en: "grandpa", ko: "할아버지" }, emoji: "👴" },
        { word: { en: "baby", ko: "아기" }, emoji: "👶", minTrack: "explorers" },
      ],
    },
    {
      type: "concept",
      title: { en: "This Is My Family", ko: "우리 가족이에요" },
      bigIdeas: ["perception"],
      lines: [
        { en: "This is my mom. This is my dad. This is my family!", ko: "This is my mom. This is my dad. 우리 가족이야!" },
        { en: "I can look at pictures of faces, too — that's called perception.", ko: "나도 얼굴 사진을 볼 수 있어 — 그걸 '지각(perception)'이라고 해." },
        { en: "But sometimes I mix up two people who look alike, like sisters or twins.", ko: "하지만 나는 자매나 쌍둥이처럼 닮은 두 사람을 가끔 헷갈려." },
        {
          en: "You never mix up your own family, though — not even for a second!",
          ko: "하지만 너희는 자기 가족을 절대 헷갈리지 않지 — 단 1초도!",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "Korean family terms (형/오빠, 누나/언니) encode relative age and the speaker's gender in a way English \"brother/sister\" doesn't — some kids will want to specify more than English allows. Validate that impulse (\"Yes, in Korean we'd say more — in English we just say brother or sister!\") instead of correcting it away. Keep the face-recognition point reassuring, not scary: apps can be wrong, kids never are about their own family.",
    },
    {
      type: "activity",
      instructions: {
        en: "Flip two cards at a time to find a matching family word and picture. If they match, they stay face up!",
        ko: "카드 두 장을 뒤집어 가족 단어와 그림의 짝이 맞는지 찾아보세요. 짝이 맞으면 그대로 뒤집힌 채로 남아요!",
      },
      config: {
        engine: "memory_match",
        title: { en: "Family Words", ko: "가족 단어" },
        pairs: [
          { word: { en: "mom", ko: "엄마" }, emoji: "👩" },
          { word: { en: "dad", ko: "아빠" }, emoji: "👨" },
          { word: { en: "sister", ko: "언니/누나/여동생" }, emoji: "👧" },
          { word: { en: "brother", ko: "형/오빠/남동생" }, emoji: "👦" },
          { word: { en: "grandma", ko: "할머니" }, emoji: "👵" },
          { word: { en: "grandpa", ko: "할아버지" }, emoji: "👴" },
          { word: { en: "baby", ko: "아기" }, emoji: "👶", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "check",
      prompt: {
        en: "Show your own family photo (or draw one) and tell a partner: \"This is my ___.\"",
        ko: "가족 사진을 보여주거나 그림을 그려 짝에게 말해보세요: \"This is my ___.\"",
      },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we learned family words and the sentence \"This is my ___\" — and how even the smartest AI can mix up faces that you'd never confuse.",
        ko: "오늘은 가족 단어와 \"This is my ___\" 문장을 배웠어요 — 그리고 아무리 똑똑한 AI라도 너희는 절대 헷갈리지 않을 얼굴을 헷갈릴 수 있다는 것도 배웠어요.",
      },
      homework: {
        en: "Introduce one family member to someone at home using \"This is my ___.\"",
        ko: "집에서 \"This is my ___.\"를 사용해 가족 중 한 명을 소개해보세요.",
      },
    },
  ],
};

export const m5_week2: Lesson = {
  ...meta("m5_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Ask a few kids: \"Do you have a brother?\" Then say: \"Today, let's build a sentence about our families, one word at a time!\"",
        ko: "몇몇 학생에게 물어보세요: \"Do you have a brother?\" 그런 다음 말하세요: \"오늘은 가족에 대한 문장을 한 단어씩 만들어볼 거예요!\"",
      },
      prompt: { en: "Let's build a family sentence! 🧩", ko: "가족 문장을 만들어봐요! 🧩" },
    },
    {
      type: "concept",
      title: { en: "Vora Remembers Faces", ko: "보라는 얼굴을 기억해요" },
      bigIdeas: ["perception"],
      lines: [
        { en: "Remember, I can look at pictures of faces too — but I still mix some up!", ko: "기억나? 나도 얼굴 사진을 볼 수 있어 — 그런데 아직도 가끔 헷갈려!" },
        {
          en: "You never mix up your own family, though. Let's practice introducing them in English!",
          ko: "하지만 너희는 자기 가족을 절대 헷갈리지 않지. 영어로 가족을 소개하는 연습을 해보자!",
        },
      ],
      teacherNote:
        "Quick callback to Week 1's face-recognition point — no new teaching here, just a bridge into today's sentence-building game.",
    },
    {
      type: "activity",
      instructions: {
        en: "Build the sentence one tile at a time, left to right. Say each word aloud as a tile is placed, then read the full sentence together. Then play a second game to reinforce it.",
        ko: "왼쪽에서 오른쪽으로 한 번에 한 단어씩 문장을 만들어요. 타일을 놓을 때마다 단어를 소리 내어 말하고, 완성되면 전체 문장을 함께 읽어보세요. 그런 다음 두 번째 게임을 하며 복습해요.",
      },
      config: {
        engine: "sentence_builder",
        title: { en: "This is my brother.", ko: "제 형/오빠/남동생이에요." },
        words: [
          { text: "This is", role: "subject", ko: "이건 ~예요" },
          { text: "my", role: "other", ko: "나의" },
          { text: "brother", role: "object", ko: "형/오빠/남동생" },
        ],
        translation: { en: "This is my brother.", ko: "제 형/오빠/남동생이에요." },
      },
    },
    {
      type: "activity",
      instructions: {
        en: "Sort each word: does it belong to family, or to school?",
        ko: "각 단어를 분류해보세요: 가족에 속할까요, 학교에 속할까요?",
      },
      config: {
        engine: "train_the_robot",
        title: { en: "Family Word or School Word?", ko: "가족 단어일까요, 학교 단어일까요?" },
        labelA: { en: "Family", ko: "가족" },
        labelB: { en: "School", ko: "학교" },
        emojiA: "👪",
        emojiB: "🏫",
        items: [
          { word: { en: "mom", ko: "엄마" }, emoji: "👩", bucket: "a" },
          { word: { en: "dad", ko: "아빠" }, emoji: "👨", bucket: "a" },
          { word: { en: "sister", ko: "언니/누나/여동생" }, emoji: "👧", bucket: "a" },
          { word: { en: "brother", ko: "형/오빠/남동생" }, emoji: "👦", bucket: "a" },
          { word: { en: "teacher", ko: "선생님" }, emoji: "🧑‍🏫", bucket: "b" },
          { word: { en: "classmate", ko: "반 친구" }, emoji: "🧑‍🤝‍🧑", bucket: "b", minTrack: "explorers" },
          { word: { en: "desk", ko: "책상" }, emoji: "🗄️", bucket: "b" },
        ],
      },
    },
    {
      type: "check",
      prompt: {
        en: "Point to a family member in a photo or drawing and say: \"This is my ___.\"",
        ko: "사진이나 그림 속 가족을 가리키며 말해보세요: \"This is my ___.\"",
      },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we built the sentence \"This is my brother\" tile by tile, then practiced it with a second game — sorting family and school words.",
        ko: "오늘은 \"This is my brother\" 문장을 한 조각씩 만들고, 가족과 학교 단어를 분류하는 두 번째 게임으로 연습했어요.",
      },
    },
  ],
};

export const m5_week3: Lesson = {
  ...meta("m5_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Call out a word — \"mom\" or \"desk\" — and have kids shout \"Family!\" or \"School!\" as fast as they can before today's sorting game.",
        ko: "\"mom\"이나 \"desk\"처럼 단어를 하나 말하고, 오늘의 분류 게임 전에 학생들이 최대한 빨리 \"Family!\" 또는 \"School!\"이라고 외치게 하세요.",
      },
      prompt: { en: "Family or school? Shout it out! 👪🏫", ko: "가족일까요, 학교일까요? 외쳐보세요! 👪🏫" },
    },
    {
      type: "concept",
      title: { en: "Sorting Like Vora", ko: "보라처럼 분류하기" },
      bigIdeas: ["perception"],
      lines: [
        { en: "Sorting things into groups is exactly what I do with pictures — that's perception!", ko: "물건을 그룹으로 나누는 건 내가 사진으로 하는 일과 똑같아 — 그게 바로 지각(perception)이야!" },
        { en: "Let's see if you can sort these words even faster than me.", ko: "오늘은 너희가 나보다 더 빨리 분류할 수 있는지 볼까?" },
      ],
      teacherNote:
        "Brief callback to Week 1's perception idea before the sorting game — no new content, just framing today's game as the same skill.",
    },
    {
      type: "activity",
      instructions: {
        en: "Sort each word: does it belong to family, or to school? Then play a second game to reinforce it.",
        ko: "각 단어를 분류해보세요: 가족에 속할까요, 학교에 속할까요? 그런 다음 두 번째 게임으로 복습해 보세요.",
      },
      config: {
        engine: "train_the_robot",
        title: { en: "Family Word or School Word?", ko: "가족 단어일까요, 학교 단어일까요?" },
        labelA: { en: "Family", ko: "가족" },
        labelB: { en: "School", ko: "학교" },
        emojiA: "👪",
        emojiB: "🏫",
        items: [
          { word: { en: "mom", ko: "엄마" }, emoji: "👩", bucket: "a" },
          { word: { en: "dad", ko: "아빠" }, emoji: "👨", bucket: "a" },
          { word: { en: "sister", ko: "언니/누나/여동생" }, emoji: "👧", bucket: "a" },
          { word: { en: "brother", ko: "형/오빠/남동생" }, emoji: "👦", bucket: "a" },
          { word: { en: "teacher", ko: "선생님" }, emoji: "🧑‍🏫", bucket: "b" },
          { word: { en: "classmate", ko: "반 친구" }, emoji: "🧑‍🤝‍🧑", bucket: "b", minTrack: "explorers" },
          { word: { en: "desk", ko: "책상" }, emoji: "🗄️", bucket: "b" },
        ],
      },
    },
    {
      type: "activity",
      instructions: {
        en: "Build the sentence one tile at a time, left to right. Say each word aloud as a tile is placed, then read the full sentence together.",
        ko: "왼쪽에서 오른쪽으로 한 번에 한 단어씩 문장을 만들어요. 타일을 놓을 때마다 단어를 소리 내어 말하고, 완성되면 전체 문장을 함께 읽어보세요.",
      },
      config: {
        engine: "sentence_builder",
        title: { en: "This is my brother.", ko: "제 형/오빠/남동생이에요." },
        words: [
          { text: "This is", role: "subject", ko: "이건 ~예요" },
          { text: "my", role: "other", ko: "나의" },
          { text: "brother", role: "object", ko: "형/오빠/남동생" },
        ],
        translation: { en: "This is my brother.", ko: "제 형/오빠/남동생이에요." },
      },
    },
    {
      type: "check",
      prompt: {
        en: "Ask a partner: \"Is 'teacher' a family word or a school word?\"",
        ko: "짝에게 물어보세요: \"'teacher'는 가족 단어일까요, 학교 단어일까요?\"",
      },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we played two games — sorting family words from school words, and building the sentence \"This is my brother\" tile by tile.",
        ko: "오늘은 두 가지 게임을 했어요 — 가족 단어와 학교 단어를 분류하고, \"This is my brother\" 문장을 한 조각씩 만들어봤어요.",
      },
    },
  ],
};

export const m5_week4: Lesson = {
  ...meta("m5_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Ask a few kids: \"Do you have a sister? Do you have a brother?\" Quick yes/no answers to warm up before today's sentence.",
        ko: "몇몇 학생에게 물어보세요: \"Do you have a sister? Do you have a brother?\" 오늘의 문장을 배우기 전에 짧게 예/아니오로 답해보세요.",
      },
      prompt: { en: "Do you have a sister or a brother?", ko: "언니(누나)나 오빠(형)가 있나요?" },
    },
    {
      type: "concept",
      title: { en: "This Is My Sister!", ko: "제 여동생이에요!" },
      bigIdeas: [],
      lines: [
        { en: "This... is my sister!", ko: "이건... 제 여동생이에요!" },
        {
          en: "You can say it about anyone in your family — a brother, a grandma, even a pet!",
          ko: "가족 중 누구에 대해서도 말할 수 있어요 — 오빠나 형, 할머니, 심지어 반려동물도요!",
        },
        { en: "Ready? Let's build the sentence together, one word at a time.", ko: "준비됐나요? 함께 한 단어씩 문장을 만들어봐요." },
      ],
      teacherNote:
        "Kids may want to name a cousin, grandparent, or even a pet — welcome any real family member, the sentence frame is what matters, not the exact word \"sister.\" Encourage a real, true answer rather than the first option on the screen.",
    },
    {
      type: "activity",
      instructions: {
        en: "Build the sentence one tile at a time, left to right. Then invite several kids to swap in their own family member and say it out loud.",
        ko: "왼쪽에서 오른쪽으로 한 번에 한 단어씩 문장을 만들어요. 그런 다음 여러 학생이 자신의 가족으로 바꿔서 소리 내어 말해보게 하세요.",
      },
      config: {
        engine: "sentence_builder",
        title: { en: "This is my sister.", ko: "제 여동생이에요." },
        words: [
          { text: "This is", role: "subject", ko: "이건 ~예요" },
          { text: "my", role: "other", ko: "나의" },
          { text: "sister", role: "object", ko: "언니/누나/여동생" },
        ],
        translation: { en: "This is my sister.", ko: "제 여동생이에요." },
      },
    },
    {
      type: "check",
      prompt: {
        en: "Every kid says \"This is my ___\" out loud, naming one real family member.",
        ko: "모든 학생이 \"This is my ___\"라고 소리 내어 말하며 진짜 가족 중 한 명을 소개해보세요.",
      },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today every child proudly introduced one real family member in English — the whole point of the sentence.",
        ko: "오늘은 모든 학생이 영어로 진짜 가족 중 한 명을 자신 있게 소개했어요 — 이 문장의 진짜 목적이에요.",
      },
      homework: {
        en: "Say \"This is my ___\" about a family member to someone at home tonight.",
        ko: "오늘 저녁, 집에서 가족 중 한 명에 대해 \"This is my ___\"라고 말해보세요.",
      },
    },
  ],
};
