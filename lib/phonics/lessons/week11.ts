import type { Lesson } from "@/lib/curriculum/types";

/**
 * Second consonant-blend week — r-blends. Like week10 (l-blends) and week12
 * (s-blends), no new phonics_sound or letter_formation segments: a blend
 * isn't a new SOUND, just two already-known sounds said quickly together,
 * so there's no "sound of the day" or handwriting block to build around.
 * Expanded to a full 50-minute lesson on the same block order as week1.ts
 * (the reference lesson), with an extra word_chain link, an extra dictation
 * sentence, and a fourth decodable_text line standing in for the two
 * missing blocks.
 *
 * Every blend this week hides /r/ — the single biggest pronunciation gap
 * for Korean-speaking beginners, whose L1 has no consonant-cluster onsets
 * and no true English /r/ (the closest Korean sound is a quick tongue-tap
 * closer to an English /l/ or /d/). That makes this the best week in the
 * whole unit for l/r contrast work, so the Minimal Pairs framing isn't
 * confined to a single aside: the sound drill deliberately puts 'l' and
 * 'r' back to back, the phoneme-swap round adds /r/ onto a word the class
 * already knows (the oral definition of an r-blend, no letters needed),
 * and the teacher notes on nearly every block below flag what a Korean
 * speaker's l-for-r substitution sounds like and what to do about it in
 * the moment.
 */
export const ph_week11: Lesson = {
  key: "ph_week11",
  unitKey: "phonics_foundations",
  title: "Two Sounds, Said Fast: r-Blends",
  bigIdeas: [],
  englishFocus:
    "Blending two known consonants together at the start of a word — br, cr, dr, fr, gr, tr — and writing them down from dictation.",
  koreanL1Note:
    "Every blend this week hides /r/ — the single biggest pronunciation gap for Korean-speaking beginners, whose L1 has no consonant-cluster onsets and no true English /r/ (the closest Korean sound is a quick tongue-tap, closer to an English /l/ or /d/). This is the best week in the whole unit for l/r contrast work: run a full Minimal Pairs l/r round right after the blending activity while it's freshest, and keep listening for the same gap in the sound drill, the phoneme swap, the word chain, and the dictation. A child who swaps in an l-like sound everywhere is showing you exactly the gap this week exists to close — that's a speech-development stage, not a mistake to mark wrong. Kids will need paper and a pencil from the dictation block onward.",
  objectives: [
    "I can blend four-sound words that start with br, cr, dr, fr, gr, or tr.",
    "I can hear and say the difference between an l-blend and an r-blend.",
    "I can write r-blend words when I hear them, using the sounds I already know.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — consonant blends, r-blend family.",
  segments: [
    {
      type: "warmup",
      teacherScript:
        "Say a few of last week's l-blend words (clap, flag), then a few of today's (crab, frog) — ask the class what sound is hiding in today's words that wasn't in last week's.",
      prompt: "Listen for the r hiding inside today's blends!",
      promptSimple: "Listen for the r sound!",
    },
    {
      type: "activity",
      instructions: "Look at each card and say its sound together — fast! These are all sounds we already know.",
      config: {
        engine: "sound_drill",
        title: "Sound Drill",
        teacherNote:
          "Pure recall warm-up, not assessment — keep it brisk and choral. Today 'l' and 'r' are placed right next to each other on purpose: say them back to back, 'l...r...l...r,' and watch mouths, not just ears. /l/ taps the tongue tip behind the top teeth; /r/ pulls the tongue back without touching anything. If a child's r sounds like l, say 'curl your tongue back like a cat — don't let it touch the roof of your mouth.'",
        cards: [
          { letters: "l", keyword: "Lion", emoji: "🦁" },
          { letters: "r", keyword: "Rabbit", emoji: "🐰" },
          { letters: "ch", keyword: "Choo-choo train", emoji: "🚂" },
          { letters: "sh", keyword: "Shush", emoji: "🤫" },
          { letters: "th", keyword: "Thumb", emoji: "👍" },
          { letters: "wh", keyword: "Whale", emoji: "🐳" },
          { letters: "ng", keyword: "Ring", emoji: "💍" },
          { letters: "qu", keyword: "Queen", emoji: "👑" },
          { letters: "bl", keyword: "Block", emoji: "🧱", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Listen carefully — we're adding a sound to a word. No letters, just your ears!",
      config: {
        engine: "phoneme_swap",
        title: "Phoneme Play",
        teacherNote:
          "Purely oral — don't show or mention letters here. Three of the four rounds add /r/ right after the opening consonant of a word the class already knows — that's the whole concept of an r-blend in one oral game. If a child answers with an l-like sound swapped in instead ('clab' for crab), say both words back to back slowly and ask which one needs the tongue curled back.",
        rounds: [
          { startWord: "cab", startEmoji: "🚕", instruction: "Add /r/ right after the first sound.", answerWord: "crab", answerEmoji: "🦀" },
          { startWord: "fog", startEmoji: "🌫️", instruction: "Add /r/ right after the first sound.", answerWord: "frog", answerEmoji: "🐸" },
          { startWord: "tip", startEmoji: "👆", instruction: "Add /r/ right after the first sound.", answerWord: "trip", answerEmoji: "🧳" },
          {
            startWord: "crab",
            startEmoji: "🦀",
            instruction: "Change the first sound to /g/.",
            answerWord: "grab",
            answerEmoji: "🤲",
            minTrack: "explorers",
          },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Every word below starts with a consonant blend that has 'r' hiding inside — sound out all four tiles, then blend!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote:
          "This is the week's whole point: every blend here hides /r/. If a child inserts a vowel between the two consonants ('cuh-rab' instead of 'crab'), model it again fast and clipped. Right after this activity is the moment to run a full Minimal Pairs l/r round while the blends are freshest.",
        words: [
          { parts: ["c", "r", "a", "b"], word: "crab", emoji: "🦀" },
          { parts: ["f", "r", "o", "g"], word: "frog", emoji: "🐸" },
          { parts: ["t", "r", "i", "p"], word: "trip", emoji: "🧳" },
          { parts: ["d", "r", "u", "m"], word: "drum", emoji: "🥁" },
          { parts: ["g", "r", "i", "n"], word: "grin", emoji: "😁", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "chant",
      title: "Blend It Fast!",
      instructions: "Say the call line, then have the whole class echo the response.",
      lines: [
        { call: "C-R, C-R...", response: "crab, crab, crab!" },
        { call: "F-R, F-R...", response: "frog, frog, frog!" },
        { call: "T-R, T-R...", response: "trip, trip, trip!" },
        { call: "D-R, D-R...", response: "drum, drum, drum!" },
      ],
    },
    {
      type: "activity",
      instructions: "Watch closely — only ONE sound changes each time. Can you spot which one?",
      config: {
        engine: "word_chain",
        title: "Word Chain",
        teacherNote:
          "An extra link today since there's no handwriting block to fill the time. Read the new word together BEFORE tapping Check — ask 'which sound is different?' on every link. On the last two changes (trip to drip to grip), listen closely for the r staying a true r and not softening toward an l.",
        start: { parts: ["c", "r", "a", "ck"], word: "crack", emoji: "🥚" },
        links: [
          { changeIndex: 0, newPart: "t", word: "track", emoji: "🛤️" },
          { changeIndex: 3, newPart: "p", word: "trap", emoji: "🪤" },
          { changeIndex: 2, newPart: "i", word: "trip", emoji: "🧳" },
          { changeIndex: 0, newPart: "d", word: "drip", emoji: "💧" },
          { changeIndex: 0, newPart: "g", word: "grip", emoji: "✊", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Blend Actions!",
      instructions: "Call out a word; everyone does its action.",
      moves: [
        { text: "crab — walk sideways like a crab", emoji: "🦀" },
        { text: "frog — crouch and hop like a frog", emoji: "🐸" },
        { text: "trip — mime packing a suitcase", emoji: "🧳" },
        { text: "drum — mime playing a drum", emoji: "🥁" },
      ],
    },
    {
      type: "activity",
      instructions: "How many sounds can you hear? Tap a box for each one.",
      config: {
        engine: "sound_box",
        title: "Sound Boxes",
        teacherNote:
          "Say the word slowly, stretching each sound, and have the class push a finger forward for each one before tapping. Every r-blend word today has exactly four sounds, matching four letters — the second push should always be a clear /r/, not a softened /l/.",
        words: [
          { word: "frog", emoji: "🐸", parts: ["f", "r", "o", "g"] },
          { word: "trip", emoji: "🧳", parts: ["t", "r", "i", "p"] },
          { word: "drum", emoji: "🥁", parts: ["d", "r", "u", "m"] },
          { word: "grin", emoji: "😁", parts: ["g", "r", "i", "n"], minTrack: "explorers" },
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
          "Sound out the regular letters first, then reveal the heart letters. 'Are' is a nice one this week — the r in the middle says its normal sound; it's only the a and the silent e at the end that are the tricky part to just know by heart.",
        words: [
          { word: "the", heartIndexes: [1, 2], sentence: "The crab has a drum." },
          { word: "are", heartIndexes: [0, 2], sentence: "The frog and crab are fast." },
          { word: "go", heartIndexes: [1], sentence: "Go get the drum.", minTrack: "explorers" },
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
          "Say each word twice, clearly and at normal speed — don't over-stretch it. An extra sentence today, since there's no handwriting block eating into the clock. Watch how each r is written, not just spoken — some kids will say the r correctly but still write an l out of habit; praise the correct sound and gently point back to the r card if the letter doesn't match it.",
        words: [
          { text: "crab" },
          { text: "frog" },
          { text: "trip" },
          { text: "drum" },
          { text: "grip", minTrack: "explorers" },
        ],
        sentences: [
          { text: "The frog can hop." },
          { text: "Bring the drum to Tim." },
          { text: "A crab can grip a trap.", minTrack: "explorers" },
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
          "Read each line chorally, then let a volunteer read it alone. Every word uses only sounds taught so far — all six r-blends turn up somewhere in this one short story — plus the heart words 'a,' 'the,' and 'to.' A fourth line today stands in for the missing letter-formation block.",
        lines: [
          { text: "A crab can grab a big drum.", emoji: "🦀" },
          { text: "Bring it to the frog!", emoji: "🐸" },
          { text: "The frog can trip and drop it.", emoji: "💥" },
          { text: "The frog can grab it and grin!", emoji: "😁" },
        ],
        comprehensionQuestions: [
          { question: "What did the crab grab?", discussionNote: "A big drum — check the first line together." },
          {
            question: "What happened when the frog tried to carry it?",
            discussionNote: "It tripped and dropped the drum — but check the last line too: was the frog still happy? Yes, it grinned!",
          },
        ],
      },
    },
    {
      type: "wrapup",
      summary:
        "Today every blend had an r hiding inside it — we made crab, frog, trip, drum, and grip, chained crack all the way to grip one sound at a time, wrote r-blend words and sentences, and read a whole story about a crab, a frog, and a runaway drum!",
      summarySimple: "Every blend today had 'r' inside! We made: crab, frog, trip, drum! We read a story about a crab and a frog!",
      homework: "At home, say 'crab' and 'club' — can a grown-up tell you're saying two different sounds? Try 'right' and 'light' too.",
    },
  ],
};
