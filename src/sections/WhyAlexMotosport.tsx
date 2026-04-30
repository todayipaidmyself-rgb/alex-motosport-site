const reasons = [
  {
    title: "Local Paphos Support",
    text: "Practical help from someone local, whether you need a bike, riding gear, parts or workshop support.",
  },
  {
    title: "Repairs & Servicing",
    text: "Support for diagnostics, servicing and getting your bike back on the road without unnecessary work.",
  },
  {
    title: "Trusted Sourcing",
    text: "Help sourcing bikes, parts and accessories through trusted suppliers, including Motorace product links.",
  },
];

export const WhyAlexMotosport = () => {
  return (
    <section className="bg-black py-[56px] text-white md:py-[72px]">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tighter md:text-5xl">Why Alex Motosport</h2>
          <p className="mt-5 text-lg text-white/70">
            One local point of contact for bikes, gear, repairs and sourcing support in Paphos.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-[28px] border border-white/10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm transition duration-300 hover:border-[rgba(186,64,112,0.32)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_80px_rgba(0,0,0,0.45),0_0_24px_rgba(168,85,247,0.08)]"
            >
              <h3 className="text-2xl font-bold tracking-tight">{reason.title}</h3>
              <p className="mt-4 text-white/70">{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
