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
 *
 * Every string below is deliberately short — a 6-8 year old learner
 * cannot read fluently and cannot follow multi-clause explanations. The
 * emoji and the big colored Yes/No verdict do the explaining; the text
 * is a label the teacher reads aloud, not a paragraph.
 */

export const AI_OR_NOT_SETS: ActivitySegment[] = [
  {
    type: "activity",
    instructions: "Look at each picture. Is it AI? Tap Yes or No!",
    config: {
      engine: "ai_or_not",
      title: "Is It AI? Everyday Helpers",
      teacherNote:
        "AI4K12 Big Idea 5 (Societal Impact) / ISTE's K-2 recommendation to identify AI in daily life. Read every explanation out loud — the recognition, not the score, is the point.",
      items: [
        { scenario: "Talking speaker", emoji: "🗣️📱", isAI: true, explanation: "Yes! It listens and learns." },
        { scenario: "A lamp", emoji: "💡", isAI: false, explanation: "No — always the same." },
        { scenario: "Finds your dog photos", emoji: "📸🐶", isAI: true, explanation: "Yes! It learned dogs." },
        { scenario: "A storybook", emoji: "📖", isAI: false, explanation: "No — never changes." },
        { scenario: "A bicycle", emoji: "🚲", isAI: false, explanation: "No — just pedal power." },
        {
          scenario: "Picks songs for you",
          emoji: "🎵🤔",
          isAI: true,
          explanation: "Yes! It learned your taste.",
          minTrack: "explorers",
        },
        { scenario: "A washing machine", emoji: "🧺🔘", isAI: false, explanation: "No — same steps every time." },
        { scenario: "Finishes your typing", emoji: "⌨️✨", isAI: true, explanation: "Yes! It learned patterns." },
        {
          scenario: "Spots a stranger at the door",
          emoji: "🔔📷",
          isAI: true,
          explanation: "Yes! It learned faces.",
          minTrack: "explorers",
        },
        { scenario: "Scissors", emoji: "✂️", isAI: false, explanation: "No — just cuts.", minTrack: "explorers" },
      ],
    },
  },
  {
    type: "activity",
    instructions: "Look at each picture. Is it AI, or just a simple machine? Tap Yes or No!",
    config: {
      engine: "ai_or_not",
      title: "Is It AI? School and Home",
      teacherNote:
        "AI4K12 Big Idea 5 (Societal Impact). The thermostat/alarm-clock items are useful counter-examples of \"smart-looking\" objects that are actually simple fixed-rule machines, not AI.",
      items: [
        { scenario: "Underlines misspelled words", emoji: "✍️🔴", isAI: true, explanation: "Yes! It learned spelling." },
        { scenario: "An alarm clock", emoji: "⏰", isAI: false, explanation: "No — same time every day." },
        { scenario: "Finds the fastest way", emoji: "🗺️🚗", isAI: true, explanation: "Yes! It figures out the best path." },
        { scenario: "A jigsaw puzzle", emoji: "🧩", isAI: false, explanation: "No — you do the thinking!" },
        {
          scenario: "A thermostat",
          emoji: "🌡️",
          isAI: false,
          explanation: "No — one fixed rule.",
          minTrack: "explorers",
        },
        { scenario: "A game that reacts to you", emoji: "🎮🤖", isAI: true, explanation: "Yes! It adjusts to you." },
        { scenario: "A calculator", emoji: "🧮", isAI: false, explanation: "No — math never changes." },
        { scenario: "Picks your next problem", emoji: "📚🎯", isAI: true, explanation: "Yes! It learns from mistakes." },
        {
          scenario: "A stapler",
          emoji: "📎",
          isAI: false,
          explanation: "No — same thing every squeeze.",
          minTrack: "explorers",
        },
        {
          scenario: "Changes questions for you",
          emoji: "🧑‍🏫📱",
          isAI: true,
          explanation: "Yes! It picks what's right for you.",
          minTrack: "explorers",
        },
      ],
    },
  },
  {
    type: "activity",
    instructions: "Look at each picture. Is it AI? Tap Yes or No!",
    config: {
      engine: "ai_or_not",
      title: "Is It AI? Out and About",
      teacherNote:
        "AI4K12 Big Idea 5. The traffic-light item is a strong counter-example: it looks automatic and \"smart\" but is really just a fixed timer.",
      items: [
        { scenario: "A traffic light", emoji: "🚦", isAI: false, explanation: "No — just a timer." },
        { scenario: "Knows which fruit you're holding", emoji: "🛒📷", isAI: true, explanation: "Yes! It learned fruit photos." },
        { scenario: "A push-open door", emoji: "🚪", isAI: false, explanation: "No — always the same push." },
        {
          scenario: "Spots junk mail",
          emoji: "📧🚫",
          isAI: true,
          explanation: "Yes! It learned the pattern.",
          minTrack: "explorers",
        },
        { scenario: "A window", emoji: "🪟", isAI: false, explanation: "No — just glass." },
        { scenario: "Turns your voice into text", emoji: "🎤🈯", isAI: true, explanation: "Yes! It learned voices." },
        { scenario: "A light-up button", emoji: "🔘🛗", isAI: false, explanation: "No — press, light, done." },
        { scenario: "Finds an empty parking spot", emoji: "🅿️📷", isAI: true, explanation: "Yes! It looks and figures it out." },
        {
          scenario: "A vending machine",
          emoji: "🥤🏧",
          isAI: false,
          explanation: "No — same simple rule.",
          minTrack: "explorers",
        },
        {
          scenario: "Tells a person from a cat",
          emoji: "📹🐱",
          isAI: true,
          explanation: "Yes! It learned to tell them apart.",
          minTrack: "explorers",
        },
      ],
    },
  },
  {
    type: "activity",
    instructions: "Look at each picture. Is it AI? Tap Yes or No!",
    config: {
      engine: "ai_or_not",
      title: "Is It AI? Play and Creativity",
      teacherNote: "AI4K12 Big Idea 5. Ties to real tools like Google's Quick, Draw! if you want a live follow-up demo.",
      items: [
        { scenario: "Guesses your drawing", emoji: "🎨🖼️", isAI: true, explanation: "Yes! It learned lots of doodles." },
        { scenario: "A pencil", emoji: "✏️", isAI: false, explanation: "No — just marks paper." },
        { scenario: "Suggests a new show", emoji: "📺", isAI: true, explanation: "Yes! It knows what you watched." },
        { scenario: "A wind-up toy", emoji: "🕰️🧸", isAI: false, explanation: "No — same dance every time." },
        { scenario: "A flashlight", emoji: "🔦", isAI: false, explanation: "No — press, light, done." },
        {
          scenario: "Remembers your name",
          emoji: "🧸🤖",
          isAI: true,
          explanation: "Yes! It remembers and responds.",
          minTrack: "explorers",
        },
        { scenario: "Building blocks", emoji: "🧱", isAI: false, explanation: "No — you build it!" },
        { scenario: "Makes a tune from your humming", emoji: "🎵🎤", isAI: true, explanation: "Yes! It learned music patterns." },
        {
          scenario: "A coloring book",
          emoji: "🖍️📖",
          isAI: false,
          explanation: "No — pictures already printed.",
          minTrack: "explorers",
        },
        {
          scenario: "Gets harder just for you",
          emoji: "🎮📈",
          isAI: true,
          explanation: "Yes! It watches how you play.",
          minTrack: "explorers",
        },
      ],
    },
  },
  {
    type: "activity",
    instructions: "Look at each picture. Is it AI? Tap Yes or No!",
    config: {
      engine: "ai_or_not",
      title: "Is It AI? Helpers Nearby",
      teacherNote: "AI4K12 Big Idea 5. Includes translation and face-detection — two AI examples kids likely encounter through parents' phones.",
      items: [
        { scenario: "Translates what you say", emoji: "🗣️🌐", isAI: true, explanation: "Yes! It learned two languages." },
        { scenario: "A chair", emoji: "🪑", isAI: false, explanation: "No — just sits there." },
        { scenario: "Waits for your smile", emoji: "📷😀", isAI: true, explanation: "Yes! It learned smiles." },
        { scenario: "A sock", emoji: "🧦", isAI: false, explanation: "No — just warm fabric." },
        {
          scenario: "Guesses your next song",
          emoji: "🎧🎶",
          isAI: true,
          explanation: "Yes! It knows what you like.",
          minTrack: "explorers",
        },
        { scenario: "A key", emoji: "🔑", isAI: false, explanation: "No — fits or it doesn't." },
        { scenario: "An umbrella", emoji: "☂️", isAI: false, explanation: "No — press, open, done." },
        { scenario: "Knows you're low on milk", emoji: "🧊🥛", isAI: true, explanation: "Yes! It watches and learns." },
        {
          scenario: "A doormat",
          emoji: "🚪",
          isAI: false,
          explanation: "No — words just printed there.",
          minTrack: "explorers",
        },
        {
          scenario: "Remembers your room's shape",
          emoji: "🤖🧹",
          isAI: true,
          explanation: "Yes! It builds a map.",
          minTrack: "explorers",
        },
      ],
    },
  },
  {
    type: "activity",
    instructions: "Look at each picture. Is it AI? Tap Yes or No!",
    config: {
      engine: "ai_or_not",
      title: "Is It AI? Around the World",
      teacherNote: "AI4K12 Big Idea 5. Weather prediction connects nicely back to the pattern_predictor engine's \"finding a rule in examples\" idea.",
      items: [
        { scenario: "Predicts tomorrow's rain", emoji: "🛰️🌦️", isAI: true, explanation: "Yes! It learned past weather." },
        { scenario: "A tree", emoji: "🌳", isAI: false, explanation: "No — it just grows." },
        { scenario: "Answers your questions", emoji: "📱💬", isAI: true, explanation: "Yes! It learned lots of words." },
        { scenario: "A kite", emoji: "🪁", isAI: false, explanation: "No — just catches wind." },
        {
          scenario: "Blurs your messy room",
          emoji: "🎥🙂",
          isAI: true,
          explanation: "Yes! It figures out what's \"you\".",
          minTrack: "explorers",
        },
        { scenario: "A crayon", emoji: "🖍️", isAI: false, explanation: "No — same color always." },
        { scenario: "A bridge", emoji: "🌉", isAI: false, explanation: "No — just stays put." },
        { scenario: "Picks stories you'll like", emoji: "📰👀", isAI: true, explanation: "Yes! It knows what you read." },
        {
          scenario: "A globe",
          emoji: "🌐",
          isAI: false,
          explanation: "No — push it, it spins.",
          minTrack: "explorers",
        },
        {
          scenario: "Spots a storm forming",
          emoji: "🛰️🌀",
          isAI: true,
          explanation: "Yes! It learned storm photos.",
          minTrack: "explorers",
        },
      ],
    },
  },
];

export const INSTRUCT_VORA_SCENARIOS: ActivitySegment[] = [
  {
    type: "activity",
    instructions: "Watch Vora try. Then help Vora with clear steps!",
    config: {
      engine: "instruct_vora",
      title: "Clear Instructions: Find the Ball",
      teacherNote:
        "UNESCO AI Competency Framework, \"AI techniques and applications.\" Read the vague instruction and result aloud before revealing why it went wrong — the surprise is part of the lesson.",
      goalLabel: "Help Vora find the red ball!",
      goalEmoji: "🔴⚽",
      vagueInstruction: "\"Vora, get something.\"",
      vagueResultEmoji: "📘",
      vagueResultText: "Oops! Vora got a book instead!",
      steps: [
        { text: "Look under the table", emoji: "🪑" },
        { text: "Look on the shelf", emoji: "📚" },
        { text: "Find the red ball", emoji: "🔴" },
        { text: "Pick it up", emoji: "⚽" },
        { text: "Bring it to me", emoji: "🙋" },
      ],
      successText: "Yes! Clear steps helped Vora!",
    },
  },
  {
    type: "activity",
    instructions: "Watch Vora try. Then help Vora with clear steps!",
    config: {
      engine: "instruct_vora",
      title: "Clear Instructions: Make a Snack",
      teacherNote: "UNESCO AI Competency Framework, \"AI techniques and applications.\" A light, funny wrong-result works best here — lean into it.",
      goalLabel: "Help Vora make a snack!",
      goalEmoji: "🥪",
      vagueInstruction: "\"Vora, make food.\"",
      vagueResultEmoji: "🍦🥫",
      vagueResultText: "Oops! Ice cream with pickles!",
      steps: [
        { text: "Wash your hands", emoji: "🧼" },
        { text: "Get two pieces of bread", emoji: "🍞" },
        { text: "Add cheese in the middle", emoji: "🧀" },
        { text: "Put the top slice on", emoji: "🥪" },
        { text: "Cut it in half", emoji: "🔪" },
      ],
      successText: "Yum! Clear steps got it right!",
    },
  },
  {
    type: "activity",
    instructions: "Watch Vora try. Then help Vora with clear steps!",
    config: {
      engine: "instruct_vora",
      title: "Clear Instructions: Ready for Rain",
      teacherNote: "UNESCO AI Competency Framework, \"AI techniques and applications.\"",
      goalLabel: "Help Vora get ready for the rain!",
      goalEmoji: "☔",
      vagueInstruction: "\"Vora, wear something.\"",
      vagueResultEmoji: "🩳🕶️",
      vagueResultText: "Oops! Shorts and sunglasses!",
      steps: [
        { text: "Check the weather", emoji: "🌦️" },
        { text: "Put on boots", emoji: "👢" },
        { text: "Grab an umbrella", emoji: "☔" },
        { text: "Zip up the raincoat", emoji: "🧥" },
        { text: "Open the front door", emoji: "🚪" },
      ],
      successText: "Yes! Vora is ready now!",
    },
  },
  {
    type: "activity",
    instructions: "Watch Vora try. Then help Vora with clear steps!",
    config: {
      engine: "instruct_vora",
      title: "Clear Instructions: Clean Up",
      teacherNote: "UNESCO AI Competency Framework, \"AI techniques and applications.\" A gentle, funny (not upsetting) wrong result — keep it light for the younger track.",
      goalLabel: "Help Vora clean up the toys!",
      goalEmoji: "🧸",
      vagueInstruction: "\"Vora, clean up.\"",
      vagueResultEmoji: "🗑️🧸",
      vagueResultText: "Oops! Almost threw the toy away!",
      steps: [
        { text: "Turn off the TV", emoji: "📺" },
        { text: "Pick up the blocks", emoji: "🧱" },
        { text: "Put them in the bin", emoji: "📦" },
        { text: "Put the bin on the shelf", emoji: "🗄️" },
        { text: "Say \"All done!\"", emoji: "🙌" },
      ],
      successText: "All clean! Clear steps worked!",
    },
  },
  {
    type: "activity",
    instructions: "Watch Vora try. Then help Vora with clear steps!",
    config: {
      engine: "instruct_vora",
      title: "Clear Instructions: Water the Plant",
      teacherNote: "UNESCO AI Competency Framework, \"AI techniques and applications.\"",
      goalLabel: "Help Vora take care of the plant!",
      goalEmoji: "🌱",
      vagueInstruction: "\"Vora, help the plant.\"",
      vagueResultEmoji: "🍪🌱",
      vagueResultText: "Oops! Vora gave it a cookie!",
      steps: [
        { text: "Check if the soil is dry", emoji: "👆" },
        { text: "Get the watering can", emoji: "💧" },
        { text: "Fill it with water", emoji: "🚰" },
        { text: "Pour a little on the plant", emoji: "🌱" },
        { text: "Put it back in the sun", emoji: "☀️" },
      ],
      successText: "Yes! The plant is happy now!",
    },
  },
  {
    type: "activity",
    instructions: "Watch Vora try. Then help Vora with clear steps!",
    config: {
      engine: "instruct_vora",
      title: "Clear Instructions: Feed the Fish",
      teacherNote: "UNESCO AI Competency Framework, \"AI techniques and applications.\"",
      goalLabel: "Help Vora feed the fish!",
      goalEmoji: "🐟",
      vagueInstruction: "\"Vora, feed the pet.\"",
      vagueResultEmoji: "🍕🐟",
      vagueResultText: "Oops! Pizza in the fish tank!",
      steps: [
        { text: "Walk to the fish tank", emoji: "🚶" },
        { text: "Open the fish food", emoji: "🥫" },
        { text: "Take a small pinch", emoji: "🤏" },
        { text: "Sprinkle it in the water", emoji: "🐟" },
        { text: "Watch them eat", emoji: "👀" },
      ],
      successText: "Yes! The fish are happy!",
    },
  },
];
