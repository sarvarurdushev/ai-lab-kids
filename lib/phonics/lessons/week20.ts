import type { Lesson } from "@/lib/curriculum/types";

/**
 * Phonics Unit 2, week 6 — oo (long, as in moon) and ue (long u). Explorers
 * (6+) only.
 *
 * Full 50-minute class, built on the same block order as week1.ts (the
 * reference lesson) and week17.ts (the first converted Unit 2 week):
 * cumulative drill → oral phoneme work → the new graphemes → handwriting →
 * blending → chaining → movement → segmenting → heart words → dictation →
 * connected text → wrap-up.
 *
 * Decodability: every word below uses only Unit 1's sounds plus a_e, i_e,
 * o_e, ai, ay, ee, ea, oa, ow, igh, oo, ue. The only exceptions are the
 * taught heart words (to, are, of), which appear only in the connected-text
 * block. 'oo' also makes a second, shorter sound (as in "book") — that is
 * NOT taught this week and no word using it appears anywhere below.
 */
export const ph_week20: Lesson = {
  key: "ph_week20",
  unitKey: "phonics_vowel_teams",
  title: "Vowel Teams: oo, ue",
  bigIdeas: [],
  englishFocus:
    "Learning the oo sound (as in moon) and the ue sound (as in blue), and writing both spellings from dictation.",
  koreanL1Note:
    "No particular Korean-L1 trouble sound here. A heads-up for the teacher, not a teaching point yet: 'oo' also makes a second, shorter sound (as in \"book\") — point it out if it comes up, but this week's focus is only the long sound. Kids will need paper and a pencil from the handwriting block onward, and again for dictation.",
  objectives: [
    "I know the long oo sound (moon) and the ue sound (blue).",
    "I can blend words that use the oo or ue pattern.",
    "I can write oo and ue when I hear the long oo sound in a word.",
  ],
  standardsNote:
    "Systematic synthetic phonics (National Reading Panel, 2000) — vowel teams, oo/ue — delivered on UFLI Foundations' 8-step lesson routine expanded to 50 minutes.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Remind the class of igh/y from last week. Say: 'Today, two more vowel teams — moon's oo, and blue's ue.'",
      prompt: "Two more vowel teams to learn!",
      promptSimple: "Two more team sounds!",
    },
    {
      type: "activity",
      instructions: "Look at each card and say its sound together — fast! These are all sounds we already know.",
      config: {
        engine: "sound_drill",
        title: "Sound Drill",
        teacherNote:
          "Pure recall warm-up — brisk and choral, about fifteen seconds a card. Notice this list is getting long: that's the point. By now most long-vowel spellings should be near-automatic, which is exactly what frees up attention for today's oo and ue.",
        cards: [
          { letters: "a_e", keyword: "Cake", emoji: "🎂" },
          { letters: "i_e", keyword: "Bike", emoji: "🚲" },
          { letters: "o_e", keyword: "Bone", emoji: "🦴" },
          { letters: "ai", keyword: "Rain", emoji: "🌧️" },
          { letters: "ay", keyword: "Day", emoji: "☀️" },
          { letters: "ee", keyword: "Bee", emoji: "🐝" },
          { letters: "ea", keyword: "Sea", emoji: "🌊" },
          { letters: "oa", keyword: "Boat", emoji: "⛵" },
          { letters: "ow", keyword: "Snow", emoji: "❄️" },
          { letters: "igh", keyword: "Light", emoji: "💡", minTrack: "explorers" },
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
          "Purely oral — no letters, ears only. Say the start word, give the instruction, let the class answer together, THEN reveal. boo→boot is an addition, not a substitution — model saying 'boo' then adding a clean /t/ onto the end so kids hear the sound being built, not replaced.",
        rounds: [
          { startWord: "moon", startEmoji: "🌙", instruction: "Change the /m/ to /s/.", answerWord: "soon", answerEmoji: "⏳" },
          { startWord: "boo", startEmoji: "👻", instruction: "Add /t/ to the end.", answerWord: "boot", answerEmoji: "🥾" },
          { startWord: "boot", startEmoji: "🥾", instruction: "Change the /b/ to /r/.", answerWord: "root", answerEmoji: "🥕" },
          { startWord: "true", startEmoji: "✅", instruction: "Change the /tr/ to /gl/.", answerWord: "glue", answerEmoji: "🧴", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "phonics_sound",
      letters: "oo",
      keyword: "Moon",
      keywordEmoji: "🌙",
      actionCue: "Make a big circle with your arms like the moon and say a long oo-oo-oo.",
      teacherNote: "'oo' has a second, shorter sound too (as in 'book') — mention it exists if a child brings it up, but don't drill it yet.",
    },
    {
      type: "phonics_sound",
      letters: "ue",
      keyword: "Blue",
      keywordEmoji: "🔵",
      actionCue: "Point to something blue in the room and say a long oo-oo-oo.",
      teacherNote: "Same sound as the 'oo' above, just a different common spelling.",
    },
    {
      type: "letter_formation",
      letters: "oo",
      strokes: [
        "Start at the top of the first o and curve all the way around to close the circle.",
        "Lift your pencil and make a second o exactly the same size right beside it.",
        "Keep both circles the same size — that's what makes them read as one team.",
      ],
      skyWriteCue: "Everyone stand and sky-write two giant circles side by side — o, o — and stretch a long oooooo the whole time!",
      teacherNote:
        "Do it in the air as a whole class first, then on paper. Two letters, one sound — just like ee and ea were. The most common slip is the second o coming out smaller than the first once kids are moving quickly; stop and compare sizes if you see it.",
    },
    {
      type: "activity",
      instructions: "Tap each sound, then blend — oo and ue are each one tile.",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "Both spellings make the same long oo sound this week.",
        words: [
          { parts: ["m", "oo", "n"], word: "moon", emoji: "🌙" },
          { parts: ["s", "p", "oo", "n"], word: "spoon", emoji: "🥄" },
          { parts: ["b", "l", "ue"], word: "blue", emoji: "🔵" },
          { parts: ["g", "l", "ue"], word: "glue", emoji: "🧴", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Only ONE sound changes each time. The 'oo' team never moves — watch the very first sound!",
      config: {
        engine: "word_chain",
        title: "Word Chain",
        teacherNote:
          "Today's chain never touches the oo tile — only the very first consonant moves. That forces kids to read all the way through the word instead of guessing from the first letter, which is exactly the habit long-vowel words need to break. Read each new word together BEFORE tapping Check, and ask 'which sound changed?' on every single link.",
        start: { parts: ["c", "oo", "l"], word: "cool", emoji: "🧊" },
        links: [
          { changeIndex: 0, newPart: "p", word: "pool", emoji: "🏊" },
          { changeIndex: 0, newPart: "f", word: "fool", emoji: "🤡" },
          { changeIndex: 0, newPart: "t", word: "tool", emoji: "🔧", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "oo — make a big moon circle, oo-oo-oo", emoji: "🌙" },
        { text: "ue — point to something blue, oo-oo-oo", emoji: "🔵" },
        { text: "Mime stirring soup with a spoon.", emoji: "🥄" },
        { text: "Mime squeezing glue onto paper.", emoji: "🧴" },
      ],
    },
    {
      type: "activity",
      instructions: "How many sounds can you hear? Tap a box for each one — remember, boxes count sounds, not letters.",
      config: {
        engine: "sound_box",
        title: "Sound Boxes",
        teacherNote:
          "'Spoon' has five letters but only four sounds, because oo is a team sharing one box. Say each word slowly, have the class push a finger forward per sound BEFORE tapping, then count the letters together and let them be surprised by the mismatch.",
        words: [
          { word: "moon", emoji: "🌙", parts: ["m", "oo", "n"] },
          { word: "spoon", emoji: "🥄", parts: ["s", "p", "oo", "n"] },
          { word: "blue", emoji: "🔵", parts: ["b", "l", "ue"] },
          { word: "glue", emoji: "🧴", parts: ["g", "l", "ue"], minTrack: "explorers" },
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
          "Sound out the regular parts first, THEN reveal the heart letters. 'to' and 'are' each have one part that doesn't play fair; 'are' is still a fully-memorize word for now, since we haven't taught ar as its own sound yet.",
        words: [
          { word: "to", heartIndexes: [1], sentence: "Kids like to swim in the pool." },
          { word: "are", heartIndexes: [0, 1, 2], sentence: "The pools are cool." },
          { word: "of", heartIndexes: [1], sentence: "She had a cup of tea.", minTrack: "explorers" },
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
          "Say each word twice at normal speed — over-stretching makes kids spell what they hear rather than the real word. The hard call today is oo vs ue: both are correct guesses for the sound, so praise any plausible spelling, then show which one this word actually uses. Give everyone time to finish before revealing.",
        words: [
          { text: "moon" },
          { text: "spoon" },
          { text: "blue" },
          { text: "glue" },
          { text: "cool", minTrack: "explorers" },
        ],
        sentences: [
          { text: "Kids like blue kites at night." },
          { text: "Cool pools feel fun at noon.", minTrack: "explorers" },
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
          "Read each line chorally, then let a volunteer read it alone. Every word uses only sounds taught so far plus the heart words 'a', 'the', 'is', 'she', 'said' and 'have'. Tap any word the class gets stuck on to enlarge it.",
        lines: [
          { text: "Kids swim in a cool pool.", emoji: "🏊" },
          { text: "The moon is blue at night.", emoji: "🌙" },
          { text: "She said, \"See the blue moon!\"", emoji: "😲" },
          { text: "Kids have fun at the pool.", emoji: "🎉" },
        ],
        comprehensionQuestions: [
          { question: "Where do the kids swim?", discussionNote: "In a cool pool — point back to the first line together." },
          { question: "What color is the moon in our story?", discussionNote: "Blue — have a child point to the word 'blue' and the word 'moon'." },
        ],
      },
    },
    {
      type: "wrapup",
      summary:
        "Today we learned oo and ue can both make the long oo sound. We blended, chained, and wrote words like moon, spoon, blue, glue — and read a whole story!",
      summarySimple: "oo and ue can say oo! We made, wrote, and read: moon, spoon, blue, glue!",
      homework: "At home, find something blue and tell a grown-up its color, stretching out the oo sound.",
    },
  ],
};
