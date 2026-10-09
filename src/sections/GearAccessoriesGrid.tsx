"use client";

import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { catalog } from "@/data/catalog";
import { bikesGearPrimaryButtonClassName } from "@/lib/bikesGearUi";
import { openEnquiryMenu, whatsappMessages } from "@/lib/contact";

const gearCategories = [
  {
    title: "Helmets",
    copy: "Full-face, motocross and street helmets sourced for protection, comfort and style.",
    image: catalog.helmets[0].image,
  },
  {
    title: "Riding Gear",
    copy: "Jackets, gloves, boots and body protection for daily riders and off-road use.",
    image: catalog.gear[0].image,
  },
  {
    title: "Parts & Accessories",
    copy: "Chains, sprockets, brakes, crash protection, luggage and everyday essentials.",
    image: catalog.parts[0].image,
  },
];

export const GearAccessoriesGrid = () => {
  return (
    <section
      id="gear-accessories"
      className="bg-[linear-gradient(to_bottom,#000000 0%,#120a1e 20%,#000000 100%)] py-[52px] text-white md:py-16"
    >
      <FadeIn>
        <div className="container">
          <div className="mx-auto max-w-[1320px] rounded-[32px] border border-white/8 bg-[#121215] px-5 py-7 shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:px-8 md:py-9">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-white/42">
                Beyond The Bike
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/62 md:text-lg">
                Continue into rider essentials, helmets and everyday parts with the same
                local sourcing support.
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                Riding Essentials
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
                Gear & Accessories
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                Browse core riding essentials and support items that Alex Motosport can help source
                locally through trusted partners.
              </p>
              <p className="mt-5 text-white/60">
                Essential riding gear and accessories, sourced locally through trusted partners in
                Cyprus.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {gearCategories.map((category) => (
                <article
                  key={category.title}
                  className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,#16161b,#0f0f13)] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_72px_rgba(0,0,0,0.34)] transition duration-300 hover:border-white/20"
                >
                  <div className="relative border-b border-white/10 bg-[linear-gradient(180deg,rgba(24,24,28,1),rgba(12,12,16,1))]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(183,148,244,0.14),transparent_40%)]" />
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#f1f2f5]">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/40">
                      Category
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                      {category.title}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-white/65 md:text-[15px]">
                      {category.copy}
                    </p>

                    <div className="mt-6 border-t border-white/10 pt-5">
                      <button
                        type="button"
                        onClick={() => openEnquiryMenu(whatsappMessages.bikesGear)}
                        className={`${bikesGearPrimaryButtonClassName} w-full`}
                      >
                        Make an Enquiry
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};