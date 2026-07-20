import type { LessonMeta } from "@/lib/curriculum";

/**
 * The three fields authored on every lesson but, before this build,
 * rendered nowhere: objectives, standardsNote, koreanL1Note. Shared by the
 * class browser's expandable rows, the teacher-facing lesson-plan card,
 * and the Program Guide pages — one place to change how a lesson plan
 * reads.
 */
export function LessonPlanFacts({ lesson }: { lesson: LessonMeta }) {
  return (
    <div className="flex flex-col gap-2.5 text-xs">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wide text-ink/40">I can... (objectives)</p>
        <ul className="mt-0.5 list-disc pl-4 text-ink/75">
          {lesson.objectives.map((o, i) => (
            <li key={i}>
              {o.en} <span className="text-ink/40">— {o.ko}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wide text-ink/40">Standards</p>
        <p className="mt-0.5 text-ink/75">{lesson.standardsNote}</p>
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wide text-ink/40">Korean-L1 teaching note</p>
        <p className="mt-0.5 text-ink/75">{lesson.koreanL1Note}</p>
      </div>
    </div>
  );
}
