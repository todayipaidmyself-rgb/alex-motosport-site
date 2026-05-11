"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const galleryImages = Array.from({ length: 22 }, (_, index) => ({
  src: `/images/gallery/gallery-pictures${index + 1}.webp`,
  alt: `Alex Motosport gallery image ${index + 1}`,
}));

export const GallerySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const currentImage = galleryImages[activeIndex];

  useEffect(() => {
    if (!activeImage) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeImage]);

  const showPreviousImage = () => {
    setActiveIndex((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1,
    );
  };

  const showNextImage = () => {
    setActiveIndex((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className="bg-black pb-[88px] pt-0 text-white md:pb-28">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[24px] border border-white/10">
            <button
              type="button"
              onClick={() => setActiveImage(currentImage.src)}
              className="group relative block w-full"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#050505] md:aspect-[16/9]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage.src}
                    initial={{ opacity: 0, scale: 1.015 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.01 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentImage.src}
                      alt={currentImage.alt}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1440px) 100vw, 1200px"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.38),rgba(0,0,0,0.08),transparent)]" />
                <div className="absolute inset-y-0 left-0 w-20 bg-[linear-gradient(to_right,rgba(0,0,0,0.2),transparent)] md:w-28" />
                <div className="absolute inset-y-0 right-0 w-20 bg-[linear-gradient(to_left,rgba(0,0,0,0.2),transparent)] md:w-28" />
                <div className="absolute inset-0 transition duration-500 group-hover:bg-white/[0.02]" />
              </div>
            </button>

            <button
              type="button"
              aria-label="Previous gallery image"
              onClick={showPreviousImage}
              className="absolute left-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-lg text-white transition duration-300 hover:bg-white/10 md:left-5 md:h-11 md:w-11"
            >
              ‹
            </button>

            <button
              type="button"
              aria-label="Next gallery image"
              onClick={showNextImage}
              className="absolute right-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-lg text-white transition duration-300 hover:bg-white/10 md:right-5 md:h-11 md:w-11"
            >
              ›
            </button>
          </div>
        </div>

        <div className="relative left-1/2 mt-5 w-screen -translate-x-1/2">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-[linear-gradient(to_right,#000,transparent)] md:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-[linear-gradient(to_left,#000,transparent)] md:w-20" />

          <div className="flex gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] md:gap-4 md:px-10 lg:px-[max(4rem,calc((100vw-1200px)/2+1rem))] [&::-webkit-scrollbar]:hidden">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group relative aspect-[16/10] w-[72px] shrink-0 overflow-hidden rounded-2xl border transition duration-300 md:w-[120px] ${
                  index === activeIndex
                    ? "border-white/40 opacity-100"
                    : "border-white/10 opacity-55 hover:opacity-80"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 72px, 120px"
                  className="object-cover"
                />
                <div
                  className={`absolute inset-0 transition duration-300 ${
                    index === activeIndex ? "bg-transparent" : "bg-black/20"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeImage && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-4">
          <button
            type="button"
            aria-label="Close gallery image"
            onClick={() => setActiveImage(null)}
            className="absolute right-5 top-5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl text-white hover:bg-white/20"
          >
            ×
          </button>

          <div className="relative h-[78vh] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={activeImage}
              alt="Alex Motosport gallery preview"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};