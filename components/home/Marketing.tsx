"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { MONTH_IMAGE, MONTHS, curriculumStats } from "@/lib/curriculum";
import {
  RobotHeadIcon,
  GamepadIcon,
  GlobeIcon,
  SparkleIcon,
  RunIcon,
} from "@/components/icons";
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
import { StarBurst } from "@/components/editorial/decor/StarBurst";
import { OrbitRing } from "@/components/editorial/decor/OrbitRing";
import { LetterTile } from "@/components/editorial/decor/LetterTile";
import { SpeechBubble } from "@/components/editorial/decor/SpeechBubble";
import { HandUnderline } from "@/components/editorial/decor/HandUnderline";
import { HandArrow } from "@/components/editorial/decor/HandArrow";
import { Annotation } from "@/components/editorial/decor/Annotation";
import { ScrollCue } from "@/components/editorial/decor/ScrollCue";
import { ConnectorLine } from "@/components/editorial/decor/ConnectorLine";
import { Magnetic } from "@/components/editorial/decor/Magnetic";
import {
  usePointerParallax,
  ParallaxLayer,
} from "@/components/editorial/decor/usePointerParallax";
import { usePinnedTrack } from "@/components/editorial/decor/usePinnedTrack";
import {
  useScrollExitDrift,
  ScrollExitLayer,
} from "@/components/editorial/decor/useScrollExitDrift";
import { OFFSET_Y } from "@/components/editorial/tokens";
import {
  fadeUp,
  stagger,
  VIEWPORT_SECTION,
} from "@/components/editorial/motion";
import { useDictionary } from "@/components/i18n/LocaleProvider";
import type { Dictionary } from "@/lib/i18n/getDictionary";

const FEATURE_ICON = {
  realAiIdeas: RobotHeadIcon,
  oneScreen: GamepadIcon,
  wholeYear: GlobeIcon,
  genuinelyFun: RunIcon,
} as const;

type FeatureKey = keyof typeof FEATURE_ICON;

const FEATURE_KEYS: FeatureKey[] = [
  "realAiIdeas",
  "oneScreen",
  "wholeYear",
  "genuinelyFun",
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
  const dict = useDictionary();
  const {
    ref: heroParallaxRef,
    mx: heroMx,
    my: heroMy,
  } = usePointerParallax<HTMLDivElement>();
  const { ref: heroExitRef, exitProgress } =
    useScrollExitDrift<HTMLDivElement>();
  return (
    <div ref={heroExitRef}>
      <Section
        variant="split"
        size="major"
        rule="none"
        className="pt-4 sm:pt-8"
      >
        <GridItem span={7} className="relative z-10">
          <motion.div variants={stagger(0.08)} initial="hidden" animate="show">
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold tracking-[0.18em] text-navy/70 uppercase"
            >
              {dict.hero.eyebrow}
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-editorial al-optical-display mt-5 text-[clamp(2.75rem,8.5vw,6.5rem)] leading-[0.95] font-extrabold tracking-[-0.03em] text-navy"
            >
              {dict.hero.titleBefore}
              <span className="relative inline-block">
                {dict.hero.titleUnderlined}
                <HandUnderline />
              </span>
              {dict.hero.titleAfter}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[46ch] text-[17px] leading-[1.55] text-slate sm:text-lg"
            >
              {dict.hero.subtitle}
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Magnetic>
                <EditorialLinkButton href="/signup" size="lg">
                  {dict.common.getStarted}
                </EditorialLinkButton>
              </Magnetic>
              <EditorialLinkButton href="/login" variant="outline" size="lg">
                {dict.common.teacherLogin}
              </EditorialLinkButton>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="mt-6 font-mono text-xs text-terminal-dim"
            >
              <span className="text-terminal">$</span> {dict.hero.terminalLine}
            </motion.p>
          </motion.div>

          <div className="mt-10 flex items-center gap-2 lg:mt-16">
            <HandArrow direction="down-right" size={40} />
            <Annotation tilt={-1}>{dict.hero.annotation}</Annotation>
          </div>
        </GridItem>

        <GridItem
          span={5}
          start={8}
          className="relative mt-14 hidden min-h-[420px] lg:block"
        >
          <div ref={heroParallaxRef} className="relative h-full w-full">
            <ScrollExitLayer
              progress={exitProgress}
              dx={-130}
              dy={90}
              className="absolute inset-0"
            >
              <ParallaxLayer
                x={heroMx}
                y={heroMy}
                depth={4}
                className="absolute inset-0"
              >
                <ConnectorLine
                  className="hidden lg:block"
                  viewBox={{ w: 500, h: 420 }}
                  points={[
                    { x: 0, y: 40 },
                    { x: 140, y: 120 },
                    { x: 260, y: 90 },
                  ]}
                  accent="sky"
                  labels={[
                    {
                      x: 40,
                      y: 20,
                      text: dict.hero.perceptionLabel,
                      accent: "sky",
                    },
                  ]}
                />
              </ParallaxLayer>
            </ScrollExitLayer>
            <ScrollExitLayer
              progress={exitProgress}
              dx={150}
              dy={110}
              className="absolute inset-0"
            >
              <ParallaxLayer
                x={heroMx}
                y={heroMy}
                depth={4}
                className="absolute inset-0"
              >
                <ConnectorLine
                  className="hidden lg:block"
                  viewBox={{ w: 500, h: 420 }}
                  points={[
                    { x: 500, y: 60 },
                    { x: 380, y: 140 },
                    { x: 300, y: 100 },
                  ]}
                  accent="amber"
                  labels={[
                    {
                      x: 470,
                      y: 30,
                      text: dict.hero.reasoningLabel,
                      accent: "amber",
                    },
                  ]}
                  seed={2}
                />
              </ParallaxLayer>
            </ScrollExitLayer>
            <ScrollExitLayer
              progress={exitProgress}
              dx={-45}
              dy={215}
              className="absolute inset-0"
            >
              <ParallaxLayer
                x={heroMx}
                y={heroMy}
                depth={4}
                className="absolute inset-0"
              >
                <ConnectorLine
                  className="hidden lg:block"
                  viewBox={{ w: 500, h: 420 }}
                  points={[
                    { x: 280, y: 400 },
                    { x: 300, y: 300 },
                    { x: 290, y: 220 },
                  ]}
                  accent="mint"
                  labels={[
                    {
                      x: 260,
                      y: 400,
                      text: dict.hero.learningLabel,
                      accent: "mint",
                    },
                  ]}
                  seed={3}
                />
              </ParallaxLayer>
            </ScrollExitLayer>

            <CollageFigure
              className="h-full w-full"
              pointerX={heroMx}
              pointerY={heroMy}
              exitProgress={exitProgress}
              layers={[
                {
                  key: "scrapPebble",
                  node: (
                    <HalftoneBlob
                      shape="pebble"
                      accent="coral"
                      size={200}
                      role="field"
                      texture="fine"
                      opacity={0.45}
                    />
                  ),
                  top: "28%",
                  left: "72%",
                  z: 0,
                  tilt: 2,
                  delay: 0.1,
                  exit: { x: 140, y: 30 },
                },
                {
                  key: "sun",
                  node: (
                    <SunDisc
                      variant="half-top"
                      accent="amber"
                      size={340}
                      ring
                    />
                  ),
                  top: "62%",
                  left: "58%",
                  z: 0,
                  exit: { x: 60, y: 55 },
                },
                {
                  key: "polygon",
                  node: <NavyPolygon />,
                  top: "68%",
                  left: "42%",
                  z: 1,
                  delay: 0.06,
                  exit: { x: -85, y: 75 },
                },
                {
                  key: "scrapSplat",
                  node: (
                    <HalftoneBlob
                      shape="splat"
                      accent="mint"
                      size={120}
                      role="accent"
                      opacity={0.55}
                      misregister={6}
                    />
                  ),
                  top: "86%",
                  left: "6%",
                  z: 1,
                  tilt: -2,
                  delay: 0.14,
                  exit: { x: -155, y: 45 },
                },
                {
                  key: "cloud1",
                  node: <CloudShape accent="sky" size={80} />,
                  top: "10%",
                  left: "18%",
                  z: 2,
                  float: true,
                  delay: 0.18,
                  exit: { x: -115, y: 35 },
                },
                {
                  key: "cloud2",
                  node: <CloudShape accent="mint" size={60} />,
                  top: "22%",
                  left: "80%",
                  z: 2,
                  float: true,
                  floatIndex: 2,
                  delay: 0.22,
                  exit: { x: 125, y: 30 },
                },
                {
                  key: "cloud3",
                  node: <CloudShape accent="amber" size={44} opacity={0.6} />,
                  top: "4%",
                  left: "52%",
                  z: 2,
                  float: true,
                  floatIndex: 4,
                  delay: 0.26,
                  exit: { x: 20, y: 20 },
                },
                {
                  key: "starA",
                  node: <StarBurst accent="amber" size={30} />,
                  top: "16%",
                  left: "38%",
                  z: 3,
                  tilt: 1,
                  float: true,
                  floatIndex: 1,
                  delay: 0.3,
                  exit: { x: -55, y: 185 },
                },
                {
                  key: "starB",
                  node: <StarBurst accent="coral" size={20} />,
                  top: "44%",
                  left: "90%",
                  z: 3,
                  float: true,
                  floatIndex: 3,
                  delay: 0.34,
                  exit: { x: 150, y: 120 },
                },
                {
                  key: "orbit",
                  node: (
                    <OrbitRing accent="navy" size={310} rings={2} dots={2} />
                  ),
                  top: "70%",
                  left: "58%",
                  z: 3,
                  delay: 0.42,
                  exit: { x: 15, y: 200 },
                },
                {
                  key: "voraMini",
                  node: <Vora size={84} mood="excited" />,
                  top: "34%",
                  left: "14%",
                  z: 4,
                  tilt: -1,
                  float: true,
                  floatIndex: 6,
                  delay: 0.46,
                  exit: { x: -135, y: 145 },
                },
                {
                  key: "vora",
                  node: <Vora size={240} mood="happy" bob />,
                  top: "70%",
                  left: "58%",
                  z: 5,
                  delay: 0.3,
                  exit: { x: 25, y: 210 },
                },
                {
                  key: "letterA",
                  node: <LetterTile letter="A" accent="sky" size={62} />,
                  top: "88%",
                  left: "22%",
                  z: 5,
                  tilt: -2,
                  float: true,
                  floatIndex: 7,
                  delay: 0.5,
                  exit: { x: -125, y: 175 },
                },
                {
                  key: "bubble",
                  node: (
                    <SpeechBubble accent="amber" tail="down-left">
                      {dict.hero.bubble}
                    </SpeechBubble>
                  ),
                  top: "46%",
                  left: "86%",
                  z: 6,
                  tilt: 2,
                  delay: 0.55,
                  exit: { x: 115, y: 165 },
                },
                {
                  key: "terminal",
                  node: (
                    <div className="w-[300px]">
                      <TerminalCard size="hero" rain tilt={-1} />
                    </div>
                  ),
                  top: "96%",
                  left: "84%",
                  z: 7,
                  delay: 0.62,
                  exit: { x: 90, y: 145 },
                },
              ]}
            />
          </div>
        </GridItem>

        <div className="col-span-full mt-10 flex justify-end lg:mt-0">
          <ScrollCue />
        </div>
      </Section>
    </div>
  );
}

function NavyPolygon() {
  return (
    <svg
      width="180"
      height="160"
      viewBox="0 0 180 160"
      aria-hidden="true"
      className="text-navy"
    >
      <polygon
        points="10,160 60,30 95,80 130,10 170,160"
        fill="currentColor"
        opacity={0.85}
      />
    </svg>
  );
}

function Features() {
  const dict = useDictionary();
  return (
    <Section
      variant="full"
      size="major"
      rule="both"
      className="overflow-hidden"
    >
      <HalftoneBlob
        shape="splat"
        accent="amber"
        size={620}
        role="field"
        texture="fine"
        opacity={0.14}
        className="pointer-events-none absolute top-1/2 -right-52 z-0 hidden -translate-y-1/2 lg:block"
      />
      <GridItem span={12} className="relative z-10 mb-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_SECTION}
        >
          <p className="text-xs font-bold tracking-[0.18em] text-navy/70 uppercase">
            {dict.features.eyebrow}
          </p>
          <h2 className="font-editorial al-optical-mid mt-3 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-bold text-navy">
            {dict.features.title}
          </h2>
        </motion.div>
      </GridItem>
      {FEATURE_KEYS.map((key, i) => {
        const layout = FEATURE_LAYOUT[i];
        const Icon = FEATURE_ICON[key];
        const copy = dict.features.items[key];
        return (
          <GridItem
            key={key}
            span={layout.span}
            start={layout.start}
            className="relative z-10"
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT_SECTION}
              transition={{ ...fadeUp.show.transition, delay: (i % 2) * 0.1 }}
              className="group relative flex gap-5 border-t border-rule py-8"
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-navy transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <p className="font-editorial text-2xl leading-none font-extrabold text-navy/15 transition-colors duration-300 group-hover:text-amber-ink">{`0${i + 1}`}</p>
              <div className="flex-1">
                <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-navy/[0.06] text-navy">
                  <Icon size={22} />
                </span>
                <p className="font-editorial text-lg font-bold text-navy">
                  {copy.title}
                </p>
                <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-slate">
                  {copy.body}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="ml-auto hidden shrink-0 -translate-x-2 self-center text-xl text-navy opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block"
              >
                →
              </span>
            </motion.div>
          </GridItem>
        );
      })}
    </Section>
  );
}

// Uniform per-item coordinate cell for the ribbon's connector line: since
// every item in the single row has the same width, each point is exactly
// analytic (index * GALLERY_RIBBON_UNIT + half), no DOM measurement needed —
// unlike the ribbon's scroll-distance math, which does need one (see
// usePinnedTrack).
const GALLERY_RIBBON_UNIT = 100;

function GalleryStaticGrid() {
  return (
    <motion.div
      variants={stagger(0.05)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_SECTION}
      className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-16"
    >
      {MONTHS.map((month, i) => (
        <motion.div
          key={month.key}
          variants={fadeUp}
          className={OFFSET_Y[GALLERY_DRIFT[i % GALLERY_DRIFT.length]]}
        >
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
            {/* Month titles stay in English by explicit product decision — they're curriculum data (lib/curriculum/months.ts), not site chrome. */}
            <p className="mt-3 text-center text-xs font-semibold text-navy">
              {month.title}
            </p>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

/**
 * The scroll-pinned single-row alternative to GalleryStaticGrid: pins the
 * section for 300svh of scroll while the row translates horizontally, so
 * all 12 months read as one continuous filmstrip instead of a wrapping
 * grid. Only shown at lg+ with motion-safe (see the lg:motion-safe:block /
 * lg:motion-safe:hidden pair in Gallery()) — that CSS-only gate, not a JS
 * branch, is what keeps this from ever needing to reconcile against a
 * different server-rendered structure.
 */
function GalleryRibbon() {
  const { outerRef, trackRef, x, scrollToItem } = usePinnedTrack();
  const points = MONTHS.map((_, i) => ({
    x: i * GALLERY_RIBBON_UNIT + GALLERY_RIBBON_UNIT / 2,
    y: GALLERY_RIBBON_UNIT / 2,
  }));

  return (
    <div
      ref={outerRef}
      className="relative left-1/2 right-1/2 -mx-[50vw] h-[300svh] w-screen"
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="relative isolate flex h-full w-max items-center gap-12 pl-[8vw]"
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_SECTION}
        >
          <ConnectorLine
            viewBox={{
              w: MONTHS.length * GALLERY_RIBBON_UNIT,
              h: GALLERY_RIBBON_UNIT,
            }}
            points={points}
            accent="sky"
            className="-z-10 block"
            viewport={{ once: true, amount: "some" }}
          />
          {MONTHS.map((month, i) => (
            <motion.div
              key={month.key}
              variants={fadeUp}
              className={`relative w-[300px] shrink-0 ${OFFSET_Y[GALLERY_DRIFT[i % GALLERY_DRIFT.length]]}`}
            >
              <Link
                href={`/curriculum/${month.key}`}
                className="group block"
                onFocus={(e) => scrollToItem(e.currentTarget)}
              >
                <HalftonePhoto
                  src={MONTH_IMAGE[month.key]}
                  alt=""
                  shape="arch"
                  treatment="duotone"
                  revealOnHover
                  sizes="300px"
                  className="aspect-square w-full transition-transform duration-300 group-hover:-translate-y-1.5"
                />
                <p className="mt-3 text-center text-sm font-semibold text-navy">
                  {month.title}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function Gallery() {
  const dict = useDictionary();
  return (
    <Section variant="full" size="major" tone="paper">
      <GridItem span={12} className="mx-auto mb-12 max-w-2xl text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_SECTION}
        >
          <p className="text-xs font-bold tracking-[0.18em] text-navy/70 uppercase">
            {dict.gallery.eyebrow}
          </p>
          <h2 className="font-editorial al-optical-mid mt-3 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-bold text-navy">
            {dict.gallery.title}
          </h2>
        </motion.div>
      </GridItem>
      <GridItem span={12} className="lg:motion-safe:hidden">
        <GalleryStaticGrid />
      </GridItem>
      <div className="col-span-full hidden lg:motion-safe:block">
        <GalleryRibbon />
      </div>
      <div className="col-span-full mt-12 flex justify-center">
        <EditorialLinkButton href="/curriculum" variant="outline">
          {dict.gallery.cta}
        </EditorialLinkButton>
      </div>
    </Section>
  );
}

function UnderTheHood() {
  const dict = useDictionary();
  return (
    <Section
      variant="full"
      size="minor"
      tone="tint-amber"
      edge="torn-top"
      rule="none"
    >
      <GridItem span={5} className="flex flex-col justify-center">
        <p className="text-xs font-bold tracking-[0.18em] text-navy/70 uppercase">
          {dict.underTheHood.eyebrow}
        </p>
        <h2 className="font-editorial al-optical-mid mt-3 text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.05] font-bold text-navy">
          {dict.underTheHood.title}
        </h2>
        <div className="mt-6 flex items-center gap-2">
          <HandArrow direction="right" size={40} />
          <Annotation tilt={1}>{dict.underTheHood.annotation}</Annotation>
        </div>
      </GridItem>
      <GridItem span={6} start={7} className="mt-10 lg:mt-0">
        <TerminalCard size="hero" rain tilt={-1} className="mx-auto max-w-md" />
      </GridItem>
    </Section>
  );
}

function FinalCta() {
  const dict = useDictionary();
  const {
    ref: ctaParallaxRef,
    mx: ctaMx,
    my: ctaMy,
  } = usePointerParallax<HTMLDivElement>();
  return (
    <div ref={ctaParallaxRef} className="relative">
      <Section
        variant="offset-left"
        size="major"
        edge="curve-bottom"
        className="relative overflow-hidden"
      >
        <HalftoneBlob
          shape="cloud"
          accent="sky"
          size={480}
          role="field"
          texture="fine"
          opacity={0.5}
          className="pointer-events-none absolute -top-24 -left-40 hidden lg:block"
        />
        <ParallaxLayer
          x={ctaMx}
          y={ctaMy}
          depth={10}
          className="pointer-events-none absolute right-0 bottom-0 hidden translate-x-1/4 sm:block"
        >
          <SunDisc variant="half-bottom" accent="amber" size={420} ring />
        </ParallaxLayer>
        <GridItem span={8} className="relative">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_SECTION}
            className="flex flex-col gap-6"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber text-navy">
              <SparkleIcon size={24} />
            </span>
            <h2 className="font-editorial al-optical-mid text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] font-extrabold text-navy">
              {dict.finalCta.title}
            </h2>
            <p className="max-w-md text-lg text-slate">{dict.finalCta.body}</p>
            <div>
              <Magnetic>
                <EditorialLinkButton href="/signup" size="lg">
                  {dict.finalCta.cta}
                </EditorialLinkButton>
              </Magnetic>
            </div>
          </motion.div>
        </GridItem>
      </Section>
    </div>
  );
}

function homeStats(
  stats: ReturnType<typeof curriculumStats>,
  dict: Dictionary,
) {
  return [
    {
      value: stats.lessons,
      label: dict.homeStats.lessons,
      accent: "navy" as const,
    },
    {
      value: stats.activities,
      label: dict.homeStats.activities,
      accent: "amber" as const,
    },
    {
      value: stats.engineCount,
      label: dict.homeStats.engineTypes,
      accent: "sky" as const,
    },
    {
      value: stats.aiLabActivities,
      label: dict.homeStats.aiLiteracyActivities,
      accent: "coral" as const,
    },
  ];
}

export function Marketing() {
  const dict = useDictionary();
  const stats = curriculumStats();
  return (
    <EditorialShell noise>
      <EditorialNav />
      <Hero />
      <Rule className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12 xl:px-16" />
      <Section variant="full" size="minor" rule="none">
        <GridItem span={12}>
          <StatFigures stats={homeStats(stats, dict)} />
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
