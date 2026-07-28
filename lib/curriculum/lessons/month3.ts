import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";
import { AI_OR_NOT_SETS, INSTRUCT_VORA_SCENARIOS } from "../aiLabBank";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m3_week1: Lesson = {
  ...meta("m3_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Pretend two kids are already playing with blocks. Walk up and ask, hopefully, \"Can I play?\" Have the class echo the question with you before you explain anything.",
      prompt: "Can I play? 🧩",
    },
    {
      type: "vocab_review",
      title: "Words We Know",
      teacherNote:
        "Words from Space and Culture month, so nothing taught earlier this year goes untouched all the way to Friends month. Read each word together BEFORE tapping — the tap is a rescue, not the activity. If the class needs the picture on more than two of these words, spend an extra minute on them now rather than pushing straight into today's new friendship words. Keep it to about thirty seconds a word.",
      words: [
        { word: "star", emoji: "⭐", fromMonth: 1 },
        { word: "rocket", emoji: "🚀", fromMonth: 1 },
        { word: "astronaut", emoji: "👨‍🚀", fromMonth: 1, minTrack: "explorers" },
        { word: "world", emoji: "🌍", fromMonth: 2 },
        { word: "food", emoji: "🍲", fromMonth: 2 },
        { word: "dance", emoji: "💃", fromMonth: 2 },
      ],
    },
    {
      type: "vocab",
      title: "Friendship Words",
      words: [
        { word: "friend", emoji: "🧑‍🤝‍🧑" },
        { word: "share", emoji: "🤝" },
        { word: "play", emoji: "🧩" },
        { word: "kind", emoji: "❤️", minTrack: "explorers" },
        { word: "sorry", emoji: "😔" },
        { word: "happy", emoji: "😊" },
      ],
    },
    {
      type: "listen_and_do",
      title: "Listen and Do!",
      instructions:
        "Give each command ONCE, at normal speed — don't repeat it right away. Wait for everyone to move before explaining anything further. This checks listening, not reading, so keep it playful and quick.",
      commands: [
        { text: "Point to a friend.", steps: 1, emoji: "🧑‍🤝‍🧑" },
        { text: "Hold out your hands like you're sharing, then smile.", steps: 2, emoji: "🤝" },
        { text: "Stand up, pretend to build a puzzle with a friend, then say sorry if you bump them.", steps: 3, emoji: "🧩" },
        {
          text: "Give yourself a kind hug, jump up happy, then hold out your hands to share.",
          steps: 3,
          emoji: "❤️",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "Total Physical Response: this proves the class understood friend/share/play/kind/sorry/happy BEFORE anyone has to produce a sentence, so resist translating into Korean even if a child hesitates — model the action bigger instead. If the whole class nails the 1-step command instantly, skip ahead to the 3-step ones instead of running all four in order.",
    },
    {
      type: "concept",
      title: "Vora Takes Turns",
      bigIdeas: ["natural_interaction"],
      lines: [
        {
          text: "When I want to join a game, I ask, \"Can I play?\"",
          textSimple: "I ask, \"Can I play?\"",
        },
        {
          text: "And when I have something good to share, I say, \"Let's share.\"",
          textSimple: "I say, \"Let's share.\"",
        },
        { text: "\"Can I ___?\" starts with a little helper word, just like \"Do you ___?\" did.", minTrack: "explorers" },
        {
          text: "A good voice assistant listens quietly until you stop talking, then it answers — that's how good friends take turns too.",
          textSimple: "Good friends listen first, then talk!",
        },
      ],
      teacherNote:
        "\"Can I ___?\" is the second auxiliary-fronted question in the curriculum after \"Do you ___?\" in the foundations unit — name the shared pattern explicitly so it transfers. The AI thread: natural conversation depends on turn-taking, which is exactly what a voice assistant is designed to imitate (wait for silence, then respond).",
    },
    {
      type: "story",
      title: "Vora Learns to Wait Its Turn",
      teacherNote:
        "Read each panel aloud, pausing after panel 3 to ask what a good friend (or a good voice assistant) should do before answering — the point is patience and listening, not interrupting.",
      panels: [
        {
          text: "Vora saw two friends building a tower and blurted out, \"Can I play can I play can I play?!\" all at once, cutting them off.",
          textSimple: "Vora talked too fast and interrupted!",
          emoji: "😬",
        },
        {
          text: "The friends looked confused — they hadn't even finished their own sentence yet.",
          textSimple: "The friends were confused.",
          emoji: "😕",
        },
        {
          text: "\"I need to wait and listen first,\" Vora realized, \"just like a good voice assistant waits for quiet before it answers.\"",
          textSimple: "\"Wait and listen first,\" said Vora.",
          emoji: "👂",
        },
        {
          text: "So Vora waited quietly until the friends finished talking, then asked calmly, \"Can I play?\"",
          textSimple: "Vora waited, then asked calmly.",
          emoji: "🙋",
        },
        {
          text: "\"Yes!\" said the friends — because Vora listened first, then took its turn, just like good friends (and good voice assistants) do.",
          textSimple: "\"Yes!\" Because Vora waited its turn.",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "What did Vora do differently the second time it asked to play?",
          discussionNote: "It waited quietly and listened until the friends were done talking, instead of interrupting — the same turn-taking a voice assistant uses.",
        },
        {
          question: "Why do you think waiting for your turn helps you make friends?",
          discussionNote: "Open discussion — connects listening/patience to being a good friend, mirroring how a voice assistant waits for silence before responding.",
        },
      ],
    },
    {
      type: "movement",
      title: "Friendship Actions!",
      instructions:
        "Call out each friendship word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Friend — link arms with a partner and smile", emoji: "🧑‍🤝‍🧑" },
        { text: "Share — hold out your hands like giving something", emoji: "🤝" },
        { text: "Play — pretend to build blocks together", emoji: "🧩" },
        { text: "Kind — give yourself a warm hug", emoji: "❤️", minTrack: "explorers" },
        { text: "Sorry — hang your head gently and pat your heart", emoji: "😔" },
        { text: "Happy — jump up with a big smile", emoji: "😊" },
      ],
    },
    {
      type: "activity",
      instructions: "Kids take turns tapping the next step of making a new friend. Read each step aloud together as it's placed, then act it out with a partner.",
      config: {
        engine: "sequence_builder",
        title: "Making a Friend",
        steps: [
          { text: "Say hello", emoji: "👋" },
          { text: "Ask their name", emoji: "🙋" },
          { text: "Ask to play", emoji: "🧩" },
          { text: "Say thank you", emoji: "🙏" },
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
      type: "class_vote",
      title: "What Makes a Good Friend?",
      instructions:
        "Read the question aloud. Let kids vote by raising their hands for the choice they think matters most, or discuss as a class.",
      question: "What do you think is the most important thing a good friend does?",
      questionSimple: "What does a good friend do?",
      options: [
        { text: "Shares", emoji: "🤝" },
        { text: "Listens", emoji: "👂" },
        { text: "Says sorry", emoji: "😔" },
        { text: "Plays together", emoji: "🧩" },
      ],
    },
    {
      type: "partner_talk",
      title: "Can I Play? Partner Practice",
      frame: "Can I play with the ___?",
      frameSimple: "Can I play?",
      cards: [
        { prompt: "blocks", emoji: "🧩", sampleAnswer: "Can I play with the blocks?" },
        { prompt: "ball", emoji: "⚽", sampleAnswer: "Can I play with the ball?" },
        { prompt: "crayons", emoji: "🖍️", sampleAnswer: "Can I play with the crayons?" },
        { prompt: "swing", emoji: "🛝", sampleAnswer: "Can I play with the swing?", minTrack: "explorers" },
      ],
      secondsPerTurn: 20,
      teacherNote:
        "Partner A holds up the card and asks the full frame — 'Can I play with the blocks?' — Partner B answers 'Yes, let's share!' from today's concept, then they swap who's asking for the next card. Every pair talks at once, so circulate and listen for the 'Can I' word order rather than running this as a whole-class drill; the point is every child produces the question multiple times, not that you hear each one.",
    },
    {
      type: "draw_and_label",
      title: "Draw a New Friend",
      instructions: "Draw a picture of yourself playing with a new friend, then label your drawing using a word from the word bank.",
      instructionsSimple: "Draw a friend! Write the word.",
      wordBank: [
        { word: "friend", emoji: "🧑‍🤝‍🧑" },
        { word: "share", emoji: "🤝" },
        { word: "play", emoji: "🧩" },
        { word: "kind", emoji: "❤️", minTrack: "explorers" },
        { word: "happy", emoji: "😊" },
      ],
      exampleNote:
        "Two smiling stick figures holding hands over a puzzle, with the word 'friend' copied underneath in large letters from the word bank, and 'happy' near the smiling faces.",
      minutes: 4,
      teacherNote:
        "Papers and pencils out. Keep the word bank on screen the whole time — the point is confident copying, not a spelling test. Circulate and, if a label doesn't match the drawing, point back at the word bank rather than telling them the right word.",
    },
    {
      type: "chant",
      title: "Can I Play? Chant",
      instructions:
        "Say each call line and have kids answer together, just like asking a new friend. The whole class echoes the response line back to you.",
      lines: [
        { call: "Can I play, play, play with you?", response: "Yes, let's play — me and you!" },
        { call: "Can I share, share, share today?", response: "Yes, let's share — hip hip hooray!" },
        {
          call: "Will you be my friend, my friend?",
          response: "Yes, I'll be your friend till the end!",
          minTrack: "explorers",
        },
        { call: "How do we feel when we're kind and true?", response: "Happy, happy — me and you!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Turn to a partner. One kid asks \"Can I play?\" and the other answers \"Yes! Let's share.\"",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned to ask \"Can I play?\" and offer \"Let's share,\" acted out being kind friends, saw that a good voice assistant listens and takes turns like a good friend, practiced spotting real AI in everyday life, helped Vora follow clear instructions, and chanted about friendship together.",
      summarySimple: "Today we learned to say \"Can I play?\" and \"Let's share,\" and sang a friendship chant with Vora!",
      homework: "Ask someone at home \"Can I play?\" before you join their game tonight.",
    },
  ],
};

export const m3_week2: Lesson = {
  ...meta("m3_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Say \"Can I play?\" one word at a time, pausing between each word like you're placing a puzzle piece: \"Can... I... play?\" Have the class echo it the same broken-up way, then all together fast.",
      prompt: "Can... I... play? 🧩",
    },
    {
      type: "vocab_review",
      title: "Words We Know",
      teacherNote:
        "Words from Space and Culture month, mixed differently than Week 1's set so the whole month keeps circling back to earlier vocabulary instead of the same six words every time. Read each word together BEFORE tapping — the tap is a rescue, not the activity. If the class needs the picture on more than two of these words, that's worth a minute of extra review before moving on.",
      words: [
        { word: "moon", emoji: "🌙", fromMonth: 1 },
        { word: "sun", emoji: "☀️", fromMonth: 1 },
        { word: "flag", emoji: "🚩", fromMonth: 2 },
        { word: "music", emoji: "🎵", fromMonth: 2 },
        { word: "clothes", emoji: "👘", fromMonth: 2, minTrack: "explorers" },
      ],
    },
    {
      type: "listen_and_do",
      title: "Listen and Do!",
      instructions:
        "Give each command ONCE, at normal speed — don't repeat it right away. Wait for everyone to move before explaining anything further. This checks listening, not reading, so keep it playful and quick.",
      commands: [
        { text: "Point to a friend and smile.", steps: 2, emoji: "😊" },
        { text: "Hold out your hands like sharing, then say sorry.", steps: 2, emoji: "🤝" },
        { text: "Cup your hands like asking a question, then pretend to play with blocks.", steps: 2, emoji: "🙋" },
        {
          text: "Wiggle and clap fast like you're excited, hug yourself kindly, then jump up happy.",
          steps: 3,
          emoji: "🤩",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "Total Physical Response before today's word-order game: this proves the class can act on friend/share/play/kind/sorry/happy without yet needing to say a full sentence, so resist translating into Korean even if a child hesitates — model the action bigger instead. If the whole class nails the first command instantly, skip ahead to the 3-step one instead of running all four in order.",
    },
    {
      type: "concept",
      title: "Vora Listens for Order",
      bigIdeas: ["natural_interaction"],
      lines: [
        {
          text: "Remember: a good friend — and a good voice assistant — waits and listens before answering.",
          textSimple: "Good friends listen first, then answer.",
        },
        {
          text: "Today let's build the question \"Can I play?\" one word at a time, just like taking turns.",
          textSimple: "Let's build \"Can I play?\" one word at a time!",
        },
      ],
      teacherNote:
        "Short recap only — the natural_interaction big idea (turn-taking) was fully taught in Week 1; here it's briefly reconnected to today's word-order game before playing.",
    },
    {
      type: "story",
      title: "Vora Builds the Question, One Word at a Time",
      teacherNote:
        "Read each panel aloud, pausing after panel 3 to let kids guess the missing word before Vora says it in panel 4.",
      panels: [
        {
          text: "Vora wanted to ask to join a game, but the words came out jumbled: \"Play I can?\"",
          textSimple: "Vora said the words all mixed up!",
          emoji: "🔀",
        },
        {
          text: "A friend gently said, \"I don't understand — can you try again?\"",
          textSimple: "\"I don't understand,\" said a friend.",
          emoji: "🤷",
        },
        {
          text: "Vora thought carefully about the right order: Can... I... play?",
          textSimple: "Vora thought: Can... I... play?",
          emoji: "🧩",
        },
        {
          text: "\"Can I play?\" Vora asked clearly — and this time, the friend understood right away!",
          textSimple: "\"Can I play?\" Now it made sense!",
          emoji: "😊",
        },
        {
          text: "Putting words in the right order isn't just a game — it's how we make sure our friends really understand us.",
          textSimple: "Right order helps friends understand!",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "Why didn't Vora's friend understand the first time?",
          discussionNote: "The words were in the wrong order — \"Play I can?\" doesn't make sense, but \"Can I play?\" does, the same word-order skill from today's game.",
        },
        {
          question: "Can you think of another question that has a special word order, like \"Can I play?\"",
          discussionNote: "Open discussion — \"Can I have...?\", \"Do you want...?\" — any question starting with a helper word.",
        },
      ],
    },
    {
      type: "movement",
      title: "Can I Play? Actions!",
      instructions:
        "Call out each word or feeling and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Can — cup your hands like asking a question", emoji: "🙋" },
        { text: "Play — pretend to build something fun", emoji: "🧩" },
        { text: "Happy — big smile and jump for joy", emoji: "😊" },
        { text: "Sad — droop your shoulders and pout", emoji: "😢" },
        { text: "Kind — wrap your arms around yourself in a hug", emoji: "❤️" },
        { text: "Excited — wiggle and clap fast", emoji: "🤩" },
      ],
    },
    {
      type: "activity",
      instructions: "Build the question one tile at a time, left to right. Then have a few kids ask the whole question out loud to a partner across the room. Then play a second game to reinforce it.",
      config: {
        engine: "sentence_builder",
        title: "Can I play?",
        words: [
          { text: "Can", role: "other" },
          { text: "I", role: "subject" },
          { text: "play", role: "verb" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Kids flip two cards at a time, trying to find the matching feeling word and face. Say the feeling word aloud together every time there's a match.",
      config: {
        engine: "memory_match",
        title: "Feelings Match",
        pairs: [
          { word: "happy", emoji: "😊" },
          { word: "sad", emoji: "😢" },
          { word: "kind", emoji: "❤️" },
          { word: "excited", emoji: "🤩", minTrack: "explorers" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[2],
    },
    {
      type: "team_relay",
      title: "How Do You Feel?",
      instructions:
        "Split the class into two teams. Read each prompt aloud, then point to one team to shout out the matching feeling word before switching to the other team for the next prompt.",
      prompts: [
        { text: "How do you feel when you get a present?", emoji: "🎁" },
        { text: "How do you feel when your toy breaks?", emoji: "😢" },
        { text: "How do you feel when you share with a friend?", emoji: "🤝" },
        { text: "How do you feel before a fun trip?", emoji: "🤩", minTrack: "explorers" },
        { text: "How do you feel when someone is kind to you?", emoji: "❤️" },
      ],
    },
    {
      type: "partner_talk",
      title: "Let's Share Partner Practice",
      frame: "Let's share the ___!",
      frameSimple: "Let's share!",
      cards: [
        { prompt: "crayons", emoji: "🖍️", sampleAnswer: "Let's share the crayons!" },
        { prompt: "blocks", emoji: "🧩", sampleAnswer: "Let's share the blocks!" },
        { prompt: "book", emoji: "📖", sampleAnswer: "Let's share the book!" },
        { prompt: "snack", emoji: "🍪", sampleAnswer: "Let's share the snack!", minTrack: "explorers" },
      ],
      secondsPerTurn: 20,
      teacherNote:
        "Partner A asks 'Can I play?' (this month's fixed question, no card needed for it) — Partner B holds up the card and answers with the full frame, then they swap who's asking for the next card. Every pair talks at once, so circulate and listen for the word order in both the question and the answer rather than running this as a whole-class drill.",
    },
    {
      type: "role_play",
      title: "Can I Play? at Recess",
      setting: "Two friends at recess, one already playing with a ball.",
      roles: ["New Friend", "Playing Friend"],
      exchanges: [
        { role: 0, line: "Can I play?", emoji: "🙋" },
        { role: 1, line: "Yes! Let's share.", emoji: "🤝" },
        { role: 0, line: "Thank you! I feel happy.", lineSimple: "Thank you! Happy!", emoji: "😊" },
        { role: 1, line: "Me too — let's play together!", emoji: "🧩" },
      ],
      teacherNote:
        "Let pairs rehearse both parts, then have one or two volunteer pairs perform for the class. This is the same 'Can I play?' / 'Let's share' pair the class just built tile-by-tile — the performance is what turns the drilled sentence into something they'd actually say to a friend.",
    },
    {
      type: "chant",
      title: "Feelings & Friends Chant",
      instructions:
        "Say each call line and have kids answer with the feeling word or action. The whole class echoes the response line back to you.",
      lines: [
        { call: "Can I play, play, play today?", response: "Yes! Let's play and shout hooray!" },
        { call: "How do you feel when the sun is bright?", response: "Happy, happy — what a sight!" },
        {
          call: "How do you feel when your toy is gone?",
          response: "Sad, so sad — but we carry on!",
          minTrack: "explorers",
        },
        { call: "How do you feel when you're kind and true?", response: "Excited, excited — me and you!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Ask one kid to say the whole question out loud, in order: \"Can I play?\"",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — building the question \"Can I play?\" tile by tile, acting out feelings and friendship words, matching feeling words like happy, sad, and kind to faces, helping Vora follow clear step-by-step instructions, and chanting about feelings and friends together.",
      summarySimple: "Today we built \"Can I play?\" and sang a feelings chant with Vora!",
    },
  ],
};

export const m3_week3: Lesson = {
  ...meta("m3_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Make a big happy face, then a sad face, then a kind, gentle face. Ask the class to call out the feeling word for each one before you explain today's game.",
      prompt: "How do I feel? 😊😢❤️",
    },
    {
      type: "vocab_review",
      title: "Words We Know",
      teacherNote:
        "A different mix from Weeks 1 and 2, so the review keeps circling through Space and Culture month rather than drilling the same four words on repeat. Read each word together BEFORE tapping — the tap is a rescue, not the activity. If the class needs the picture on more than two of these words, spend an extra minute on them before moving into today's feelings matching.",
      words: [
        { word: "planet", emoji: "🪐", fromMonth: 1, minTrack: "explorers" },
        { word: "star", emoji: "⭐", fromMonth: 1 },
        { word: "world", emoji: "🌍", fromMonth: 2 },
        { word: "music", emoji: "🎵", fromMonth: 2 },
      ],
    },
    {
      type: "listen_and_do",
      title: "Listen and Do!",
      instructions:
        "Give each command ONCE, at normal speed — don't repeat it right away. Wait for everyone to move before explaining anything further. This checks listening, not reading, so keep it playful and quick.",
      commands: [
        { text: "Make a sad face, then a happy face.", steps: 2, emoji: "😢" },
        { text: "Point to a friend, then cup your hands and ask 'Can I play?'", steps: 2, emoji: "🙋" },
        { text: "Give yourself a kind hug, then wiggle and clap like you're excited.", steps: 2, emoji: "❤️" },
        {
          text: "Make a sad face, give yourself a kind hug, then jump up with a happy smile.",
          steps: 3,
          emoji: "🤗",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "Total Physical Response before today's matching game: this proves the class can act out happy/sad/kind/excited and 'Can I play?' before anyone has to name a feeling out loud, so resist translating into Korean even if a child hesitates — model the face and action bigger instead. If the whole class nails the first two commands instantly, jump straight to the 3-step one.",
    },
    {
      type: "concept",
      title: "Vora Notices Feelings",
      bigIdeas: ["natural_interaction"],
      lines: [
        {
          text: "Good friends notice how you feel, just by listening and watching closely.",
          textSimple: "Good friends notice how you feel.",
        },
        {
          text: "Today let's match feeling words to faces, the same way a good friend would.",
          textSimple: "Let's match feeling words to faces!",
        },
      ],
      teacherNote:
        "Short recap only — natural_interaction (turn-taking/listening) was the full Week 1 teach; here it's linked to reading feelings as another way friends pay close attention to each other, before the matching game.",
    },
    {
      type: "story",
      title: "Vora Notices a Sad Friend",
      teacherNote:
        "Read each panel aloud, pausing after panel 2 to ask kids what clues might show someone is sad, before Vora notices them in panel 3.",
      panels: [
        {
          text: "At recess, Vora noticed a friend sitting alone, not playing with anyone.",
          textSimple: "A friend sat alone at recess.",
          emoji: "🪑",
        },
        {
          text: "Vora looked closely: droopy shoulders, a quiet frown, no smile at all.",
          textSimple: "Droopy shoulders. No smile.",
          emoji: "😔",
        },
        {
          text: "\"Those are clues that my friend feels sad,\" Vora realized, looking and listening closely.",
          textSimple: "\"My friend feels sad,\" Vora realized.",
          emoji: "🔍",
        },
        {
          text: "So Vora walked over and asked gently, \"Are you okay? Can I sit with you?\"",
          textSimple: "\"Can I sit with you?\" asked Vora.",
          emoji: "🤗",
        },
        {
          text: "Noticing feelings isn't magic — it's paying close attention to a friend's face and body, then choosing to be kind.",
          textSimple: "No magic — just noticing, then being kind!",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "What clues told Vora that its friend felt sad?",
          discussionNote: "Droopy shoulders and no smile — noticing small clues in someone's face and body is how we tell how they feel, just like today's matching game.",
        },
        {
          question: "What could you do if you noticed a friend feeling sad at school?",
          discussionNote: "Open discussion — sit with them, ask if they're okay, share a toy, tell a teacher.",
        },
      ],
    },
    {
      type: "movement",
      title: "Feelings in Action!",
      instructions:
        "Call out each feeling or word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Happy — big smile and jump for joy", emoji: "😊" },
        { text: "Sad — droop your shoulders and pout", emoji: "😢" },
        { text: "Kind — wrap your arms around yourself in a hug", emoji: "❤️" },
        { text: "Excited — wiggle and clap fast", emoji: "🤩" },
        { text: "Can — cup your hands like asking a question", emoji: "🙋" },
        { text: "Play — pretend to build something fun", emoji: "🧩" },
      ],
    },
    {
      type: "activity",
      instructions: "Kids flip two cards at a time, trying to find the matching feeling word and face. Say the feeling word aloud together every time there's a match. Then play a second game to reinforce it.",
      config: {
        engine: "memory_match",
        title: "Feelings Match",
        pairs: [
          { word: "happy", emoji: "😊" },
          { word: "sad", emoji: "😢" },
          { word: "kind", emoji: "❤️" },
          { word: "excited", emoji: "🤩", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Build the question one tile at a time, left to right. Then have a few kids ask the whole question out loud to a partner across the room.",
      config: {
        engine: "sentence_builder",
        title: "Can I play?",
        words: [
          { text: "Can", role: "other" },
          { text: "I", role: "subject" },
          { text: "play", role: "verb" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[3],
    },
    {
      type: "stand_sit",
      title: "Feelings — True or False!",
      instructions:
        "Read each statement. Kids STAND UP if they think it's true, and crouch down low if they think it's false. Reveal the answer, then give the short explanation before moving on.",
      statements: [
        { text: "You can tell how someone feels by looking at their face.", isTrue: true, explanation: "Yes! Faces show feelings like happy, sad, or excited.", emoji: "😊" },
        { text: "Everybody feels happy all day, every day.", isTrue: false, explanation: "No — everyone feels different feelings at different times!", emoji: "🎭" },
        { text: "It's kind to ask a friend if they're okay when they look sad.", isTrue: true, explanation: "Yes! Asking shows you care.", emoji: "🤗" },
        {
          text: "Feeling excited and feeling happy always look exactly the same.",
          isTrue: false,
          explanation: "No — excited might look bouncy and loud, happy might look calm and smiley!",
          emoji: "🤩",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "partner_talk",
      title: "I Feel... Partner Practice",
      frame: "I feel ___!",
      cards: [
        { prompt: "happy", emoji: "😊", sampleAnswer: "I feel happy!" },
        { prompt: "sad", emoji: "😢", sampleAnswer: "I feel sad!" },
        { prompt: "kind", emoji: "❤️", sampleAnswer: "I feel kind!" },
        { prompt: "excited", emoji: "🤩", sampleAnswer: "I feel excited!", minTrack: "explorers" },
      ],
      secondsPerTurn: 20,
      teacherNote:
        "Partner A makes the face on the card, Partner B names it with the full frame — 'I feel happy!' — matching the same face back, then they swap who's making the face for the next card. Every pair talks at once, so circulate and check that the face and the word actually match rather than running this as a whole-class drill.",
    },
    {
      type: "role_play",
      title: "Noticing a Sad Friend",
      setting: "Recess — one friend is sitting alone, looking sad.",
      roles: ["Noticing Friend", "Sad Friend"],
      exchanges: [
        { role: 0, line: "Are you okay?", emoji: "🤔" },
        { role: 1, line: "I feel sad.", emoji: "😢" },
        { role: 0, line: "Can I sit with you?", emoji: "🤗" },
        { role: 1, line: "Yes! I feel happy now.", lineSimple: "Yes! Happy now.", emoji: "😊" },
      ],
      teacherNote:
        "Let pairs rehearse both parts, then have one or two volunteer pairs perform for the class. This acts out exactly what Vora did in today's story — noticing the clues, then choosing to be kind — so pause after the performance to ask what clues told the Noticing Friend that something was wrong.",
    },
    {
      type: "chant",
      title: "How Do You Feel? Chant",
      instructions:
        "Say each call line and have kids answer with the feeling word and face. The whole class echoes the response line back to you.",
      lines: [
        { call: "How do you feel on a sunny day?", response: "Happy, happy — hip hip hooray!" },
        { call: "How do you feel when you drop your toy?", response: "Sad, so sad — oh no, oh boy!" },
        {
          call: "How do you feel sharing with a friend?",
          response: "Kind, so kind — right to the end!",
          minTrack: "explorers",
        },
        { call: "Can I play, play, play with you?", response: "Yes, let's play — excited too!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Ask one kid to name one feeling word from the matching game and make that face.",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — matching feeling words like happy, sad, and kind to faces, acting out each feeling, building the question \"Can I play?\" one word at a time, spotting real AI in everyday life, and chanting about feelings together.",
      summarySimple: "Today we matched feeling faces, moved our bodies, and sang a feelings chant with Vora!",
    },
  ],
};

export const m3_week4: Lesson = {
  ...meta("m3_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Say \"light\" and \"right\" slowly, back to back, a few times. Don't explain yet — just let the class notice the sounds are close but different, the same way they did back in Week 2.",
      prompt: "light... right... light... right...",
    },
    {
      type: "vocab_review",
      title: "Words We Know",
      teacherNote:
        "A different mix again from Weeks 1-3, so by the end of the month the class has circled back through most of Space and Culture month's words at least once. Read each word together BEFORE tapping — the tap is a rescue, not the activity. If the class needs the picture on more than two of these words, that month is worth a fuller review before next month starts.",
      words: [
        { word: "moon", emoji: "🌙", fromMonth: 1 },
        { word: "planet", emoji: "🪐", fromMonth: 1 },
        { word: "flag", emoji: "🚩", fromMonth: 2 },
        { word: "food", emoji: "🍲", fromMonth: 2 },
        { word: "dance", emoji: "💃", fromMonth: 2, minTrack: "explorers" },
      ],
    },
    {
      type: "listen_and_do",
      title: "Listen and Do!",
      instructions:
        "Give each command ONCE, at normal speed — don't repeat it right away. Wait for everyone to move before explaining anything further. Notice that some of today's commands use words from the SAME minimal pair (light/right, lead/read, rock/row) — that's on purpose, so listening carefully here matters just as much as in the minimal-pairs game.",
      commands: [
        { text: "Point to the right.", steps: 1, emoji: "👉" },
        { text: "Flick on a pretend light, then freeze like a rock.", steps: 2, emoji: "💡" },
        { text: "March forward like you're leading the line, then pretend to read a book.", steps: 2, emoji: "🚶" },
        {
          text: "Point to the right, freeze like a rock, then pretend to row a boat.",
          steps: 3,
          emoji: "🚣",
          minTrack: "explorers",
        },
      ],
      teacherNote:
        "Total Physical Response using the exact words from today's minimal-pairs game — this proves the class can tell light/right and lead/read/rock/row apart in a full command, not just when the two words are shown side by side. Resist repeating a command even if a child hesitates; model the action bigger instead. If the whole class nails the 1-step command instantly, jump straight to the 3-step one.",
    },
    {
      type: "concept",
      title: "Listening Like a Good Friend",
      bigIdeas: ["perception"],
      lines: [
        { text: "Remember \"l\" and \"r\"? They're still two different sounds in English." },
        {
          text: "Good friends listen very carefully to each other — let's listen carefully too.",
          textSimple: "Let's listen very carefully!",
        },
        {
          text: "This time, try to catch the difference before I say each word twice.",
          textSimple: "Listen for the difference!",
        },
      ],
      teacherNote:
        "Quarter-checkpoint review of the foundations unit's Week 2 Day 3 /l/-/r/ contrast — the single highest-frequency Korean-learner sound gap, since Korean's single liquid consonant covers both English sounds. Expect the same level of difficulty as Week 2; that's normal spaced repetition, not regression. Framing it as \"listening like a good friend\" keeps it tied to this month's theme.",
    },
    {
      type: "story",
      title: "Vora Listens Very Carefully",
      teacherNote:
        "Read each panel aloud, pausing after panel 3 to let kids guess which word Vora heard before revealing panel 4 — the point is careful listening, just like the minimal-pairs game.",
      panels: [
        {
          text: "A friend said a word to Vora, but it sounded almost the same as another word Vora knew.",
          textSimple: "A word sounded like two words!",
          emoji: "❓",
        },
        {
          text: "\"Did you say 'light,' or 'right'?\" Vora asked, listening very closely.",
          textSimple: "\"Light, or right?\" asked Vora.",
          emoji: "👂",
        },
        {
          text: "The friend said it again, slowly: \"L-l-light — like a lamp.\"",
          textSimple: "\"Light — like a lamp,\" said the friend.",
          emoji: "💡",
        },
        {
          text: "\"Light!\" said Vora. \"I heard the tiny difference that time.\"",
          textSimple: "\"Light!\" Vora heard it that time!",
          emoji: "🎧",
        },
        {
          text: "Hearing the tiny difference between two close sounds takes real practice — for Vora, and for us too, just like today's listening game.",
          textSimple: "Careful listening takes practice — for everyone!",
          emoji: "🤖",
        },
      ],
      comprehensionQuestions: [
        {
          question: "Why did Vora need to listen extra carefully to tell 'light' and 'right' apart?",
          discussionNote: "The two words sound very close, so Vora had to listen for a small difference — the same skill as today's minimal-pairs game.",
        },
        {
          question: "What's a word in Korean that sounds a little like another word, where you have to listen closely?",
          discussionNote: "Open discussion — invite kids to share any Korean examples they can think of, reinforcing that careful listening applies to any language.",
        },
      ],
    },
    {
      type: "movement",
      title: "Light and Right Actions!",
      instructions:
        "Call out each word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Light — flick your fingers like turning on a light", emoji: "💡" },
        { text: "Right — point to the right with a big arm", emoji: "👉" },
        { text: "Lead — march forward like you're leading the line", emoji: "🚶" },
        { text: "Read — pretend to hold a book and read", emoji: "📖" },
        { text: "Rock — freeze like a statue, still as a rock", emoji: "🪨" },
        { text: "Row — pretend to row a boat with both arms", emoji: "🚣" },
      ],
    },
    {
      type: "activity",
      instructions: "Play each word once (tap the speaker icon), and have kids point to or say the picture they heard. Repeat any pair the class finds hard.",
      config: {
        engine: "minimal_pairs",
        title: "Listen Closely: light or right?",
        targetSound: "/l/ vs /r/",
        teacherNote:
          "Quarter-checkpoint review of the Week 2 Day 3 /l/-/r/ minimal pairs lesson — same pair set, intentionally, since spaced repetition is what makes this contrast stick for Korean L1 speakers.",
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
      ...INSTRUCT_VORA_SCENARIOS[3],
    },
    {
      ...AI_OR_NOT_SETS[3],
    },
    {
      type: "class_vote",
      title: "Which Sound Is Trickier?",
      instructions:
        "Read the question aloud. Let kids vote by raising their hands, or discuss as a class why one sound feels harder.",
      question: "Which sound do you think is trickier to hear — the 'l' sound or the 'r' sound?",
      questionSimple: "Which sound is trickier — 'l' or 'r'?",
      options: [
        { text: "The 'l' sound (light)", emoji: "💡" },
        { text: "The 'r' sound (right)", emoji: "👉" },
        { text: "Both are equally tricky", emoji: "🤔" },
        { text: "Neither — they're easy now!", emoji: "🎉" },
      ],
    },
    {
      type: "partner_talk",
      title: "I Hear... Partner Practice",
      frame: "I hear ___!",
      cards: [
        { prompt: "light", emoji: "💡", sampleAnswer: "I hear light!" },
        { prompt: "right", emoji: "👉", sampleAnswer: "I hear right!" },
        { prompt: "read", emoji: "📖", sampleAnswer: "I hear read!" },
        { prompt: "row", emoji: "🚣", sampleAnswer: "I hear row!", minTrack: "explorers" },
      ],
      secondsPerTurn: 20,
      teacherNote:
        "Partner A says ONE word out loud from a pair on the card (not shown to Partner B) — Partner B listens and answers with the full frame, then they swap who's speaking for the next card. Every pair talks at once, so circulate and check that Partner B's answer actually matches what Partner A said, not just that they said an English word confidently.",
    },
    {
      type: "role_play",
      title: "Two Friends Test Their Listening",
      setting: "Two friends taking turns quizzing each other's careful listening.",
      roles: ["Quiz Friend", "Listening Friend"],
      exchanges: [
        { role: 0, line: "Did I say 'light' or 'right'?", emoji: "❓" },
        { role: 1, line: "You said... right!", emoji: "👉" },
        { role: 0, line: "Yes! Good listening. Did I say 'lead' or 'read'?", lineSimple: "Yes! Good job! Lead or read?", emoji: "👂" },
        { role: 1, line: "You said... read!", emoji: "📖" },
      ],
      teacherNote:
        "Let pairs rehearse both parts, then have one or two volunteer pairs perform for the class — the Quiz Friend can genuinely say either word each time, since the whole point is that the Listening Friend has to listen for real, not guess from memory.",
    },
    {
      type: "chant",
      title: "Light or Right Chant",
      instructions:
        "Say each call line, then say the word pair slowly. The whole class echoes the response line back to you.",
      lines: [
        { call: "Listen close, now tell me true —", response: "Light or right, which one is new?" },
        { call: "Is it lead, or is it read?", response: "Listen close — use your head!" },
        {
          call: "Is it load, or is it road?",
          response: "Listen close — down the road!",
          minTrack: "explorers",
        },
        { call: "Is it lock, or is it rock?", response: "Listen close — tick tock, tick tock!", minTrack: "explorers" },
      ],
    },
    {
      type: "check",
      prompt: "Say \"light\" and \"right\" one more time — thumbs up if your ears caught the difference today.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we listened closely for the difference between l and r again, acted out the sounds with fun actions, a little easier every time we practice, helped Vora follow clear step-by-step instructions, spotted real AI in everyday life, and chanted the tricky sound pairs together.",
      summarySimple: "Today we listened for l and r sounds and sang a fun chant with Vora!",
    },
  ],
};
