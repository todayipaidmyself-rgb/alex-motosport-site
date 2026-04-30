"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getWhatsAppUrl, openEnquiryMenu, whatsappMessages } from "@/lib/contact";

const slides = [
  {
    label: "BIKES & GEAR",
    title: "Kayo Bikes, Gear & Parts in Paphos",
    text: "Explore Kayo bikes, helmets, riding gear, parts and accessories available through Alex Motosport.",
    buttonLabel: "Ask Alex on WhatsApp",
    action: "whatsapp",
    whatsappMessage: whatsappMessages.bikesGear,
    image: "/images/editorial/alex-hero-studio-bike.webp",
    imagePosition: "center center",
  },
  {
    label: "LOCAL SOURCING",
    title: "Seen It on Motorace? We’ll Help You Source It.",
    text: "Send Alex Motosport the product link and we’ll help confirm availability, pricing and local support.",
    buttonLabel: "Make an Enquiry",
    action: "enquiry",
    enquiryMessage: whatsappMessages.sourcing,
    image: "/images/editorial/alex-hero-coastal-road-ride.webp",
    imagePosition: "center center",
  },
  {
    label: "RIDING ESSENTIALS",
    title: "Gear Built for Road, Track & Dirt",
    text: "Helmets, gloves, jackets and protection options sourced for riders across Cyprus.",
    buttonLabel: "Ask Alex on WhatsApp",
    action: "whatsapp",
    whatsappMessage: whatsappMessages.bikesGear,
    image: "/images/editorial/alex-gear-kit-studio-purple.webp",
    imagePosition: "center center",
  },
] as const;

const AUTO_ADVANCE_MS = 5500;

const ctaClassName =
  "mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-black transition duration-300 hover:bg-[#fff1f1] hover:shadow-[0_0_24px_rgba(217,75,75,0.24),0_0_32px_rgba(168,85,247,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d94b4b]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

export const BikesGearHeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="bg-black py-10 text-white md:py-14">
      <div className="mx-auto max-w-[1440px] px-0 md:px-4">
        <div className="overflow-hidden rounded-none border-y border-white/10 bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_32px_90px_rgba(0,0,0,0.45)] md:rounded-[32px] md:border">
          <div className="relative h-[62vh] min-h-[480px] bg-[#050507] md:h-[72vh] md:min-h-[680px]">
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={slide.title}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    isActive ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover"
                    style={{ objectPosition: slide.imagePosition }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.82),rgba(0,0,0,0.45),rgba(0,0,0,0.18))]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.14),transparent_38%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(217,75,75,0.14),transparent_34%)]" />
                </div>
              );
            })}

            <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.28em] text-white/55">
                  {activeSlide.label}
                </p>
                <h1 className="mt-3 text-4xl font-bold tracking-tighter md:text-6xl">
                  {activeSlide.title}
                </h1>
                <p className="mt-4 max-w-xl text-sm text-white/75 md:text-lg">
                  {activeSlide.text}
                </p>

                {activeSlide.action === "enquiry" ? (
                  <button
                    type="button"
                    onClick={() => openEnquiryMenu(activeSlide.enquiryMessage)}
                    className={ctaClassName}
                  >
                    {activeSlide.buttonLabel}
                  </button>
                ) : (
                  <a
                    href={getWhatsAppUrl(activeSlide.whatsappMessage)}
                    target="_blank"
                    rel="noreferrer"
                    className={ctaClassName}
                  >
                    {activeSlide.buttonLabel}
                  </a>
                )}
              </div>

              <div className="mt-6 flex items-center gap-2 md:mt-8">
                {slides.map((slide, index) => (
                  <button
                    key={slide.label}
                    type="button"
                    aria-label={`View slide ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "h-3 w-10 bg-white"
                        : "h-3 w-3 bg-white/35 hover:bg-white/55"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};