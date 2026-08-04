// Written without `as const` on purpose — this lets ko.ts's string/array
// values differ from en.ts's while TypeScript still enforces identical
// *shape* (missing/extra keys become compile errors). See getDictionary.ts.
export const en = {
  common: {
    programGuide: "Program Guide",
    contact: "Contact",
    teacherLogin: "Teacher log in",
    getStarted: "Get started",
    privacyPolicy: "Privacy Policy",
    terms: "Terms",
    signOut: "Sign out",
  },

  nav: {
    menu: "Menu",
    closeMenu: "Close menu",
    teacherConsole: "Teacher console →",
  },

  footer: {
    programHeading: "Program",
    accountHeading: "Account",
    legalHeading: "Legal",
    tagline:
      "AI Lab for Kids — teacher-led AI literacy & English, for ages 4-8.",
  },

  scrollCue: {
    scroll: "Scroll",
  },

  hero: {
    eyebrow: "AI literacy + English · Ages 4-8",
    titleBefore: "Kids don't just play with ",
    titleUnderlined: "AI",
    titleAfter: " — they learn how it thinks.",
    subtitle:
      "A full year of teacher-led lessons where English and real AI concepts are taught side by side, one screen, one class, with Vora leading the way.",
    terminalLine: "72 lessons · 0 live AI calls",
    annotation: "one screen, one teacher",
    bubble: "Hi! I'm Vora.",
    perceptionLabel: "Perception",
    reasoningLabel: "Reasoning",
    learningLabel: "Learning",
  },

  features: {
    eyebrow: "Why it's different",
    title: "Not an English app with an AI sticker on it",
    items: {
      realAiIdeas: {
        title: "Real AI ideas, not just an AI label",
        body: "Every unit teaches one genuine AI4K12 big idea — perception, patterns, learning from examples — through play a 4-8 year-old can actually do.",
      },
      oneScreen: {
        title: "One screen, one teacher",
        body: "Built for a projector and a teacher running the room — not a tablet per kid. Every lesson is a full, scripted plan you can pick up and teach.",
      },
      wholeYear: {
        title: "A whole year, mapped out",
        body: "72 fully authored lessons across 12 themed units, standards-aligned from the first class to the last, with a printable guide for every one.",
      },
      genuinelyFun: {
        title: "15+ minutes, genuinely fun",
        body: "Movement breaks, chants, and games keep the room moving — this isn't a worksheet with a robot sticker on it.",
      },
    },
  },

  gallery: {
    eyebrow: "A whole year with Vora",
    title: "12 themed units, one big idea each",
    cta: "See the full Program Guide",
  },

  underTheHood: {
    eyebrow: "Peek under the hood",
    title: "Every lesson is scripted. Nothing is a live model.",
    annotation: "yes, really 72 lessons",
  },

  finalCta: {
    title: "Ready to bring Vora into your classroom?",
    body: "Create your teacher account — a school admin approves it, then it's straight into the console.",
    cta: "Create your account",
  },

  homeStats: {
    lessons: "lessons authored",
    activities: "activities",
    engineTypes: "engine types",
    aiLiteracyActivities: "AI-literacy activities",
  },

  terminal: {
    lessonsAuthored: "{n} lessons authored",
    activitiesAcrossEngines: "{n} activities across {m} engine types",
    aiLiteracyActivities: "{n} real AI-literacy activities",
    noLiveAiCalls: "0 live AI calls — fully scripted, always safe",
  },

  formField: {
    email: "Email",
    password: "Password",
    name: "Name",
  },

  auth: {
    backToHome: "← Back to home",
    brandHeading: "Teach the machine. Teach the class.",
    login: {
      title: "Teacher sign in",
      subtitle: "AI Lab for Kids — Teacher Console",
      submit: "Sign in",
      submitting: "Signing in...",
      footerPrompt: "New teacher? ",
      footerLink: "Create an account",
    },
    signup: {
      title: "Create your account",
      subtitle:
        "AI Lab for Kids — a school admin approves new teacher accounts before you can start a class.",
      submit: "Create account",
      submitting: "Creating account...",
      footerPrompt: "Already have an account? ",
      footerLink: "Sign in",
    },
    alreadySignedIn: {
      title: "You're already signed in",
      bodyBefore: "Signed in as ",
      bodyMiddle: " (",
      bodyAfter:
        "). Sign out first if you want to log in or sign up with a different account.",
      goToDashboard: "Go to dashboard",
    },
    pendingApproval: {
      title: "Almost there, {name}!",
      body: "Your account is created but waiting for a school admin to approve you as a teacher. Once approved, this page will take you straight to your classes.",
    },
  },

  legal: {
    updated: "Last updated {year} — plain-language summary below.",
  },

  privacy: {
    title: "Privacy Policy",
    toc: {
      noChildData: "No data from children",
      whatWeCollect: "What we collect",
      noLiveAi: "No live AI",
      cookies: "Cookies",
      storage: "Where data is stored",
      questions: "Questions",
    },
    noChildData: {
      title: "We never collect data from children",
      body: "AI Lab for Kids has no student accounts, no student logins, and no way for a child to type or upload anything. One teacher runs the class from their own device, projected to the room — kids never touch a keyboard. We do not collect names, ages, photos, or any other information about the children in a class.",
    },
    whatWeCollect: {
      title: "What we do collect",
      items: [
        "Teacher/admin account info: name, email address, and a securely hashed password.",
        "Organization, school, and class metadata (names, grade labels, age track).",
        "Lesson progress: which step a class last reached in a lesson, and whether it's complete — not tied to any individual student.",
        "Photos or audio a school admin chooses to upload to customize curriculum content (e.g., a class photo next to a vocabulary word). These are uploaded voluntarily by an adult, never by a child.",
      ],
    },
    noLiveAi: {
      title: "No live AI, nothing sent to a third-party model",
      body: 'Every lesson is pre-written, scripted content — there is no chatbot, no live AI model, and nothing a teacher or child says is ever sent anywhere for AI processing. The "AI" in the curriculum is taught as a concept, not run as a live service.',
    },
    cookies: {
      title: "Cookies",
      body: "We use a single, secure, HTTP-only session cookie to keep a teacher signed in. We don't use advertising cookies, and there is no third-party analytics or tracking script on this site.",
    },
    storage: {
      title: "Where data is stored",
      body: "Account and progress data live in a Postgres database operated for this deployment. Uploaded photos and audio are stored as files on the application server. Deleting an organization or a teacher account removes the associated data.",
    },
    questions: {
      title: "Questions",
      before: "Reach out any time at ",
      after: ".",
    },
  },

  terms: {
    title: "Terms of Service",
    toc: {
      whoFor: "Who this is for",
      accounts: "Accounts and access",
      uploads: "Uploaded content",
      noPromises: "What we don't promise",
      changes: "Changes",
      questions: "Questions",
    },
    whoFor: {
      title: "Who this is for",
      body: "AI Lab for Kids is built for teachers and school administrators to run classroom lessons. Accounts are for adults only — there is no child-facing login of any kind.",
    },
    accounts: {
      title: "Accounts and access",
      body: "A new teacher account starts in a pending state until a school admin approves it. School admins are responsible for who they approve and for what those teachers do with class content.",
    },
    uploads: {
      title: "Uploaded content",
      body: "When a school admin uploads a photo or audio recording to customize a lesson, they confirm they have the right to use it (e.g., a photo of their own class, with any needed parent/guardian consent handled by the school under its own policies). We may remove content that's reported as inappropriate or infringing.",
    },
    noPromises: {
      title: "What we don't promise",
      body: "The service is provided as-is. We do our best to keep lessons accurate and the app running smoothly, but we don't guarantee uninterrupted availability.",
    },
    changes: {
      title: "Changes",
      body: "We may update these terms as the product evolves. Continued use after a change means you accept the update.",
    },
    questions: {
      title: "Questions",
      before: "Reach out at ",
      after: ".",
    },
  },

  contact: {
    eyebrow: "Get in touch",
    title: "Say hello.",
    body: "Questions about bringing AI Lab for Kids into your school, a bug to report, or anything else — reach out and a real person will get back to you.",
    annotation: "a real person, usually within a day",
    alreadyTeacher:
      "Already a teacher on the platform? Your school admin can add or remove teacher access from the Admin panel inside the console.",
  },

  curriculumPage: {
    eyebrow: "Program Guide",
    subtitle:
      "English through AI literacy, for Korean elementary classrooms, ages 4-8 — teacher-led, one screen, standards-mapped from the first lesson to the last.",
    stats: {
      lessons: "fully-authored lessons",
      activitiesEngines: "activities · {n} engine types",
      aiLabActivities: "AI Lab activities this year",
      bigIdeasCovered: "AI4K12 Big Ideas covered",
    },
    teacherConsole: "Teacher console →",
    printLabel: "🖨️ Print / Save as PDF",
    printFooter:
      "Press ⌘/Ctrl + P, or use the print button above, to save this guide as a PDF.",
    programDesign: {
      eyebrow: "Program design",
      title: "How the program is built",
      foundations: {
        label: "1. Foundations",
        body: '8 weeks · 24 lessons. "Vora\'s Classroom" — greetings, classroom basics, and the first AI ideas, at CEFR pre-A1/A1.',
      },
      yearCurriculum: {
        label: "2. Year curriculum",
        body: "4 terms · 12 themed units · 48 lessons. One AI4K12 big idea per month, paired with a seasonal English theme.",
      },
      capstone: {
        label: "3. Capstone",
        body: "Month 12 reviews every game and every AI idea from the whole year, alongside the year's final listening checkpoint.",
      },
      anatomyLabel: "Every lesson follows the same anatomy",
      weekJobLabel: "Each month, every week has a different job",
      weekJobNote:
        "Week 4 doubles as a quarterly listening checkpoint on Months 3, 6, 9, and 12, reviewing a pronunciation contrast this age group commonly finds tricky.",
      tracksLabel: "Two age tracks, one curriculum",
    },
    yearAtGlance: {
      eyebrow: "The year",
      title: "Year at a glance",
      unit: "Unit",
      theme: "Theme",
      bigIdea: "AI Big Idea",
      englishFocus: "English focus",
      checkpoint: "Checkpoint",
      checkpointMark: "✓ Listening checkpoint",
    },
    unitDetail: {
      eyebrow: "The core",
      title: "Unit-by-unit detail",
      intro:
        "Every lesson below is real, authored content — objectives and standards come straight from the curriculum source, not marketing copy.",
      termLabel: "Term",
      unitsLabel: "Units",
      pacingLink: "Printable pacing guide for this unit →",
    },
    foundationsMap: {
      eyebrow: "Start here first",
      title: "Foundations — Vora's Classroom",
      introBefore:
        "An 8-week, 24-lesson pilot unit most classes complete before starting the year curriculum. Full map: ",
      week: "Week",
      day: "Day",
      lesson: "Lesson",
      englishFocus: "English focus",
      standards: "Standards",
    },
    standardsAlignment: {
      eyebrow: "Trust, with facts",
      title: "Standards alignment",
      mappingLabel: "How each activity maps to a standard",
      lessonsCount: "{n} lessons",
    },
    safety: {
      eyebrow: "Trust",
      title: "Safety & approach",
      teacherLed: {
        heading: "Teacher-led, one screen — by design",
        body: "One teacher runs the lesson from their own laptop connected to a projector or smartboard, pacing the class verbally — not a room of kids each on their own device. This matches how Korean hagwons and public classrooms actually run.",
      },
      noChatbot: {
        heading: "No live AI chatbot — by design",
        coppa:
          "A live chat surface for children is a data-collection product requiring verifiable guardian consent and content moderation — a different compliance surface entirely from an app that stores only lesson progress.",
        pedagogical:
          'At this age, "how AI understands language" is better taught as a concept than as a live conversation a 4-8 year-old has to parse and produce English in.',
        simulable:
          '"AI learns from examples and can be wrong" and "AI follows exact instructions in order" are fully demonstrable with scripted, deterministic content — guaranteed age-appropriate every time, unlike live model output.',
      },
      notBuilding: {
        heading: "What this program deliberately does not build",
        usCurricula:
          "US state-specific curricula (Texas, California, etc.) — not relevant to a Korean classroom. The real equivalent, Korean-market fit, is the L1-targeting and theme-sequence work above.",
        chatbot:
          "A live AI chatbot, writing coach, or art generator — directly contradicts the no-live-AI safety stance above. We don't hide this decision; we lead with it.",
        specialNeeds:
          "Special-needs curricula (ADHD, autism, dyslexia, gifted) — requires clinical expertise this team doesn't have. Claiming it would be a false capability aimed at vulnerable families.",
        marketing:
          "Comparison pages, blog, marketing guides — content-marketing surface area, not curriculum. This page is the whole pitch.",
      },
      everyClaim:
        "Every claim on this page is generated from the same curriculum data the app runs on — nothing here is written separately from the product.",
    },
  },
};

export type Dictionary = typeof en;
