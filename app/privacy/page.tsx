import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — AI Lab for Kids",
  description: "What AI Lab for Kids collects, stores, and never touches.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="font-display text-xl font-bold">{title}</h2>
      <div className="flex flex-col gap-2 text-sm leading-relaxed text-white/70">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-[#07070d] px-6 py-16 text-white">
      <div className="mx-auto flex max-w-2xl flex-col gap-8">
        <div>
          <Link href="/" className="text-sm font-semibold text-white/50 hover:text-white">
            ← Back to home
          </Link>
          <h1 className="font-display mt-4 text-3xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-sm text-white/50">Last updated 2026. This is a plain-language summary, not a substitute for legal advice.</p>
        </div>

        <Section title="We never collect data from children">
          <p>
            AI Lab for Kids has no student accounts, no student logins, and no way for a child to type or upload
            anything. One teacher runs the class from their own device, projected to the room — kids never touch a
            keyboard. We do not collect names, ages, photos, or any other information about the children in a class.
          </p>
        </Section>

        <Section title="What we do collect">
          <ul className="list-disc space-y-1 pl-5">
            <li>Teacher/admin account info: name, email address, and a securely hashed password.</li>
            <li>Organization, school, and class metadata (names, grade labels, age track).</li>
            <li>Lesson progress: which step a class last reached in a lesson, and whether it&apos;s complete — not tied to any individual student.</li>
            <li>
              Photos or audio a school admin chooses to upload to customize curriculum content (e.g., a class photo
              next to a vocabulary word). These are uploaded voluntarily by an adult, never by a child.
            </li>
          </ul>
        </Section>

        <Section title="No live AI, nothing sent to a third-party model">
          <p>
            Every lesson is pre-written, scripted content — there is no chatbot, no live AI model, and nothing a
            teacher or child says is ever sent anywhere for AI processing. The &quot;AI&quot; in the curriculum is
            taught as a concept, not run as a live service.
          </p>
        </Section>

        <Section title="Cookies">
          <p>
            We use a single, secure, HTTP-only session cookie to keep a teacher signed in. We don&apos;t use
            advertising cookies, and there is no third-party analytics or tracking script on this site.
          </p>
        </Section>

        <Section title="Where data is stored">
          <p>
            Account and progress data live in a Postgres database operated for this deployment. Uploaded photos and
            audio are stored as files on the application server. Deleting an organization or a teacher account
            removes the associated data.
          </p>
        </Section>

        <Section title="Questions">
          <p>
            Reach out any time at{" "}
            <a href="mailto:hello@ailabforkids.example" className="font-semibold text-indigo-light underline">
              hello@ailabforkids.example
            </a>
            .
          </p>
        </Section>
      </div>
    </div>
  );
}
