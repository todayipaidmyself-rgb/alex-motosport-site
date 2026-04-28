import { AvailableBrands } from "@/sections/AvailableBrands";
import { Banner } from "@/sections/Banner";
import { InsideAlexMotosport } from "@/sections/InsideAlexMotosport";
import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { PromoBannerSlider } from "@/sections/PromoBannerSlider";
import { TrustStrip } from "@/sections/TrustStrip";
import { Features } from "@/sections/Features";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <TrustStrip />
      <InsideAlexMotosport />
      <Features />
      <AvailableBrands />
      <PromoBannerSlider />
      <CallToAction />
      <Footer />
    </>
  );
}
