import type { ActivityEngine, Bilingual } from "./types";
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
  label: Bilingual;
  discipline: ActivityDiscipline;
  icon: (props: { size?: number; className?: string }) => React.JSX.Element;
  /** One short line for tooltips: the AI/English skill this engine drills. */
  skillLine: Bilingual;
  chipClass: string;
}

const AI_LAB_CHIP = "bg-indigo text-white";
const ENGLISH_CHIP = "bg-cream text-ink/60 border border-ink/10";

export const ENGINE_PRESENTATION: Record<ActivityEngine, EnginePresentation> = {
  ai_or_not: {
    label: { en: "AI Lab · Is It AI?", ko: "AI 랩 · AI일까요?" },
    discipline: "ai_literacy",
    icon: RobotHeadIcon,
    skillLine: {
      en: "Real-world AI recognition — kids classify everyday things as AI or not, with a reason.",
      ko: "실생활 AI 인식 — 학생들이 일상 속 사물을 AI인지 아닌지 분류하고 이유를 배워요.",
    },
    chipClass: AI_LAB_CHIP,
  },
  instruct_vora: {
    label: { en: "AI Lab · Clear Instructions", ko: "AI 랩 · 분명한 지시" },
    discipline: "ai_literacy",
    icon: RobotHeadIcon,
    skillLine: {
      en: "Precise-instruction practice — kids see a vague instruction fail, then build one that works.",
      ko: "정확한 지시 연습 — 애매한 지시가 실패하는 것을 보고, 성공하는 지시를 만들어봐요.",
    },
    chipClass: AI_LAB_CHIP,
  },
  train_the_robot: {
    label: { en: "Sorting Game", ko: "분류 게임" },
    discipline: "english",
    icon: GamepadIcon,
    skillLine: { en: "Sort pictures, then test Vora on new ones — an AI classification demo.", ko: "그림을 분류하고 보라를 테스트해요 — AI 분류 시연이에요." },
    chipClass: ENGLISH_CHIP,
  },
  pattern_predictor: {
    label: { en: "Pattern Game", ko: "패턴 게임" },
    discipline: "english",
    icon: PatternGridIcon,
    skillLine: { en: "\"What comes next?\" — an AI pattern-prediction demo.", ko: "'다음은 무엇일까요?' — AI 패턴 예측 시연이에요." },
    chipClass: ENGLISH_CHIP,
  },
  memory_match: {
    label: { en: "Word Match", ko: "단어 짝 맞추기" },
    discipline: "english",
    icon: GamepadIcon,
    skillLine: { en: "Flip-card vocabulary recognition and recall.", ko: "카드 뒤집기로 단어를 인식하고 기억해요." },
    chipClass: ENGLISH_CHIP,
  },
  sequence_builder: {
    label: { en: "Step Order", ko: "순서 맞추기" },
    discipline: "english",
    icon: GamepadIcon,
    skillLine: { en: "Put routine steps in order.", ko: "루틴 단계를 순서대로 놓아요." },
    chipClass: ENGLISH_CHIP,
  },
  sentence_builder: {
    label: { en: "Sentence Builder", ko: "문장 만들기" },
    discipline: "english",
    icon: BookIcon,
    skillLine: { en: "Build an English sentence word by word.", ko: "영어 문장을 한 단어씩 만들어요." },
    chipClass: ENGLISH_CHIP,
  },
  minimal_pairs: {
    label: { en: "Listening Game", ko: "듣기 게임" },
    discipline: "english",
    icon: SpeakerIcon,
    skillLine: { en: "Listen and pick which of two similar-sounding words was said.", ko: "비슷한 소리의 두 단어 중 무엇을 들었는지 골라요." },
    chipClass: ENGLISH_CHIP,
  },
};

export function isAiLabEngine(engine: ActivityEngine): boolean {
  return ENGINE_PRESENTATION[engine].discipline === "ai_literacy";
}

/** Chip data for a lesson row — undefined for unauthored ("Planned") lessons. */
export function lessonActivitySummaries(key: string): { engine: ActivityEngine; title: Bilingual }[] | undefined {
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
