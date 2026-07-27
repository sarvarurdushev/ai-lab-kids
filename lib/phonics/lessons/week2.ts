import type { Lesson } from "@/lib/curriculum/types";

/**
 * Letters and Sounds Phase 2, Set 2. Cumulative letters through this week:
 * s,a,t,p,i,n,m,d.
 *
 * Same 17-block, 50-minute shape as week1.ts — see that file's header for the
 * block-by-block rationale. Every word below is spellable with s/a/t/p/i/n/m/d
 * only; the heart words are the single deliberate exception.
 */
export const ph_week2: Lesson = {
  key: "ph_week2",
  unitKey: "phonics_foundations",
  title: "Sound It Out: i, n, m, d",
  bigIdeas: [],
  englishFocus: "Hearing, blending, and writing i, n, m, d — and reviewing s, a, t, p — in real words.",
  koreanL1Note:
    "None of i/n/m/d is a Korean-L1 trouble sound. Keep reviewing last week's s/a/t/p in the drill so blending stays cumulative, not a fresh start each week. Kids will need paper and a pencil from the letter-formation block onward.",
  objectives: [
    "I can say the sound each letter makes: i, n, m, d.",
    "I can blend sounds together to read new words.",
    "I can write the letters i, n, m, d when I hear their sounds.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — Letters and Sounds Phase 2, Set 2.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Quick review: show the s, a, t, p keyword pictures from last week and have the class say each sound before moving on.",
      prompt: "Can you still remember s, a, t, p?",
      promptSimple: "Do you remember s, a, t, p?",
    },
    {
      type: "activity",
      instructions: "Sounds only — say each one the moment you see the letter. Ready?",
      config: {
        engine: "sound_drill",
        title: "Sound Drill",
        teacherNote:
          "Eight cards: last week's four first, then today's four. Move fast — about a second a card — so it feels like a game, not a test. If the class stalls on one, say it for them, move on, and come back to it at the end rather than stopping the rhythm.",
        cards: [
          { letters: "s", keyword: "Sun", emoji: "☀️" },
          { letters: "a", keyword: "Apple", emoji: "🍎" },
          { letters: "t", keyword: "Tiger", emoji: "🐯" },
          { letters: "p", keyword: "Popcorn", emoji: "🍿" },
          { letters: "i", keyword: "Igloo", emoji: "🧊" },
          { letters: "n", keyword: "Nest", emoji: "🪺" },
          { letters: "m", keyword: "Milk", emoji: "🥛" },
          { letters: "d", keyword: "Duck", emoji: "🦆" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Ears only! We're going to change words by swapping or taking away a sound.",
      config: {
        engine: "phoneme_swap",
        title: "Phoneme Play",
        teacherNote:
          "Cover the board if you have to — no letters at all in this block. Say the start word, give the instruction, count to three in your head, then let the whole class answer together BEFORE you reveal. A child who can do this orally is ready to spell it later.",
        rounds: [
          { startWord: "man", startEmoji: "🧑", instruction: "Change the /m/ to /p/.", answerWord: "pan", answerEmoji: "🍳" },
          { startWord: "spin", startEmoji: "🌀", instruction: "Take away the /s/. What's left?", answerWord: "pin", answerEmoji: "📌" },
          { startWord: "mad", startEmoji: "😠", instruction: "Change the /m/ to /s/.", answerWord: "sad", answerEmoji: "😢" },
          { startWord: "pat", startEmoji: "🤚", instruction: "Add /s/ to the end.", answerWord: "pats", answerEmoji: "🖐️", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "phonics_sound",
      letters: "i",
      keyword: "Igloo",
      keywordEmoji: "🧊",
      actionCue: "Hug yourself and shiver like you're cold in an igloo, and say a short i-i-i.",
      teacherNote: "The short vowel sound as in 'sit,' not the letter name 'eye.'",
    },
    {
      type: "phonics_sound",
      letters: "n",
      keyword: "Nest",
      keywordEmoji: "🪺",
      actionCue: "Cup your hands like a little nest and say n-n-n.",
      teacherNote: "A continuant — hold it. Don't pair this in the same week with 'm': they look and sound similar, but a week apart is enough space at this pace.",
    },
    {
      type: "phonics_sound",
      letters: "m",
      keyword: "Milk",
      keywordEmoji: "🥛",
      actionCue: "Mime drinking a glass of milk and hum mmmm.",
      teacherNote: "Another continuant — easy to hold and enjoyable to exaggerate.",
    },
    {
      type: "phonics_sound",
      letters: "d",
      keyword: "Duck",
      keywordEmoji: "🦆",
      actionCue: "Waddle like a duck and say a clipped d-d-d.",
      teacherNote: "A stop sound — quick and clean, no 'duh.' Save 'b' for a later week so b/d never sit close together.",
    },
    {
      type: "letter_formation",
      letters: "m",
      strokes: [
        "Start at the top and pull straight down.",
        "Go back up the same line, then over and down for the first hump.",
        "Back up again, then over and down for the second hump.",
      ],
      skyWriteCue: "Everyone stand and sky-write a giant m — down, hump, hump! Hum mmmm the whole way.",
      teacherNote:
        "No pencil lifts at all, which is why it works well as a first go on paper. Three humps usually means a child is going too fast — slow your count to 'down… hump… hump.'",
    },
    {
      type: "letter_formation",
      letters: "d",
      strokes: [
        "Start below the top and curve around to the left, like a little c.",
        "Slide back up to the very top.",
        "Pull straight down to close it.",
      ],
      skyWriteCue: "Sky-write d: round like a c, up high, and straight down! Say d-d-d as you go.",
      teacherNote:
        "Always start with the round part, never the stick — that single habit is what stops d turning into b in a few weeks' time. If a child draws the line first, gently stop them and restart from the circle.",
    },
    {
      type: "activity",
      instructions: "Let's put the sounds together to read real words!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "Tap each tile, say the sound together, then Blend. All four words reuse only sounds taught so far.",
        words: [
          { parts: ["s", "i", "t"], word: "sit", emoji: "🪑" },
          { parts: ["p", "i", "n"], word: "pin", emoji: "📌" },
          { parts: ["m", "a", "d"], word: "mad", emoji: "😠" },
          { parts: ["m", "a", "n"], word: "man", emoji: "🧑" },
          { parts: ["d", "i", "p"], word: "dip", emoji: "🥣", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Only ONE sound changes each time. Can you spot which one?",
      config: {
        engine: "word_chain",
        title: "Word Chain",
        teacherNote:
          "Read the new word aloud together BEFORE tapping Check. Ask 'which sound changed — the start, the middle, or the end?' every link; the middle-sound change (pat to pit) is the hard one and the whole point of the activity.",
        start: { parts: ["m", "a", "n"], word: "man", emoji: "🧑" },
        links: [
          { changeIndex: 0, newPart: "p", word: "pan", emoji: "🍳" },
          { changeIndex: 2, newPart: "t", word: "pat", emoji: "🤚" },
          { changeIndex: 1, newPart: "i", word: "pit", emoji: "🕳️" },
          { changeIndex: 0, newPart: "s", word: "sit", emoji: "🪑", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "i — shiver in the igloo, i-i-i", emoji: "🧊" },
        { text: "n — cup a little nest, n-n-n", emoji: "🪺" },
        { text: "m — sip the milk, mmmm", emoji: "🥛" },
        { text: "d — waddle like a duck, d-d-d", emoji: "🦆" },
      ],
    },
    {
      type: "activity",
      instructions: "How many sounds can you hear? Tap a box for each one.",
      config: {
        engine: "sound_box",
        title: "Sound Boxes",
        teacherNote:
          "Stretch the word slowly and have the class push one finger forward per sound before anyone taps. 'Pins' has four — a good first taste of a word that doesn't stop at three.",
        words: [
          { word: "man", emoji: "🧑", parts: ["m", "a", "n"] },
          { word: "sad", emoji: "😢", parts: ["s", "a", "d"] },
          { word: "dip", emoji: "🥣", parts: ["d", "i", "p"] },
          { word: "pins", emoji: "📌", parts: ["p", "i", "n", "s"], minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "More words that don't play by the rules. These ones we learn by heart!",
      config: {
        engine: "heart_word",
        title: "Heart Words",
        teacherNote:
          "Sound out the regular letters first, THEN reveal the heart letters. In 'to,' the t behaves normally — only the o is a surprise. Naming exactly which letter is odd is what makes this stick better than memorizing the whole word.",
        words: [
          { word: "I", heartIndexes: [0], sentence: "I am sad." },
          { word: "to", heartIndexes: [1], sentence: "I sat next to Dad." },
          { word: "he", heartIndexes: [1], sentence: "He sat in the sand.", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Papers and pencils out! Listen, then write what you hear. No peeking until we check together.",
      config: {
        engine: "dictation",
        title: "Write What You Hear",
        teacherNote:
          "Say each word twice at normal speed — over-stretching makes kids spell what they hear rather than the word itself. Wait until every pencil stops before revealing. Praise correct SOUNDS even when the handwriting is wobbly; letter shape is the letter-formation block's job, not this one.",
        words: [
          { text: "in" },
          { text: "man" },
          { text: "sit" },
          { text: "dad" },
          { text: "pins", minTrack: "explorers" },
        ],
        sentences: [{ text: "Dad is sad." }],
      },
    },
    {
      type: "activity",
      instructions: "Now let's read a story together — you know every sound in it!",
      config: {
        engine: "decodable_text",
        title: "Read It Together",
        teacherNote:
          "Read each line chorally, then invite one volunteer to read it alone. Every word uses only s/a/t/p/i/n/m/d plus the heart words 'the' and 'a.' Tap any word the class gets stuck on.",
        lines: [
          { text: "An ant sat in the sand.", emoji: "🐜" },
          { text: "The ant is at a tin.", emoji: "🥫" },
          { text: "Tip it, ant! Tip the tin!", emoji: "🫗" },
        ],
        comprehensionQuestions: [
          { question: "Where is the ant sitting?", discussionNote: "In the sand — point back to the first line together." },
          { question: "Which two words in the last line start with the same sound?", discussionNote: "Tip and tin — both start with /t/. Have a child point at both t's on screen." },
        ],
      },
    },
    {
      type: "wrapup",
      summary: "Today we learned i, n, m, d, blended them into words like sit, pin, mad and man, wrote them down, and read a whole ant story!",
      summarySimple: "We learned i, n, m, d! We made words, wrote them, and read a story!",
      homework: "At home, find one thing that starts with i, n, m, or d and tell a grown-up its sound.",
    },
  ],
};
