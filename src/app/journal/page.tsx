import { Footer } from "@/sections/Footer";
import { Navbar } from "@/sections/Navbar";
import { PageHero } from "@/sections/PageHero";

export default function JournalPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Journal"
        intro="Practical motorcycle guides, riding advice and product insights for riders across Paphos and Cyprus."
      />
      <Footer />
    </>
  );
}
