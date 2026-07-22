import { redirect } from "next/navigation";
import { requireOrgAdmin } from "@/lib/auth/requireTeacher";
import { pendingTeachersForOrg } from "@/lib/console/queries";
import { Card } from "@/components/ui/Card";
import { PendingTeacherRow } from "@/components/console/PendingTeacherRow";

export default async function AdminTeachersPage() {
  const admin = await requireOrgAdmin();
  if (!admin) redirect("/dashboard");

  const pending = await pendingTeachersForOrg(admin.organizationId);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-indigo-dark">Pending Teacher Sign-ups</h1>
        <p className="text-sm text-ink/60">New accounts can&apos;t start a class until you approve them here.</p>
      </div>

      <Card className="flex flex-col gap-2">
        {pending.length === 0 && <p className="text-sm text-ink/50">No pending sign-ups right now.</p>}
        {pending.map((t) => (
          <PendingTeacherRow key={t.id} id={t.id} name={t.name} email={t.email} />
        ))}
      </Card>
    </div>
  );
}
