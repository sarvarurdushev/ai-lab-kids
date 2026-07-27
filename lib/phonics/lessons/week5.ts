import type { Lesson } from "@/lib/curriculum/types";

/**
 * Letters and Sounds Phase 2, Set 5. Cumulative letters through this week:
 * s,a,t,p,i,n,m,d,g,o,c,k,ck,e,u,r,h,b,f,l.
 *
 * Same 17-block, 50-minute shape as week1.ts — see that file's header for
 * the block-by-block rationale. Every word in the blending, chain, box,
 * dictation and text blocks is spellable with the sounds above only; the
 * fixed heart words (the/a/is/was/said/you) are the single deliberate
 * exception, and only inside the decodable text.
 */
export const ph_week5: Lesson = {
  key: "ph_week5",
  unitKey: "phonics_foundations",
  title: "Sound It Out: h, b, f, l",
  bigIdeas: [],
  englishFocus: "Hearing, blending, and writing h, b, f, l into real words.",
  koreanL1Note:
    "Two real trouble spots land together this week. Korean has no /f/ or /v/ — expect 'f' to slip toward /p/ (the Minimal Pairs f/p game targets exactly this). And now that 'l' joins 'r' from last week, this is the moment to start the Minimal Pairs l/r game regularly. Kids will need paper and a pencil from the letter-formation block onward.",
  objectives: [
    "I can say the sound each letter makes: h, b, f, l.",
    "I can blend sounds together to read new words.",
    "I can write the letters h, b, f, and l when I hear their sounds.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — Letters and Sounds Phase 2, Set 5.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Quick review: show last week's ck, e, u, r keyword pictures and have the class say each sound.",
      prompt: "Can you still remember ck, e, u, r?",
      promptSimple: "Do you remember ck, e, u, r?",
    },
    {
      type: "activity",
      instructions: "Look at each card and say its sound together — fast!",
      config: {
        engine: "sound_drill",
        title: "Sound Drill",
        teacherNote:
          "Ten cards: now that all five vowels have been taught, they anchor every drill from here on since they're what slips first. 'r' stays in for one more week since it's a genuine trouble sound, then today's four new ones close it out.",
        cards: [
          { letters: "a", keyword: "Apple", emoji: "🍎" },
          { letters: "e", keyword: "Elephant", emoji: "🐘" },
          { letters: "i", keyword: "Igloo", emoji: "🧊" },
          { letters: "o", keyword: "Octopus", emoji: "🐙" },
          { letters: "u", keyword: "Umbrella", emoji: "☂️" },
          { letters: "r", keyword: "Rabbit", emoji: "🐰" },
          { letters: "h", keyword: "Hat", emoji: "🎩" },
          { letters: "b", keyword: "Ball", emoji: "⚽" },
          { letters: "f", keyword: "Fish", emoji: "🐟" },
          { letters: "l", keyword: "Leaf", emoji: "🍃" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Ears only! We're going to change words by swapping a sound.",
      config: {
        engine: "phoneme_swap",
        title: "Phoneme Play",
        teacherNote:
          "Purely oral — no letters at all in this block. Say the start word, give the instruction, let the whole class answer together, THEN reveal. Rounds 1 and 2 warm up 'b,' and round 3 gives 'f' its own moment before 'l' joins 'r' in the blending block next.",
        rounds: [
          { startWord: "hat", startEmoji: "🎩", instruction: "Change the /h/ to /b/.", answerWord: "bat", answerEmoji: "🦇" },
          { startWord: "bat", startEmoji: "🦇", instruction: "Change the /b/ to /r/.", answerWord: "rat", answerEmoji: "🐀" },
          { startWord: "fan", startEmoji: "🌀", instruction: "Change the /f/ to /r/.", answerWord: "ran", answerEmoji: "🏃" },
          { startWord: "big", startEmoji: "📏", instruction: "Change the /b/ to /d/.", answerWord: "dig", answerEmoji: "🕳️", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "phonics_sound",
      letters: "h",
      keyword: "Hat",
      keywordEmoji: "🎩",
      actionCue: "Mime tipping a hat and breathe out a soft h-h-h.",
      teacherNote: "A breathy sound — no voice, just air. Easy to over-say; keep it light.",
    },
    {
      type: "phonics_sound",
      letters: "b",
      keyword: "Ball",
      keywordEmoji: "⚽",
      actionCue: "Mime bouncing a ball and say a clipped b-b-b.",
      teacherNote: "A stop sound with voice (unlike 'p'). It's been several weeks since 'd' — that gap is intentional, since b/d are easy to mix up.",
    },
    {
      type: "phonics_sound",
      letters: "f",
      keyword: "Fish",
      keywordEmoji: "🐟",
      actionCue: "Mime a fish mouth opening and closing, ffff.",
      teacherNote:
        "A continuant — hold it. Korean has no /f/, so expect kids to reach for /p/ instead; that's exactly the contrast the Minimal Pairs f/p game drills.",
    },
    {
      type: "phonics_sound",
      letters: "l",
      keyword: "Leaf",
      keywordEmoji: "🍃",
      actionCue: "Let your hand flutter down slowly like a falling leaf and say l-l-l.",
      teacherNote:
        "Now that both 'l' and 'r' (last week) are taught, play the Minimal Pairs l/r game often — this is the single biggest pronunciation gap for Korean-speaking beginners.",
    },
    {
      type: "letter_formation",
      letters: "b",
      strokes: [
        "Start at the top and pull straight down to the bottom line.",
        "Without lifting the pencil, curve back up and around to the right.",
        "Close the curve into a round belly, like a balloon on a stick.",
      ],
      skyWriteCue: "Sky-write a big b: straight down, then a round belly on the bottom right! Say b-b-b.",
      teacherNote:
        "The straight line always comes first, then the belly on the RIGHT — that's what keeps b from flipping into d. If a child starts with the circle, gently stop and restart with the line.",
    },
    {
      type: "letter_formation",
      letters: "l",
      strokes: ["Start at the top.", "Pull straight down to the bottom line.", "Stop — no curve, no lift, just one clean line."],
      skyWriteCue: "Sky-write a tall, straight l — down in one smooth line! Say l-l-l.",
      teacherNote:
        "The simplest letter shape taught so far — a good confidence boost right after the trickier 'b.' Watch that it stays tall and straight, not slanted.",
    },
    {
      type: "activity",
      instructions: "Let's put the sounds together to read real words!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "Sound out each letter, then blend together.",
        words: [
          { parts: ["h", "a", "t"], word: "hat", emoji: "🎩" },
          { parts: ["b", "i", "g"], word: "big", emoji: "📏" },
          { parts: ["f", "a", "n"], word: "fan", emoji: "🌀" },
          { parts: ["l", "e", "g"], word: "leg", emoji: "🦵" },
          { parts: ["b", "u", "s"], word: "bus", emoji: "🚌", minTrack: "explorers" },
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
          "Read the new word aloud together BEFORE tapping Check. Ask 'which sound changed?' every link — and once the chain loops back to 'hat' at the end, ask the class if they remember where the chain started.",
        start: { parts: ["b", "i", "g"], word: "big", emoji: "📏" },
        links: [
          { changeIndex: 1, newPart: "a", word: "bag", emoji: "👜" },
          { changeIndex: 0, newPart: "r", word: "rag", emoji: "🧻" },
          { changeIndex: 2, newPart: "t", word: "rat", emoji: "🐀" },
          { changeIndex: 0, newPart: "h", word: "hat", emoji: "🎩", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "h — tip your hat, h-h-h", emoji: "🎩" },
        { text: "b — bounce a ball, b-b-b", emoji: "⚽" },
        { text: "f — open and close like a fish, ffff", emoji: "🐟" },
        { text: "l — flutter down like a leaf, l-l-l", emoji: "🍃" },
      ],
    },
    {
      type: "activity",
      instructions: "How many sounds can you hear? Tap a box for each one.",
      config: {
        engine: "sound_box",
        title: "Sound Boxes",
        teacherNote:
          "Stretch the word slowly and have the class push one finger forward per sound before anyone taps. 'Lamp' is the first four-sound word this week where every letter really is its own box — a good stretch after all the ck words.",
        words: [
          { word: "fin", emoji: "🐠", parts: ["f", "i", "n"] },
          { word: "bag", emoji: "👜", parts: ["b", "a", "g"] },
          { word: "hut", emoji: "🛖", parts: ["h", "u", "t"] },
          { word: "lamp", emoji: "💡", parts: ["l", "a", "m", "p"], minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "More words that don't play by the rules. Let's learn our next ones!",
      config: {
        engine: "heart_word",
        title: "Heart Words",
        teacherNote:
          "Sound out the regular letter(s) first, THEN reveal the heart letters. In 'all,' the two l's behave normally — it's just the 'a' that says a sound it's never made before.",
        words: [
          { word: "are", heartIndexes: [0, 2], sentence: "You are sad." },
          { word: "all", heartIndexes: [0], sentence: "Dad has all the hats." },
          { word: "her", heartIndexes: [1, 2], sentence: "It is her cat.", minTrack: "explorers" },
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
          "Say each word twice at normal speed — over-stretching makes kids spell what they hear rather than the word itself. Wait until every pencil stops before revealing. Praise correct SOUNDS even when the handwriting is wobbly.",
        words: [
          { text: "bag" },
          { text: "fin" },
          { text: "hut" },
          { text: "leg" },
          { text: "lamp", minTrack: "explorers" },
        ],
        sentences: [{ text: "A big rat ran." }],
      },
    },
    {
      type: "activity",
      instructions: "Now let's read a story together — you know every sound in it!",
      config: {
        engine: "decodable_text",
        title: "Read It Together",
        teacherNote:
          "Read each line chorally, then invite one volunteer to read it alone. Every word uses only sounds taught so far plus the heart words 'the' and 'is.' Tap any word the class gets stuck on.",
        lines: [
          { text: "A big rat ran in a hut.", emoji: "🐀" },
          { text: "The rat had a red bag.", emoji: "👜" },
          { text: "Is the bag in the hut?", emoji: "🛖" },
        ],
        comprehensionQuestions: [
          { question: "Where did the rat run?", discussionNote: "Into a hut — point back to the first line together." },
          { question: "Which two words in line two start with the same sound?", discussionNote: "'Rat' and 'red' — both start with /r/. Have a child point at both r's on screen." },
        ],
      },
    },
    {
      type: "wrapup",
      summary:
        "Today we learned h, b, f, l, blended and chained them into words like big, bag, and rat, wrote what we heard, and read a whole story about a rat!",
      summarySimple: "We learned h, b, f, l! We wrote words and read a story!",
      homework: "At home, find one thing that starts with h, b, f, or l and tell a grown-up its sound.",
    },
  ],
};
