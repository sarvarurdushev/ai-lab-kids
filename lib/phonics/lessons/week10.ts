import type { Lesson } from "@/lib/curriculum/types";

/**
 * First consonant-blend week — l-blends. Like the r- and s-blend weeks
 * that follow (11-12), no new phonics_sound or letter_formation segments:
 * a blend isn't a new SOUND, just two already-known sounds said quickly
 * together — so there's no "sound of the day" or handwriting block to
 * build around. Expanded to a full 50-minute lesson on the same block
 * order as week1.ts (the reference lesson), with an extra word_chain
 * link, an extra dictation sentence, and a fourth decodable_text line
 * standing in for the missing blocks.
 */
export const ph_week10: Lesson = {
  key: "ph_week10",
  unitKey: "phonics_foundations",
  title: "Two Sounds, Said Fast: l-Blends",
  bigIdeas: [],
  englishFocus:
    "Blending two known consonants together at the start of a word — bl, cl, fl, gl, pl, sl — and writing them down from dictation.",
  koreanL1Note:
    "Korean syllables almost never end or begin with a consonant cluster, so saying two consonants back to back without a vowel between them is a genuinely new articulation skill, not just a reading one — expect kids to want to add a small vowel sound between the two letters (\"buh-lock\" instead of \"block\"). This shows up in reading AND in writing, so watch for it again during dictation, not just during blending. Model the blend fast and clipped, and correct the inserted vowel every time it appears rather than letting it slide. Kids will need paper and a pencil from the dictation block onward.",
  objectives: [
    "I know that a blend is two sounds I already know, said quickly together.",
    "I can blend four-sound words that start with bl, cl, fl, gl, pl, or sl.",
    "I can write l-blend words when I hear them, using the sounds I already know.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — consonant blends, l-blend family.",
  segments: [
    {
      type: "warmup",
      teacherScript:
        "Say: 'You already know every one of these sounds! Today we just say two of them very fast, right next to each other — no new sound to learn.'",
      prompt: "Two sounds you know, said really fast!",
      promptSimple: "Two sounds, said fast!",
    },
    {
      type: "activity",
      instructions: "Look at each card and say its sound together — fast! These are all sounds we already know.",
      config: {
        engine: "sound_drill",
        title: "Sound Drill",
        teacherNote:
          "Pure recall warm-up, not assessment — keep it brisk and choral. A blend isn't a new sound, so there's nothing new to drill today: instead, review leans on 'l' plus the six consonants that pair with it (b, c, f, g, p, s), since keeping each one crisp and clipped is exactly what makes it possible to say two of them fast without a vowel sneaking in between. Two digraphs are mixed in as general cumulative review.",
        cards: [
          { letters: "l", keyword: "Lion", emoji: "🦁" },
          { letters: "b", keyword: "Ball", emoji: "⚽" },
          { letters: "c", keyword: "Cat", emoji: "🐱" },
          { letters: "f", keyword: "Fish", emoji: "🐟" },
          { letters: "g", keyword: "Goat", emoji: "🐐" },
          { letters: "p", keyword: "Popcorn", emoji: "🍿" },
          { letters: "s", keyword: "Sun", emoji: "☀️" },
          { letters: "ch", keyword: "Choo-choo train", emoji: "🚂" },
          { letters: "qu", keyword: "Queen", emoji: "👑", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Listen carefully — we're adding a sound right after the first sound of a word. No letters, just your ears!",
      config: {
        engine: "phoneme_swap",
        title: "Phoneme Play",
        teacherNote:
          "Purely oral — don't show or mention letters here. Say the start word, give the instruction, let the class answer aloud together, THEN reveal. Three of the four rounds add /l/ right after the word's very first sound — that's the whole concept of an l-blend in one oral game, no print involved at all.",
        rounds: [
          { startWord: "cap", startEmoji: "🧢", instruction: "Add /l/ right after the /c/.", answerWord: "clap", answerEmoji: "👏" },
          { startWord: "pug", startEmoji: "🐶", instruction: "Add /l/ right after the /p/.", answerWord: "plug", answerEmoji: "🔌" },
          { startWord: "sip", startEmoji: "🥤", instruction: "Add /l/ right after the /s/.", answerWord: "slip", answerEmoji: "🧴" },
          {
            startWord: "slip",
            startEmoji: "🧴",
            instruction: "Change the /s/ to /f/.",
            answerWord: "flip",
            answerEmoji: "🤸",
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      type: "activity",
      instructions: "These words start with two consonants said quickly — sound out all four tiles, then blend!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote:
          "Every blend here (cl, fl, pl, sl, gl) uses only sounds already taught — nothing new, just faster. If a child inserts a vowel between the two consonants ('buh-lock'), gently model it again without the extra vowel, right in the moment, before moving to the next word.",
        words: [
          { parts: ["c", "l", "a", "p"], word: "clap", emoji: "👏" },
          { parts: ["f", "l", "a", "g"], word: "flag", emoji: "🚩" },
          { parts: ["p", "l", "u", "g"], word: "plug", emoji: "🔌" },
          { parts: ["s", "l", "i", "p"], word: "slip", emoji: "🧴" },
          { parts: ["g", "l", "a", "d"], word: "glad", emoji: "😊", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "chant",
      title: "Blend It Fast!",
      instructions: "Say the call line, then have the whole class echo the response, clapping once on each blend.",
      lines: [
        { call: "C-L, C-L...", response: "clap, clap, clap!" },
        { call: "F-L, F-L...", response: "flag, flag, flag!" },
        { call: "P-L, P-L...", response: "plug, plug, plug!" },
        { call: "S-L, S-L...", response: "slip, slip, slip!" },
      ],
    },
    {
      type: "activity",
      instructions: "Watch closely — only ONE sound changes each time. Can you spot which one?",
      config: {
        engine: "word_chain",
        title: "Word Chain",
        teacherNote:
          "An extra link today since there's no handwriting block to fill the time. Read the new word together BEFORE tapping Check — the highlighted tile shows what changed, so ask 'which sound is different?' on every single link. Watch especially for the vowel-insertion error here too: a rushed reader will often say 'buh-lack' for the very first link.",
        start: { parts: ["c", "l", "a", "p"], word: "clap", emoji: "👏" },
        links: [
          { changeIndex: 0, newPart: "f", word: "flap", emoji: "🦅" },
          { changeIndex: 2, newPart: "i", word: "flip", emoji: "🤸" },
          { changeIndex: 0, newPart: "s", word: "slip", emoji: "🧴" },
          { changeIndex: 2, newPart: "a", word: "slap", emoji: "🖐️" },
          { changeIndex: 3, newPart: "b", word: "slab", emoji: "🧱", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Blend Actions!",
      instructions: "Call out a word; everyone does its action.",
      moves: [
        { text: "clap — clap your hands", emoji: "👏" },
        { text: "flag — wave an imaginary flag", emoji: "🚩" },
        { text: "plug — mime plugging something in", emoji: "🔌" },
        { text: "slip — mime sliding on ice, careful!", emoji: "🧴" },
      ],
    },
    {
      type: "activity",
      instructions: "How many sounds can you hear? Tap a box for each one.",
      config: {
        engine: "sound_box",
        title: "Sound Boxes",
        teacherNote:
          "Say the word slowly, stretching each sound, and have the class push a finger forward for each one before tapping. Unlike the digraph weeks just before this one — where sh, ch, th, and wh each collapsed two letters into one sound — every l-blend word today has exactly as many sound boxes as letters: clap is four letters and four sounds. Point that contrast out explicitly; it's the opposite of what digraphs just taught them.",
        words: [
          { word: "clap", emoji: "👏", parts: ["c", "l", "a", "p"] },
          { word: "flag", emoji: "🚩", parts: ["f", "l", "a", "g"] },
          { word: "plug", emoji: "🔌", parts: ["p", "l", "u", "g"] },
          { word: "slip", emoji: "🧴", parts: ["s", "l", "i", "p"], minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Let's review some words that break the rules — sound out the part you can, and remember the rest by heart!",
      config: {
        engine: "heart_word",
        title: "Heart Words",
        teacherNote:
          "Sound out the regular letters together first, then reveal the heart letters — a quick review of words already met, this time inside sentences built from today's l-blend words.",
        words: [
          { word: "he", heartIndexes: [1], sentence: "He can clap." },
          { word: "she", heartIndexes: [2], sentence: "She has a flag." },
          { word: "was", heartIndexes: [1, 2], sentence: "The frog was glad.", minTrack: "explorers" },
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
          "Say each word twice, clearly and at normal speed. Give everyone time to finish writing before revealing. Watch for the classic error here too — a child who sounds out 'buh-lack' and writes an extra vowel letter between the two consonants — and have them say the blend fast and clipped before trying again. An extra sentence today, since there's no handwriting block eating into the clock.",
        words: [
          { text: "black" },
          { text: "flip" },
          { text: "plug" },
          { text: "slap" },
          { text: "glad", minTrack: "explorers" },
        ],
        sentences: [
          { text: "The pup can clap." },
          { text: "A cat can flip and slip." },
          { text: "Dad was glad the black cat sat.", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Now let's read a real story together — you know every sound in it!",
      config: {
        engine: "decodable_text",
        title: "Read It Together",
        teacherNote:
          "Read each line chorally, then let a volunteer read it alone. Every word uses only sounds taught so far plus the heart words 'the,' 'a,' and 'were.' A fourth line today stands in for the missing letter-formation block.",
        lines: [
          { text: "A cat and a pup can run fast.", emoji: "🏃" },
          { text: "Up went the black flag!", emoji: "🚩" },
          { text: "The cat can clap. The pup can flip.", emoji: "👏" },
          { text: "The cat and the pup were glad.", emoji: "😊" },
        ],
        comprehensionQuestions: [
          { question: "What went up to start the race?", discussionNote: "The black flag — point back to the second line together." },
          {
            question: "What could the cat and the pup each do?",
            discussionNote: "The cat could clap and the pup could flip — find both action words in the third line.",
          },
        ],
      },
    },
    {
      type: "wrapup",
      summary:
        "Today we kept our sounds sharp, blended l-blend words like clap, flag, plug, and slip, chained sounds one at a time into flap, flip, and slap, wrote what we heard, and read a whole story about a race!",
      summarySimple: "We made l-blend words: clap, flag, plug, slip! We wrote and read a story!",
      homework: "At home, say 'cap,' then 'clap' — can you feel the extra sound in 'clap'?",
    },
  ],
};
