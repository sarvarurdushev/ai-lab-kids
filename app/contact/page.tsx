import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — AI Lab for Kids",
  description: "Get in touch about AI Lab for Kids.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#07070d] px-6 py-16 text-white">
      <div className="mx-auto flex max-w-xl flex-col gap-6">
        <Link href="/" className="text-sm font-semibold text-white/50 hover:text-white">
          ← Back to home
        </Link>
        <h1 className="font-display text-3xl font-bold">Contact</h1>
        <p className="text-white/70">
          Questions about bringing AI Lab for Kids into your school, a bug to report, or anything else — reach out
          and a real person will get back to you.
        </p>
        <a
          href="mailto:hello@ailabforkids.example"
          className="w-fit rounded-full bg-indigo px-6 py-3 font-display font-semibold text-white hover:bg-indigo-dark"
        >
          hello@ailabforkids.example
        </a>
        <p className="text-sm text-white/40">
          Already a teacher on the platform? Your school admin can add or remove teacher access from the Admin panel
          inside the console.
        </p>
      </div>
    </div>
  );
}
