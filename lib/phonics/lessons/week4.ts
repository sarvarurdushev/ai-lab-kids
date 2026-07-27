import type { Lesson } from "@/lib/curriculum/types";

/**
 * Letters and Sounds Phase 2, Set 4. Cumulative letters through this week:
 * s,a,t,p,i,n,m,d,g,o,c,k,ck,e,u,r.
 *
 * Same 17-block, 50-minute shape as week1.ts — see that file's header for
 * the block-by-block rationale. Every word in the blending, chain, box,
 * dictation and text blocks is spellable with the sounds above only; the
 * fixed heart words (the/a/is/was/said/you) are the single deliberate
 * exception, and only inside the decodable text.
 */
export const ph_week4: Lesson = {
  key: "ph_week4",
  unitKey: "phonics_foundations",
  title: "Sound It Out: ck, e, u, r",
  bigIdeas: [],
  englishFocus:
    "Hearing, blending, and writing ck, e, u, r into real words — including words that end in the /k/ sound.",
  koreanL1Note:
    "'r' is a real trouble spot: Korean has one sound, ㄹ, that falls between English /l/ and /r/. Model it clearly this week, and once 'l' is taught in a couple of weeks, use the Minimal Pairs (l/r) game often. Kids will need paper and a pencil from the letter-formation block onward.",
  objectives: [
    "I can say the sound each letter/letter-pair makes: ck, e, u, r.",
    "I can blend sounds together to read new words, including words ending in ck.",
    "I can write ck, e, u, and r when I hear their sounds.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — Letters and Sounds Phase 2, Set 4.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Quick review: show last week's g, o, c, k keyword pictures and have the class say each sound.",
      prompt: "Can you still remember g, o, c, k?",
      promptSimple: "Do you remember g, o, c, k?",
    },
    {
      type: "activity",
      instructions: "Look at each card and say its sound together — fast!",
      config: {
        engine: "sound_drill",
        title: "Sound Drill",
        teacherNote:
          "Ten cards: the three vowels taught so far, the c/k pair (worth keeping side by side since they spell the same sound), then today's four new ones. Two or three seconds a card once the class is fluent — hold longer on any card that gets a shaky answer.",
        cards: [
          { letters: "a", keyword: "Apple", emoji: "🍎" },
          { letters: "i", keyword: "Igloo", emoji: "🧊" },
          { letters: "o", keyword: "Octopus", emoji: "🐙" },
          { letters: "s", keyword: "Sun", emoji: "☀️" },
          { letters: "c", keyword: "Cat", emoji: "🐱" },
          { letters: "k", keyword: "Kite", emoji: "🪁" },
          { letters: "ck", keyword: "Sock", emoji: "🧦" },
          { letters: "e", keyword: "Elephant", emoji: "🐘" },
          { letters: "u", keyword: "Umbrella", emoji: "☂️" },
          { letters: "r", keyword: "Rabbit", emoji: "🐰" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Ears only! We're going to change words by swapping or adding a sound.",
      config: {
        engine: "phoneme_swap",
        title: "Phoneme Play",
        teacherNote:
          "Purely oral — no letters at all in this block. Say the start word, give the instruction, let the whole class answer together, THEN reveal. 'r' is a genuine trouble sound, so linger on rounds 1 and 2 and model your mouth shape clearly.",
        rounds: [
          { startWord: "run", startEmoji: "🏃", instruction: "Change the /r/ to /s/.", answerWord: "sun", answerEmoji: "☀️" },
          { startWord: "rock", startEmoji: "🪨", instruction: "Change the /r/ to /s/.", answerWord: "sock", answerEmoji: "🧦" },
          { startWord: "up", startEmoji: "⬆️", instruction: "Add /c/ to the front.", answerWord: "cup", answerEmoji: "☕" },
          { startWord: "cup", startEmoji: "☕", instruction: "Change the /c/ to /p/.", answerWord: "pup", answerEmoji: "🐶", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "phonics_sound",
      letters: "ck",
      keyword: "Sock",
      keywordEmoji: "🧦",
      actionCue: "Mime pulling on a sock and say a quick k-k-k at the end.",
      teacherNote:
        "Two letters, one sound — the same /k/ as 'c' and 'k,' but spelled this way right after a short vowel at the end of a word (sock, duck, rock). No new sound to learn, just a new spelling.",
    },
    {
      type: "phonics_sound",
      letters: "e",
      keyword: "Elephant",
      keywordEmoji: "🐘",
      actionCue: "Swing your arm like a trunk and say a short e-e-e.",
      teacherNote: "The short vowel sound as in 'red,' not the letter name 'ee.'",
    },
    {
      type: "phonics_sound",
      letters: "u",
      keyword: "Umbrella",
      keywordEmoji: "☂️",
      actionCue: "Mime opening an umbrella and say a short u-u-u.",
      teacherNote: "The short vowel sound as in 'sun,' not the letter name 'you.'",
    },
    {
      type: "phonics_sound",
      letters: "r",
      keyword: "Rabbit",
      keywordEmoji: "🐰",
      actionCue: "Hop like a rabbit and say r-r-r.",
      teacherNote:
        "Watch closely here: Korean has no separate /r/ and /l/ — this is the single biggest pronunciation gap for these students. Model it clearly and don't worry about perfect accuracy yet; the Minimal Pairs game will drill the contrast directly once 'l' is taught.",
    },
    {
      type: "letter_formation",
      letters: "e",
      strokes: [
        "Start in the middle of the line, not the top.",
        "Draw a small straight line across to the right.",
        "Then curve up and all the way around, like closing a little circle.",
      ],
      skyWriteCue: "Sky-write a big e: little line across, then curve all the way around! Say e-e-e.",
      teacherNote:
        "The only vowel so far that starts in the middle instead of the top — kids who start at the top usually draw an 'l' shape by accident. Model the starting point clearly before anyone tries on paper.",
    },
    {
      type: "letter_formation",
      letters: "r",
      strokes: [
        "Start at the top and pull straight down.",
        "Lift back up to just below the top.",
        "Add a small curve to the right, like a tiny wave.",
      ],
      skyWriteCue: "Sky-write r: down, back up, and a little wave to the side! Say r-r-r.",
      teacherNote:
        "A short hook, not a full hump like 'n' or 'm' — kids often overdraw the curve into a full loop. Keep the hook small and stop early.",
    },
    {
      type: "activity",
      instructions: "Let's put the sounds together to read real words — some end in the /k/ sound now!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "Sound out each letter, then blend — 'ck' is one tile, same as a digraph.",
        words: [
          { parts: ["d", "u", "ck"], word: "duck", emoji: "🦆" },
          { parts: ["r", "o", "ck"], word: "rock", emoji: "🪨" },
          { parts: ["r", "e", "d"], word: "red", emoji: "🔴" },
          { parts: ["r", "u", "n"], word: "run", emoji: "🏃" },
          { parts: ["n", "e", "ck"], word: "neck", emoji: "🦒", minTrack: "explorers" },
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
          "Read the new word aloud together BEFORE tapping Check. Ask 'which sound changed?' every link — the vowel change at the very end (sock to sick) is the hardest one and the whole point of the activity.",
        start: { parts: ["d", "u", "ck"], word: "duck", emoji: "🦆" },
        links: [
          { changeIndex: 1, newPart: "o", word: "dock", emoji: "⚓" },
          { changeIndex: 0, newPart: "r", word: "rock", emoji: "🪨" },
          { changeIndex: 0, newPart: "s", word: "sock", emoji: "🧦" },
          { changeIndex: 1, newPart: "i", word: "sick", emoji: "🤒", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "ck — pull on a sock, k-k-k", emoji: "🧦" },
        { text: "e — swing the trunk, e-e-e", emoji: "🐘" },
        { text: "u — open the umbrella, u-u-u", emoji: "☂️" },
        { text: "r — hop like a rabbit, r-r-r", emoji: "🐰" },
      ],
    },
    {
      type: "activity",
      instructions: "How many sounds can you hear? Tap a box for each one.",
      config: {
        engine: "sound_box",
        title: "Sound Boxes",
        teacherNote:
          "Stretch the word slowly and have the class push one finger forward per sound before anyone taps. 'ck' is still just ONE box, even though it's two letters — that's the whole point of teaching it as a unit.",
        words: [
          { word: "duck", emoji: "🦆", parts: ["d", "u", "ck"] },
          { word: "nest", emoji: "🪺", parts: ["n", "e", "s", "t"] },
          { word: "rock", emoji: "🪨", parts: ["r", "o", "ck"] },
          { word: "socks", emoji: "🧦", parts: ["s", "o", "ck", "s"], minTrack: "explorers" },
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
          "Sound out the regular letter(s) first, THEN reveal the heart letters. In 'was,' the w behaves normally — it's the 'a' and 's' that are the surprise, saying sounds they've never made before.",
        words: [
          { word: "was", heartIndexes: [1, 2], sentence: "The cat was mad." },
          { word: "said", heartIndexes: [1, 2], sentence: "Dad said it." },
          { word: "you", heartIndexes: [0, 1, 2], sentence: "You got a dog.", minTrack: "explorers" },
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
          { text: "sock" },
          { text: "mud" },
          { text: "cup" },
          { text: "neck" },
          { text: "socks", minTrack: "explorers" },
        ],
        sentences: [{ text: "A duck sat in mud." }],
      },
    },
    {
      type: "activity",
      instructions: "Now let's read a story together — you know every sound in it!",
      config: {
        engine: "decodable_text",
        title: "Read It Together",
        teacherNote:
          "Read each line chorally, then invite one volunteer to read it alone. Every word uses only sounds taught so far plus the heart words 'the,' 'said,' and 'is.' Tap any word the class gets stuck on.",
        lines: [
          { text: "A duck sat on a rock.", emoji: "🦆" },
          { text: "The duck said the rock is red.", emoji: "🪨" },
          { text: "A duck can nap on a rock.", emoji: "💤" },
        ],
        comprehensionQuestions: [
          { question: "What did the duck sit on?", discussionNote: "A rock — point back to the first line together." },
          { question: "Which two words in line two start with the same sound?", discussionNote: "'Rock' and 'red' — both start with /r/. Have a child point at both r's on screen." },
        ],
      },
    },
    {
      type: "wrapup",
      summary:
        "Today we learned ck, e, u, r, blended and chained them into words like duck, rock, and sock, wrote what we heard, and read a whole story about a duck!",
      summarySimple: "We learned ck, e, u, r! We wrote words and read a story!",
      homework: "At home, find one thing that ends with the ck sound and tell a grown-up.",
    },
  ],
};
