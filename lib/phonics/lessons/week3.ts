import type { Lesson } from "@/lib/curriculum/types";

/**
 * Letters and Sounds Phase 2, Set 3. Cumulative letters through this week:
 * s,a,t,p,i,n,m,d,g,o,c,k.
 *
 * Same 17-block, 50-minute shape as week1.ts — see that file's header for
 * the block-by-block rationale. Every word in the blending, chain, box,
 * dictation and text blocks is spellable with s/a/t/p/i/n/m/d/g/o/c/k only;
 * the fixed heart words (the/a/is/was/said/you) are the single deliberate
 * exception, and only inside the decodable text.
 */
export const ph_week3: Lesson = {
  key: "ph_week3",
  unitKey: "phonics_foundations",
  title: "Sound It Out: g, o, c, k",
  bigIdeas: [],
  englishFocus: "Hearing, blending, and writing g, o, c, k into real words.",
  koreanL1Note:
    "None of g/o/c/k is a Korean-L1 trouble sound. This week's words avoid endings like 'back' or 'sick' on purpose — that /k/-after-short-vowel spelling is 'ck,' its own unit, taught next week. Kids will need paper and a pencil from the letter-formation block onward.",
  objectives: [
    "I can say the sound each letter makes: g, o, c, k.",
    "I can blend sounds together to read new words.",
    "I can write the letters g, o, c, k when I hear their sounds.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — Letters and Sounds Phase 2, Set 3.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Quick review: show last week's i, n, m, d keyword pictures and have the class say each sound.",
      prompt: "Can you still remember i, n, m, d?",
      promptSimple: "Do you remember i, n, m, d?",
    },
    {
      type: "activity",
      instructions: "Look at each card and say its sound together — fast!",
      config: {
        engine: "sound_drill",
        title: "Sound Drill",
        teacherNote:
          "Ten cards: six sounds from the last two weeks plus today's four. t and p drop out of the drill itself this week only because they're the two safest sounds so far — they still get plenty of practice in today's blending and word chain. Two or three seconds a card once the class is fluent.",
        cards: [
          { letters: "a", keyword: "Apple", emoji: "🍎" },
          { letters: "i", keyword: "Igloo", emoji: "🧊" },
          { letters: "s", keyword: "Sun", emoji: "☀️" },
          { letters: "n", keyword: "Nest", emoji: "🪺" },
          { letters: "m", keyword: "Milk", emoji: "🥛" },
          { letters: "d", keyword: "Duck", emoji: "🦆" },
          { letters: "g", keyword: "Goat", emoji: "🐐" },
          { letters: "o", keyword: "Octopus", emoji: "🐙" },
          { letters: "c", keyword: "Cat", emoji: "🐱" },
          { letters: "k", keyword: "Kite", emoji: "🪁" },
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
          "Purely oral — no letters at all in this block. Say the start word, give the instruction, let the whole class answer together, THEN reveal. If they stall, say both words slowly back to back so they hear the one part that moved.",
        rounds: [
          { startWord: "at", startEmoji: "📍", instruction: "Add /c/ to the front.", answerWord: "cat", answerEmoji: "🐱" },
          { startWord: "cat", startEmoji: "🐱", instruction: "Change the /c/ to /s/.", answerWord: "sat", answerEmoji: "🪑" },
          { startWord: "mop", startEmoji: "🧹", instruction: "Change the /m/ to /p/.", answerWord: "pop", answerEmoji: "🍿" },
          { startWord: "got", startEmoji: "🙌", instruction: "Change the /g/ to /d/.", answerWord: "dot", answerEmoji: "🔴", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "phonics_sound",
      letters: "g",
      keyword: "Goat",
      keywordEmoji: "🐐",
      actionCue: "Mime chewing like a goat and say a clipped g-g-g.",
      teacherNote: "A stop sound — quick and clean.",
    },
    {
      type: "phonics_sound",
      letters: "o",
      keyword: "Octopus",
      keywordEmoji: "🐙",
      actionCue: "Wiggle eight arms like an octopus and say a short o-o-o.",
      teacherNote: "The short vowel sound as in 'hot,' not the letter name 'oh.'",
    },
    {
      type: "phonics_sound",
      letters: "c",
      keyword: "Cat",
      keywordEmoji: "🐱",
      actionCue: "Mime cat whiskers and say a clipped c-c-c.",
      teacherNote: "This 'c' makes the same /k/ sound as 'k' — kids don't need to know why yet, just that both spell the same sound.",
    },
    {
      type: "phonics_sound",
      letters: "k",
      keyword: "Kite",
      keywordEmoji: "🪁",
      actionCue: "Mime flying a kite and say a clipped k-k-k.",
      teacherNote: "Same sound as 'c' above. Point that out if a child asks why there are two.",
    },
    {
      type: "letter_formation",
      letters: "c",
      strokes: [
        "Start near the top and curve around to the left, like starting a circle.",
        "Keep curving down and around.",
        "Stop before you get back to the top — leave it open like a mouth.",
      ],
      skyWriteCue: "Sky-write a big c: curve around like a smile, don't close it! Say c-c-c.",
      teacherNote:
        "An open circle, not a closed one — closing it turns into an 'o.' This is also the exact starting curve for 'd' and 'g,' so getting the direction right here pays off on both of those later.",
    },
    {
      type: "letter_formation",
      letters: "g",
      strokes: [
        "Start just like 'c' — curve around to the left.",
        "Come back up and over to close a small circle.",
        "Add a long tail that swoops down and hooks under the line.",
      ],
      skyWriteCue: "Sky-write g: round like a c, close the circle, then swoop a tail down and hook it! Say g-g-g.",
      teacherNote:
        "The trickiest letter so far — the tail dips below the line, unlike every letter taught until now. Expect wobbly tails and praise the attempt more than the precision.",
    },
    {
      type: "activity",
      instructions: "Let's put the sounds together to read real words!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "All four words avoid the 'ck' ending on purpose — that spelling comes next week.",
        words: [
          { parts: ["c", "a", "t"], word: "cat", emoji: "🐱" },
          { parts: ["d", "o", "g"], word: "dog", emoji: "🐶" },
          { parts: ["c", "o", "t"], word: "cot", emoji: "🛏️" },
          { parts: ["k", "i", "d"], word: "kid", emoji: "🧒" },
          { parts: ["g", "o", "t"], word: "got", emoji: "🙌", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Watch closely — only ONE sound changes each time. Can you spot which one?",
      config: {
        engine: "word_chain",
        title: "Word Chain",
        teacherNote:
          "Read the new word together BEFORE tapping Check. Ask 'which sound changed?' every link — the vowel change at the very end (dot to dig) is the hardest one and the whole point of the activity.",
        start: { parts: ["c", "a", "t"], word: "cat", emoji: "🐱" },
        links: [
          { changeIndex: 1, newPart: "o", word: "cot", emoji: "🛏️" },
          { changeIndex: 0, newPart: "d", word: "dot", emoji: "🔴" },
          { changeIndex: 2, newPart: "g", word: "dog", emoji: "🐶" },
          { changeIndex: 1, newPart: "i", word: "dig", emoji: "🕳️", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "g — chew like a goat, g-g-g", emoji: "🐐" },
        { text: "o — wiggle eight arms, o-o-o", emoji: "🐙" },
        { text: "c — cat whiskers, c-c-c", emoji: "🐱" },
        { text: "k — fly a kite, k-k-k", emoji: "🪁" },
      ],
    },
    {
      type: "activity",
      instructions: "How many sounds can you hear? Tap a box for each one.",
      config: {
        engine: "sound_box",
        title: "Sound Boxes",
        teacherNote:
          "Stretch the word slowly and have the class push one finger forward per sound before anyone taps. 'Kids' has four sounds for four letters — a good clean example before trickier words break that pattern.",
        words: [
          { word: "cot", emoji: "🛏️", parts: ["c", "o", "t"] },
          { word: "dog", emoji: "🐶", parts: ["d", "o", "g"] },
          { word: "pig", emoji: "🐷", parts: ["p", "i", "g"] },
          { word: "kids", emoji: "🧒", parts: ["k", "i", "d", "s"], minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Some words don't play by the rules. Let's learn our next ones!",
      config: {
        engine: "heart_word",
        title: "Heart Words",
        teacherNote:
          "Sound out the regular letter first, THEN reveal the heart letter. In 'go' and 'no,' the first letter behaves normally — only the 'o' is a surprise, saying its own name instead of the short sound taught this week.",
        words: [
          { word: "go", heartIndexes: [1], sentence: "I can go." },
          { word: "no", heartIndexes: [1], sentence: "No, I am sad." },
          { word: "into", heartIndexes: [3], sentence: "The cat got into a pot.", minTrack: "explorers" },
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
          { text: "cot" },
          { text: "dog" },
          { text: "pig" },
          { text: "got" },
          { text: "kids", minTrack: "explorers" },
        ],
        sentences: [{ text: "A dog got a cot." }],
      },
    },
    {
      type: "activity",
      instructions: "Now let's read a story together — you know every sound in it!",
      config: {
        engine: "decodable_text",
        title: "Read It Together",
        teacherNote:
          "Read each line chorally, then invite one volunteer to read it alone. Every word uses only s/a/t/p/i/n/m/d/g/o/c/k plus the heart word 'the.' Tap any word the class gets stuck on.",
        lines: [
          { text: "The dog got a cat.", emoji: "🐶" },
          { text: "Did the cat dig?", emoji: "🕳️" },
          { text: "The dog and cat sit.", emoji: "🪑" },
        ],
        comprehensionQuestions: [
          { question: "What did the dog get?", discussionNote: "A cat — point back to the first line together." },
          { question: "Which two words in line two start with the same sound?", discussionNote: "'Did' and 'dig' — both start with /d/. Have a child point at both d's on screen." },
        ],
      },
    },
    {
      type: "wrapup",
      summary:
        "Today we learned g, o, c, k, blended and chained them into words like cat, cot, and dog, wrote what we heard, and read a whole story about a dog and a cat!",
      summarySimple: "We learned g, o, c, k! We wrote words and read a story!",
      homework: "At home, find one thing that starts with g, o, c, or k and tell a grown-up its sound.",
    },
  ],
};
