import { requireTeacher } from "@/lib/auth/requireTeacher";
import { SignupForm } from "@/components/auth/SignupForm";
import { AlreadySignedIn } from "@/components/auth/AlreadySignedIn";

export default async function SignupPage() {
  const teacher = await requireTeacher();
  if (teacher) return <AlreadySignedIn name={teacher.name} email={teacher.email} />;
  return <SignupForm />;
}
