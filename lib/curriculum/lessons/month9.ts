import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m9_class: Lesson = {
  ...meta("m9_class"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Point to your own eyes, nose, and mouth one at a time, saying each word slowly. Ask kids to touch the same part on themselves.",
        ko: "선생님의 눈, 코, 입을 하나씩 가리키며 천천히 단어를 말해보세요. 학생들도 자기 몸에서 같은 부위를 만져보게 하세요.",
      },
      prompt: { en: "Point to your eyes! 👀", ko: "눈을 가리켜보세요! 👀" },
    },
    {
      type: "vocab",
      title: { en: "My Body", ko: "내 몸" },
      words: [
        { word: { en: "eyes", ko: "눈" }, emoji: "👀" },
        { word: { en: "nose", ko: "코" }, emoji: "👃" },
        { word: { en: "mouth", ko: "입" }, emoji: "👄" },
        { word: { en: "ears", ko: "귀" }, emoji: "👂" },
        { word: { en: "hands", ko: "손" }, emoji: "🙌" },
        { word: { en: "feet", ko: "발" }, emoji: "🦶" },
        { word: { en: "shoulders", ko: "어깨" }, emoji: "🙆", minTrack: "explorers" },
      ],
    },
    {
      type: "concept",
      title: { en: "Robi Doesn't Have Eyes Like You!", ko: "로비는 너희처럼 눈이 없어요!" },
      bigIdeas: ["perception"],
      lines: [
        { en: "I don't have real eyes, or real hands, or real feet like you do!", ko: "나는 진짜 눈도, 손도, 발도 없어!" },
        {
          en: "But some games can still tell when your body moves — they use something called a sensor, not eyes.",
          ko: "하지만 어떤 게임들은 너희 몸이 움직이는 걸 알아챌 수 있어 — 눈이 아니라 '센서'라는 걸 사용하거든.",
        },
        {
          en: "A fitness tracker on your wrist can feel you jump, even with the lights off!",
          ko: "손목에 차는 활동량 측정기는 불이 꺼져 있어도 네가 점프하는 걸 느낄 수 있어!",
        },
      ],
      teacherNote:
        "This month broadens 'perception' beyond seeing — sensors that detect motion or touch are a form of perception too, even without eyes or a camera. Motion-sensor games (dance games, some fitness trackers) are the concrete example to point to if kids ask how.",
    },
    {
      type: "activity",
      instructions: {
        en: "Kids take turns flipping two cards at a time, saying the body part out loud if they find a match.",
        ko: "학생들이 돌아가며 카드를 두 장씩 뒤집고, 짝을 찾으면 신체 부위 이름을 소리 내어 말해보세요.",
      },
      config: {
        engine: "memory_match",
        title: { en: "Body Parts", ko: "신체 부위" },
        pairs: [
          { word: { en: "eyes", ko: "눈" }, emoji: "👀" },
          { word: { en: "nose", ko: "코" }, emoji: "👃" },
          { word: { en: "mouth", ko: "입" }, emoji: "👄" },
          { word: { en: "ears", ko: "귀" }, emoji: "👂" },
          { word: { en: "hands", ko: "손" }, emoji: "🙌" },
          { word: { en: "feet", ko: "발" }, emoji: "🦶" },
          { word: { en: "shoulders", ko: "어깨" }, emoji: "🙆", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "check",
      prompt: {
        en: "Everyone point to your ears, then your feet — no talking, just pointing!",
        ko: "모두 귀를 가리키고, 그다음 발을 가리켜보세요 — 말하지 않고 손가락으로만요!",
      },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we named six body parts in English and learned that sensors, not just eyes, can notice how our bodies move.",
        ko: "오늘은 영어로 신체 부위 여섯 가지의 이름을 배우고, 눈이 아니라 센서도 우리 몸의 움직임을 알아챌 수 있다는 걸 배웠어요.",
      },
      homework: {
        en: "Touch and name three body parts in English before bedtime tonight.",
        ko: "오늘 밤 자기 전에 신체 부위 세 가지를 영어로 만지며 말해보세요.",
      },
    },
  ],
};

export const m9_play: Lesson = {
  ...meta("m9_play"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Play a quick round of \"Robi Says\" instead of \"Simon Says\" — give one or two commands yourself (\"Robi says clap your hands!\") before today's game.",
        ko: "\"사이먼 가라사대\" 대신 \"로비 가라사대\" 게임을 짧게 해보세요 — 오늘 게임을 시작하기 전에 직접 한두 가지 명령을 내려보세요(\"Robi says clap your hands!\").",
      },
      prompt: { en: "Robi says... clap your hands! 👏", ko: "로비 가라사대... clap your hands! 👏" },
    },
    {
      type: "activity",
      instructions: {
        en: "As each step is placed, have the whole class stand up and actually perform it together before moving to the next — this routine is meant to be moved, not just read aloud.",
        ko: "각 단계를 놓을 때마다 반 전체가 일어나서 실제로 함께 동작을 해보고 나서 다음으로 넘어가세요 — 이 루틴은 그냥 읽는 게 아니라 몸으로 직접 해보는 거예요.",
      },
      config: {
        engine: "sequence_builder",
        title: { en: "Robi Says: Move Your Body!", ko: "로비 가라사대: 몸을 움직여요!" },
        steps: [
          { text: { en: "Stand up", ko: "일어서기" }, emoji: "🧍" },
          { text: { en: "Touch your nose", ko: "코 만지기" }, emoji: "👃" },
          { text: { en: "Clap your hands", ko: "손뼉 치기" }, emoji: "👏", minTrack: "explorers" },
          { text: { en: "Sit down", ko: "앉기" }, emoji: "🪑" },
        ],
      },
    },
    {
      type: "activity",
      instructions: {
        en: "Build the sentence one tile at a time, then have the whole class physically touch their nose as they say it out loud together.",
        ko: "한 번에 한 타일씩 문장을 만들고, 다 함께 소리 내어 말하면서 실제로 코를 만져보세요.",
      },
      config: {
        engine: "sentence_builder",
        title: { en: "Touch your nose.", ko: "코를 만지세요." },
        words: [
          { text: "Touch", role: "verb", ko: "만지다" },
          { text: "your nose", role: "object", ko: "너의 코" },
        ],
        translation: { en: "Touch your nose.", ko: "코를 만지세요." },
      },
    },
    {
      type: "check",
      prompt: {
        en: "Call out a step from today's routine (\"Touch your nose!\") and see if everyone can do it without looking at the screen.",
        ko: "오늘 루틴 중 한 단계를 외쳐보세요(\"Touch your nose!\") — 화면을 보지 않고도 모두 할 수 있는지 확인해보세요.",
      },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we moved our whole bodies through a routine and built the sentence \"Touch your nose\" together.",
        ko: "오늘은 온몸을 움직이며 루틴을 해보고, 다함께 \"Touch your nose\" 문장을 만들었어요.",
      },
      homework: {
        en: "Teach a family member the \"Robi Says\" game tonight using English body words.",
        ko: "오늘 저녁 가족에게 영어 신체 단어로 \"로비 가라사대\" 게임을 가르쳐주세요.",
      },
    },
  ],
};

export const m9_spotlight: Lesson = {
  ...meta("m9_spotlight"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Say \"think\" and \"sink\" slowly, back to back, a few times — see if anyone remembers this pair from Week 4!",
        ko: "\"think\"와 \"sink\"를 천천히 반복해서 말해보세요 — 4주차에 배운 이 소리 쌍을 기억하는 사람이 있는지 확인해보세요!",
      },
      prompt: { en: "think... sink... Do you remember?", ko: "think... sink... 기억나나요?" },
    },
    {
      type: "concept",
      title: { en: "Ears Are Sensors Too", ko: "귀도 센서예요" },
      bigIdeas: ["perception"],
      lines: [
        {
          en: "This month we learned that eyes, hands, and sensors all help us notice the world.",
          ko: "이번 달에 우리는 눈, 손, 그리고 센서가 모두 세상을 알아차리는 데 도움을 준다는 걸 배웠어.",
        },
        { en: "Your ears are sensors too — let's use them for a super-careful listening game.", ko: "너희 귀도 센서야 — 아주 조심스럽게 듣는 게임을 해보자." },
        { en: "Listen very closely: think... or sink?", ko: "아주 잘 듣고 골라봐: think일까, sink일까?" },
      ],
      teacherNote:
        "This is the third quarter-checkpoint listening review (after Week 4's original th/s lesson) — ties this month's 'sensors, not just eyes' theme directly to the ears as a sensor too.",
    },
    {
      type: "activity",
      instructions: {
        en: "Play each word once, and have kids point to or say the picture they heard. Repeat any pair the class finds hard — expect this review to go faster than Week 4's first pass.",
        ko: "각 단어를 한 번씩 재생하고, 학생들이 들은 단어의 그림을 가리키거나 말하게 하세요. 어려워하는 쌍은 반복해 주세요 — 4주차에 처음 배웠을 때보다 이번엔 더 빨리 진행될 거예요.",
      },
      config: {
        engine: "minimal_pairs",
        title: { en: "Listen Closely: think or sink?", ko: "잘 들어보세요: think일까요, sink일까요?" },
        targetSound: "/θ/ (\"th\") vs /s/",
        teacherNote:
          "Korean has no /θ/; expect substitution with /s/ or /t/. This is the third quarter-checkpoint review of the four core Korean L1 sound gaps, first taught in Week 4 of the foundations unit.",
        pairs: [
          { wordA: { text: "think", emoji: "🤔", ko: "생각하다" }, wordB: { text: "sink", emoji: "🚰", ko: "싱크대" } },
          { wordA: { text: "mouth", emoji: "👄", ko: "입" }, wordB: { text: "mouse", emoji: "🐭", ko: "쥐" } },
          { wordA: { text: "bath", emoji: "🛁", ko: "목욕" }, wordB: { text: "bass", emoji: "🐟", ko: "농어" } },
          {
            wordA: { text: "path", emoji: "🛤️", ko: "길" },
            wordB: { text: "pass", emoji: "🏈", ko: "패스하다" },
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      type: "check",
      prompt: {
        en: "Say \"think\" and \"sink\" one more time — thumbs up if it's easier to hear the difference than it was in Week 4.",
        ko: "\"think\"와 \"sink\"를 한 번 더 말해보세요 — 4주차보다 차이가 더 쉽게 들리면 엄지를 올려주세요.",
      },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we reviewed the th/s sound from Week 4 — one more sound-gap check-in before the year's last one in Month 12.",
        ko: "오늘은 4주차에 배운 th/s 소리를 복습했어요 — 12월의 마지막 복습 전, 한 번 더 확인해봤어요.",
      },
    },
  ],
};
