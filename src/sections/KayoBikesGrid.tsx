"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import {
  type BikeCategory,
  bikeAvailabilityNote,
  bikeCategoryLabels,
  bikeProducts,
  featuredBikeProducts,
} from "@/data/bikes";
import {
  bikesGearFilterButtonClassName,
  bikesGearPrimaryButtonClassName,
} from "@/lib/bikesGearUi";
import { openEnquiryMenu, whatsappMessages } from "@/lib/contact";

export const KayoBikesGrid = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<"all" | BikeCategory>("all");

  const orderedCategories: BikeCategory[] = [
    "motorbikes",
    "quads-atvs",
    "karts",
    "electric",
  ];

  const filteredBikeProducts = useMemo(() => {
    if (activeFilter === "all") return bikeProducts;

    return bikeProducts.filter((bike) => bike.categories?.includes(activeFilter));
  }, [activeFilter]);

  const filterOptions = [
    { id: "all" as const, label: "All models" },
    ...orderedCategories.map((category) => ({
      id: category,
      label: bikeCategoryLabels[category],
    })),
  ];

  return (
    <section id="bike-range" className="bg-black py-[56px] text-white md:py-20">
      <FadeIn>
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">
              Kayo Bikes
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Find your next ride.
            </h2>

            <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
              Explore the Kayo range with Alex Motosport in Paphos. Ask us about
              model options, pricing and availability.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-[1320px]">
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(145deg,#141319_0%,#20172f_48%,#121215_100%)] px-5 py-8 shadow-[0_32px_120px_rgba(0,0,0,0.42)] sm:px-6 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(183,148,244,0.16),transparent_30%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,74,163,0.18),transparent_34%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_26%,transparent_74%,rgba(255,255,255,0.03))]" />

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={shouldReduceMotion ? undefined : { duration: 0.5, ease: "easeOut" }}
                className="relative max-w-2xl"
              >
                <p className="text-sm uppercase tracking-[0.28em] text-white/45">
                  Featured Models
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Meet the latest additions.
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/62 md:text-base">
                  Three more ways to get off-road.
                </p>
              </motion.div>

              <div className="relative mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {featuredBikeProducts.map((bike, index) => (
                  <motion.article
                  key={bike.id}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={
                    shouldReduceMotion
                      ? undefined
                      : { duration: 0.55, ease: "easeOut", delay: 0.08 * index }
                  }
                  className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_30px_90px_rgba(0,0,0,0.42)] transition duration-300 hover:border-white/18 motion-reduce:transition-none"
                >
                  <div className="relative p-4 sm:p-5">
                    <div className="absolute left-4 top-4 z-10 inline-flex rounded-full border border-white/12 bg-black/55 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-white/78 backdrop-blur-sm">
                      Recently added
                    </div>
                    <div className="relative aspect-[4/4.35] overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(242,242,245,0.98)_56%,rgba(230,232,238,0.98)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_24px_50px_rgba(0,0,0,0.18)]">
                      <div className="absolute inset-x-[12%] bottom-4 h-10 rounded-full bg-black/8 blur-2xl" />
                      <Image
                        src={bike.image}
                        alt={bike.name}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        className="object-contain p-2 transition duration-500 group-hover:scale-[1.06] motion-reduce:transform-none motion-reduce:transition-none sm:p-4"
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col px-5 pb-5 pt-1 sm:px-6 sm:pb-6">
                    <div className="min-w-0">
                      <h4 className="text-[1.65rem] font-semibold tracking-tight text-white">
                        {bike.name}
                      </h4>
                      {bike.variant ? (
                        <p className="mt-1 text-base font-medium text-white/70">
                          {bike.variant}
                        </p>
                      ) : null}
                    </div>

                    {bike.highlights?.length ? (
                      <dl className="mt-5 flex flex-wrap gap-2">
                        {bike.highlights.map((highlight) => (
                          <div
                            key={`${bike.id}-${highlight.label}`}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm"
                          >
                            <dt className="text-white/38">{highlight.label}</dt>
                            <dd className="font-medium text-white/84">{highlight.value}</dd>
                          </div>
                        ))}
                      </dl>
                    ) : null}

                    <div className="mt-6 border-t border-white/10 pt-5">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                        Availability
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">{bike.price}</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/55">
                        {bikeAvailabilityNote}
                      </p>
                    </div>

                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={() =>
                          openEnquiryMenu(
                            whatsappMessages.product(bike.enquiryName ?? bike.name),
                          )
                        }
                        className={`${bikesGearPrimaryButtonClassName} w-full text-sm`}
                      >
                        Make an Enquiry
                      </button>
                    </div>
                  </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-[1320px]">
            <div className="flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.28em] text-white/45">
                  Complete Kayo Range
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Explore the full range
                </h3>
              </div>

              <p className="max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
                Compare the wider line-up, narrow the list by vehicle type and ask
                Alex Motosport about pricing and availability.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {filterOptions.map((filter) => {
                const isActive = activeFilter === filter.id;

                return (
                  <button
                    key={filter.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`${bikesGearFilterButtonClassName} ${
                      isActive
                        ? "border-[#b794f4]/55 bg-[linear-gradient(135deg,rgba(183,148,244,0.22),rgba(255,255,255,0.08))] text-white"
                        : "border-white/12 bg-white/[0.03] text-white/68 hover:border-white/24 hover:text-white"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>

            <p className="mt-4 text-sm text-white/50">
              Showing {filteredBikeProducts.length} of {bikeProducts.length} models.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredBikeProducts.map((bike) => (
                <article
                  key={bike.id}
                  className="group flex h-full flex-col rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_70px_rgba(0,0,0,0.36)] transition duration-300 hover:border-white/20 motion-reduce:transition-none"
                >
                  <div className="relative flex aspect-[4/3] items-center justify-center rounded-2xl border border-white/8 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(243,243,246,0.98)_60%,rgba(232,233,239,0.98)_100%)] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
                    <div className="absolute inset-x-[14%] bottom-3 h-8 rounded-full bg-black/8 blur-2xl" />
                    <Image
                      src={bike.image}
                      alt={bike.name}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="object-contain p-3 transition duration-500 group-hover:scale-[1.06] motion-reduce:transform-none motion-reduce:transition-none"
                    />
                  </div>

                  <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <h4 className="text-2xl font-semibold tracking-tight text-white">
                          {bike.name}
                        </h4>
                        {bike.variant ? (
                          <p className="mt-1 text-sm font-medium text-white/68">
                            {bike.variant}
                          </p>
                        ) : null}
                      </div>
                      {bike.recentlyAdded ? (
                        <span className="inline-flex shrink-0 rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/72">
                          Recently added
                        </span>
                      ) : null}
                    </div>

                    {bike.categories?.length ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {bike.categories.map((category) => (
                          <span
                            key={`${bike.id}-${category}`}
                            className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/65"
                          >
                            {bikeCategoryLabels[category]}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    {bike.highlights?.length ? (
                      <dl className="mt-4 grid gap-2">
                        {bike.highlights.map((highlight) => (
                          <div
                            key={`${bike.id}-grid-${highlight.label}`}
                            className="grid grid-cols-[90px_1fr] gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2 text-sm"
                          >
                            <dt className="text-white/38">{highlight.label}</dt>
                            <dd className="font-medium text-white/82">{highlight.value}</dd>
                          </div>
                        ))}
                      </dl>
                    ) : null}

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65 md:text-[15px]">
                      {bike.specs}
                    </p>

                    <div className="mt-5 border-t border-white/10 pt-5">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                        Pricing
                      </p>
                      <p className="mt-2 text-xl font-semibold text-white">{bike.price}</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/55">
                        {bikeAvailabilityNote}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      openEnquiryMenu(
                        whatsappMessages.product(bike.enquiryName ?? bike.name),
                      )
                    }
                    className={`${bikesGearPrimaryButtonClassName} mt-6 w-full`}
                  >
                    Make an Enquiry
                  </button>
                </article>
            ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};