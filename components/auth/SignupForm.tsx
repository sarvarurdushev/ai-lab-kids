"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function SignupForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
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
    <Card className="w-full max-w-sm">
      <h1 className="font-display mb-1 text-center text-2xl font-bold text-indigo-dark">Create Your Account</h1>
      <p className="mb-6 text-center text-sm text-ink/60">
        AI Lab for Kids — a school admin approves new teacher accounts before you can start a class.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col gap-1 text-sm font-semibold text-ink/70">
          Name
          <input
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-2xl border-2 border-ink/10 bg-white px-4 py-3 text-base focus:border-indigo focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-semibold text-ink/70">
          Email
          <input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-2xl border-2 border-ink/10 bg-white px-4 py-3 text-base focus:border-indigo focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-semibold text-ink/70">
          Password
          <input
            type="password"
            required
            minLength={8}
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-2xl border-2 border-ink/10 bg-white px-4 py-3 text-base focus:border-indigo focus:outline-none"
          />
        </label>
        {error && <p className="text-center text-sm font-semibold text-coral">{error}</p>}
        <Button type="submit" variant="secondary" disabled={submitting}>
          {submitting ? "Creating account..." : "Create Account"}
        </Button>
      </form>
      <p className="mt-4 text-center text-sm text-ink/50">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-indigo-dark underline">
          Sign in
        </Link>
      </p>
    </Card>
  );
}
