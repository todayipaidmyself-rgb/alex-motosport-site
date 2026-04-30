import { AvailableBrands } from "@/sections/AvailableBrands";
import { InsideAlexMotosport } from "@/sections/InsideAlexMotosport";
import { Hero } from "@/sections/Hero";
import { PromoBannerSlider } from "@/sections/PromoBannerSlider";
import { TrustStrip } from "@/sections/TrustStrip";
import { Features } from "@/sections/Features";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AvailableBrands />
      <PromoBannerSlider />
      <Features />
      <InsideAlexMotosport />
      <CallToAction />
      <Footer />
    </>
  );
}
