"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

const spotlightItems = [
  {
    title: "Storefront",
    caption: "Paphos Storefront",
    src: "/images/alex-motosport-images/alex-motosport-store-front-main.webp",
    alt: "Paphos Storefront",
  },
  {
    title: "Bike Display",
    caption: "Bikes In Store",
    src: "/images/alex-motosport-images/alex-motosport-bike-main.webp",
    alt: "Bikes In Store",
  },
  {
    title: "Helmets",
    caption: "Helmets & Gear",
    src: "/images/alex-motosport-images/alex-motosport-helmet.webp",
    alt: "Helmets & Gear",
  },
  {
    title: "Parts",
    caption: "Parts & Accessories",
    src: "/images/alex-motosport-images/alex-motosport-accessories.webp",
    alt: "Parts & Accessories",
  },
  {
    title: "Bike Detail",
    caption: "Bike Detail",
    src: "/images/alex-motosport-images/alex-motosport-bike-wheel-angle.webp",
    alt: "Bike Detail",
  },
  {
    title: "Accessories",
    caption: "Rider Accessories",
    src: "/images/alex-motosport-images/alex-moto-accessories.webp",
    alt: "Rider Accessories",
  },
];

export const InsideAlexMotosport = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = spotlightItems[activeIndex];

  return (
    <section className="bg-black py-12 text-white md:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-5 text-4xl font-bold tracking-tighter md:text-5xl">
            Inside Alex Motosport
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
            Visit our Paphos-based store for Kayo bikes, helmets, riding gear, parts and
            accessories — with local support and sourcing through trusted suppliers.
          </p>
        </div>

        <div className="mt-10 hidden gap-6 md:grid md:grid-cols-[0.8fr_1.2fr] md:items-stretch">
          <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
            <div className="flex h-full flex-col gap-2 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(8,8,10,1),rgba(28,18,50,0.94),rgba(12,12,14,1))] p-2">
              {spotlightItems.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={clsx(
                    "rounded-2xl border px-5 py-5 text-left transition duration-300",
                    index === activeIndex
                      ? "border-[rgba(186,64,112,0.42)] bg-white/10 shadow-[0_0_24px_rgba(217,75,75,0.08)]"
                      : "border-white/8 bg-white/[0.03] hover:border-white/15 hover:bg-white/[0.05]",
                  )}
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                    Category {index + 1}
                  </p>
                  <p className="mt-3 text-2xl font-semibold tracking-tight text-white">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-white/60">{item.caption}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
            <div className="relative h-full min-h-[640px] overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(10,10,10,1),rgba(35,16,67,0.95),rgba(18,18,18,1))] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_40px_rgba(124,58,237,0.15)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.src}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={activeItem.src}
                    alt={activeItem.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.82),rgba(0,0,0,0.24),transparent)]"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.16),transparent_42%)] opacity-80"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(217,75,75,0.12),transparent_42%)] opacity-70"></div>
                  <div className="absolute inset-x-0 bottom-0 z-10 p-8">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/45">Inside the store</p>
                    <p className="mt-3 text-3xl font-semibold tracking-tight text-white">
                      {activeItem.caption}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-4 md:hidden">
          {spotlightItems.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={item.title}
                className="overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-left"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                      Category {index + 1}
                    </p>
                    <p className="mt-2 text-xl font-semibold tracking-tight text-white">
                      {item.title}
                    </p>
                  </div>
                  <span className="text-white/55">{isOpen ? "−" : "+"}</span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <div className="relative mt-3 overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(10,10,10,1),rgba(35,16,67,0.95),rgba(18,18,18,1))] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_40px_rgba(124,58,237,0.15)]">
                        <div className="relative aspect-[4/3]">
                          <Image src={item.src} alt={item.alt} fill className="object-cover" />
                          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.82),rgba(0,0,0,0.24),transparent)]"></div>
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.16),transparent_42%)] opacity-80"></div>
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(217,75,75,0.12),transparent_42%)] opacity-70"></div>
                          <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                            <p className="text-lg font-semibold tracking-tight text-white">
                              {item.caption}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
