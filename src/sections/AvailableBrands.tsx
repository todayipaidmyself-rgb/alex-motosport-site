"use client";

import Image from "next/image";
import { catalog } from "@/data/catalog";

export const AvailableBrands = () => {
  const marqueeBrands = [...catalog.brands, ...catalog.brands];

  return (
    <section className="bg-black py-[72px] text-white md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tighter md:text-5xl">
            Available Through Alex Motosport
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
            From helmets and riding gear to tires, parts and accessories, Alex Motosport
            can help source trusted motorcycle brands through local supply partners.
          </p>
        </div>

        <div className="relative left-1/2 mt-12 w-screen -translate-x-1/2 overflow-hidden md:mt-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-[linear-gradient(to_right,#000,transparent)] md:w-24"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-[linear-gradient(to_left,#000,transparent)] md:w-24"></div>

          <div className="marquee-wrapper">
            <div className="marquee-track flex w-max items-center gap-4 px-4 md:gap-6 md:px-6">
              {marqueeBrands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="group flex h-24 w-[168px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] px-4 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 hover:border-[rgba(186,64,112,0.35)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_0_28px_rgba(217,75,75,0.08),0_0_32px_rgba(168,85,247,0.08)] md:h-28 md:w-[196px]"
                >
                  <div className="relative h-10 w-full md:h-12">
                    <Image
                      src={brand.image}
                      alt={`${brand.name} logo`}
                      fill
                      sizes="196px"
                      className="object-contain grayscale opacity-60 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .marquee-wrapper {
            overflow: hidden;
          }

          .marquee-track {
            animation: available-brands-marquee 40s linear infinite;
          }

          @keyframes available-brands-marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(-50% - 0.75rem));
            }
          }

          @media (min-width: 768px) {
            .marquee-wrapper:hover .marquee-track {
              animation-play-state: paused;
            }
          }

          @media (min-width: 768px) {
            @keyframes available-brands-marquee {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(calc(-50% - 1.5rem));
              }
            }
          }
        `}</style>
      </div>
    </section>
  );
};
