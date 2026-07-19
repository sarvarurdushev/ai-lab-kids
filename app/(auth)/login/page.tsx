import { redirect } from "next/navigation";
import { requireTeacher } from "@/lib/auth/requireTeacher";
import { LoginForm } from "@/components/auth/LoginForm";

export default async function LoginPage() {
  const teacher = await requireTeacher();
  if (teacher) redirect("/dashboard");
  return <LoginForm />;
}
