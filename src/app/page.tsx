import type { Metadata } from "next";

import { AvailableBrands } from "@/sections/AvailableBrands";
import { GallerySlider } from "@/sections/GallerySlider";
import { InsideAlexMotosport } from "@/sections/InsideAlexMotosport";
import { Hero } from "@/sections/Hero";
import { PromoBannerSlider } from "@/sections/PromoBannerSlider";
import { TrustStrip } from "@/sections/TrustStrip";
import { Features } from "@/sections/Features";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";

export const metadata: Metadata = {
  title:
    "Alex Motosport Paphos | Kayo Bikes, Riding Gear & Motorcycle Parts Cyprus",
  description:
    "Alex Motosport in Paphos supplies Kayo bikes, motorcycle gear, helmets, parts and rider accessories across Cyprus. Visit the showroom or enquire online.",
  alternates: {
    canonical: "https://alexmotosport.com/",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <AvailableBrands />
      <PromoBannerSlider />
      <Features />
      <GallerySlider />
      <InsideAlexMotosport />
      <CallToAction />
      <Footer />
    </main>
  );
}