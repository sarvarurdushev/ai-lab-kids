import { redirect } from "next/navigation";
import Link from "next/link";
import { requireOrgAdmin } from "@/lib/auth/requireTeacher";
import { orgReportingSummary } from "@/lib/console/reporting";
import { Card } from "@/components/ui/Card";

export default async function ReportingPage() {
  const teacher = await requireOrgAdmin();
  if (!teacher) redirect("/dashboard");

  const rows = await orgReportingSummary(teacher.organizationId);
  const totals = rows.reduce(
    (acc, r) => ({
      completed: acc.completed + r.lessonsCompleted,
      inProgress: acc.inProgress + r.lessonsInProgress,
    }),
    { completed: 0, inProgress: 0 }
  );

  return (
    <div className="flex flex-col gap-5">
      <div>
        <Link href="/dashboard" className="text-sm font-semibold text-ink/50">
          ← Dashboard
        </Link>
        <h1 className="font-display text-2xl font-bold text-indigo-dark">Organization Reporting</h1>
        <p className="text-sm text-ink/60">Rolled up across every class and school in your organization.</p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Card className="!p-3 text-center">
          <p className="font-display text-2xl font-bold text-indigo-dark">{rows.length}</p>
          <p className="text-xs text-ink/50">Classes</p>
        </Card>
        <Card className="!p-3 text-center">
          <p className="font-display text-2xl font-bold text-indigo-dark">{totals.completed}</p>
          <p className="text-xs text-ink/50">Lessons completed</p>
        </Card>
        <Card className="!p-3 text-center">
          <p className="font-display text-2xl font-bold text-indigo-dark">{totals.inProgress}</p>
          <p className="text-xs text-ink/50">Lessons in progress</p>
        </Card>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-xs font-bold tracking-wide text-ink/50 uppercase">By class</p>
        {rows.map((r) => (
          <Card key={r.classId} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-display font-bold text-ink">{r.className}</p>
                <p className="text-xs text-ink/50">
                  {r.schoolName} · {r.teacherName}
                </p>
              </div>
              <Link
                href={`/classes/${r.classId}`}
                className="shrink-0 text-xs font-bold text-indigo underline-offset-2 hover:underline"
              >
                Open →
              </Link>
            </div>
            <div className="flex gap-4 text-xs text-ink/60">
              <span>✅ {r.lessonsCompleted} completed</span>
              <span>▶️ {r.lessonsInProgress} in progress</span>
            </div>
          </Card>
        ))}
        {rows.length === 0 && <p className="text-sm text-ink/50">No classes yet.</p>}
      </div>
    </div>
  );
}
