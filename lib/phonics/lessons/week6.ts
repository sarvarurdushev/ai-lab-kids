import type { Lesson } from "@/lib/curriculum/types";

/**
 * Letters and Sounds Phase 3, Set 6. Cumulative letters through this week:
 * s,a,t,p,i,n,m,d,g,o,c,k,ck,e,u,r,h,b,f,l,j,v,w,x.
 *
 * Same 17-block, 50-minute shape as week1.ts — see that file's header for
 * the block-by-block rationale. Every word in the blending, chain, box,
 * dictation and text blocks is spellable with the sounds above only; the
 * fixed heart words (the/a/is/was/said/you) are the single deliberate
 * exception, and only inside the decodable text.
 */
export const ph_week6: Lesson = {
  key: "ph_week6",
  unitKey: "phonics_foundations",
  title: "Sound It Out: j, v, w, x",
  bigIdeas: [],
  englishFocus: "Hearing, blending, and writing j, v, w, x into real words.",
  koreanL1Note:
    "Korean has no /v/ — expect it to slip toward /b/. Keep modeling the buzzing, voiced difference from 'f' (no buzz) taught two weeks ago; a Minimal Pairs v/b round is a natural next addition once there's time to build one. Kids will need paper and a pencil from the letter-formation block onward.",
  objectives: [
    "I can say the sound each letter makes: j, v, w, x.",
    "I can blend sounds together to read new words.",
    "I can write the letters j, v, w, and x when I hear their sounds.",
  ],
  standardsNote: "Systematic synthetic phonics (National Reading Panel, 2000) — Letters and Sounds Phase 3, Set 6.",
  segments: [
    {
      type: "warmup",
      teacherScript: "Quick review: show last week's h, b, f, l keyword pictures and have the class say each sound.",
      prompt: "Can you still remember h, b, f, l?",
      promptSimple: "Do you remember h, b, f, l?",
    },
    {
      type: "activity",
      instructions: "Look at each card and say its sound together — fast!",
      config: {
        engine: "sound_drill",
        title: "Sound Drill",
        teacherNote:
          "Ten cards: all five vowels anchor the drill again, 'f' comes along for one more week since 'v' — its voiced twin — is brand new today, then today's four new sounds close it out.",
        cards: [
          { letters: "a", keyword: "Apple", emoji: "🍎" },
          { letters: "e", keyword: "Elephant", emoji: "🐘" },
          { letters: "i", keyword: "Igloo", emoji: "🧊" },
          { letters: "o", keyword: "Octopus", emoji: "🐙" },
          { letters: "u", keyword: "Umbrella", emoji: "☂️" },
          { letters: "f", keyword: "Fish", emoji: "🐟" },
          { letters: "j", keyword: "Jelly", emoji: "🍮" },
          { letters: "v", keyword: "Volcano", emoji: "🌋" },
          { letters: "w", keyword: "Water", emoji: "💧" },
          { letters: "x", keyword: "Fox", emoji: "🦊" },
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
          "Purely oral — no letters at all in this block. Say the start word, give the instruction, let the whole class answer together, THEN reveal. Round 1 puts 'v' right next to 'f' so the buzz-versus-no-buzz difference is fresh in their ears.",
        rounds: [
          { startWord: "van", startEmoji: "🚐", instruction: "Change the /v/ to /f/.", answerWord: "fan", answerEmoji: "🌀" },
          { startWord: "wig", startEmoji: "💇", instruction: "Change the /w/ to /b/.", answerWord: "big", answerEmoji: "📏" },
          { startWord: "jet", startEmoji: "✈️", instruction: "Change the /j/ to /g/.", answerWord: "get", answerEmoji: "🎁" },
          { startWord: "fox", startEmoji: "🦊", instruction: "Change the /f/ to /b/.", answerWord: "box", answerEmoji: "📦", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "phonics_sound",
      letters: "j",
      keyword: "Jelly",
      keywordEmoji: "🍮",
      actionCue: "Wobble your whole body like jelly and say j-j-j.",
      teacherNote: "A stop sound with voice — different from 'ch,' which comes in a couple of weeks.",
    },
    {
      type: "phonics_sound",
      letters: "v",
      keyword: "Volcano",
      keywordEmoji: "🌋",
      actionCue: "Throw your arms up like an erupting volcano and buzz vvvv.",
      teacherNote:
        "A continuant with a buzz — Korean has no /v/, so this often slips toward /b/. Put your fingers on your throat to feel the buzz and have kids copy it.",
    },
    {
      type: "phonics_sound",
      letters: "w",
      keyword: "Water",
      keywordEmoji: "💧",
      actionCue: "Wave your hand like ripples on water and say w-w-w.",
      teacherNote: "Round the lips like blowing out a candle.",
    },
    {
      type: "phonics_sound",
      letters: "x",
      keyword: "Fox",
      keywordEmoji: "🦊",
      actionCue: "Mime fox ears with your hands and say a hissy x-x-x.",
      teacherNote: "Almost always heard at the end of a word (fox, box, six) rather than the start — that's why every word below ends in it.",
    },
    {
      type: "letter_formation",
      letters: "v",
      strokes: ["Start at the top.", "Slant down to a point at the bottom.", "Slant back up to the top on the other side."],
      skyWriteCue: "Sky-write a big v: down to a point, then back up! Say v-v-v and feel the buzz in your throat.",
      teacherNote:
        "Two straight slanting lines meeting in a point — no curves at all, a nice change of pace after all the round letters. This same shape becomes 'w' next, just doubled.",
    },
    {
      type: "letter_formation",
      letters: "w",
      strokes: [
        "Make a v shape: down to a point, up to a point.",
        "Without lifting, make a second v right next to it.",
        "Finish level with where you started.",
      ],
      skyWriteCue: "Sky-write a big w: down-up-down-up, like two v's side by side! Say w-w-w.",
      teacherNote:
        "Literally two v's in a row — point that out explicitly, since kids who just formed 'v' a few minutes ago will pick this up fast.",
    },
    {
      type: "activity",
      instructions: "Let's put the sounds together to read real words!",
      config: {
        engine: "blending",
        title: "Sound It Out!",
        teacherNote: "Sound out each letter, then blend together. Notice every 'x' word ends with it.",
        words: [
          { parts: ["j", "e", "t"], word: "jet", emoji: "✈️" },
          { parts: ["v", "a", "n"], word: "van", emoji: "🚐" },
          { parts: ["w", "i", "g"], word: "wig", emoji: "💇" },
          { parts: ["f", "o", "x"], word: "fox", emoji: "🦊" },
          { parts: ["b", "o", "x"], word: "box", emoji: "📦", minTrack: "explorers" },
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
          "Read the new word aloud together BEFORE tapping Check. Ask 'which sound changed?' every link — the very last link lands right back on this week's blending word 'wig,' which is a nice moment to point out.",
        start: { parts: ["v", "a", "n"], word: "van", emoji: "🚐" },
        links: [
          { changeIndex: 0, newPart: "f", word: "fan", emoji: "🌀" },
          { changeIndex: 1, newPart: "i", word: "fin", emoji: "🐠" },
          { changeIndex: 0, newPart: "w", word: "win", emoji: "🏆" },
          { changeIndex: 2, newPart: "g", word: "wig", emoji: "💇", minTrack: "explorers" },
        ],
      },
    },
    {
      type: "movement",
      title: "Sound Actions!",
      instructions: "Call out a sound; everyone does its action and says the sound together.",
      moves: [
        { text: "j — wobble like jelly, j-j-j", emoji: "🍮" },
        { text: "v — erupt like a volcano, vvvv", emoji: "🌋" },
        { text: "w — wave like water, w-w-w", emoji: "💧" },
        { text: "x — fox ears, x-x-x", emoji: "🦊" },
      ],
    },
    {
      type: "activity",
      instructions: "How many sounds can you hear? Tap a box for each one.",
      config: {
        engine: "sound_box",
        title: "Sound Boxes",
        teacherNote:
          "Stretch the word slowly and have the class push one finger forward per sound before anyone taps. 'x' is still just ONE box even though it stands for two sounds blended together — same idea as 'ck.'",
        words: [
          { word: "jet", emoji: "✈️", parts: ["j", "e", "t"] },
          { word: "van", emoji: "🚐", parts: ["v", "a", "n"] },
          { word: "fox", emoji: "🦊", parts: ["f", "o", "x"] },
          { word: "wigs", emoji: "💇", parts: ["w", "i", "g", "s"], minTrack: "explorers" },
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
          "Sound out the regular letter(s) first, THEN reveal the heart letters. 'What' starts with this week's brand-new 'w' — but the 'wh' spelling together is the surprise, not the sound itself.",
        words: [
          { word: "what", heartIndexes: [0, 1], sentence: "What is it?" },
          { word: "have", heartIndexes: [3], sentence: "I have a van." },
          { word: "were", heartIndexes: [1, 2, 3], sentence: "You were mad.", minTrack: "explorers" },
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
          { text: "jet" },
          { text: "van" },
          { text: "wig" },
          { text: "fox" },
          { text: "wigs", minTrack: "explorers" },
        ],
        sentences: [{ text: "A fox got a wig." }],
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
          { text: "A fox got a van.", emoji: "🦊" },
          { text: "The fox said, 'The van is red!'", emoji: "🚐" },
          { text: "Fox, get in the van!", emoji: "🚗" },
        ],
        comprehensionQuestions: [
          { question: "What color is the van?", discussionNote: "Red — point back to line two together." },
          { question: "What sound does 'fox' start with?", discussionNote: "/f/ — have a child find the letter f on screen." },
        ],
      },
    },
    {
      type: "wrapup",
      summary:
        "Today we learned j, v, w, x, blended and chained them into words like van, fan, and wig, wrote what we heard, and read a whole story about a fox!",
      summarySimple: "We learned j, v, w, x! We wrote words and read a story!",
      homework: "At home, find one thing that starts with j, v, or w, or ends with x, and tell a grown-up.",
    },
  ],
};
