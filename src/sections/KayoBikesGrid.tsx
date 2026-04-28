const bikes = [
  {
    name: "Kayo K2 250",
    specs: "250cc, manual, adults",
    price: "Price on enquiry",
  },
  {
    name: "Kayo T4 250 Enduro",
    specs: "250cc, manual, adults",
    price: "Price on enquiry",
  },
  {
    name: "Kayo TT 140",
    specs: "140cc, manual, youth",
    price: "Price on enquiry",
  },
  {
    name: "Kayo AU 200 ATV",
    specs: "200cc, automatic, all-terrain",
    price: "Price on enquiry",
  },
];

export const KayoBikesGrid = () => {
  return (
    <section className="bg-black py-[72px] text-white md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tighter md:text-5xl">Kayo Bikes</h2>
          <p className="mt-5 text-lg text-white/70">
            Explore a starter range of Kayo models available through Alex Motosport.
            Final models, availability and pricing can be confirmed on enquiry.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {bikes.map((bike) => (
            <article
              key={bike.name}
              className="group rounded-3xl border border-white/10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm transition duration-300 hover:scale-[1.02] hover:border-[rgba(186,64,112,0.38)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_80px_rgba(0,0,0,0.45),0_0_36px_rgba(217,75,75,0.08)]"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(10,10,10,1),rgba(35,16,67,0.95),rgba(18,18,18,1))] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_40px_rgba(124,58,237,0.15)] transition duration-300 group-hover:border-[rgba(186,64,112,0.34)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_45%)] opacity-80 transition duration-300 group-hover:opacity-100"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(217,75,75,0.12),transparent_42%)] opacity-70 transition duration-300 group-hover:opacity-100"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,transparent,rgba(255,255,255,0.04))] transition duration-300 group-hover:scale-105 group-hover:brightness-110"></div>
                <div className="relative flex aspect-[4/3] items-center justify-center text-center text-sm uppercase tracking-[0.2em] text-white/45 transition duration-300 group-hover:scale-[1.03] group-hover:text-white/55">
                  Visual preview pending
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-bold tracking-tight">{bike.name}</h3>
                <p className="mt-2 text-white/65">{bike.specs}</p>
                <p className="mt-4 text-xl font-semibold text-white">{bike.price}</p>
              </div>

              <button className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 font-medium text-black transition duration-300 hover:bg-[#fff1f1] hover:shadow-[0_0_24px_rgba(217,75,75,0.24),0_0_32px_rgba(168,85,247,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d94b4b]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                Enquire About This Bike
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
