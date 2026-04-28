export const CallToAction = () => {
  return (
    <section className="bg-black py-[72px] text-white md:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(10,10,10,1),rgba(31,15,58,0.98),rgba(15,15,15,1))] px-6 py-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_60px_rgba(124,58,237,0.14)] md:px-10 md:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_35%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(217,75,75,0.12),transparent_32%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,transparent,rgba(255,255,255,0.03))]"></div>

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold tracking-tighter md:text-5xl">
              Need Something Specific?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
              Seen a bike, helmet, part or accessory you want? Message Alex Motosport
              directly and we&apos;ll help confirm availability, pricing and sourcing options.
            </p>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 font-medium text-black transition duration-300 hover:bg-[#fff1f1] hover:shadow-[0_0_24px_rgba(217,75,75,0.24),0_0_32px_rgba(168,85,247,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d94b4b]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
