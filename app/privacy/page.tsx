import type { Metadata } from "next";
import { PrivacyContent } from "@/components/legal/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy — AI Lab for Kids",
  description: "What AI Lab for Kids collects, stores, and never touches.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
