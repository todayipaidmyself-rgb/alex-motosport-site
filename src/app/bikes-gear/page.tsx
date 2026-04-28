import { BikesGearFAQs } from "@/sections/BikesGearFAQs";
import { CustomSourcingCTA } from "@/sections/CustomSourcingCTA";
import { Footer } from "@/sections/Footer";
import { GearAccessoriesGrid } from "@/sections/GearAccessoriesGrid";
import { KayoBikesGrid } from "@/sections/KayoBikesGrid";
import { Navbar } from "@/sections/Navbar";
import { PageHero } from "@/sections/PageHero";

export default function BikesAndGearPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Bikes & Gear"
        intro="Kayo motorbikes, helmets, riding gear, parts and accessories sourced locally through Alex Motosport and trusted Cyprus supply partners."
      />
      <KayoBikesGrid />
      <GearAccessoriesGrid />
      <CustomSourcingCTA />
      <BikesGearFAQs />
      <Footer />
    </>
  );
}
