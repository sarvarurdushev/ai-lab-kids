import type { Lesson } from "../types";
import { getLessonMeta } from "../scopeAndSequence";

function meta(key: string) {
  const m = getLessonMeta(key);
  if (!m) throw new Error(`No scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const w4d1_my_family: Lesson = {
  ...meta("w4d1_my_family"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Show a family photo (yours or a drawn example) and point: \"This is my mom.\"",
      prompt: "This is my family.",
    },
    {
      type: "vocab",
      title: "Family",
      words: [
        { word: "mom", emoji: "👩" },
        { word: "dad", emoji: "👨" },
        { word: "sister", emoji: "👧" },
        { word: "brother", emoji: "👦" },
        { word: "grandma", emoji: "👵" },
        { word: "grandpa", emoji: "👴" },
        { word: "baby", emoji: "👶" },
      ],
    },
    {
      type: "concept",
      title: "My Family",
      bigIdeas: [],
      lines: [
        {
          text: "\"My\" means it belongs to me — my mom, my dad, my family.",
          textSimple: "My mom. My dad. My family!",
        },
      ],
      teacherNote:
        "Korean family terms encode relative age and the speaker's gender in a way English \"brother/sister\" doesn't — expect kids to want to specify more. Validate that (\"Yes, in Korean we'd say more — in English we just say brother!\") rather than treating it as a mistake.",
    },
    {
      type: "story",
      title: "Vora Learns a New Family Word",
      teacherNote:
        "Pause after panel 2 to ask the class what THEY call their own grandparents before revealing what Vora learns — this personalizes the story and previews today's family vocabulary.",
      panels: [
        {
          text: "A girl named Sora showed Vora a photo of her whole family, all smiling together.",
          textSimple: "Sora showed Vora her family photo.",
          emoji: "👨‍👩‍👧‍👦",
        },
        {
          text: "\"Who is this?\" asked Vora, pointing at an older man with a big smile. \"I don't know that word yet.\"",
          textSimple: "\"Who is this?\" asked Vora.",
          emoji: "❓",
        },
        {
          text: "\"That's my grandpa!\" said Sora. \"He tells the best stories.\"",
          textSimple: "\"That's my grandpa!\" said Sora.",
          emoji: "👴",
        },
        {
          text: "\"Grandpa,\" repeated Vora. \"Thank you for teaching me — now I know that word too!\"",
          textSimple: "\"Grandpa,\" said Vora. \"Now I know that word!\"",
          emoji: "💬",
        },
        {
          text: "The next day, Vora saw another photo with an older man in it and said right away, \"Is that your grandpa?\"",
          textSimple: "The next day, Vora used the new word!",
          emoji: "✅",
        },
        {
          text: "Vora wasn't magic — it didn't already know the word \"grandpa\" — it learned it by listening to Sora, the exact same way you learn new words from the people around you.",
          textSimple: "No magic! Vora learned \"grandpa\" by listening to Sora.",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "How did Vora learn the word \"grandpa\"?",
          discussionNote: "It didn't already know the word — it asked, listened to Sora's answer, and remembered it, the same way people learn new words from each other.",
        },
        {
          question: "What's a word a grown-up in YOUR family taught you?",
          discussionNote: "Open discussion — connect back to the idea that learning new words from people you talk to is something both kids and Vora do.",
        },
      ],
    },
    {
      type: "movement",
      title: "Family Actions!",
      instructions:
        "Call out each family word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Mom — blow a big kiss", emoji: "👩" },
        { text: "Dad — give a thumbs up", emoji: "👨" },
        { text: "Sister — wave both hands high", emoji: "👧" },
        { text: "Brother — fist bump the air", emoji: "👦" },
        { text: "Grandma — wave slowly like saying hello", emoji: "👵" },
        { text: "Grandpa — pat both knees", emoji: "👴" },
        {
          text: "Baby — rock your arms like holding a baby",
          emoji: "👶",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "class_vote",
      title: "Family Talk Vote!",
      instructions:
        "Read the question aloud. Have kids vote with a show of hands or turn-and-talk with a partner. There's no single right answer — the goal is getting kids talking about their own families.",
      question: "What's your favorite thing to do with your family?",
      questionSimple: "What do you like to do with your family?",
      options: [
        { text: "Eat a yummy meal together", emoji: "🍚" },
        { text: "Play games together", emoji: "🎲" },
        { text: "Watch a movie together", emoji: "🎬" },
        { text: "Go outside together", emoji: "🌳" },
      ],
    },
    {
      type: "chant",
      title: "My Family Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching family picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Family, family, who's this here?", response: "This is my mom, my mom so dear!" },
        { call: "Family, family, who's over there?", response: "This is my dad, with silly hair!" },
        {
          call: "Family, family, who do you see?",
          response: "This is my sister, playing with me!",
          minTrack: "explorers",
        },
        { call: "Family, family, tell me true —", response: "This is my family, I love you!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Ask a partner: \"Do you have a sister or a brother?\"",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned family words and how to say \"my\" family members in English, acted out our family words together, and chanted about our families.",
      summarySimple: "Today we learned family words and sang about our families!",
      homework: "Introduce your family in English to someone at home.",
    },
  ],
};

export const w4d3_think_or_sink: Lesson = {
  ...meta("w4d3_think_or_sink"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Say \"think\" and \"sink\" slowly, back to back, a few times, without explaining yet.",
      prompt: "think... sink... think... sink...",
    },
    {
      type: "concept",
      title: "A New Sound: th",
      bigIdeas: ["perception"],
      lines: [
        {
          text: "For \"th,\" put your tongue between your teeth and blow air gently.",
          textSimple: "Put your tongue between your teeth. Blow air!",
        },
        {
          text: "Korean doesn't have this sound either — it's another brand-new one!",
          textSimple: "This sound is brand new for you too!",
        },
        { text: "Let's listen very carefully and pick the word we hear." },
      ],
      teacherNote: "Korean has no dental fricative /θ/; it's commonly substituted with /s/ or /t/ in loanwords and early L2 production.",
    },
    {
      type: "story",
      title: "Vora Spots the Tricky Tongue",
      teacherNote:
        "Model putting your tongue between your teeth for 'th' and pulling it back for 's' as you read panels 2-4, so kids can see the tongue-position difference Vora describes.",
      panels: [
        {
          text: "Vora heard two words that almost sound the same: \"think\" and \"sink.\"",
          textSimple: "Vora heard \"think\" and \"sink.\"",
          emoji: "🤔",
        },
        {
          text: "\"They sound so close together,\" said Vora. \"I need to look for a clue.\"",
          textSimple: "\"They sound close,\" said Vora.",
          emoji: "🔎",
        },
        {
          text: "Vora noticed that for \"think,\" the tongue peeks out between the teeth. For \"sink,\" the tongue stays hidden behind the teeth.",
          textSimple: "\"Think\" — tongue peeks out. \"Sink\" — tongue stays hidden.",
          emoji: "👅",
        },
        {
          text: "\"Now I can tell them apart!\" said Vora. \"Watching the tongue is the clue!\"",
          textSimple: "\"Now I can tell them apart!\" said Vora.",
          emoji: "✅",
        },
        {
          text: "Vora wasn't magic — it just noticed a small difference in tongue position, exactly what YOU are about to practice listening for.",
          textSimple: "No magic! Vora just noticed the tongue's position.",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "What clue helped Vora tell \"think\" and \"sink\" apart?",
          discussionNote: "Watching where the tongue goes — peeking out between the teeth for 'th,' staying hidden for 's' — a visible clue, not a guess.",
        },
        {
          question: "Try saying 'think' and 'sink' yourself — can you feel where your tongue goes for each one?",
          discussionNote: "Open, hands-on discussion — have kids feel their own tongue position, reinforcing the story's observation.",
        },
      ],
    },
    {
      type: "movement",
      title: "Th and S Sound Actions!",
      instructions:
        "Call out each word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Think — tap your finger on your head like thinking", emoji: "🤔" },
        { text: "Sink — cup your hands like washing them in a sink", emoji: "🚰" },
        { text: "Mouth — point to your mouth and open it wide", emoji: "👄" },
        { text: "Mouse — wiggle your nose like a tiny mouse", emoji: "🐭" },
        { text: "Bath — scrub your arms like washing in the bath", emoji: "🛁" },
        { text: "Path — march in place like walking down a path", emoji: "🛤️" },
      ],
    },
    {
      type: "activity",
      instructions: "Play each word once, and have kids point to or say the picture they heard. Repeat any pair the class finds hard.",
      config: {
        engine: "minimal_pairs",
        title: "Listen Closely: th or s?",
        targetSound: "/θ/ (\"th\") vs /s/",
        teacherNote: "Korean has no /θ/; expect substitution with /s/ or /t/. This is the third of the four sound gaps drilled this unit.",
        pairs: [
          { wordA: { text: "think", emoji: "🤔" }, wordB: { text: "sink", emoji: "🚰" } },
          { wordA: { text: "mouth", emoji: "👄" }, wordB: { text: "mouse", emoji: "🐭" } },
          { wordA: { text: "bath", emoji: "🛁" }, wordB: { text: "bass", emoji: "🐟" } },
          { wordA: { text: "path", emoji: "🛤️" }, wordB: { text: "pass", emoji: "🏈" } },
        ],
      },
    },
    {
      type: "team_relay",
      title: "Th or S Word Relay",
      instructions:
        "Split the class into teams. Read each prompt aloud and have the next team try it together before moving to the next team. Check each other's tongue position for 'th' words as a class.",
      prompts: [
        { text: "Say a word that starts with the TH sound, like 'think'!", emoji: "🤔" },
        { text: "Say a word that starts with the S sound, like 'sink'!", emoji: "🚰" },
        { text: "Point to your mouth and say 'mouth'!", emoji: "👄" },
        { text: "Wiggle your nose like a mouse and say 'mouse'!", emoji: "🐭" },
        { text: "Pretend to wash in the bath and say 'bath'!", emoji: "🛁", minTrack: "explorers" },
      ],
    },
    {
      type: "chant",
      title: "Think or Sink Chant",
      instructions:
        "Say each call line and have the class echo the response, listening closely for the sound at the start.",
      lines: [
        { call: "Th or s, which do you hear?", response: "Think! Think! Loud and clear!" },
        { call: "Th or s, listen well —", response: "Bath! Bath! Now can you tell?" },
        {
          call: "Th or s, say it slow —",
          response: "Mouth! Mouth! Watch it go!",
          minTrack: "explorers",
        },
        { call: "Th or s, one more time —", response: "Path! Path! Say it in rhyme!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Say \"think\" and \"sink\" one more time — thumbs up if you can hear the difference now.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we practiced listening for the th sound — the third new sound this unit — acted out th and s words together, and chanted about the sounds we heard. One more to go in Week 8's review!",
      summarySimple: "Today we listened closely for the th sound!",
    },
  ],
};

export const w4d2_count_with_vora: Lesson = {
  ...meta("w4d2_count_with_vora"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Count five objects in the room out loud together: \"One, two, three, four, five.\"",
      prompt: "1, 2, 3, 4, 5...",
    },
    {
      type: "vocab",
      title: "Numbers 1-10",
      words: [
        { word: "one", emoji: "1️⃣" },
        { word: "two", emoji: "2️⃣" },
        { word: "three", emoji: "3️⃣" },
        { word: "four", emoji: "4️⃣" },
        { word: "five", emoji: "5️⃣" },
      ],
    },
    {
      type: "concept",
      title: "Vora Counts, Too",
      bigIdeas: ["perception"],
      lines: [
        {
          text: "When I look at a picture, I can count how many things are in it.",
          textSimple: "I can count things in a picture!",
        },
        {
          text: "\"How many dogs?\" \"Two dogs!\" — counting is a way of understanding a picture.",
          textSimple: "How many dogs? Two dogs! Counting helps me understand.",
        },
      ],
      teacherNote:
        "Keep this light — it's just planting that \"counting what's in a picture\" is something both people and AI do, ahead of the sentence-building activity.",
    },
    {
      type: "story",
      title: "Vora Counts the Dogs at the Park",
      teacherNote:
        "Pause after panel 2 to let the class count along with Vora out loud before panel 3 reveals the total — great rehearsal for the sentence-building activity below.",
      panels: [
        {
          text: "Vora looked at a photo of a park full of dogs, running and playing everywhere.",
          textSimple: "Vora saw a park full of dogs.",
          emoji: "🐶",
        },
        {
          text: "\"How many dogs are there?\" someone asked. Vora looked closely and started counting: one, two, three...",
          textSimple: "\"How many dogs?\" Vora started counting.",
          emoji: "🔢",
        },
        {
          text: "Vora counted very carefully, touching each dog with its eyes so it wouldn't count the same dog twice: four, five!",
          textSimple: "Vora counted carefully. Four, five!",
          emoji: "👀",
        },
        {
          text: "\"There are five dogs at the park!\" said Vora. \"I have five dogs in this picture.\"",
          textSimple: "\"Five dogs!\" said Vora.",
          emoji: "5️⃣",
        },
        {
          text: "Vora wasn't magic — it just counted one at a time, very carefully, so it wouldn't skip one or count one twice, exactly like you do with your fingers.",
          textSimple: "No magic! Vora counted one at a time, carefully.",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "How did Vora make sure it didn't count the same dog twice?",
          discussionNote: "It counted carefully and kept track of each one, one at a time — a careful process, not a magic guess.",
        },
        {
          question: "Count something around the room right now — how many did you find?",
          discussionNote: "Open, hands-on practice — have a few kids share their count out loud, reinforcing careful one-at-a-time counting.",
        },
      ],
    },
    {
      type: "movement",
      title: "Counting Actions!",
      instructions:
        "Call out each number and hold up that many fingers together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "One — hold up one finger", emoji: "1️⃣" },
        { text: "Two — hold up two fingers", emoji: "2️⃣" },
        { text: "Three — hold up three fingers", emoji: "3️⃣" },
        { text: "Four — hold up four fingers", emoji: "4️⃣" },
        { text: "Five — hold up five fingers and wave", emoji: "5️⃣" },
      ],
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, left to right. Say each word aloud as a tile is placed, then read the full sentence together.",
      config: {
        engine: "sentence_builder",
        title: "I have two dogs.",
        words: [
          { text: "I", role: "subject" },
          { text: "have", role: "verb" },
          { text: "two", role: "other" },
          { text: "dogs", role: "object" },
        ],
      },
    },
    {
      type: "stand_sit",
      title: "Counting: True or False!",
      instructions:
        "Read each statement. Kids STAND UP if they think it's true, and crouch down low if they think it's false. Reveal the answer and read the explanation before moving on.",
      statements: [
        { text: "If you count one, two, three, you have counted three things.", isTrue: true, explanation: "Yes! Counting up to three means there are three things.", emoji: "3️⃣" },
        { text: "Four is more than two.", isTrue: true, explanation: "Yes! Four is a bigger number than two.", emoji: "4️⃣" },
        { text: "If you count the same dog twice, you get the right total.", isTrue: false, explanation: "No — counting something twice gives you the wrong total. Each thing gets counted just once!", emoji: "🐶" },
        { text: "One means just a single thing, all by itself.", isTrue: true, explanation: "Yes! One means just a single thing.", emoji: "1️⃣" },
        {
          text: "You can only count things you can see — never things you hear, like claps.",
          isTrue: false,
          explanation: "No — you can count sounds too, like counting claps or drumbeats!",
          emoji: "👏",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "chant",
      title: "Counting Chant",
      instructions:
        "Say each call line and hold up your fingers for the number. The whole class echoes the response line back to you.",
      lines: [
        { call: "Counting, counting, one and two —", response: "I have two dogs, how about you?" },
        { call: "Counting, counting, one, two, three —", response: "I have three dogs, running free!" },
        {
          call: "Counting, counting, four or more —",
          response: "I have four dogs at my door!",
          minTrack: "explorers",
        },
        { call: "Counting, counting, count up high —", response: "I have five dogs, reaching the sky!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Ask a few kids: \"How many ___ do you have?\" using a word they know.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we counted to five and built the sentence \"I have two dogs\" in the right English word order, acted out the numbers with our fingers, and chanted about counting dogs together.",
      summarySimple: "Today we counted to five and built a sentence with Vora!",
      homework: "Count five things at home in English.",
    },
  ],
};
