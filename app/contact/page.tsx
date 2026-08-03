import type { Metadata } from "next";
import { EditorialShell } from "@/components/editorial/EditorialShell";
import { EditorialNav } from "@/components/editorial/EditorialNav";
import { EditorialFooter } from "@/components/editorial/EditorialFooter";
import { Section } from "@/components/editorial/Section";
import { GridItem } from "@/components/editorial/Grid";
import { CollageFigure } from "@/components/editorial/CollageFigure";
import { SunDisc } from "@/components/editorial/decor/SunDisc";
import { CloudShape } from "@/components/editorial/decor/CloudShape";
import { HandArrow } from "@/components/editorial/decor/HandArrow";
import { Annotation } from "@/components/editorial/decor/Annotation";
import { Rule } from "@/components/editorial/Rule";
import { Vora } from "@/components/mascot/Vora";

export const metadata: Metadata = {
  title: "Contact — AI Lab for Kids",
  description: "Get in touch about AI Lab for Kids.",
};

export default function ContactPage() {
  return (
    <EditorialShell>
      <EditorialNav />
      <Section variant="split" size="major" className="flex-1">
        <GridItem span={7}>
          <p className="text-xs font-bold tracking-[0.18em] text-navy/70 uppercase">Get in touch</p>
          <h1 className="font-editorial al-optical-display mt-4 text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] font-extrabold tracking-[-0.03em] text-navy">
            Say hello.
          </h1>
          <p className="mt-6 max-w-[46ch] text-[17px] leading-[1.55] text-slate sm:text-lg">
            Questions about bringing AI Lab for Kids into your school, a bug to report, or anything else — reach out
            and a real person will get back to you.
          </p>
          <a
            href="mailto:hello@ailabforkids.example"
            className="font-editorial relative mt-8 inline-block text-[clamp(1.5rem,4vw,3rem)] font-extrabold text-navy after:absolute after:-bottom-1 after:left-0 after:h-[0.35em] after:w-full after:origin-left after:scale-x-0 after:bg-amber after:opacity-70 after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            hello@ailabforkids.example
          </a>
          <div className="mt-4 flex items-center gap-2">
            <HandArrow direction="up-right" size={36} />
            <Annotation tilt={-1}>a real person, usually within a day</Annotation>
          </div>
          <Rule className="mt-14 mb-6 max-w-[46ch]" />
          <p className="max-w-[46ch] text-sm font-semibold text-slate">
            Already a teacher on the platform? Your school admin can add or remove teacher access from the Admin
            panel inside the console.
          </p>
        </GridItem>
        <GridItem span={4} start={9} className="relative mt-16 hidden min-h-[280px] lg:block">
          <CollageFigure
            className="h-full w-full"
            layers={[
              { key: "sun", node: <SunDisc variant="half-top" accent="amber" size={220} ring />, top: "38%", left: "50%", z: 0 },
              { key: "cloud", node: <CloudShape accent="sky" size={90} />, top: "18%", left: "20%", z: 2, float: true },
              { key: "vora", node: <Vora size={160} mood="happy" bob />, top: "58%", left: "50%", z: 3 },
            ]}
          />
        </GridItem>
      </Section>
      <EditorialFooter />
    </EditorialShell>
  );
}
