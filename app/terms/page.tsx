import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/editorial/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — AI Lab for Kids",
  description: "The basics of using AI Lab for Kids.",
};

const TOC = [
  { id: "who-for", label: "Who this is for" },
  { id: "accounts", label: "Accounts and access" },
  { id: "uploads", label: "Uploaded content" },
  { id: "no-promises", label: "What we don't promise" },
  { id: "changes", label: "Changes" },
  { id: "questions", label: "Questions" },
];

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="2026" toc={TOC}>
      <LegalSection id="who-for" title="Who this is for">
        <p>
          AI Lab for Kids is built for teachers and school administrators to run classroom lessons. Accounts are for
          adults only — there is no child-facing login of any kind.
        </p>
      </LegalSection>

      <LegalSection id="accounts" title="Accounts and access">
        <p>
          A new teacher account starts in a pending state until a school admin approves it. School admins are
          responsible for who they approve and for what those teachers do with class content.
        </p>
      </LegalSection>

      <LegalSection id="uploads" title="Uploaded content">
        <p>
          When a school admin uploads a photo or audio recording to customize a lesson, they confirm they have the
          right to use it (e.g., a photo of their own class, with any needed parent/guardian consent handled by the
          school under its own policies). We may remove content that&apos;s reported as inappropriate or infringing.
        </p>
      </LegalSection>

      <LegalSection id="no-promises" title="What we don't promise">
        <p>
          The service is provided as-is. We do our best to keep lessons accurate and the app running smoothly, but we
          don&apos;t guarantee uninterrupted availability.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="Changes">
        <p>We may update these terms as the product evolves. Continued use after a change means you accept the update.</p>
      </LegalSection>

      <LegalSection id="questions" title="Questions">
        <p>
          Reach out at{" "}
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
