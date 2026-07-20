import { redirect } from "next/navigation";
import Link from "next/link";
import { requireTeacher } from "@/lib/auth/requireTeacher";
import { classesVisibleToTeacher, schoolsForOrg } from "@/lib/console/queries";
import { Card } from "@/components/ui/Card";
import { Vora } from "@/components/mascot/Vora";
import { CreateClassForm } from "@/components/console/CreateClassForm";
import { SparkleIcon, RocketIcon } from "@/components/icons";

const LEVEL_LABEL: Record<string, string> = { full: "Full bilingual", light: "Light Korean", minimal: "Immersion" };
const TRACK_LABEL: Record<string, string> = { little_sparks: "Little Sparks 4-5", explorers: "AI Explorers 6+" };
const TRACK_ACCENT: Record<string, string> = { little_sparks: "border-coral", explorers: "border-indigo" };
const TRACK_ICON: Record<string, (props: { size?: number; className?: string }) => React.JSX.Element> = {
  little_sparks: SparkleIcon,
  explorers: RocketIcon,
};

export default async function DashboardPage() {
  const teacher = await requireTeacher();
  if (!teacher) redirect("/login");

  const [myClasses, schools] = await Promise.all([
    classesVisibleToTeacher(teacher),
    schoolsForOrg(teacher.organizationId),
  ]);

  return (
    <div className="flex flex-col gap-5">
      <Card className="flex items-center gap-5 bg-gradient-to-r from-indigo/15 via-coral/5 to-transparent">
        <Vora size={72} mood="happy" bob />
        <div>
          <h1 className="font-display text-3xl font-bold text-indigo-dark">
            {teacher.role === "org_admin" ? "All Classes" : "My Classes"}
          </h1>
          <p className="text-base text-ink/60">
            {teacher.role === "org_admin"
              ? "Every class across your organization."
              : "Pick a class to open its roster and start a lesson."}
          </p>
        </div>
      </Card>

      {teacher.role === "org_admin" && (
        <Link href="/reporting" className="font-semibold text-indigo underline-offset-2 hover:underline">
          View organization reporting →
        </Link>
      )}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {myClasses.map((c) => {
          const TrackIcon = TRACK_ICON[c.ageTrack];
          return (
          <Link key={c.id} href={`/classes/${c.id}`}>
            <Card
              className={`flex items-center justify-between gap-3 border-l-4 transition-transform hover:scale-[1.01] ${TRACK_ACCENT[c.ageTrack]}`}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo/10 text-indigo">
                  <TrackIcon size={20} />
                </span>
                <div>
                  <p className="font-display font-bold text-ink">{c.name}</p>
                  <p className="text-xs text-ink/50">
                    {c.gradeLabel} · {c.schoolName}
                    {teacher.role === "org_admin" && ` · ${c.teacherName}`}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1">
                <span className="rounded-full bg-mint/20 px-2 py-0.5 text-[10px] font-bold uppercase text-ink">
                  {TRACK_LABEL[c.ageTrack]}
                </span>
                <span className="rounded-full bg-indigo/10 px-2 py-0.5 text-[10px] font-bold uppercase text-indigo-dark">
                  {LEVEL_LABEL[c.koreanSupportLevel]}
                </span>
              </div>
            </Card>
          </Link>
          );
        })}
        {myClasses.length === 0 && (
          <p className="text-sm text-ink/50">No classes yet — create your first one below.</p>
        )}
      </div>

      {schools.length > 0 ? (
        <CreateClassForm schools={schools} />
      ) : (
        <p className="text-sm text-ink/50">Ask your organization admin to set up a school before creating a class.</p>
      )}
    </div>
  );
}
