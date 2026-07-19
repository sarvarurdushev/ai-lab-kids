import type { Lesson } from "../types";
import { getLessonMeta } from "../scopeAndSequence";

function meta(key: string) {
  const m = getLessonMeta(key);
  if (!m) throw new Error(`No scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const w2d1_animal_safari: Lesson = {
  ...meta("w2d1_animal_safari"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Make an animal sound (like a lion's roar) and ask \"What animal is this?\" before revealing the word.",
        ko: "동물 소리(예: 사자 울음소리)를 내고 \"What animal is this?\"라고 물어본 뒤 단어를 알려주세요.",
      },
      prompt: { en: "What animal is this? 🦁", ko: "이것은 무슨 동물일까요? 🦁" },
    },
    {
      type: "vocab",
      title: { en: "Animals", ko: "동물" },
      words: [
        { word: { en: "cat", ko: "고양이" }, emoji: "🐱" },
        { word: { en: "dog", ko: "강아지" }, emoji: "🐶" },
        { word: { en: "lion", ko: "사자" }, emoji: "🦁" },
        { word: { en: "rabbit", ko: "토끼" }, emoji: "🐰" },
        { word: { en: "bird", ko: "새" }, emoji: "🐦" },
        { word: { en: "fish", ko: "물고기" }, emoji: "🐟" },
      ],
    },
    {
      type: "concept",
      title: { en: "One or Many", ko: "하나 또는 여러 개" },
      bigIdeas: [],
      lines: [
        { en: "One cat. Two cats!", ko: "고양이 한 마리. 고양이 두 마리!" },
        { en: "In English, we add -s when there's more than one.", ko: "영어에서는 두 개 이상일 때 -s를 붙여요." },
      ],
      teacherNote:
        "Korean doesn't mark plurals by default, so this needs extra repetition — have kids echo \"one cat, two cats\" as a chant with claps on the -s.",
    },
    {
      type: "check",
      prompt: { en: "Hold up fingers and ask kids to say \"one dog\" / \"three dogs,\" etc.", ko: "손가락을 들어 보이며 \"one dog\" / \"three dogs\" 등을 말하게 해보세요." },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we learned six animal words and how to make them plural with -s.",
        ko: "오늘은 동물 단어 여섯 개와 -s로 복수형을 만드는 방법을 배웠어요.",
      },
      homework: {
        en: "Find one animal picture at home and say its name in English, singular and plural.",
        ko: "집에서 동물 그림을 하나 찾아 단수형과 복수형으로 영어 이름을 말해보세요.",
      },
    },
  ],
};

export const w2d2_how_does_robi_see: Lesson = {
  ...meta("w2d2_how_does_robi_see"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Ask: \"Is a lion an animal or a vehicle?\" Kids should answer easily — this warms up the category words before the harder sort.",
        ko: "\"사자는 동물일까요, 탈것일까요?\"라고 물어보세요. 학생들이 쉽게 답할 수 있을 거예요 — 본 활동 전 준비 단계예요.",
      },
      prompt: { en: "Animal or vehicle?", ko: "동물일까요, 탈것일까요?" },
    },
    {
      type: "concept",
      title: { en: "How Does Robi See?", ko: "로비는 어떻게 볼까요?" },
      bigIdeas: ["perception", "learning"],
      lines: [
        { en: "I learn by looking at LOTS of examples, not just one.", ko: "나는 하나가 아니라 아주 많은 예시를 보면서 배워." },
        { en: "You show me examples, and I try to learn the pattern.", ko: "너희가 예시를 보여주면, 나는 패턴을 배우려고 노력해." },
        { en: "Sometimes I still guess wrong at first. That's how learning works!", ko: "가끔은 처음에 틀리게 추측하기도 해. 그게 바로 배우는 과정이야!" },
      ],
      teacherNote:
        "This is the AI-for-Oceans-style train/guess loop, now revisited from Week 1 Day 3 with a new category — watch whether kids explain the \"Robi can be wrong\" idea in their own words before the activity.",
    },
    {
      type: "activity",
      instructions: {
        en: "Kids sort the first few together as a class, then Robi starts guessing on its own — the class judges whether Robi got it right.",
        ko: "처음 몇 개는 반 전체가 함께 분류하고, 그 다음엔 로비가 스스로 추측해요 — 로비가 맞았는지 학급이 판단해요.",
      },
      config: {
        engine: "train_the_robot",
        title: { en: "Animal or Vehicle?", ko: "동물일까요, 탈것일까요?" },
        labelA: { en: "Animal", ko: "동물" },
        labelB: { en: "Vehicle", ko: "탈것" },
        emojiA: "🐾",
        emojiB: "🚗",
        items: [
          { word: { en: "cat", ko: "고양이" }, emoji: "🐱", bucket: "a" },
          { word: { en: "dog", ko: "강아지" }, emoji: "🐶", bucket: "a" },
          { word: { en: "lion", ko: "사자" }, emoji: "🦁", bucket: "a" },
          { word: { en: "rabbit", ko: "토끼" }, emoji: "🐰", bucket: "a" },
          { word: { en: "bird", ko: "새" }, emoji: "🐦", bucket: "a" },
          { word: { en: "car", ko: "자동차" }, emoji: "🚗", bucket: "b" },
          { word: { en: "bus", ko: "버스" }, emoji: "🚌", bucket: "b" },
          { word: { en: "train", ko: "기차" }, emoji: "🚂", bucket: "b" },
          { word: { en: "bike", ko: "자전거" }, emoji: "🚲", bucket: "b" },
        ],
      },
    },
    {
      type: "check",
      prompt: { en: "\"These are animals.\" — have the class say this together, pointing at the animal group.", ko: "\"These are animals.\" — 동물 그룹을 가리키며 함께 말해보세요." },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we practiced sorting animals and vehicles, and saw Robi learn from examples — sometimes getting it wrong, and that's okay.",
        ko: "오늘은 동물과 탈것을 분류하는 연습을 했고, 로비가 예시로부터 배우는 모습을 봤어요 — 가끔 틀려도 괜찮아요.",
      },
    },
  ],
};

export const w2d3_light_or_right: Lesson = {
  ...meta("w2d3_light_or_right"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Say \"light\" and \"right\" slowly, back to back, a few times. Don't explain yet — just let the class notice the sounds are close but different.",
        ko: "\"light\"와 \"right\"를 천천히, 반복해서 말해주세요. 아직 설명하지 말고 학생들이 소리가 비슷하지만 다르다는 것을 스스로 느끼게 해주세요.",
      },
      prompt: { en: "light... right... light... right...", ko: "light... right... light... right..." },
    },
    {
      type: "concept",
      title: { en: "Two Sounds, One Letter in Korean", ko: "한국어로는 하나, 영어로는 두 소리" },
      bigIdeas: ["perception"],
      lines: [
        { en: "In English, \"l\" and \"r\" are two different sounds.", ko: "영어에서 \"l\"과 \"r\"은 서로 다른 두 소리예요." },
        { en: "Let's listen very carefully and pick the word we hear.", ko: "아주 잘 듣고 들리는 단어를 골라봐요." },
      ],
      teacherNote:
        "Do not ask kids to produce the sounds yet — this lesson is receptive (listening) only. Production practice comes later once discrimination is solid; asking for output too early just teaches guessing.",
    },
    {
      type: "activity",
      instructions: {
        en: "Play each word once (tap the speaker icon), and have kids point to or say the picture they heard. Repeat any pair the class finds hard.",
        ko: "각 단어를 한 번씩 재생하고(스피커 아이콘 탭), 학생들이 들은 단어의 그림을 가리키거나 말하게 하세요. 어려워하는 쌍은 반복해 주세요.",
      },
      config: {
        engine: "minimal_pairs",
        title: { en: "Listen Closely: l or r?", ko: "잘 들어보세요: l일까요, r일까요?" },
        targetSound: "/l/ vs /r/",
        teacherNote:
          "The single highest-frequency Korean-learner pronunciation gap — Korean's single liquid phoneme /ㄹ/ covers both English sounds, so this contrast genuinely doesn't exist in the L1.",
        pairs: [
          { wordA: { text: "light", emoji: "💡", ko: "빛" }, wordB: { text: "right", emoji: "👉", ko: "오른쪽" } },
          { wordA: { text: "lead", emoji: "🚶", ko: "이끌다" }, wordB: { text: "read", emoji: "📖", ko: "읽다" } },
          { wordA: { text: "load", emoji: "📦", ko: "짐" }, wordB: { text: "road", emoji: "🛣️", ko: "도로" } },
          { wordA: { text: "lock", emoji: "🔒", ko: "자물쇠" }, wordB: { text: "rock", emoji: "🪨", ko: "바위" } },
          { wordA: { text: "low", emoji: "⬇️", ko: "낮은" }, wordB: { text: "row", emoji: "🚣", ko: "노를 젓다" } },
        ],
      },
    },
    {
      type: "check",
      prompt: { en: "Say \"light\" and \"right\" one more time — thumbs up if you can hear the difference now.", ko: "\"light\"와 \"right\"를 한 번 더 말해보세요 — 이제 차이가 들리면 엄지를 올려주세요." },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we practiced listening for the difference between l and r sounds — a tricky pair for Korean speakers, and totally normal to still be working on.",
        ko: "오늘은 l과 r 소리의 차이를 듣는 연습을 했어요 — 한국어 화자에게 어려운 발음이니, 아직 연습 중이어도 아주 자연스러운 일이에요.",
      },
    },
  ],
};
