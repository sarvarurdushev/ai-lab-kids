import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";
import { AI_OR_NOT_SETS, INSTRUCT_VORA_SCENARIOS } from "../aiLabBank";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m2_week1: Lesson = {
  ...meta("m2_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Show a world map or globe (or just sweep your arms wide and say \"the whole world!\") and ask: \"What country are we in right now?\" Let kids answer \"Korea!\" together.",
      prompt: "Hello, world! 🌍",
    },
    {
      type: "vocab_review",
      title: "Words We Know",
      teacherNote:
        "Month 1 (Space) is the only earlier month so far, so review all six of its words today. Read each one together BEFORE tapping — the tap is a rescue, not the activity. If the class needs the picture on more than two of the six, it's worth a full review lesson before we move much further into Month 2.",
      words: [
        { word: "star", emoji: "⭐", fromMonth: 1 },
        { word: "moon", emoji: "🌙", fromMonth: 1 },
        { word: "planet", emoji: "🪐", fromMonth: 1 },
        { word: "sun", emoji: "☀️", fromMonth: 1 },
        { word: "rocket", emoji: "🚀", fromMonth: 1 },
        { word: "astronaut", emoji: "👨‍🚀", fromMonth: 1, minTrack: "explorers" },
      ],
    },
    {
      type: "vocab",
      title: "World Words",
      words: [
        { word: "world", emoji: "🌍" },
        { word: "flag", emoji: "🚩" },
        { word: "food", emoji: "🍲" },
        { word: "dance", emoji: "💃" },
        { word: "music", emoji: "🎵" },
        { word: "clothes", emoji: "👘", minTrack: "explorers" },
      ],
    },
    {
      type: "listen_and_do",
      title: "Listen and Do!",
      instructions:
        "Give each command ONCE, at normal speed — don't repeat it right away. Wait for everyone to move before revealing which word it matched. These are brand-new words from today, so this checks whether the class understood them at all, not just whether they can say them back.",
      commands: [
        { text: "Point to a flag.", steps: 1, emoji: "🚩" },
        { text: "Wave your arm like a flag, then pretend to eat some food.", steps: 2, emoji: "🍲" },
        { text: "Stand up, dance in a circle, then freeze like the whole world spinning still.", steps: 3, emoji: "🌍" },
        {
          text: "Clap along to the music, spin around once, then pretend to put on new clothes.",
          steps: 3,
          emoji: "👘",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "Total Physical Response: the point is proving the class understood the brand-new world words BEFORE anyone has to produce a sentence with them, so don't translate into Korean even if a child hesitates — model the action bigger instead. If the whole class nails the 1-step command instantly, skip ahead to the 3-step ones.",
    },
    {
      type: "concept",
      title: "I'm from Korea!",
      bigIdeas: ["societal_impact"],
      lines: [
        { text: "I'm from Korea!" },
        {
          text: "There are so many other countries too — like Japan, and the USA.",
          textSimple: "There are many other countries too!",
        },
        {
          text: "People in other countries speak different languages — but a translator app uses AI to help everyone understand each other.",
          textSimple: "People speak different languages. A translator app helps everyone understand!",
        },
      ],
      teacherNote:
        "Start with \"I'm from Korea\" — every child can say this truthfully and proudly — before naming other countries. This is societal_impact's first appearance: keep the translator-app example concrete (e.g., \"like when a friend visits from another country and doesn't know Korean yet\").",
    },
    {
      type: "story",
      title: "Vora Meets a New Friend",
      teacherNote:
        "Read each panel aloud, pausing after panel 3 to ask what the class thinks happens when the two kids can't understand each other's words — the point is that AI translation helps people connect, it doesn't replace them talking.",
      panels: [
        {
          text: "A new student named Mina moved to Vora's town, all the way from another country.",
          textSimple: "Mina moved here from far away.",
          emoji: "🧳",
        },
        {
          text: "Mina wanted to say hello, but her words were different — Vora's friends didn't understand her language yet.",
          textSimple: "Mina spoke a different language.",
          emoji: "🗣️",
        },
        {
          text: "Vora held up a little translator app and Mina spoke into it.",
          textSimple: "Vora used a translator app.",
          emoji: "📱",
        },
        {
          text: "The app changed Mina's words into words everyone understood — and soon, Mina and her new friends were playing together!",
          textSimple: "The app helped everyone understand! They played together.",
          emoji: "🤝",
        },
        {
          text: "The app didn't make new friends by itself — it just helped the words travel between two kids who already wanted to be friends.",
          textSimple: "The app just helped the words. The kids did the rest!",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "What problem did the translator app solve for Mina and her new friends?",
          discussionNote: "It changed Mina's words into words her new friends could understand, so they could talk and play together even though they spoke different languages.",
        },
        {
          question: "Have you ever met someone who speaks a different language? How did you understand each other?",
          discussionNote: "Open discussion — point out that gestures, pictures, and patience work too, not just apps.",
        },
      ],
    },
    {
      type: "movement",
      title: "World Words Actions!",
      instructions:
        "Call out each world word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "World — spin around slowly with arms out wide", emoji: "🌍" },
        { text: "Flag — wave your arm high like a flag", emoji: "🚩" },
        { text: "Food — pretend to eat with a spoon", emoji: "🍲" },
        { text: "Dance — wiggle and dance in place", emoji: "💃" },
        { text: "Music — clap your hands to the beat", emoji: "🎵" },
        { text: "Clothes — pretend to put on a hat", emoji: "👘", minTrack: "explorers" },
      ],
    },
    {
      type: "activity",
      instructions: "As a class, decide together where each picture goes before anyone taps — talk through why kimchi and bibimbap are Korean food.",
      config: {
        engine: "train_the_robot",
        title: "From Korea or From Another Country?",
        labelA: "From Korea",
        labelB: "From Another Country",
        emojiA: "🇰🇷",
        emojiB: "🌎",
        items: [
          { word: "kimchi", emoji: "🥬", bucket: "a" },
          { word: "bibimbap", emoji: "🍚", bucket: "a" },
          { word: "hanbok", emoji: "👘", bucket: "a", minTrack: "explorers" },
          { word: "pizza", emoji: "🍕", bucket: "b" },
          { word: "taco", emoji: "🌮", bucket: "b" },
          { word: "sushi", emoji: "🍣", bucket: "b" },
          { word: "baguette", emoji: "🥖", bucket: "b" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[1],
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[1],
    },
    {
      type: "stand_sit",
      title: "From Korea or Not — True or False!",
      instructions:
        "Read each statement. Kids STAND UP if they think it's true, and crouch down low if they think it's false. Reveal the answer, then give the short explanation before moving on.",
      statements: [
        { text: "Every country has its own flag.", isTrue: true, explanation: "Yes! Flags help us tell countries apart.", emoji: "🚩" },
        { text: "Everyone in the world eats the exact same food.", isTrue: false, explanation: "No — different countries have different favorite foods!", emoji: "🍲" },
        { text: "People all around the world speak the same language.", isTrue: false, explanation: "No — there are many different languages!", emoji: "🗣️" },
        {
          text: "A translator app can help people who speak different languages understand each other.",
          isTrue: true,
          explanation: "Yes! It changes words from one language into another.",
          emoji: "📱",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "partner_talk",
      title: "Where Are You From?",
      frame: "I'm from ___.",
      frameSimple: "I'm from ___.",
      cards: [
        { prompt: "Korea", emoji: "🇰🇷", sampleAnswer: "I'm from Korea." },
        { prompt: "Japan", emoji: "🇯🇵", sampleAnswer: "I'm from Japan." },
        { prompt: "the USA", emoji: "🇺🇸", sampleAnswer: "I'm from the USA." },
        { prompt: "another country", emoji: "🌍", sampleAnswer: "I'm from another country!", minTrack: "explorers" },
      ],
      secondsPerTurn: 20,
      teacherNote:
        "Partner A flips a card and pretends to be from that country, saying 'I'm from ___' — Partner B listens, then they swap who's talking. Every pair talks at once, so circulate and listen rather than running this as a whole-class drill; this is the same 'I'm from ___' sentence Mina's new friends needed help with in today's story, just now every child gets to say it themselves.",
    },
    {
      type: "draw_and_label",
      title: "Draw a World Word",
      instructions: "Draw a picture of one of today's world words, then label it using a word from the word bank.",
      instructionsSimple: "Draw it! Write the word.",
      wordBank: [
        { word: "world", emoji: "🌍" },
        { word: "flag", emoji: "🚩" },
        { word: "food", emoji: "🍲" },
        { word: "dance", emoji: "💃" },
        { word: "music", emoji: "🎵" },
        { word: "clothes", emoji: "👘", minTrack: "explorers" },
      ],
      exampleNote:
        "A big red flag drawn tall in the middle of the page, with the word 'flag' copied underneath it in large letters straight from the word bank rather than spelled from memory.",
      minutes: 4,
      teacherNote:
        "Papers and pencils out. Keep the word bank on screen the whole time — the point is confident copying, not a spelling test. Circulate and, if a label doesn't match the drawing, point back at the word bank rather than telling them the right word.",
    },
    {
      type: "chant",
      title: "World Words Chant",
      instructions:
        "Say each call line and let kids answer with the response. The whole class echoes the response line back to you.",
      lines: [
        { call: "Where are you from, from, from?", response: "I'm from Korea, my home!" },
        { call: "What flies up high and waves so bright?", response: "It's our flag, up so high!" },
        {
          call: "What do we eat that tastes so great?",
          response: "That's our food, on every plate!",
          minTrack: "explorers",
        },
        { call: "What do we do to a happy beat?", response: "We dance, we dance, with happy feet!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "\"I'm from ___.\" — ask one student to say this about themselves.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned six world words, acted them out, practiced saying \"I'm from Korea,\" learned that translator apps use AI to help people understand each other, practiced spotting real AI in everyday life, helped Vora follow clear instructions, and chanted about the world together.",
      summarySimple: "Today we learned world words, said \"I'm from Korea,\" and sang a world chant with Vora!",
      homework: "Tell a family member \"I'm from Korea\" in English tonight.",
    },
  ],
};

export const m2_week2: Lesson = {
  ...meta("m2_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Mime zipping up a suitcase and ask: \"What do we do first when we go on a trip?\" Take a few quick guesses before today's game.",
      prompt: "Let's go on a trip! ✈️",
    },
    {
      type: "vocab_review",
      title: "Words We Know",
      teacherNote:
        "Same six Space words from Month 1, still needing retrieval — today drill four of them. Read each word chorally BEFORE tapping; the tap only rescues a stuck answer, it isn't the activity. If more than one word needs the picture, spend the extra minute here before moving on to today's trip sequence.",
      words: [
        { word: "moon", emoji: "🌙", fromMonth: 1 },
        { word: "rocket", emoji: "🚀", fromMonth: 1 },
        { word: "star", emoji: "⭐", fromMonth: 1 },
        { word: "astronaut", emoji: "👨‍🚀", fromMonth: 1, minTrack: "explorers" },
      ],
    },
    {
      type: "listen_and_do",
      title: "Listen and Do!",
      instructions:
        "Give each command ONCE, at normal speed — don't repeat it right away. Wait for everyone to finish moving before saying it again. This checks whether the class understands today's trip steps as listeners, before they have to put the steps in order themselves.",
      commands: [
        { text: "Pretend to pack your bag.", steps: 1, emoji: "🧳" },
        { text: "March in place to the airport, then wave hello.", steps: 2, emoji: "🛫" },
        { text: "Stretch your arms out like a plane, fly around your seat, then sit back down.", steps: 3, emoji: "✈️" },
        {
          text: "Stand up, pretend to try new food, then give a big thumbs up.",
          steps: 3,
          emoji: "🍜",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "Total Physical Response, and a preview of today's sequencing game — proving the class can follow the trip steps by listening alone, before they have to order the steps themselves. If the whole class nails the 1-step command instantly, skip ahead to the 3-step ones.",
    },
    {
      type: "concept",
      title: "Vora Follows Steps",
      bigIdeas: ["reasoning"],
      lines: [
        {
          text: "I do things in order, one step at a time — first, next, then, last.",
          textSimple: "I do things in order. First, next, then, last!",
        },
        { text: "Let's put a pretend trip in order together!" },
      ],
      teacherNote:
        "Quick reminder before the sequencing game — following ordered steps is Representation & Reasoning, the same skill behind an algorithm. Keep this brief; the game does the teaching.",
    },
    {
      type: "story",
      title: "Vora Packs for a Trip",
      teacherNote:
        "Read each panel aloud, pausing after panel 3 to ask what should come next before revealing panel 4 — the whole point is that skipping a step causes a problem, just like in the instruct_vora activity.",
      panels: [
        {
          text: "Vora was so excited for a trip that it packed its bag and ran straight to the plane!",
          textSimple: "Vora packed and ran to the plane!",
          emoji: "🧳",
        },
        {
          text: "But wait — Vora forgot to go to the airport first! The plane wasn't even there.",
          textSimple: "Oops! No airport, no plane!",
          emoji: "😳",
        },
        {
          text: "\"I skipped a step,\" said Vora. \"What should I have done in order?\"",
          textSimple: "\"I skipped a step!\" said Vora.",
          emoji: "🤔",
        },
        {
          text: "Vora tried again: pack the bag, go to the airport, THEN fly on the plane — first, next, then.",
          textSimple: "Pack, airport, THEN fly. In order!",
          emoji: "✈️",
        },
        {
          text: "Doing things in the right order isn't magic — it just means thinking through each step, one at a time, before you jump ahead.",
          textSimple: "No magic — just steps, in order!",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "What went wrong when Vora skipped a step?",
          discussionNote: "It tried to fly before going to the airport — steps done out of order don't work, just like in today's sequencing game.",
        },
        {
          question: "Can you think of something you do at home that has to happen in a certain order?",
          discussionNote: "Open discussion — brushing teeth before bed, putting on socks before shoes, etc.",
        },
      ],
    },
    {
      type: "movement",
      title: "Pretend Trip Actions!",
      instructions:
        "Call out each trip step and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Pack your bag — pretend to zip a suitcase", emoji: "🧳" },
        { text: "Go to the airport — march in place", emoji: "🛫" },
        { text: "Fly on a plane — stretch your arms out like wings", emoji: "✈️" },
        { text: "Say hello — wave big and smile", emoji: "👋" },
        { text: "Try new food — rub your tummy and say yum", emoji: "🍜" },
      ],
    },
    {
      type: "activity",
      instructions: "Kids take turns tapping the next step. Read each step aloud with its sequencing word (\"First, pack your bag...\") as it's placed. Then play a second game to reinforce it.",
      config: {
        engine: "sequence_builder",
        title: "A Pretend Trip",
        steps: [
          { text: "Pack your bag", emoji: "🧳" },
          { text: "Go to the airport", emoji: "🛫" },
          { text: "Fly on a plane", emoji: "✈️" },
          { text: "Say hello!", emoji: "👋" },
          { text: "Try new food", emoji: "🍜", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Kids take turns flipping two cards. Say the English word out loud together whenever a word card flips.",
      config: {
        engine: "memory_match",
        title: "World Word Match",
        pairs: [
          { word: "world", emoji: "🌍" },
          { word: "flag", emoji: "🚩" },
          { word: "food", emoji: "🍲" },
          { word: "dance", emoji: "💃" },
          { word: "music", emoji: "🎵" },
          { word: "clothes", emoji: "👘", minTrack: "explorers" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[1],
    },
    {
      type: "class_vote",
      title: "Where Would You Like to Visit?",
      instructions:
        "Read the question aloud. Let kids vote by raising their hands for their favorite choice, or discuss as a class why they picked it.",
      question: "If you could take a pretend trip anywhere, where would you go?",
      questionSimple: "Where do you want to go on a pretend trip?",
      options: [
        { text: "The beach", emoji: "🏖️" },
        { text: "The mountains", emoji: "⛰️" },
        { text: "Another country", emoji: "🌍" },
        { text: "Space", emoji: "🚀" },
      ],
    },
    {
      type: "partner_talk",
      title: "Let's Go!",
      frame: "Let's ___!",
      cards: [
        { prompt: "pack our bag", emoji: "🧳", sampleAnswer: "Let's pack our bag!" },
        { prompt: "go to the airport", emoji: "🛫", sampleAnswer: "Let's go to the airport!" },
        { prompt: "fly on a plane", emoji: "✈️", sampleAnswer: "Let's fly on a plane!" },
        { prompt: "try new food", emoji: "🍜", sampleAnswer: "Let's try new food!", minTrack: "explorers" },
      ],
      secondsPerTurn: 20,
      teacherNote:
        "Partner A flips a card and says 'Let's ___!' about the trip step — Partner B mimes doing it, then they swap who's talking. Circulate to make sure both partners get a turn as the speaker, not just as the mimer — this reuses the exact phrase from today's warmup, 'Let's go on a trip!'",
    },
    {
      type: "role_play",
      title: "Off to the Airport",
      setting: "At the airport, right before a big trip!",
      roles: ["Traveler", "Helper"],
      exchanges: [
        { role: 0, line: "I packed my bag!", emoji: "🧳" },
        { role: 1, line: "Great! Let's go to the airport!", emoji: "🛫" },
        { role: 0, line: "I'm on the plane!", emoji: "✈️" },
        { role: 1, line: "Say hello to your new friends!", emoji: "👋" },
      ],
      teacherNote:
        "Pairs rehearse both parts, then a volunteer pair performs for the class. This is the same trip sequence from today's sequence_builder game, now acted out with real lines instead of tapped in order — encourage big gestures for the suitcase pack and the plane wings.",
    },
    {
      type: "chant",
      title: "Pretend Trip Chant",
      instructions:
        "Say each call line and act out the step together. The whole class echoes the response line back to you.",
      lines: [
        { call: "What do we do first, first, first?", response: "First we pack our bag, our bag!" },
        { call: "What comes next, tell me true?", response: "Next we go, the airport too!" },
        {
          call: "Then what do we do up high?",
          response: "Then we fly, up in the sky!",
          minTrack: "explorers",
        },
        { call: "Last of all, what do we say?", response: "Say hello — hooray, hooray!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "\"First we pack your bag, next we...\" — have a student finish the whole sequence out loud.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — ordering the steps of a pretend trip, acting out each step, matching world words to pictures, helping Vora follow clear step-by-step instructions, and chanting the trip steps together.",
      summarySimple: "Today we packed a pretend trip, moved our bodies, and sang a trip chant with Vora!",
    },
  ],
};

export const m2_week3: Lesson = {
  ...meta("m2_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Hold up an imaginary card and flip it dramatically. Ask: \"Ready to find matching pairs?\" Take a quick cheer from the class before starting.",
      prompt: "Let's find a match! 🃏",
    },
    {
      type: "vocab_review",
      title: "Words We Know",
      teacherNote:
        "Five more Space words from Month 1 for quick recall — say each one chorally before anyone taps. The tap is only for words the class truly can't retrieve; resist translating into Korean even if a child hesitates, and model the word bigger instead.",
      words: [
        { word: "sun", emoji: "☀️", fromMonth: 1 },
        { word: "planet", emoji: "🪐", fromMonth: 1 },
        { word: "moon", emoji: "🌙", fromMonth: 1 },
        { word: "star", emoji: "⭐", fromMonth: 1 },
        { word: "rocket", emoji: "🚀", fromMonth: 1, minTrack: "explorers" },
      ],
    },
    {
      type: "listen_and_do",
      title: "Listen and Do!",
      instructions:
        "Give each command ONCE, at normal speed — don't repeat it right away. Wait for everyone to move before revealing which word matched. These are the same world words from the matching game, now checked by listening alone instead of tapping a card.",
      commands: [
        { text: "Point to the music.", steps: 1, emoji: "🎵" },
        { text: "Clap to the music, then wave your arm like a flag.", steps: 2, emoji: "🚩" },
        { text: "Spin around like the whole world, dance twice, then freeze.", steps: 3, emoji: "🌍" },
        {
          text: "Pretend to eat some food, put on new clothes, then dance in a circle.",
          steps: 3,
          emoji: "👘",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "Total Physical Response: this is the class's third exposure to these world words (production in Week 1, sequencing in Week 2, now listening), so expect faster, more confident movement than Week 1's listen_and_do. If the whole class nails the 1-step command instantly, skip ahead to the 3-step ones.",
    },
    {
      type: "concept",
      title: "Vora Remembers",
      bigIdeas: ["learning"],
      lines: [
        {
          text: "The more I see a word and picture together, the better I remember them.",
          textSimple: "Practice helps me remember!",
        },
        { text: "Let's practice remembering world words together!" },
      ],
      teacherNote:
        "Brief reminder before the game — repeated exposure is how both Vora and kids get better at recognizing something, the Learning big idea. Keep it to a couple of lines; the matching game is the real practice.",
    },
    {
      type: "story",
      title: "Vora Remembers the Whole Trip",
      teacherNote:
        "Read each panel aloud, emphasizing that Vora needed several tries before it could remember the whole sequence — link this back to the memory game's repeated flips.",
      panels: [
        {
          text: "The first time Vora tried to remember the trip steps, it mixed up the order.",
          textSimple: "First try: Vora mixed up the order.",
          emoji: "😵",
        },
        {
          text: "Vora practiced the steps again — pack, airport, fly, say hello.",
          textSimple: "Vora practiced again and again.",
          emoji: "🔁",
        },
        {
          text: "After a few tries, Vora said all four steps perfectly, in the right order, without stopping to think.",
          textSimple: "Then Vora got it right every time!",
          emoji: "🎯",
        },
        {
          text: "\"Practice made it stick,\" said Vora, \"just like flipping the same word cards again and again.\"",
          textSimple: "\"Practice made it stick!\" said Vora.",
          emoji: "🃏",
        },
        {
          text: "Remembering isn't magic — it's what happens after you see or do something enough times, whether you're Vora or a kid playing memory match.",
          textSimple: "No magic — just practice, again and again!",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "What helped Vora finally remember all the trip steps in order?",
          discussionNote: "Practicing them again and again — repetition is what makes memory stick, for Vora and for us.",
        },
        {
          question: "What's something you had to practice a few times before you remembered it perfectly?",
          discussionNote: "Open discussion — tying shoes, a song, a dance move, spelling your name.",
        },
      ],
    },
    {
      type: "movement",
      title: "World Words on the Move!",
      instructions:
        "Call out each world word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "World — spin around slowly with arms out wide", emoji: "🌍" },
        { text: "Flag — wave your arm high like a flag", emoji: "🚩" },
        { text: "Food — pretend to eat with a spoon", emoji: "🍲" },
        { text: "Dance — wiggle and dance in place", emoji: "💃" },
        { text: "Music — clap your hands to the beat", emoji: "🎵" },
        { text: "Clothes — pretend to put on a hat", emoji: "👘" },
      ],
    },
    {
      type: "activity",
      instructions: "Kids take turns flipping two cards. Say the English word out loud together whenever a word card flips. Then play a second game to reinforce it.",
      config: {
        engine: "memory_match",
        title: "World Word Match",
        pairs: [
          { word: "world", emoji: "🌍" },
          { word: "flag", emoji: "🚩" },
          { word: "food", emoji: "🍲" },
          { word: "dance", emoji: "💃" },
          { word: "music", emoji: "🎵" },
          { word: "clothes", emoji: "👘", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Kids take turns tapping the next step. Read each step aloud with its sequencing word (\"First, pack your bag...\") as it's placed.",
      config: {
        engine: "sequence_builder",
        title: "A Pretend Trip",
        steps: [
          { text: "Pack your bag", emoji: "🧳" },
          { text: "Go to the airport", emoji: "🛫" },
          { text: "Fly on a plane", emoji: "✈️" },
          { text: "Say hello!", emoji: "👋" },
          { text: "Try new food", emoji: "🍜", minTrack: "explorers" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[2],
    },
    {
      type: "team_relay",
      title: "World Words Relay!",
      instructions:
        "Split the class into two teams. Read each prompt aloud, then point to one team to shout out an answer before switching to the other team for the next prompt. Any reasonable answer counts!",
      prompts: [
        { text: "Name something you'd pack for a trip!", emoji: "🧳" },
        { text: "Name a food from another country!", emoji: "🍕" },
        { text: "Name something people wave at a parade!", emoji: "🚩" },
        { text: "Name something you might hear at a festival!", emoji: "🎵", minTrack: "explorers" },
        { text: "Name something you do to say hello!", emoji: "👋" },
      ],
    },
    {
      type: "partner_talk",
      title: "What's This?",
      frame: "That's the ___!",
      frameSimple: "The ___!",
      cards: [
        { prompt: "world", emoji: "🌍", sampleAnswer: "That's the world!" },
        { prompt: "flag", emoji: "🚩", sampleAnswer: "That's the flag!" },
        { prompt: "food", emoji: "🍲", sampleAnswer: "That's the food!" },
        { prompt: "music", emoji: "🎵", sampleAnswer: "That's the music!", minTrack: "explorers" },
      ],
      secondsPerTurn: 20,
      teacherNote:
        "Partner A points to a card and asks 'What's this?' — Partner B answers 'That's the ___!' from the word bank, then they swap. Same words as today's memory match, just spoken out loud instead of tapped — circulate and listen for confident production rather than perfect pronunciation.",
    },
    {
      type: "role_play",
      title: "At the World Festival",
      setting: "At a fun world festival with flags, food, and music everywhere!",
      roles: ["Friend A", "Friend B"],
      exchanges: [
        { role: 0, line: "Look, a flag!", emoji: "🚩" },
        { role: 1, line: "I like the music!", emoji: "🎵" },
        { role: 0, line: "Let's dance!", emoji: "💃" },
        { role: 1, line: "This food is yummy!", emoji: "🍲" },
      ],
      teacherNote:
        "Pairs rehearse both parts, then a volunteer pair performs for the class. These are the exact words from today's matching game and relay, now spoken in a real exchange instead of just recalled — encourage big pointing and dancing gestures to match the lines.",
    },
    {
      type: "chant",
      title: "Off We Go Chant!",
      instructions:
        "Say each call line and act out the step together. The whole class echoes the response line back to you.",
      lines: [
        { call: "What's the first thing we should do?", response: "Pack our bag, me and you!" },
        { call: "Next, oh next, where do we go?", response: "To the airport, off we go!" },
        {
          call: "Then, oh then, up in the air?",
          response: "We fly and fly, without a care!",
          minTrack: "explorers",
        },
        { call: "Last of all, what do we say?", response: "Hello, hello — hooray, hooray!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Ask a pair: \"Which one did you match?\" and have them answer with the English word.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — matching world words to pictures, acting them out, ordering the steps of a pretend trip, spotting real AI in everyday life, and chanting our pretend trip together.",
      summarySimple: "Today we played a matching game, moved our bodies, and sang a chant with Vora!",
    },
  ],
};

export const m2_week4: Lesson = {
  ...meta("m2_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Point to yourself and say \"I'm from Korea!\" with a big proud smile. Ask kids to point to themselves too.",
      prompt: "Where are you from? 🇰🇷",
      promptSimple: "Point to yourself! Say Korea! 🇰🇷",
    },
    {
      type: "vocab_review",
      title: "Words We Know",
      teacherNote:
        "Last quick pass at the Space words before we move into Month 3 — read each one together, and only tap to rescue a stuck answer. If 'astronaut' still needs the picture every single time, it's worth a short full review before Month 3 starts.",
      words: [
        { word: "star", emoji: "⭐", fromMonth: 1 },
        { word: "sun", emoji: "☀️", fromMonth: 1 },
        { word: "planet", emoji: "🪐", fromMonth: 1 },
        { word: "astronaut", emoji: "👨‍🚀", fromMonth: 1, minTrack: "explorers" },
      ],
    },
    {
      type: "listen_and_do",
      title: "Listen and Do!",
      instructions:
        "Give each command ONCE, at normal speed — don't repeat it right away. Wait for everyone to move before saying it again. This checks that the class understands today's proud, standing-tall actions before everyone says the sentence out loud themselves.",
      commands: [
        { text: "Point to yourself.", steps: 1, emoji: "👉" },
        { text: "Stand up tall, then give a big thumbs up.", steps: 2, emoji: "🇰🇷" },
        { text: "Point to yourself, stretch your arms out wide, then stand tall and proud.", steps: 3, emoji: "🦸" },
        {
          text: "Stand up, wave hello to a friend, then take a proud bow.",
          steps: 3,
          emoji: "👋",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "Total Physical Response: the point is proving the class understands the actions BEFORE anyone has to say 'I'm from Korea' out loud, so keep it playful and big rather than translating into Korean if a child hesitates. If the whole class nails the 1-step command instantly, skip ahead to the 3-step ones.",
    },
    {
      type: "concept",
      title: "I'm from Korea!",
      bigIdeas: [],
      lines: [
        { text: "I'm from Korea. That's my country!" },
        {
          text: "\"I'm\" is a short way to say \"I am\" — two words squished into one.",
          textSimple: "\"I'm\" means \"I am.\"",
        },
        { text: "Korean doesn't squish words together like that, so let's practice saying \"I'm\" as one quick sound.", minTrack: "explorers" },
      ],
      teacherNote:
        "Call out the contraction briefly (\"I'm\" = \"I am\") since Korean has no equivalent — model it as one chunk, not two words squeezed together, then move straight into building the sentence.",
    },
    {
      type: "story",
      title: "Vora Says Where It's From",
      teacherNote:
        "Read each panel aloud. Pause after panel 2 to ask kids to guess what Vora says next, before revealing panel 3 — model saying \"I'm from Korea\" with the same pride Vora shows.",
      panels: [
        {
          text: "Vora visited a video call with friends from all over the world — Japan, Brazil, and Kenya.",
          textSimple: "Vora video-called friends from all over.",
          emoji: "💻",
        },
        {
          text: "One by one, each friend proudly said where they were from — and a translator app helped every word cross the screen.",
          textSimple: "Everyone said where they're from. A translator app helped!",
          emoji: "📱",
        },
        {
          text: "When it was Vora's turn, it said proudly, \"I'm from Korea!\"",
          textSimple: "\"I'm from Korea!\" said Vora, proudly.",
          emoji: "🇰🇷",
        },
        {
          text: "Everyone cheered, even though they lived in different countries and spoke different languages.",
          textSimple: "Everyone cheered together!",
          emoji: "🎉",
        },
        {
          text: "The app helped the words travel, but the pride in saying \"I'm from Korea\" — that part was all Vora's.",
          textSimple: "The app helped the words. The pride was Vora's own!",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "How did Vora's friends from other countries understand what Vora said?",
          discussionNote: "A translator app helped change the words — connecting back to how AI translation helps people from different countries understand each other.",
        },
        {
          question: "How do YOU feel when you say \"I'm from Korea\"?",
          discussionNote: "Open discussion — invite a few kids to share, reinforcing pride in identity.",
        },
      ],
    },
    {
      type: "movement",
      title: "Proud to Be From Korea!",
      instructions:
        "Call out each phrase and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "I'm — point to yourself with a big smile", emoji: "👉" },
        { text: "From — stretch your arms out wide", emoji: "🌍" },
        { text: "Korea — stand tall and give a thumbs up", emoji: "🇰🇷" },
        { text: "Proud — hands on your hips like a superhero", emoji: "🦸" },
        { text: "Hello — wave big to a friend", emoji: "👋" },
      ],
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, left to right. Then have every kid stand up, one at a time, and say \"I'm from Korea!\" out loud.",
      config: {
        engine: "sentence_builder",
        title: "I'm from Korea.",
        words: [
          { text: "I'm", role: "subject" },
          { text: "from", role: "other" },
          { text: "Korea", role: "object" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[2],
    },
    {
      ...AI_OR_NOT_SETS[2],
    },
    {
      type: "stand_sit",
      title: "Proud to Be From Korea — True or False!",
      instructions:
        "Read each statement. Kids STAND UP if they think it's true, and crouch down low if they think it's false. Reveal the answer, then give the short explanation before moving on.",
      statements: [
        { text: "Everyone in this class can say \"I'm from Korea.\"", isTrue: true, explanation: "Yes! We can all say it proudly, together.", emoji: "🇰🇷" },
        { text: "\"I'm\" is a short way of saying two words.", isTrue: true, explanation: "Yes! \"I'm\" is short for \"I am.\"", emoji: "✂️" },
        { text: "Every country in the world speaks Korean.", isTrue: false, explanation: "No — different countries speak different languages!", emoji: "🌍" },
        {
          text: "A translator app could help you say hello to a friend from another country.",
          isTrue: true,
          explanation: "Yes! It helps translate words between languages.",
          emoji: "📱",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "partner_talk",
      title: "Where Are You From?",
      frame: "I'm from ___.",
      frameSimple: "I'm from ___.",
      cards: [
        { prompt: "Korea", emoji: "🇰🇷", sampleAnswer: "I'm from Korea." },
        { prompt: "Japan", emoji: "🇯🇵", sampleAnswer: "I'm from Japan." },
        { prompt: "Brazil", emoji: "🇧🇷", sampleAnswer: "I'm from Brazil." },
        { prompt: "Kenya", emoji: "🇰🇪", sampleAnswer: "I'm from Kenya.", minTrack: "explorers" },
      ],
      secondsPerTurn: 20,
      teacherNote:
        "Partner A flips a card and says 'I'm from ___' as that country, standing tall and proud like Vora did in today's story — Partner B listens, then they swap. Every pair talks at once, so circulate rather than running this whole-class; the goal is every child producing 'I'm from ___' with confidence, whether it's true (Korea) or pretend (Japan, Brazil, Kenya).",
    },
    {
      type: "role_play",
      title: "A Video Call with a New Friend",
      setting: "A video call with a new friend from another country!",
      roles: ["Vora", "New Friend"],
      exchanges: [
        { role: 0, line: "Hi! I'm from Korea!", emoji: "🇰🇷" },
        { role: 1, line: "Hi! I'm from Japan!", emoji: "🇯🇵" },
        { role: 0, line: "Nice to meet you!", emoji: "👋" },
        { role: 1, line: "Nice to meet you too!", emoji: "😊" },
      ],
      teacherNote:
        "Pairs rehearse both parts, then a volunteer pair performs for the class — this is the exact video-call scene from today's story, acted out live. Encourage a big proud voice for 'I'm from Korea,' the same pride Vora showed on the call.",
    },
    {
      type: "chant",
      title: "I'm From Korea Chant",
      instructions:
        "Say each call line with a big voice. The whole class echoes the response line back to you.",
      lines: [
        { call: "Where are you from, tell me so?", response: "I'm from Korea, that's where I go!" },
        { call: "Say it once, say it loud!", response: "I'm from Korea, and I'm proud!" },
        {
          call: "Stand up tall, don't be shy!",
          response: "I'm from Korea — reach for the sky!",
          minTrack: "explorers",
        },
        { call: "One more time, all together now!", response: "I'm from Korea — take a bow!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "\"I'm from ___.\" — each kid says this with confidence, standing tall.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today every kid stood up and proudly said \"I'm from Korea!\" — a sentence that's true for all of us — acted it out with big proud actions, helped Vora follow clear instructions, spotted real AI in everyday life, and chanted it together.",
      summarySimple: "Today we stood tall and said \"I'm from Korea!\" together with Vora!",
      homework: "Say \"I'm from Korea\" to a family member tonight, standing tall and proud.",
    },
  ],
};
