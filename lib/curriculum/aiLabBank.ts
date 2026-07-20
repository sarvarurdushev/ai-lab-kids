import type { ActivitySegment } from "./types";

/**
 * Reusable "AI Lab" activities — the genuine AI-literacy practice that
 * runs alongside the month's English game, not themed to any one month's
 * vocabulary on purpose. Standards this bank is built against:
 *
 * - AI4K12 Big Idea 5 (Societal Impact) / ISTE's K-2 recommendation to
 *   have students identify AI in daily life (voice assistants, etc.)
 *   — see AI_OR_NOT_SETS.
 * - CSTA 1B-DA-06 (collect/label data to train a simple model) and the
 *   "train, then test on unseen data" pattern used by Code.org's
 *   "AI for Oceans" and Google's Teachable Machine — see the enhanced
 *   train_the_robot finish screen in components/engines/TrainTheRobotEngine.tsx.
 * - UNESCO's AI Competency Framework for Students, "AI techniques and
 *   applications" / "AI system design" dimensions (precise instructions
 *   change what a system does) — see INSTRUCT_VORA_SCENARIOS.
 *
 * Each month picks one set/scenario by index (see monthlyScopeAndSequence
 * usage) so the whole year gets variety without re-authoring 48 unique
 * activities — the point of these two engines is the transferable skill
 * (recognizing AI, giving precise instructions), not month-specific words.
 */

export const AI_OR_NOT_SETS: ActivitySegment[] = [
  {
    type: "activity",
    instructions: {
      en: "Read each real-life example out loud. Decide together: is it AI, or not? Tap your answer and read what happens.",
      ko: "각 실생활 예시를 소리 내어 읽어보세요. 함께 정해보세요: 이건 AI일까요, 아닐까요? 답을 누르고 무슨 일이 일어나는지 읽어보세요.",
    },
    config: {
      engine: "ai_or_not",
      title: { en: "Is This AI? — Everyday Helpers", ko: "이건 AI일까요? — 일상 속 도우미" },
      teacherNote:
        "AI4K12 Big Idea 5 (Societal Impact) / ISTE's K-2 recommendation to identify AI in daily life. Read every explanation out loud — the recognition, not the score, is the point.",
      items: [
        {
          scenario: { en: "A speaker that answers when you ask it a question out loud", ko: "말로 질문하면 대답해주는 스피커" },
          emoji: "🗣️📱",
          isAI: true,
          explanation: {
            en: "Yes! It listens to your words, figures out what you're asking, and finds an answer — that takes AI.",
            ko: "맞아요! 스피커는 너의 말을 듣고, 무엇을 묻는지 알아내서, 답을 찾아요 — 그게 바로 AI예요.",
          },
        },
        {
          scenario: { en: "A lamp that turns on when you flip its switch", ko: "스위치를 누르면 켜지는 램프" },
          emoji: "💡",
          isAI: false,
          explanation: {
            en: "Not AI — the lamp doesn't decide anything. It just always does the same thing when the switch flips.",
            ko: "AI가 아니에요 — 램프는 아무것도 결정하지 않아요. 스위치를 누르면 항상 똑같은 일을 할 뿐이에요.",
          },
        },
        {
          scenario: { en: "A photo app that finds every picture of your dog by itself", ko: "스스로 네 강아지 사진을 모두 찾아주는 사진 앱" },
          emoji: "📸🐶",
          isAI: true,
          explanation: {
            en: "Yes! The app learned what dogs look like from lots of photos, so it can spot your dog in new ones.",
            ko: "맞아요! 이 앱은 많은 사진으로 강아지가 어떻게 생겼는지 배워서, 새로운 사진에서도 네 강아지를 찾아낼 수 있어요.",
          },
        },
        {
          scenario: { en: "A book that tells the exact same story every time you open it", ko: "펼칠 때마다 똑같은 이야기를 들려주는 책" },
          emoji: "📖",
          isAI: false,
          explanation: {
            en: "Not AI — the words in a book never change or decide anything new, no matter how many times you read it.",
            ko: "AI가 아니에요 — 책 속의 글자는 아무리 여러 번 읽어도 절대 바뀌거나 새로운 걸 결정하지 않아요.",
          },
        },
        {
          scenario: { en: "A bicycle that moves forward when you pedal it", ko: "페달을 밟으면 앞으로 가는 자전거" },
          emoji: "🚲",
          isAI: false,
          explanation: {
            en: "Not AI — a bike just responds to your legs. It's a great machine, but it isn't thinking or learning.",
            ko: "AI가 아니에요 — 자전거는 네 다리 힘에 반응할 뿐이에요. 훌륭한 기계지만, 생각하거나 배우지는 않아요.",
          },
        },
        {
          scenario: { en: "A music app that guesses songs you might like based on ones you played before", ko: "네가 전에 들은 노래를 보고 좋아할 만한 곡을 추천해주는 음악 앱" },
          emoji: "🎵🤔",
          isAI: true,
          explanation: {
            en: "Yes! It learned your taste from what you've already listened to, and uses that to guess something new.",
            ko: "맞아요! 이 앱은 네가 이미 들은 노래로 네 취향을 배워서, 그걸로 새로운 곡을 추천해요.",
          },
          minTrack: "explorers",
        },
      ],
    },
  },
  {
    type: "activity",
    instructions: {
      en: "Read each example out loud together. Decide: does it use AI, or is it just a simple machine? Tap your answer and read what happens.",
      ko: "각 예시를 함께 소리 내어 읽어보세요. 정해보세요: 이건 AI를 사용할까요, 아니면 그냥 단순한 기계일까요? 답을 누르고 무슨 일이 일어나는지 읽어보세요.",
    },
    config: {
      engine: "ai_or_not",
      title: { en: "Is This AI? — School and Home", ko: "이건 AI일까요? — 학교와 집" },
      teacherNote:
        "AI4K12 Big Idea 5 (Societal Impact). The thermostat/alarm-clock items are useful counter-examples of \"smart-looking\" objects that are actually simple fixed-rule machines, not AI.",
      items: [
        {
          scenario: { en: "A computer that underlines a word you spelled wrong", ko: "잘못 쓴 단어에 밑줄을 그어주는 컴퓨터" },
          emoji: "✍️🔴",
          isAI: true,
          explanation: {
            en: "Yes! Spell-check learned patterns from millions of correctly-spelled words to notice when yours looks different.",
            ko: "맞아요! 맞춤법 검사기는 수백만 개의 올바른 단어에서 패턴을 배워서, 네가 쓴 것이 다르게 보이면 알아차려요.",
          },
        },
        {
          scenario: { en: "An alarm clock that beeps at 7:00 every single day", ko: "매일 아침 7시에 울리는 알람 시계" },
          emoji: "⏰",
          isAI: false,
          explanation: {
            en: "Not AI — it just checks the time and beeps at the same number every day. No thinking, no learning.",
            ko: "AI가 아니에요 — 그냥 시간을 확인하고 매일 똑같은 숫자에 울릴 뿐이에요. 생각하지도, 배우지도 않아요.",
          },
        },
        {
          scenario: { en: "A map app that picks the fastest way to grandma's house", ko: "할머니 댁으로 가는 가장 빠른 길을 찾아주는 지도 앱" },
          emoji: "🗺️🚗",
          isAI: true,
          explanation: {
            en: "Yes! It looks at lots of roads and traffic and reasons out the best path — that's AI planning a route.",
            ko: "맞아요! 지도 앱은 여러 도로와 교통 상황을 보고 가장 좋은 길을 추론해요 — 그게 바로 AI가 길을 찾는 방법이에요.",
          },
        },
        {
          scenario: { en: "A jigsaw puzzle where each piece only fits one way", ko: "조각이 한 가지 방법으로만 맞춰지는 직소 퍼즐" },
          emoji: "🧩",
          isAI: false,
          explanation: {
            en: "Not AI — the puzzle doesn't decide anything. YOU are doing all the thinking to solve it!",
            ko: "AI가 아니에요 — 퍼즐은 아무것도 결정하지 않아요. 그걸 푸는 건 바로 너의 생각이에요!",
          },
        },
        {
          scenario: { en: "A thermostat that keeps a room at exactly one temperature", ko: "방을 정확히 한 온도로 유지해주는 온도 조절기" },
          emoji: "🌡️",
          isAI: false,
          explanation: {
            en: "Not AI — it just follows one fixed rule (\"turn on below this number\"). It never learns or changes that rule.",
            ko: "AI가 아니에요 — 정해진 규칙 하나만 따를 뿐이에요(\"이 숫자보다 낮으면 켜기\"). 그 규칙을 배우거나 바꾸지 않아요.",
          },
          minTrack: "explorers",
        },
        {
          scenario: { en: "A video game character that plays differently based on what you do", ko: "네가 하는 행동에 따라 다르게 움직이는 비디오 게임 캐릭터" },
          emoji: "🎮🤖",
          isAI: true,
          explanation: {
            en: "Yes! It's reacting to your choices and adjusting its own — that back-and-forth reasoning is AI.",
            ko: "맞아요! 캐릭터는 너의 선택에 반응해서 자기 행동을 바꿔요 — 그렇게 주고받는 추론이 바로 AI예요.",
          },
        },
      ],
    },
  },
  {
    type: "activity",
    instructions: {
      en: "Read each example out loud together. Decide: is it AI, or not? Tap your answer and read what happens.",
      ko: "각 예시를 함께 소리 내어 읽어보세요. 정해보세요: 이건 AI일까요, 아닐까요? 답을 누르고 무슨 일이 일어나는지 읽어보세요.",
    },
    config: {
      engine: "ai_or_not",
      title: { en: "Is This AI? — Out and About", ko: "이건 AI일까요? — 밖에서" },
      teacherNote:
        "AI4K12 Big Idea 5. The traffic-light item is a strong counter-example: it looks automatic and \"smart\" but is really just a fixed timer.",
      items: [
        {
          scenario: { en: "A traffic light that changes color on a timer", ko: "타이머에 맞춰 색이 바뀌는 신호등" },
          emoji: "🚦",
          isAI: false,
          explanation: {
            en: "Not AI — it just counts seconds and switches colors. It doesn't look at the road or decide anything.",
            ko: "AI가 아니에요 — 그냥 초를 세고 색을 바꿀 뿐이에요. 도로를 보거나 무언가를 결정하지 않아요.",
          },
        },
        {
          scenario: { en: "A self-checkout that recognizes which fruit you're holding up", ko: "네가 들고 있는 과일이 무엇인지 알아보는 셀프 계산대" },
          emoji: "🛒📷",
          isAI: true,
          explanation: {
            en: "Yes! A camera and AI compare what it sees to thousands of fruit photos it learned from.",
            ko: "맞아요! 카메라와 AI가 지금 보이는 것을 배워둔 수천 장의 과일 사진과 비교해요.",
          },
        },
        {
          scenario: { en: "A door that opens when you push its handle", ko: "손잡이를 밀면 열리는 문" },
          emoji: "🚪",
          isAI: false,
          explanation: {
            en: "Not AI — a handle just responds to a push, every single time, the same way.",
            ko: "AI가 아니에요 — 손잡이는 그냥 밀 때마다 항상 똑같이 반응할 뿐이에요.",
          },
        },
        {
          scenario: { en: "An email app that guesses which messages are junk mail", ko: "어떤 메일이 스팸인지 알아맞히는 이메일 앱" },
          emoji: "📧🚫",
          isAI: true,
          explanation: {
            en: "Yes! It learned the pattern of junk mail from millions of examples, so it can spot new junk mail too.",
            ko: "맞아요! 수백만 개의 예시로 스팸 메일의 패턴을 배워서, 새로운 스팸도 알아챌 수 있어요.",
          },
          minTrack: "explorers",
        },
        {
          scenario: { en: "A window that lets sunlight into a room", ko: "방에 햇빛이 들어오게 하는 창문" },
          emoji: "🪟",
          isAI: false,
          explanation: {
            en: "Not AI — a window doesn't do anything at all. It's just glass that light can pass through.",
            ko: "AI가 아니에요 — 창문은 아무것도 하지 않아요. 그냥 빛이 통과하는 유리일 뿐이에요.",
          },
        },
        {
          scenario: { en: "A phone that turns your spoken words into typed text", ko: "네가 말한 것을 글자로 바꿔주는 휴대폰" },
          emoji: "🎤🈯",
          isAI: true,
          explanation: {
            en: "Yes! It learned the sound of thousands of voices saying thousands of words, so it can turn your voice into text.",
            ko: "맞아요! 수천 명의 목소리와 수천 개의 단어 소리를 배워서, 너의 말을 글자로 바꿀 수 있어요.",
          },
        },
      ],
    },
  },
  {
    type: "activity",
    instructions: {
      en: "Read each example out loud together. Decide: is it AI, or not? Tap your answer and read what happens.",
      ko: "각 예시를 함께 소리 내어 읽어보세요. 정해보세요: 이건 AI일까요, 아닐까요? 답을 누르고 무슨 일이 일어나는지 읽어보세요.",
    },
    config: {
      engine: "ai_or_not",
      title: { en: "Is This AI? — Play and Creativity", ko: "이건 AI일까요? — 놀이와 창작" },
      teacherNote: "AI4K12 Big Idea 5. Ties to real tools like Google's Quick, Draw! if you want a live follow-up demo.",
      items: [
        {
          scenario: { en: "A program that guesses what your quick drawing is (a cat, the sun, a tree)", ko: "네가 빠르게 그린 그림이 무엇인지 알아맞히는 프로그램(고양이, 해, 나무)" },
          emoji: "🎨🖼️",
          isAI: true,
          explanation: {
            en: "Yes! It learned from millions of other people's doodles what a \"cat\" or \"sun\" usually looks like.",
            ko: "맞아요! 다른 사람들이 그린 수백만 개의 낙서를 보고 '고양이'나 '해'가 보통 어떻게 생겼는지 배웠어요.",
          },
        },
        {
          scenario: { en: "A pencil that only makes a mark where you press it", ko: "누른 곳에만 흔적을 남기는 연필" },
          emoji: "✏️",
          isAI: false,
          explanation: {
            en: "Not AI — the pencil has no idea what you're drawing. It just marks paper wherever it touches.",
            ko: "AI가 아니에요 — 연필은 네가 뭘 그리는지 전혀 몰라요. 그냥 닿는 곳마다 흔적을 남길 뿐이에요.",
          },
        },
        {
          scenario: { en: "A show list that changes based on what you've watched before", ko: "네가 전에 본 것에 따라 바뀌는 추천 목록" },
          emoji: "📺",
          isAI: true,
          explanation: {
            en: "Yes! It's using what you've watched to guess what you might like next — that's a form of AI reasoning.",
            ko: "맞아요! 네가 본 것을 보고 다음에 무엇을 좋아할지 추측해요 — 이것도 AI의 추론이에요.",
          },
        },
        {
          scenario: { en: "A wind-up toy that does the same little dance every time", ko: "감을 때마다 똑같은 춤을 추는 태엽 장난감" },
          emoji: "🕰️🧸",
          isAI: false,
          explanation: {
            en: "Not AI — the same gears move the same way every single time. It never changes what it does.",
            ko: "AI가 아니에요 — 매번 똑같은 톱니바퀴가 똑같이 움직여요. 하는 행동이 절대 바뀌지 않아요.",
          },
        },
        {
          scenario: { en: "A flashlight that turns on when you press its button", ko: "버튼을 누르면 켜지는 손전등" },
          emoji: "🔦",
          isAI: false,
          explanation: {
            en: "Not AI — press the button, light turns on. Always the same, no deciding involved.",
            ko: "AI가 아니에요 — 버튼을 누르면 불이 켜져요. 항상 똑같고, 결정하는 게 없어요.",
          },
        },
        {
          scenario: { en: "A toy robot that remembers your name and talks back a little differently each time", ko: "네 이름을 기억하고 매번 조금씩 다르게 대답하는 장난감 로봇" },
          emoji: "🧸🤖",
          isAI: true,
          explanation: {
            en: "Yes! Remembering something about you and responding differently based on it takes real AI, not just gears.",
            ko: "맞아요! 너에 대해 기억하고 그에 따라 다르게 반응하는 건 톱니바퀴가 아니라 진짜 AI가 필요해요.",
          },
          minTrack: "explorers",
        },
      ],
    },
  },
  {
    type: "activity",
    instructions: {
      en: "Read each example out loud together. Decide: is it AI, or not? Tap your answer and read what happens.",
      ko: "각 예시를 함께 소리 내어 읽어보세요. 정해보세요: 이건 AI일까요, 아닐까요? 답을 누르고 무슨 일이 일어나는지 읽어보세요.",
    },
    config: {
      engine: "ai_or_not",
      title: { en: "Is This AI? — Helpers Nearby", ko: "이건 AI일까요? — 가까운 도우미들" },
      teacherNote: "AI4K12 Big Idea 5. Includes translation and face-detection — two AI examples kids likely encounter through parents' phones.",
      items: [
        {
          scenario: { en: "An app that translates what you say into another language", ko: "네가 말한 것을 다른 언어로 번역해주는 앱" },
          emoji: "🗣️🌐",
          isAI: true,
          explanation: {
            en: "Yes! It learned from huge amounts of text in both languages to figure out how to translate your words.",
            ko: "맞아요! 두 언어로 된 아주 많은 글을 배워서, 네 말을 어떻게 번역할지 알아내요.",
          },
        },
        {
          scenario: { en: "A chair that stays still until you sit down on it", ko: "앉기 전까지 가만히 있는 의자" },
          emoji: "🪑",
          isAI: false,
          explanation: {
            en: "Not AI — a chair doesn't sense or decide anything. It's just there.",
            ko: "AI가 아니에요 — 의자는 아무것도 느끼거나 결정하지 않아요. 그냥 거기 있을 뿐이에요.",
          },
        },
        {
          scenario: { en: "A camera that waits for you to smile before it takes the photo", ko: "네가 웃을 때까지 기다렸다가 사진을 찍는 카메라" },
          emoji: "📷😀",
          isAI: true,
          explanation: {
            en: "Yes! It learned what a smile looks like from thousands of faces, so it can spot yours.",
            ko: "맞아요! 수천 개의 얼굴을 보고 웃는 모습이 어떤 것인지 배워서, 네 웃음도 알아챌 수 있어요.",
          },
        },
        {
          scenario: { en: "A sock that keeps your foot warm", ko: "발을 따뜻하게 해주는 양말" },
          emoji: "🧦",
          isAI: false,
          explanation: {
            en: "Not AI — a sock doesn't sense, learn, or decide anything at all. It's just warm fabric.",
            ko: "AI가 아니에요 — 양말은 아무것도 느끼거나 배우거나 결정하지 않아요. 그냥 따뜻한 천일 뿐이에요.",
          },
        },
        {
          scenario: { en: "Headphones that guess the next song you'd like to hear", ko: "네가 다음에 듣고 싶어할 노래를 추측하는 헤드폰" },
          emoji: "🎧🎶",
          isAI: true,
          explanation: {
            en: "Yes! Guessing what you'd like next, based on what you liked before, is exactly what AI reasoning does.",
            ko: "맞아요! 네가 전에 좋아했던 걸 보고 다음에 좋아할 걸 추측하는 건 바로 AI의 추론이에요.",
          },
          minTrack: "explorers",
        },
        {
          scenario: { en: "A key that opens the same lock every single time", ko: "매번 똑같은 자물쇠를 여는 열쇠" },
          emoji: "🔑",
          isAI: false,
          explanation: {
            en: "Not AI — the shape of the key either fits the lock or it doesn't. No thinking happens.",
            ko: "AI가 아니에요 — 열쇠 모양이 자물쇠에 맞거나 안 맞을 뿐이에요. 아무 생각도 하지 않아요.",
          },
        },
      ],
    },
  },
  {
    type: "activity",
    instructions: {
      en: "Read each example out loud together. Decide: is it AI, or not? Tap your answer and read what happens.",
      ko: "각 예시를 함께 소리 내어 읽어보세요. 정해보세요: 이건 AI일까요, 아닐까요? 답을 누르고 무슨 일이 일어나는지 읽어보세요.",
    },
    config: {
      engine: "ai_or_not",
      title: { en: "Is This AI? — Around the World", ko: "이건 AI일까요? — 세상 곳곳에서" },
      teacherNote: "AI4K12 Big Idea 5. Weather prediction connects nicely back to the pattern_predictor engine's \"finding a rule in examples\" idea.",
      items: [
        {
          scenario: { en: "A weather app that predicts if it will rain tomorrow", ko: "내일 비가 올지 예측해주는 날씨 앱" },
          emoji: "🛰️🌦️",
          isAI: true,
          explanation: {
            en: "Yes! It looks at patterns in huge amounts of past weather to make a careful guess about tomorrow.",
            ko: "맞아요! 지난 날씨의 아주 많은 패턴을 보고 내일에 대해 신중하게 추측해요.",
          },
        },
        {
          scenario: { en: "A tree that grows a little taller every year", ko: "매년 조금씩 자라는 나무" },
          emoji: "🌳",
          isAI: false,
          explanation: {
            en: "Not AI — a tree grows because it's alive, not because it's thinking or predicting anything.",
            ko: "AI가 아니에요 — 나무는 살아있어서 자라는 거지, 생각하거나 예측해서가 아니에요.",
          },
        },
        {
          scenario: { en: "A chat helper on a website that answers your questions", ko: "웹사이트에서 네 질문에 답해주는 채팅 도우미" },
          emoji: "📱💬",
          isAI: true,
          explanation: {
            en: "Yes! It learned from huge amounts of writing to figure out how to respond to what you type.",
            ko: "맞아요! 아주 많은 글을 배워서 네가 입력한 것에 어떻게 답할지 알아내요.",
          },
        },
        {
          scenario: { en: "A kite that flies when the wind blows", ko: "바람이 불면 나는 연" },
          emoji: "🪁",
          isAI: false,
          explanation: {
            en: "Not AI — the kite just catches the wind. It doesn't sense, learn, or decide anything.",
            ko: "AI가 아니에요 — 연은 그냥 바람을 받을 뿐이에요. 느끼거나 배우거나 결정하지 않아요.",
          },
        },
        {
          scenario: { en: "A video call app that blurs the messy room behind you", ko: "네 뒤에 있는 어질러진 방을 흐리게 만들어주는 화상 통화 앱" },
          emoji: "🎥🙂",
          isAI: true,
          explanation: {
            en: "Yes! It has to figure out which pixels are \"you\" and which are \"background\" — that takes AI.",
            ko: "맞아요! 어떤 부분이 '너'이고 어떤 부분이 '배경'인지 알아내야 해요 — 그건 AI가 필요한 일이에요.",
          },
          minTrack: "explorers",
        },
        {
          scenario: { en: "A crayon that only ever draws one color", ko: "한 가지 색으로만 그려지는 크레용" },
          emoji: "🖍️",
          isAI: false,
          explanation: {
            en: "Not AI — wax is wax. It makes the same color mark no matter what you draw.",
            ko: "AI가 아니에요 — 크레용은 그냥 밀랍이에요. 무엇을 그리든 항상 같은 색 자국을 남겨요.",
          },
        },
      ],
    },
  },
];

export const INSTRUCT_VORA_SCENARIOS: ActivitySegment[] = [
  {
    type: "activity",
    instructions: {
      en: "Watch what happens when Vora gets a vague instruction. Then build a clear, step-by-step one instead.",
      ko: "보라가 애매한 지시를 받으면 어떤 일이 일어나는지 봐요. 그런 다음 분명하고 단계별인 지시를 대신 만들어봐요.",
    },
    config: {
      engine: "instruct_vora",
      title: { en: "Give Vora Clear Instructions: Find the Ball", ko: "보라에게 분명한 지시하기: 공 찾기" },
      teacherNote:
        "UNESCO AI Competency Framework, \"AI techniques and applications.\" Read the vague instruction and result aloud before revealing why it went wrong — the surprise is part of the lesson.",
      goalLabel: { en: "Help Vora find the red ball!", ko: "보라가 빨간 공을 찾도록 도와주세요!" },
      goalEmoji: "🔴⚽",
      vagueInstruction: { en: "\"Vora, get something.\"", ko: "\"보라, 뭐 좀 가져와.\"" },
      vagueResultEmoji: "📘",
      vagueResultText: {
        en: "Oops! \"Something\" could mean anything, so Vora picked a book by mistake.",
        ko: "이런! '뭐'는 무엇이든 될 수 있어서, 보라는 실수로 책을 가져왔어요.",
      },
      steps: [
        { text: { en: "Look on the shelf", ko: "선반을 봐" }, emoji: "📚" },
        { text: { en: "Find the red ball", ko: "빨간 공을 찾아" }, emoji: "🔴" },
        { text: { en: "Pick it up", ko: "그것을 집어" }, emoji: "⚽" },
      ],
      successText: {
        en: "Yes! Clear, step-by-step instructions helped Vora know exactly what to do — computers and AI always need that same kind of precision.",
        ko: "맞아요! 분명하고 단계별인 지시 덕분에 보라는 정확히 무엇을 해야 할지 알았어요 — 컴퓨터와 AI는 항상 이런 정확함이 필요해요.",
      },
    },
  },
  {
    type: "activity",
    instructions: {
      en: "Watch what happens when Vora gets a vague instruction. Then build a clear, step-by-step one instead.",
      ko: "보라가 애매한 지시를 받으면 어떤 일이 일어나는지 봐요. 그런 다음 분명하고 단계별인 지시를 대신 만들어봐요.",
    },
    config: {
      engine: "instruct_vora",
      title: { en: "Give Vora Clear Instructions: Make a Snack", ko: "보라에게 분명한 지시하기: 간식 만들기" },
      teacherNote: "UNESCO AI Competency Framework, \"AI techniques and applications.\" A light, funny wrong-result works best here — lean into it.",
      goalLabel: { en: "Help Vora make a snack!", ko: "보라가 간식을 만들도록 도와주세요!" },
      goalEmoji: "🥪",
      vagueInstruction: { en: "\"Vora, make food.\"", ko: "\"보라, 음식을 만들어.\"" },
      vagueResultEmoji: "🍦🥫",
      vagueResultText: {
        en: "Oops! \"Make food\" wasn't clear enough, so Vora made ice cream with pickles on top!",
        ko: "이런! '음식을 만들어'는 충분히 분명하지 않아서, 보라는 아이스크림 위에 피클을 올려버렸어요!",
      },
      steps: [
        { text: { en: "Get two pieces of bread", ko: "빵 두 조각을 가져와" }, emoji: "🍞" },
        { text: { en: "Add cheese in the middle", ko: "가운데에 치즈를 넣어" }, emoji: "🧀" },
        { text: { en: "Put the top slice on", ko: "위 조각을 덮어" }, emoji: "🥪" },
      ],
      successText: {
        en: "Yum! Clear, step-by-step instructions helped Vora make the right snack this time.",
        ko: "맛있겠다! 분명하고 단계별인 지시 덕분에 보라는 이번엔 제대로 된 간식을 만들었어요.",
      },
    },
  },
  {
    type: "activity",
    instructions: {
      en: "Watch what happens when Vora gets a vague instruction. Then build a clear, step-by-step one instead.",
      ko: "보라가 애매한 지시를 받으면 어떤 일이 일어나는지 봐요. 그런 다음 분명하고 단계별인 지시를 대신 만들어봐요.",
    },
    config: {
      engine: "instruct_vora",
      title: { en: "Give Vora Clear Instructions: Ready for Rain", ko: "보라에게 분명한 지시하기: 비 올 준비" },
      teacherNote: "UNESCO AI Competency Framework, \"AI techniques and applications.\"",
      goalLabel: { en: "Help Vora get ready for the rain!", ko: "보라가 비 올 준비를 하도록 도와주세요!" },
      goalEmoji: "☔",
      vagueInstruction: { en: "\"Vora, wear something.\"", ko: "\"보라, 뭐라도 입어.\"" },
      vagueResultEmoji: "🩳🕶️",
      vagueResultText: {
        en: "Oops! \"Wear something\" didn't say what — Vora put on shorts and sunglasses, all wrong for the rain!",
        ko: "이런! '뭐라도 입어'는 무엇인지 말해주지 않아서, 보라는 반바지와 선글라스를 입었어요 — 비 오는 날엔 완전히 틀렸죠!",
      },
      steps: [
        { text: { en: "Put on boots", ko: "장화를 신어" }, emoji: "👢" },
        { text: { en: "Grab an umbrella", ko: "우산을 챙겨" }, emoji: "☔" },
        { text: { en: "Zip up the raincoat", ko: "우비 지퍼를 올려" }, emoji: "🧥" },
      ],
      successText: {
        en: "Vora is ready for the rain now! Precise, ordered steps made all the difference.",
        ko: "이제 보라는 비 올 준비가 됐어요! 정확하고 순서 있는 단계가 큰 차이를 만들었어요.",
      },
    },
  },
  {
    type: "activity",
    instructions: {
      en: "Watch what happens when Vora gets a vague instruction. Then build a clear, step-by-step one instead.",
      ko: "보라가 애매한 지시를 받으면 어떤 일이 일어나는지 봐요. 그런 다음 분명하고 단계별인 지시를 대신 만들어봐요.",
    },
    config: {
      engine: "instruct_vora",
      title: { en: "Give Vora Clear Instructions: Clean Up", ko: "보라에게 분명한 지시하기: 정리하기" },
      teacherNote: "UNESCO AI Competency Framework, \"AI techniques and applications.\" A gentle, funny (not upsetting) wrong result — keep it light for the younger track.",
      goalLabel: { en: "Help Vora clean up the toys!", ko: "보라가 장난감을 정리하도록 도와주세요!" },
      goalEmoji: "🧸",
      vagueInstruction: { en: "\"Vora, clean up.\"", ko: "\"보라, 치워.\"" },
      vagueResultEmoji: "🗑️🧸",
      vagueResultText: {
        en: "Oops! \"Clean up\" didn't say HOW, so Vora almost threw a favorite toy in the trash by mistake!",
        ko: "이런! '치워'는 '어떻게'를 말해주지 않아서, 보라는 실수로 아끼는 장난감을 쓰레기통에 버릴 뻔했어요!",
      },
      steps: [
        { text: { en: "Pick up the blocks", ko: "블록을 집어" }, emoji: "🧱" },
        { text: { en: "Put them in the bin", ko: "통에 넣어" }, emoji: "📦" },
        { text: { en: "Put the bin on the shelf", ko: "통을 선반에 올려" }, emoji: "🗄️" },
      ],
      successText: {
        en: "All clean! Step-by-step instructions told Vora exactly what \"clean up\" means this time.",
        ko: "다 치웠어요! 단계별 지시 덕분에 보라는 이번엔 '치우기'가 정확히 무슨 뜻인지 알았어요.",
      },
    },
  },
  {
    type: "activity",
    instructions: {
      en: "Watch what happens when Vora gets a vague instruction. Then build a clear, step-by-step one instead.",
      ko: "보라가 애매한 지시를 받으면 어떤 일이 일어나는지 봐요. 그런 다음 분명하고 단계별인 지시를 대신 만들어봐요.",
    },
    config: {
      engine: "instruct_vora",
      title: { en: "Give Vora Clear Instructions: Water the Plant", ko: "보라에게 분명한 지시하기: 식물에 물 주기" },
      teacherNote: "UNESCO AI Competency Framework, \"AI techniques and applications.\"",
      goalLabel: { en: "Help Vora take care of the plant!", ko: "보라가 식물을 돌보도록 도와주세요!" },
      goalEmoji: "🌱",
      vagueInstruction: { en: "\"Vora, help the plant.\"", ko: "\"보라, 식물을 도와줘.\"" },
      vagueResultEmoji: "🍪🌱",
      vagueResultText: {
        en: "Oops! \"Help the plant\" didn't say how — Vora gave it a cookie instead of water!",
        ko: "이런! '식물을 도와줘'는 어떻게 도울지 말해주지 않아서, 보라는 물 대신 쿠키를 줬어요!",
      },
      steps: [
        { text: { en: "Get the watering can", ko: "물뿌리개를 가져와" }, emoji: "💧" },
        { text: { en: "Fill it with water", ko: "물을 채워" }, emoji: "🚰" },
        { text: { en: "Pour a little on the plant", ko: "식물에 조금 부어" }, emoji: "🌱" },
      ],
      successText: {
        en: "The plant is happy now! Precise instructions helped Vora do the right thing.",
        ko: "이제 식물이 행복해요! 정확한 지시 덕분에 보라가 알맞은 일을 했어요.",
      },
    },
  },
  {
    type: "activity",
    instructions: {
      en: "Watch what happens when Vora gets a vague instruction. Then build a clear, step-by-step one instead.",
      ko: "보라가 애매한 지시를 받으면 어떤 일이 일어나는지 봐요. 그런 다음 분명하고 단계별인 지시를 대신 만들어봐요.",
    },
    config: {
      engine: "instruct_vora",
      title: { en: "Give Vora Clear Instructions: Feed the Fish", ko: "보라에게 분명한 지시하기: 물고기 먹이 주기" },
      teacherNote: "UNESCO AI Competency Framework, \"AI techniques and applications.\"",
      goalLabel: { en: "Help Vora feed the fish!", ko: "보라가 물고기에게 먹이를 주도록 도와주세요!" },
      goalEmoji: "🐟",
      vagueInstruction: { en: "\"Vora, feed the pet.\"", ko: "\"보라, 반려동물에게 먹이를 줘.\"" },
      vagueResultEmoji: "🍕🐟",
      vagueResultText: {
        en: "Oops! \"Feed the pet\" didn't say what with — Vora dropped a slice of pizza in the fish tank!",
        ko: "이런! '반려동물에게 먹이를 줘'는 무엇을 줄지 말해주지 않아서, 보라는 어항에 피자 한 조각을 넣었어요!",
      },
      steps: [
        { text: { en: "Open the fish food", ko: "물고기 먹이를 열어" }, emoji: "🥫" },
        { text: { en: "Take a small pinch", ko: "조금만 집어" }, emoji: "🤏" },
        { text: { en: "Sprinkle it in the water", ko: "물 위에 뿌려" }, emoji: "🐟" },
      ],
      successText: {
        en: "The fish are happy! Precise, step-by-step instructions helped Vora take good care of them.",
        ko: "물고기가 행복해해요! 정확하고 단계별인 지시 덕분에 보라가 물고기를 잘 돌봤어요.",
      },
    },
  },
];
