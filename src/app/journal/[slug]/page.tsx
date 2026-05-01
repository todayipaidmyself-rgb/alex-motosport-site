"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { openEnquiryMenu, whatsappMessages } from "@/lib/contact";

const articles = [
  {
    slug: "best-dirt-bikes-cyprus",
    category: "Buying Guide",
    title: "Best Dirt Bikes for Beginners in Cyprus",
    image: "/images/editorial/alex-hero-studio-bike.webp",
    intro:
      "Buying your first dirt bike in Cyprus should feel exciting, not confusing. For many new riders in Paphos, the challenge is not finding a bike they like the look of, but choosing one that actually matches their experience, local terrain and budget. The right beginner setup should help you build confidence, develop control and enjoy riding regularly without turning every outing into a fight with the bike.",
    sections: [
      {
        heading: "Start with the terrain you will actually ride",
        body: [
          "Cyprus gives beginner riders a very mixed environment. Around Paphos, you can move from compact dirt and dry farm tracks to loose stone, rougher off-road surfaces and open areas that feel simple until fatigue sets in. That means your first dirt bike should be chosen for how it behaves across real local terrain, not just how it sounds on paper. A bike that feels manageable at lower speed, tracks predictably over uneven ground and does not overwhelm you with sudden power is often the better long-term choice.",
          "A common mistake is buying based on imagined future riding rather than current reality. Riders picture aggressive weekend sessions and assume they need a large, high-output machine from day one. In practice, most beginners in Cyprus benefit more from balance, usability and confidence than raw performance. If you are still learning throttle control, braking, body position and line choice, a more approachable dirt bike will usually help you progress faster and ride more often.",
        ],
      },
      {
        heading: "Why engine size matters more than ego",
        body: [
          "Engine size is one of the first things new riders ask about, and it is also where many get misled. Bigger is not automatically better. A bike with too much power can become tiring on dusty terrain, harder to recover when you make a mistake and more intimidating in technical sections. Smaller and mid-range options usually give beginner riders the space to build technique properly before stepping up to something more demanding.",
          "In Cyprus, that decision matters even more because the riding environment often combines heat, reduced traction and surfaces that punish rushed inputs. A beginner-friendly dirt bike should feel easy to control when you are tired, turning slowly or navigating unfamiliar ground. If a bike constantly pushes you outside your comfort zone, you will learn more slowly and enjoy it less. Confidence grows when the bike works with you rather than against you.",
        ],
      },
      {
        heading: "Why Kayo bikes are a strong starting point",
        body: [
          "For many first-time riders, Kayo bikes are worth serious consideration because they sit in a sensible space between price, usability and everyday practicality. Not every beginner wants to make a major financial commitment before understanding what type of riding they will stick with. Kayo gives new riders an accessible way into dirt bikes without removing the sense that they are buying a proper machine designed to be used, maintained and improved with experience.",
          "That balance matters for a Cyprus-based rider. Entry-level buyers often need more than a bike alone. They also need protective gear, maintenance basics and advice on how to set the bike up for local riding conditions. Spending every euro on the headline bike and leaving no room for boots, helmet, gloves and ongoing care usually creates problems later. Many riders exploring a Bikes & Gear setup are better served by a well-judged package than by a more expensive bike that leaves the rest of the essentials underfunded.",
        ],
      },
      {
        heading: "Beginner mistakes that cost money and confidence",
        body: [
          "The most common mistake is choosing a bike that is too powerful, too tall or too aggressive for your actual experience. The second is underestimating how important gear and maintenance are. In Cyprus, a beginner dirt bike still needs regular cleaning, chain care, inspection and attention after dusty rides. Neglecting those basics shortens component life and makes the whole ownership experience feel harder than it should. Riders also often ignore early warning signs simply because the bike still starts and moves.",
          "Another mistake is treating guidance as optional. A short conversation with someone who understands bikes, gear, local terrain and repairs support can save a new rider from weeks of uncertainty and costly corrections. If you are not sure what suits your size, confidence level or intended riding around Paphos, asking before you buy is often the smartest part of the process.",
        ],
      },
    ],
  },
  {
    slug: "where-to-ride-cyprus",
    category: "Riding Guide",
    title: "Where to Ride Motorbikes in Cyprus",
    image: "/images/editorial/alex-action-dirt-ride.webp",
    intro:
      "Few places offer riders the mix that Cyprus does. Within a relatively short distance, you can move from coastal roads to village routes, from smoother tarmac to rough off-road surfaces, and from easy scenic riding to terrain that demands planning and proper setup. For riders based in Paphos, that variety is one of the biggest advantages of living and riding here, but it also means route choice should be guided by skill, preparation and awareness rather than impulse.",
    sections: [
      {
        heading: "Road riding in Paphos and beyond",
        body: [
          "Paphos is a strong base for road riders because it gives easy access to quieter local roads, inland climbs and scenic stretches that open up quickly once you leave busier areas behind. These rides can be relaxed and rewarding, especially for riders who want a mix of views and flowing roads without needing to travel far. That said, road conditions in Cyprus can change quickly. Surface quality varies, bends can tighten unexpectedly and loose debris is not unusual, particularly after dry windy periods.",
          "The best road rides are not always the fastest ones. In Cyprus, a premium riding experience often comes from choosing roads that suit your bike and your pace. Riders with a more touring-focused motorbike may want comfort and rhythm, while others prefer shorter routes that still offer enough elevation and variety to stay engaging. Understanding the condition of the road, the time of day and the amount of traffic makes a big difference to how enjoyable and safe the ride feels.",
        ],
      },
      {
        heading: "Off-road riding requires a different mindset",
        body: [
          "Off-road terrain in Cyprus can be extremely rewarding, but it is rarely forgiving when approached casually. The ground around Paphos and across the island often includes hard-packed dirt, dry loose stone, washed-out sections and surfaces that feel simple until your tyres or technique are tested. Riders coming from the road sometimes underestimate how tiring off-road riding can be, especially in the heat. A dirt bike setup that feels excellent on one surface may feel demanding on another if the tyres, suspension or rider expectations are wrong.",
          "This is why route choice and bike choice need to work together. A rider planning regular off-road sessions should think carefully about tyres, protective gear, hydration and how much time they really spend on technical terrain. Not every track is suitable for every rider. Starting on approachable surfaces and building upward is usually a better strategy than treating every dirt route as an adventure challenge from the first weekend.",
        ],
      },
      {
        heading: "Safety and legal awareness matter as much as scenery",
        body: [
          "A good riding culture in Cyprus is about more than finding impressive places to ride. It also means knowing where you should and should not be. Riders need to stay aware of road laws, access limitations, land use and the practical responsibility of sharing space respectfully. Just because a route looks open does not mean it is appropriate for unrestricted riding. That is especially true when you move through quieter local areas, agricultural land or routes used by residents and workers.",
          "Safety also starts before the engine is turned on. Check your tyres, brakes, chain, fuel and basic condition before setting off. For longer rides outside Paphos, it is worth carrying water, a phone, a few tools and a realistic plan. Riders who prepare well are not being overly cautious. They are making sure that a mechanical issue, navigation mistake or sudden change in conditions does not turn a good day into a stressful one.",
        ],
      },
      {
        heading: "Match the route to the bike and the rider",
        body: [
          "Some riders in Cyprus need a road-focused setup for regular use and occasional weekend routes. Others want a more dirt-capable bike that feels at home away from the tarmac. The important point is honesty. If your riding is mostly local road use with light exploration, your ideal setup may be very different from someone chasing frequent off-road sessions. The same applies to gear. A helmet, jacket, tyres or luggage solution should reflect how and where you actually ride rather than a one-size-fits-all idea of adventure.",
          "If you are trying to work out whether your current bike is right for the routes you want to explore, practical advice can save both money and frustration. Riders often focus on destination first and setup second, when in reality the best rides in Cyprus usually happen when the bike, gear and expectations are aligned from the beginning.",
        ],
      },
    ],
  },
  {
    slug: "motorbike-repairs-cyprus",
    category: "Workshop Advice",
    title: "Motorbike Repairs in Cyprus",
    image: "/images/editorial/alex-bike-engine-action-detail.webp",
    intro:
      "Motorbike repairs in Cyprus are shaped by the realities of the local environment. Heat, dust, rough surfaces, stop-start use and mixed road and dirt riding all create their own kind of wear. For riders in Paphos, that means problems often develop gradually rather than dramatically at first. The smartest approach is not waiting for a breakdown, but spotting changes early and getting the right support before a minor issue becomes an expensive one.",
    sections: [
      {
        heading: "Heat, dust and terrain all accelerate wear",
        body: [
          "Cyprus conditions are tougher on a motorbike than many riders first realise. Summer temperatures place extra stress on fluids, cooling systems, batteries and general running consistency. Dust gets into filters, chains and moving parts much faster than riders expect, especially if the bike sees any off-road use. Rougher surfaces add more strain to tyres, suspension, bearings and brake components. None of that means a bike cannot stay reliable here. It means routine care matters more.",
          "Riders often think of dirt and heat as minor background factors, but in practice they influence performance, wear rate and service needs throughout the year. If your motorbike feels harsher, sounds different or starts less cleanly than before, that is usually a sign to investigate rather than ride through it and hope for the best.",
        ],
      },
      {
        heading: "Common issues riders in Paphos should not ignore",
        body: [
          "Some of the most common repair problems in Cyprus begin with small symptoms. Hard starting, inconsistent idle, reduced brake feel, unusual vibration, weak battery performance, chain wear and poor throttle response are all easy to dismiss when the bike still runs. The problem is that many of these issues do not stay small for long. A neglected chain can damage related components. A dirty air filter can affect running and long-term engine health. Worn tyres and delayed brake maintenance reduce both safety and confidence on already variable road conditions.",
          "Off-road riders have another layer to think about. Dirt bike use around Paphos means more contamination from dust and more stress on wear items. That is why cleaning, checking and servicing should be built into ownership rather than treated as occasional effort. Repairs support is far more effective when a rider notices change early and acts on it before more parts are involved.",
        ],
      },
      {
        heading: "Why regular servicing is the cheaper option",
        body: [
          "Many riders delay servicing because the bike still feels usable. That usually turns out to be false economy. In Cyprus, local climate and riding conditions mean service intervals deserve respect. Oil, filters, brake condition, cooling system checks, tyres, chain adjustment and electrical inspection all play a role in keeping a bike dependable. Missing those basics may save money this month, but it often creates a larger bill later when avoidable wear turns into failure.",
          "Professional servicing is not just about changing parts. It is about spotting what is beginning to wear, what needs adjustment and what could create a bigger issue if left alone. That kind of workshop insight is especially valuable for riders who rely on their bike regularly or who mix road and dirt riding and want to keep performance sharp over time.",
        ],
      },
      {
        heading: "When to stop guessing and get help",
        body: [
          "One of the most expensive habits in motorbike ownership is trying to guess your way through every problem. Quick fixes and budget solutions can be useful in the right context, but replacing random parts without diagnosis often creates more confusion and extra cost. If your bike feels different, sounds rough, runs hot or loses confidence in the way it rides, it is usually better to pause and get it checked properly.",
          "That is where practical local support matters. Riders in Paphos often need advice that reflects Cyprus conditions, not generic maintenance assumptions. Whether you need help understanding a new issue, planning servicing properly or working out if your bike and gear setup are putting too much strain on the machine, early guidance usually leads to a better outcome than waiting for something to fail completely.",
        ],
      },
    ],
  },
];

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) return notFound();

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative h-[55vh] min-h-[420px] w-full">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85),rgba(0,0,0,0.4),transparent)]" />

        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 md:px-12">
          <div className="max-w-4xl">
            <Link
              href="/journal"
              className="inline-flex text-sm font-medium text-white/70 transition hover:text-white"
            >
              Back to Journal
            </Link>
            <p className="mt-4 text-sm uppercase tracking-[0.22em] text-white/55">
              {article.category} · Cyprus Riders · 5 min read
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-12">
            <p className="text-[17px] leading-relaxed text-white/75 md:text-[18px]">
              {article.intro}
            </p>

            {article.sections.map((section) => (
              <section key={section.heading} className="space-y-5">
                <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  {section.heading}
                </h2>
                <div className="space-y-6 text-[17px] leading-relaxed text-white/75 md:text-[18px]">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* MID CTA */}
          <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm text-white/60">
              Not sure what setup or repairs your bike needs?
            </p>

            <button
              onClick={() => openEnquiryMenu(whatsappMessages.general)}
              className="mt-4 inline-flex rounded-lg bg-white px-5 py-3 text-black font-medium hover:bg-[#fff1f1]"
            >
              Speak to Alex Motosport
            </button>
          </div>

          {/* FINAL CTA */}
          <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-2xl font-semibold">
              Ready to get practical advice?
            </h2>

            <p className="mt-3 text-white/65">
              Speak with Alex Motosport about bikes, gear, parts or repairs in Paphos.
            </p>

            <button
              onClick={() => openEnquiryMenu(whatsappMessages.general)}
              className="mt-6 inline-flex rounded-lg bg-white px-6 py-3 text-black font-medium transition hover:bg-[#fff1f1]"
            >
              Make an Enquiry
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}