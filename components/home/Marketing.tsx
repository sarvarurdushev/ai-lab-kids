"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { MONTH_IMAGE, MONTHS, curriculumStats } from "@/lib/curriculum";
import { RobotHeadIcon, GamepadIcon, GlobeIcon, SparkleIcon, RunIcon } from "@/components/icons";
import { Vora } from "@/components/mascot/Vora";
import { EditorialShell } from "@/components/editorial/EditorialShell";
import { EditorialNav } from "@/components/editorial/EditorialNav";
import { EditorialFooter } from "@/components/editorial/EditorialFooter";
import { EditorialLinkButton } from "@/components/editorial/EditorialButton";
import { Section } from "@/components/editorial/Section";
import { GridItem } from "@/components/editorial/Grid";
import { Rule } from "@/components/editorial/Rule";
import { StatFigures } from "@/components/editorial/StatFigures";
import { CollageFigure } from "@/components/editorial/CollageFigure";
import { HalftonePhoto } from "@/components/editorial/HalftonePhoto";
import { TerminalCard } from "@/components/editorial/TerminalCard";
import { HalftoneBlob } from "@/components/editorial/decor/HalftoneBlob";
import { CloudShape } from "@/components/editorial/decor/CloudShape";
import { SunDisc } from "@/components/editorial/decor/SunDisc";
import { HandUnderline } from "@/components/editorial/decor/HandUnderline";
import { HandArrow } from "@/components/editorial/decor/HandArrow";
import { Annotation } from "@/components/editorial/decor/Annotation";
import { ScrollCue } from "@/components/editorial/decor/ScrollCue";
import { ConnectorLine } from "@/components/editorial/decor/ConnectorLine";
import { OFFSET_Y } from "@/components/editorial/tokens";
import { fadeUp, stagger, VIEWPORT_SECTION } from "@/components/editorial/motion";

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

const FEATURE_LAYOUT: { start: number; span: number }[] = [
  { start: 1, span: 6 },
  { start: 7, span: 6 },
  { start: 2, span: 6 },
  { start: 7, span: 6 },
];

// Repeating drift pattern applied per tile index — purely decorative, and
// since every tile shares the same grid span, no combination of indices can
// ever reproduce the old dead-gap bug (see Gallery()).
const GALLERY_DRIFT: (-1 | 0 | 1)[] = [0, 1, -1, 0, -1, 1];

function Hero() {
  return (
    <Section variant="split" size="major" rule="none" className="pt-4 sm:pt-8">
      <GridItem span={7} className="relative z-10">
        <motion.div variants={stagger(0.08)} initial="hidden" animate="show">
          <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.18em] text-navy/70 uppercase">
            AI literacy + English · Ages 4-8
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-editorial al-optical-display mt-5 text-[clamp(2.75rem,8.5vw,6.5rem)] leading-[0.95] font-extrabold tracking-[-0.03em] text-navy"
          >
            Kids don&apos;t just play with{" "}
            <span className="relative inline-block">
              AI
              <HandUnderline />
            </span>{" "}
            — they learn how it thinks.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-[46ch] text-[17px] leading-[1.55] text-slate sm:text-lg">
            A full year of teacher-led lessons where English and real AI concepts are taught side by side, one
            screen, one class, with Vora leading the way.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <EditorialLinkButton href="/signup" size="lg">
              Get started
            </EditorialLinkButton>
            <EditorialLinkButton href="/login" variant="outline" size="lg">
              Teacher log in
            </EditorialLinkButton>
          </motion.div>
          <motion.p variants={fadeUp} className="mt-6 font-mono text-xs text-terminal-dim">
            <span className="text-terminal">$</span> 72 lessons · 0 live AI calls
          </motion.p>
        </motion.div>

        <div className="mt-10 flex items-center gap-2 lg:mt-16">
          <HandArrow direction="down-right" size={40} />
          <Annotation tilt={-1}>one screen, one teacher</Annotation>
        </div>
      </GridItem>

      <GridItem span={5} start={8} className="relative mt-14 hidden min-h-[420px] lg:block">
        <ConnectorLine
          className="hidden lg:block"
          viewBox={{ w: 500, h: 420 }}
          points={[
            { x: 0, y: 40 },
            { x: 140, y: 120 },
            { x: 260, y: 90 },
          ]}
          accent="sky"
          labels={[{ x: 40, y: 20, text: "Perception", accent: "sky" }]}
        />
        <ConnectorLine
          className="hidden lg:block"
          viewBox={{ w: 500, h: 420 }}
          points={[
            { x: 500, y: 60 },
            { x: 380, y: 140 },
            { x: 300, y: 100 },
          ]}
          accent="amber"
          labels={[{ x: 470, y: 30, text: "Reasoning", accent: "amber" }]}
          seed={2}
        />
        <ConnectorLine
          className="hidden lg:block"
          viewBox={{ w: 500, h: 420 }}
          points={[
            { x: 280, y: 400 },
            { x: 300, y: 300 },
            { x: 290, y: 220 },
          ]}
          accent="mint"
          labels={[{ x: 260, y: 400, text: "Learning", accent: "mint" }]}
          seed={3}
        />

        <CollageFigure
          className="h-full w-full"
          layers={[
            { key: "sun", node: <SunDisc variant="half-top" accent="amber" size={340} ring />, top: "62%", left: "58%", z: 0 },
            { key: "polygon", node: <NavyPolygon />, top: "68%", left: "42%", z: 1 },
            { key: "cloud1", node: <CloudShape accent="sky" size={80} />, top: "10%", left: "18%", z: 2, float: true },
            { key: "cloud2", node: <CloudShape accent="mint" size={60} />, top: "22%", left: "80%", z: 2, float: true, floatIndex: 2 },
            { key: "vora", node: <Vora size={220} mood="happy" bob />, top: "70%", left: "58%", z: 4 },
            {
              key: "terminal",
              node: (
                <div className="w-[300px]">
                  <TerminalCard size="hero" rain tilt={-1} />
                </div>
              ),
              top: "94%",
              left: "82%",
              z: 5,
              delay: 0.5,
            },
          ]}
        />
      </GridItem>

      <div className="col-span-full mt-10 flex justify-end lg:mt-0">
        <ScrollCue />
      </div>
    </Section>
  );
}

function NavyPolygon() {
  return (
    <svg width="180" height="160" viewBox="0 0 180 160" aria-hidden="true" className="text-navy">
      <polygon points="10,160 60,30 95,80 130,10 170,160" fill="currentColor" opacity={0.85} />
    </svg>
  );
}

function Features() {
  return (
    <Section variant="full" size="major" rule="both">
      <GridItem span={12} className="mb-14">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT_SECTION}>
          <p className="text-xs font-bold tracking-[0.18em] text-navy/70 uppercase">Why it&apos;s different</p>
          <h2 className="font-editorial al-optical-mid mt-3 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-bold text-navy">
            Not an English app with an AI sticker on it
          </h2>
        </motion.div>
      </GridItem>
      {FEATURES.map((f, i) => {
        const layout = FEATURE_LAYOUT[i];
        return (
          <GridItem key={f.title} span={layout.span} start={layout.start} className="relative">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT_SECTION}
              transition={{ ...fadeUp.show.transition, delay: (i % 2) * 0.1 }}
              className="relative flex gap-5 border-t border-rule py-8"
            >
              {i % 2 === 0 && (
                <HalftoneBlob shape={i === 0 ? "pebble" : "splat"} accent="amber" size={140} opacity={0.5} className="pointer-events-none absolute -top-6 -left-16 hidden xl:block" />
              )}
              <p className="relative z-10 font-editorial text-2xl leading-none font-extrabold text-navy/15">{`0${i + 1}`}</p>
              <div className="relative z-10">
                <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-navy/[0.06] text-navy">
                  <f.icon size={22} />
                </span>
                <p className="font-editorial text-lg font-bold text-navy">{f.title}</p>
                <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-slate">{f.body}</p>
              </div>
            </motion.div>
          </GridItem>
        );
      })}
    </Section>
  );
}

function Gallery() {
  return (
    <Section variant="full" size="major" tone="paper">
      <GridItem span={12} className="mx-auto mb-12 max-w-2xl text-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT_SECTION}>
          <p className="text-xs font-bold tracking-[0.18em] text-navy/70 uppercase">A whole year with Vora</p>
          <h2 className="font-editorial al-optical-mid mt-3 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-bold text-navy">
            12 themed units, one big idea each
          </h2>
        </motion.div>
      </GridItem>
      <GridItem span={12}>
        <motion.div
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_SECTION}
          className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-16"
        >
          {MONTHS.map((month, i) => (
            <motion.div key={month.key} variants={fadeUp} className={OFFSET_Y[GALLERY_DRIFT[i % GALLERY_DRIFT.length]]}>
              <Link href={`/curriculum/${month.key}`} className="group block">
                <HalftonePhoto
                  src={MONTH_IMAGE[month.key]}
                  alt=""
                  shape="arch"
                  treatment="duotone"
                  revealOnHover
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 45vw"
                  className="aspect-square w-full transition-transform duration-300 group-hover:-translate-y-1.5"
                />
                <p className="mt-3 text-center text-xs font-semibold text-navy">{month.title}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </GridItem>
      <div className="col-span-full mt-12 flex justify-center">
        <EditorialLinkButton href="/curriculum" variant="outline">
          See the full Program Guide
        </EditorialLinkButton>
      </div>
    </Section>
  );
}

function UnderTheHood() {
  return (
    <Section variant="full" size="minor" tone="tint-amber" edge="torn-top" rule="none">
      <GridItem span={5} className="flex flex-col justify-center">
        <p className="text-xs font-bold tracking-[0.18em] text-navy/70 uppercase">Peek under the hood</p>
        <h2 className="font-editorial al-optical-mid mt-3 text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.05] font-bold text-navy">
          Every lesson is scripted. Nothing is a live model.
        </h2>
        <div className="mt-6 flex items-center gap-2">
          <HandArrow direction="right" size={40} />
          <Annotation tilt={1}>yes, really 72 lessons</Annotation>
        </div>
      </GridItem>
      <GridItem span={6} start={7} className="mt-10 lg:mt-0">
        <TerminalCard size="hero" rain tilt={-1} className="mx-auto max-w-md" />
      </GridItem>
    </Section>
  );
}

function FinalCta() {
  return (
    <Section variant="offset-left" size="major" edge="curve-bottom" className="relative overflow-hidden">
      <HalftoneBlob shape="cloud" accent="sky" size={220} opacity={0.4} className="pointer-events-none absolute top-4 -left-16 hidden lg:block" />
      <SunDisc
        variant="half-bottom"
        accent="amber"
        size={420}
        ring
        className="pointer-events-none absolute right-0 bottom-0 hidden translate-x-1/4 sm:block"
      />
      <GridItem span={8} className="relative">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT_SECTION} className="flex flex-col gap-6">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber text-navy">
            <SparkleIcon size={24} />
          </span>
          <h2 className="font-editorial al-optical-mid text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] font-extrabold text-navy">
            Ready to bring Vora into your classroom?
          </h2>
          <p className="max-w-md text-lg text-slate">
            Create your teacher account — a school admin approves it, then it&apos;s straight into the console.
          </p>
          <div>
            <EditorialLinkButton href="/signup" size="lg">
              Create your account
            </EditorialLinkButton>
          </div>
        </motion.div>
      </GridItem>
    </Section>
  );
}

export function Marketing() {
  const stats = curriculumStats();
  return (
    <EditorialShell noise>
      <EditorialNav />
      <Hero />
      <Rule className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12 xl:px-16" />
      <Section variant="full" size="minor" rule="none">
        <GridItem span={12}>
          <StatFigures
            stats={[
              { value: stats.lessons, label: "lessons authored", accent: "navy" },
              { value: stats.activities, label: "activities", accent: "amber" },
              { value: stats.engineCount, label: "engine types", accent: "sky" },
              { value: stats.aiLabActivities, label: "AI-literacy activities", accent: "coral" },
            ]}
          />
        </GridItem>
      </Section>
      <Features />
      <Gallery />
      <UnderTheHood />
      <FinalCta />
      <EditorialFooter />
    </EditorialShell>
  );
}
