import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/editorial/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — AI Lab for Kids",
  description: "What AI Lab for Kids collects, stores, and never touches.",
};

const TOC = [
  { id: "no-child-data", label: "No data from children" },
  { id: "what-we-collect", label: "What we collect" },
  { id: "no-live-ai", label: "No live AI" },
  { id: "cookies", label: "Cookies" },
  { id: "storage", label: "Where data is stored" },
  { id: "questions", label: "Questions" },
];

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="2026" toc={TOC}>
      <LegalSection id="no-child-data" title="We never collect data from children">
        <p>
          AI Lab for Kids has no student accounts, no student logins, and no way for a child to type or upload
          anything. One teacher runs the class from their own device, projected to the room — kids never touch a
          keyboard. We do not collect names, ages, photos, or any other information about the children in a class.
        </p>
      </LegalSection>

      <LegalSection id="what-we-collect" title="What we do collect">
        <ul className="list-disc space-y-1 pl-5">
          <li>Teacher/admin account info: name, email address, and a securely hashed password.</li>
          <li>Organization, school, and class metadata (names, grade labels, age track).</li>
          <li>
            Lesson progress: which step a class last reached in a lesson, and whether it&apos;s complete — not tied
            to any individual student.
          </li>
          <li>
            Photos or audio a school admin chooses to upload to customize curriculum content (e.g., a class photo
            next to a vocabulary word). These are uploaded voluntarily by an adult, never by a child.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="no-live-ai" title="No live AI, nothing sent to a third-party model">
        <p>
          Every lesson is pre-written, scripted content — there is no chatbot, no live AI model, and nothing a
          teacher or child says is ever sent anywhere for AI processing. The &quot;AI&quot; in the curriculum is
          taught as a concept, not run as a live service.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="Cookies">
        <p>
          We use a single, secure, HTTP-only session cookie to keep a teacher signed in. We don&apos;t use
          advertising cookies, and there is no third-party analytics or tracking script on this site.
        </p>
      </LegalSection>

      <LegalSection id="storage" title="Where data is stored">
        <p>
          Account and progress data live in a Postgres database operated for this deployment. Uploaded photos and
          audio are stored as files on the application server. Deleting an organization or a teacher account removes
          the associated data.
        </p>
      </LegalSection>

      <LegalSection id="questions" title="Questions">
        <p>
          Reach out any time at{" "}
          <a
            href="mailto:hello@ailabforkids.example"
            className="relative font-semibold text-sky-ink after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-100 after:bg-sky-ink after:transition-transform after:duration-200 hover:after:scale-x-0"
          >
            hello@ailabforkids.example
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
