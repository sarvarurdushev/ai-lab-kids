import type { Lesson } from "@/lib/curriculum/types";

/**
 * Phonics Unit 2, week 12 — r-controlled vowels: er, ir, ur. Explorers
 * (6+) only. All three spellings make the exact same sound — the week's
 * whole point is "three spellings, one sound," same framing as Unit 1's
 * c/k or s/a/t/p reviews.
 *
 * Rebuilt to the full 50-minute shape set by week1.ts/week22.ts — same
 * block order, same reasons:
 *
 *   1  Sound Drill          4 min   cumulative review of Unit 2 so far
 *   2  Phoneme Play         4 min   oral sound swapping, no print
 *   3  Sound of the Day     5 min   three spellings, one sound (er/ir/ur)
 *   4  Write It Big         4 min   handwriting the ir pattern
 *   5  Sound It Out         5 min   blending it into words
 *   6  Word Chain           5 min   one sound changes at a time
 *   7  Movement Break       3 min   whole-body reset at the halfway mark
 *   8  Sound Boxes          5 min   segmenting — the bridge to spelling
 *   9  Heart Words          4 min   high-frequency irregular words
 *  10  Write What You Hear  5 min   dictation — the encoding half
 *  11  Read It Together     4 min   connected decodable text
 *  12  Wrap-up              2 min
 *
 * Every word in the blending, chain, box, dictation and reading blocks was
 * checked against the cumulative set through this week (all Unit 1 letters,
 * digraphs and blends, plus a_e/i_e/o_e, ai/ay, ee/ea, oa/ow, igh/y, oo/ue,
 * ar, or and today's er/ir/ur). The only exceptions are heart words, which
 * are taught as heart words in block 9 before they appear in the reading.
 */
export const ph_week23: Lesson = {
  key: "ph_week23",
  unitKey: "phonics_vowel_teams",
  title: "R-Controlled Vowels: er, ir, ur",
  bigIdeas: [],
  englishFocus:
    "Learning that er, ir, and ur all make the exact same sound — then reading, blending, and writing words that use them.",
  koreanL1Note:
    "Same r-controlled idea as the last two weeks, now with three spellings for one sound — no new Korean-L1 concern, just more spelling variety for an already-familiar sound. Kids will need paper and a pencil from the Write It Big block onward.",
  objectives: [
    "I know that er, ir, and ur all make the same sound.",
    "I can blend words that use any of the three spellings.",
    "I can write words with er, ir, or ur when I hear them.",
  ],
  standardsNote:
    "Systematic synthetic phonics (National Reading Panel, 2000) — r-controlled vowels, er/ir/ur. Delivered on UFLI Foundations' 8-step routine (cumulative drill → phonemic awareness → new concept → word work → irregular words → dictation → connected text) expanded to a 50-minute whole-class lesson.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Remind the class of ar and or. Say: 'Today, THREE different spellings all make the exact same sound!'",
      prompt: "Three spellings, one sound — can you believe it?",
      promptSimple: "Three spellings, one sound!",
    },
    {
      type: "activity",
      instructions: "Say each sound as fast as you can — these are all sounds you already know!",
      config: {
        engine: "sound_drill",
        title: "Sound Drill",
        teacherNote:
          "Cumulative review of every vowel team and r-controlled vowel taught so far in this unit. Go fast — one card per breath. Anything the class hesitates on is what to slip back into the movement break later. Don't teach here, just recall.",
        cards: [
          { letters: "a_e", keyword: "Cake", emoji: "🍰" },
          { letters: "ai", keyword: "Rain", emoji: "🌧️" },
          { letters: "ee", keyword: "Bee", emoji: "🐝" },
          { letters: "oa", keyword: "Boat", emoji: "⛵" },
          { letters: "igh", keyword: "Light", emoji: "💡" },
          { letters: "oo", keyword: "Moon", emoji: "🌙" },
          { letters: "ue", keyword: "Blue", emoji: "🔵" },
          { letters: "ar", keyword: "Car", emoji: "🚗" },
          { letters: "or", keyword: "Corn", emoji: "🌽" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Ears only — no letters this time. Listen, change one sound, and say the new word out loud together.",
      config: {
        engine: "phoneme_swap",
        title: "Phoneme Play",
        teacherNote:
          "Purely oral — don't write anything. Say the start word, give the instruction, let the whole class answer aloud, THEN reveal. All three of today's spellings sound identical, so make sure they're listening for which CONSONANT changes, not the vowel.",
        rounds: [
          { startWord: "bird", startEmoji: "🐦", instruction: "Change the /b/ to /th/.", answerWord: "third", answerEmoji: "3️⃣" },
          { startWord: "shirt", startEmoji: "👕", instruction: "Change the /sh/ to /d/.", answerWord: "dirt", answerEmoji: "🟤" },
          { startWord: "burn", startEmoji: "🔥", instruction: "Change the /b/ to /t/.", answerWord: "turn", answerEmoji: "🔄" },
          {
            startWord: "turn",
            startEmoji: "🔄",
            instruction: "Change the /t/ to /h/.",
            answerWord: "hurt",
            answerEmoji: "🤕",
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      type: "phonics_sound",
      letters: "er",
      keyword: "Fern",
      keywordEmoji: "🌿",
      actionCue: "Wiggle your fingers like fern leaves and say er-er-er.",
      teacherNote: "The most common of the three spellings.",
    },
    {
      type: "phonics_sound",
      letters: "ir",
      keyword: "Bird",
      keywordEmoji: "🐦",
      actionCue: "Flap your arms like a bird and say the exact same sound: er-er-er.",
      teacherNote: "Same sound as 'er' above — just a different spelling.",
    },
    {
      type: "phonics_sound",
      letters: "ur",
      keyword: "Turtle",
      keywordEmoji: "🐢",
      actionCue: "Move slowly like a turtle and say the exact same sound again: er-er-er.",
      teacherNote: "Same sound as 'er' and 'ir' — three spellings, one sound. This is the whole point of the lesson.",
    },
    {
      type: "letter_formation",
      letters: "ir",
      strokes: [
        "Start the i just below the top line: a short straight line down.",
        "Lift your pencil and add a small dot right above it.",
        "Set your pencil down again next to the i for the r.",
        "Pull straight down, then curve up and out to the right — a tiny arm reaching.",
      ],
      skyWriteCue: "Everyone stand up and sky-write a giant i (don't forget the dot!) then a giant r — say ir-ir-ir the whole time, never 'eye-arr'!",
      teacherNote:
        "Two letters, one sound — just like or and ar before it. Saying the single ir sound while the hand draws both letters together is what teaches the eye to see them as one chunk instead of two separate letters to sound out one at a time. Air first as a class, then on paper.",
    },
    {
      type: "activity",
      instructions: "Tap each sound, then blend — er, ir, and ur are each one tile, and they all sound the same!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "All three spellings make the identical sound — a great moment to ask kids to notice that themselves.",
        words: [
          { parts: ["f", "er", "n"], word: "fern", emoji: "🌿" },
          { parts: ["b", "ir", "d"], word: "bird", emoji: "🐦" },
          { parts: ["b", "ur", "n"], word: "burn", emoji: "🔥" },
          { parts: ["sh", "ir", "t"], word: "shirt", emoji: "👕", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Watch closely — only ONE tile changes each time. Can you spot which one?",
      config: {
        engine: "word_chain",
        title: "Word Chain",
        teacherNote:
          "Read the new word together BEFORE tapping Check. Only the first consonant ever changes this round — the ur tile stays put, which is exactly what makes it easy to isolate.",
        start: { parts: ["b", "ur", "n"], word: "burn", emoji: "🔥" },
        links: [
          { changeIndex: 0, newPart: "t", word: "turn", emoji: "🔄" },
          { changeIndex: 2, newPart: "f", word: "turf", emoji: "🌱" },
          { changeIndex: 0, newPart: "s", word: "surf", emoji: "🏄" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "er — wiggle like fern leaves, er-er-er", emoji: "🌿" },
        { text: "ir — flap like a bird, er-er-er", emoji: "🐦" },
        { text: "ur — move slow like a turtle, er-er-er", emoji: "🐢" },
        { text: "Say all three in a row: er, ir, ur — same sound!", emoji: "🔁" },
      ],
    },
    {
      type: "activity",
      instructions: "How many sounds can you hear? Tap a box for each one.",
      config: {
        engine: "sound_box",
        title: "Sound Boxes",
        teacherNote:
          "Say the word slowly and have the class push a finger forward for each sound before anyone taps. 'burnt' is the one to slow down on — five letters but only four sounds, since 'ur' is two letters doing one job.",
        words: [
          { word: "bird", emoji: "🐦", parts: ["b", "ir", "d"] },
          { word: "fern", emoji: "🌿", parts: ["f", "er", "n"] },
          { word: "burnt", emoji: "🔥", parts: ["b", "ur", "n", "t"] },
          { word: "shirt", emoji: "👕", parts: ["sh", "ir", "t"], minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Some words don't play by the rules. Sound out the part you can, and learn the rest by heart!",
      config: {
        engine: "heart_word",
        title: "Heart Words",
        teacherNote:
          "Sound out the regular letters together first, THEN reveal the heart letters. 'have' is a great one to name explicitly: the class already knows the silent-e rule makes a vowel long (like 'cave') — 'have' breaks that rule, which is exactly why it has to be learned by heart.",
        words: [
          { word: "have", heartIndexes: [3], sentence: "We have a pet bird." },
          { word: "are", heartIndexes: [2], sentence: "We are at the park." },
          { word: "said", heartIndexes: [1, 2], sentence: "She said, \"Look at the bird!\"", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Papers and pencils out! Listen, then write what you hear. Don't look until we check together.",
      config: {
        engine: "dictation",
        title: "Write What You Hear",
        teacherNote:
          "Say each word twice at normal speed — don't over-stretch it, or kids spell what they hear rather than the real word. Give everyone time to finish before revealing. Praise correct SOUNDS even if the handwriting is wobbly; today's spelling choice between er/ir/ur is the only thing being assessed.",
        words: [{ text: "fern" }, { text: "bird" }, { text: "burn" }, { text: "dirt" }, { text: "shirt", minTrack: "explorers" }],
        sentences: [{ text: "The bird has a red shirt." }, { text: "The girl can surf and swim.", minTrack: "explorers" }],
      },
    },
    {
      type: "activity",
      instructions: "Now let's read it for real — you know every sound on this page!",
      config: {
        engine: "decodable_text",
        title: "Read It Together",
        teacherNote:
          "Read each line chorally, then invite one child to read it alone if they'd like to. Every word uses only sounds taught so far plus the heart word 'the'. Tap any word the class gets stuck on.",
        lines: [
          { text: "A bird can chirp in the fern.", emoji: "🐦" },
          { text: "The girl can twirl and spin.", emoji: "💫" },
          { text: "A big storm can hurt a plant.", emoji: "⛈️" },
          { text: "The kids have fun in the sun.", emoji: "☀️" },
        ],
        comprehensionQuestions: [
          { question: "Where did the bird chirp?", discussionNote: "In the fern — point at the picture together." },
          { question: "What did the storm hurt?", discussionNote: "A plant — read line three again and find the word 'hurt.'" },
        ],
      },
    },
    {
      type: "wrapup",
      summary:
        "Today we learned that er, ir, and ur all make the exact same sound. We blended, chained, and wrote words like fern, bird, and burn — and read a whole passage about them!",
      summarySimple: "er, ir, ur all say the same sound! We wrote and read words like bird and burn!",
      homework: "At home, find something with an er, ir, or ur sound in its name and tell a grown-up.",
    },
  ],
};
