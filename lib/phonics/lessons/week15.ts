import type { Lesson } from "@/lib/curriculum/types";

/**
 * Phonics Unit 2 begins here — week 15 of 26, the first Unit 2 week:
 * silent-e ("magic e") long vowels a_e, i_e, o_e. Built for Explorers (6+)
 * only — see lib/phonics/index.ts's LESSON_MIN_TRACK, which gates this and
 * every later Unit 2 week to Explorers; that gate isn't touched here.
 * Little Sparks (4-5) isn't developmentally there yet and keeps reviewing
 * Unit 1 (every letter, digraphs, blends) instead.
 *
 * Full 50-minute class, built on the same 12-block shape as week1.ts (the
 * reference lesson) and the already-rebuilt Unit 2 weeks week17.ts and
 * week21.ts: cumulative drill → oral phoneme work → the new grapheme(s) →
 * handwriting → blending → chaining → movement → segmenting → heart words
 * → dictation → connected text → wrap-up.
 *
 * Split-tile convention (load-bearing across the whole codebase — read
 * this before touching any Unit 2 lesson file): silent-e is represented
 * as ONE combined tile — "a_e", "i_e", "o_e" — the same idea as a digraph
 * like "sh": one grapheme PATTERN, one sound, even though the letters
 * aren't contiguous on the page. A split tile's first half sits at that
 * tile's own position in a `parts` array; its second half (the silent e)
 * is implied at the very end of the word instead — so ["c","a_e","k"]
 * assembles to c + a + k + e, spelling "cake", and ["b","i_e","k"] spells
 * "bike". The silent e itself never gets its OWN tile: it makes no sound
 * of its own, and the whole premise of the Blending engine is that tiles
 * are sounds, not letters. Never say a sound for the silent e out loud,
 * either — that's the single most common way this concept breaks for a
 * 6-year-old, and it's flagged more than once below on purpose.
 *
 * Decodability: every word below uses only Unit 1's sounds (a b c ch ck d
 * e f g h i j k l m n ng o p qu r s sh t th u v w wh x y z) plus this
 * week's a_e, i_e, o_e. The only exceptions are the taught heart words.
 */
export const ph_week15: Lesson = {
  key: "ph_week15",
  unitKey: "phonics_vowel_teams",
  title: "Magic e: a_e, i_e, o_e",
  bigIdeas: [],
  englishFocus:
    "Learning that a silent e at the end of a word makes the vowel before it say its own name, and writing a_e, i_e, and o_e words from dictation.",
  koreanL1Note:
    "This starts Phonics Unit 2 (long vowels), built for Explorers (6+) — Little Sparks should keep reviewing Unit 1 material instead of starting this unit. No particular Korean-L1 trouble sound here (unlike l/r, f/v, th/s in earlier units) — the difficulty this week is purely the new spelling concept, not pronunciation. Kids will need paper and a pencil from the handwriting block onward, and again for dictation.",
  objectives: [
    "I know that a silent e at the end of a word makes the vowel before it say its own name.",
    "I can blend words that use the a_e, i_e, or o_e pattern.",
    "I can write words with a silent e without forgetting the e.",
  ],
  standardsNote:
    "Systematic synthetic phonics (National Reading Panel, 2000) — long vowels, silent-e (VCe) pattern — delivered on UFLI Foundations' 8-step lesson routine expanded to 50 minutes.",
  segments: [
    {
      type: "warmup",
      teacherScript:
        "Write 'cap' and read it together, then add a silent e to make 'cape' and read it together. Ask: what changed? (The a now says its own name!)",
      prompt: "A silent letter that changes the whole word?",
      promptSimple: "A silent e changes the sound!",
    },
    {
      type: "activity",
      instructions: "Look at each card and say its sound together — fast! These are all sounds we already know.",
      config: {
        engine: "sound_drill",
        title: "Sound Drill",
        teacherNote:
          "Pure recall warm-up — brisk and choral, about ten seconds a card. Every sound in this deck is a letter (or letter pair) making its OWN sound. Today's magic e is a different kind of pattern entirely: it makes no sound at all, and it works by reaching back to change the vowel in front of it. Nothing drilled here behaves that way, so don't expect this warm-up to make today's concept feel familiar — flag that difference for the class before moving on.",
        cards: [
          { letters: "a", keyword: "Apple", emoji: "🍎" },
          { letters: "i", keyword: "Igloo", emoji: "🧊" },
          { letters: "o", keyword: "Octopus", emoji: "🐙" },
          { letters: "u", keyword: "Umbrella", emoji: "☂️" },
          { letters: "e", keyword: "Elephant", emoji: "🐘" },
          { letters: "ck", keyword: "Sock", emoji: "🧦" },
          { letters: "qu", keyword: "Queen", emoji: "👑" },
          { letters: "ch", keyword: "Choo-choo train", emoji: "🚂" },
          { letters: "sh", keyword: "Shush", emoji: "🤫" },
          { letters: "th", keyword: "Thumb", emoji: "👍", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Listen carefully — we're going to change words by changing one vowel sound. No letters, just your ears!",
      config: {
        engine: "phoneme_swap",
        title: "Phoneme Play",
        teacherNote:
          "Purely oral — no letters, no spelling, ears only. Say the start word, give the instruction, let the class answer chorally, THEN reveal. This game IS today's whole concept in miniature: every round swaps a short vowel for its long counterpart, which is exactly what the silent e will do on paper in a few minutes. If a round stalls, say both words slowly back-to-back and ask what's different about the vowel.",
        rounds: [
          { startWord: "cap", startEmoji: "🧢", instruction: "Change the short /a/ to a long /a/ — say the vowel's own name.", answerWord: "cape", answerEmoji: "🦸" },
          { startWord: "kit", startEmoji: "🧰", instruction: "Change the short /i/ to a long /i/.", answerWord: "kite", answerEmoji: "🪁" },
          { startWord: "hop", startEmoji: "🐇", instruction: "Change the short /o/ to a long /o/.", answerWord: "hope", answerEmoji: "🤞" },
          { startWord: "tap", startEmoji: "🚰", instruction: "Change the short /a/ to a long /a/.", answerWord: "tape", answerEmoji: "📼", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "phonics_sound",
      letters: "a_e",
      keyword: "Cake",
      keywordEmoji: "🍰",
      actionCue:
        "Trace a big smile in the air — the vowel is smiling because it gets to say its own name — and stretch a long a-a-a, like the letter's own name, not the short 'a' from cat.",
      teacherNote:
        "This is the pattern for the whole week, so take it slowly here. The e at the end makes no sound of its own — never voice it as an extra syllable or a 'uh' — it just reaches back over the one consonant before it and flips the vowel from its short sound to its own letter name. Contrast live with 'cap' (short a) versus 'cape' (long a) so the class hears the exact change the silent e makes.",
    },
    {
      type: "phonics_sound",
      letters: "i_e",
      keyword: "Bike",
      keywordEmoji: "🚲",
      actionCue: "Mime riding a bike, hands on invisible handlebars, and stretch a long i-i-i — the letter's own name, not the short 'i' from sit.",
      teacherNote:
        "Same silent-e job as a_e: the i now says its own name instead of the short sound from Unit 1. Ask 'is the e saying anything?' and listen for the class to answer 'no' before moving on — that question is worth repeating all week.",
    },
    {
      type: "phonics_sound",
      letters: "o_e",
      keyword: "Rope",
      keywordEmoji: "🪢",
      actionCue: "Mime pulling a rope hand over hand and stretch a long o-o-o — the letter's own name, not the short 'o' from hot.",
      teacherNote:
        "Same rule a third time: the silent e reaches back and makes the o say its own name. By the third sound in a row, hand the explanation to a volunteer before you give it — 'who can tell me what this e is doing?' — and correct gently if anyone tries to give it a sound of its own.",
    },
    {
      type: "letter_formation",
      letters: "a_e",
      strokes: [
        "Write the vowel first — for 'cape,' a small round a sitting on the line.",
        "Write one consonant right after it — a p, straight down with a little loop at the top.",
        "Write the e last, right next to the consonant — but its job reaches all the way back over that one consonant to change the vowel, not to anything beside it.",
      ],
      skyWriteCue:
        "Everyone stand and sky-write 'cape' in the air, one letter at a time — a… p… e — then point your finger back at the a and stretch its long name: a-a-a!",
      teacherNote:
        "This week the class isn't learning a brand-new letter shape at all — a, p, and e were all taught back in Unit 1. What's new is the PATTERN: vowel, one consonant, silent e, where the e reaches back over that one consonant to change the vowel two spaces earlier. The single most common mistake: a child writes the e and then tries to say a sound for it, sounding the word out as three sounds — 'c-a-p-e' — instead of two. Stop that the moment you hear it: ask 'does the e say anything?' and wait for the class to answer 'no.'",
    },
    {
      type: "activity",
      instructions: "Tap each sound — the silent e doesn't get its own tile, since it makes no sound of its own!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote:
          "Three tiles per word even though the spelling has four letters — the silent e isn't tapped, just remembered when the word is written. Tap each tile, say the sound together, then press Blend to hear the whole word before revealing the picture.",
        words: [
          { parts: ["c", "a_e", "k"], word: "cake", emoji: "🍰" },
          { parts: ["b", "i_e", "k"], word: "bike", emoji: "🚲" },
          { parts: ["r", "o_e", "p"], word: "rope", emoji: "🪢" },
          { parts: ["c", "a_e", "p"], word: "cape", emoji: "🦸" },
          { parts: ["h", "o_e", "p"], word: "hope", emoji: "🤞", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Watch closely — only ONE tile changes each time. Sometimes that tile just gains (or loses) its silent e!",
      config: {
        engine: "word_chain",
        title: "Word Chain",
        teacherNote:
          "Unlike every earlier chain, one tile here doesn't just swap to a different letter — twice, the SAME position toggles between 'a' and 'a_e', which is exactly how adding or removing a silent e works: the position doesn't move, only whether that vowel tile carries its silent partner. Read each new word together before tapping Check, and ask 'did that tile just change its vowel sound, or become a totally different sound?' every time the vowel tile changes.",
        start: { parts: ["c", "a", "p"], word: "cap", emoji: "🧢" },
        links: [
          { changeIndex: 1, newPart: "a_e", word: "cape", emoji: "🦸" },
          { changeIndex: 0, newPart: "t", word: "tape", emoji: "📼" },
          { changeIndex: 1, newPart: "a", word: "tap", emoji: "🚰" },
          { changeIndex: 2, newPart: "g", word: "tag", emoji: "🏷️", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together. Speed up for a fun round.",
      moves: [
        { text: "a_e — trace a big smile, a-a-a", emoji: "🍰" },
        { text: "i_e — ride a bike, i-i-i", emoji: "🚲" },
        { text: "o_e — pull a rope, o-o-o", emoji: "🪢" },
        { text: "Say 'cap' — then freeze and add a silent e to become 'cape'!", emoji: "🦸" },
      ],
    },
    {
      type: "activity",
      instructions: "How many sounds can you hear? Tap a box for each one — remember, boxes count sounds, not letters.",
      config: {
        engine: "sound_box",
        title: "Sound Boxes",
        teacherNote:
          "This is the block that makes silent-e click: 'cake' has four letters but only three sounds, because the silent e doesn't get a box of its own — it isn't a sound, so it isn't counted. Say each word slowly, have the class push a finger forward per sound BEFORE tapping, then count the letters together on screen and let them be surprised that the letter count is one higher than the sound count, every single time.",
        words: [
          { word: "cake", emoji: "🍰", parts: ["c", "a_e", "k"] },
          { word: "bike", emoji: "🚲", parts: ["b", "i_e", "k"] },
          { word: "rope", emoji: "🪢", parts: ["r", "o_e", "p"] },
          { word: "kite", emoji: "🪁", parts: ["k", "i_e", "t"], minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Some words don't play by the rules. Sound out the part you can, and learn the rest by heart.",
      config: {
        engine: "heart_word",
        title: "Heart Words",
        teacherNote:
          "Sound out the regular letters together first, THEN reveal the heart letters. All three of today's heart words were already introduced in Unit 1 — this is review, not new teaching — but 'was' is worth a second look now: its a doesn't behave like today's new pattern at all (there's no silent e in sight), which is a good moment to contrast a truly irregular spelling against a new RULE the class can now rely on.",
        words: [
          { word: "he", heartIndexes: [1], sentence: "He has a bike." },
          { word: "she", heartIndexes: [2], sentence: "She ate the cake." },
          { word: "was", heartIndexes: [1, 2], sentence: "The rope was long.", minTrack: "explorers" },
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
          "Say each word twice at normal speed — over-stretching makes kids spell what they hear rather than the real word. The signature mistake this week is forgetting the silent e entirely — a child hears 'cake' and writes 'c-a-k,' and that's not wrong about the SOUNDS, it's just incomplete about the SPELLING: the e is a rule to remember, not a sound to hear. Praise the sounds they got right, then point out the missing e by name every time. Give everyone time to finish before revealing.",
        words: [
          { text: "cake" },
          { text: "bike" },
          { text: "rope" },
          { text: "tape" },
          { text: "kite", minTrack: "explorers" },
        ],
        sentences: [
          { text: "Sam has a bike." },
          { text: "Kate and Pete ate a cake.", minTrack: "explorers" },
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
          "Read each line chorally as a class, then let a volunteer read it alone. Every word uses only sounds taught so far plus the heart words 'a', 'she', 'said', 'i', 'have', and 'the'. Tap any word the class gets stuck on to enlarge it.",
        lines: [
          { text: "Kate has a big bike.", emoji: "🚲" },
          { text: "Pete has a rope and a cake.", emoji: "🎂" },
          { text: "She said, \"I have a cake!\"", emoji: "😋" },
          { text: "Kate and Pete ride the bike home.", emoji: "🏠" },
        ],
        comprehensionQuestions: [
          { question: "What two things did Pete have?", discussionNote: "A rope and a cake — go back to the second line and read it together." },
          {
            question: "Can you find a word with a silent e in it?",
            discussionNote: "bike, rope, cake, ride, home — have a child point to one and show where the vowel says its own name.",
          },
        ],
      },
    },
    {
      type: "wrapup",
      summary:
        "Today we met the silent e! It changes a short vowel into its long name: cap became cape, kit became kite, hop became hope. We blended, chained, and wrote words like cake, bike, and rope — and read a whole story about Kate and Pete!",
      summarySimple: "Silent e changes the vowel sound! cap became cape, kit became kite, hop became hope!",
      homework: "At home, find a word ending in a silent e (like cake, bike, or rope) and say it out loud with a grown-up — then try saying it without the e!",
    },
  ],
};
