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
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">
            Local Support
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
            Why Alex Motosport
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
            One local point of contact for bikes, gear, repairs and sourcing support in Paphos.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_70px_rgba(0,0,0,0.36)] transition duration-300 hover:border-white/20"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-white/35">
                0{index + 1}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                {reason.title}
              </h3>
              <p className="mt-4 text-white/68">{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
