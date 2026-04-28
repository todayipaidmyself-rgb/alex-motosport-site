import { Footer } from "@/sections/Footer";
import { Navbar } from "@/sections/Navbar";
import { PageHero } from "@/sections/PageHero";

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Shop"
        intro="Browse the full Motorace catalogue, then send Alex Motosport what you need and we’ll help source it locally."
      />
      <Footer />
    </>
  );
}
