import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";
import { AI_OR_NOT_SETS, INSTRUCT_VORA_SCENARIOS } from "../aiLabBank";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m11_week1: Lesson = {
  ...meta("m11_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Make a big happy face, then a sad face, then a surprised face — ask the class each time: \"How do I feel?\" Let them answer in Korean or English before teaching today's sentence pattern.",
      prompt: "How do I feel?",
    },
    {
      type: "vocab",
      title: "Feelings",
      words: [
        { word: "happy", emoji: "😊" },
        { word: "sad", emoji: "😢" },
        { word: "angry", emoji: "😠" },
        { word: "scared", emoji: "😨" },
        { word: "surprised", emoji: "😲", minTrack: "explorers" },
        { word: "tired", emoji: "😴" },
      ],
    },
    {
      type: "concept",
      title: "Vora Sees a Smile",
      bigIdeas: ["natural_interaction", "perception"],
      lines: [
        { text: "Look at my face! Can you guess how I feel?" },
        {
          text: "I see a big smile, so I might guess: happy! But seeing a smile isn't the same as really knowing how you feel inside.",
          textSimple: "I see a smile. I guess: happy! But guessing isn't the same as really knowing.",
        },
        {
          text: "Only you really know how you feel. Let's practice saying it together: I feel ___.",
          textSimple: "Only YOU know how you feel. Let's say: I feel ___.",
        },
        { text: "Even the smartest AI can only guess from a picture — it can't feel a warm hug or a hard day, the way you can.", minTrack: "explorers" },
      ],
      teacherNote:
        "This month's honest AI boundary: recognizing a facial expression (a shape a camera can detect) isn't the same as understanding a feeling. Also flag the grammar shift explicitly: \"I feel ___\" uses a real verb (feel), unlike the \"It's ___\" copula pattern used all year (Months 1, 6, and 7) — a quick side-by-side (\"It's sunny\" vs. \"I feel happy\") helps prevent kids from saying \"I'm feel happy\" or overusing \"it's\" for their own feelings.",
    },
    {
      type: "story",
      title: "Vora Guesses Wrong",
      teacherNote:
        "Read each panel aloud, pausing after panel 2 to ask \"How could Sam be smiling AND a little sad?\" before revealing Sam's own explanation — the point is letting kids sit with the surprise before Vora resolves it.",
      panels: [
        { text: "Vora saw a photo of a boy named Sam, smiling big at the camera. \"Sam looks happy!\" Vora said.", textSimple: "Vora saw Sam smiling. \"Sam looks happy!\"", emoji: "😊" },
        { text: "But later, Sam's teacher said Sam had actually just lost his favorite toy that same morning.", textSimple: "But Sam had just lost his favorite toy that morning.", emoji: "🧸" },
        { text: "\"But... the photo showed a big smile,\" Vora said, puzzled. \"How could Sam be sad AND smiling?\"", textSimple: "Vora was puzzled. \"Sad AND smiling?\"", emoji: "❓" },
        { text: "Sam explained: \"I smiled for the photo, but inside I still felt a little sad about my toy.\"", textSimple: "Sam said, \"I smiled for the photo, but I felt sad too.\"", emoji: "💬" },
        { text: "\"Oh,\" said Vora quietly. \"I can see a smile... but I can't see what's really happening inside someone's heart.\"", textSimple: "\"I can see a smile, but not what's inside your heart.\"", emoji: "💭" },
        { text: "It's not magic, and it's not mind-reading — Vora can only guess from a picture, but only Sam really knows how Sam feels.", textSimple: "No magic! Vora can only guess. Only Sam really knows.", emoji: "🤖" },
      ],
      comprehensionQuestions: [
        { question: "Why did Vora guess Sam was happy, even though Sam actually felt a little sad?", discussionNote: "Vora only saw the smile in the photo — a picture can't show everything happening inside someone's heart." },
        { question: "Has YOUR face ever shown one feeling while you felt something different inside? What happened?", discussionNote: "Open, gentle discussion — normalize that feelings and faces don't always perfectly match, and that's okay." },
      ],
    },
    {
      type: "movement",
      title: "Feelings Actions!",
      instructions:
        "Call out each feeling word and make the matching face and body pose together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Happy — big smile and jump", emoji: "😊" },
        { text: "Sad — pouty face and droopy shoulders", emoji: "😢" },
        { text: "Angry — stomp your feet and cross your arms", emoji: "😠" },
        { text: "Scared — jump back and cover your eyes", emoji: "😨" },
        { text: "Surprised — gasp and throw your arms wide", emoji: "😲", minTrack: "explorers" },
        { text: "Tired — big yawn and slow stretch", emoji: "😴" },
      ],
    },
    {
      type: "activity",
      instructions: "As a class, decide together where each feeling goes before anyone taps — happy feelings on one side, not-happy feelings on the other.",
      config: {
        engine: "train_the_robot",
        title: "Happy Feeling or Not Happy Feeling?",
        labelA: "Happy",
        labelB: "Not Happy",
        emojiA: "😊",
        emojiB: "😢",
        items: [
          { word: "happy", emoji: "😊", bucket: "a" },
          { word: "excited", emoji: "🤩", bucket: "a" },
          { word: "laughing", emoji: "😆", bucket: "a" },
          { word: "sad", emoji: "😢", bucket: "b" },
          { word: "angry", emoji: "😠", bucket: "b" },
          { word: "scared", emoji: "😨", bucket: "b" },
          { word: "tired", emoji: "😴", bucket: "b" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[4],
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[4],
    },
    {
      type: "stand_sit",
      title: "Feelings & AI True or False!",
      instructions:
        "Read each statement. Kids STAND UP if they think it's true, and crouch down low if they think it's false. Reveal the answer, then give the short explanation before moving on.",
      statements: [
        { text: "A computer can see a smile in a photo.", isTrue: true, explanation: "Yes! Computers can be trained to notice smiles and other expressions.", emoji: "😊" },
        { text: "A computer always knows exactly how you feel inside.", isTrue: false, explanation: "No — only YOU really know that. A computer can only guess from what it sees.", emoji: "🧠" },
        { text: "You can feel one way inside and show a different face outside.", isTrue: true, explanation: "Yes! That happens to everyone sometimes, and it's okay.", emoji: "🎭", minTrack: "explorers" },
        { text: "Only sad people can smile.", isTrue: false, explanation: "No — people smile for lots of reasons, even when they feel a little sad too.", emoji: "😢" },
      ],
    },
    {
      type: "chant",
      title: "I Feel Chant",
      instructions:
        "Say each call line and make the matching feeling face. The whole class echoes the response line back to you.",
      lines: [
        { call: "Feelings, feelings, what do you see?", response: "I feel happy, happy me!" },
        { call: "Feelings, feelings, tell me true —", response: "I feel sad, a little blue." },
        {
          call: "Feelings, feelings, hear me shout —",
          response: "I feel angry, watch me pout!",
          minTrack: "explorers",
        },
        {
          call: "Feelings, feelings, how about you?",
          response: "I feel tired — good night to you!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Make a feeling face without talking — can a partner guess and say \"You feel ___\"?",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we named six feelings and learned \"I feel ___,\" acted them out — how an AI can spot a smile, but can't truly know how someone feels inside — practiced spotting real AI in everyday life, helped Vora follow clear instructions, and chanted about feelings together.",
      summarySimple: "Today we named our feelings, made feeling faces, and chanted about feelings with Vora!",
      homework: "Ask a family member \"How do you feel?\" tonight and really listen to their answer.",
    },
  ],
};

export const m11_week2: Lesson = {
  ...meta("m11_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Act out a huge happy smile and freeze like a photo — ask the class: \"How do I feel?\" Tell them today we're going to build that sentence together, one word at a time.",
      prompt: "Freeze! How do I feel? 📸",
    },
    {
      type: "concept",
      title: "Just a Guess",
      bigIdeas: ["natural_interaction"],
      lines: [
        {
          text: "Remember — I can see a smile in a picture, but only you really know how you feel inside.",
          textSimple: "I can see a smile. But only YOU know how you feel.",
        },
        { text: "Let's practice saying it together: I feel ___." },
      ],
      teacherNote:
        "Quick reinforcement of Week 1's AI-limits idea — no new teaching here, just a short bridge into today's sentence-building game.",
    },
    {
      type: "story",
      title: "Vora's Guessing Game",
      teacherNote:
        "Read each panel aloud, pausing after panel 3 to ask \"Do you think Vora will guess right this time?\" before revealing Priya's real feeling in panel 4 — the surprise is the whole point.",
      panels: [
        { text: "Vora set up a fun game: \"I'll look at your face and guess your feeling!\" The whole class lined up to try.", textSimple: "Vora played a guessing game with the class.", emoji: "🎮" },
        { text: "First was Aiden, grinning ear to ear. \"Happy!\" guessed Vora — correct!", textSimple: "Aiden grinned. \"Happy!\" guessed Vora. Correct!", emoji: "😄" },
        { text: "Next was Priya, with a totally still, calm face. \"Um... happy? Tired? I'm not sure,\" said Vora.", textSimple: "Priya's face was calm. Vora wasn't sure.", emoji: "😐" },
        { text: "Priya said, \"Actually, I feel excited! I just have a quiet face.\" Vora had guessed wrong.", textSimple: "Priya said, \"I feel excited! I just have a quiet face.\"", emoji: "😲" },
        { text: "\"I guess I can't always tell just by looking,\" Vora admitted. \"Some feelings hide well!\"", textSimple: "\"I can't always tell just by looking!\" said Vora.", emoji: "🙈" },
        { text: "It's not magic — a guess from a face is still just a guess, and the only sure way to know is to ask, and really listen.", textSimple: "No magic! A guess is just a guess. Ask, and listen.", emoji: "🤖" },
      ],
      comprehensionQuestions: [
        { question: "Why did Vora get Priya's feeling wrong?", discussionNote: "Priya's face looked calm even though she felt excited inside — faces don't always match feelings, so a guess can be wrong." },
        { question: "What's a better way to find out how someone really feels, instead of just guessing from their face?", discussionNote: "Ask them directly, and listen — the point of practicing \"I feel ___\" and \"How do you feel?\" this month." },
      ],
    },
    {
      type: "movement",
      title: "Freeze-Frame Feelings!",
      instructions:
        "Call out each feeling word and freeze in that pose like a photo — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Happy — big smile, hands up", emoji: "😊" },
        { text: "Sad — droopy shoulders, pouty lip", emoji: "😢" },
        { text: "Angry — stomp and cross your arms", emoji: "😠" },
        { text: "Scared — jump and cover your eyes", emoji: "😨" },
        { text: "Surprised — gasp, hands on cheeks", emoji: "😲", minTrack: "explorers" },
        { text: "Tired — big yawn, slow stretch", emoji: "😴" },
      ],
    },
    {
      type: "activity",
      instructions: "First, act out \"happy\" with your face and body — no words! Then build the sentence tile by tile and say it together. Afterward, play a second game to reinforce it.",
      config: {
        engine: "sentence_builder",
        title: "I feel happy.",
        words: [
          { text: "I", role: "subject" },
          { text: "feel", role: "verb" },
          { text: "happy", role: "other" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Flip two cards at a time. When you find a feeling word, act it out with your face and body before saying it in English!",
      config: {
        engine: "memory_match",
        title: "Feelings Match",
        pairs: [
          { word: "happy", emoji: "😊" },
          { word: "sad", emoji: "😢" },
          { word: "angry", emoji: "😠" },
          { word: "scared", emoji: "😨" },
          { word: "surprised", emoji: "😲", minTrack: "explorers" },
          { word: "tired", emoji: "😴" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[4],
    },
    {
      type: "class_vote",
      title: "Guess It or Ask It?",
      instructions:
        "Read the question aloud. Kids vote by raising hands — there's no single right answer, just a fun chance to talk about how we like to be understood.",
      question: "Would you rather have a friend GUESS how you feel from your face, or ASK you directly?",
      questionSimple: "Guess your feeling, or ask you?",
      options: [
        { text: "Guess it", emoji: "🤔" },
        { text: "Ask me!", emoji: "💬" },
        { text: "Both are okay", emoji: "🤝" },
      ],
    },
    {
      type: "chant",
      title: "Feel It Chant",
      instructions:
        "Say each call line and freeze in the matching feeling pose. The whole class echoes the response line back to you.",
      lines: [
        { call: "Freeze, freeze, show me your face —", response: "I feel happy, all over the place!" },
        { call: "Freeze, freeze, what do you see?", response: "I feel scared, oh help me!" },
        {
          call: "Freeze, freeze, don't make a sound —",
          response: "I feel surprised, look all around!",
          minTrack: "explorers",
        },
        {
          call: "Freeze, freeze, day is through —",
          response: "I feel tired, how about you?",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Ask a partner: \"How do you feel?\" — can they answer with \"I feel ___\"?",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — building the sentence \"I feel happy\" one tile at a time, acting out feelings like freeze-frame photos, matching feeling words to faces, helping Vora follow clear step-by-step instructions, and chanting about feelings together.",
      summarySimple: "Today we built the sentence \"I feel happy\" and played feeling games with Vora!",
      homework: "Act out a feeling for your family tonight and see if they can guess it in English.",
    },
  ],
};

export const m11_week3: Lesson = {
  ...meta("m11_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask the class to make three different feeling faces in a row — happy, sad, surprised — as fast as they can. Then tell them today we'll match feeling words to pictures.",
      prompt: "Happy, sad, surprised — go! 🎭",
    },
    {
      type: "concept",
      title: "Matching Feelings",
      bigIdeas: ["learning"],
      lines: [
        {
          text: "Remember, I can spot a smile in a photo — but I get better at it by seeing lots and lots of examples, just like you're about to do!",
          textSimple: "I get better by seeing lots of examples — just like you!",
        },
        { text: "Let's match some feeling words to faces!" },
      ],
      teacherNote:
        "Brief callback to Week 1's AI-limits idea, reframed through Big Idea 3 (Learning): repeated exposure is how both Vora and kids build recognition.",
    },
    {
      type: "story",
      title: "Vora Practices and Practices",
      teacherNote:
        "Read each panel aloud, pointing out how much time passes (Monday to Friday) — the point is that Vora's improvement takes many, many examples, not a single lesson. Pause after panel 3 to ask what kids notice.",
      panels: [
        { text: "On Monday, Vora looked at a photo of a crying face and guessed, \"Angry?\" — but it was actually sad.", textSimple: "Monday: Vora saw a crying face and guessed wrong.", emoji: "😢" },
        { text: "Vora looked at many more photos all week — smiling faces, crying faces, surprised faces — dozens and dozens of them.", textSimple: "All week, Vora looked at many, many faces.", emoji: "🗂️" },
        { text: "Slowly, Vora started noticing little differences: angry eyebrows scrunch down, sad eyes look droopy.", textSimple: "Vora noticed small differences between faces.", emoji: "🔎" },
        { text: "By Friday, Vora looked at a new crying photo and said, \"That one's sad — see the droopy eyes?\" Correct!", textSimple: "Friday: Vora said \"sad\" and was right!", emoji: "✅" },
        { text: "\"I got better just by seeing lots and lots of examples,\" Vora realized, \"the exact same way you got better at today's matching game!\"", textSimple: "\"I got better by seeing lots of examples!\"", emoji: "💡" },
        { text: "It's not magic — practicing with many examples is how both Vora and YOU get better at noticing patterns, whether it's feelings or matching cards.", textSimple: "No magic! Practicing with examples helps anyone get better.", emoji: "🤖" },
      ],
      comprehensionQuestions: [
        { question: "How did Vora get better at telling angry faces from sad faces?", discussionNote: "By looking at lots and lots of examples over time — the same \"learning from examples\" idea taught all year." },
        { question: "What's something YOU got better at just by practicing it many times?", discussionNote: "Open discussion — riding a bike, reading, a sport, a game — connects the AI learning idea to kids' own experience." },
      ],
    },
    {
      type: "movement",
      title: "Act It, Match It!",
      instructions:
        "Call out each feeling word and act it out with your face and body together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Happy — jump with a big grin", emoji: "😊" },
        { text: "Sad — sniffle and rub your eyes", emoji: "😢" },
        { text: "Angry — stomp both feet loudly", emoji: "😠" },
        { text: "Scared — gasp and hide behind your hands", emoji: "😨" },
        { text: "Surprised — jump back with wide eyes", emoji: "😲", minTrack: "explorers" },
        { text: "Tired — droop your head and yawn", emoji: "😴" },
      ],
    },
    {
      type: "activity",
      instructions: "Flip two cards at a time. When you find a feeling word, act it out with your face and body before saying it in English! Then play a second game to reinforce it.",
      config: {
        engine: "memory_match",
        title: "Feelings Match",
        pairs: [
          { word: "happy", emoji: "😊" },
          { word: "sad", emoji: "😢" },
          { word: "angry", emoji: "😠" },
          { word: "scared", emoji: "😨" },
          { word: "surprised", emoji: "😲", minTrack: "explorers" },
          { word: "tired", emoji: "😴" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "First, act out \"happy\" with your face and body — no words! Then build the sentence tile by tile and say it together.",
      config: {
        engine: "sentence_builder",
        title: "I feel happy.",
        words: [
          { text: "I", role: "subject" },
          { text: "feel", role: "verb" },
          { text: "happy", role: "other" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[5],
    },
    {
      type: "team_relay",
      title: "Feelings Relay!",
      instructions:
        "Split into two teams. Read each prompt aloud and let team members take turns calling out an answer or acting out a feeling for the other team to guess.",
      prompts: [
        { text: "Name a feeling word and make the face!", emoji: "😊" },
        { text: "Name a feeling you had this week!", emoji: "😴" },
        { text: "Name a feeling that makes you want to jump!", emoji: "🤩" },
        { text: "Show a feeling face — can the other team guess it?", emoji: "😲", minTrack: "explorers" },
        { text: "Name a feeling you feel on a rainy day!", emoji: "😢", minTrack: "explorers" },
      ],
    },
    {
      type: "chant",
      title: "How Do You Feel Chant",
      instructions:
        "Say each call line and act out the feeling. The whole class echoes the response line back to you.",
      lines: [
        { call: "How do you feel? Tell me it's true —", response: "I feel happy, look at you!" },
        { call: "How do you feel? Boo hoo hoo —", response: "I feel sad, boo hoo hoo!" },
        {
          call: "How do you feel? Stomp your feet —",
          response: "I feel angry, hear the beat!",
          minTrack: "explorers",
        },
        {
          call: "How do you feel? Day is through —",
          response: "I feel tired, good night to you!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Ask a partner: \"Which feeling did you match?\" — can they say the English word?",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we played three activities — matching feeling words to faces, acting out each feeling with our face and body, building the sentence \"I feel happy\" one tile at a time, spotting real AI in everyday life, and chanting about how we feel together.",
      summarySimple: "Today we matched feeling words to faces and acted out our feelings with Vora!",
      homework: "Play a quick feelings guessing game with your family tonight.",
    },
  ],
};

export const m11_week4: Lesson = {
  ...meta("m11_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask a few kids: \"How do you feel right now — really?\" Quick, honest answers in any language before today's sentence.",
      prompt: "How do you feel today?",
    },
    {
      type: "concept",
      title: "I Feel Happy!",
      bigIdeas: [],
      lines: [
        {
          text: "I feel happy today, because I get to see you!",
          textSimple: "I feel happy today!",
        },
        {
          text: "How do YOU feel right now? Happy? Tired? Something else — any true answer is a great answer.",
          textSimple: "How do YOU feel? Any answer is a great answer!",
        },
        { text: "Your feelings are yours. Not even the smartest AI can tell you how you really feel inside — only you know that.", minTrack: "explorers" },
        { text: "Ready? Let's build the sentence together, one word at a time." },
      ],
      teacherNote:
        "Unlike Month 5's \"This is my sister,\" this sentence frame asks for a genuine, in-the-moment answer — encourage kids to swap in their real feeling, not just \"happy.\" Ties back to this month's AI honesty theme: this is one sentence Vora truly can't answer for them.",
    },
    {
      type: "story",
      title: "The Question Only YOU Can Answer",
      teacherNote:
        "Read each panel aloud slowly, especially Vora's pause in panel 3 — that's the emotional heart of the story. Let the closing line land quietly before moving to discussion.",
      panels: [
        { text: "Vora asked the whole class, \"How do you feel today?\" and waited for the answers.", textSimple: "Vora asked, \"How do you feel today?\"", emoji: "❓" },
        { text: "\"I could guess,\" Vora thought, looking at everyone's faces — some smiling, some quiet, some yawning.", textSimple: "Vora looked at faces — smiling, quiet, yawning.", emoji: "👀" },
        { text: "But Vora stopped itself. \"Wait — I don't need to guess. I can just ask, and really listen to what's true for each of you.\"", textSimple: "Vora stopped. \"I'll ask, and really listen.\"", emoji: "🛑" },
        { text: "One by one, the class answered — happy, tired, a little nervous, excited — and every single answer was correct, because it came from them.", textSimple: "Everyone answered. Every answer was correct — it was theirs!", emoji: "🗣️" },
        { text: "\"Even the smartest AI in the world can't answer this question for you,\" said Vora. \"Only you know how you really feel — and that makes your answer special.\"", textSimple: "\"Only YOU know how you feel. That makes it special.\"", emoji: "💛" },
      ],
      comprehensionQuestions: [
        { question: "Why couldn't Vora just guess everyone's feeling instead of asking?", discussionNote: "A guess from a face can be wrong — only the person themselves truly knows how they feel inside." },
        { question: "How did it feel to have your own true answer be the \"correct\" one today?", discussionNote: "Open discussion — celebrate that personal feelings don't need anyone else's approval to be valid." },
      ],
    },
    {
      type: "movement",
      title: "Show Your Real Feeling!",
      instructions:
        "Call out each feeling word and act it out for real together, then invite a few kids to add their own true feeling at the end.",
      moves: [
        { text: "Happy — jump up and cheer", emoji: "😊" },
        { text: "Sad — hug yourself and sniffle", emoji: "😢" },
        { text: "Angry — cross your arms and frown", emoji: "😠" },
        { text: "Scared — freeze and gasp", emoji: "😨" },
        { text: "Surprised — throw your hands up", emoji: "😲", minTrack: "explorers" },
        { text: "Tired — rub your eyes and yawn", emoji: "😴" },
      ],
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, left to right. Then invite several kids to swap in their own true feeling and say it out loud.",
      config: {
        engine: "sentence_builder",
        title: "I feel happy.",
        words: [
          { text: "I", role: "subject" },
          { text: "feel", role: "verb" },
          { text: "happy", role: "other" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[5],
    },
    {
      ...AI_OR_NOT_SETS[5],
    },
    {
      type: "class_vote",
      title: "Hardest Feeling to Show?",
      instructions:
        "Read the question aloud. Kids vote by raising hands, or try acting out each feeling silently to test their guess — no single right answer, just a fun closing discussion.",
      question: "Which feeling is hardest to show just with your face, without saying any words?",
      questionSimple: "Which feeling is hard to show without words?",
      options: [
        { text: "Happy", emoji: "😊" },
        { text: "Tired", emoji: "😴" },
        { text: "Surprised", emoji: "😲" },
        { text: "Nervous", emoji: "😬" },
      ],
    },
    {
      type: "chant",
      title: "My True Feeling Chant",
      instructions:
        "Say each call line and have the class answer together, then invite a few kids to swap in their own real feeling. The whole class echoes the response line back to you.",
      lines: [
        { call: "How do you feel? Tell me it's true —", response: "I feel happy, that's the news for you!" },
        { call: "How do you feel? Don't be shy —", response: "I feel sad, and that's just fine." },
        {
          call: "How do you feel? Shout it out —",
          response: "I feel scared, without a doubt!",
          minTrack: "explorers",
        },
        {
          call: "How do you feel? Day is done —",
          response: "I feel tired, we had such fun!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Every kid says \"I feel ___\" out loud, naming their real feeling right now.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today every child said how they truly feel in English — one of the most personal sentences in the whole year — acted out feelings together, helped Vora follow clear step-by-step instructions, spotted real AI in everyday life, and chanted their true feelings together.",
      summarySimple: "Today everyone said how they really feel in English with Vora!",
      homework: "Say \"I feel ___\" about your real feeling to someone at home tonight.",
    },
  ],
};
