"use client";

import {
  bikesGearPrimaryButtonClassName,
  bikesGearSecondaryButtonClassName,
} from "@/lib/bikesGearUi";
import { openEnquiryMenu, whatsappMessages } from "@/lib/contact";

export const CustomSourcingCTA = () => {
  return (
    <section className="bg-black py-[72px] text-white md:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(12,12,12,1),rgba(20,20,20,1),rgba(12,12,12,1))] px-6 py-12 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_28px_90px_rgba(0,0,0,0.38)] md:px-10 md:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,75,75,0.12),transparent_34%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,transparent,rgba(255,255,255,0.03))]"></div>

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">Custom Sourcing</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Seen It on Motorace? We&apos;ll Help You Source It.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/68 md:text-lg">
              If you&apos;ve found a bike, helmet, part or accessory on the Motorace website,
              send us the link or product details. Alex Motosport can help confirm
              availability, pricing and local support from Paphos.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => openEnquiryMenu(whatsappMessages.sourcing)}
                className={bikesGearPrimaryButtonClassName}
              >
                Make an Enquiry
              </button>
              <a
                href="https://www.motorace.com.cy/"
                target="_blank"
                rel="noreferrer"
                className={bikesGearSecondaryButtonClassName}
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
