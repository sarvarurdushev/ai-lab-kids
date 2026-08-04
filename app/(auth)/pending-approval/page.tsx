import { redirect } from "next/navigation";
import { requireTeacher } from "@/lib/auth/requireTeacher";
import { PendingApprovalContent } from "@/components/auth/PendingApprovalContent";

export default async function PendingApprovalPage() {
  const teacher = await requireTeacher();
  if (!teacher) redirect("/login");
  if (teacher.role !== "pending") redirect("/dashboard");

  return <PendingApprovalContent firstName={teacher.name.split(" ")[0]} />;
}
