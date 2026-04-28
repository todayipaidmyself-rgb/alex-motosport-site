const features = [
  {
    title: "Kayo Bikes",
    description:
      "Starter and off-road bikes available through Alex Motosport. Enquire for current models, pricing and availability.",
  },
  {
    title: "Riding Gear",
    description:
      "Helmets, jackets, gloves, boots and protection for road, motocross and enduro riders.",
  },
  {
    title: "Parts & Accessories",
    description:
      "Chains, sprockets, brakes, tires, guards, mounts and everyday motorcycle essentials.",
  },
];

export const Features = () => {
  return (
    <section className="bg-black text-white py-[72px] md:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl md:text-6xl tracking-tighter">What We Offer</h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">Everything riders need in one local Paphos store — bikes, gear, parts and sourcing support.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {features.map(({ title, description }) => (
            <article
              key={title}
              className="group rounded-[24px] border border-white/10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_60px_rgba(0,0,0,0.35)] transition duration-300 hover:border-[rgba(186,64,112,0.38)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_60px_rgba(0,0,0,0.35),0_0_30px_rgba(217,75,75,0.08),0_0_28px_rgba(168,85,247,0.08)]"
            >
              <div className="h-1 w-14 rounded-full bg-[linear-gradient(to_right,rgba(217,75,75,0.8),rgba(168,85,247,0.7))]"></div>
              <h3 className="mt-6 text-2xl font-bold tracking-tight">{title}</h3>
              <p className="mt-4 text-white/70">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
