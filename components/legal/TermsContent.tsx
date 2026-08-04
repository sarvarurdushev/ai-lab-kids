"use client";

import { LegalPage, LegalSection } from "@/components/editorial/LegalPage";
import { useDictionary } from "@/components/i18n/LocaleProvider";

export function TermsContent() {
  const dict = useDictionary();
  const t = dict.terms;
  const toc = [
    { id: "who-for", label: t.toc.whoFor },
    { id: "accounts", label: t.toc.accounts },
    { id: "uploads", label: t.toc.uploads },
    { id: "no-promises", label: t.toc.noPromises },
    { id: "changes", label: t.toc.changes },
    { id: "questions", label: t.toc.questions },
  ];

  return (
    <LegalPage title={t.title} updated="2026" toc={toc}>
      <LegalSection id="who-for" title={t.whoFor.title}>
        <p>{t.whoFor.body}</p>
      </LegalSection>

      <LegalSection id="accounts" title={t.accounts.title}>
        <p>{t.accounts.body}</p>
      </LegalSection>

      <LegalSection id="uploads" title={t.uploads.title}>
        <p>{t.uploads.body}</p>
      </LegalSection>

      <LegalSection id="no-promises" title={t.noPromises.title}>
        <p>{t.noPromises.body}</p>
      </LegalSection>

      <LegalSection id="changes" title={t.changes.title}>
        <p>{t.changes.body}</p>
      </LegalSection>

      <LegalSection id="questions" title={t.questions.title}>
        <p>
          {t.questions.before}
          <a
            href="mailto:hello@ailabforkids.example"
            className="relative font-semibold text-sky-ink after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-100 after:bg-sky-ink after:transition-transform after:duration-200 hover:after:scale-x-0"
          >
            hello@ailabforkids.example
          </a>
          {t.questions.after}
        </p>
      </LegalSection>
    </LegalPage>
  );
}
