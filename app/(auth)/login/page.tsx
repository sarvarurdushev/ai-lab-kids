import { requireTeacher } from "@/lib/auth/requireTeacher";
import { LoginForm } from "@/components/auth/LoginForm";
import { AlreadySignedIn } from "@/components/auth/AlreadySignedIn";

export default async function LoginPage() {
  const teacher = await requireTeacher();
  if (teacher) return <AlreadySignedIn name={teacher.name} email={teacher.email} />;
  return <LoginForm />;
}
