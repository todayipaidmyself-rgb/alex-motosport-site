"use client";

import Image from "next/image";
import { openEnquiryMenu, whatsappMessages } from "@/lib/contact";

export const RepairsServiceSection = () => {
  return (
    <section className="bg-black pb-[72px] pt-0 text-white md:pb-24 md:pt-0">
      <div className="container">
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-[1.12fr_0.88fr] md:gap-0">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm md:pr-20">
            <div className="relative min-h-[420px] overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(10,10,10,1),rgba(35,16,67,0.95),rgba(18,18,18,1))] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_40px_rgba(124,58,237,0.15)] md:min-h-[620px]">
              <Image
                src="/images/editorial/alex-bike-engine-action-detail.webp"
                alt="Bike repair and engine service detail"
                fill
                sizes="(max-width: 768px) 100vw, 760px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.78),rgba(0,0,0,0.24),transparent)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.14),transparent_42%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(217,75,75,0.12),transparent_40%)]" />

              <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                  Workshop Support
                </p>
                <p className="mt-3 max-w-md text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  Workshop support is being prepared for riders in Paphos.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 rounded-[32px] border border-white/10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm md:-ml-16 md:my-8 md:self-center md:p-8">
            <p className="mb-6 text-sm text-white/60">
              This section is being finalised and will be available soon.
            </p>

            <p className="text-xs uppercase tracking-[0.28em] text-white/50">
              Workshop Support
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tighter md:text-5xl">
              Bike Repairs &amp; Servicing
            </h2>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Coming Soon
              </p>
              <p className="mt-4 text-white/70">
                Repairs, servicing and workshop support details will be added once everything is ready.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openEnquiryMenu(whatsappMessages.repairs)}
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-black transition duration-300 hover:bg-[#fff1f1] hover:shadow-[0_0_24px_rgba(217,75,75,0.24),0_0_32px_rgba(168,85,247,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d94b4b]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Make an Enquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};