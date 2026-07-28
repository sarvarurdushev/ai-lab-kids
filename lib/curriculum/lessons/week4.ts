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
      type: "vocab_review",
      title: "Words We Know",
      teacherNote:
        "One word from each of the first three weeks, so greetings, animals, and colors don't fade before the class moves past Week 8 into the year-long curriculum. Read each word chorally BEFORE tapping — the tap is a rescue, not the activity. If more than two of the five need the picture, spend two extra minutes on that week's chant before today's new family words.",
      words: [
        { word: "hello", emoji: "👋", fromMonth: 1 },
        { word: "friend", emoji: "🧑‍🤝‍🧑", fromMonth: 1 },
        { word: "cat", emoji: "🐱", fromMonth: 2 },
        { word: "blue", emoji: "🔵", fromMonth: 3 },
        { word: "star", emoji: "⭐", fromMonth: 3, minTrack: "explorers" },
      ],
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
      type: "listen_and_do",
      title: "Listen and Do!",
      instructions:
        "Give each command ONCE, at normal speed — don't repeat it right away. Wait for everyone to move before revealing which family word matched. This checks listening, not reading, so keep the word list hidden until after each round.",
      commands: [
        { text: "Blow a big kiss, like saying hi to mom.", steps: 1, emoji: "👩" },
        { text: "Give a thumbs up like dad, then fist bump the air like brother.", steps: 2, emoji: "👨" },
        { text: "Wave both hands high like sister, then pat both knees like grandpa.", steps: 3, emoji: "👧" },
        {
          text: "Rock your arms like holding a baby, wave slowly like grandma, then blow a kiss like mom.",
          steps: 3,
          emoji: "👶",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "Total Physical Response: the point is proving the class connects each family word to its action from the Family Actions movement game BEFORE anyone has to say the word aloud, so don't translate into Korean even if a child hesitates — repeat the action bigger instead. Grade it live: if the whole class nails the 1-step command instantly, skip straight to the 3-step ones.",
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
      type: "partner_talk",
      title: "This Is My Family!",
      frame: "This is my ___.",
      frameSimple: "My ___.",
      cards: [
        { prompt: "mom", emoji: "👩", sampleAnswer: "This is my mom." },
        { prompt: "dad", emoji: "👨", sampleAnswer: "This is my dad." },
        { prompt: "sister", emoji: "👧", sampleAnswer: "This is my sister." },
        { prompt: "brother", emoji: "👦", sampleAnswer: "This is my brother." },
        { prompt: "grandma", emoji: "👵", sampleAnswer: "This is my grandma.", minTrack: "explorers" },
      ],
      secondsPerTurn: 20,
      teacherNote:
        "Partner A holds up (or points to) the card and says the frame, Partner B repeats the sentence back with the same word, then they swap who's holding the card. Every pair talks at once, so circulate and listen rather than running this as a whole-class drill; the point is that every child produces \"This is my ___\" multiple times, not that you hear each one.",
    },
    {
      type: "draw_and_label",
      title: "Draw My Family",
      instructions: "Draw a picture of your family, then label each person using a word from the word bank.",
      instructionsSimple: "Draw your family! Write the words.",
      wordBank: [
        { word: "mom", emoji: "👩" },
        { word: "dad", emoji: "👨" },
        { word: "sister", emoji: "👧" },
        { word: "brother", emoji: "👦" },
        { word: "grandma", emoji: "👵" },
        { word: "grandpa", emoji: "👴" },
        { word: "baby", emoji: "👶" },
      ],
      exampleNote:
        "A simple stick-figure family lined up in a row, with a word from the word bank written underneath each person — 'mom' under the tallest figure, 'baby' under the smallest — copied straight from the word bank rather than spelled from memory.",
      minutes: 4,
      teacherNote:
        "Papers and pencils out. Keep the word bank on screen the whole time — the point is confident copying, not a spelling test. Circulate and, if a label doesn't match the person drawn, point back at the word bank rather than telling them the right word.",
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
      type: "vocab_review",
      title: "Words We Know",
      teacherNote:
        "Two words from each of the first three weeks, so greetings, animals, and colors don't fade before the unit's final review day. Read each word chorally BEFORE tapping — the tap is a rescue, not the activity. If more than half the class needs the picture, revisit that week's chant before today's tricky new sound.",
      words: [
        { word: "pencil", emoji: "✏️", fromMonth: 1 },
        { word: "chair", emoji: "🪑", fromMonth: 1 },
        { word: "rabbit", emoji: "🐰", fromMonth: 2 },
        { word: "fish", emoji: "🐟", fromMonth: 2 },
        { word: "yellow", emoji: "🟡", fromMonth: 3 },
        { word: "circle", emoji: "⭕", fromMonth: 3, minTrack: "explorers" },
      ],
    },
    {
      type: "listen_and_do",
      title: "Listen and Do!",
      instructions:
        "Give each command ONCE, at normal speed — don't repeat it right away. Wait for everyone to move before revealing which word matched. This checks listening, not reading, so keep the words hidden until after each round.",
      commands: [
        { text: "Point to your mouth.", steps: 1, emoji: "👄" },
        { text: "Tap your finger on your head like thinking, then cup your hands like washing in a sink.", steps: 2, emoji: "🤔" },
        {
          text: "Wiggle your nose like a mouse, scrub your arms like a bath, then march in place like a path.",
          steps: 3,
          emoji: "🐭",
        },
        {
          text: "Cup your hands like a sink, tap your head like thinking, then point to your mouth.",
          steps: 3,
          emoji: "🚰",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "Total Physical Response: the point is proving the class connects each word to its action from the Th and S Sound Actions movement game BEFORE anyone has to say the word aloud, so don't translate into Korean even if a child hesitates — repeat the action bigger instead. Grade it live: if the whole class nails the 1-step command instantly, skip straight to the 3-step ones.",
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
      type: "partner_talk",
      title: "Say It Clearly!",
      frame: "The word is ___.",
      frameSimple: "Say it: ___.",
      cards: [
        { prompt: "think", emoji: "🤔", sampleAnswer: "The word is think." },
        { prompt: "sink", emoji: "🚰", sampleAnswer: "The word is sink." },
        { prompt: "mouth", emoji: "👄", sampleAnswer: "The word is mouth." },
        { prompt: "path", emoji: "🛤️", sampleAnswer: "The word is path.", minTrack: "explorers" },
      ],
      secondsPerTurn: 20,
      teacherNote:
        "Partner A points to the card and says the frame, Partner B watches Partner A's tongue position and repeats the word back, then they swap. Every pair talks at once, so circulate and listen for tongue-between-the-teeth on the th words rather than running this as a whole-class drill.",
    },
    {
      type: "role_play",
      title: "Think or Sink?",
      setting: "Two friends checking each other's tricky words.",
      roles: ["Friend A", "Friend B"],
      exchanges: [
        { role: 0, line: "Did you say 'think' or 'sink'?", lineSimple: "Think or sink?", emoji: "🤔" },
        { role: 1, line: "I said 'think' — watch my tongue peek out!", lineSimple: "Think! Watch my tongue!", emoji: "👅" },
        { role: 0, line: "Now say 'mouth' and 'mouse' for me.", lineSimple: "Say mouth and mouse!", emoji: "👄" },
        { role: 1, line: "Mouth! Mouse! Can you hear the difference?", lineSimple: "Mouth! Mouse!", emoji: "✅" },
      ],
      teacherNote:
        "Pairs rehearse both roles, then invite a volunteer pair to perform it for the class, exaggerating the tongue position for 'think' and 'mouth' so the rest of the class can see the difference — the same tongue-watching trick Vora used in today's story.",
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
      type: "vocab_review",
      title: "Words We Know",
      teacherNote:
        "Two words from each of the first three weeks, so greetings, animals, and colors don't fade before the unit's final review days. Read each word chorally BEFORE tapping — the tap is a rescue, not the activity. If more than half the class needs the picture, revisit that week's chant before today's counting practice.",
      words: [
        { word: "goodbye", emoji: "🙋", fromMonth: 1 },
        { word: "book", emoji: "📖", fromMonth: 1 },
        { word: "dog", emoji: "🐶", fromMonth: 2 },
        { word: "bird", emoji: "🐦", fromMonth: 2 },
        { word: "green", emoji: "🟢", fromMonth: 3 },
        { word: "triangle", emoji: "🔺", fromMonth: 3, minTrack: "explorers" },
      ],
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
      type: "listen_and_do",
      title: "Listen and Do!",
      instructions:
        "Give each command ONCE, at normal speed — don't repeat it right away. Wait for everyone to move before revealing the number. This checks listening, not reading, so keep the numbers hidden until after each round.",
      commands: [
        { text: "Hold up one finger.", steps: 1, emoji: "1️⃣" },
        { text: "Hold up two fingers, then clap two times.", steps: 2, emoji: "2️⃣" },
        { text: "Hold up three fingers, stomp three times, then sit down.", steps: 3, emoji: "3️⃣" },
        {
          text: "Hold up four fingers, spin around once, then hold up five fingers and freeze.",
          steps: 3,
          emoji: "5️⃣",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "Total Physical Response: the point is proving the class connects each number word to a quantity BEFORE anyone has to say the number aloud, so don't translate into Korean even if a child hesitates — hold up your own fingers bigger and slower instead. Grade it live: if the whole class nails the 1-step command instantly, skip straight to the 3-step ones.",
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
      type: "partner_talk",
      title: "How Many Dogs?",
      frame: "I have ___ dogs.",
      frameSimple: "___ dogs.",
      cards: [
        { prompt: "two", emoji: "2️⃣", sampleAnswer: "I have two dogs." },
        { prompt: "three", emoji: "3️⃣", sampleAnswer: "I have three dogs." },
        { prompt: "four", emoji: "4️⃣", sampleAnswer: "I have four dogs." },
        { prompt: "five", emoji: "5️⃣", sampleAnswer: "I have five dogs.", minTrack: "explorers" },
      ],
      secondsPerTurn: 20,
      teacherNote:
        "Partner A looks at the card and asks 'How many dogs?' — Partner B answers with the full frame, then they swap who's asking. Every pair talks at once, so circulate and listen rather than running this as a whole-class drill; the point is that every child produces the sentence multiple times, not that you hear each one.",
    },
    {
      type: "role_play",
      title: "Counting Our Dogs",
      setting: "Two friends comparing how many pet dogs they have.",
      roles: ["Friend A", "Friend B"],
      exchanges: [
        { role: 0, line: "How many dogs do you have?", lineSimple: "How many dogs?", emoji: "🐶" },
        { role: 1, line: "I have three dogs! How many dogs do you have?", lineSimple: "Three dogs!", emoji: "3️⃣" },
        { role: 0, line: "I have two dogs!", lineSimple: "Two dogs!", emoji: "2️⃣" },
        {
          role: 1,
          line: "Let's count all our dogs together: one, two, three, four, five!",
          lineSimple: "Let's count together!",
          emoji: "🔢",
        },
      ],
      teacherNote:
        "Pairs rehearse both roles, then invite a volunteer pair to perform it for the class. If a pair's real dog count is zero, they can swap in a pretend number for the scene — the point is practicing the question-and-answer exchange, not a true count.",
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
