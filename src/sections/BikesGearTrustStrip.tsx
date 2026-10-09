const trustItems = [
  "Local Paphos support",
  "Motorace sourcing help",
  "Repairs support",
  "Availability confirmed on enquiry",
];

export const BikesGearTrustStrip = () => {
  return (
    <section className="bg-black pb-4 text-white md:pb-6">
      <div className="container">
        <div className="rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] px-4 py-3 shadow-[0_14px_40px_rgba(0,0,0,0.25)]">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-[11px] uppercase tracking-[0.22em] text-white/62 sm:text-xs">
            {trustItems.map((item, index) => (
              <div key={item} className="flex items-center gap-4">
                {index > 0 ? (
                  <span
                    aria-hidden="true"
                    className="hidden h-1 w-1 rounded-full bg-[#b794f4]/70 sm:inline-flex"
                  />
                ) : null}
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
