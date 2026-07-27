import type { Lesson } from "@/lib/curriculum/types";

/**
 * Phonics Unit 2, week 13 — diphthongs: ow (as in "cow"), ou. Explorers
 * (6+) only. 'ow' was already taught in week 18 making the long-o sound
 * (snow) — this lesson explicitly calls that back out, since it's the
 * same spelling now making a completely different sound.
 *
 * Rebuilt to the full 50-minute shape set by week1.ts/week22.ts — same
 * block order, same reasons:
 *
 *   1  Sound Drill          4 min   cumulative review of Unit 2 so far
 *   2  Phoneme Play         4 min   oral sound swapping, no print
 *   3  Sound of the Day     5 min   ow (surprise sound) and ou
 *   4  Write It Big         4 min   handwriting the ou pattern
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
 * ar/or/er/ir/ur and today's ow/ou). The only exceptions are heart words,
 * which are taught as heart words in block 9 before they appear in the
 * reading.
 */
export const ph_week24: Lesson = {
  key: "ph_week24",
  unitKey: "phonics_vowel_teams",
  title: "New Sound, Same Spelling: ow (like cow), ou",
  bigIdeas: [],
  englishFocus:
    "Learning that ow can say a totally different sound than the one taught a few weeks ago, and meeting ou — then reading, blending, and writing words that use them.",
  koreanL1Note:
    "No particular Korean-L1 trouble sound here — the challenge is purely that English spelling reuses 'ow' for two unrelated sounds. Naming that explicitly (rather than treating it as a one-off exception) helps kids build the habit of trying more than one sound when a word doesn't make sense at first. Kids will need paper and a pencil from the Write It Big block onward.",
  objectives: [
    "I know that ow can say the sound in 'cow,' a different sound than the one in 'snow.'",
    "I can blend words that use this ow sound or the ou spelling.",
    "I can write words with the ow (cow) sound or the ou spelling when I hear them.",
  ],
  standardsNote:
    "Systematic synthetic phonics (National Reading Panel, 2000) — diphthongs, ow/ou. Delivered on UFLI Foundations' 8-step routine (cumulative drill → phonemic awareness → new concept → word work → irregular words → dictation → connected text) expanded to a 50-minute whole-class lesson.",
  segments: [
    {
      type: "warmup",
      teacherScript:
        "Say 'snow' (from a few weeks ago), then 'cow.' Both are spelled with 'ow' — ask the class if they sound the same. (They don't!)",
      prompt: "Same spelling, but does it always sound the same?",
      promptSimple: "ow can say two different sounds!",
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
          { letters: "ir", keyword: "Bird", emoji: "🐦" },
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
          "Purely oral — don't write anything. Say the start word, give the instruction, let the whole class answer aloud, THEN reveal. This is the 'surprised' ow sound the whole round, never the 'snow' sound.",
        rounds: [
          { startWord: "cow", startEmoji: "🐄", instruction: "Change the /c/ to /h/.", answerWord: "how", answerEmoji: "🤔" },
          { startWord: "how", startEmoji: "🤔", instruction: "Add /n/ to the front.", answerWord: "now", answerEmoji: "⏰" },
          { startWord: "cloud", startEmoji: "☁️", instruction: "Take away the /k/. What's left?", answerWord: "loud", answerEmoji: "📢" },
          {
            startWord: "shout",
            startEmoji: "📣",
            instruction: "Change the /sh/ to /p/.",
            answerWord: "pout",
            answerEmoji: "😤",
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      type: "phonics_sound",
      letters: "ow",
      keyword: "Cow",
      keywordEmoji: "🐄",
      actionCue: "Mime cow horns with your hands and say ow-ow-ow, like when something surprises you.",
      teacherNote:
        "This is the SAME spelling as week 18's 'snow,' but a completely different sound. If a word with 'ow' doesn't make sense with one sound, try the other.",
    },
    {
      type: "phonics_sound",
      letters: "ou",
      keyword: "Cloud",
      keywordEmoji: "☁️",
      actionCue: "Mime a puffy cloud shape with your arms and say the same ow-ow-ow sound.",
      teacherNote: "Makes the exact same sound as this week's 'ow' — just a different common spelling.",
    },
    {
      type: "letter_formation",
      letters: "ou",
      strokes: [
        "Start the o just below the top line and circle all the way around back to where you started.",
        "Lift your pencil and set it down right next to the o.",
        "For the u, make a small curve down and up, like a tiny cup.",
        "Add a short tail up on the right side of the u.",
      ],
      skyWriteCue: "Everyone stand up and sky-write a giant o, then a giant u right next to it — say ou-ou-ou the whole time, never 'oh-you'!",
      teacherNote:
        "Two letters, one sound — same idea as every vowel team so far. This 'ou' says today's surprised sound (like in cloud), not another sound kids may meet in 'ou' words later on. Say the single ou sound while writing both letters as one pair, air first, then on paper.",
    },
    {
      type: "activity",
      instructions: "Tap each sound, then blend — ow (cow) and ou are each one tile.",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "This is the 'surprised' ow sound, not the 'snow' sound from week 18 — the same spelling, a different word each time.",
        words: [
          { parts: ["c", "ow"], word: "cow", emoji: "🐄" },
          { parts: ["h", "ow"], word: "how", emoji: "🤔" },
          { parts: ["c", "l", "ou", "d"], word: "cloud", emoji: "☁️" },
          { parts: ["sh", "ou", "t"], word: "shout", emoji: "📣", minTrack: "explorers" },
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
          "Read the new word together BEFORE tapping Check. Only the first consonant changes this round — the ow tile never moves, which is exactly what makes it easy to track.",
        start: { parts: ["c", "ow"], word: "cow", emoji: "🐄" },
        links: [
          { changeIndex: 0, newPart: "h", word: "how", emoji: "🤔" },
          { changeIndex: 0, newPart: "n", word: "now", emoji: "⏰" },
          { changeIndex: 0, newPart: "w", word: "wow", emoji: "😮" },
          { changeIndex: 0, newPart: "b", word: "bow", emoji: "🙇", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "ow — cow horns, ow-ow-ow (surprised sound!)", emoji: "🐄" },
        { text: "Shrug and say 'how?'", emoji: "🤔" },
        { text: "Mime a puffy cloud floating by.", emoji: "☁️" },
        { text: "Cup your hands and shout hooray!", emoji: "📣" },
      ],
    },
    {
      type: "activity",
      instructions: "How many sounds can you hear? Tap a box for each one.",
      config: {
        engine: "sound_box",
        title: "Sound Boxes",
        teacherNote:
          "Say the word slowly and have the class push a finger forward for each sound before anyone taps. 'found' and 'count' are the ones to slow down on — 'ou' is two letters doing one job.",
        words: [
          { word: "cow", emoji: "🐄", parts: ["c", "ow"] },
          { word: "shout", emoji: "📣", parts: ["sh", "ou", "t"] },
          { word: "found", emoji: "🔍", parts: ["f", "ou", "n", "d"] },
          { word: "count", emoji: "🔢", parts: ["c", "ou", "n", "t"], minTrack: "explorers" },
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
          "Sound out the regular letters together first, THEN reveal the heart letters. 'they' is a lovely one this week: the class can already read 'th' perfectly — only the 'ey' making a long-a sound has to be remembered.",
        words: [
          { word: "they", heartIndexes: [2, 3], sentence: "They shout when it rains." },
          { word: "was", heartIndexes: [1, 2], sentence: "The cloud was gray." },
          { word: "of", heartIndexes: [1], sentence: "A cup of milk fell down.", minTrack: "explorers" },
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
          "Say each word twice at normal speed — don't over-stretch it, or kids spell what they hear rather than the real word. Give everyone time to finish before revealing. Praise correct SOUNDS even if the handwriting is wobbly; today's spelling choice between ow and ou is the only thing being assessed.",
        words: [{ text: "cow" }, { text: "shout" }, { text: "found" }, { text: "cloud" }, { text: "count", minTrack: "explorers" }],
        sentences: [
          { text: "The loud cow ran out of the barn." },
          { text: "They shout and count the clouds.", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Now let's read it for real — you know every sound on this page!",
      config: {
        engine: "decodable_text",
        title: "Read It Together",
        teacherNote:
          "Read each line chorally, then invite one child to read it alone if they'd like to. Every word uses only sounds taught so far plus the heart words 'of' and 'the'. Tap any word the class gets stuck on.",
        lines: [
          { text: "A loud cow ran out of the barn.", emoji: "🐄" },
          { text: "The cloud floats by the sun.", emoji: "☁️" },
          { text: "The kids found a brown cow in the yard.", emoji: "🟤" },
          { text: "They shout out loud for fun.", emoji: "📣" },
        ],
        comprehensionQuestions: [
          { question: "Where did the cow run out from?", discussionNote: "The barn — check the first line and point at the word 'barn.'" },
          { question: "What did the kids find in the yard?", discussionNote: "A brown cow — read line three again together." },
        ],
      },
    },
    {
      type: "wrapup",
      summary:
        "Today ow surprised us with a new sound (cow), different from snow's ow. We also met ou, blended and wrote words like cloud and shout, and read all about it!",
      summarySimple: "ow can say two sounds! We made, wrote, and read: cow, how, cloud, shout!",
      homework: "At home, say 'snow' and 'cow' — notice they're spelled the same way but sound different!",
    },
  ],
};
