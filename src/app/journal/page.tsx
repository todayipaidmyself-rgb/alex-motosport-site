import type { Metadata } from "next";

import JournalClient from "@/app/journal/JournalClient";

export const metadata: Metadata = {
  title: "Motorcycle Journal Cyprus | Alex Motosport",
  description:
    "Motorcycle tips, riding gear guides, maintenance advice and product updates from Alex Motosport in Paphos, Cyprus.",
  alternates: {
    canonical: "https://alexmotosport.com/journal",
  },
  authors: [
    {
      name: "Gustavo",
      url: "https://createdbygustavo.com",
    },
  ],
};

export default function JournalPage() {
  return <JournalClient />;
}