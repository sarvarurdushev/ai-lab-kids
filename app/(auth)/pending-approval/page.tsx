import { redirect } from "next/navigation";
import { requireTeacher } from "@/lib/auth/requireTeacher";
import { Card } from "@/components/ui/Card";
import { Vora } from "@/components/mascot/Vora";
import { SignOutButton } from "@/components/console/SignOutButton";

export default async function PendingApprovalPage() {
  const teacher = await requireTeacher();
  if (!teacher) redirect("/login");
  if (teacher.role !== "pending") redirect("/dashboard");

  return (
    <Card className="flex w-full max-w-sm flex-col items-center gap-3 text-center">
      <Vora size={80} mood="thinking" />
      <h1 className="font-display text-xl font-bold text-indigo-dark">Almost there, {teacher.name.split(" ")[0]}!</h1>
      <p className="text-sm text-ink/60">
        Your account is created but waiting for a school admin to approve you as a teacher. Once approved, this page
        will take you straight to your classes.
      </p>
      <SignOutButton />
    </Card>
  );
}
