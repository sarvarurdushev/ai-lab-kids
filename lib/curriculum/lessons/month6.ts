import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";
import { AI_OR_NOT_SETS, INSTRUCT_VORA_SCENARIOS } from "../aiLabBank";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m6_week1: Lesson = {
  ...meta("m6_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask: \"Is a lion big or small? Is a monkey big or small?\" Let kids answer with gut instinct before you teach the sentence pattern.",
      prompt: "Big animal, or small animal? 🦁",
    },
    {
      type: "vocab",
      title: "Wild Animals",
      words: [
        { word: "lion", emoji: "🦁" },
        { word: "elephant", emoji: "🐘" },
        { word: "monkey", emoji: "🐵" },
        { word: "zebra", emoji: "🦓" },
        { word: "penguin", emoji: "🐧" },
        { word: "giraffe", emoji: "🦒", minTrack: "explorers" },
        { word: "tiger", emoji: "🐯" },
      ],
    },
    {
      type: "concept",
      title: "Big Animal, Small Animal",
      bigIdeas: ["perception"],
      lines: [
        { text: "Look — it's a big elephant! And over there, it's a small monkey!" },
        {
          text: "\"Big\" and \"small\" go right before the animal name, just like in Korean!",
          textSimple: "Say \"big\" or \"small\" right before the animal name!",
        },
        {
          text: "Deep in a forest, a hidden camera watches all day and night. When an animal walks by, AI helps it guess: lion, or mouse?",
          textSimple: "A hidden camera watches the forest. AI guesses which animal it sees!",
        },
        { text: "Scientists use those camera photos to learn which animals live in a forest — without ever walking in themselves!", minTrack: "explorers" },
      ],
      teacherNote:
        "Adjective-before-noun order (\"a big lion\") matches Korean word order exactly — call this out as an easy win, not everything in English is a hard shift. The wildlife-camera example makes \"perception\" concrete: recognizing an animal from a blurry night photo is a genuinely hard version of the same sorting game Vora's been playing all year.",
    },
    {
      type: "story",
      title: "Vora and the Nighttime Photo",
      teacherNote:
        "Read each panel aloud, pointing to the animal's features Vora notices each time. Pause after panel 3 to ask \"What do YOU think it really is?\" before revealing panel 4.",
      panels: [
        { text: "Deep in a forest, a hidden camera clicked in the dark — and sent the blurry photo straight to Vora.", textSimple: "A hidden camera took a blurry night photo.", emoji: "📸" },
        { text: "\"A big shadowy shape... maybe a big lion?\" Vora guessed, squinting at the fuzzy picture.", textSimple: "\"Maybe a big lion?\" Vora guessed.", emoji: "🦁" },
        { text: "But Vora looked closer: the tail was short and round, the ears were small and round too — not quite lion-shaped.", textSimple: "Vora looked closer. Short tail, round ears...", emoji: "🔎" },
        { text: "\"It's not a big lion at all,\" said Vora. \"It's a small monkey, hiding in the shadows!\"", textSimple: "\"It's a small monkey!\" said Vora.", emoji: "🐵" },
        { text: "The next morning, a clear daytime photo proved Vora right — it really was a monkey all along.", textSimple: "A clear photo the next day proved Vora right!", emoji: "☀️" },
        { text: "Vora wasn't magic — it compared shapes and sizes carefully, and sometimes needed a second look to be sure.", textSimple: "No magic! Vora looked carefully, and checked again.", emoji: "🤖" },
      ],
      comprehensionQuestions: [
        { question: "Why did Vora need to look at the photo more than once before deciding what animal it was?", discussionNote: "The first blurry photo wasn't enough to be sure — looking closely at details like the tail and ears (perception) helped Vora correct its first guess." },
        { question: "Has looking closely ever helped you tell two similar things apart, like two friends' backpacks?", discussionNote: "Open discussion — connects the story's perception idea to kids' own experience with telling similar-looking things apart." },
      ],
    },
    {
      type: "movement",
      title: "Wild Animal Actions!",
      instructions:
        "Call out each animal and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Lion — stomp and roar loudly", emoji: "🦁" },
        { text: "Elephant — swing your arm like a trunk", emoji: "🐘" },
        { text: "Monkey — scratch your sides and hop", emoji: "🐵" },
        { text: "Zebra — gallop in place", emoji: "🦓" },
        { text: "Penguin — waddle with your arms at your sides", emoji: "🐧" },
        { text: "Tiger — crouch low and swipe your paws", emoji: "🐯" },
      ],
    },
    {
      type: "activity",
      instructions: "Sort each animal: is it big, or small?",
      config: {
        engine: "train_the_robot",
        title: "Big Animal or Small Animal?",
        labelA: "Big",
        labelB: "Small",
        emojiA: "🐘",
        emojiB: "🐵",
        items: [
          { word: "elephant", emoji: "🐘", bucket: "a" },
          { word: "lion", emoji: "🦁", bucket: "a" },
          { word: "giraffe", emoji: "🦒", bucket: "a", minTrack: "explorers" },
          { word: "tiger", emoji: "🐯", bucket: "a" },
          { word: "monkey", emoji: "🐵", bucket: "b" },
          { word: "mouse", emoji: "🐭", bucket: "b" },
          { word: "rabbit", emoji: "🐰", bucket: "b" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[5],
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[5],
    },
    {
      type: "team_relay",
      title: "Big or Small Animal Relay!",
      instructions:
        "Split the class into two (or more) teams. Read each prompt aloud and have the next player from each team call out an animal that fits — award a point for every reasonable answer, then move to the next prompt.",
      prompts: [
        { text: "Name a BIG animal!", emoji: "🐘" },
        { text: "Name a SMALL animal!", emoji: "🐵" },
        { text: "Name an animal that lives in the jungle!", emoji: "🌴" },
        { text: "Name an animal with stripes!", emoji: "🐯" },
        { text: "Name an animal that could hide in tall grass!", emoji: "🌾", minTrack: "explorers" },
      ],
    },
    {
      type: "chant",
      title: "Big or Small Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching animal picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Animal, animal, who do you see?", response: "It's a big elephant, big as can be!" },
        { call: "Animal, animal, who's on the ground?", response: "It's a small monkey, hopping around!" },
        {
          call: "Animal, animal, who's big and strong?",
          response: "It's a big lion, roaring along!",
          minTrack: "explorers",
        },
        {
          call: "Animal, animal, who waddles by?",
          response: "It's a small penguin, waving hi!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Say \"It's a big ___\" or \"It's a small ___\" about an animal picture or toy.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned wild animal words and \"It's a big / small ___\" — and how wildlife cameras use AI to recognize which animal walked by — acted out wild animal actions together, practiced spotting real AI in everyday life, helped Vora follow clear instructions, and chanted about big and small animals together.",
      summarySimple: "Today we learned animal words, said big and small, and sang an animal chant with Vora!",
      homework: "Find a picture of an animal at home and say \"It's a big ___\" or \"It's a small ___.\"",
    },
  ],
};

export const m6_week2: Lesson = {
  ...meta("m6_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Chant \"Lion, elephant, lion, elephant...\" together and ask \"What comes next?\" before today's pattern game.",
      prompt: "Lion, elephant, lion, elephant... what comes next? 🦁🐘",
    },
    {
      type: "concept",
      title: "Patterns Help Me See",
      bigIdeas: ["perception"],
      lines: [
        {
          text: "Remember the wildlife camera? It looks for patterns to guess which animal walked by.",
          textSimple: "The wildlife camera looks for patterns too!",
        },
        { text: "Today, you get to find the pattern too!" },
      ],
      teacherNote:
        "Quick callback to Week 1's wildlife-camera example — no new teaching, just a bridge into today's pattern-prediction game.",
    },
    {
      type: "story",
      title: "Vora Follows the Footprints",
      teacherNote:
        "Read each panel aloud, pointing to the footprint pattern each time. Pause after panel 3 to have the whole class guess out loud what footprint comes next before revealing panel 4 — this is the same skill as the pattern_predictor game below.",
      panels: [
        { text: "Vora followed a muddy trail through the forest and spotted footprints — big and round, then long and wrinkly, again and again.", textSimple: "Vora saw footprints: big, then long, again and again.", emoji: "👣" },
        { text: "\"Big and round is a lion's paw. Long and wrinkly is an elephant's foot,\" said Vora, naming each one.", textSimple: "\"Lion! Elephant!\" said Vora, naming each print.", emoji: "🦁" },
        { text: "Lion, elephant, lion, elephant... the pattern kept repeating all down the trail.", textSimple: "Lion, elephant, lion, elephant... the pattern kept going!", emoji: "🔁" },
        { text: "\"If the pattern keeps going,\" said Vora, \"the very next print should be... a lion!\"", textSimple: "\"Next should be a lion!\" said Vora.", emoji: "🦁" },
        { text: "Vora turned the corner — and there it was, a perfect lion footprint, exactly where predicted!", textSimple: "And there it was — a lion footprint!", emoji: "✅" },
        { text: "Vora wasn't magic — it just noticed what kept repeating and guessed what would come next, the same game we play with pictures.", textSimple: "No magic! Vora just found the pattern.", emoji: "🧠" },
      ],
      comprehensionQuestions: [
        { question: "How did Vora guess which footprint would come next, before turning the corner?", discussionNote: "It noticed the repeating lion-elephant-lion-elephant pattern and predicted the next one would continue it — the same skill as the pattern game." },
        { question: "Can you think of a pattern you see every day, like the order of the days of the week?", discussionNote: "Open discussion — connects pattern-based prediction to everyday routines and repetition kids already notice." },
      ],
    },
    {
      type: "movement",
      title: "Animal Actions!",
      instructions:
        "Call out each animal and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Lion — stomp and roar loudly", emoji: "🦁" },
        { text: "Elephant — swing your arm like a trunk", emoji: "🐘" },
        { text: "Monkey — scratch your sides and hop", emoji: "🐵" },
        { text: "Zebra — gallop in place", emoji: "🦓" },
        { text: "Penguin — waddle with your arms at your sides", emoji: "🐧" },
        { text: "Tiger — crouch low and swipe your paws", emoji: "🐯" },
      ],
    },
    {
      type: "activity",
      instructions: "Look at the animal pattern and pick the picture that comes next. Then play a second game to reinforce it.",
      config: {
        engine: "pattern_predictor",
        title: "What Comes Next?",
        teacherNote:
          "First appearance of the pattern-prediction game this year — it reuses the \"same/different\" vocabulary from the foundations unit's Week 3 colors-and-shapes lesson. Read each sequence aloud with the animal names, not just the emoji, so kids connect the visual pattern to the English words.",
        rounds: [
          { sequence: ["🦁", "🐘", "🦁", "🐘"], answer: "🦁", options: ["🦁", "🐘", "🐧"] },
          { sequence: ["🐧", "🦒", "🐧", "🦒"], answer: "🐧", options: ["🐧", "🦒", "🐯"] },
          {
            sequence: ["🐯", "🐯", "🦓", "🦓", "🐯", "🐯"],
            answer: "🦓",
            options: ["🐯", "🦓", "🐧"],
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Flip two cards at a time to find a matching animal word and picture. If they match, they stay face up!",
      config: {
        engine: "memory_match",
        title: "Animal Words",
        pairs: [
          { word: "lion", emoji: "🦁" },
          { word: "elephant", emoji: "🐘" },
          { word: "monkey", emoji: "🐵" },
          { word: "zebra", emoji: "🦓" },
          { word: "penguin", emoji: "🐧" },
          { word: "giraffe", emoji: "🦒", minTrack: "explorers" },
          { word: "tiger", emoji: "🐯" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[5],
    },
    {
      type: "class_vote",
      title: "Pick Your Wild Animal!",
      instructions:
        "Ask the question aloud. Kids vote by raising their hand for their favorite option, or simply discuss as a class — there's no single right answer.",
      question: "If you could be any wild animal for a day, which one would you pick?",
      options: [
        { text: "Lion", emoji: "🦁" },
        { text: "Elephant", emoji: "🐘" },
        { text: "Monkey", emoji: "🐵" },
        { text: "Penguin", emoji: "🐧" },
      ],
    },
    {
      type: "chant",
      title: "Big and Small Animal Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching animal picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Animal, animal, what comes next?", response: "It's a big lion, roaring next!" },
        { call: "Animal, animal, who do you see?", response: "It's a small monkey, hopping with glee!" },
        {
          call: "Animal, animal, what's the pattern true?",
          response: "It's a big elephant, right on cue!",
          minTrack: "explorers",
        },
        {
          call: "Animal, animal, guess who's here?",
          response: "It's a small penguin, give a cheer!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Ask a partner: \"What comes next?\" about the pattern lion, elephant, lion, elephant.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we acted out animal actions, played three activities — guessing what comes next in an animal pattern, matching animal words to pictures, and helping Vora follow clear step-by-step instructions — and chanted about big and small animals together.",
      summarySimple: "Today we played animal games, moved our bodies, and sang an animal chant with Vora!",
    },
  ],
};

export const m6_week3: Lesson = {
  ...meta("m6_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Flash an animal emoji quickly and have kids call out the English word before today's matching game starts.",
      prompt: "Name that animal, fast! 🐯",
    },
    {
      type: "concept",
      title: "Remembering Like Vora",
      bigIdeas: ["learning"],
      lines: [
        {
          text: "The more pictures I see, the better I get at remembering them — that's learning!",
          textSimple: "The more I practice, the better I remember!",
        },
        { text: "Let's practice remembering animal words together." },
      ],
      teacherNote:
        "Short bridge connecting today's memory game to the idea that repetition builds recognition — no new AI content, just framing.",
    },
    {
      type: "story",
      title: "Vora Practices and Practices",
      teacherNote:
        "Read each panel aloud, emphasizing how much faster Vora gets each time. Pause after panel 3 to ask the class if THEY have ever gotten faster at a game with practice before revealing the moral in panel 5.",
      panels: [
        { text: "Vora sat down to play a matching game with animal cards: lion, zebra, tiger, monkey.", textSimple: "Vora played a matching game with animal cards.", emoji: "🎴" },
        { text: "In the very first round, Vora flipped a zebra card by mistake, thinking it was a tiger — the stripes looked so similar!", textSimple: "Round 1: Vora mixed up zebra and tiger stripes!", emoji: "🦓" },
        { text: "Vora kept playing, round after round, seeing the very same cards again and again.", textSimple: "Vora played again and again with the same cards.", emoji: "🔁" },
        { text: "By the tenth round, Vora flipped the zebra card immediately, with no mistake at all!", textSimple: "Round 10: no mistakes at all!", emoji: "⚡" },
        { text: "Vora didn't get magic zebra-vision — it just practiced over and over, the same way you get faster at a game the more you play it.", textSimple: "No magic — just lots and lots of practice!", emoji: "🌟" },
      ],
      comprehensionQuestions: [
        { question: "Why did Vora get faster at the matching game the more times it played?", discussionNote: "Repeated practice with the same cards is what learning looks like — Vora didn't get a sudden new power, it just saw the words many times." },
        { question: "What's something YOU have gotten better at just from practicing it again and again?", discussionNote: "Open discussion — connects the learning big idea to the child's own experience of improving through repetition." },
      ],
    },
    {
      type: "movement",
      title: "Wild Animal Actions!",
      instructions:
        "Call out each animal and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Lion — stomp and roar loudly", emoji: "🦁" },
        { text: "Elephant — swing your arm like a trunk", emoji: "🐘" },
        { text: "Monkey — scratch your sides and hop", emoji: "🐵" },
        { text: "Zebra — gallop in place", emoji: "🦓" },
        { text: "Penguin — waddle with your arms at your sides", emoji: "🐧" },
        { text: "Tiger — crouch low and swipe your paws", emoji: "🐯" },
      ],
    },
    {
      type: "activity",
      instructions: "Flip two cards at a time to find a matching animal word and picture. If they match, they stay face up! Then play a second game to reinforce it.",
      config: {
        engine: "memory_match",
        title: "Animal Words",
        pairs: [
          { word: "lion", emoji: "🦁" },
          { word: "elephant", emoji: "🐘" },
          { word: "monkey", emoji: "🐵" },
          { word: "zebra", emoji: "🦓" },
          { word: "penguin", emoji: "🐧" },
          { word: "giraffe", emoji: "🦒", minTrack: "explorers" },
          { word: "tiger", emoji: "🐯" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Look at the animal pattern and pick the picture that comes next.",
      config: {
        engine: "pattern_predictor",
        title: "What Comes Next?",
        teacherNote:
          "First appearance of the pattern-prediction game this year — it reuses the \"same/different\" vocabulary from the foundations unit's Week 3 colors-and-shapes lesson. Read each sequence aloud with the animal names, not just the emoji, so kids connect the visual pattern to the English words.",
        rounds: [
          { sequence: ["🦁", "🐘", "🦁", "🐘"], answer: "🦁", options: ["🦁", "🐘", "🐧"] },
          { sequence: ["🐧", "🦒", "🐧", "🦒"], answer: "🐧", options: ["🐧", "🦒", "🐯"] },
          {
            sequence: ["🐯", "🐯", "🦓", "🦓", "🐯", "🐯"],
            answer: "🦓",
            options: ["🐯", "🦓", "🐧"],
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[0],
    },
    {
      type: "stand_sit",
      title: "Animal & Learning True or False!",
      instructions:
        "Read each statement aloud. Kids STAND UP if they think it's true, and crouch down low if they think it's false. Reveal the answer, then share the short explanation before moving on.",
      statements: [
        { text: "A giraffe is a small animal.", isTrue: false, explanation: "No — a giraffe is one of the biggest animals around!", emoji: "🦒" },
        { text: "Playing a game just one time is enough to become really good at it.", isTrue: false, explanation: "No — you get better with lots of practice, just like Vora did!", emoji: "🔁" },
        { text: "A zebra has black and white stripes.", isTrue: true, explanation: "Yes! That's how you can spot a zebra.", emoji: "🦓" },
        { text: "The more times you practice something, the better you usually get at it.", isTrue: true, explanation: "Yes — that's learning!", emoji: "🧠", minTrack: "explorers" },
      ],
    },
    {
      type: "chant",
      title: "What's This Animal? Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching animal picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "What's this animal, king of them all?", response: "It's a lion, standing tall!" },
        { call: "What's this animal, swinging by?", response: "It's a monkey, way up high!" },
        {
          call: "What's this animal, black and white?",
          response: "It's a zebra, what a sight!",
          minTrack: "explorers",
        },
        {
          call: "What's this animal, waddling slow?",
          response: "It's a penguin, off we go!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Ask a partner: \"What's this animal?\" and point to one of the matched cards.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we acted out animal actions, played three activities — matching animal words to pictures, guessing what comes next in an animal pattern, and spotting real AI in everyday life — and chanted about the animals together.",
      summarySimple: "Today we matched animal words, moved our bodies, and sang an animal chant with Vora!",
    },
  ],
};

export const m6_week4: Lesson = {
  ...meta("m6_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Say \"fan\" and \"pan\" slowly, back to back, a few times, without explaining yet.",
      prompt: "fan... pan... fan... pan...",
    },
    {
      type: "concept",
      title: "Remember This Sound?",
      bigIdeas: ["perception"],
      lines: [
        {
          text: "Remember the \"f\" sound? Bite your bottom lip gently and blow air.",
          textSimple: "Remember the \"f\" sound? Bite your lip and blow air!",
        },
        {
          text: "We practiced this sound back in Week 3 of Vora's Classroom — let's see how much you remember!",
          textSimple: "We practiced this sound before. Let's remember it!",
        },
        {
          text: "Let's listen very carefully and pick the word we hear: fan, or pan?",
          textSimple: "Let's listen! Fan, or pan?",
        },
        { text: "Even grown-ups keep practicing sounds that aren't in their first language — you're doing exactly what language learners do!", minTrack: "explorers" },
      ],
      teacherNote:
        "Second quarter-checkpoint review — Korean has no /f/ phoneme, so this contrast is genuinely new rather than just underused, and benefits from repeated exposure across the year. If your class completed the foundations unit, this is a direct callback to Week 3 Day 3; if not, simply treat it as a first introduction.",
    },
    {
      type: "story",
      title: "Vora Listens Very Closely",
      teacherNote:
        "Read each panel aloud, exaggerating the /f/ blowing sound and the /p/ popping sound with your mouth so kids can see the difference, not just hear it. Pause after panel 2 to let the class guess before revealing panel 3.",
      panels: [
        { text: "Vora got a message through a crackly, fuzzy phone speaker: \"Please bring the... ___!\" But the word was too fuzzy to catch!", textSimple: "A fuzzy phone message! Vora couldn't hear the word.", emoji: "📞" },
        { text: "\"Was that 'fan'? Or was that 'pan'?\" wondered Vora. \"They sound so close together!\"", textSimple: "\"Fan? Or pan?\" wondered Vora.", emoji: "🤔" },
        { text: "Vora listened again, super closely, to the very first tiny sound of the word — a soft blow of air, not a little pop.", textSimple: "Vora listened again, very closely, to the first sound.", emoji: "👂" },
        { text: "\"A soft blowing sound means 'f' — it must be 'fan'!\" said Vora, and grabbed the right one.", textSimple: "\"It's 'fan'!\" said Vora, and got it right.", emoji: "🪭" },
        { text: "Computers that listen to speech — and people too — have to catch tiny sound differences like that. It's a kind of noticing, just with ears instead of eyes.", textSimple: "Listening for tiny sounds is noticing too — just with ears!", emoji: "🤖" },
      ],
      comprehensionQuestions: [
        { question: "What tiny sound clue helped Vora tell 'fan' apart from 'pan'?", discussionNote: "The soft blowing /f/ sound versus the popping /p/ sound at the very start of the word — noticing small sound differences is a kind of perception too." },
        { question: "Do you know any two English words that sound almost the same, but not quite?", discussionNote: "Open discussion — reinforces phonemic awareness, connecting to today's minimal-pairs listening game." },
      ],
    },
    {
      type: "movement",
      title: "Sound Actions: F or P!",
      instructions:
        "Call out each word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Fan — fan your face with your hand", emoji: "🪭" },
        { text: "Pan — mime flipping a pancake", emoji: "🍳" },
        { text: "Fine — give a big thumbs-up", emoji: "👍" },
        { text: "Pine — reach up tall like a tree", emoji: "🌲" },
        { text: "Fork — mime eating with a fork", emoji: "🍴" },
        { text: "Pork — rub your tummy like it's yummy", emoji: "🥓" },
      ],
    },
    {
      type: "activity",
      instructions: "Play each word once, and have kids point to or say the picture they heard. Since this is review, see how quickly the class remembers before repeating any pair they find hard.",
      config: {
        engine: "minimal_pairs",
        title: "Listen Closely: f or p?",
        targetSound: "/f/ vs /p/",
        teacherNote:
          "This is a quarter-checkpoint review of the foundations unit's Week 3 /f/ vs /p/ contrast — Korean has no /f/ phoneme, so it's commonly approximated with /p/ or /h/ in loanwords. Expect it to still need practice even after Week 3; that's normal for a sound with no Korean equivalent.",
        pairs: [
          { wordA: { text: "fan", emoji: "🪭" }, wordB: { text: "pan", emoji: "🍳" } },
          { wordA: { text: "fine", emoji: "👍" }, wordB: { text: "pine", emoji: "🌲" } },
          { wordA: { text: "fork", emoji: "🍴" }, wordB: { text: "pork", emoji: "🥓" } },
          {
            wordA: { text: "full", emoji: "🈵" },
            wordB: { text: "pull", emoji: "🚪" },
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[0],
    },
    {
      ...AI_OR_NOT_SETS[0],
    },
    {
      type: "team_relay",
      title: "Sound Relay: F or P!",
      instructions:
        "Split the class into two (or more) teams. Read each prompt aloud and have the next player from each team call out a word that fits — award a point for every correct answer, then move to the next prompt.",
      prompts: [
        { text: "Say a word that starts with the soft 'f' sound, like fan!", emoji: "🪭" },
        { text: "Say a word that starts with the popping 'p' sound, like pan!", emoji: "🍳" },
        { text: "Say a word that rhymes with 'fine'!", emoji: "👍" },
        { text: "Say a word that rhymes with 'fork'!", emoji: "🍴", minTrack: "explorers" },
      ],
    },
    {
      type: "chant",
      title: "Fan or Pan? Chant",
      instructions:
        "Say each call line clearly, then have the class echo the response back, listening for the difference.",
      lines: [
        { call: "Listen close — fan or pan?", response: "Fan, fan, fan — feel the air!" },
        { call: "Listen close — fine or pine?", response: "Fine, fine, fine — thumbs up there!" },
        {
          call: "Listen close — fork or pork?",
          response: "Fork, fork, fork — time to eat!",
          minTrack: "explorers",
        },
        {
          call: "Listen close, can you tell?",
          response: "F or P — we know them well!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Say \"fan\" and \"pan\" one more time — thumbs up if you can hear the difference now.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we reviewed the f sound from Week 3 — a great checkpoint before we meet two more tricky sounds later this year — acted out fan, pan, and more sound words, helped Vora follow clear step-by-step instructions, spotted real AI in everyday life, and chanted the f and p sounds together.",
      summarySimple: "Today we practiced the f and p sounds, moved our bodies, and sang a sound chant with Vora!",
    },
  ],
};
