import { redirect } from "next/navigation";
import { requireTeacher } from "@/lib/auth/requireTeacher";
import { SignupForm } from "@/components/auth/SignupForm";

export default async function SignupPage() {
  const teacher = await requireTeacher();
  if (teacher) redirect("/dashboard");
  return <SignupForm />;
}
