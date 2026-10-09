"use client";

import Image from "next/image";
import { bikesGearPrimaryButtonClassName } from "@/lib/bikesGearUi";
import { openEnquiryMenu, whatsappMessages } from "@/lib/contact";

export const RepairsServiceSection = () => {
  return (
    <section
      id="repairs-support"
      className="bg-black pb-[64px] pt-0 text-white md:pb-20 md:pt-0"
    >
      <div className="container">
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-[1.02fr_0.98fr] md:gap-6">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_80px_rgba(0,0,0,0.45)]">
            <div className="relative min-h-[420px] overflow-hidden rounded-[24px] border border-white/10 bg-black md:min-h-[620px]">
              <Image
                src="/images/editorial/alex-bike-engine-action-detail.webp"
                alt="Bike repair and engine service detail"
                fill
                sizes="(max-width: 768px) 100vw, 760px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.82),rgba(0,0,0,0.18),transparent)]" />
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

          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_80px_rgba(0,0,0,0.45)] md:p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-white/50">
              Workshop Support
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Bike Repairs &amp; Servicing
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/68">
              Workshop repairs and servicing are still being prepared for release in
              Paphos.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <p className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Coming Soon
              </p>
              <p className="mt-4 text-white/70">
                Details for repairs, servicing and workshop support will be added once
                everything is ready.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openEnquiryMenu(whatsappMessages.repairs)}
              className={`${bikesGearPrimaryButtonClassName} mt-8`}
            >
              Make an Enquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};