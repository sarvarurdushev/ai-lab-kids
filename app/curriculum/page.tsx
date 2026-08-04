import type { Metadata } from "next";
import { ProgramGuideContent } from "@/components/curriculum/ProgramGuideContent";

export const metadata: Metadata = {
  title: "Program Guide — AI Lab for Kids",
  description:
    "The full year-long AI-literacy + English curriculum for Korean elementary classrooms: objectives, standards, and activities for every lesson.",
};

export default function CurriculumPage() {
  return <ProgramGuideContent />;
}
