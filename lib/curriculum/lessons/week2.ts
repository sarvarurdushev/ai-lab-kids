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
      teacherScript: "Make an animal sound (like a lion's roar) and ask \"What animal is this?\" before revealing the word.",
      prompt: "What animal is this? 🦁",
      promptSimple: "Guess the animal! 🦁",
    },
    {
      type: "vocab",
      title: "Animals",
      words: [
        { word: "cat", emoji: "🐱" },
        { word: "dog", emoji: "🐶" },
        { word: "lion", emoji: "🦁" },
        { word: "rabbit", emoji: "🐰" },
        { word: "bird", emoji: "🐦" },
        { word: "fish", emoji: "🐟" },
      ],
    },
    {
      type: "concept",
      title: "One or Many",
      bigIdeas: [],
      lines: [
        { text: "One cat. Two cats!" },
        {
          text: "In English, we add -s when there's more than one.",
          textSimple: "We add -s for more than one!",
        },
      ],
      teacherNote:
        "Korean doesn't mark plurals by default, so this needs extra repetition — have kids echo \"one cat, two cats\" as a chant with claps on the -s.",
    },
    {
      type: "story",
      title: "Vora Counts the Safari Animals",
      teacherNote:
        "Read slowly and pause on panel 3 to let kids guess how many lions are in the photo before Vora announces the answer — this sets up today's plural -s practice with real content instead of just drilling grammar.",
      panels: [
        {
          text: "Vora looked at a photo from a safari — animals everywhere, all bunched together!",
          textSimple: "Vora saw a safari photo. Lots of animals!",
          emoji: "🦁",
        },
        {
          text: "\"How many lions are there?\" Vora wondered. \"I can't just guess — I have to look at each one.\"",
          textSimple: "\"How many lions?\" Vora looked at each one.",
          emoji: "🔍",
        },
        {
          text: "One lion... two lions... three lions! Vora counted each one carefully, one at a time.",
          textSimple: "One, two, three lions! Vora counted carefully.",
          emoji: "🔢",
        },
        {
          text: "\"Three lions,\" said Vora. \"When there's more than one, English adds an -s: lion becomes lions!\"",
          textSimple: "\"Three lions!\" said Vora. More than one gets an -s!",
          emoji: "📝",
        },
        {
          text: "Vora wasn't magic — it just counted one by one, slowly and carefully, the exact same way you count on your fingers.",
          textSimple: "No magic! Vora just counted one by one.",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "How did Vora figure out there were three lions instead of just guessing?",
          discussionNote: "It counted each one carefully, one at a time — not a magic guess, just careful counting.",
        },
        {
          question: "Can you count something in this room and tell a partner 'one ___' or if there's more, add the -s?",
          discussionNote: "Open practice — encourage kids to physically point and count, reinforcing the singular/plural pattern from today's lesson.",
        },
      ],
    },
    {
      type: "movement",
      title: "Animal Actions!",
      instructions:
        "Call out each animal word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Cat — meow and lick your paw", emoji: "🐱" },
        { text: "Dog — pant and wag your tail", emoji: "🐶" },
        { text: "Lion — roar loud and show your claws", emoji: "🦁" },
        { text: "Rabbit — hop up and down", emoji: "🐰" },
        { text: "Bird — flap your arms and tweet", emoji: "🐦" },
        { text: "Fish — wiggle like you're swimming", emoji: "🐟" },
      ],
    },
    {
      type: "team_relay",
      title: "Animal Relay: One or Many?",
      instructions:
        "Split the class into teams. Read each prompt aloud and have the next team answer together before moving to the next team. Encourage them to add the -s when there's more than one!",
      prompts: [
        { text: "Name one animal from today — just one!", emoji: "🐱" },
        { text: "Now say it with 'two' in front — don't forget the -s!", emoji: "🐶" },
        { text: "Roar like a lion — one lion, or many lions?", emoji: "🦁" },
        { text: "Hop like a rabbit — say 'one rabbit' or 'three rabbits'!", emoji: "🐰" },
        { text: "Flap like a bird — how many birds are flying?", emoji: "🐦", minTrack: "explorers" },
      ],
    },
    {
      type: "chant",
      title: "One or Many Chant",
      instructions:
        "Say each call line and hold up one finger or several fingers to match. The whole class echoes the response line back to you.",
      lines: [
        { call: "One cat, one cat, what do you see?", response: "One cat, one cat, next to me!" },
        { call: "Two dogs, two dogs, hear them bark!", response: "Two dogs, two dogs, in the park!" },
        {
          call: "Three birds, three birds, up so high,",
          response: "Three birds, three birds, in the sky!",
          minTrack: "explorers",
        },
        { call: "One or many, what's the rule?", response: "Add an -s — that's the English rule!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Hold up fingers and ask kids to say \"one dog\" / \"three dogs,\" etc.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we learned six animal words and how to make them plural with -s, acted out the animals, and chanted about one and many together.",
      summarySimple: "Today we learned animal words and how to say more than one!",
      homework: "Find one animal picture at home and say its name in English, singular and plural.",
    },
  ],
};

export const w2d2_how_does_vora_see: Lesson = {
  ...meta("w2d2_how_does_vora_see"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask: \"Is a lion an animal or a vehicle?\" Kids should answer easily — this warms up the category words before the harder sort.",
      prompt: "Animal or vehicle?",
    },
    {
      type: "concept",
      title: "How Does Vora See?",
      bigIdeas: ["perception", "learning"],
      lines: [
        {
          text: "I learn by looking at LOTS of examples, not just one.",
          textSimple: "I learn by looking at lots of examples.",
        },
        {
          text: "You show me examples, and I try to learn the pattern.",
          textSimple: "You show me examples. I try to learn!",
        },
        {
          text: "Sometimes I still guess wrong at first. That's how learning works!",
          textSimple: "Sometimes I guess wrong. That's okay!",
        },
      ],
      teacherNote:
        "This is the AI-for-Oceans-style train/guess loop, now revisited from Week 1 Day 3 with a new category — watch whether kids explain the \"Vora can be wrong\" idea in their own words before the activity.",
    },
    {
      type: "story",
      title: "Vora Learns to Tell Animals from Vehicles",
      teacherNote:
        "Pause after panel 2 to ask the class 'Do YOU think Vora is right?' before revealing that it guessed wrong — the whole point is that mistakes are a normal part of learning, exactly like the concept segment above.",
      panels: [
        {
          text: "Vora had sorted lots of pictures: cats, dogs, cars, buses. Easy!",
          textSimple: "Vora sorted cats, dogs, cars, and buses.",
          emoji: "🐾",
        },
        {
          text: "Then a new picture popped up — something flying high in the sky. \"A vehicle!\" guessed Vora quickly.",
          textSimple: "A flying picture popped up. \"A vehicle!\" guessed Vora.",
          emoji: "🕊️",
        },
        {
          text: "But it was a bird, not a plane! Vora had guessed too fast, just because it was flying.",
          textSimple: "It was a bird, not a vehicle! Vora guessed wrong.",
          emoji: "🐦",
        },
        {
          text: "\"That's okay,\" said Vora. \"I'll look at more examples of birds and vehicles so I can tell them apart next time.\"",
          textSimple: "\"That's okay,\" said Vora. \"I'll learn from more examples.\"",
          emoji: "📚",
        },
        {
          text: "After seeing many more pictures, Vora got it right every time — birds have feathers and flap their wings; vehicles don't!",
          textSimple: "Vora looked at more pictures. Now it gets it right!",
          emoji: "✅",
        },
        {
          text: "Vora wasn't magic — it just kept looking at examples and learning from its mistakes, the same way you get better at something with practice.",
          textSimple: "No magic! Vora learned from its mistakes, just like you do.",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "Why did Vora guess wrong about the bird at first?",
          discussionNote: "It guessed too quickly just because the bird was flying — it hadn't looked at enough examples yet to know that flying alone doesn't make something a vehicle.",
        },
        {
          question: "Tell about a time YOU got something wrong at first, but got better with practice.",
          discussionNote: "Open discussion — connect to the concept segment's idea that guessing wrong is a normal, expected part of learning, for people and for Vora.",
        },
      ],
    },
    {
      type: "movement",
      title: "Animal or Vehicle Actions!",
      instructions:
        "Call out each animal or vehicle and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Cat — meow and lick your paw", emoji: "🐱" },
        { text: "Dog — pant and wag your tail", emoji: "🐶" },
        { text: "Lion — roar loud and show your claws", emoji: "🦁" },
        { text: "Car — steer a pretend wheel and vroom", emoji: "🚗" },
        { text: "Bus — stomp big like a bus rolling along", emoji: "🚌" },
        { text: "Train — chug your arms like train wheels", emoji: "🚂" },
        { text: "Bike — pedal your legs like riding a bike", emoji: "🚲" },
      ],
    },
    {
      type: "activity",
      instructions: "Kids sort the first few together as a class, then Vora starts guessing on its own — the class judges whether Vora got it right.",
      config: {
        engine: "train_the_robot",
        title: "Animal or Vehicle?",
        labelA: "Animal",
        labelB: "Vehicle",
        emojiA: "🐾",
        emojiB: "🚗",
        items: [
          { word: "cat", emoji: "🐱", bucket: "a" },
          { word: "dog", emoji: "🐶", bucket: "a" },
          { word: "lion", emoji: "🦁", bucket: "a" },
          { word: "rabbit", emoji: "🐰", bucket: "a" },
          { word: "bird", emoji: "🐦", bucket: "a" },
          { word: "car", emoji: "🚗", bucket: "b" },
          { word: "bus", emoji: "🚌", bucket: "b" },
          { word: "train", emoji: "🚂", bucket: "b" },
          { word: "bike", emoji: "🚲", bucket: "b" },
        ],
      },
    },
    {
      type: "stand_sit",
      title: "Animal or Vehicle: True or False!",
      instructions:
        "Read each statement. Kids STAND UP if they think it's true, and crouch down low if they think it's false. Reveal the answer and read the explanation before moving on.",
      statements: [
        { text: "A lion is an animal.", isTrue: true, explanation: "Yes! A lion is a living animal.", emoji: "🦁" },
        { text: "A bus can eat food.", isTrue: false, explanation: "No — a bus is a vehicle, it can't eat!", emoji: "🚌" },
        { text: "A bird can fly, but it is still an animal, not a vehicle.", isTrue: true, explanation: "Yes! Flying doesn't make something a vehicle — a bird is a living animal.", emoji: "🐦" },
        {
          text: "A train needs a driver or a track to move.",
          isTrue: true,
          explanation: "Yes! Trains are vehicles that people build and run.",
          emoji: "🚂",
          minTrack: "explorers",
        },
        { text: "A rabbit is a kind of vehicle.", isTrue: false, explanation: "No — a rabbit is a living, hopping animal!", emoji: "🐰" },
      ],
    },
    {
      type: "chant",
      title: "Animal or Vehicle Chant",
      instructions:
        "Say each call line and point to the matching group of pictures. The whole class echoes the response line back to you.",
      lines: [
        { call: "Cat, dog, lion, what are these?", response: "These are animals, yes indeed!" },
        { call: "Car, bus, train, what do you see?", response: "These are vehicles, one two three!" },
        {
          call: "Rabbit, bird, what's the same?",
          response: "These are animals, that's their name!",
          minTrack: "explorers",
        },
        { call: "Bike and car, tell me true,", response: "These are vehicles, driving through!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "\"These are animals.\" — have the class say this together, pointing at the animal group.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we practiced sorting animals and vehicles, saw Vora learn from examples — sometimes getting it wrong, and that's okay — acted out animals and vehicles, and chanted about them together.",
      summarySimple: "Today we sorted animals and vehicles with Vora!",
    },
  ],
};

export const w2d3_light_or_right: Lesson = {
  ...meta("w2d3_light_or_right"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Say \"light\" and \"right\" slowly, back to back, a few times. Don't explain yet — just let the class notice the sounds are close but different.",
      prompt: "light... right... light... right...",
    },
    {
      type: "concept",
      title: "Two Sounds, One Letter in Korean",
      bigIdeas: ["perception"],
      lines: [
        {
          text: "In English, \"l\" and \"r\" are two different sounds.",
          textSimple: "L and R sound different in English!",
        },
        { text: "Let's listen very carefully and pick the word we hear." },
      ],
      teacherNote:
        "Do not ask kids to produce the sounds yet — this lesson is receptive (listening) only. Production practice comes later once discrimination is solid; asking for output too early just teaches guessing.",
    },
    {
      type: "story",
      title: "Vora Listens Really Closely",
      teacherNote:
        "Say 'light' and 'right' aloud yourself as you read panels 2-3, exaggerating the L and R sounds so kids can hear the tiny difference Vora is describing.",
      panels: [
        {
          text: "Vora heard someone say a word, but two words sound SO similar: \"light\" and \"right.\"",
          textSimple: "Vora heard \"light\" and \"right.\" They sound similar!",
          emoji: "💡",
        },
        {
          text: "At first, Vora wasn't sure which word it heard. The sounds seemed almost the same.",
          textSimple: "At first, Vora was not sure.",
          emoji: "🤔",
        },
        {
          text: "So Vora listened again, very, very closely — and noticed the tiny difference right at the start of each word.",
          textSimple: "Vora listened again, very closely.",
          emoji: "👂",
        },
        {
          text: "\"Light\" starts with a soft \"l\" sound. \"Right\" starts with a stronger \"r\" sound. Now Vora could tell them apart!",
          textSimple: "\"L\" and \"r\" sound different! Now Vora can tell.",
          emoji: "✅",
        },
        {
          text: "Vora wasn't magic — it just listened super closely to a small difference in sound, exactly what YOU are about to practice.",
          textSimple: "No magic! Vora just listened really closely.",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "What did Vora do to tell 'light' and 'right' apart?",
          discussionNote: "It listened very closely to the small difference in sound right at the beginning of each word — careful listening, not a guess.",
        },
        {
          question: "Which word felt trickier for YOU to hear the difference in — 'light' or 'right'? Why?",
          discussionNote: "Open discussion — there's no wrong answer; the goal is to get kids noticing and talking about the specific sound difference.",
        },
      ],
    },
    {
      type: "movement",
      title: "Light or Right Actions!",
      instructions:
        "Call out each word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Light — flick a pretend light switch", emoji: "💡" },
        { text: "Right — point to your right side", emoji: "👉" },
        { text: "Read — open a pretend book and read", emoji: "📖" },
        { text: "Rock — freeze still like a rock", emoji: "🪨" },
        { text: "Row — pretend to row a boat", emoji: "🚣" },
        { text: "Low — crouch down low", emoji: "⬇️" },
      ],
    },
    {
      type: "activity",
      instructions: "Play each word once (tap the speaker icon), and have kids point to or say the picture they heard. Repeat any pair the class finds hard.",
      config: {
        engine: "minimal_pairs",
        title: "Listen Closely: l or r?",
        targetSound: "/l/ vs /r/",
        teacherNote:
          "The single highest-frequency Korean-learner pronunciation gap — Korean's single liquid consonant covers both English sounds, so this contrast genuinely doesn't exist in the L1.",
        pairs: [
          { wordA: { text: "light", emoji: "💡" }, wordB: { text: "right", emoji: "👉" } },
          { wordA: { text: "lead", emoji: "🚶" }, wordB: { text: "read", emoji: "📖" } },
          { wordA: { text: "load", emoji: "📦" }, wordB: { text: "road", emoji: "🛣️" } },
          { wordA: { text: "lock", emoji: "🔒" }, wordB: { text: "rock", emoji: "🪨" } },
          { wordA: { text: "low", emoji: "⬇️" }, wordB: { text: "row", emoji: "🚣" } },
        ],
      },
    },
    {
      type: "team_relay",
      title: "L or R Word Relay",
      instructions:
        "Split the class into teams. Read each prompt aloud and have the next team try it together before moving to the next team. Exaggerate the l or r sound as a class after each answer.",
      prompts: [
        { text: "Say a word that starts with the L sound, like 'light'!", emoji: "💡" },
        { text: "Say a word that starts with the R sound, like 'right'!", emoji: "👉" },
        { text: "Pretend to read a book, then say 'read'!", emoji: "📖" },
        { text: "Freeze like a rock, then say 'rock'!", emoji: "🪨" },
        { text: "Pretend to row a boat, then say 'row'!", emoji: "🚣", minTrack: "explorers" },
      ],
    },
    {
      type: "chant",
      title: "Light or Right Chant",
      instructions:
        "Say each call line slowly and clearly. The whole class echoes the response line back, listening for the l or r sound.",
      lines: [
        { call: "Light, light, listen well,", response: "Light, light, I can tell!" },
        { call: "Right, right, listen well,", response: "Right, right, I can tell!" },
        {
          call: "Lock or rock, which do you hear?",
          response: "Lock or rock, listen clear!",
          minTrack: "explorers",
        },
        { call: "Low or row, tell me true,", response: "L or R, I hear you!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Say \"light\" and \"right\" one more time — thumbs up if you can hear the difference now.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we practiced listening for the difference between l and r sounds — a tricky pair for Korean speakers, and totally normal to still be working on — we acted out some of the words and chanted the l and r sounds together.",
      summarySimple: "Today we listened closely for the l and r sounds!",
    },
  ],
};
