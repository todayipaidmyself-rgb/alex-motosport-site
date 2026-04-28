import { AccordionItem } from "@/components/AccordionItem";

const items = [
  {
    question: "Do you sell Kayo motorbikes in Paphos?",
    answer:
      "Yes. Alex Motosport can help source Kayo motorbikes and confirm current availability, model options and pricing.",
  },
  {
    question: "Can Alex Motosport source products from Motorace?",
    answer:
      "Yes. If you find a bike, helmet, part or accessory on Motorace, send us the product link and we can help with local sourcing from Paphos.",
  },
  {
    question: "Do you sell helmets and riding gear?",
    answer:
      "Yes. We can source helmets, gloves, jackets, boots and protection gear for road, off-road and motocross riders.",
  },
  {
    question: "Do you sell motorcycle parts and accessories in Cyprus?",
    answer:
      "Yes. We can help source chains, sprockets, brakes, protection parts, luggage, mounts and everyday motorcycle essentials.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const BikesGearFAQs = () => {
  return (
    <section className="bg-[linear-gradient(to_bottom,#000,#160a2d_40%,#000)] py-[72px] text-white md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/55">FAQ</p>
          <h2 className="mt-5 text-4xl font-bold tracking-tighter md:text-5xl">
            Bikes & Gear Questions
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
            Quick answers about Kayo bikes, riding gear, accessories and local sourcing
            support from Alex Motosport in Paphos.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-[32px] border border-white/10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] px-6 py-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm md:px-8">
          {items.map(({ question, answer }) => (
            <AccordionItem key={question} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </section>
  );
};
