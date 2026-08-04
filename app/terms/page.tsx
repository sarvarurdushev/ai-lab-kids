import type { Metadata } from "next";
import { TermsContent } from "@/components/legal/TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service — AI Lab for Kids",
  description: "The basics of using AI Lab for Kids.",
};

export default function TermsPage() {
  return <TermsContent />;
}
