"use client";

import { openEnquiryMenu, whatsappMessages } from "@/lib/contact";

export const CustomSourcingCTA = () => {
  return (
    <section className="bg-black py-[72px] text-white md:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(10,10,10,1),rgba(33,15,62,0.98),rgba(15,15,15,1))] px-6 py-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_60px_rgba(124,58,237,0.14)] md:px-10 md:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.2),transparent_35%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(217,75,75,0.12),transparent_30%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,transparent,rgba(255,255,255,0.03))]"></div>

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/55">Custom Sourcing</p>
            <h2 className="mt-5 text-4xl font-bold tracking-tighter md:text-5xl">
              Seen It on Motorace? We&apos;ll Help You Source It.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              If you&apos;ve found a bike, helmet, part or accessory on the Motorace website,
              send us the link or product details. Alex Motosport can help confirm
              availability, pricing and local support from Paphos.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => openEnquiryMenu(whatsappMessages.sourcing)}
                className="inline-flex rounded-lg bg-white px-5 py-3 font-medium text-black transition duration-300 hover:bg-[#fff1f1] hover:shadow-[0_0_24px_rgba(217,75,75,0.24),0_0_32px_rgba(168,85,247,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d94b4b]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Make an Enquiry
              </button>
              <a
                href="https://www.motorace.com.cy/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition duration-300 hover:border-[rgba(186,64,112,0.42)] hover:bg-white/10 hover:shadow-[0_0_24px_rgba(217,75,75,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d94b4b]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Browse Motorace
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
