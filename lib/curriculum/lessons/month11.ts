import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";
import { AI_OR_NOT_SETS, INSTRUCT_VORA_SCENARIOS } from "../aiLabBank";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m11_week1: Lesson = {
  ...meta("m11_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Make a big happy face, then a sad face, then a surprised face — ask the class each time: \"How do I feel?\" Let them answer in Korean or English before teaching today's sentence pattern.",
        ko: "신나는 표정, 슬픈 표정, 놀란 표정을 차례로 지어 보이며 매번 물어보세요: \"How do I feel?\" 오늘의 문장 패턴을 가르치기 전에 한국어나 영어로 자유롭게 답하게 해주세요.",
      },
      prompt: { en: "How do I feel?", ko: "저는 기분이 어떨까요?" },
    },
    {
      type: "vocab",
      title: { en: "Feelings", ko: "감정" },
      words: [
        { word: { en: "happy", ko: "행복한" }, emoji: "😊" },
        { word: { en: "sad", ko: "슬픈" }, emoji: "😢" },
        { word: { en: "angry", ko: "화난" }, emoji: "😠" },
        { word: { en: "scared", ko: "무서운" }, emoji: "😨" },
        { word: { en: "surprised", ko: "놀란" }, emoji: "😲", minTrack: "explorers" },
        { word: { en: "tired", ko: "피곤한" }, emoji: "😴" },
      ],
    },
    {
      type: "concept",
      title: { en: "Vora Sees a Smile", ko: "보라가 웃는 얼굴을 봐요" },
      bigIdeas: ["natural_interaction", "perception"],
      lines: [
        { en: "Look at my face! Can you guess how I feel?", ko: "내 얼굴을 봐! 내가 어떤 기분인지 맞혀볼래?" },
        {
          en: "I see a big smile, so I might guess: happy! But seeing a smile isn't the same as really knowing how you feel inside.",
          ko: "나는 활짝 웃는 얼굴을 보고 '행복하겠다'라고 추측할 수 있어. 하지만 웃는 얼굴을 보는 것과 네 마음속 진짜 기분을 아는 건 달라.",
        },
        { en: "Only you really know how you feel. Let's practice saying it together: I feel ___.", ko: "네가 어떤 기분인지는 오직 너만 진짜로 알아. 함께 연습해보자: I feel ___." },
        {
          en: "Even the smartest AI can only guess from a picture — it can't feel a warm hug or a hard day, the way you can.",
          ko: "아무리 똑똑한 AI라도 사진만 보고 추측할 수 있을 뿐이야 — 너처럼 따뜻한 포옹이나 힘든 하루를 느낄 수는 없어.",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "This month's honest AI boundary: recognizing a facial expression (a shape a camera can detect) isn't the same as understanding a feeling. Also flag the grammar shift explicitly: \"I feel ___\" uses a real verb (feel), unlike the \"It's ___\" copula pattern used all year (Months 1, 6, and 7) — a quick side-by-side (\"It's sunny\" vs. \"I feel happy\") helps prevent kids from saying \"I'm feel happy\" or overusing \"it's\" for their own feelings.",
    },
    {
      type: "activity",
      instructions: {
        en: "As a class, decide together where each feeling goes before anyone taps — happy feelings on one side, not-happy feelings on the other.",
        ko: "탭하기 전에 반 전체가 함께 각 감정이 어디로 가야 할지 정해보세요 — 행복한 감정은 한쪽으로, 행복하지 않은 감정은 다른 쪽으로요.",
      },
      config: {
        engine: "train_the_robot",
        title: { en: "Happy Feeling or Not Happy Feeling?", ko: "행복한 기분일까요, 행복하지 않은 기분일까요?" },
        labelA: { en: "Happy", ko: "행복해요" },
        labelB: { en: "Not Happy", ko: "행복하지 않아요" },
        emojiA: "😊",
        emojiB: "😢",
        items: [
          { word: { en: "happy", ko: "행복한" }, emoji: "😊", bucket: "a" },
          { word: { en: "excited", ko: "신난" }, emoji: "🤩", bucket: "a" },
          { word: { en: "laughing", ko: "웃는" }, emoji: "😆", bucket: "a" },
          { word: { en: "sad", ko: "슬픈" }, emoji: "😢", bucket: "b" },
          { word: { en: "angry", ko: "화난" }, emoji: "😠", bucket: "b" },
          { word: { en: "scared", ko: "무서운" }, emoji: "😨", bucket: "b" },
          { word: { en: "tired", ko: "피곤한" }, emoji: "😴", bucket: "b" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[4],
    },
    {
      type: "check",
      prompt: {
        en: "Make a feeling face without talking — can a partner guess and say \"You feel ___\"?",
        ko: "말하지 않고 감정 표정을 지어보세요 — 짝이 \"You feel ___\"라고 맞출 수 있을까요?",
      },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we named six feelings and learned \"I feel ___\" — how an AI can spot a smile, but can't truly know how someone feels inside — and practiced spotting real AI in everyday life.",
        ko: "오늘은 감정 여섯 가지의 이름을 배우고 \"I feel ___\" 문장을 배웠어요 — AI가 웃는 얼굴을 알아챌 수는 있어도, 마음속 진짜 기분까지 알 수는 없다는 것도 배웠고, 일상 속 진짜 AI를 알아보는 연습도 했어요.",
      },
      homework: {
        en: "Ask a family member \"How do you feel?\" tonight and really listen to their answer.",
        ko: "오늘 저녁 가족에게 \"How do you feel?\"이라고 물어보고, 대답을 잘 들어보세요.",
      },
    },
  ],
};

export const m11_week2: Lesson = {
  ...meta("m11_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Act out a huge happy smile and freeze like a photo — ask the class: \"How do I feel?\" Tell them today we're going to build that sentence together, one word at a time.",
        ko: "활짝 웃는 표정을 짓고 사진처럼 멈춰서 물어보세요: \"How do I feel?\" 오늘은 그 문장을 함께 한 단어씩 만들어볼 거라고 말해주세요.",
      },
      prompt: { en: "Freeze! How do I feel? 📸", ko: "멈춰! 저는 기분이 어떨까요? 📸" },
    },
    {
      type: "concept",
      title: { en: "Just a Guess", ko: "그냥 추측일 뿐이에요" },
      bigIdeas: ["natural_interaction"],
      lines: [
        {
          en: "Remember — I can see a smile in a picture, but only you really know how you feel inside.",
          ko: "기억하지? 나는 사진 속 웃는 얼굴을 볼 수 있지만, 네가 진짜 어떤 기분인지는 오직 너만 알아.",
        },
        { en: "Let's practice saying it together: I feel ___.", ko: "함께 연습해보자: I feel ___." },
      ],
      teacherNote:
        "Quick reinforcement of Week 1's AI-limits idea — no new teaching here, just a short bridge into today's sentence-building game.",
    },
    {
      type: "activity",
      instructions: {
        en: "First, act out \"happy\" with your face and body — no words! Then build the sentence tile by tile and say it together. Afterward, play a second game to reinforce it.",
        ko: "먼저 말없이 표정과 몸으로 'happy'를 표현해보세요! 그런 다음 한 타일씩 문장을 만들고 함께 말해보세요. 이어서 두 번째 게임도 해보며 복습해보세요.",
      },
      config: {
        engine: "sentence_builder",
        title: { en: "I feel happy.", ko: "저는 행복해요." },
        words: [
          { text: "I", role: "subject", ko: "저는" },
          { text: "feel", role: "verb", ko: "느끼다" },
          { text: "happy", role: "other", ko: "행복한" },
        ],
        translation: { en: "I feel happy.", ko: "저는 행복해요." },
      },
    },
    {
      type: "activity",
      instructions: {
        en: "Flip two cards at a time. When you find a feeling word, act it out with your face and body before saying it in English!",
        ko: "카드 두 장을 뒤집어보세요. 감정 단어를 찾으면, 영어로 말하기 전에 표정과 몸으로 먼저 표현해보세요!",
      },
      config: {
        engine: "memory_match",
        title: { en: "Feelings Match", ko: "감정 짝 맞추기" },
        pairs: [
          { word: { en: "happy", ko: "행복한" }, emoji: "😊" },
          { word: { en: "sad", ko: "슬픈" }, emoji: "😢" },
          { word: { en: "angry", ko: "화난" }, emoji: "😠" },
          { word: { en: "scared", ko: "무서운" }, emoji: "😨" },
          { word: { en: "surprised", ko: "놀란" }, emoji: "😲", minTrack: "explorers" },
          { word: { en: "tired", ko: "피곤한" }, emoji: "😴" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[4],
    },
    {
      type: "check",
      prompt: {
        en: "Ask a partner: \"How do you feel?\" — can they answer with \"I feel ___\"?",
        ko: "짝에게 물어보세요: \"How do you feel?\" — \"I feel ___\"로 답할 수 있나요?",
      },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we played three activities — building the sentence \"I feel happy\" one tile at a time, matching feeling words to faces, and helping Vora follow clear step-by-step instructions.",
        ko: "오늘은 세 가지 활동을 했어요 — \"I feel happy\" 문장을 한 타일씩 만들고, 감정 단어와 표정을 짝지었어요. 그리고 보라가 분명한 단계별 지시를 따르도록 도왔어요.",
      },
      homework: {
        en: "Act out a feeling for your family tonight and see if they can guess it in English.",
        ko: "오늘 밤 가족 앞에서 감정을 몸으로 표현해보고, 가족이 영어로 맞힐 수 있는지 확인해보세요.",
      },
    },
  ],
};

export const m11_week3: Lesson = {
  ...meta("m11_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Ask the class to make three different feeling faces in a row — happy, sad, surprised — as fast as they can. Then tell them today we'll match feeling words to pictures.",
        ko: "학생들에게 행복, 슬픔, 놀람 표정을 최대한 빠르게 연달아 지어보라고 하세요. 그런 다음 오늘은 감정 단어와 그림을 짝지어볼 거라고 말해주세요.",
      },
      prompt: { en: "Happy, sad, surprised — go! 🎭", ko: "행복, 슬픔, 놀람 — 시작! 🎭" },
    },
    {
      type: "concept",
      title: { en: "Matching Feelings", ko: "감정 짝짓기" },
      bigIdeas: ["learning"],
      lines: [
        {
          en: "Remember, I can spot a smile in a photo — but I get better at it by seeing lots and lots of examples, just like you're about to do!",
          ko: "기억하지? 나는 사진 속 웃는 얼굴을 알아챌 수 있어 — 그런데 너희처럼 예시를 아주 많이 보면서 점점 더 잘하게 되는 거야!",
        },
        { en: "Let's match some feeling words to faces!", ko: "감정 단어와 표정을 짝지어보자!" },
      ],
      teacherNote:
        "Brief callback to Week 1's AI-limits idea, reframed through Big Idea 3 (Learning): repeated exposure is how both Vora and kids build recognition.",
    },
    {
      type: "activity",
      instructions: {
        en: "Flip two cards at a time. When you find a feeling word, act it out with your face and body before saying it in English! Then play a second game to reinforce it.",
        ko: "카드 두 장을 뒤집어보세요. 감정 단어를 찾으면, 영어로 말하기 전에 표정과 몸으로 먼저 표현해보세요! 그런 다음 두 번째 게임으로 복습해 보세요.",
      },
      config: {
        engine: "memory_match",
        title: { en: "Feelings Match", ko: "감정 짝 맞추기" },
        pairs: [
          { word: { en: "happy", ko: "행복한" }, emoji: "😊" },
          { word: { en: "sad", ko: "슬픈" }, emoji: "😢" },
          { word: { en: "angry", ko: "화난" }, emoji: "😠" },
          { word: { en: "scared", ko: "무서운" }, emoji: "😨" },
          { word: { en: "surprised", ko: "놀란" }, emoji: "😲", minTrack: "explorers" },
          { word: { en: "tired", ko: "피곤한" }, emoji: "😴" },
        ],
      },
    },
    {
      type: "activity",
      instructions: {
        en: "First, act out \"happy\" with your face and body — no words! Then build the sentence tile by tile and say it together.",
        ko: "먼저 말없이 표정과 몸으로 'happy'를 표현해보세요! 그런 다음 한 타일씩 문장을 만들고 함께 말해보세요.",
      },
      config: {
        engine: "sentence_builder",
        title: { en: "I feel happy.", ko: "저는 행복해요." },
        words: [
          { text: "I", role: "subject", ko: "저는" },
          { text: "feel", role: "verb", ko: "느끼다" },
          { text: "happy", role: "other", ko: "행복한" },
        ],
        translation: { en: "I feel happy.", ko: "저는 행복해요." },
      },
    },
    {
      ...AI_OR_NOT_SETS[5],
    },
    {
      type: "check",
      prompt: {
        en: "Ask a partner: \"Which feeling did you match?\" — can they say the English word?",
        ko: "짝에게 물어보세요: \"어떤 감정을 짝지었나요?\" — 영어 단어로 말할 수 있나요?",
      },
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today we played three activities — matching feeling words to faces, building the sentence \"I feel happy\" one tile at a time, and spotting real AI in everyday life.",
        ko: "오늘은 세 가지 활동을 했어요 — 감정 단어를 표정과 짝짓고, \"I feel happy\" 문장을 한 타일씩 만들어봤어요. 그리고 일상 속 진짜 AI를 알아보는 연습도 했어요.",
      },
      homework: {
        en: "Play a quick feelings guessing game with your family tonight.",
        ko: "오늘 밤 가족과 함께 감정 맞히기 게임을 해보세요.",
      },
    },
  ],
};

export const m11_week4: Lesson = {
  ...meta("m11_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: {
        en: "Ask a few kids: \"How do you feel right now — really?\" Quick, honest answers in any language before today's sentence.",
        ko: "몇몇 학생에게 물어보세요: \"지금 진짜 기분이 어때요?\" 오늘의 문장을 배우기 전에 어떤 언어로든 솔직하게 짧게 답해보세요.",
      },
      prompt: { en: "How do you feel today?", ko: "오늘 기분이 어때요?" },
    },
    {
      type: "concept",
      title: { en: "I Feel Happy!", ko: "저는 행복해요!" },
      bigIdeas: [],
      lines: [
        { en: "I feel happy today, because I get to see you!", ko: "나는 오늘 행복해, 너희를 만날 수 있으니까!" },
        {
          en: "How do YOU feel right now? Happy? Tired? Something else — any true answer is a great answer.",
          ko: "너희는 지금 기분이 어때? 행복해? 피곤해? 다른 기분이어도 괜찮아 — 진짜 기분이라면 무엇이든 좋은 대답이야.",
        },
        {
          en: "Your feelings are yours. Not even the smartest AI can tell you how you really feel inside — only you know that.",
          ko: "네 기분은 오직 너의 것이야. 아무리 똑똑한 AI라도 네가 마음속으로 진짜 어떻게 느끼는지는 말해줄 수 없어 — 그건 너만 알아.",
          minTrack: "explorers",
        },
        { en: "Ready? Let's build the sentence together, one word at a time.", ko: "준비됐나요? 함께 한 단어씩 문장을 만들어봐요." },
      ],
      teacherNote:
        "Unlike Month 5's \"This is my sister,\" this sentence frame asks for a genuine, in-the-moment answer — encourage kids to swap in their real feeling, not just \"happy.\" Ties back to this month's AI honesty theme: this is one sentence Vora truly can't answer for them.",
    },
    {
      type: "activity",
      instructions: {
        en: "Build the sentence one tile at a time, left to right. Then invite several kids to swap in their own true feeling and say it out loud.",
        ko: "왼쪽에서 오른쪽으로 한 번에 한 단어씩 문장을 만들어요. 그런 다음 여러 학생이 자신의 진짜 기분으로 바꿔서 소리 내어 말해보게 하세요.",
      },
      config: {
        engine: "sentence_builder",
        title: { en: "I feel happy.", ko: "저는 행복해요." },
        words: [
          { text: "I", role: "subject", ko: "저는" },
          { text: "feel", role: "verb", ko: "느끼다" },
          { text: "happy", role: "other", ko: "행복한" },
        ],
        translation: { en: "I feel happy.", ko: "저는 행복해요." },
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[5],
    },
    {
      type: "check",
      prompt: {
        en: "Every kid says \"I feel ___\" out loud, naming their real feeling right now.",
        ko: "모든 학생이 \"I feel ___\"라고 소리 내어 말하며 지금의 진짜 기분을 말해보세요.",
      },
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: {
        en: "Today every child said how they truly feel in English — one of the most personal sentences in the whole year — and helped Vora follow clear step-by-step instructions.",
        ko: "오늘은 모든 학생이 영어로 진짜 기분을 말했어요 — 올 한 해 중 가장 개인적인 문장이었어요. 그리고 보라가 분명한 단계별 지시를 따르도록 도왔어요.",
      },
      homework: {
        en: "Say \"I feel ___\" about your real feeling to someone at home tonight.",
        ko: "오늘 밤 집에서 누군가에게 \"I feel ___\"라고 진짜 기분을 말해보세요.",
      },
    },
  ],
};
