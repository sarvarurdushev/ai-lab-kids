import type { Lesson } from "@/lib/curriculum/types";

/**
 * Phonics Unit 2, week 3 — long-e vowel teams: ee, ea. Explorers (6+) only.
 *
 * Full 50-minute class, built on the same block order as week1.ts (the
 * reference lesson): cumulative drill → oral phoneme work → the new
 * graphemes → handwriting → blending → chaining → movement → segmenting →
 * heart words → dictation → connected text → wrap-up. Unit 2 is the
 * Explorers-only track: every child here has already blended CVC words for
 * fourteen weeks, so the lesson can spend real time on encoding (writing)
 * rather than re-teaching what a sound is.
 *
 * Decodability: every word below uses only Unit 1's sounds plus a_e, i_e,
 * o_e, ai, ay, ee, ea. The only exceptions are the taught heart words.
 */
export const ph_week17: Lesson = {
  key: "ph_week17",
  unitKey: "phonics_vowel_teams",
  title: "Vowel Teams: ee, ea",
  bigIdeas: [],
  englishFocus: "Learning that ee and ea both make the long e sound, and writing both spellings from dictation.",
  koreanL1Note:
    "No particular Korean-L1 trouble sound here. 'ea' is worth flagging as the less predictable of the two spellings — it will later show up making other sounds too (a heads-up for the teacher, not something to teach yet). The real Korean-L1 hurdle this week is length: Korean has no long/short vowel pair like English /e/ vs /ee/, so kids often flatten 'bit' and 'beat' together — stretch the long e deliberately every time you model it. Kids need paper and a pencil from the handwriting block onward, and again for dictation.",
  objectives: [
    "I know that ee and ea both make the long e sound.",
    "I can blend words that use the ee or ea pattern.",
    "I can write ee and ea when I hear the long e sound in a word.",
  ],
  standardsNote:
    "Systematic synthetic phonics (National Reading Panel, 2000) — long vowel teams, ee/ea — delivered on UFLI Foundations' 8-step lesson routine expanded to 50 minutes.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Remind the class of ai/ay from last week. Say: 'Today, two more vowels team up — this time for the long e sound.'",
      prompt: "Two more vowels, one long sound!",
      promptSimple: "Two vowels, one sound: ee!",
    },
    {
      type: "activity",
      instructions: "Look at each card and say its sound together — fast! These are all sounds we already know.",
      config: {
        engine: "sound_drill",
        title: "Sound Drill",
        teacherNote:
          "Pure recall warm-up, not assessment — keep it brisk and choral, about fifteen seconds a card. The long-vowel cards at the end matter most today: kids need a_e, ai and ay solid in their ears before we add a third and fourth spelling for a long vowel.",
        cards: [
          { letters: "sh", keyword: "Ship", emoji: "🚢" },
          { letters: "ch", keyword: "Chair", emoji: "🪑" },
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
          "Don't write or mention spelling here — the whole point is that the long e sound is one sound no matter which letters spell it. Say the start word, give the instruction, let the class answer chorally, THEN reveal. If they stall, say both words slowly back to back and ask what changed.",
        rounds: [
          { startWord: "eat", startEmoji: "🍴", instruction: "Add /m/ to the front.", answerWord: "meat", answerEmoji: "🥩" },
          { startWord: "seat", startEmoji: "💺", instruction: "Change the /s/ to /h/.", answerWord: "heat", answerEmoji: "🔥" },
          { startWord: "sheep", startEmoji: "🐑", instruction: "Change the /sh/ to /d/.", answerWord: "deep", answerEmoji: "🕳️" },
          { startWord: "beach", startEmoji: "🏖️", instruction: "Change the /b/ to /t/.", answerWord: "teach", answerEmoji: "🧑‍🏫", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "phonics_sound",
      letters: "ee",
      keyword: "Bee",
      keywordEmoji: "🐝",
      actionCue: "Buzz around like a bee and say a long e-e-e.",
      teacherNote: "The most reliable long-e spelling — 'ee' almost always says long e.",
    },
    {
      type: "phonics_sound",
      letters: "ea",
      keyword: "Sea",
      keywordEmoji: "🌊",
      actionCue: "Mime gentle waves with your hand and say a long e-e-e.",
      teacherNote: "Usually says long e (sea, read, tea) — it occasionally says other sounds in later words, but not any taught so far.",
    },
    {
      type: "letter_formation",
      letters: "ee",
      strokes: [
        "Start in the middle and draw a short line straight across, like a little shelf.",
        "Without lifting, curve up and around to the left, then down and around to close the e.",
        "Lift, move over a little, and make a second e exactly the same size — ee!",
      ],
      skyWriteCue: "Everyone stand and sky-write a giant e… then a second e right beside it. Stretch a long eeeeee the whole time!",
      teacherNote:
        "Do it in the air as a whole class first, then on paper. Two things to watch: kids starting the e at the top instead of at the crossbar, and the second e coming out smaller than the first. Explorers (6+) can hold a pencil properly, so insist on the correct starting point now — it is much harder to fix later. Say the sound, not the letter name, every single time you model it.",
    },
    {
      type: "activity",
      instructions: "Tap each sound, then blend — ee and ea are each one tile.",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "Both spellings say the exact same sound this week.",
        words: [
          { parts: ["b", "ee"], word: "bee", emoji: "🐝" },
          { parts: ["t", "r", "ee"], word: "tree", emoji: "🌳" },
          { parts: ["s", "ea"], word: "sea", emoji: "🌊" },
          { parts: ["r", "ea", "d"], word: "read", emoji: "📖", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Only ONE sound changes each time. The 'ea' team stays put — watch the ends of the word!",
      config: {
        engine: "word_chain",
        title: "Word Chain",
        teacherNote:
          "Today's chain deliberately never touches the vowel tile — the consonants at the front and back are what move. That forces kids to read all the way through the word instead of guessing from the first letter, which is exactly the habit long-vowel words break. Read each new word together BEFORE tapping Check, and ask 'which sound changed?' on every single link.",
        start: { parts: ["s", "ea", "t"], word: "seat", emoji: "💺" },
        links: [
          { changeIndex: 0, newPart: "m", word: "meat", emoji: "🥩" },
          { changeIndex: 2, newPart: "l", word: "meal", emoji: "🍽️" },
          { changeIndex: 0, newPart: "h", word: "heal", emoji: "🩹" },
          { changeIndex: 2, newPart: "t", word: "heat", emoji: "🔥", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "ee — buzz like a bee, e-e-e", emoji: "🐝" },
        { text: "ea — wave like the sea, e-e-e", emoji: "🌊" },
        { text: "Reach up high like a tall tree!", emoji: "🌳" },
        { text: "Mime reading your favorite book.", emoji: "📖" },
      ],
    },
    {
      type: "activity",
      instructions: "How many sounds can you hear? Tap a box for each one — remember, boxes count sounds, not letters.",
      config: {
        engine: "sound_box",
        title: "Sound Boxes",
        teacherNote:
          "This is the block that makes vowel teams click. 'Feet' has four letters but only three sounds, because ee is a team that shares one box. Say each word slowly, have the class push a finger forward per sound BEFORE tapping, then count the letters together and let them be surprised by the mismatch.",
        words: [
          { word: "bee", emoji: "🐝", parts: ["b", "ee"] },
          { word: "leaf", emoji: "🍃", parts: ["l", "ea", "f"] },
          { word: "feet", emoji: "🦶", parts: ["f", "ee", "t"] },
          { word: "green", emoji: "💚", parts: ["g", "r", "ee", "n"], minTrack: "explorers" },
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
          "Sound out the regular letters together first, THEN reveal the heart letters. 'He' and 'she' are useful right now precisely because the class has just met long e — say 'that e is doing the long e job all by itself, which is why we learn it by heart for now.'",
        words: [
          { word: "he", heartIndexes: [1], sentence: "He can see the sea." },
          { word: "she", heartIndexes: [2], sentence: "She had a green leaf." },
          { word: "said", heartIndexes: [1, 2], sentence: "Dad said, \"Eat the meat.\"" },
          { word: "you", heartIndexes: [1, 2], sentence: "Can you see the bee?", minTrack: "explorers" },
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
          "Say each word twice at normal speed — over-stretching makes kids spell what they hear rather than the real word. The hard call today is ee vs ea: both are correct guesses for the sound, so praise any child who writes a plausible long-e spelling, then show which one this word actually uses. Explorers (6+) should be writing whole words unaided by now; give everyone time to finish before revealing.",
        words: [
          { text: "bee" },
          { text: "sea" },
          { text: "feet" },
          { text: "leaf" },
          { text: "meat", minTrack: "explorers" },
        ],
        sentences: [
          { text: "The bee sat on a leaf." },
          { text: "He can see a green tree.", minTrack: "explorers" },
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
          "Read each line chorally, then let a volunteer read it alone. Every word uses only sounds taught so far plus the heart words 'the', 'a', 'is' and 'she'/'said'. Tap any word the class gets stuck on to enlarge it.",
        lines: [
          { text: "A bee sat on a green leaf.", emoji: "🐝" },
          { text: "The bee can see a big tree.", emoji: "🌳" },
          { text: "She said, \"Eat, bee, eat!\"", emoji: "🍃" },
          { text: "The bee is at the tree. Yum!", emoji: "😋" },
        ],
        comprehensionQuestions: [
          { question: "Where did the bee sit first?", discussionNote: "On a green leaf — go back to the first line and read it again together." },
          {
            question: "Can you find two words with the long e sound?",
            discussionNote: "bee, green, see, tree, eat — have a child point to each and say whether it uses ee or ea.",
          },
        ],
      },
    },
    {
      type: "wrapup",
      summary: "Today we learned two more spellings for one sound: ee and ea, both long e. We made: bee, tree, sea, read.",
      summarySimple: "ee and ea both say long e! We made: bee, tree, sea, read!",
      homework: "At home, find something with an ee or ea sound in its name and tell a grown-up.",
    },
  ],
};
