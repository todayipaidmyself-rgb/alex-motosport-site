"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export const Hero = () => {
  const rotatingLines = [
    "Motocross Gear",
    "Enduro Bikes",
    "Street Parts",
    "Kayo Motorbikes",
    "Rider Essentials",
  ];
  const [activeLineIndex, setActiveLineIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveLineIndex((currentIndex) => (currentIndex + 1) % rotatingLines.length);
    }, 2400);

    return () => window.clearInterval(intervalId);
  }, [rotatingLines.length]);

  return (
    <section className="relative min-h-screen overflow-clip text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/alex-motos-gear-hero.webp"
        preload="metadata"
      >
        <source src="/videos/alex-motos-hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(95,44,168,0.18),rgba(95,44,168,0.1),rgba(0,0,0,0.2))]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,75,75,0.12),transparent_32%)]"></div>
      <div className="absolute h-[375px] w-[750px] md:h-[768px] md:w-[1536px] lg:h-[1200px] lg:w-[2400px] rounded-[100%] bg-black left-1/2 top-[calc(100%-96px)] -translate-x-1/2 border border-[#b48cde]/60 bg-[radial-gradient(closest-side,rgba(0,0,0,0.88)_82%,rgba(149,96,235,0.32))] md:top-[calc(100%-120px)]"></div>
      <div className="container relative z-10 flex min-h-screen items-center justify-center py-[72px] md:py-24">
        <div className="w-full">
          <div className="flex items-center justify-center">
            <div className="rounded-lg border border-white/20 bg-white/5 px-3 py-1 text-sm uppercase tracking-[0.25em] text-white/70 backdrop-blur-sm">
              Alex Motosport | Paphos, Cyprus
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex">
              <h1 className="inline-flex max-w-5xl flex-col items-center text-center text-5xl font-bold tracking-tighter md:text-8xl">
                <span>Alex Motosport</span>
                <span className="mt-3 inline-flex min-h-[1.2em] items-center justify-center md:mt-4">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={rotatingLines[activeLineIndex]}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -18 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="bg-[linear-gradient(to_right,#ffffff,#f7d4d4,#c084fc)] bg-clip-text text-transparent"
                    >
                      {rotatingLines[activeLineIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>
            </div>
          </div>
          <div className="flex justify-center">
            <p className="mt-8 max-w-2xl text-center text-lg text-white/80 md:text-xl">
              Kayo bikes, helmets, riding gear and parts — sourced locally through Alex
              Motosport with trusted suppliers across Cyprus.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="/bikes-gear"
                className="rounded-lg bg-white px-5 py-3 font-medium text-black transition duration-300 hover:bg-[#fff1f1] hover:shadow-[0_0_24px_rgba(217,75,75,0.28),0_0_36px_rgba(168,85,247,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d94b4b]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                View Bikes
              </Link>
              <a
                href="https://wa.me/35700000000"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-medium text-white transition duration-300 hover:border-[rgba(186,64,112,0.42)] hover:bg-white/10 hover:shadow-[0_0_24px_rgba(217,75,75,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d94b4b]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
