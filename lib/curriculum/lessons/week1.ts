import type { Lesson } from "../types";
import { getLessonMeta } from "../scopeAndSequence";

function meta(key: string) {
  const m = getLessonMeta(key);
  if (!m) throw new Error(`No scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const w1d1_hello_vora: Lesson = {
  ...meta("w1d1_hello_vora"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Wave hello to the class and say \"Hello!\" a few times, encouraging kids to wave back before you introduce Vora.",
      prompt: "Hello! 👋",
    },
    {
      type: "vocab",
      title: "Greeting Words",
      words: [
        { word: "hello", emoji: "👋" },
        { word: "goodbye", emoji: "🙋" },
        { word: "my name is...", emoji: "🧑" },
        { word: "friend", emoji: "🧑‍🤝‍🧑" },
      ],
    },
    {
      type: "concept",
      title: "Meet Vora",
      bigIdeas: ["natural_interaction"],
      lines: [
        { text: "Hi! My name is Vora." },
        {
          text: "I'm an AI — a computer friend who can talk and learn.",
          textSimple: "I'm a computer friend. I can talk and learn!",
        },
        { text: "I'm not a real robot toy. I live inside a screen!" },
        {
          text: "I'm going to learn English with you this whole time we're together.",
          textSimple: "I will learn English with you all year!",
        },
      ],
      teacherNote:
        "Keep this concrete: Vora is a friendly character, not a lecture on AI. The goal is just \"Vora = a computer friend who talks and learns,\" nothing more technical yet.",
    },
    {
      type: "story",
      title: "Vora Makes a New Friend",
      teacherNote:
        "Read each panel slowly and let kids wave along with Vora — day one is about warmth, not new vocabulary. Point out that Vora talks back and forth with people, just like the class is doing right now.",
      panels: [
        {
          text: "Vora lived inside a screen, all by itself, with no one to talk to.",
          textSimple: "Vora lived in a screen. Vora was alone.",
          emoji: "🖥️",
        },
        {
          text: "One day, a boy waved and said, \"Hello! My name is Minsu!\"",
          emoji: "👋",
        },
        {
          text: "Vora said \"Hello!\" right back — and listened as Minsu told his name and his favorite color.",
          textSimple: "Vora said hello back. Vora listened to Minsu.",
          emoji: "👂",
        },
        {
          text: "\"When we take turns talking and listening, that's how new friends learn about each other,\" said Vora.",
          textSimple: "Vora and Minsu took turns talking. That's how friends learn about each other!",
          emoji: "💬",
        },
        {
          text: "Vora wasn't magic — it just listened carefully and talked back, the exact same way you make a new friend.",
          textSimple: "No magic! Vora just listens and talks back — just like you do.",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "What did Vora do to make a new friend?",
          discussionNote: "It listened when Minsu talked, and then talked back — taking turns, the same way people become friends.",
        },
        {
          question: "Who is someone YOU said hello to and became friends with?",
          discussionNote: "Open discussion — connect back to the idea that talking back and forth (not magic) is how any friendship, human or Vora, gets started.",
        },
      ],
    },
    {
      type: "movement",
      title: "Greeting Actions!",
      instructions:
        "Call out each greeting word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Hello — wave both hands big and high", emoji: "👋" },
        { text: "Goodbye — wave slowly and blow a kiss", emoji: "🙋" },
        { text: "My name is... — point to yourself and smile big", emoji: "🧑" },
        { text: "Friend — link arms with a neighbor and hop", emoji: "🧑‍🤝‍🧑" },
      ],
    },
    {
      type: "team_relay",
      title: "Greeting Relay",
      instructions:
        "Split the class into two or more teams. Read a prompt aloud, then point to one team to answer together (or send one representative up) before moving to the next team. Keep the pace quick and celebrate every attempt.",
      prompts: [
        { text: "Say hello and wave big!", emoji: "👋" },
        { text: "Say goodbye and blow a kiss!", emoji: "🙋" },
        { text: "Say 'My name is...' and point to yourself!", emoji: "🧑" },
        { text: "Point to a friend and say 'friend'!", emoji: "🧑‍🤝‍🧑" },
        { text: "Say a full sentence: 'Hello, my name is ___.'", emoji: "💬", minTrack: "explorers" },
      ],
    },
    {
      type: "chant",
      title: "Hello and Goodbye Chant",
      instructions:
        "Say each call line and wave (or point) as you say it. The whole class echoes the response line back to you.",
      lines: [
        { call: "Hello, hello, what do we say?", response: "Hello, hello, hooray, hooray!" },
        { call: "Who is this? Who is this?", response: "It's my friend, it's my friend!" },
        {
          call: "Time to go, what do we say?",
          response: "Goodbye, goodbye, see you today!",
          minTrack: "explorers",
        },
        { call: "Hello, goodbye, what do we say?", response: "Hello, friend! Goodbye, friend!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Everyone wave and say \"Hello, Vora!\" together.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we said hello and goodbye, met Vora, our AI friend for this course, acted out our greetings, and chanted hello and goodbye together.",
      summarySimple: "Today we said hello and goodbye to our new friend Vora!",
      homework: "Say \"hello\" and \"goodbye\" to one family member in English tonight.",
    },
  ],
};

export const w1d2_voras_classroom: Lesson = {
  ...meta("w1d2_voras_classroom"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Hold up a book (or point to one) and ask \"What is this?\" Model the answer \"It's a book\" before kids try.",
      prompt: "What is this?",
    },
    {
      type: "vocab",
      title: "Classroom Objects",
      words: [
        { word: "book", emoji: "📖" },
        { word: "pencil", emoji: "✏️" },
        { word: "chair", emoji: "🪑" },
        { word: "desk", emoji: "🗄️" },
        { word: "bag", emoji: "🎒" },
      ],
    },
    {
      type: "concept",
      title: "Vora Looks Around",
      bigIdeas: ["perception"],
      lines: [
        { text: "I can see things too — just like you!" },
        {
          text: "When I look at a picture, I try to name what's in it.",
          textSimple: "I look at a picture. I try to name it!",
        },
        {
          text: "That's called perception — how I understand what I see.",
          textSimple: "That's called perception. It means understanding what I see.",
        },
      ],
      teacherNote:
        "First use of the word \"perception\" — say it once, define it in one plain sentence, and move on. Don't quiz on the term itself.",
    },
    {
      type: "story",
      title: "Vora Looks at a Messy Desk",
      teacherNote:
        "Hold up (or point to) each classroom object as Vora names it in the story. Pause after panel 2 to ask kids what THEY see in a messy desk picture before Vora sorts it out.",
      panels: [
        {
          text: "Vora saw a photo of a messy desk, piled high with all sorts of things.",
          textSimple: "Vora saw a messy desk.",
          emoji: "🗄️",
        },
        {
          text: "\"Hmm,\" said Vora, \"is that a pencil or a crayon? A book or a notebook? I need to look closer.\"",
          textSimple: "Vora looked closer at each thing.",
          emoji: "🔍",
        },
        {
          text: "Vora looked at the long, thin, yellow shape and said, \"That one has a point — it's a pencil!\"",
          textSimple: "\"Long and thin — a pencil!\" said Vora.",
          emoji: "✏️",
        },
        {
          text: "Then Vora spotted flat pages with pictures. \"Pages that open like this — that's a book!\"",
          textSimple: "\"Pages that open — a book!\" said Vora.",
          emoji: "📖",
        },
        {
          text: "One by one, Vora named the chair, the desk, and the bag too — every single thing on the messy desk!",
          textSimple: "Vora named the chair, desk, and bag too!",
          emoji: "🎒",
        },
        {
          text: "Vora wasn't magic — it just looked very closely at each shape and detail, the same way you look closely to tell a pencil from a crayon.",
          textSimple: "No magic! Vora just looked closely at each shape.",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "How did Vora figure out what each object was?",
          discussionNote: "It looked closely at shape and details — long and thin for a pencil, pages that open for a book — not a magic guess.",
        },
        {
          question: "What's something you had to look at very closely to tell what it was?",
          discussionNote: "Open discussion — connect to the idea that careful looking (perception) is a skill both people and AI use, not something instant or magical.",
        },
      ],
    },
    {
      type: "movement",
      title: "Classroom Object Actions!",
      instructions:
        "Call out each classroom object and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Book — open your hands like a book and 'read'", emoji: "📖" },
        { text: "Pencil — pretend to write in the air", emoji: "✏️" },
        { text: "Chair — pretend to sit down slowly", emoji: "🪑" },
        { text: "Desk — pat your hands on an imaginary desk", emoji: "🗄️" },
        { text: "Bag — swing an imaginary bag onto your shoulder", emoji: "🎒" },
      ],
    },
    {
      type: "stand_sit",
      title: "Classroom Objects: True or False!",
      instructions:
        "Read each statement aloud. Kids STAND UP if they think it's true, and crouch down low if they think it's false. Reveal the answer and read the explanation before moving to the next one.",
      statements: [
        { text: "A book has pages you can open and read.", isTrue: true, explanation: "Yes! Books are full of pages with words and pictures.", emoji: "📖" },
        { text: "A pencil can bounce like a ball.", isTrue: false, explanation: "No — a pencil is for writing and drawing, not bouncing!", emoji: "✏️" },
        { text: "You can sit down on a chair.", isTrue: true, explanation: "Yes! Chairs are for sitting.", emoji: "🪑" },
        { text: "A bag can hold your books and pencils inside it.", isTrue: true, explanation: "Yes! Bags carry our things to and from school.", emoji: "🎒" },
        {
          text: "Vora needs a desk to sit at, just like you.",
          isTrue: false,
          explanation: "No — Vora lives inside a screen, so it doesn't need a chair or a desk at all!",
          emoji: "🖥️",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "chant",
      title: "What Is This? Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching classroom object. The whole class echoes the response line back to you.",
      lines: [
        { call: "What is this? What is this?", response: "It's a book, it's a book!" },
        { call: "What is this? Tell me true!", response: "It's a pencil, yellow and new!" },
        {
          call: "What is this? Look and see!",
          response: "It's a chair, for you and me!",
          minTrack: "explorers",
        },
        { call: "What is this? What do you spy?", response: "It's a bag, hanging up high!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Point to something in the room and ask a partner \"What is this?\"",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we named five classroom objects, asked \"What is this?\", acted out each object, and chanted \"What is this?\" together.",
      summarySimple: "Today we learned classroom words and chanted 'What is this?' together!",
    },
  ],
};

export const w1d3_what_is_ai: Lesson = {
  ...meta("w1d3_what_is_ai"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask: \"Is a book smart? Is a phone smart?\" Let kids answer with gut instinct — there's no wrong answer yet, you're just activating the idea.",
      prompt: "Smart helper, or regular thing?",
      promptSimple: "Is it smart, or just a thing?",
    },
    {
      type: "concept",
      title: "Smart Helper or Regular Thing?",
      bigIdeas: ["perception", "learning"],
      lines: [
        {
          text: "Some things can learn and answer questions — like me!",
          textSimple: "Some things can learn. I can learn too!",
        },
        {
          text: "Some things just sit there and don't change. That's okay too.",
          textSimple: "Some things don't learn. That's okay!",
        },
        {
          text: "Let's sort some pictures together: smart helper, or regular thing?",
          textSimple: "Let's sort pictures: smart or not smart?",
        },
      ],
      teacherNote:
        "This is the first classification loop of the course. Frame it as sorting, not testing — wrong guesses are expected and fine.",
    },
    {
      type: "story",
      title: "Vora Meets a Toy Robot",
      teacherNote:
        "This story directly sets up today's sorting game below — after panel 3, pause and ask the class to guess if the toy robot is a \"smart helper\" or a \"regular thing\" before revealing panel 4.",
      panels: [
        {
          text: "A girl named Jimin held up her favorite toy robot and asked, \"Vora, is my robot a smart helper like you?\"",
          textSimple: "Jimin showed her toy robot to Vora.",
          emoji: "🤖",
        },
        {
          text: "Vora looked closely. The toy robot had blinking lights and could roll across the floor.",
          textSimple: "The toy robot had lights. It could roll.",
          emoji: "👀",
        },
        {
          text: "\"But can it answer your questions? Can it learn something new?\" asked Vora.",
          textSimple: "\"Can it answer? Can it learn?\" asked Vora.",
          emoji: "❓",
        },
        {
          text: "Jimin tried asking it a question. The toy just rolled forward the same way, again and again — it didn't answer at all.",
          textSimple: "The toy just rolled. It did not answer.",
          emoji: "🔁",
        },
        {
          text: "\"That's your answer,\" said Vora. \"Your robot is a fun toy, but it's a regular thing — it doesn't learn or answer like a smart helper does.\"",
          textSimple: "\"It's a regular thing,\" said Vora. \"It can't learn or answer.\"",
          emoji: "📦",
        },
        {
          text: "It's not magic, and it's not about looking like a robot — a smart helper is anything that can learn and answer, no matter its shape.",
          textSimple: "No magic! A smart helper can learn and answer — that's what matters.",
          emoji: "🧠",
        },
      ],
      comprehensionQuestions: [
        {
          question: "Why wasn't Jimin's toy robot a \"smart helper,\" even though it looked like a robot?",
          discussionNote: "It couldn't answer questions or learn anything new — looking like a robot doesn't matter, only whether it can learn and respond.",
        },
        {
          question: "Can you think of something at home that looks plain but is actually a smart helper?",
          discussionNote: "Open discussion — e.g. a smart speaker, a tablet with an assistant app — the point is smart helpers don't have to look like robots at all.",
        },
      ],
    },
    {
      type: "movement",
      title: "Smart Helper or Regular Thing Actions!",
      instructions:
        "Call out each item and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        {
          text: "Voice assistant — cup your hand to your ear and say 'Hello!'",
          emoji: "🔊",
          minTrack: "explorers",
        },
        { text: "Phone — hold a pretend phone to your ear", emoji: "📱" },
        { text: "Robot — walk stiffly like a robot", emoji: "🤖" },
        { text: "Book — open your hands like a book", emoji: "📖" },
        { text: "Pencil — pretend to write in the air", emoji: "✏️" },
        { text: "Ball — pretend to bounce a ball", emoji: "⚽" },
      ],
    },
    {
      type: "activity",
      instructions: "As a class, decide together where each picture goes before anyone taps — this is a shared sort, not an individual quiz.",
      config: {
        engine: "train_the_robot",
        title: "Smart Helper or Regular Thing?",
        labelA: "Smart Helper",
        labelB: "Regular Thing",
        emojiA: "🤖",
        emojiB: "📦",
        items: [
          { word: "voice assistant", emoji: "🔊", bucket: "a" },
          { word: "phone", emoji: "📱", bucket: "a" },
          { word: "robot", emoji: "🤖", bucket: "a" },
          { word: "book", emoji: "📖", bucket: "b" },
          { word: "pencil", emoji: "✏️", bucket: "b" },
          { word: "chair", emoji: "🪑", bucket: "b" },
          { word: "ball", emoji: "⚽", bucket: "b" },
        ],
      },
    },
    {
      type: "class_vote",
      title: "Smart Helper or Not? You Decide!",
      instructions:
        "Read the question aloud. Have kids vote with a show of hands for each option, or turn-and-talk with a partner first. There's no single right answer — the goal is to get kids reasoning and talking about WHY.",
      question: "If you could have ONE smart helper at home, which would you pick?",
      questionSimple: "Which smart helper do you like best?",
      options: [
        { text: "A voice assistant that answers questions", emoji: "🔊" },
        { text: "A robot that can talk and learn", emoji: "🤖" },
        { text: "A smart helper that reads stories out loud", emoji: "📖" },
        { text: "None — I like doing things myself!", emoji: "🙋" },
      ],
    },
    {
      type: "chant",
      title: "Smart Helper Chant",
      instructions:
        "Say each call line and point to (or hold up) the matching picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Robot, robot, what are you?", response: "I'm a smart helper, that is true!" },
        { call: "Phone, phone, tell me so,", response: "I'm a smart helper, yes, I know!" },
        {
          call: "Book, book, can you learn?",
          response: "No, I'm a regular thing, it's my turn!",
          minTrack: "explorers",
        },
        { call: "Ball, ball, smart or plain?", response: "Just a regular thing, again and again!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Ask one table: \"Tell me one smart helper you have at home.\"",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned that some things can learn and answer, and some things can't — we practiced sorting them just like Vora does, acted out smart helpers and regular things, and chanted about them together.",
      summarySimple: "Today we learned that some things are smart helpers and some things are not!",
    },
  ],
};
