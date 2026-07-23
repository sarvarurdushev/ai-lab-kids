import type { Lesson } from "../types";
import { getLessonMeta } from "../scopeAndSequence";

function meta(key: string) {
  const m = getLessonMeta(key);
  if (!m) throw new Error(`No scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const w7d1_what_can_robots_do: Lesson = {
  ...meta("w7d1_what_can_robots_do"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask: \"Can a robot swim? Can a robot cook?\" Take quick guesses before teaching the verbs.",
      prompt: "What can a robot do?",
    },
    {
      type: "vocab",
      title: "Action Verbs",
      words: [
        { word: "clean", emoji: "🧹" },
        { word: "cook", emoji: "🍳" },
        { word: "drive", emoji: "🚗" },
        { word: "fly", emoji: "✈️" },
        { word: "swim", emoji: "🏊" },
        { word: "talk", emoji: "💬" },
      ],
    },
    {
      type: "movement",
      title: "Robot Action Moves!",
      instructions:
        "Call out each action verb and do the move together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Clean — sweep your arms like a broom", emoji: "🧹" },
        { text: "Cook — stir an invisible pot", emoji: "🍳" },
        { text: "Drive — hold a steering wheel and turn", emoji: "🚗" },
        { text: "Fly — spread your arms and zoom around", emoji: "✈️" },
        { text: "Swim — paddle your arms like swimming", emoji: "🏊" },
        { text: "Talk — cup your hands around your mouth", emoji: "💬" },
      ],
    },
    {
      type: "concept",
      title: "Robots Can...",
      bigIdeas: ["societal_impact"],
      lines: [
        {
          text: "Real robots can clean floors, and real robots can fly!",
          textSimple: "Real robots can clean. Real robots can fly!",
        },
        { text: "\"Can\" tells us what something is able to do." },
      ],
      teacherNote: "First real-world grounding of \"robot\" beyond Vora the character — robot vacuums and delivery drones are good concrete examples if kids ask for more.",
    },
    {
      type: "story",
      title: "Vora's Robot Helper Tour",
      teacherNote:
        "Read this right after the concept intro, before the chant — it turns the abstract \"robots can ___\" idea into concrete real-world examples, echoing the vacuum/drone examples from the teacher note above.",
      panels: [
        {
          text: "\"Let's go on a tour of robot helpers!\" said Vora, and off they went.",
          textSimple: "Vora took a tour of robot helpers!",
          emoji: "🤖",
        },
        {
          text: "First stop: a little round robot quietly cleaned the floor at home, all by itself. \"That robot can clean!\" said Vora.",
          textSimple: "A robot cleaned the floor by itself!",
          emoji: "🧹",
        },
        {
          text: "Next stop: a delivery robot rolled down the sidewalk carrying a package to a front door. \"That robot can drive!\"",
          textSimple: "A delivery robot drove a package!",
          emoji: "🚗",
        },
        {
          text: "Vora tried to picture the cleaning robot flying like a drone — but it couldn't! Each robot was only built for its own job.",
          textSimple: "The cleaning robot can't fly. Only its own job!",
          emoji: "🤔",
        },
        {
          text: "Vora wasn't magic, and neither were the robots — each one was built and programmed to do just the job it's made for, which is exactly why \"can\" is such an important word!",
          textSimple: "No magic! Each robot does its own special job.",
          emoji: "✅",
        },
      ],
      comprehensionQuestions: [
        {
          question: "Why couldn't the cleaning robot also fly like the delivery robot?",
          discussionNote: "Each robot is built and programmed for a specific job, not for everything — that's why we always ask \"what CAN it do?\"",
        },
        {
          question: "If you could invent a robot helper, what would you want it to be able to do?",
          discussionNote: "Open discussion — encourage kids to use today's action verbs (clean, cook, drive, fly, swim, talk) in their answer.",
        },
      ],
    },
    {
      type: "team_relay",
      title: "What Can a Robot Do?",
      instructions:
        "Split the class into two or three teams. Read one prompt aloud at a time; teams take turns racing to shout an answer using today's action verbs. Cheer for every good answer, then move to the next team.",
      prompts: [
        { text: "Name something a robot CAN do!", emoji: "🤖" },
        { text: "Name a job you think a robot could learn to do!", emoji: "🧹" },
        { text: "Name a robot helper you've seen in real life!", emoji: "🚗" },
        { text: "Name something you think a robot probably CAN'T do (yet)!", emoji: "❌", minTrack: "explorers" },
      ],
    },
    {
      type: "chant",
      title: "Robot Can Chant!",
      instructions:
        "Say each call line and have the whole class echo the response line back to you.",
      lines: [
        { call: "Robot, robot, what can you do?", response: "I can clean, clean, just for you!" },
        { call: "Robot, robot, tell me true —", response: "I can cook, cook, a meal for you!" },
        {
          call: "Robot, robot, up in the sky —",
          response: "I can fly, fly, way up high!",
          minTrack: "explorers",
        },
        {
          call: "Robot, robot, one more thing —",
          response: "I can swim, swim, hear me sing!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Each kid says one thing a robot can do, using an action verb from today.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned action verbs and how \"can\" describes what something is able to do, acted out each action, and chanted about what robots can do together.",
      summarySimple: "Today we learned action words and chanted about what robots can do!",
    },
  ],
};

export const w7d2_robots_at_home_and_school: Lesson = {
  ...meta("w7d2_robots_at_home_and_school"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask: \"Is a calculator an AI helper?\" Let the class debate briefly — there's no shame in disagreeing today.",
      prompt: "AI helper, or not AI?",
    },
    {
      type: "concept",
      title: "Robots at Home and School",
      bigIdeas: ["societal_impact", "perception"],
      lines: [
        {
          text: "Some helpers around you are AI — they learn and answer.",
          textSimple: "Some helpers are AI. They learn and answer!",
        },
        {
          text: "Some helpers are smart tools, but not AI — they just do one job the same way every time.",
          textSimple: "Some helpers are not AI. They do the same job every time.",
        },
        {
          text: "This one is tricky — let's sort them together and talk about why.",
          textSimple: "This one is tricky. Let's sort them together!",
        },
      ],
      teacherNote:
        "The hardest sort in the unit on purpose — a calculator is fast and \"smart-seeming\" but doesn't learn or adapt, which is exactly the distinction worth sitting with. Expect more \"needs practice\" marks here than any other lesson; that's the activity working as intended, not a sign kids are behind.",
    },
    {
      type: "story",
      title: "Vora and the Speedy Calculator",
      teacherNote:
        "Read this BEFORE the train_the_robot sort below — it gives kids a concrete story version of the calculator-vs-voice-assistant distinction they're about to face live in the hardest sorting game of the unit.",
      panels: [
        {
          text: "At Minji's house, Vora spotted a calculator solving 5 + 5 = 10 in a blink. \"Wow, so fast and smart!\" said Vora.",
          textSimple: "A calculator solved math fast!",
          emoji: "🧮",
        },
        {
          text: "But Vora watched longer — every single time, the calculator did the exact same steps, the exact same way. It never changed, never learned anything new.",
          textSimple: "The calculator does the same steps every time.",
          emoji: "🔁",
        },
        {
          text: "Then Vora watched the voice assistant on the shelf. It listened to Minji, learned how she said things, and got a little better at understanding her over time.",
          textSimple: "The voice assistant listens and learns!",
          emoji: "🔊",
        },
        {
          text: "\"Being fast isn't the same as being AI,\" Vora realized. \"What matters is whether something learns and changes.\"",
          textSimple: "Fast isn't the same as AI. Learning matters!",
          emoji: "💡",
        },
        {
          text: "Vora wasn't magic, and the calculator wasn't AI either — it's just a smart tool that does one job the same way every time!",
          textSimple: "No magic! The calculator is a tool, not AI.",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "Why did Vora first think the calculator might be AI, before changing its mind?",
          discussionNote: "It seemed fast and smart at first — the story shows that being quick or accurate at one task doesn't make something AI; the calculator never learns or changes.",
        },
        {
          question: "What's the real difference between the calculator and the voice assistant in the story?",
          discussionNote: "The voice assistant learns and adapts over time, while the calculator repeats the exact same steps every time — this is the same distinction in today's sorting game.",
        },
      ],
    },
    {
      type: "movement",
      title: "Helper or Not Actions!",
      instructions:
        "Call out each helper and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Voice assistant — cup your ear and say \"Hello!\"", emoji: "🔊" },
        { text: "Robot vacuum — scoot low and spin in a circle", emoji: "🤖" },
        { text: "Smart speaker — tap the air like pressing a button", emoji: "📢" },
        { text: "Calculator — tap invisible number buttons", emoji: "🧮" },
        { text: "Alarm clock — mime waking up and stretching", emoji: "⏰", minTrack: "explorers" },
        { text: "Flashlight — click your hands open like a beam", emoji: "🔦" },
        { text: "Lamp — reach up high and \"switch on\" with a click", emoji: "💡", minTrack: "explorers" },
      ],
    },
    {
      type: "activity",
      instructions: "Go slower than usual here and discuss each one — this sort is meant to be debated, not rushed.",
      config: {
        engine: "train_the_robot",
        title: "AI Helper or Not AI?",
        labelA: "AI Helper",
        labelB: "Not AI",
        emojiA: "🤖",
        emojiB: "🔧",
        items: [
          { word: "voice assistant", emoji: "🔊", bucket: "a" },
          { word: "robot vacuum", emoji: "🤖", bucket: "a" },
          { word: "smart speaker", emoji: "📢", bucket: "a" },
          { word: "calculator", emoji: "🧮", bucket: "b" },
          { word: "alarm clock", emoji: "⏰", bucket: "b" },
          { word: "flashlight", emoji: "🔦", bucket: "b" },
          { word: "lamp", emoji: "💡", bucket: "b" },
        ],
      },
    },
    {
      type: "stand_sit",
      title: "AI Helper True or False!",
      instructions:
        "Read each statement. Kids STAND UP if they think it's true, and crouch down low if they think it's false. Reveal the answer, then give the short explanation before moving on.",
      statements: [
        { text: "A robot vacuum can learn the shape of your house over time.", isTrue: true, explanation: "Yes! That's why it's AI, not just a simple tool.", emoji: "🤖" },
        { text: "A calculator learns new math every time you use it.", isTrue: false, explanation: "No — it does the exact same steps every time. That's why it's not AI.", emoji: "🧮" },
        { text: "A voice assistant can get better at understanding your voice over time.", isTrue: true, explanation: "Yes! Learning and improving is what makes it AI.", emoji: "🔊" },
        {
          text: "Every smart-looking gadget in your house is AI.",
          isTrue: false,
          explanation: "No — some are just smart tools, like a calculator or a flashlight, that don't learn or change.",
          emoji: "🔦",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "chant",
      title: "AI or Not Chant!",
      instructions:
        "Say each call line and hold up (or point to) the matching helper picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Robot vacuum, what do you say?", response: "I'm AI — I learn every day!" },
        { call: "Alarm clock, what do you say?", response: "Not AI — I ring the same way!" },
        {
          call: "Smart speaker, tell me true —",
          response: "I'm AI — I listen to you!",
          minTrack: "explorers",
        },
        {
          call: "Flashlight, what do you say?",
          response: "Not AI — just click and away!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Ask one student to explain, in their own words, why a calculator isn't AI.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we sorted real helpers into AI and not-AI — the trickiest sort yet, and a big step in understanding what AI actually is, acted out each helper, and chanted about AI or not together.",
      summarySimple: "Today we sorted helpers into AI and not-AI, and chanted about it together!",
    },
  ],
};

export const w7d3_vora_makes_a_mistake: Lesson = {
  ...meta("w7d3_vora_makes_a_mistake"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask: \"Can Vora see a picture? Can Vora feel hungry?\" Let kids guess before the activity.",
      prompt: "Can Vora do it?",
    },
    {
      type: "concept",
      title: "Vora Can, Vora Can't",
      bigIdeas: ["societal_impact", "learning"],
      lines: [
        {
          text: "I can talk, learn, and sort pictures — you've seen me do it all unit!",
          textSimple: "I can talk, learn, and sort pictures!",
        },
        {
          text: "But I can't feel hungry, and I can't really see the real world like you do.",
          textSimple: "But I can't feel hungry. I can't really see like you!",
        },
        {
          text: "Knowing what AI can't do is just as important as knowing what it can.",
          textSimple: "It's important to know what AI can't do too.",
        },
      ],
      teacherNote: "Direct callback to Week 1 Day 3 and Week 2 Day 2's \"AI can be wrong\" thread — this lesson is where that idea gets a name (limitations) and a grammar structure to express it.",
    },
    {
      type: "story",
      title: "Vora Makes a Mistake",
      teacherNote:
        "Read this right after the concept intro — it's the concrete \"can't\" moment behind today's can/can't sentence pattern. Afterward, consider asking \"has an app or machine ever gotten something wrong for you?\"",
      panels: [
        {
          text: "Vora was sorting animal pictures, feeling very confident. \"Dog, dog, cat, bird...\"",
          textSimple: "Vora sorted animal pictures, feeling sure!",
          emoji: "🐾",
        },
        {
          text: "Then a blurry picture came up — a fluffy gray shape with pointy ears. \"That's a bunny rabbit!\" said Vora.",
          textSimple: "A blurry picture! \"A bunny!\" said Vora.",
          emoji: "🐰",
        },
        {
          text: "\"Vora, look again — that's actually a cat!\" said a student, pointing at the whiskers.",
          textSimple: "\"That's a cat!\" said a student.",
          emoji: "🐱",
        },
        {
          text: "Vora looked closer. \"Oh — you're right, I was wrong! Cats and rabbits can look really similar in blurry pictures.\"",
          textSimple: "\"You're right! I was wrong,\" said Vora.",
          emoji: "🔍",
        },
        {
          text: "Vora wasn't perfect — it made a real mistake, and that's exactly why double-checking (and having friends help) matters so much!",
          textSimple: "No magic! Vora can be wrong. Double-checking helps!",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "What mistake did Vora make, and how did it get fixed?",
          discussionNote: "Vora misread a blurry picture and mixed up a cat for a rabbit; a classmate pointed it out and Vora looked again — mistakes get caught by double-checking, not by AI being magically perfect.",
        },
        {
          question: "Why is it helpful to know that Vora (or any AI) can make mistakes?",
          discussionNote: "So we don't blindly trust everything an AI says — we should look carefully and ask a grown-up or double-check, which connects to next week's AI safety lesson.",
        },
      ],
    },
    {
      type: "movement",
      title: "Can Vora Do It? Actions!",
      instructions:
        "Call out each action and do the move together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Fly — flap your arms like wings", emoji: "✈️" },
        { text: "Talk — cup your hands and chat", emoji: "💬" },
        { text: "Learn — tap your head like you're thinking", emoji: "🧠" },
        { text: "See a picture — make binoculars with your hands", emoji: "👀" },
        { text: "Sort — mime moving toys into two piles", emoji: "🗂️", minTrack: "explorers" },
        { text: "Feel hungry — rub your tummy", emoji: "🍽️" },
      ],
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, left to right. Then invite a few kids to say their own \"Vora can / can't ___\" sentence out loud.",
      config: {
        engine: "sentence_builder",
        title: "Vora can fly.",
        words: [
          { text: "Vora", role: "subject" },
          { text: "can", role: "other" },
          { text: "fly", role: "verb" },
        ],
      },
    },
    {
      type: "class_vote",
      title: "What's Trickiest for Vora?",
      instructions:
        "Read each option aloud. Kids vote by raising their hands for the one they think is trickiest for Vora to get right — there's no single correct answer, so let a few kids explain their thinking either way.",
      question: "What do you think is the trickiest thing for Vora to get right?",
      options: [
        { text: "Blurry pictures", emoji: "🌫️" },
        { text: "Really similar-looking animals", emoji: "🐱" },
        { text: "Brand new words it's never heard", emoji: "❓" },
        { text: "Something else", emoji: "💭" },
      ],
    },
    {
      type: "chant",
      title: "Vora Can/Can't Chant!",
      instructions:
        "Say each call line and have the whole class echo the response line back to you, giving a thumbs-up for \"can\" and a thumbs-down for \"can't.\"",
      lines: [
        { call: "Vora, Vora, can you fly?", response: "Yes I can, up in the sky!" },
        { call: "Vora, Vora, can you talk?", response: "Yes I can, listen while I talk!" },
        {
          call: "Vora, Vora, can you feel?",
          response: "No I can't, hunger's not real!",
          minTrack: "explorers",
        },
        {
          call: "Vora, Vora, tell me true —",
          response: "I can learn, just like you!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "\"Vora can ___. Vora can't ___.\" — each kid completes both blanks out loud.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we built can/can't sentences about Vora — putting a grammar structure around the idea that AI has real limits, acted out Vora's actions, and chanted \"can\" and \"can't\" together.",
      summarySimple: "Today we learned what Vora can and can't do, and chanted about it together!",
      homework: "Tell a family member one thing Vora can do and one thing Vora can't do.",
    },
  ],
};
