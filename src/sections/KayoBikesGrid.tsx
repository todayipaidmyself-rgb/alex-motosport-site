"use client";

import Image from "next/image";
import { openEnquiryMenu, whatsappMessages } from "@/lib/contact";

const bikes = [
  {
    name: "KT50 3",
    specs: "Kayo model available through Alex Motosport",
    price: "Price on enquiry",
    image: "/images/catalog/kayo/kt50-3_1_1.png",
  },
  {
    name: "A50 Pro",
    specs: "Kayo model available through Alex Motosport",
    price: "Price on enquiry",
    image: "/images/catalog/kayo/a50-prof-pic2.jpg",
  },
  {
    name: "EA50 Electric",
    specs: "Kayo model available through Alex Motosport",
    price: "Price on enquiry",
    image: "/images/catalog/kayo/ea50-electric3.jpg",
  },
  {
    name: "S70 Cart Category",
    price: "Price on enquiry",
    specs: "Kayo model available through Alex Motosport",
    image: "/images/catalog/kayo/s70-cart-category (1).jpg",
  },
  {
    name: "MiniGP Category",
    specs: "Kayo model available through Alex Motosport",
    price: "Price on enquiry",
    image: "/images/catalog/kayo/minigp-category.jpg",
  },
  {
    name: "AY70",
    specs: "Kayo model available through Alex Motosport",
    price: "Price on enquiry",
    image: "/images/catalog/kayo/ay70.jpg",
  },
  {
    name: "Kayo K2 Pro",
    specs: "Kayo model available through Alex Motosport",
    price: "Price on enquiry",
    image: "/images/catalog/kayo/kayo_k2_pro_-_0_1.png",
  },
  {
    name: "3 19",
    specs: "Kayo model available through Alex Motosport",
    price: "Price on enquiry",
    image: "/images/catalog/kayo/3_19.jpg",
  },
  {
    name: "AT110 01",
    specs: "Kayo model available through Alex Motosport",
    price: "Price on enquiry",
    image: "/images/catalog/kayo/at110_01_1.png",
  },
  {
    name: "Kayo K2 Pro 250cc",
    specs: "Kayo model available through Alex Motosport",
    price: "Price on enquiry",
    image: "/images/catalog/kayo/kayo-k2-pro-250cc-ruote-21-18.jpg",
  },
  {
    name: "Kayo TT140 New Color 1",
    specs: "Kayo model available through Alex Motosport",
    price: "Price on enquiry",
    image: "/images/catalog/kayo/kayo-tt140-new-color_1.png",
  },
  {
    name: "KMB60 Profile",
    specs: "Kayo model available through Alex Motosport",
    price: "Price on enquiry",
    image: "/images/catalog/kayo/kmb60-profile-magento_1.jpg",
  },
  {
    name: "Kayo TT140 New Color",
    specs: "Kayo model available through Alex Motosport",
    price: "Price on enquiry",
    image: "/images/catalog/kayo/kayo-tt140-new-color.png",
  },
];

export const KayoBikesGrid = () => {
  return (
    <section className="bg-black py-[72px] text-white md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tighter md:text-5xl">Kayo Bikes</h2>
          <p className="mt-5 text-lg text-white/70">
            Explore a starter range of Kayo models available through Alex Motosport.
            Final models, availability and pricing can be confirmed on enquiry.
          </p>
          <p className="mt-6 text-white/70">
            A selection of Kayo bikes available through Alex Motosport, with support and
            guidance on the right model for your needs.
          </p>
        </div>

        <div className="mt-14 -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 md:-mx-2 md:gap-6 md:px-2">
          {bikes.map((bike) => (
            <article
              key={bike.name}
              className="group w-[280px] shrink-0 snap-start rounded-3xl border border-white/10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm transition duration-300 hover:border-[rgba(186,64,112,0.38)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_80px_rgba(0,0,0,0.45),0_0_36px_rgba(217,75,75,0.08)] md:w-[340px] lg:w-[360px]"
            >
              <div className="relative aspect-[4/3] flex items-center justify-center rounded-2xl bg-white p-6">
                <Image
                  src={bike.image}
                  alt={bike.name}
                  width={800}
                  height={600}
                  className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-bold tracking-tight">{bike.name}</h3>
                <p className="mt-2 text-white/65">{bike.specs}</p>
                <p className="mt-4 text-xl font-semibold text-white">{bike.price}</p>
              </div>

              <button
                type="button"
                onClick={() => openEnquiryMenu(whatsappMessages.product(bike.name))}
                className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 font-medium text-black transition duration-300 hover:bg-[#fff1f1] hover:shadow-[0_0_24px_rgba(217,75,75,0.24),0_0_32px_rgba(168,85,247,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d94b4b]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Make an Enquiry
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
