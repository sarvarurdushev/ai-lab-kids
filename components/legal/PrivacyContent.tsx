"use client";

import { LegalPage, LegalSection } from "@/components/editorial/LegalPage";
import { useDictionary } from "@/components/i18n/LocaleProvider";

/**
 * Split out from app/privacy/page.tsx (a Server Component, so it can export
 * `metadata`) purely so this piece can call useDictionary() — client-only
 * hooks and a `metadata` export can't coexist in the same file.
 */
export function PrivacyContent() {
  const dict = useDictionary();
  const t = dict.privacy;
  const toc = [
    { id: "no-child-data", label: t.toc.noChildData },
    { id: "what-we-collect", label: t.toc.whatWeCollect },
    { id: "no-live-ai", label: t.toc.noLiveAi },
    { id: "cookies", label: t.toc.cookies },
    { id: "storage", label: t.toc.storage },
    { id: "questions", label: t.toc.questions },
  ];

  return (
    <LegalPage title={t.title} updated="2026" toc={toc}>
      <LegalSection id="no-child-data" title={t.noChildData.title}>
        <p>{t.noChildData.body}</p>
      </LegalSection>

      <LegalSection id="what-we-collect" title={t.whatWeCollect.title}>
        <ul className="list-disc space-y-1 pl-5">
          {t.whatWeCollect.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection id="no-live-ai" title={t.noLiveAi.title}>
        <p>{t.noLiveAi.body}</p>
      </LegalSection>

      <LegalSection id="cookies" title={t.cookies.title}>
        <p>{t.cookies.body}</p>
      </LegalSection>

      <LegalSection id="storage" title={t.storage.title}>
        <p>{t.storage.body}</p>
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
