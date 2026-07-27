import type { Lesson } from "@/lib/curriculum/types";

/**
 * Phonics Unit 2, week 2 — long-a vowel teams: ai, ay. Explorers (6+) only
 * — see lib/phonics/index.ts's LESSON_MIN_TRACK. Little Sparks (4-5) isn't
 * developmentally there yet and keeps reviewing Unit 1 material instead.
 *
 * Full 50-minute class, built on the same 12-block order and per-block
 * timing as week1.ts (the reference lesson): cumulative sound drill → oral
 * phoneme play → the new grapheme(s) → handwriting → blending → word
 * chaining → movement break → sound-box segmenting → heart words →
 * dictation → connected decodable text → wrap-up.
 *
 * The pedagogical spine of this week is NOT a new sound — the class
 * already knows the long a sound from week 15's silent e (cake). What's
 * new is that English spells that one sound three different ways, and the
 * spelling depends on WHERE in the word it falls: ai in the middle (rain,
 * train), ay at the end (day, play). That positional rule is threaded
 * through every block below — phonics_sound, letter_formation, blending,
 * word_chain, heart_word, and especially dictation all come back to it —
 * rather than being mentioned once and dropped.
 *
 * Decodability: every word below uses only Unit 1's sounds (a b c ch ck d
 * e f g h i j k l m n ng o p qu r s sh t th u v w wh x y z) plus week 15's
 * silent-e patterns (a_e, i_e, o_e) plus this week's ai and ay. The only
 * exceptions are the taught heart words (the, to, no, was, go, all, i) and
 * the decodable proper name Sam.
 */
export const ph_week16: Lesson = {
  key: "ph_week16",
  unitKey: "phonics_vowel_teams",
  title: "Vowel Teams: ai, ay",
  bigIdeas: [],
  englishFocus:
    "Learning that English now spells the long a sound three ways (a_e, ai, ay), and that a word's position — middle vs. end — decides between ai and ay.",
  koreanL1Note:
    "No particular Korean-L1 trouble sound here — Korean speakers don't struggle to produce or hear the long a sound itself, and this week doesn't introduce any new phoneme at all. The entire difficulty is orthographic: a third spelling for a sound already known from last week's a_e (cake), governed by a positional RULE rather than a new sound or mouth position. Expect kids to default to 'ai' at the end of a word out of habit (writing 'day' as 'dai'), simply because ai is taught first today — correct it every time by asking 'is that sound in the middle of the word, or right at the end?' Kids need paper and a pencil from the handwriting block onward, and again for dictation.",
  objectives: [
    "I know that ai and ay both make the long a sound.",
    "I can choose ai or ay by noticing where the long a sound falls in a word.",
    "I can blend and write words that use the ai or ay pattern.",
  ],
  standardsNote:
    "Systematic synthetic phonics (National Reading Panel, 2000) — long vowel teams, ai/ay — delivered on UFLI Foundations' 8-step lesson routine expanded to 50 minutes.",
  segments: [
    {
      type: "warmup",
      teacherScript:
        "Remind the class of last week's magic e (cake, bike, rope) — a silent e made the vowel say its own name. Say: 'Today, two vowels standing right next to each other make that very same long a sound — but there's a trick: where the sound falls in the word decides which spelling we use.'",
      prompt: "Two vowels together, one long sound — but which spelling?",
      promptSimple: "Two vowels together make one long sound!",
    },
    {
      type: "activity",
      instructions: "Look at each card and say its sound together — fast! These are all sounds we already know.",
      config: {
        engine: "sound_drill",
        title: "Sound Drill",
        teacherNote:
          "Pure recall warm-up, not assessment — keep it brisk and choral, about fifteen seconds a card. The silent-e cards matter most today: kids need a_e, i_e, and o_e solid in their ears so the last two cards land as 'a third spelling for that same sound' rather than something brand new.",
        cards: [
          { letters: "ch", keyword: "Chair", emoji: "🪑" },
          { letters: "sh", keyword: "Ship", emoji: "🚢" },
          { letters: "th", keyword: "Thumb", emoji: "👍" },
          { letters: "ng", keyword: "Ring", emoji: "💍" },
          { letters: "a_e", keyword: "Cake", emoji: "🎂" },
          { letters: "i_e", keyword: "Bike", emoji: "🚲" },
          { letters: "o_e", keyword: "Bone", emoji: "🦴" },
          { letters: "ai", keyword: "Rain", emoji: "🌧️" },
          { letters: "ay", keyword: "Day", emoji: "☀️", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Ears only — no letters! Listen, change the sound, and say the new word out loud.",
      config: {
        engine: "phoneme_swap",
        title: "Phoneme Play",
        teacherNote:
          "Purely oral — don't show or mention letters or spelling here. The point is that long a is one sound no matter which of the three spellings it turns out to be. Say the start word, give the instruction, let the class answer chorally, THEN reveal. rain→train is an addition (a whole new sound joins the front) — make sure kids hear /t/ joining, not replacing anything.",
        rounds: [
          { startWord: "rain", startEmoji: "🌧️", instruction: "Add /t/ to the front.", answerWord: "train", answerEmoji: "🚂" },
          { startWord: "pain", startEmoji: "🤕", instruction: "Change the /p/ to /g/.", answerWord: "gain", answerEmoji: "📈" },
          { startWord: "day", startEmoji: "☀️", instruction: "Change the /d/ to /w/.", answerWord: "way", answerEmoji: "🛣️" },
          { startWord: "way", startEmoji: "🛣️", instruction: "Change the /w/ to /s/.", answerWord: "say", answerEmoji: "🗣️", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "phonics_sound",
      letters: "ai",
      keyword: "Rain",
      keywordEmoji: "🌧️",
      actionCue: "Wiggle your fingers downward like falling rain and say a long a-a-a.",
      teacherNote:
        "Same long a sound as last week's magic e (cake) — just a new spelling. 'ai' does one specific job: it shows up in the MIDDLE of a word (rain, train, wait), never at the very end. If a child ever tries to spell a word that ENDS in the long a sound with 'ai', that's the exact moment to introduce the rule out loud: ai doesn't go at the end — that job belongs to ay.",
    },
    {
      type: "phonics_sound",
      letters: "ay",
      keyword: "Day",
      keywordEmoji: "☀️",
      actionCue: "Stretch your arms up like the sun rising on a new day and say a long a-a-a.",
      teacherNote:
        "The exact same long a sound as ai — the only difference is position. 'ay' is used at the very END of a word (day, play, stay) and never in the middle. Together, ai and ay split one job by where they fall in the word: ai in the middle, ay at the end. That single rule is the spine of this whole lesson — keep coming back to it in every block from here on.",
    },
    {
      type: "letter_formation",
      letters: "ai",
      strokes: [
        "Start the a with a small curve that closes into a circle, then a short straight line down on the right — just like a normal a.",
        "Lift your pencil and, right beside it, make an i — a short straight line down, then lift again and add a small dot on top.",
        "Keep the two letters touching, with no gap between them — a and i are read as ONE long a sound together, not two separate sounds.",
      ],
      skyWriteCue: "Everyone stand and sky-write a giant a, then right beside it a tall i with its dot — say a long a-a-a the whole time, one sound, not two!",
      teacherNote:
        "Do it in the air as a whole class first, then on paper. Watch for a gap opening up between the a and the i — once there's space, kids tend to sound them out as two separate letters ('a... i...') instead of the one long a sound. If that happens, have them rewrite the pair pressed together and say the sound as they trace it. This is also the spelling that only ever appears in the MIDDLE of a word, never at the end — worth a one-line reminder here while pencils are already on the page, ahead of the fuller rule in the dictation block.",
    },
    {
      type: "activity",
      instructions: "Tap each sound, then blend — ai and ay are each one tile.",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote:
          "Both spellings say the exact same sound — as each word is revealed, ask the class whether the long a landed in the middle (ai) or at the end (ay) before you blend it, so the position rule gets rehearsed on brand-new words, not just the two keywords.",
        words: [
          { parts: ["r", "ai", "n"], word: "rain", emoji: "🌧️" },
          { parts: ["d", "ay"], word: "day", emoji: "☀️" },
          { parts: ["p", "l", "ay"], word: "play", emoji: "🧸" },
          { parts: ["t", "r", "ai", "n"], word: "train", emoji: "🚂" },
          { parts: ["w", "ai", "t"], word: "wait", emoji: "⏳", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Only ONE sound changes each time. Watch where the ai tile sits — it never moves to the end!",
      config: {
        engine: "word_chain",
        title: "Word Chain",
        teacherNote:
          "Today's chain never touches the ai tile or its position — only the consonants around it move. That's deliberate: it shows kids that ai stays put in the middle of the word through every single link, which is exactly the position rule this week is built on. Read each new word together BEFORE tapping Check, and ask 'which sound changed?' on every link.",
        start: { parts: ["r", "ai", "n"], word: "rain", emoji: "🌧️" },
        links: [
          { changeIndex: 0, newPart: "p", word: "pain", emoji: "🤕" },
          { changeIndex: 2, newPart: "l", word: "pail", emoji: "🪣" },
          { changeIndex: 0, newPart: "t", word: "tail", emoji: "🐕" },
          { changeIndex: 0, newPart: "s", word: "sail", emoji: "⛵", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "ai — wiggle your fingers like falling rain, a-a-a", emoji: "🌧️" },
        { text: "ay — stretch up like the sun on a new day, a-a-a", emoji: "☀️" },
        { text: "Mime carrying a heavy pail up a hill.", emoji: "🪣" },
        { text: "Wag an imaginary tail like a happy dog!", emoji: "🐕" },
      ],
    },
    {
      type: "activity",
      instructions: "How many sounds can you hear? Tap a box for each one — remember, boxes count sounds, not letters.",
      config: {
        engine: "sound_box",
        title: "Sound Boxes",
        teacherNote:
          "This is the block where the position rule turns into something kids can feel with their fingers. 'rain' has FOUR letters — r, a, i, n — but only THREE sounds, because ai is a team that shares one box, exactly like every vowel team since week 15's magic e. Say each word slowly, have the class push a finger forward per SOUND before tapping, then count the letters on screen together and let them notice the mismatch. 'day' makes the same point in miniature: three letters, two sounds.",
        words: [
          { word: "rain", emoji: "🌧️", parts: ["r", "ai", "n"] },
          { word: "day", emoji: "☀️", parts: ["d", "ay"] },
          { word: "mail", emoji: "✉️", parts: ["m", "ai", "l"] },
          { word: "train", emoji: "🚂", parts: ["t", "r", "ai", "n"], minTrack: "explorers" },
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
          "Sound out the regular letters first, THEN reveal the heart letters. In 'was', neither the a nor the s says its regular sound — both are heart letters. In 'no' and 'go', the o breaks the short-vowel rule and says its own name with no silent e or vowel team to explain why; that lone irregular letter is the heart part.",
        words: [
          { word: "was", heartIndexes: [1, 2], sentence: "The day was gray." },
          { word: "no", heartIndexes: [1], sentence: "No rain today." },
          { word: "go", heartIndexes: [1], sentence: "I will go and play.", minTrack: "explorers" },
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
          "Say each word twice at normal speed — over-stretching makes kids spell what they hear rather than the real word. This is where the whole week's rule earns its keep: when a child hears the long a sound and isn't sure which spelling to use, teach them to ask one question out loud — 'Is there more word AFTER the long a sound, or is the long a sound the very last thing I hear?' More word after it means ai (rain, train). Long a as the last sound means ay (day, play, stay). Walk one word through that question together before the class writes solo, and praise a plausible ai/ay guess even when it's the wrong one of the pair — that means they heard the sound correctly and just need the position rule. Give everyone time to finish before revealing.",
        words: [
          { text: "rain" },
          { text: "train" },
          { text: "day" },
          { text: "play" },
          { text: "stay", minTrack: "explorers" },
        ],
        sentences: [
          { text: "It will rain today." },
          { text: "Sam will play all day.", minTrack: "explorers" },
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
          "Read each line chorally, then let a volunteer read it alone. Every word uses only sounds taught so far plus the heart words 'the' and 'to', plus the decodable name Sam. Tap any word the class gets stuck on to enlarge it. Point out that line 3's 'away' ends in ay, right where the rule says it should.",
        lines: [
          { text: "It will rain today.", emoji: "🌧️" },
          { text: "Sam had to wait.", emoji: "⏳" },
          { text: "The rain went away.", emoji: "🌦️" },
          { text: "Sam ran to play!", emoji: "🏃" },
        ],
        comprehensionQuestions: [
          { question: "Why did Sam have to wait?", discussionNote: "Because it was raining — point back to the first two lines together." },
          {
            question: "Can you find a word that ends in ay?",
            discussionNote: "away, play — remind them ay always sits at the very end of a word, never in the middle.",
          },
        ],
      },
    },
    {
      type: "wrapup",
      summary:
        "Today we learned that ai and ay both make the long a sound, but they live in different spots in a word: ai in the middle, ay at the end. We blended, chained, and wrote words like rain, train, day, and play — and read a whole story!",
      summarySimple: "ai and ay both say long a! ai goes in the middle, ay goes at the end. We made: rain, day, play!",
      homework:
        "At home, find something with an ai or ay sound in its name, and tell a grown-up whether the sound is in the middle of the word or right at the end.",
    },
  ],
};
