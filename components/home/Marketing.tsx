"use client";

import { useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { HERO_IMAGES, BIG_IDEA_IMAGE, SEGMENT_IMAGE, MONTH_IMAGE, MONTHS } from "@/lib/curriculum";
import { RobotHeadIcon, GamepadIcon, GlobeIcon, SparkleIcon, RunIcon } from "@/components/icons";

const SATELLITES = [
  { image: BIG_IDEA_IMAGE.reasoning, label: "Real AI concepts", pos: { left: "10%", top: "12%" } },
  { image: SEGMENT_IMAGE.chant, label: "Movement & song", pos: { left: "90%", top: "14%" } },
  { image: HERO_IMAGES.celebrate, label: "A moment to celebrate", pos: { left: "50%", top: "92%" } },
];

const FEATURES = [
  {
    icon: RobotHeadIcon,
    title: "Real AI ideas, not just an AI label",
    body: "Every unit teaches one genuine AI4K12 big idea — perception, patterns, learning from examples — through play a 4-8 year-old can actually do.",
  },
  {
    icon: GamepadIcon,
    title: "One screen, one teacher",
    body: "Built for a projector and a teacher running the room — not a tablet per kid. Every lesson is a full, scripted plan you can pick up and teach.",
  },
  {
    icon: GlobeIcon,
    title: "A whole year, mapped out",
    body: "72 fully authored lessons across 12 themed units, standards-aligned from the first class to the last, with a printable guide for every one.",
  },
  {
    icon: RunIcon,
    title: "15+ minutes, genuinely fun",
    body: "Movement breaks, chants, and games keep the room moving — this isn't a worksheet with a robot sticker on it.",
  },
];

const GALLERY_MONTHS = ["m1_space", "m6_animals", "m9_body", "m10_halloween", "m12_winter", "m3_friends"];

function ConnectorLine({ d, delay }: { d: string; delay: number }) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke="url(#al-connector-gradient)"
      strokeWidth={2}
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.8 }}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}

function HeroConstellation() {
  const wrapRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
    el.style.setProperty("--al-parallax-x", `${x}px`);
    el.style.setProperty("--al-parallax-y", `${y}px`);
  }

  return (
    <div
      ref={wrapRef}
      onPointerMove={handlePointerMove}
      className="relative mx-auto mt-16 hidden aspect-[16/10] w-full max-w-3xl sm:block"
      style={{ ["--al-parallax-x" as string]: "0px", ["--al-parallax-y" as string]: "0px" }}
    >
      <svg viewBox="0 0 1000 625" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="al-connector-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b7ff0" />
            <stop offset="100%" stopColor="#6c5ce7" />
          </linearGradient>
        </defs>
        <ConnectorLine d="M500,312 C 350,230 250,170 150,105" delay={0.2} />
        <ConnectorLine d="M500,312 C 650,230 750,170 850,110" delay={0.5} />
        <ConnectorLine d="M500,312 C 460,420 460,480 500,570" delay={0.8} />
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        className="al-glass absolute left-1/2 top-1/2 aspect-video w-[46%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl shadow-[0_0_100px_rgba(108,92,231,0.25)]"
        style={{
          transform: "translate(calc(-50% + var(--al-parallax-x)), calc(-50% + var(--al-parallax-y)))",
        }}
      >
        <Image src={HERO_IMAGES.classroom} alt="A teacher running a lesson with Vora on the classroom screen" fill sizes="480px" className="object-cover" />
      </motion.div>

      {SATELLITES.map((sat, i) => (
        <motion.div
          key={sat.label}
          initial={{ opacity: 0, scale: 0.7, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 240, damping: 20, delay: 0.3 + i * 0.15 }}
          className="al-animate-float absolute w-32 -translate-x-1/2 -translate-y-1/2 sm:w-36"
          style={{ left: sat.pos.left, top: sat.pos.top, animationDelay: `${i * 0.7}s` }}
        >
          <div className="al-glass overflow-hidden rounded-2xl shadow-[0_0_60px_rgba(108,92,231,0.18)]">
            <div className="relative aspect-square w-full overflow-hidden">
              <Image src={sat.image} alt="" fill sizes="144px" className="object-cover" />
            </div>
            <p className="px-2.5 py-2 text-center text-[11px] font-semibold text-white/80">{sat.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function MobileHeroImages() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-3 sm:hidden">
      <div className="al-glass col-span-2 overflow-hidden rounded-2xl">
        <div className="relative aspect-[4/3] w-full">
          <Image src={HERO_IMAGES.classroom} alt="A teacher running a lesson with Vora on the classroom screen" fill sizes="100vw" className="object-cover" />
        </div>
      </div>
      {SATELLITES.map((sat) => (
        <div key={sat.label} className="al-glass overflow-hidden rounded-2xl">
          <div className="relative aspect-square w-full">
            <Image src={sat.image} alt="" fill sizes="50vw" className="object-cover" />
          </div>
          <p className="px-2 py-1.5 text-center text-[10px] font-semibold text-white/80">{sat.label}</p>
        </div>
      ))}
    </div>
  );
}

export function Marketing() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#07070d] text-white">
      <div className="al-bg-dots al-animate-drift pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <span className="font-display text-lg font-bold text-white">
          AI Lab <span className="text-white/40">for Kids</span>
        </span>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/curriculum" className="font-semibold text-white/60 hover:text-white">
            Program Guide
          </Link>
          <Link href="/login" className="font-semibold text-white/60 hover:text-white">
            Log in
          </Link>
          <Link href="/signup">
            <Button variant="secondary" className="!px-4 !py-2 !text-sm">
              Sign up
            </Button>
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative px-6 pb-20 pt-10 sm:pb-28 sm:pt-16">
        <div
          className="al-animate-pulse-glow pointer-events-none absolute left-1/2 top-[22%] h-72 w-[40rem] max-w-[92vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo/25 blur-[110px]"
          aria-hidden="true"
        />
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-light">AI Literacy + English</p>
          <h1 className="font-display mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
            Kids don&apos;t just play with <span className="text-indigo-light">AI</span> — they learn how it thinks.
          </h1>
          <p className="mt-5 text-lg text-white/60">
            A full year of teacher-led lessons where English and real AI concepts are taught side by side, one
            screen, one class, with Vora leading the way.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/signup">
              <Button variant="primary" className="!rounded-full !px-8">
                Get started
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" className="!rounded-full !border !border-white/20 !bg-white/5 !px-8 !text-white hover:!bg-white/10">
                Teacher log in
              </Button>
            </Link>
          </div>
        </motion.div>

        <HeroConstellation />
        <MobileHeroImages />
      </section>

      {/* Features */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-light">Why it&apos;s different</p>
          <h2 className="font-display mt-3 text-3xl font-bold">Not an English app with an AI sticker on it</h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="al-glass flex flex-col gap-3 rounded-3xl p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo/20 text-indigo-light">
                <f.icon size={22} />
              </span>
              <p className="font-display text-lg font-bold">{f.title}</p>
              <p className="text-sm text-white/60">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-light">A whole year with Vora</p>
          <h2 className="font-display mt-3 text-3xl font-bold">12 themed units, one big idea each</h2>
        </motion.div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {GALLERY_MONTHS.map((key, i) => {
            const month = MONTHS.find((m) => m.key === key);
            if (!month) return null;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="al-glass overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-square w-full">
                  <Image src={MONTH_IMAGE[key]} alt="" fill sizes="200px" className="object-cover" />
                </div>
                <p className="px-2 py-2 text-center text-xs font-semibold text-white/80">{month.title}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-6 pb-24 pt-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="al-glass mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-3xl p-10 text-center"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber/20 text-amber">
            <SparkleIcon size={24} />
          </span>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Ready to bring Vora into your classroom?</h2>
          <p className="max-w-md text-sm text-white/60">
            Create your teacher account — a school admin approves it, then it&apos;s straight into the console.
          </p>
          <Link href="/signup">
            <Button variant="primary" className="!rounded-full !px-8">
              Create your account
            </Button>
          </Link>
        </motion.div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-xs text-white/40">
        AI Lab for Kids — teacher-led AI literacy &amp; English, for ages 4-8.
      </footer>
    </div>
  );
}
