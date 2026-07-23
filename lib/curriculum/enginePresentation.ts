import type { ActivityEngine } from "./types";
import { AUTHORED_LESSONS, getLesson } from "./lessons/index";
import { RobotHeadIcon, GamepadIcon, PatternGridIcon, BookIcon, SpeakerIcon } from "@/components/icons";

/**
 * Visual identity for each activity engine, used everywhere a lesson list
 * needs to show *what kind of activities* a week contains without the
 * teacher clicking in — the lesson browser (LessonRow) and the
 * Presentation Player's segment strip. Mirrors the pattern in
 * bigIdeaPresentation.ts: every class name below is a literal Tailwind
 * utility (never string-templated) so Tailwind's compiler picks it up.
 *
 * `discipline` is the deliberately conservative split behind "this teaches
 * real AI, not just English": only `ai_or_not` and `instruct_vora` are
 * genuine AI-practice activities (a kid classifying/instructing, not just
 * playing a game with an AI-flavored label) — everything else, including
 * `train_the_robot` and `pattern_predictor` (which do demonstrate AI big
 * ideas), is labeled `english` here so the "AI Lab" claim never overstates
 * itself. See docs/AI_CURRICULUM.md "Standards alignment".
 */
export type ActivityDiscipline = "english" | "ai_literacy";

export interface EnginePresentation {
  label: string;
  discipline: ActivityDiscipline;
  icon: (props: { size?: number; className?: string }) => React.JSX.Element;
  /** One short line for tooltips: the AI/English skill this engine drills. */
  skillLine: string;
  chipClass: string;
}

const AI_LAB_CHIP = "bg-indigo text-white";
const ENGLISH_CHIP = "bg-cream text-ink/60 border border-ink/10";

export const ENGINE_PRESENTATION: Record<ActivityEngine, EnginePresentation> = {
  ai_or_not: {
    label: "AI Lab · Is It AI?",
    discipline: "ai_literacy",
    icon: RobotHeadIcon,
    skillLine: "Real-world AI recognition — kids classify everyday things as AI or not, with a reason.",
    chipClass: AI_LAB_CHIP,
  },
  instruct_vora: {
    label: "AI Lab · Clear Instructions",
    discipline: "ai_literacy",
    icon: RobotHeadIcon,
    skillLine: "Precise-instruction practice — kids see a vague instruction fail, then build one that works.",
    chipClass: AI_LAB_CHIP,
  },
  train_the_robot: {
    label: "Sorting Game",
    discipline: "english",
    icon: GamepadIcon,
    skillLine: "Sort pictures, then test Vora on new ones — an AI classification demo.",
    chipClass: ENGLISH_CHIP,
  },
  pattern_predictor: {
    label: "Pattern Game",
    discipline: "english",
    icon: PatternGridIcon,
    skillLine: "\"What comes next?\" — an AI pattern-prediction demo.",
    chipClass: ENGLISH_CHIP,
  },
  memory_match: {
    label: "Word Match",
    discipline: "english",
    icon: GamepadIcon,
    skillLine: "Flip-card vocabulary recognition and recall.",
    chipClass: ENGLISH_CHIP,
  },
  sequence_builder: {
    label: "Step Order",
    discipline: "english",
    icon: GamepadIcon,
    skillLine: "Put routine steps in order.",
    chipClass: ENGLISH_CHIP,
  },
  sentence_builder: {
    label: "Sentence Builder",
    discipline: "english",
    icon: BookIcon,
    skillLine: "Build an English sentence word by word.",
    chipClass: ENGLISH_CHIP,
  },
  minimal_pairs: {
    label: "Listening Game",
    discipline: "english",
    icon: SpeakerIcon,
    skillLine: "Listen and pick which of two similar-sounding words was said.",
    chipClass: ENGLISH_CHIP,
  },
  blending: {
    label: "Sound It Out",
    discipline: "english",
    icon: SpeakerIcon,
    skillLine: "Tap each letter-sound in order, then blend them into a real word.",
    chipClass: ENGLISH_CHIP,
  },
};

export function isAiLabEngine(engine: ActivityEngine): boolean {
  return ENGINE_PRESENTATION[engine].discipline === "ai_literacy";
}

/** Chip data for a lesson row — undefined for unauthored ("Planned") lessons. */
export function lessonActivitySummaries(key: string): { engine: ActivityEngine; title: string }[] | undefined {
  const lesson = getLesson(key);
  if (!lesson) return undefined;
  return lesson.segments
    .filter((s): s is Extract<typeof s, { type: "activity" }> => s.type === "activity")
    .map((s) => ({ engine: s.config.engine, title: s.config.title }));
}

/**
 * Curriculum-wide stats for the trust panel — always computed from
 * AUTHORED_LESSONS, never hardcoded, so the numbers can't drift into
 * marketing fiction as content changes.
 */
export function curriculumStats(): {
  lessons: number;
  activities: number;
  aiLabActivities: number;
  engineCount: number;
} {
  let activities = 0;
  let aiLabActivities = 0;
  const enginesSeen = new Set<ActivityEngine>();
  for (const lesson of AUTHORED_LESSONS) {
    for (const seg of lesson.segments) {
      if (seg.type !== "activity") continue;
      activities++;
      enginesSeen.add(seg.config.engine);
      if (isAiLabEngine(seg.config.engine)) aiLabActivities++;
    }
  }
  return {
    lessons: AUTHORED_LESSONS.length,
    activities,
    aiLabActivities,
    engineCount: enginesSeen.size,
  };
}
