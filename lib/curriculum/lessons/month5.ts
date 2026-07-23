import type { Lesson } from "../types";
import { getMonthlyLessonMeta } from "../monthlyScopeAndSequence";
import { AI_OR_NOT_SETS, INSTRUCT_VORA_SCENARIOS } from "../aiLabBank";

function meta(key: string) {
  const m = getMonthlyLessonMeta(key);
  if (!m) throw new Error(`No monthly scope-and-sequence entry for lesson ${key}`);
  return m;
}

export const m5_week1: Lesson = {
  ...meta("m5_week1"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Show a family photo (yours, or a simple drawing on the board) and point to one person: \"This is my mom.\" Ask kids to guess who else might be in the photo before you teach the other words.",
      prompt: "Who is this? 👨‍👩‍👧‍👦",
    },
    {
      type: "vocab",
      title: "Family",
      words: [
        { word: "mom", emoji: "👩" },
        { word: "dad", emoji: "👨" },
        { word: "sister", emoji: "👧" },
        { word: "brother", emoji: "👦" },
        { word: "grandma", emoji: "👵" },
        { word: "grandpa", emoji: "👴" },
        { word: "baby", emoji: "👶", minTrack: "explorers" },
      ],
    },
    {
      type: "concept",
      title: "This Is My Family",
      bigIdeas: ["perception"],
      lines: [
        { text: "This is my mom. This is my dad. This is my family!" },
        {
          text: "I can look at pictures of faces, too — that's called perception.",
          textSimple: "I can look at faces too. That's called perception!",
        },
        {
          text: "But sometimes I mix up two people who look alike, like sisters or twins.",
          textSimple: "Sometimes I mix up people who look alike.",
        },
        { text: "You never mix up your own family, though — not even for a second!", minTrack: "explorers" },
      ],
      teacherNote:
        "Korean family terms encode relative age and the speaker's gender in a way English \"brother/sister\" doesn't — some kids will want to specify more than English allows. Validate that impulse (\"Yes, in Korean we'd say more — in English we just say brother or sister!\") instead of correcting it away. Keep the face-recognition point reassuring, not scary: apps can be wrong, kids never are about their own family.",
    },
    {
      type: "story",
      title: "Vora Tries to Guess Who's Who",
      teacherNote:
        "Read each panel aloud, pausing on panel 3 to ask the class \"Do YOU ever mix up two people who look alike?\" before revealing panel 4 — the story's point is that recognizing family is instant and certain for a kid, even when a picture-matching helper like Vora can still get confused.",
      panels: [
        { text: "Vora loved looking through a big pile of family photos, trying to learn every face.", textSimple: "Vora looked at lots of family photos.", emoji: "📷" },
        { text: "\"This one is a mom, and this one is a grandma,\" said Vora, pointing carefully at each picture.", textSimple: "\"Mom! Grandma!\" said Vora, pointing.", emoji: "👵" },
        { text: "But two photos looked so alike — two sisters with matching smiles — that Vora froze. \"Wait... which one is which?\"", textSimple: "Two photos looked the same! Vora got confused.", emoji: "👧" },
        { text: "A kid in the class just laughed. \"That's easy — that's MY sister! I could never mix her up!\"", textSimple: "A kid said, \"That's my sister! Easy!\"", emoji: "😄" },
        { text: "Vora nodded slowly. \"You're right — looking at pictures is something I can do, but knowing your OWN family... that's something only you can do.\"", textSimple: "Vora said, \"Only YOU really know your family!\"", emoji: "🤖" },
      ],
      comprehensionQuestions: [
        { question: "Why did Vora get confused by the two photos, but the kid in the story didn't?", discussionNote: "Vora only compares how pictures look; the kid actually knows and loves their own sister, so there's no mixing her up — a computer's picture-matching isn't the same as truly knowing someone." },
        { question: "Has a photo of two people who look alike ever confused you, even for a second?", discussionNote: "Open discussion — the point is that even people can be tricked by look-alike photos sometimes, but never about the people closest to them." },
      ],
    },
    {
      type: "movement",
      title: "Family Actions!",
      instructions:
        "Call out each family word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Mom — blow a big kiss", emoji: "👩" },
        { text: "Dad — give a thumbs-up", emoji: "👨" },
        { text: "Sister — link arms and sway side to side", emoji: "👧" },
        { text: "Brother — give a high-five", emoji: "👦" },
        { text: "Grandma — rock gently like in a rocking chair", emoji: "👵" },
        { text: "Grandpa — pat your belly and laugh", emoji: "👴" },
      ],
    },
    {
      type: "activity",
      instructions: "Flip two cards at a time to find a matching family word and picture. If they match, they stay face up!",
      config: {
        engine: "memory_match",
        title: "Family Words",
        pairs: [
          { word: "mom", emoji: "👩" },
          { word: "dad", emoji: "👨" },
          { word: "sister", emoji: "👧" },
          { word: "brother", emoji: "👦" },
          { word: "grandma", emoji: "👵" },
          { word: "grandpa", emoji: "👴" },
          { word: "baby", emoji: "👶", minTrack: "explorers" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[4],
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[4],
    },
    {
      type: "team_relay",
      title: "Family Relay!",
      instructions:
        "Split the class into two (or more) teams. Read each prompt aloud and have the next player from each team call out a family word — award a point for every correct answer, then move to the next prompt.",
      prompts: [
        { text: "Name someone who gives you a big hug at home!", emoji: "🤗" },
        { text: "Name someone who is older than your mom or dad!", emoji: "👵" },
        { text: "Name someone who might read you a bedtime story!", emoji: "📖" },
        { text: "Name someone who might play a game with you!", emoji: "🎲" },
        { text: "Name someone in your family who is a kid, just like you!", emoji: "🧒", minTrack: "explorers" },
      ],
    },
    {
      type: "chant",
      title: "Family Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching family picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Family, family, who do you see?", response: "This is my mom, waving at me!" },
        { call: "Family, family, who's big and strong?", response: "This is my dad, singing our song!" },
        {
          call: "Family, family, who runs and plays?",
          response: "This is my brother, all through the day!",
          minTrack: "explorers",
        },
        {
          call: "Family, family, who do you love?",
          response: "This is my sister, I give her a hug!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Show your own family photo (or draw one) and tell a partner: \"This is my ___.\"",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we learned family words and the sentence \"This is my ___\" — and how even the smartest AI can mix up faces that you'd never confuse — acted out family actions together, practiced spotting real AI in everyday life, helped Vora follow clear instructions, and chanted about our families together.",
      summarySimple: "Today we learned family words, moved our bodies, and sang a family chant with Vora!",
      homework: "Introduce one family member to someone at home using \"This is my ___.\"",
    },
  ],
};

export const m5_week2: Lesson = {
  ...meta("m5_week2"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask a few kids: \"Do you have a brother?\" Then say: \"Today, let's build a sentence about our families, one word at a time!\"",
      prompt: "Let's build a family sentence! 🧩",
    },
    {
      type: "concept",
      title: "Vora Remembers Faces",
      bigIdeas: ["perception"],
      lines: [
        {
          text: "Remember, I can look at pictures of faces too — but I still mix some up!",
          textSimple: "I can look at faces too. But I still make mistakes!",
        },
        { text: "You never mix up your own family, though. Let's practice introducing them in English!" },
      ],
      teacherNote:
        "Quick callback to Week 1's face-recognition point — no new teaching here, just a bridge into today's sentence-building game.",
    },
    {
      type: "story",
      title: "Vora Sorts a Messy Room",
      teacherNote:
        "Read each panel aloud, pointing to each item as Vora considers it. Pause after panel 3 to ask the class where THEY would put a backpack before revealing Vora's answer — the point is that sorting takes a real look at each thing, not a quick guess.",
      panels: [
        { text: "Vora looked at a room with things from home and things from school, all mixed together in one big pile.", textSimple: "Home things and school things were all mixed up!", emoji: "🧺" },
        { text: "\"A mom, a dad — those go with family,\" said Vora, sorting them into one pile.", textSimple: "\"Mom, dad — family pile!\" said Vora.", emoji: "👨‍👩‍👧" },
        { text: "\"A teacher, a desk — those go with school,\" said Vora, sorting them into another pile.", textSimple: "\"Teacher, desk — school pile!\" said Vora.", emoji: "🏫" },
        { text: "Then Vora found a backpack. Family, or school? Vora looked closely: it's carried TO school, but packed with love AT home.", textSimple: "A backpack! Family or school? Vora looked closely.", emoji: "🎒" },
        { text: "\"This one belongs a little to both,\" said Vora. \"Sorting isn't always one quick guess — sometimes you have to really think about it.\"", textSimple: "\"It's a little of both!\" said Vora. \"Sorting takes thinking!\"", emoji: "🤔" },
      ],
      comprehensionQuestions: [
        { question: "Why couldn't Vora sort the backpack into just one pile right away?", discussionNote: "Some things genuinely connect to more than one category — sorting sometimes means thinking carefully instead of guessing instantly." },
        { question: "Can you think of something at home that could belong to more than one group?", discussionNote: "Open discussion — reinforces that careful sorting/categorizing is a real skill, not just a quick reflex." },
      ],
    },
    {
      type: "movement",
      title: "Family & School Actions!",
      instructions:
        "Call out each word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Mom — blow a big kiss", emoji: "👩" },
        { text: "Dad — give a thumbs-up", emoji: "👨" },
        { text: "Sister — link arms and sway side to side", emoji: "👧" },
        { text: "Brother — give a high-five", emoji: "👦" },
        { text: "Teacher — point at an imaginary board", emoji: "🧑‍🏫" },
        { text: "Desk — sit down and pat your desk", emoji: "🗄️" },
      ],
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, left to right. Say each word aloud as a tile is placed, then read the full sentence together. Then play a second game to reinforce it.",
      config: {
        engine: "sentence_builder",
        title: "This is my brother.",
        words: [
          { text: "This is", role: "subject" },
          { text: "my", role: "other" },
          { text: "brother", role: "object" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Sort each word: does it belong to family, or to school?",
      config: {
        engine: "train_the_robot",
        title: "Family Word or School Word?",
        labelA: "Family",
        labelB: "School",
        emojiA: "👪",
        emojiB: "🏫",
        items: [
          { word: "mom", emoji: "👩", bucket: "a" },
          { word: "dad", emoji: "👨", bucket: "a" },
          { word: "sister", emoji: "👧", bucket: "a" },
          { word: "brother", emoji: "👦", bucket: "a" },
          { word: "teacher", emoji: "🧑‍🏫", bucket: "b" },
          { word: "classmate", emoji: "🧑‍🤝‍🧑", bucket: "b", minTrack: "explorers" },
          { word: "desk", emoji: "🗄️", bucket: "b" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[4],
    },
    {
      type: "stand_sit",
      title: "Family or School: True or False!",
      instructions:
        "Read each statement aloud. Kids STAND UP if they think it's true, and crouch down low if they think it's false. Reveal the answer, then share the short explanation before moving on.",
      statements: [
        { text: "A teacher is someone in your family.", isTrue: false, explanation: "No — a teacher works at school, not at home!", emoji: "🧑‍🏫" },
        { text: "Your mom and dad are part of your family.", isTrue: true, explanation: "Yes! Moms and dads are family.", emoji: "👨‍👩‍👧" },
        { text: "A desk belongs at school, not at home with your family.", isTrue: true, explanation: "Yes — a desk is a school word!", emoji: "🗄️" },
        { text: "You can only have one brother or one sister, never more.", isTrue: false, explanation: "No — families can have lots of brothers and sisters, or none at all!", emoji: "👧", minTrack: "explorers" },
      ],
    },
    {
      type: "chant",
      title: "This Is My Family Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching family picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Who is this, playing near?", response: "This is my brother, my brother is here!" },
        { call: "Who is this, on the go?", response: "This is my mom, I love her so!" },
        {
          call: "Who is this, big and strong?",
          response: "This is my dad, singing along!",
          minTrack: "explorers",
        },
        {
          call: "Who is this, right by your side?",
          response: "This is my sister, right by my side!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Point to a family member in a photo or drawing and say: \"This is my ___.\"",
      method: "cold_call",
    },
    {
      type: "wrapup",
      summary: "Today we built the sentence \"This is my brother\" tile by tile, then practiced it with a second game — sorting family and school words — acted out family and school actions together, helped Vora follow clear step-by-step instructions, and chanted about our families together.",
      summarySimple: "Today we built a family sentence, moved our bodies, and sang a chant with Vora!",
    },
  ],
};

export const m5_week3: Lesson = {
  ...meta("m5_week3"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Call out a word — \"mom\" or \"desk\" — and have kids shout \"Family!\" or \"School!\" as fast as they can before today's sorting game.",
      prompt: "Family or school? Shout it out! 👪🏫",
    },
    {
      type: "concept",
      title: "Sorting Like Vora",
      bigIdeas: ["perception"],
      lines: [
        {
          text: "Sorting things into groups is exactly what I do with pictures — that's perception!",
          textSimple: "I sort pictures into groups too. That's perception!",
        },
        { text: "Let's see if you can sort these words even faster than me." },
      ],
      teacherNote:
        "Brief callback to Week 1's perception idea before the sorting game — no new content, just framing today's game as the same skill.",
    },
    {
      type: "story",
      title: "Vora Helps Sort the Photo Album",
      teacherNote:
        "Read each panel aloud. Pause after panel 3 to ask the class what THEY would look for to tell the cousins apart before revealing panel 4 — the point is that sorting look-alikes takes slowing down and looking for small details.",
      panels: [
        { text: "A friend asked Vora to help sort a big photo album into family and school pictures.", textSimple: "Vora helped sort a photo album.", emoji: "📔" },
        { text: "Most photos were easy — a mom baking, a teacher at a whiteboard. Quick sorts, one after another!", textSimple: "Most photos were easy to sort!", emoji: "✅" },
        { text: "But two cousins in matching shirts looked SO alike, Vora couldn't tell them apart at a glance.", textSimple: "Two cousins looked exactly alike!", emoji: "👦" },
        { text: "Vora slowed down and looked for small clues — one cousin's cap, one cousin's missing tooth — and sorted them correctly at last.", textSimple: "Vora looked for small clues and got it right!", emoji: "🔍" },
        { text: "\"Sorting fast is nice,\" said Vora, \"but sorting carefully is what really matters.\"", textSimple: "\"Careful sorting matters most!\" said Vora.", emoji: "🌟" },
      ],
      comprehensionQuestions: [
        { question: "What did Vora do when the two cousins looked too alike to sort quickly?", discussionNote: "It slowed down and looked for small details (like a cap or a missing tooth) instead of guessing — careful looking beats a fast guess." },
        { question: "Is it better to sort things quickly, or carefully? Why?", discussionNote: "Open discussion — the story's point is that careful sorting is more important than fast sorting, especially for tricky cases." },
      ],
    },
    {
      type: "movement",
      title: "Family or School Actions!",
      instructions:
        "Call out each word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Mom — blow a big kiss", emoji: "👩" },
        { text: "Dad — give a thumbs-up", emoji: "👨" },
        { text: "Sister — link arms and sway side to side", emoji: "👧" },
        { text: "Brother — give a high-five", emoji: "👦" },
        { text: "Teacher — point at an imaginary board", emoji: "🧑‍🏫" },
        { text: "Desk — sit down and pat your desk", emoji: "🗄️" },
      ],
    },
    {
      type: "activity",
      instructions: "Sort each word: does it belong to family, or to school? Then play a second game to reinforce it.",
      config: {
        engine: "train_the_robot",
        title: "Family Word or School Word?",
        labelA: "Family",
        labelB: "School",
        emojiA: "👪",
        emojiB: "🏫",
        items: [
          { word: "mom", emoji: "👩", bucket: "a" },
          { word: "dad", emoji: "👨", bucket: "a" },
          { word: "sister", emoji: "👧", bucket: "a" },
          { word: "brother", emoji: "👦", bucket: "a" },
          { word: "teacher", emoji: "🧑‍🏫", bucket: "b" },
          { word: "classmate", emoji: "🧑‍🤝‍🧑", bucket: "b", minTrack: "explorers" },
          { word: "desk", emoji: "🗄️", bucket: "b" },
        ],
      },
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, left to right. Say each word aloud as a tile is placed, then read the full sentence together.",
      config: {
        engine: "sentence_builder",
        title: "This is my brother.",
        words: [
          { text: "This is", role: "subject" },
          { text: "my", role: "other" },
          { text: "brother", role: "object" },
        ],
      },
    },
    {
      ...AI_OR_NOT_SETS[5],
    },
    {
      type: "class_vote",
      title: "What's Your Favorite Family Time?",
      instructions:
        "Ask the question aloud. Kids vote by raising their hand for their favorite option, or simply discuss as a class — there's no single right answer.",
      question: "What's your favorite thing to do with your family?",
      options: [
        { text: "Eating a meal together", emoji: "🍽️" },
        { text: "Playing a game", emoji: "🎲" },
        { text: "Watching a movie", emoji: "🎬" },
        { text: "Going outside together", emoji: "🌳" },
      ],
    },
    {
      type: "chant",
      title: "This Is My Family Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching family picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Who is this, running fast?", response: "This is my brother, having a blast!" },
        { call: "Who is this, cooking today?", response: "This is my mom, hip-hip-hooray!" },
        {
          call: "Who is this, tall as a tree?",
          response: "This is my dad, smiling at me!",
          minTrack: "explorers",
        },
        {
          call: "Who is this, sharing a toy?",
          response: "This is my sister, oh what joy!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Ask a partner: \"Is 'teacher' a family word or a school word?\"",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today we acted out family and school actions, played three activities — sorting family words from school words, building the sentence \"This is my brother\" tile by tile, and spotting real AI in everyday life — and chanted about our families together.",
      summarySimple: "Today we sorted family and school words, moved our bodies, and sang a chant with Vora!",
    },
  ],
};

export const m5_week4: Lesson = {
  ...meta("m5_week4"),
  segments: [
    {
      type: "warmup",
      teacherScript: "Ask a few kids: \"Do you have a sister? Do you have a brother?\" Quick yes/no answers to warm up before today's sentence.",
      prompt: "Do you have a sister or a brother?",
    },
    {
      type: "concept",
      title: "This Is My Sister!",
      bigIdeas: [],
      lines: [
        { text: "This... is my sister!" },
        {
          text: "You can say it about anyone in your family — a brother, a grandma, even a pet!",
          textSimple: "You can say it about mom, dad, or a pet too!",
        },
        { text: "Ready? Let's build the sentence together, one word at a time." },
      ],
      teacherNote:
        "Kids may want to name a cousin, grandparent, or even a pet — welcome any real family member, the sentence frame is what matters, not the exact word \"sister.\" Encourage a real, true answer rather than the first option on the screen.",
    },
    {
      type: "story",
      title: "Vora Meets the Whole Family",
      teacherNote:
        "This is a capstone story for the month — read it as a celebration of how much practice has paid off. Pause after panel 4 to ask the class if THEY noticed Vora getting better and better across the panels before revealing the final moral.",
      panels: [
        { text: "After a whole month of looking at family photos, Vora got to meet a brand new family for the very first time.", textSimple: "Vora met a brand new family!", emoji: "👋" },
        { text: "\"This is the mom, this is the dad,\" said Vora, pointing correctly right away.", textSimple: "\"Mom! Dad!\" Vora got it right away.", emoji: "👩" },
        { text: "\"This is the sister, this is the grandma, and... is that a puppy sitting with them too?\" asked Vora.", textSimple: "\"Sister! Grandma! And a puppy too?\" asked Vora.", emoji: "🐶" },
        { text: "\"Yes!\" said the family. \"Our dog is part of our family too!\" Vora smiled and added the puppy to the family photo.", textSimple: "\"Yes! Our dog is family too!\" they said.", emoji: "😊" },
        { text: "Vora got every single face right this time — not by magic, but because it had practiced looking closely, over and over, all month long.", textSimple: "Vora got it all right! Lots of practice helped.", emoji: "🎉" },
      ],
      comprehensionQuestions: [
        { question: "Why was Vora able to get every family member right this time?", discussionNote: "A whole month of practice looking closely at faces (perception) made Vora faster and more accurate — not magic, just lots of practice." },
        { question: "Do you think a pet can be part of a family? Why or why not?", discussionNote: "Open discussion — families come in many forms, and pets often count as family too." },
      ],
    },
    {
      type: "movement",
      title: "Family Actions!",
      instructions:
        "Call out each family word and do the action together — go slow the first time through, then speed up for a fun challenge round.",
      moves: [
        { text: "Mom — blow a big kiss", emoji: "👩" },
        { text: "Dad — give a thumbs-up", emoji: "👨" },
        { text: "Sister — link arms and sway side to side", emoji: "👧" },
        { text: "Brother — give a high-five", emoji: "👦" },
        { text: "Grandma — rock gently like in a rocking chair", emoji: "👵" },
        { text: "Grandpa — pat your belly and laugh", emoji: "👴" },
      ],
    },
    {
      type: "activity",
      instructions: "Build the sentence one tile at a time, left to right. Then invite several kids to swap in their own family member and say it out loud.",
      config: {
        engine: "sentence_builder",
        title: "This is my sister.",
        words: [
          { text: "This is", role: "subject" },
          { text: "my", role: "other" },
          { text: "sister", role: "object" },
        ],
      },
    },
    {
      ...INSTRUCT_VORA_SCENARIOS[5],
    },
    {
      ...AI_OR_NOT_SETS[5],
    },
    {
      type: "stand_sit",
      title: "Family True or False!",
      instructions:
        "Read each statement aloud. Kids STAND UP if they think it's true, and crouch down low if they think it's false. Reveal the answer, then share the short explanation before moving on.",
      statements: [
        { text: "A pet can be part of your family.", isTrue: true, explanation: "Yes! Lots of families love a pet like their own.", emoji: "🐶" },
        { text: "Everyone's family looks exactly the same.", isTrue: false, explanation: "No — families come in all shapes and sizes, and that's wonderful!", emoji: "👪" },
        { text: "You can say \"This is my ___\" about a grandma or a grandpa.", isTrue: true, explanation: "Yes! The sentence works for any family member.", emoji: "👵" },
        { text: "A robot can be part of your family the same way a person can.", isTrue: false, explanation: "Not quite — Vora is a helpful friend, but your family are the people (and pets!) who love and take care of you.", emoji: "🤖", minTrack: "explorers" },
      ],
    },
    {
      type: "chant",
      title: "This Is My Family Chant",
      instructions:
        "Say each call line and hold up (or point to) the matching family picture. The whole class echoes the response line back to you.",
      lines: [
        { call: "Who is this, standing near?", response: "This is my sister, she is here!" },
        { call: "Who is this, running fast?", response: "This is my brother, having a blast!" },
        {
          call: "Who is this, baking a treat?",
          response: "This is my grandma, isn't she sweet!",
          minTrack: "explorers",
        },
        {
          call: "Who is this? Point and say!",
          response: "This is my family — hip, hip, hooray!",
          minTrack: "explorers",
        },
      ],
    },
    {
      type: "check",
      prompt: "Every kid says \"This is my ___\" out loud, naming one real family member.",
      method: "whole_class_thumbs",
    },
    {
      type: "wrapup",
      summary: "Today every child proudly introduced one real family member in English — the whole point of the sentence — acted out family actions together, helped Vora follow clear instructions, spotted real AI in everyday life, and chanted about family together.",
      summarySimple: "Today everyone said \"This is my family!\" and we moved and sang together!",
      homework: "Say \"This is my ___\" about a family member to someone at home tonight.",
    },
  ],
};
