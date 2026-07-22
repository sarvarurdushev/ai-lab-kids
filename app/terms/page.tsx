import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — AI Lab for Kids",
  description: "The basics of using AI Lab for Kids.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="font-display text-xl font-bold">{title}</h2>
      <div className="flex flex-col gap-2 text-sm leading-relaxed text-white/70">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-[#07070d] px-6 py-16 text-white">
      <div className="mx-auto flex max-w-2xl flex-col gap-8">
        <div>
          <Link href="/" className="text-sm font-semibold text-white/50 hover:text-white">
            ← Back to home
          </Link>
          <h1 className="font-display mt-4 text-3xl font-bold">Terms of Service</h1>
          <p className="mt-2 text-sm text-white/50">Last updated 2026. This is a plain-language summary, not a substitute for legal advice.</p>
        </div>

        <Section title="Who this is for">
          <p>
            AI Lab for Kids is built for teachers and school administrators to run classroom lessons. Accounts are
            for adults only — there is no child-facing login of any kind.
          </p>
        </Section>

        <Section title="Accounts and access">
          <p>
            A new teacher account starts in a pending state until a school admin approves it. School admins are
            responsible for who they approve and for what those teachers do with class content.
          </p>
        </Section>

        <Section title="Uploaded content">
          <p>
            When a school admin uploads a photo or audio recording to customize a lesson, they confirm they have the
            right to use it (e.g., a photo of their own class, with any needed parent/guardian consent handled by
            the school under its own policies). We may remove content that&apos;s reported as inappropriate or
            infringing.
          </p>
        </Section>

        <Section title="What we don't promise">
          <p>
            The service is provided as-is. We do our best to keep lessons accurate and the app running smoothly, but
            we don&apos;t guarantee uninterrupted availability.
          </p>
        </Section>

        <Section title="Changes">
          <p>We may update these terms as the product evolves. Continued use after a change means you accept the update.</p>
        </Section>

        <Section title="Questions">
          <p>
            Reach out at{" "}
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
