import type { Lesson } from "@/lib/curriculum/types";

/**
 * Phonics Unit 2, week 8 — r-controlled vowel: or. Explorers (6+) only.
 *
 * Rebuilt to the full 50-minute shape set by week1.ts — same block order,
 * same reasons:
 *
 *   1  Sound Drill          4 min   cumulative review of Unit 2 so far
 *   2  Phoneme Play         4 min   oral sound swapping, no print
 *   3  Sound of the Day     5 min   the new grapheme + keyword + action
 *   4  Write It Big         4 min   handwriting the new pattern
 *   5  Sound It Out         6 min   blending it into words
 *   6  Word Chain           6 min   one sound changes at a time
 *   7  Movement Break       3 min   whole-body reset at the halfway mark
 *   8  Sound Boxes          5 min   segmenting — the bridge to spelling
 *   9  Heart Words          4 min   high-frequency irregular words
 *  10  Write What You Hear  5 min   dictation — the encoding half
 *  11  Read It Together     5 min   connected decodable text
 *  12  Wrap-up              2 min
 *
 * Every word in the blending, chain, box, dictation and reading blocks was
 * checked against the cumulative set through this week (all Unit 1 letters,
 * digraphs and blends, plus a_e/i_e/o_e, ai/ay, ee/ea, oa/ow, igh/y, oo/ue,
 * ar and today's or). The only exceptions are heart words, which are taught
 * as heart words in block 9 before they appear in the reading.
 */
export const ph_week22: Lesson = {
  key: "ph_week22",
  unitKey: "phonics_vowel_teams",
  title: "R-Controlled Vowels: or",
  bigIdeas: [],
  englishFocus:
    "Learning that 'or' makes its own sound, different from 'o' alone — then reading it, and writing it in the words we hear.",
  koreanL1Note:
    "Same idea as last week's ar — 'r' changing the vowel in front of it rather than being a separate sound. No new Korean-L1 concern beyond the ongoing r-modeling. Korean has no syllable-final /r/ at all, so expect kids to drop it or turn it into a vowel; stretching the whole 'or' as ONE long sound (rather than 'o' + 'r') is what fixes this fastest. Kids will need paper and a pencil from block 4 (Write It Big) onward.",
  objectives: [
    "I know that 'or' makes its own sound, different from 'o' alone.",
    "I can blend words that use the or pattern.",
    "I can write words with the or pattern when I hear them.",
  ],
  standardsNote:
    "Systematic synthetic phonics (National Reading Panel, 2000) — r-controlled vowels, or. Delivered on UFLI Foundations' 8-step routine (cumulative drill → phonemic awareness → new concept → word work → irregular words → dictation → connected text) expanded to a 50-minute whole-class lesson.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Remind the class of last week's ar (car). Say: 'Today, r changes a different vowel this time.'",
      prompt: "R changes another vowel today!",
      promptSimple: "R changes o this time!",
    },
    {
      type: "activity",
      instructions: "Say each sound as fast as you can — these are all sounds you already know!",
      config: {
        engine: "sound_drill",
        title: "Sound Drill",
        teacherNote:
          "Cumulative review of the vowel teams taught so far in this unit. Go fast — one card per breath. Anything the class hesitates on is what to slip back into the movement break later. Don't teach here, just recall.",
        cards: [
          { letters: "a_e", keyword: "Cake", emoji: "🍰" },
          { letters: "ai", keyword: "Rain", emoji: "🌧️" },
          { letters: "ee", keyword: "Bee", emoji: "🐝" },
          { letters: "oa", keyword: "Boat", emoji: "⛵" },
          { letters: "igh", keyword: "Light", emoji: "💡" },
          { letters: "oo", keyword: "Moon", emoji: "🌙" },
          { letters: "ue", keyword: "Blue", emoji: "🔵" },
          { letters: "ar", keyword: "Car", emoji: "🚗" },
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
          "Purely oral — don't write anything. Say the start word, give the instruction, let the whole class answer aloud, THEN reveal. The 'or' chunk stays put every round, so the only thing moving is the consonant — that's what makes the new vowel sound easy to hear.",
        rounds: [
          { startWord: "horn", startEmoji: "📯", instruction: "Change the /h/ to /c/.", answerWord: "corn", answerEmoji: "🌽" },
          { startWord: "fork", startEmoji: "🍴", instruction: "Change the /f/ to /p/.", answerWord: "pork", answerEmoji: "🥓" },
          { startWord: "port", startEmoji: "⚓", instruction: "Change the /p/ to /f/.", answerWord: "fort", answerEmoji: "🏰" },
          {
            startWord: "short",
            startEmoji: "📏",
            instruction: "Change the /sh/ to /s/.",
            answerWord: "sort",
            answerEmoji: "🗂️",
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      type: "phonics_sound",
      letters: "or",
      keyword: "Corn",
      keywordEmoji: "🌽",
      actionCue: "Mime eating corn on the cob and say or-or-or.",
      teacherNote: "Same idea as last week's 'ar' — one new combined sound, not 'o' plus 'r' said separately.",
    },
    {
      type: "letter_formation",
      letters: "or",
      strokes: [
        "Start the o just below the top line: go around to the left in one smooth circle, all the way back to where you started.",
        "Lift your pencil and set it down next to the o.",
        "For the r, pull straight down from the middle line.",
        "Go back up the same line and curve over to the right — a tiny arm reaching out.",
      ],
      skyWriteCue: "Everyone stand up and sky-write a giant o, then a giant r — say or-or-or the whole time, never 'oh, arr'!",
      teacherNote:
        "Two letters, one sound — so write them as a pair, never one at a time. Saying the single 'or' sound while the hand draws both letters is what teaches the eye to see 'or' as one chunk instead of two. Air first as a class, then on paper. Watch for the r's arm stopping too early; it should look like it's reaching, not just a bump.",
    },
    {
      type: "activity",
      instructions: "Tap each sound, then blend — or is one tile.",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "'or' is one combined sound.",
        words: [
          { parts: ["c", "or", "n"], word: "corn", emoji: "🌽" },
          { parts: ["f", "or", "k"], word: "fork", emoji: "🍴" },
          { parts: ["s", "t", "or", "m"], word: "storm", emoji: "⛈️" },
          { parts: ["sh", "or", "t"], word: "short", emoji: "📏", minTrack: "explorers" },
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
          "Read the new word together BEFORE tapping Check. Link 2 swaps or → ar, which is the single most useful comparison of the whole lesson: same job, different sound. Ask 'did the first sound change, or the middle one?' every link.",
        start: { parts: ["c", "or", "n"], word: "corn", emoji: "🌽" },
        links: [
          { changeIndex: 0, newPart: "b", word: "born", emoji: "👶" },
          { changeIndex: 1, newPart: "ar", word: "barn", emoji: "🛖" },
          { changeIndex: 2, newPart: "k", word: "bark", emoji: "🐕" },
          { changeIndex: 0, newPart: "d", word: "dark", emoji: "🌑" },
          { changeIndex: 0, newPart: "p", word: "park", emoji: "🏞️", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "or — mime eating corn, or-or-or", emoji: "🌽" },
        { text: "Mime eating with a fork.", emoji: "🍴" },
        { text: "Mime thunder and lightning in a storm!", emoji: "⛈️" },
        { text: "Show something short with your hands.", emoji: "📏" },
      ],
    },
    {
      type: "activity",
      instructions: "How many sounds can you hear? Tap a box for each one.",
      config: {
        engine: "sound_box",
        title: "Sound Boxes",
        teacherNote:
          "Say the word slowly and have the class push a finger forward for each sound before anyone taps. 'north' is the one to slow down on — five letters but only three sounds, because both 'or' and 'th' are two letters doing one job. That's the whole point of counting sounds instead of letters.",
        words: [
          { word: "fork", emoji: "🍴", parts: ["f", "or", "k"] },
          { word: "north", emoji: "🧭", parts: ["n", "or", "th"] },
          { word: "storm", emoji: "⛈️", parts: ["s", "t", "or", "m"] },
          { word: "sport", emoji: "⚽", parts: ["s", "p", "or", "t"], minTrack: "explorers" },
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
          "Sound out the regular letters together first, THEN reveal the heart letters. 'are' is a lovely one this week: the class can already read the 'ar' part perfectly — only the silent e at the end has to be remembered.",
        words: [
          { word: "are", heartIndexes: [2], sentence: "We are on the farm." },
          { word: "of", heartIndexes: [1], sentence: "I have a lot of corn." },
          { word: "to", heartIndexes: [1], sentence: "Run to the barn!", minTrack: "explorers" },
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
          "Say each word twice at normal speed — don't over-stretch it, or kids spell what they hear rather than the real word. Give everyone time to finish before revealing. Praise correct SOUNDS even if the handwriting is wobbly; the 'or' spelling is the only thing being assessed today.",
        words: [{ text: "corn" }, { text: "fork" }, { text: "born" }, { text: "storm" }, { text: "short", minTrack: "explorers" }],
        sentences: [{ text: "The corn is on the cart." }, { text: "A storm hit the barn.", minTrack: "explorers" }],
      },
    },
    {
      type: "activity",
      instructions: "Now let's read it for real — you know every sound on this page!",
      config: {
        engine: "decodable_text",
        title: "Read It Together",
        teacherNote:
          "Read each line chorally, then invite one child to read it alone if they'd like to. Every word uses only sounds taught so far plus the heart words 'the', 'a', 'is', 'to', 'are' and 'you'. Tap any word the class gets stuck on.",
        lines: [
          { text: "A big storm hit the farm.", emoji: "🌩️" },
          { text: "The corn is in the cart.", emoji: "🌽" },
          { text: "Mark and Tom run to the barn.", emoji: "🏃" },
          { text: "You are safe!", emoji: "🤗" },
        ],
        comprehensionQuestions: [
          { question: "Where did Mark and Tom run?", discussionNote: "To the barn — read line three again together and point at the word." },
          {
            question: "How many 'or' words can you find on this page?",
            discussionNote: "Storm and corn. Have a child come up and point at each one, then read it aloud.",
          },
        ],
      },
    },
    {
      type: "wrapup",
      summary: "Today we learned that or makes its own new sound. We made: corn, fork, storm.",
      summarySimple: "or makes its own new sound! We made: corn, fork, storm!",
      homework: "At home, find something with an or sound in its name and tell a grown-up.",
    },
  ],
};
