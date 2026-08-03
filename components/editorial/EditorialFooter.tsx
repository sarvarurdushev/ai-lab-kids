import Link from "next/link";
import { Rule } from "./Rule";
import { TerminalStrip } from "./TerminalCard";

export function EditorialFooter({ printHidden = false }: { printHidden?: boolean }) {
  return (
    <footer className={`border-t border-rule bg-white ${printHidden ? "no-print" : ""}`}>
      <div className="mx-auto max-w-[1240px] px-6 py-14 sm:px-8 sm:py-20 lg:px-12 xl:px-16">
        <p aria-hidden="true" className="font-editorial select-none text-[clamp(2rem,5vw,3.5rem)] leading-none font-extrabold text-navy/10">
          AI Lab for Kids
        </p>
        <Rule className="my-10" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <FooterColumn title="Program">
            <FooterLink href="/curriculum">Program Guide</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterColumn>
          <FooterColumn title="Account">
            <FooterLink href="/login">Teacher log in</FooterLink>
            <FooterLink href="/signup">Get started</FooterLink>
          </FooterColumn>
          <FooterColumn title="Legal">
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms</FooterLink>
          </FooterColumn>
        </div>
        <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate">AI Lab for Kids — teacher-led AI literacy &amp; English, for ages 4-8.</p>
          <TerminalStrip />
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 border-t border-rule pt-4 sm:border-t-0 sm:pt-0">
      <p className="text-[11px] font-bold tracking-[0.18em] text-navy/70 uppercase">{title}</p>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate transition-colors hover:text-navy">
      {children}
      <span
        aria-hidden="true"
        className="-translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
      >
        →
      </span>
    </Link>
  );
}
