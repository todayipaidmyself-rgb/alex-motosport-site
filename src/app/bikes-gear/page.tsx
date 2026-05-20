import type { Metadata } from "next";

import { BikesGearFAQs } from "@/sections/BikesGearFAQs";
import { BikesGearHeroSlider } from "@/sections/BikesGearHeroSlider";
import { CustomSourcingCTA } from "@/sections/CustomSourcingCTA";
import { Footer } from "@/sections/Footer";
import { GearAccessoriesGrid } from "@/sections/GearAccessoriesGrid";
import { KayoBikesGrid } from "@/sections/KayoBikesGrid";
import { RepairsServiceSection } from "@/sections/RepairsServiceSection";
import { WhyAlexMotosport } from "@/sections/WhyAlexMotosport";

export const metadata: Metadata = {
  title: "Bikes & Gear in Paphos | Alex Motosport",
  description:
    "Explore Kayo bikes, helmets, riding gear, parts and accessories available through Alex Motosport in Paphos, Cyprus.",
  alternates: {
    canonical: "https://alexmotosport.com/bikes-gear",
  },
};

export default function BikesAndGearPage() {
  return (
    <main>
      <BikesGearHeroSlider />
      <WhyAlexMotosport />
      <KayoBikesGrid />
      <GearAccessoriesGrid />
      <RepairsServiceSection />
      <CustomSourcingCTA />
      <BikesGearFAQs />
      <Footer />
    </main>
  );
}