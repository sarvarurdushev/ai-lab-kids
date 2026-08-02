import { redirect } from "next/navigation";
import { requireTeacher } from "@/lib/auth/requireTeacher";
import { Panel } from "@/components/editorial/Panel";
import { CloudShape } from "@/components/editorial/decor/CloudShape";
import { Vora } from "@/components/mascot/Vora";
import { EditorialSignOutButton } from "@/components/editorial/EditorialSignOutButton";

export default async function PendingApprovalPage() {
  const teacher = await requireTeacher();
  if (!teacher) redirect("/login");
  if (teacher.role !== "pending") redirect("/dashboard");

  return (
    <Panel variant="bare" className="flex w-full max-w-sm flex-col items-center gap-3 text-center">
      <div className="relative flex items-center justify-center">
        <CloudShape accent="sky" size={100} opacity={0.5} className="pointer-events-none absolute" />
        <Vora size={80} mood="thinking" />
      </div>
      <h1 className="font-editorial text-xl font-bold text-navy">Almost there, {teacher.name.split(" ")[0]}!</h1>
      <p className="text-sm text-slate">
        Your account is created but waiting for a school admin to approve you as a teacher. Once approved, this page
        will take you straight to your classes.
      </p>
      <EditorialSignOutButton />
    </Panel>
  );
}
