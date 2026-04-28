"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/alex-motosport-banner-pack/alex-motosport-tires-evolution.webp",
    title: "Performance Tires",
    text: "Upgrade your ride with sport-focused tire options.",
    buttonLabel: "Enquire",
    imagePosition: "center",
  },
  {
    image: "/images/alex-motosport-banner-pack/alex-motosport-tires-mk4.webp",
    title: "Total Grip. Total Control.",
    text: "Premium road and track tire options available through Alex Motosport.",
    buttonLabel: "Enquire",
    imagePosition: "center",
  },
  {
    image: "/images/alex-motosport-banner-pack/alex-motosport-parts-premium.webp",
    title: "Premium Parts",
    text: "Parts and upgrades sourced for performance, protection and reliability.",
    buttonLabel: "Request Parts",
    imagePosition: "center",
  },
  {
    image: "/images/alex-motosport-banner-pack/alex-motosport-rst-gear.webp",
    title: "Ride Ready",
    text: "Jackets, boots and riding gear for every journey.",
    buttonLabel: "Explore Gear",
    imagePosition: "center right",
  },
  {
    image: "/images/alex-motosport-banner-pack/alex-motosport-trackday-2026.webp",
    title: "Track Day 2026",
    text: "Push limits. Ride faster. Ask us about upcoming track day options.",
    buttonLabel: "Learn More",
    imagePosition: "center right",
  },
];

const AUTO_ADVANCE_MS = 5500;

export const PromoBannerSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  const goToNextSlide = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    touchEndX.current = null;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) {
      return;
    }

    const swipeDistance = touchStartX.current - touchEndX.current;

    if (Math.abs(swipeDistance) < 50) {
      return;
    }

    if (swipeDistance > 0) {
      goToNextSlide();
      return;
    }

    goToPreviousSlide();
  };

  return (
    <section className="bg-black py-[72px] text-white md:py-24">
      <div className="mx-auto max-w-[1440px] px-0 md:px-4">
        <div
          className="group overflow-hidden rounded-none border-y border-white/10 bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_32px_90px_rgba(0,0,0,0.45)] md:rounded-[32px] md:border"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative aspect-[16/9] bg-[#050507] md:h-[70vh] md:min-h-[620px] md:aspect-auto">
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={slide.image}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    isActive ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 1440px"
                    className="object-contain"
                    style={{ objectPosition: slide.imagePosition }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.1),rgba(0,0,0,0.03),rgba(0,0,0,0.01))] md:bg-[linear-gradient(to_top,rgba(0,0,0,0.12),rgba(0,0,0,0.04),rgba(0,0,0,0.01))]"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(217,75,75,0.04),transparent_34%)] md:bg-[radial-gradient(circle_at_bottom_right,rgba(217,75,75,0.08),transparent_34%)]"></div>
                  <div className="absolute inset-0 hidden md:block bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.08),transparent_35%)]"></div>
                </div>
              );
            })}
          </div>

          <div className="border-t border-white/10 bg-[linear-gradient(to_bottom,rgba(9,9,12,0.98),rgba(16,12,24,0.98))] px-5 py-5 sm:px-6 md:px-8 md:py-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold tracking-tighter md:text-4xl">
                  {slides[activeIndex].title}
                </h2>
                <p className="mt-2 max-w-xl text-sm text-white/72 md:text-base">
                  {slides[activeIndex].text}
                </p>
              </div>

              <div className="flex flex-col gap-4 md:min-w-[240px] md:items-end">
                <a
                  href="https://wa.me/35700000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-black transition duration-300 hover:bg-[#fff1f1] hover:shadow-[0_0_24px_rgba(217,75,75,0.24),0_0_32px_rgba(168,85,247,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d94b4b]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  {slides[activeIndex].buttonLabel}
                </a>

                <div className="flex items-center gap-2">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.title}
                      type="button"
                      aria-label={`View slide ${index + 1}`}
                      onClick={() => setActiveIndex(index)}
                      className={`min-h-4 min-w-4 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? "h-3 w-12 bg-white md:h-2.5 md:w-10"
                          : "h-3 w-3 bg-white/35 hover:bg-white/55 md:h-2.5 md:w-2.5"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
