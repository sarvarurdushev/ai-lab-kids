import { ENGINE_PRESENTATION, lessonActivitySummaries } from "@/lib/curriculum";

/** The row of engine chips ("Sorting Game", "AI Lab · Is It AI?"...) for one authored lesson — shared by the class browser, lesson-plan card, and the Program Guide so they can't show different activity lists for the same lesson. */
export function ActivityChips({ lessonKey, className = "" }: { lessonKey: string; className?: string }) {
  const activities = lessonActivitySummaries(lessonKey);
  if (!activities || activities.length === 0) return null;
  return (
    <div className={`flex flex-wrap items-center gap-1 ${className}`}>
      {activities.map(({ engine, title }, i) => {
        const ep = ENGINE_PRESENTATION[engine];
        return (
          <span
            key={`${engine}-${i}`}
            title={`${ep.skillLine} — "${title}"`}
            className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${ep.chipClass}`}
          >
            <ep.icon size={10} /> {ep.label}
          </span>
        );
      })}
    </div>
  );
}
