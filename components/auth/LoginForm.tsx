"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { EditorialButton } from "@/components/editorial/EditorialButton";
import { FormField } from "@/components/editorial/FormField";
import { useDictionary } from "@/components/i18n/LocaleProvider";

export function LoginForm() {
  const router = useRouter();
  const dict = useDictionary();
  const t = dict.auth.login;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Something went wrong. Try again.");
        return;
      }
      router.push("/dashboard");
      router.refresh();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-sm">
      <h1 className="font-editorial al-optical-mid text-[2rem] leading-[1.05] font-extrabold text-navy sm:text-[2.5rem]">
        {t.title}
      </h1>
      <p className="mt-2 text-sm text-slate">{t.subtitle}</p>
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
        <FormField
          label={dict.formField.email}
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormField
          label={dict.formField.password}
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <p
            role="alert"
            aria-live="polite"
            className="text-sm font-semibold text-coral-ink"
          >
            {error}
          </p>
        )}
        <EditorialButton
          type="submit"
          disabled={submitting}
          className="mt-2 w-full"
        >
          {submitting ? t.submitting : t.submit}
        </EditorialButton>
      </form>
      <p className="mt-6 text-sm text-slate">
        {t.footerPrompt}
        <Link
          href="/signup"
          className="font-semibold text-navy underline decoration-navy/30 underline-offset-2 hover:decoration-navy"
        >
          {t.footerLink}
        </Link>
      </p>
    </div>
  );
}
