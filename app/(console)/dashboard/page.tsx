import { redirect } from "next/navigation";
import Link from "next/link";
import { requireTeacher } from "@/lib/auth/requireTeacher";
import { classesVisibleToTeacher, schoolsForOrg } from "@/lib/console/queries";
import { Card } from "@/components/ui/Card";
import { Vora } from "@/components/mascot/Vora";
import { CreateSchoolForm } from "@/components/console/CreateSchoolForm";
import { StartClassButtons } from "@/components/console/StartClassButtons";
import { SparkleIcon, RocketIcon } from "@/components/icons";

const TRACK_LABEL: Record<string, string> = { little_sparks: "4-5 year olds", explorers: "6+ year olds" };
const TRACK_ACCENT: Record<string, string> = { little_sparks: "border-coral", explorers: "border-indigo" };
const TRACK_ICON: Record<string, (props: { size?: number; className?: string }) => React.JSX.Element> = {
  little_sparks: SparkleIcon,
  explorers: RocketIcon,
};

export default async function DashboardPage() {
  const teacher = await requireTeacher();
  if (!teacher) redirect("/login");

  const [allClasses, schools] = await Promise.all([
    classesVisibleToTeacher(teacher),
    schoolsForOrg(teacher.organizationId),
  ]);
  const myClasses = allClasses.filter((c) => c.teacherAccountId === teacher.id);
  const otherClasses = teacher.role === "org_admin" ? allClasses.filter((c) => c.teacherAccountId !== teacher.id) : [];

  return (
    <div className="flex flex-col gap-6">
      <Card className="flex items-center gap-5 bg-gradient-to-r from-indigo/15 via-coral/5 to-transparent">
        <Vora size={72} mood="happy" bob />
        <div>
          <h1 className="font-display text-3xl font-bold text-indigo-dark">Who&apos;s in the room today?</h1>
          <p className="text-base text-ink/60">Pick the age group and jump straight into today&apos;s lesson.</p>
        </div>
      </Card>

      {schools.length > 0 ? (
        <StartClassButtons existing={myClasses.map((c) => ({ ageTrack: c.ageTrack, id: c.id }))} />
      ) : teacher.role === "org_admin" ? (
        <CreateSchoolForm />
      ) : (
        <p className="text-sm text-ink/50">Ask your organization admin to set up a school before you can start a class.</p>
      )}

      {teacher.role === "org_admin" && (
        <>
          <Link href="/reporting" className="font-semibold text-indigo underline-offset-2 hover:underline">
            View organization reporting →
          </Link>
          {otherClasses.length > 0 && (
            <div className="flex flex-col gap-3">
              <h2 className="font-display text-lg font-bold text-ink">Every other class in your organization</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {otherClasses.map((c) => {
                  const TrackIcon = TRACK_ICON[c.ageTrack];
                  return (
                    <Link key={c.id} href={`/classes/${c.id}`}>
                      <Card className={`flex items-center justify-between gap-3 border-l-4 transition-transform hover:scale-[1.01] ${TRACK_ACCENT[c.ageTrack]}`}>
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo/10 text-indigo">
                            <TrackIcon size={20} />
                          </span>
                          <div>
                            <p className="font-display font-bold text-ink">{c.name}</p>
                            <p className="text-xs text-ink/50">
                              {c.gradeLabel} · {c.schoolName} · {c.teacherName}
                            </p>
                          </div>
                        </div>
                        <span className="rounded-full bg-mint/20 px-2 py-0.5 text-[10px] font-bold uppercase text-ink">
                          {TRACK_LABEL[c.ageTrack]}
                        </span>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
