"use client";

import { useId } from "react";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/contact";
import {
  bikesGearPrimaryButtonClassName,
  bikesGearSecondaryButtonClassName,
} from "@/lib/bikesGearUi";

export const BikesGearHeroSlider = () => {
  const shouldReduceMotion = useReducedMotion();
  const gradientId = useId().replace(/:/g, "");

  return (
    <section className="bg-black pb-5 pt-8 text-white md:pb-8 md:pt-10">
      <div className="container">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_36px_100px_rgba(0,0,0,0.42)]">
          <div className="grid items-stretch gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(183,148,244,0.18),transparent_38%)]" />
              <div className="absolute inset-y-0 right-0 hidden w-px bg-white/8 lg:block" />

              <div className="relative max-w-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Bikes &amp; Gear
                </p>

                <h1 className="mt-4 max-w-lg text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
                  Bikes, gear and support for your next ride.
                </h1>

                <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
                  Explore Kayo bikes, helmets, riding gear and sourcing support with
                  Alex Motosport in Paphos.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="#bike-range"
                    className={bikesGearPrimaryButtonClassName}
                  >
                    Browse Bikes
                  </Link>

                  <a
                    href={getWhatsAppUrl(whatsappMessages.bikesGear)}
                    target="_blank"
                    rel="noreferrer"
                    className={bikesGearPrimaryButtonClassName}
                  >
                    Ask Alex on WhatsApp
                  </a>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    "Kayo bikes in Paphos",
                    "Price on enquiry",
                    "Availability confirmed directly",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white/72"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/55">
                  <Link
                    href="#gear-accessories"
                    className="transition duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d94b4b]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    Explore gear &amp; accessories
                  </Link>
                  <Link
                    href="#repairs-support"
                    className="transition duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d94b4b]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    Repairs &amp; servicing
                  </Link>
                  <Link
                    href="#bike-range"
                    className={`${bikesGearSecondaryButtonClassName} text-sm`}
                  >
                    Enquiry-based availability
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative min-h-[360px] sm:min-h-[460px] lg:min-h-full">
              <Image
                src="/images/gallery/bikes-and-gear-pics-banner-hero.webp"
                alt="Alex Motosport bikes and gear showroom selection"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.62),rgba(0,0,0,0.2))]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.46),transparent_40%)] lg:hidden" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(183,148,244,0.14),transparent_34%)]" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="max-w-md rounded-[28px] border border-white/10 bg-black/45 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                    Showroom Focus
                  </p>
                  <p className="mt-3 text-2xl font-semibold tracking-tight text-white">
                    A more focused way to compare bikes, gear and next steps.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    Start with the latest additions, then move through the wider Kayo
                    range, gear and local support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,rgba(18,18,22,1),rgba(30,22,44,1))] px-4 py-7 sm:px-6 md:px-8 md:py-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(183,148,244,0.1),transparent_46%)]" />

            <svg
              aria-hidden="true"
              className="pointer-events-none relative block h-[92px] w-full sm:h-[112px] md:h-[128px]"
              viewBox="0 0 1600 220"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id={`${gradientId}-hero-ride`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(183,148,244,0)" />
                  <stop offset="44%" stopColor="rgba(183,148,244,0.04)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.72)" />
                  <stop offset="56%" stopColor="rgba(183,148,244,0.22)" />
                  <stop offset="100%" stopColor="rgba(183,148,244,0)" />
                  {shouldReduceMotion ? null : (
                    <animateTransform
                      attributeName="gradientTransform"
                      type="translate"
                      from="-1 0"
                      to="1 0"
                      dur="8s"
                      repeatCount="indefinite"
                    />
                  )}
                </linearGradient>
              </defs>

              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="transparent"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1.4"
                fontSize="224"
                fontWeight="700"
                letterSpacing="20"
              >
                RIDE
              </text>

              {shouldReduceMotion ? null : (
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="transparent"
                  stroke={`url(#${gradientId}-hero-ride)`}
                  strokeWidth="2.2"
                  fontSize="224"
                  fontWeight="700"
                  letterSpacing="20"
                  opacity="0.72"
                >
                  RIDE
                </text>
              )}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};