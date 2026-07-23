import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";
import { AI_OR_NOT_SETS, INSTRUCT_VORA_SCENARIOS } from "../aiLabBank";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m9_week1: Lesson = {
  ...meta("m9_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Point to your own eyes, nose, and mouth one at a time, saying each word slowly. Ask kids to touch the same part on themselves.",
      prompt: "Point to your eyes! 👀",
    },
    {
      type: "vocab",
      title: "My Body",
      words: [
        { word: "eyes", emoji: "👀" },
        { word: "nose", emoji: "👃" },
        { word: "mouth", emoji: "👄" },
        { word: "ears", emoji: "👂" },
        { word: "hands", emoji: "🙌" },
        { word: "feet", emoji: "🦶" },
        { word: "shoulders", emoji: "🙆", minTrack: "explorers" },
      ],
    },
    {
      type: "concept",
      title: "Vora Doesn't Have Eyes Like You!",
      bigIdeas: ["perception"],
      lines: [
        {
          text: "I don't have real eyes, or real hands, or real feet like you do!",
          textSimple: "I don't have real eyes, hands, or feet like you!",
        },
        {
          text: "But some games can still tell when your body moves — they use something called a sensor, not eyes.",
          textSimple: "Some games can feel you move. That's called a sensor!",
        },
        {
          text: "A fitness tracker on your wrist can feel you jump, even with the lights off!",
          textSimple: "A tracker on your wrist can feel you jump!",
        },
      ],
      teacherNote:
        "This month broadens 'perception' beyond seeing — sensors that detect motion or touch are a form of perception too, even without eyes or a camera. Motion-sensor games (dance games, some fitness trackers) are the concrete example to point to if kids ask how.",
    },
    {
      type: "story",
      title: "Vora and the Night Light",
      teacherNote:
        "Read each panel aloud, pausing after panel 2 to ask \"How COULD it know, with no eyes?\" before revealing Vora's discovery — the whole point is letting kids wonder before the sensor is named.",
      panels: [
        { text: "One night, Mia tiptoed down a dark hallway to get water. Suddenly — click! — a little light flipped on all by itself!", textSimple: "Mia walked in the dark. Click! A light turned on!", emoji: "🌙" },
        { text: "Vora blinked. \"Wait — how did that light know Mia was there? It doesn't even have eyes!\"", textSimple: "Vora said, \"How did it know? No eyes!\"", emoji: "👀" },
        { text: "Vora looked closer. No camera, no eyes — just a tiny bump near the light called a sensor.", textSimple: "Vora looked closer. Just a tiny sensor, no eyes.", emoji: "🔍" },
        { text: "\"Oh! A sensor can feel you move, the same way YOUR skin feels a breeze — without ever seeing you at all!\"", textSimple: "\"A sensor feels you move — no eyes needed!\"", emoji: "💡" },
        { text: "Mia clapped. \"So it's like the light has its own kind of feeling — just not with eyes!\"", textSimple: "Mia clapped. \"It feels — just not with eyes!\"", emoji: "👏" },
        { text: "It wasn't magic — a sensor simply notices movement, the same way your hands, ears, and skin notice the world every day.", textSimple: "No magic! A sensor notices movement, just like your body does.", emoji: "🤖" },
      ],
      comprehensionQuestions: [
        { question: "How did the night light know Mia was in the hallway, even in the dark?", discussionNote: "It used a motion sensor to feel movement, not eyes or a camera — the same idea from today's lesson." },
        { question: "What parts of YOUR body help you notice things, even with your eyes closed?", discussionNote: "Open discussion — ears (sound), skin/hands (touch), and nose (smell) all sense the world without needing to see it." },
      ],
    },
    {
      type: "movement",
      title: "Body Part Actions!",
      instructions:
        "Call out each body part and touch it together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Eyes — point to your eyes and blink big", emoji: "👀" },
        { text: "Nose — touch your nose and wiggle it", emoji: "👃" },
        { text: "Mouth — touch your mouth and open it wide", emoji: "👄" },
        { text: "Ears — touch your ears and wiggle them", emoji: "👂" },
        { text: "Hands — clap your hands high", emoji: "🙌" },
        { text: "Feet — stomp your feet", emoji: "🦶" },
        { text: "Shoulders — shrug your shoulders up and down", emoji: "🙆", minTrack: "explorers" },
      ],
    },
    {
      type: "activity",
      instructions: "Kids take turns flipping two cards at a time, saying the body part out loud if they find a match.",
      config: {
        engine: "memory_match",
        title: "Body Parts",
        pairs: [
          { word: "eyes", emoji: "👀" },
          { word: "nose", emoji: "👃" },
          { word: "mouth", emoji: "👄" },
          { word: "ears", emoji: "👂" },
          { word: "hands", emoji: "🙌" },
          { word: "feet", emoji: "🦶" },
          { word: "shoulders", emoji: "🙆", minTrack: "explorers" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[2],
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[2],
    },
    {
      type: "team_relay",
      title: "Body & Sensor Relay!",
      instructions:
        "Split the class into two teams. Read each prompt aloud and let team members take turns calling out an answer — any true answer counts! Alternate teams each round.",
      prompts: [
        { text: "Name a body part on YOUR face!", emoji: "👀" },
        { text: "Name something your ears can hear!", emoji: "👂" },
        { text: "Name something your hands can feel!", emoji: "🙌" },
        { text: "Name a body part you use to smell something!", emoji: "👃" },
        { text: "Name something a sensor (not eyes) could notice!", emoji: "🤖", minTrack: "explorers" },
      ],
    },
    {
      type: "chant",
      title: "Body Parts Chant",
      instructions:
        "Say each call line and touch (or point to) the matching body part. The whole class echoes the response line back to you.",
      lines: [
        { call: "Body, body, what do you see?", response: "Touch your eyes, touch your eyes, look at me!" },
        { call: "Body, body, smell the air,", response: "Touch your nose, touch your nose, right there!" },
        {
          call: "Body, body, listen well,",
          response: "Touch your ears, touch your ears, ring the bell!",
          minTrack: "explorers",
        },
        {
          call: "Body, body, stomp the floor,",
          response: "Touch your feet, touch your feet, give me more!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Everyone point to your ears, then your feet — no talking, just pointing!",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we named six body parts in English, acted them out, learned that sensors, not just eyes, can notice how our bodies move, practiced spotting real AI in everyday life, helped Vora follow clear instructions, and chanted about our body parts together.",
      summarySimple: "Today we learned body part words, moved our bodies, and sang a body chant with Vora!",
      homework: "Touch and name three body parts in English before bedtime tonight.",
    },
  ],
};

export const m9_week2: Lesson = {
  ...meta("m9_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Play a quick round of \"Vora Says\" instead of \"Simon Says\" — give one or two commands yourself (\"Vora says clap your hands!\") before today's game.",
      prompt: "Vora says... clap your hands! 👏",
    },
    {
      type: "concept",
      title: "Sensors Follow You Even When You Move",
      bigIdeas: ["perception"],
      lines: [
        {
          text: "Remember — a sensor can notice your body moving, step by step, even without eyes.",
          textSimple: "A sensor can notice you move, even without eyes!",
        },
        {
          text: "Let's move through a whole routine, and see how many steps a sensor could follow!",
          textSimple: "Let's move together and see what a sensor can follow!",
        },
      ],
      teacherNote:
        "Keep this short — perception was fully taught in Week 1. This is just a quick bridge line before the physical routine, reframing today's movement game as something a sensor could track step by step.",
    },
    {
      type: "story",
      title: "Vora's Step-Counting Puzzle",
      teacherNote:
        "Read each panel aloud. Pause after panel 3 to ask \"What do YOU think is happening inside the band?\" before revealing panel 4 — let kids guess before Vora explains the sensor.",
      panels: [
        { text: "At recess, Jun wore a little band on his wrist and ran around the playground.", textSimple: "Jun wore a band and ran around.", emoji: "🏃" },
        { text: "Vora noticed the numbers on the band kept changing — 5, 6, 7 jumps! \"How does it know?\" Vora wondered.", textSimple: "The numbers changed! 5, 6, 7 jumps! \"How?\"", emoji: "❓" },
        { text: "Vora watched closely: every time Jun's wrist swung up and down, the number went up by one.", textSimple: "Every swing, the number went up by one.", emoji: "👋" },
        { text: "\"Ohh! The band has a sensor that feels each swing and each step, just like it's counting along with Jun's body!\"", textSimple: "\"A sensor feels each swing and counts along!\"", emoji: "💡" },
        { text: "By the end of recess, the band showed 42 jumps — and Jun didn't have to count a single one himself!", textSimple: "42 jumps! Jun didn't count a single one!", emoji: "🔢" },
        { text: "It wasn't magic — the sensor just felt Jun's movements, one step at a time, the same way it followed our \"Vora Says\" moves today.", textSimple: "No magic! It just felt each movement.", emoji: "🤖" },
      ],
      comprehensionQuestions: [
        { question: "How did the wristband know how many times Jun jumped?", discussionNote: "A sensor inside felt each movement/swing and counted one by one — not by watching with eyes." },
        { question: "Could a sensor follow OUR \"Vora Says\" routine today (stand, touch nose, clap, sit)? Why or why not?", discussionNote: "Yes — a motion sensor could feel each of those movements in order, the same way it followed Jun's jumps." },
      ],
    },
    {
      type: "movement",
      title: "Vora Says: Move!",
      instructions:
        "Call out each step and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Stand up — jump to your feet", emoji: "🧍" },
        { text: "Touch your nose — tap your nose with one finger", emoji: "👃" },
        { text: "Clap your hands — clap three times big", emoji: "👏" },
        { text: "Sit down — plop back into your seat", emoji: "🪑" },
      ],
    },
    {
      type: "activity",
      instructions: "As each step is placed, have the whole class stand up and actually perform it together before moving to the next — this routine is meant to be moved, not just read aloud. Then play a second game to reinforce it.",
      config: {
        engine: "sequence_builder",
        title: "Vora Says: Move Your Body!",
        steps: [
          { text: "Stand up", emoji: "🧍" },
          { text: "Touch your nose", emoji: "👃" },
          { text: "Clap your hands", emoji: "👏", minTrack: "explorers" },
          { text: "Sit down", emoji: "🪑" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, then have the whole class physically touch their nose as they say it out loud together.",
      config: {
        engine: "sentence_builder",
        title: "Touch your nose.",
        words: [
          { text: "Touch", role: "verb" },
          { text: "your nose", role: "object" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[2],
    },
    {
      type: "class_vote",
      title: "Would You Wear a Sensor Band?",
      instructions:
        "Read the question aloud. Kids vote by raising hands for each option — there's no right answer, just talk about why!",
      question: "Would you want to wear a band that counts your jumps and steps at recess?",
      questionSimple: "Do you want a band that counts your jumps?",
      options: [
        { text: "Yes, cool!", emoji: "🤩" },
        { text: "No thanks", emoji: "🙅" },
        { text: "Not sure", emoji: "🤔" },
      ],
    },
    {
      type: "chant",
      title: "Touch Your Nose Chant",
      instructions:
        "Say each call line and do the matching action. The whole class echoes the response line back to you.",
      lines: [
        { call: "Vora says, what do we do?", response: "Stand up, stand up — me and you!" },
        { call: "Vora says, where's your nose?", response: "Touch your nose, touch your nose, here it goes!" },
        {
          call: "Vora says, clap out loud,",
          response: "Clap your hands, clap your hands, make us proud!",
          minTrack: "explorers",
        },
        {
          call: "Vora says, rest a while,",
          response: "Sit back down, sit back down, with a smile!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Call out a step from today's routine (\"Touch your nose!\") and see if everyone can do it without looking at the screen.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we moved our whole bodies through a four-step \"Vora Says\" routine, in order, from start to finish, acted it out again with a movement break, helped Vora follow clear step-by-step instructions, and chanted the \"Vora Says\" routine together.",
      summarySimple: "Today we followed the \"Vora Says\" game, moved our bodies, and sang a chant with Vora!",
      homework: "Teach a family member the \"Vora Says\" game tonight using English body words.",
    },
  ],
};

export const m9_week3: Lesson = {
  ...meta("m9_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Touch your own nose and say \"nose\" slowly, then wait for the class to touch theirs too. Do it two or three times, a little faster each time.",
      prompt: "Touch your nose! 👃",
    },
    {
      type: "concept",
      title: "Words Can Be a Command, Too",
      bigIdeas: ["perception"],
      lines: [
        {
          text: "Your body already knows how to touch your nose — now let's put that into words!",
          textSimple: "Your body knows how to touch your nose. Let's say it in words!",
        },
        {
          text: "When I hear a command like \"touch your nose,\" my sensors and cameras help me figure out where a nose even is.",
          textSimple: "My sensors and cameras help me find your nose!",
        },
      ],
      teacherNote:
        "Keep this brief — perception was fully taught in Week 1. This is just a quick bridge line connecting today's sentence-building game to the same 'sensors help notice the body' idea, before diving into the activity.",
    },
    {
      type: "story",
      title: "Vora Tries to Find Its Own Nose",
      teacherNote:
        "Read each panel aloud, pointing to Vora's confused expression in panel 1 and its playful solution in panel 5. A fun, silly one — let the class laugh at Vora's cartoon nose before the closing moral.",
      panels: [
        { text: "\"Touch your nose!\" the class shouted. Vora looked down... but Vora doesn't have a real nose!", textSimple: "\"Touch your nose!\" But Vora has no real nose!", emoji: "🤖" },
        { text: "\"Hmm,\" said Vora, \"how would a robot even know where a nose is?\"", textSimple: "Vora said, \"How would a robot know where a nose is?\"", emoji: "❓" },
        { text: "Vora remembered a toy robot that COULD point to noses — it used a tiny camera to look for two eyes and a nose shape in between.", textSimple: "A toy robot uses a camera to find eyes and a nose shape.", emoji: "📷" },
        { text: "\"So a camera and a sensor work together — they notice shapes on your face, the same way YOU noticed where to touch!\"", textSimple: "\"A camera notices face shapes, like you noticed your nose!\"", emoji: "💡" },
        { text: "Vora drew a big cartoon nose on the board instead and touched THAT — \"Close enough for me!\" Vora laughed.", textSimple: "Vora drew a cartoon nose and touched it instead!", emoji: "😄" },
        { text: "It's not magic — a robot with a camera just looks for patterns and shapes, the same way it looks for patterns in weather or pictures.", textSimple: "No magic! Just looking for shapes and patterns.", emoji: "🧩" },
      ],
      comprehensionQuestions: [
        { question: "How could a toy robot know where a nose is on a face?", discussionNote: "It uses a camera to notice the shape and position of eyes and nose — pattern-spotting, not real understanding." },
        { question: "Is it funny or strange that Vora doesn't have a real nose? What do YOU think Vora's \"nose\" looks like?", discussionNote: "Open discussion — a fun chance for kids to imagine Vora's body their own way." },
      ],
    },
    {
      type: "movement",
      title: "Move Your Body!",
      instructions:
        "Call out each step and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Stand up — jump to your feet", emoji: "🧍" },
        { text: "Touch your nose — tap your nose with one finger", emoji: "👃" },
        { text: "Clap your hands — clap three times big", emoji: "👏" },
        { text: "Sit down — plop back into your seat", emoji: "🪑" },
      ],
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, then have the whole class physically touch their nose as they say it out loud together. Then play a second game to reinforce it.",
      config: {
        engine: "sentence_builder",
        title: "Touch your nose.",
        words: [
          { text: "Touch", role: "verb" },
          { text: "your nose", role: "object" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "As each step is placed, have the whole class stand up and actually perform it together before moving to the next — this routine is meant to be moved, not just read aloud.",
      config: {
        engine: "sequence_builder",
        title: "Vora Says: Move Your Body!",
        steps: [
          { text: "Stand up", emoji: "🧍" },
          { text: "Touch your nose", emoji: "👃" },
          { text: "Clap your hands", emoji: "👏", minTrack: "explorers" },
          { text: "Sit down", emoji: "🪑" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[3],
    },
    {
      type: "stand_sit",
      title: "Senses True or False!",
      instructions:
        "Read each statement. Kids STAND UP if they think it's true, and crouch down low if they think it's false. Reveal the answer, then give the short explanation before moving on.",
      statements: [
        { text: "Your ears help you hear sounds.", isTrue: true, explanation: "Yes! Ears are sensors for sound.", emoji: "👂" },
        { text: "A sensor needs eyes to notice you move.", isTrue: false, explanation: "No — sensors can feel movement without any eyes at all.", emoji: "🙅" },
        { text: "You can touch your nose even with your eyes closed.", isTrue: true, explanation: "Yes! Your body remembers where your nose is without looking.", emoji: "👃" },
        { text: "Robots can only notice things by looking at a camera.", isTrue: false, explanation: "No — many robots use sensors that feel touch, sound, or motion, not just cameras.", emoji: "🤖", minTrack: "explorers" },
      ],
    },
    {
      type: "chant",
      title: "Vora Says Chant",
      instructions:
        "Say each call line and do the matching action. The whole class echoes the response line back to you.",
      lines: [
        { call: "Vora says, what do we do?", response: "Stand up, stand up — me and you!" },
        { call: "Vora says, where's your nose?", response: "Touch your nose, touch your nose, here it goes!" },
        {
          call: "Vora says, clap out loud,",
          response: "Clap your hands, clap your hands, make us proud!",
          minTrack: "explorers",
        },
        {
          call: "Vora says, rest a while,",
          response: "Sit back down, sit back down, with a smile!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Say \"Touch your nose!\" one more time and see if everyone can do it without looking at the screen.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — building the sentence \"Touch your nose\" tile by tile, acted it out with a movement break, moving through the four-step \"Vora Says\" routine, spotting real AI in everyday life, and chanted the \"Vora Says\" routine together.",
      summarySimple: "Today we said \"Touch your nose!\", moved our bodies, and sang a chant with Vora!",
      homework: "Tell a family member \"Touch your nose!\" in English and see if they follow your command.",
    },
  ],
};

export const m9_week4: Lesson = {
  ...meta("m9_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Say \"think\" and \"sink\" slowly, back to back, a few times — see if anyone remembers this pair from Week 4!",
      prompt: "think... sink... Do you remember?",
    },
    {
      type: "concept",
      title: "Ears Are Sensors Too",
      bigIdeas: ["perception"],
      lines: [
        {
          text: "This month we learned that eyes, hands, and sensors all help us notice the world.",
          textSimple: "Eyes, hands, and sensors all help us notice things!",
        },
        {
          text: "Your ears are sensors too — let's use them for a super-careful listening game.",
          textSimple: "Your ears are sensors too! Let's listen carefully.",
        },
        { text: "Listen very closely: think... or sink?" },
      ],
      teacherNote:
        "This is the third quarter-checkpoint listening review (after Week 4's original th/s lesson) — ties this month's 'sensors, not just eyes' theme directly to the ears as a sensor too.",
    },
    {
      type: "story",
      title: "Vora's Last New Sound",
      teacherNote:
        "Read each panel aloud, pausing after panel 2 to ask \"How could Vora figure it out without looking?\" This story loops the whole month's 'sensors, not eyes' idea back to ears and listening.",
      panels: [
        { text: "Vora sat by the window, and outside a strange sound went \"ssss... ssss...\" — was it a hose, or someone saying \"think\" softly?", textSimple: "Vora heard \"ssss...\" outside. A hose? Or \"think\"?", emoji: "👂" },
        { text: "Vora couldn't see anything outside — just listened very, very closely.", textSimple: "Vora couldn't see. Just listened closely.", emoji: "🌳" },
        { text: "\"My ears — well, my microphone — are sensors too,\" Vora realized. \"I don't need eyes to notice a sound.\"", textSimple: "\"My microphone is a sensor too — no eyes needed!\"", emoji: "🎙️" },
        { text: "Vora listened for the tiny puff of air on \"th\" words, and the hiss on \"s\" words, just like in today's game.", textSimple: "Vora listened for the tiny sound differences, like in today's game.", emoji: "💨" },
        { text: "\"Ssss... that's a hose, not a 'think'!\" Vora said proudly, and sure enough, a garden hose was leaking nearby.", textSimple: "\"That's a hose!\" Vora said. And it was!", emoji: "🚿" },
        { text: "It wasn't magic — Vora's microphone is a sensor for sound, just like YOUR ears, and careful listening is a skill anyone can practice.", textSimple: "No magic! A microphone senses sound, just like your ears.", emoji: "🤖" },
      ],
      comprehensionQuestions: [
        { question: "How did Vora figure out the sound without looking outside?", discussionNote: "Vora used its microphone — a sensor for sound — and listened carefully for small differences, just like the ear is a sensor for us." },
        { question: "Is it easier for YOU to hear \"think\" and \"sink\" now than it was in Week 4 of the fall? Why might that be?", discussionNote: "Open discussion — repeated practice and listening to many examples helps both people and AI get better at noticing small differences." },
      ],
    },
    {
      type: "movement",
      title: "Listening Actions!",
      instructions:
        "Call out each word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Think — tap your temple like you're thinking hard", emoji: "🤔" },
        { text: "Sink — mime turning on a faucet and washing your hands", emoji: "🚰" },
        { text: "Mouth — point to your mouth and open it wide", emoji: "👄" },
        { text: "Mouse — wiggle your fingers like tiny mouse feet", emoji: "🐭" },
        { text: "Bath — mime scrubbing your arms like you're in the tub", emoji: "🛁" },
        { text: "Bass — flap your hands like fish fins swimming", emoji: "🐟" },
      ],
    },
    {
      type: "activity",
      instructions: "Play each word once, and have kids point to or say the picture they heard. Repeat any pair the class finds hard — expect this review to go faster than Week 4's first pass.",
      config: {
        engine: "minimal_pairs",
        title: "Listen Closely: think or sink?",
        targetSound: "/θ/ (\"th\") vs /s/",
        teacherNote:
          "Korean has no /θ/; expect substitution with /s/ or /t/. This is the third quarter-checkpoint review of the four core Korean L1 sound gaps, first taught in Week 4 of the foundations unit.",
        pairs: [
          { wordA: { text: "think", emoji: "🤔" }, wordB: { text: "sink", emoji: "🚰" } },
          { wordA: { text: "mouth", emoji: "👄" }, wordB: { text: "mouse", emoji: "🐭" } },
          { wordA: { text: "bath", emoji: "🛁" }, wordB: { text: "bass", emoji: "🐟" } },
          {
            wordA: { text: "path", emoji: "🛤️" },
            wordB: { text: "pass", emoji: "🏈" },
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[3],
    },
    {
      ...AI_OR_NOT_SETS[3],
    },
    {
      type: "team_relay",
      title: "Listen & Say Relay!",
      instructions:
        "Split into two teams. Read each prompt aloud and let teams take turns calling out an answer — celebrate any good try, since these are tricky sounds!",
      prompts: [
        { text: "Say a word that starts with the \"th\" sound!", emoji: "🤔" },
        { text: "Say a word that starts with the \"s\" sound!", emoji: "🚰" },
        { text: "Name something you can hear with your ears!", emoji: "👂" },
        { text: "Say \"mouth\" and \"mouse\" — can your team hear the difference?", emoji: "👄", minTrack: "explorers" },
        { text: "Name a sound a sensor could \"hear\" instead of see!", emoji: "🎙️", minTrack: "explorers" },
      ],
    },
    {
      type: "chant",
      title: "Think or Sink Chant",
      instructions:
        "Say each call line, then have the class say the matching word back to you as the response.",
      lines: [
        { call: "Listen, listen, what do you hear?", response: "Think, think — the answer is clear!" },
        { call: "Listen, listen, water below?", response: "Sink, sink — watch it flow!" },
        {
          call: "Listen, listen, open your mouth,",
          response: "Mouth, mouth — now say it out!",
          minTrack: "explorers",
        },
        {
          call: "Listen, listen, tiny and quick?",
          response: "Mouse, mouse — that did the trick!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Say \"think\" and \"sink\" one more time — thumbs up if it's easier to hear the difference than it was in Week 4.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we reviewed the th/s sound from Week 4 — one more sound-gap check-in before the year's last one in Month 12 — acted out think, sink, mouth, and mouse, helped Vora follow clear step-by-step instructions, spotted real AI in everyday life, and chanted the think/sink sounds together.",
      summarySimple: "Today we practiced the th and s sounds, moved our bodies, and sang a sound chant with Vora!",
    },
  ],
};
