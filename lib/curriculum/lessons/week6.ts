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
      type: "vocab_review",
      title: "Words We Know",
      teacherNote:
        "One word from each week of the unit so far, so nothing taught since September goes untouched for a month. Read each word together BEFORE tapping — the tap confirms it, it isn't the activity. If 'grandpa' needs the picture, Week 4's family words are worth a quick refresh before today's brand-new morning routine takes over the lesson. Keep the whole review under two minutes.",
      words: [
        { word: "hello", emoji: "👋", fromMonth: 1 },
        { word: "cat", emoji: "🐱", fromMonth: 2 },
        { word: "red", emoji: "🔴", fromMonth: 3 },
        { word: "grandpa", emoji: "👴", fromMonth: 4, minTrack: "explorers" },
        { word: "apple", emoji: "🍎", fromMonth: 5 },
      ],
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
      type: "listen_and_do",
      title: "Listen and Do!",
      instructions:
        "Give each command ONCE, at normal speed — don't repeat it right away. Wait for everyone to move before revealing the words. This checks listening, not reading, so keep the word bank hidden until after each round.",
      commands: [
        { text: "Wake up.", steps: 1, emoji: "🌞" },
        { text: "Get dressed, then eat breakfast.", steps: 2, emoji: "👕" },
        { text: "Wake up, get dressed, then eat breakfast.", steps: 3, emoji: "🥣" },
        {
          text: "Get dressed, eat breakfast, then brush your teeth.",
          steps: 3,
          emoji: "🪥",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "Total Physical Response — give each command once at normal speed, no repeats, and let miming prove comprehension before anyone has to say the words aloud. Every command uses the SAME order a real morning actually goes in, never scrambled — today's job is just recognizing the four actions; Day 2 is where the order itself gets tested. Grade it live: if the whole class nails the 1-step command instantly, skip straight to the 3-step ones.",
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
      type: "partner_talk",
      title: "My Morning!",
      frame: "I ___ in the morning.",
      frameSimple: "I ___.",
      cards: [
        { prompt: "wake up", emoji: "🌞", sampleAnswer: "I wake up in the morning." },
        { prompt: "get dressed", emoji: "👕", sampleAnswer: "I get dressed in the morning." },
        { prompt: "eat breakfast", emoji: "🥣", sampleAnswer: "I eat breakfast in the morning." },
        { prompt: "brush teeth", emoji: "🪥", sampleAnswer: "I brush my teeth in the morning.", minTrack: "explorers" },
      ],
      secondsPerTurn: 20,
      teacherNote:
        "Partner A points to a card, Partner B answers with the full frame, then they swap who's pointing. Every pair talks at once, so circulate and listen rather than running this as a whole-class drill — the point is that every child produces the sentence multiple times before today's check. 'Brush teeth' needs an extra 'my' slipped in ('I brush my teeth'), so listen for that specific card while circulating.",
    },
    {
      type: "draw_and_label",
      title: "Draw My Morning",
      instructions: "Draw four small pictures in a row showing your own morning, in order, then label each one using a word from the word bank.",
      instructionsSimple: "Draw your morning! Write the words.",
      wordBank: [
        { word: "wake up", emoji: "🌞" },
        { word: "get dressed", emoji: "👕" },
        { word: "eat breakfast", emoji: "🥣" },
        { word: "brush teeth", emoji: "🪥" },
      ],
      exampleNote:
        "A four-panel comic strip, left to right: a bed with a sun labeled 'wake up,' a shirt labeled 'get dressed,' a bowl labeled 'eat breakfast,' and a toothbrush labeled 'brush teeth' — copied straight from the word bank, in the same order the class will turn into Vora's first algorithm tomorrow.",
      minutes: 4,
      teacherNote:
        "Papers and pencils out. Keep the word bank on screen the whole time — the point is confident copying, not a spelling test. Circulate and, if a label doesn't match the picture, point back at the word bank rather than telling them the right word. Save these pages — tomorrow's lesson revisits this exact order as an algorithm.",
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
      type: "vocab_review",
      title: "Words We Know",
      teacherNote:
        "One word from each week of the unit so far — a fitting quick warm-up before tonight's brand-new routine. Read each word together before tapping; the tap confirms it, it isn't the activity. Keep it under two minutes so most of the period stays on bedtime's four new steps.",
      words: [
        { word: "goodbye", emoji: "🙋", fromMonth: 1 },
        { word: "bird", emoji: "🐦", fromMonth: 2 },
        { word: "purple", emoji: "🟣", fromMonth: 3 },
        { word: "sister", emoji: "👧", fromMonth: 4, minTrack: "explorers" },
        { word: "milk", emoji: "🥛", fromMonth: 5 },
      ],
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
      type: "listen_and_do",
      title: "Listen and Do!",
      instructions:
        "Give each command ONCE, at normal speed — don't repeat it right away. Wait for everyone to move before revealing the words. This checks listening, not reading, so keep the word bank hidden until after each round.",
      commands: [
        { text: "Put on your pajamas.", steps: 1, emoji: "🩱" },
        { text: "Brush your teeth, then read a story.", steps: 2, emoji: "🪥" },
        { text: "Put on your pajamas, brush your teeth, then read a story.", steps: 3, emoji: "📖" },
        {
          text: "Put on your pajamas, read a story, then go to sleep.",
          steps: 3,
          emoji: "😴",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "Total Physical Response — give each command once at normal speed, no repeats, and let miming prove comprehension before today's sequence_builder game asks the class to reconstruct bedtime's order themselves. Keep the word list hidden until after each round. Grade it live: if the whole class nails the 1-step command instantly, skip straight to the 3-step ones.",
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
      type: "partner_talk",
      title: "My Bedtime Steps!",
      frame: "Tonight, ___!",
      frameSimple: "Tonight, ___!",
      cards: [
        { prompt: "first, put on pajamas", emoji: "🩱", sampleAnswer: "Tonight, first, put on pajamas!" },
        { prompt: "next, brush your teeth", emoji: "🪥", sampleAnswer: "Tonight, next, brush your teeth!" },
        { prompt: "then, read a story", emoji: "📖", sampleAnswer: "Tonight, then, read a story!" },
        {
          prompt: "last, go to sleep",
          emoji: "😴",
          sampleAnswer: "Tonight, last, go to sleep!",
          minTrack: "explorers",
        },
      ],
      secondsPerTurn: 20,
      teacherNote:
        "Partner A reads the card as one full instruction ('Tonight, first, put on pajamas!'), Partner B repeats it back, then they swap. This is the exact bedtime order from today's sequence_builder game, just spoken aloud instead of tapped — circulate and listen for the sequencing word staying at the very FRONT of the sentence, the same slip flagged back in Day 2.",
    },
    {
      type: "role_play",
      title: "Bedtime with a Grown-Up",
      setting: "Getting ready for bed at home, right before lights out.",
      roles: ["Parent", "Kid"],
      exchanges: [
        { role: 0, line: "Time for bed! What do we do first?", emoji: "🌙" },
        { role: 1, line: "First, I put on my pajamas!", emoji: "🩱" },
        { role: 0, line: "Great! What comes next?", emoji: "🪥" },
        {
          role: 1,
          line: "Next, I brush my teeth. Then, I read a story!",
          lineSimple: "Next, teeth. Then, story!",
          emoji: "📖",
        },
      ],
      teacherNote:
        "Pairs rehearse both parts, then a volunteer pair performs for the class. This is the exact bedtime order from today's sequence_builder game, now spoken as a real conversation between a kid and a parent instead of a robot following steps — encourage a big yawn on 'time for bed' and a sleepy voice by the last line.",
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
      type: "vocab_review",
      title: "Words We Know",
      teacherNote:
        "One word from each week of the unit so far, read together before tapping — the tap confirms it, it isn't the activity. This is also the lesson where 'exact steps matter' becomes explicit, so model that same care here: say each word fully before revealing the picture, rather than skipping straight to the tap.",
      words: [
        { word: "book", emoji: "📖", fromMonth: 1 },
        { word: "lion", emoji: "🦁", fromMonth: 2 },
        { word: "green", emoji: "🟢", fromMonth: 3 },
        { word: "square", emoji: "🟦", fromMonth: 3, minTrack: "explorers" },
        { word: "baby", emoji: "👶", fromMonth: 4 },
        { word: "rice", emoji: "🍚", fromMonth: 5 },
      ],
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
      type: "listen_and_do",
      title: "Listen and Do!",
      instructions:
        "Give each command ONCE, at normal speed — don't repeat it right away. Wait for everyone to move before revealing the words. This checks listening, not reading, so keep the word bank hidden until after each round.",
      commands: [
        { text: "First, wake up!", steps: 1, emoji: "🌞" },
        { text: "Next, get dressed, then eat breakfast.", steps: 2, emoji: "👕" },
        { text: "First, wake up. Next, get dressed. Then, brush your teeth.", steps: 3, emoji: "🪥" },
        {
          text: "First, wake up. Then, eat breakfast. Last, brush your teeth.",
          steps: 3,
          emoji: "🏁",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "Total Physical Response — give each command once at normal speed, no repeats, and let miming prove the sequencing words landed before anyone has to produce 'first/next/then/last' out loud themselves. This is the first time this unit those words appear woven INTO real commands rather than named in isolation, so listen for whether kids wait for the whole command before moving, instead of acting on the first verb they hear. Grade it live: if the whole class nails the 1-step command instantly, skip straight to the 3-step ones.",
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
      type: "partner_talk",
      title: "Give Vora the Step!",
      frame: "Vora, ___!",
      frameSimple: "Vora, ___!",
      cards: [
        { prompt: "first, wake up", emoji: "🌞", sampleAnswer: "Vora, first, wake up!" },
        { prompt: "next, get dressed", emoji: "👕", sampleAnswer: "Vora, next, get dressed!" },
        { prompt: "then, eat breakfast", emoji: "🥣", sampleAnswer: "Vora, then, eat breakfast!" },
        {
          prompt: "last, brush your teeth",
          emoji: "🪥",
          sampleAnswer: "Vora, last, brush your teeth!",
          minTrack: "explorers",
        },
      ],
      secondsPerTurn: 20,
      teacherNote:
        "Partner A reads the card as one full instruction to Vora ('Vora, first, wake up!'), Partner B repeats it back like a robot following the order, then they swap who's giving the command. Every pair talks at once, so circulate and listen for the sequencing word landing at the very FRONT of the sentence, not tacked on at the end — that's the exact slip today's concept block warned about.",
    },
    {
      type: "role_play",
      title: "Teaching Vora the Morning",
      setting: "Vora is learning today's morning routine, one instruction at a time.",
      roles: ["Kid", "Vora"],
      exchanges: [
        { role: 0, line: "Vora, first, wake up!", emoji: "🌞" },
        { role: 1, line: "Okay! I wake up first.", emoji: "🤖" },
        { role: 0, line: "Next, get dressed!", emoji: "👕" },
        {
          role: 1,
          line: "Okay! I get dressed next. What comes after that?",
          lineSimple: "Okay! Next. What's after?",
          emoji: "🤔",
        },
      ],
      teacherNote:
        "Pairs rehearse both parts, then a volunteer pair performs for the class. This is the flip side of today's story — instead of tricking Vora with a silly order like the class did earlier, the Kid gives the REAL steps in the right order, and Vora repeats each one back before asking what's next. Encourage a big, literal robot voice for Vora's lines.",
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
