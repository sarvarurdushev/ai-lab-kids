import { curriculumStats } from "@/lib/curriculum";
import { Card } from "@/components/ui/Card";
import { RobotHeadIcon } from "@/components/icons";

/**
 * "Why this teaches real AI" trust panel — sits directly under the class
 * header, the same viewport a teacher/parent evaluating this platform
 * looks at first. Every number is computed from AUTHORED_LESSONS (see
 * lib/curriculum/enginePresentation.ts), never hand-typed, so it can't
 * drift into marketing fiction as content changes. Answers, with facts
 * instead of a badge row, the same question a competitor like littlelit.ai
 * answers with trust-logo marketing: "is this actually AI education?"
 */
function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5 rounded-2xl bg-indigo/5 px-2 py-3 text-center">
      <span className="font-display text-xl font-bold text-indigo-dark">{value}</span>
      <span className="text-[10px] font-semibold leading-tight text-ink/60">{label}</span>
    </div>
  );
}

export function AICurriculumPanel() {
  const stats = curriculumStats();
  return (
    <Card className="flex flex-col gap-3 border-l-4 border-indigo">
      <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-indigo-dark">
        <RobotHeadIcon size={13} /> Real AI-literacy curriculum, not an English app with an AI label
      </p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <StatTile value={String(stats.aiLabActivities)} label="AI Lab activities this year" />
        <StatTile value={String(stats.activities)} label={`activities · ${stats.engineCount} engine types`} />
        <StatTile value="5/5" label="AI4K12 Big Ideas covered" />
        <StatTile value={String(stats.lessons)} label="fully-authored bilingual lessons" />
      </div>
      <p className="text-[11px] text-ink/50">
        Built against <strong>AI4K12&apos;s Five Big Ideas in AI</strong>, <strong>ISTE</strong>&apos;s elementary
        AI-recognition guidance, the <strong>UNESCO AI Competency Framework for Students</strong>, and{" "}
        <strong>CSTA</strong> K-12 CS standards.
      </p>
      <details className="text-[11px] text-ink/60">
        <summary className="cursor-pointer font-semibold text-ink/50">How each activity maps to a standard →</summary>
        <ul className="mt-2 flex flex-col gap-1.5 pl-1">
          <li>
            <strong>AI Lab · Is It AI?</strong> — real-world AI-recognition, matching ISTE&apos;s elementary
            recommendation to identify AI in daily life, and AI4K12 Big Idea 5 (Societal Impact).
          </li>
          <li>
            <strong>AI Lab · Clear Instructions</strong> — precise-instruction practice, matching the UNESCO AI
            Competency Framework&apos;s &quot;AI techniques and applications&quot; / &quot;AI system design&quot;
            dimensions.
          </li>
          <li>
            <strong>Sorting Game</strong> (Train the Robot) — kids label training examples, then test Vora on
            unseen ones and see why mistakes happen — CSTA 1B-DA-06, AI4K12 Big Ideas 1 &amp; 3 (Perception,
            Learning).
          </li>
          <li>
            <strong>Pattern Game</strong> — finding a rule in examples to predict what comes next — AI4K12 Big
            Idea 2 (Representation &amp; Reasoning).
          </li>
        </ul>
      </details>
    </Card>
  );
}
