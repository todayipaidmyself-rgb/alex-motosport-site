import { BikesGearFAQs } from "@/sections/BikesGearFAQs";
import { BikesGearHeroSlider } from "@/sections/BikesGearHeroSlider";
import { CustomSourcingCTA } from "@/sections/CustomSourcingCTA";
import { Footer } from "@/sections/Footer";
import { GearAccessoriesGrid } from "@/sections/GearAccessoriesGrid";
import { KayoBikesGrid } from "@/sections/KayoBikesGrid";
import { RepairsServiceSection } from "@/sections/RepairsServiceSection";
import { WhyAlexMotosport } from "@/sections/WhyAlexMotosport";

export default function BikesAndGearPage() {
  return (
    <>
      <BikesGearHeroSlider />
      <WhyAlexMotosport />
      <KayoBikesGrid />
      <GearAccessoriesGrid />
      <RepairsServiceSection />
      <CustomSourcingCTA />
      <BikesGearFAQs />
      <Footer />
    </>
  );
}
