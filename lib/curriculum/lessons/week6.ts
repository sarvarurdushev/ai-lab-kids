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
      teacherScript: "Mime waking up and stretching, then ask \"What do I do first in the morning?\"",
      prompt: "Good morning! 🌞",
    },
    {
      type: "vocab",
      title: "Morning Actions",
      words: [
        { word: "wake up", emoji: "🌞" },
        { word: "get dressed", emoji: "👕" },
        { word: "eat breakfast", emoji: "🥣" },
        { word: "brush teeth", emoji: "🪥" },
      ],
    },
    {
      type: "story",
      title: "Vora Watches a Mixed-Up Morning",
      teacherNote:
        "Keep this playful and don't use the word \"algorithm\" yet — that formal idea arrives tomorrow. Today's job is just to make kids notice that order matters, setting up tomorrow's lesson.",
      panels: [
        {
          text: "Vora loves watching morning videos. \"Wake up, get dressed, eat breakfast, brush teeth,\" it said happily. \"Always in that order!\"",
          textSimple: "Vora watches morning videos every day.",
          emoji: "🌞",
        },
        {
          text: "But one video was different: a kid ate breakfast first, THEN woke up, THEN brushed their teeth with cereal still in their mouth!",
          textSimple: "One video was mixed up! Silly order.",
          emoji: "🥣",
        },
        {
          text: "\"Wait...\" said Vora, tilting its head. \"That doesn't look right at all.\"",
          textSimple: "\"That's silly!\" said Vora.",
          emoji: "🤔",
        },
        {
          text: "Vora watched lots and lots of mornings again, and noticed almost everyone did the same four steps in the same order.",
          textSimple: "Vora watched many mornings. Same order every time!",
          emoji: "🔁",
        },
        {
          text: "Vora wasn't magic — it just noticed that order matters a LOT for a morning routine to actually make sense!",
          textSimple: "No magic! Order really matters.",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "What was silly about the mixed-up morning video Vora saw?",
          discussionNote: "The steps happened in the wrong order (eating before waking up, brushing teeth with food still in the mouth) — the actions were right, but the order made it not make sense.",
        },
        {
          question: "What's the very first thing YOU do every morning?",
          discussionNote: "Open discussion — this primes kids to think in exact order, which matters for tomorrow's sequencing lesson.",
        },
      ],
    },
    {
      type: "movement",
      title: "Morning Routine Actions!",
      instructions:
        "Call out each morning action and do the motion together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Wake up — stretch your arms up big and yawn", emoji: "🌞" },
        { text: "Get dressed — pretend to pull a shirt over your head", emoji: "👕" },
        { text: "Eat breakfast — pretend to scoop a spoon to your mouth", emoji: "🥣" },
        { text: "Brush teeth — brush your teeth with your finger", emoji: "🪥" },
      ],
    },
    {
      type: "team_relay",
      title: "Name a Morning Action!",
      instructions:
        "Split the class into two or three teams. Read one prompt aloud at a time; teams take turns racing to shout a correct answer using today's morning words. Cheer loudly for every good answer, then move to the next team.",
      prompts: [
        { text: "Name something you do right when you wake up!", emoji: "🌞" },
        { text: "Name something you put on when you get dressed!", emoji: "👕" },
        { text: "Name a food you might eat for breakfast!", emoji: "🥣" },
        { text: "Name what you use to brush your teeth!", emoji: "🪥" },
        { text: "Name the four morning steps in order, as fast as you can!", emoji: "🔁", minTrack: "explorers" },
      ],
    },
    {
      type: "chant",
      title: "My Morning Chant",
      instructions:
        "Say each call line and act out the action. The whole class echoes the response line back to you.",
      lines: [
        { call: "Morning, morning, what do you do?", response: "I wake up bright, and stretch up too!" },
        { call: "Morning, morning, what comes next?", response: "I get dressed, all fresh and dressed!" },
        {
          call: "Morning, morning, time to eat —",
          response: "I eat breakfast, yummy and sweet!",
          minTrack: "explorers",
        },
        {
          call: "Morning, morning, one more thing —",
          response: "I brush my teeth, then off I spring!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Each kid says one thing they do every morning.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned four morning actions in English, acted them out, and chanted about our morning routine — tomorrow we'll put them in order for Vora.",
      summarySimple: "Today we learned morning words and sang a morning chant with Vora!",
    },
  ],
};

export const w6d3_bedtime_routine: Lesson = {
  ...meta("w6d3_bedtime_routine"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask: \"What's the last thing you do before you sleep?\" and take a few quick answers.",
      prompt: "Good night! 😴",
    },
    {
      type: "vocab",
      title: "Bedtime Actions",
      words: [
        { word: "put on pajamas", emoji: "🩱" },
        { word: "brush teeth", emoji: "🪥" },
        { word: "read a story", emoji: "📖" },
        { word: "go to sleep", emoji: "😴" },
      ],
    },
    {
      type: "story",
      title: "Vora Tries a Brand New Routine",
      teacherNote:
        "This is a direct callback to yesterday's mixed-up-morning story — read it before the sequence_builder game and ask kids to spot the connection themselves before you point it out.",
      panels: [
        {
          text: "\"I learned that mornings need the right order,\" said Vora. \"But what about bedtime? That's a whole new routine!\"",
          textSimple: "Vora knows mornings need order. What about bedtime?",
          emoji: "🌞",
        },
        {
          text: "Vora guessed first: \"Go to sleep, then brush your teeth?\" That didn't sound right at all — you can't brush your teeth while you're asleep!",
          textSimple: "Vora guessed wrong at first — silly!",
          emoji: "😴",
        },
        {
          text: "Vora thought back to the same idea from mornings: figure out what really happens first, next, then, and last.",
          textSimple: "Vora remembered: find the real order!",
          emoji: "🧠",
        },
        {
          text: "This time Vora got it: put on pajamas, brush teeth, read a story, go to sleep!",
          textSimple: "Pajamas, teeth, story, sleep! Right order!",
          emoji: "📖",
        },
        {
          text: "Vora wasn't magic — it just used the SAME big idea (order matters!) on a brand new routine, and it worked here too!",
          textSimple: "No magic! Same idea, new routine — it worked!",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "How did Vora use what it learned about mornings to help figure out bedtime?",
          discussionNote: "It used the same idea — that steps need to happen in a real, sensible order — and applied it to a brand new routine, showing that a big idea can transfer to new situations.",
        },
        {
          question: "Can you think of another routine that also needs the right order, like getting ready for gym or making a sandwich?",
          discussionNote: "Open discussion — any multi-step routine works; the point is recognizing that ordering matters everywhere, not just for mornings and bedtime.",
        },
      ],
    },
    {
      type: "movement",
      title: "Bedtime Routine Actions!",
      instructions:
        "Call out each bedtime action and do the motion together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Put on pajamas — pretend to pull on comfy pajamas", emoji: "🩱" },
        { text: "Brush teeth — brush your teeth with your finger", emoji: "🪥" },
        { text: "Read a story — hold up two hands like an open book", emoji: "📖" },
        { text: "Go to sleep — rest your head on your hands and close your eyes", emoji: "😴" },
      ],
    },
    {
      type: "activity",
      instructions: "Same skill as yesterday, new routine — kids take turns tapping the next step and reading it aloud with its sequencing word.",
      config: {
        engine: "sequence_builder",
        title: "Getting Ready for Bed",
        steps: [
          { text: "Put on pajamas", emoji: "🩱" },
          { text: "Brush teeth", emoji: "🪥" },
          { text: "Read a story", emoji: "📖" },
          { text: "Go to sleep", emoji: "😴" },
        ],
      },
    },
    {
      type: "stand_sit",
      title: "Bedtime True or False!",
      instructions:
        "Read each statement. Kids STAND UP if they think it's true, and crouch down low if they think it's false. Reveal the answer, then give the short explanation before moving on.",
      statements: [
        { text: "We put on pajamas before we go to sleep.", isTrue: true, explanation: "Yes! Pajamas come early in the routine.", emoji: "🩱" },
        { text: "We brush our teeth after we go to sleep.", isTrue: false, explanation: "No — we brush our teeth before bed, not after!", emoji: "🪥" },
        { text: "Reading a story can help us feel sleepy before bed.", isTrue: true, explanation: "Yes! A calm story helps us get ready for sleep.", emoji: "📖" },
        {
          text: "If you give Vora the bedtime steps in a mixed-up order, Vora will notice and fix it by itself.",
          isTrue: false,
          explanation: "No — Vora just follows the exact steps it's given, in that exact order, even if it's silly. That's what an algorithm means!",
          emoji: "🤖",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "chant",
      title: "Bedtime Routine Chant",
      instructions:
        "Say each call line and act out the bedtime step. The whole class echoes the response line back to you.",
      lines: [
        { call: "Bedtime, bedtime, what comes first?", response: "First, put on pajamas — comfy and soft!" },
        { call: "Bedtime, bedtime, what comes next?", response: "Next, brush your teeth, all clean and fresh!" },
        {
          call: "Bedtime, bedtime, then what do you do?",
          response: "Then, read a story, me and you!",
          minTrack: "explorers",
        },
        {
          call: "Bedtime, bedtime, what comes last?",
          response: "Last, go to sleep — sweet dreams at last!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "\"First we put on pajamas, next we...\" — have a student finish the whole sequence out loud.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we ordered a brand-new routine using first/next/then/last — showing we can use the sequencing skill anywhere, not just for one routine, acted out each bedtime step, and chanted the whole routine together.",
      summarySimple: "Today we practiced our bedtime routine in order and sang a bedtime chant!",
    },
  ],
};

export const w6d2_give_vora_the_steps: Lesson = {
  ...meta("w6d2_give_vora_the_steps"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask: \"What do you do first in the morning — wake up, or eat breakfast?\" Kids should answer easily; this sets up why order matters.",
      prompt: "What comes first?",
    },
    {
      type: "vocab",
      title: "Sequencing Words",
      words: [
        { word: "first", emoji: "1️⃣" },
        { word: "next", emoji: "➡️" },
        { word: "then", emoji: "➡️" },
        { word: "last", emoji: "🏁" },
      ],
    },
    {
      type: "concept",
      title: "Vora Follows Exact Steps",
      bigIdeas: ["reasoning"],
      lines: [
        {
          text: "Robots do exactly what you tell them — in exactly the order you tell them!",
          textSimple: "Robots do just what you say — in that exact order!",
        },
        {
          text: "That list of steps is called an algorithm.",
          textSimple: "This list of steps has a name: algorithm!",
        },
        {
          text: "If the order is wrong, Vora still follows it — even if it doesn't make sense!",
          textSimple: "If the order is wrong, Vora still does it!",
        },
      ],
      teacherNote:
        "The punchline to land here: order isn't just a grammar rule, it's literally how instructions work for a computer. Consider demonstrating by \"executing\" a deliberately wrong order (e.g., \"eat breakfast, then wake up\") for a laugh before the activity.",
    },
    {
      type: "story",
      title: "Vora Follows the Silly Order",
      teacherNote:
        "This dramatizes the concept's own punchline as a little narrative — read it right after the concept intro so kids are laughing at Vora's literal-mindedness before they play the sequence_builder game below.",
      panels: [
        {
          text: "\"Give me any steps, and I'll follow them exactly!\" said Vora proudly.",
          textSimple: "\"I follow steps exactly!\" said Vora.",
          emoji: "🤖",
        },
        {
          text: "The class decided to test it: \"Eat breakfast! Then wake up! Then get dressed!\"",
          textSimple: "The class said: \"Eat breakfast, then wake up!\"",
          emoji: "🥣",
        },
        {
          text: "So Vora pretended to eat a big bowl of cereal... while still snoring, fast asleep!",
          textSimple: "Vora ate cereal while asleep! Silly!",
          emoji: "😴",
        },
        {
          text: "The whole class burst out laughing — the steps didn't make any sense in that order!",
          textSimple: "Everyone laughed! Silly order!",
          emoji: "😂",
        },
        {
          text: "\"I don't complain, I just follow the exact order I'm given,\" said Vora. \"That's called an algorithm — and that's exactly why the order has to be right!\"",
          textSimple: "Vora just follows the order given — right or wrong!",
          emoji: "🔁",
        },
      ],
      comprehensionQuestions: [
        {
          question: "What happened when the class gave Vora the steps in the wrong order?",
          discussionNote: "Vora followed them exactly anyway, even though the result was silly — computers follow instructions literally, they don't automatically guess what you \"really meant.\"",
        },
        {
          question: "Why is it important to give really clear, correctly-ordered directions to a robot or computer?",
          discussionNote: "Unlike a person, a computer won't notice a mistake and fix it for you — the order has to be right from the very start.",
        },
      ],
    },
    {
      type: "movement",
      title: "Sequencing Word Actions!",
      instructions:
        "Call out each sequencing word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "First — hold up one finger and take a big step forward", emoji: "1️⃣" },
        { text: "Next — hop to the side", emoji: "➡️" },
        { text: "Then — clap your hands once", emoji: "➡️" },
        { text: "Last — strike a freeze pose", emoji: "🏁" },
      ],
    },
    {
      type: "activity",
      instructions: "Kids take turns tapping the next step. Read each step aloud with its sequencing word (\"First, wake up...\") as it's placed.",
      config: {
        engine: "sequence_builder",
        title: "My Morning Routine",
        steps: [
          { text: "Wake up", emoji: "🌞" },
          { text: "Get dressed", emoji: "👕" },
          { text: "Eat breakfast", emoji: "🥣" },
          { text: "Brush teeth", emoji: "🪥" },
        ],
      },
    },
    {
      type: "class_vote",
      title: "Trickiest Steps to Explain?",
      instructions:
        "Read each option aloud. Kids vote by raising their hands for the one they think would be hardest to explain to Vora in perfect step-by-step order — there's no single right answer, the fun is in explaining why!",
      question: "Which do you think would be trickiest to explain to Vora in perfect step-by-step order?",
      options: [
        { text: "Making a sandwich", emoji: "🥪" },
        { text: "Tying your shoes", emoji: "👟" },
        { text: "Brushing your teeth", emoji: "🪥" },
        { text: "Doing a dance move", emoji: "💃" },
      ],
    },
    {
      type: "chant",
      title: "First, Next, Then, Last Chant",
      instructions:
        "Say each call line and act out the morning step. The whole class echoes the response line back to you.",
      lines: [
        { call: "Routine, routine, what comes first?", response: "First, we wake up — no time to rest!" },
        { call: "Routine, routine, what comes next?", response: "Next, get dressed — looking your best!" },
        {
          call: "Routine, routine, then what do we do?",
          response: "Then, eat breakfast — yummy for you!",
          minTrack: "explorers",
        },
        {
          call: "Routine, routine, what comes last?",
          response: "Last, brush your teeth — nice and fast!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "\"First we wake up, next we...\" — have a student finish the sentence.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned first/next/then/last and practiced putting a routine in the right order — just like giving Vora an algorithm, acted out the sequencing words, and chanted our morning routine in order.",
      summarySimple: "Today we learned first, next, then, and last, and put our morning routine in order!",
    },
  ],
};
