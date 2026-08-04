import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact — AI Lab for Kids",
  description: "Get in touch about AI Lab for Kids.",
};

export default function ContactPage() {
  return <ContactContent />;
}
