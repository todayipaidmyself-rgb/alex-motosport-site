"use client";

import Link from "next/link";

import { openEnquiryMenu, whatsappMessages } from "@/lib/contact";
import { Footer } from "@/sections/Footer";

const articles = [
  {
    slug: "best-dirt-bikes-cyprus",
    category: "Buying Guide",
    title: "Best Dirt Bikes for Beginners in Cyprus",
    excerpt: "A practical guide to choosing your first dirt bike in Cyprus.",
    image: "/images/editorial/alex-hero-studio-bike.webp",
    content:
      "Choosing your first dirt bike in Cyprus depends on terrain, experience level and usage. Kayo bikes are a strong entry point due to reliability and price point.",
  },
  {
    slug: "where-to-ride-cyprus",
    category: "Riding Guide",
    title: "Where to Ride Motorbikes in Paphos & Cyprus",
    excerpt: "Explore the best places to ride across Cyprus.",
    image: "/images/editorial/alex-action-dirt-ride.webp",
    content:
      "Cyprus offers a mix of coastal roads and off-road trails ideal for riders of all levels.",
  },
  {
    slug: "motorbike-repairs-cyprus",
    category: "Workshop Advice",
    title: "Motorbike Repairs in Cyprus: Common Issues & What to Avoid",
    excerpt: "Common repair issues and how to avoid costly mistakes.",
    image: "/images/editorial/alex-bike-engine-action-detail.webp",
    content:
      "Heat, dust and terrain in Cyprus create unique wear conditions that riders need to manage properly.",
  },
];

export default function JournalPage() {
  const featuredArticle = articles[0];

  return (
    <>
      <main className="bg-black text-white">
        <section className="relative overflow-hidden bg-black px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs uppercase tracking-[0.28em] text-white/50">
              Alex Motosport Journal
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tighter md:text-7xl">
              Practical guides for riders in Cyprus.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Buying advice, riding insights and workshop knowledge for riders across
              Paphos and Cyprus.
            </p>

            <article className="mt-14 rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                Featured Article · {featuredArticle.category}
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">
                {featuredArticle.title}
              </h2>

              <p className="mt-5 max-w-2xl text-white/70">
                {featuredArticle.excerpt}
              </p>

              <button className="mt-8 inline-flex rounded-lg bg-white px-5 py-3 font-medium text-black hover:bg-[#fff1f1]">
                Read Article
              </button>
            </article>
          </div>
        </section>

        <section className="bg-black px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-3">
              {articles.map((article) => (
                <article
                  key={article.title}
                  className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.06]"
                >
                  <div className="mb-4 overflow-hidden rounded-xl">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-[200px] w-full object-cover"
                    />
                  </div>

                  <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                    {article.category}
                  </p>

                  <h3 className="mt-5 text-2xl font-bold tracking-tight">
                    {article.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-white/70">
                    {article.excerpt}
                  </p>

                  <Link
                    href={`/journal/${article.slug}`}
                    className="mt-8 inline-block text-sm font-medium text-white/80 hover:text-red-200"
                  >
                    Read Article →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black px-6 pb-24">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[32px] border border-white/10 bg-white/[0.04] p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Need help with bikes, gear or repairs?
              </h2>
              <p className="mt-3 text-white/70">
                Speak directly with Alex Motosport for sourcing, workshop support or setup advice.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openEnquiryMenu(whatsappMessages.general)}
              className="inline-flex rounded-lg bg-white px-6 py-3 font-medium text-black hover:bg-[#fff1f1]"
            >
              Make an Enquiry
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}