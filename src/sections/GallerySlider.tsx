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

  const currentImageNumber = String(activeIndex + 1).padStart(2, "0");
  const totalImages = String(galleryImages.length).padStart(2, "0");

  return (
    <section className="bg-black pb-[88px] pt-0 text-white md:pb-28">
      <div className="container">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-[0.88fr_1.12fr] md:items-center md:gap-12">
          <div className="order-1 max-w-xl">
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">
              Store Gallery
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Details From Inside Alex Motosport
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/65 md:text-base">
              A closer look at bikes, riding gear, accessories and in-store
              details from the Paphos store.
            </p>

            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6 md:mt-10 md:pt-8">
              <p className="text-sm tracking-[0.24em] text-white/50">
                {currentImageNumber} / {totalImages}
              </p>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Previous gallery image"
                  onClick={showPreviousImage}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-lg text-white transition duration-300 hover:bg-white/10"
                >
                  ‹
                </button>

                <button
                  type="button"
                  aria-label="Next gallery image"
                  onClick={showNextImage}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-lg text-white transition duration-300 hover:bg-white/10"
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          <div className="order-2">
            <button
              type="button"
              onClick={() => setActiveImage(currentImage.src)}
              className="group relative block w-full text-left"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] border border-white/10 bg-[#050505] md:aspect-[3/4]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage.src}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.01 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentImage.src}
                      alt={currentImage.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.01]"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.18),rgba(0,0,0,0.02),transparent)]" />
              </div>
            </button>
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
}