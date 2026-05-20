import Image from "next/image";
import Link from "next/link";
import InstaIcon from "@/assets/icons/insta.svg";
import TiktokIcon from "@/assets/icons/tiktok.svg";

const mapsUrl =
  "https://maps.google.com/?q=Agiou+Spyridonos+19,+Paphos+8021,+Cyprus";

export const Footer = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/12 bg-black py-10 text-white/60 md:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.08),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(217,75,75,0.08),transparent_32%)]" />

      <div className="container relative">
        <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] px-6 py-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_80px_rgba(0,0,0,0.42)] backdrop-blur-sm md:px-8 md:py-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.95fr_1.15fr_0.95fr] md:items-stretch lg:gap-12">

            {/* LEFT COLUMN */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <Image
                src="/images/brands/alex-motosport-logo.png"
                alt="Alex Motosport logo"
                width={280}
                height={96}
                className="h-auto w-[150px] md:w-[176px]"
              />

              <p className="mt-5 text-white/85">
                Your Bike. Our Pride &amp; Passion.
              </p>

              <p className="mt-3 max-w-sm text-white/55">
                Local support for bikes, riding gear, parts, accessories and
                trusted sourcing across Paphos and Cyprus.
              </p>

              <div className="mt-7">
                <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                  Quick Links
                </p>

                <ul className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm md:justify-start">
                  <li>
                    <Link
                      href="/"
                      className="transition duration-200 hover:text-white"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/bikes-gear"
                      className="transition duration-200 hover:text-white"
                    >
                      Bikes &amp; Gear
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/journal"
                      className="transition duration-200 hover:text-white"
                    >
                      Journal
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/shop"
                      className="transition duration-200 hover:text-white"
                    >
                      Shop
                    </Link>
                  </li>
                </ul>
              </div>

              <ul className="mt-7 flex justify-center gap-3 md:justify-start">
                <li>
                  <a
                    href="https://www.instagram.com/alex_motosport_cy/?igsh=NHN3b3U4OG5hc2ts"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Alex Motosport Instagram"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/55 transition duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:text-white"
                  >
                    <InstaIcon />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.tiktok.com/@alexconstantinouwrx?_r=1&_t=ZN-95zf23qneH0"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Alex Motosport TikTok"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/55 transition duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:text-white"
                  >
                    <TiktokIcon />
                  </a>
                </li>
              </ul>
            </div>

            {/* CENTER MAP CARD */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-[320px] overflow-hidden rounded-[28px] border border-white/12 bg-[linear-gradient(135deg,rgba(14,14,16,1),rgba(22,18,30,0.96),rgba(14,14,16,1))] p-7 md:min-h-full md:p-8 text-left transition duration-300 hover:-translate-y-0.5 hover:border-white/20"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.11),transparent_34%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(217,75,75,0.11),transparent_30%)]" />

              <div className="pointer-events-none absolute left-[18%] top-[24%] h-24 w-24 rounded-full border border-dashed border-white/10" />

              <div className="pointer-events-none absolute bottom-[18%] right-[14%] h-20 w-20 rounded-full border border-dashed border-white/10" />

              <div className="relative flex w-full flex-col justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-white/45">
                    Visit The Store
                  </p>

                  <div className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/75">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-5 w-5 fill-none stroke-current"
                      strokeWidth="1.8"
                    >
                      <path
                        d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </div>

                  <div className="mt-6 space-y-2 text-base leading-relaxed text-white/85 md:text-lg">
                    <p>Agiou Spyridonos 19, Shop 4</p>
                    <p>Paphos 8021, Cyprus</p>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-sm text-white/55">
                    Find Us In Paphos
                  </p>

                  <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white/85 transition duration-200 group-hover:translate-x-0.5 group-hover:text-white">
                    <span>Open in Google Maps</span>
                    <span aria-hidden="true">→</span>
                  </p>
                </div>
              </div>
            </a>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <p className="text-sm uppercase tracking-[0.22em] text-white/45">
                Contact &amp; Enquiry
              </p>

              <div className="mt-5 space-y-3 text-white/72">
                <a
                  href="tel:+35726270202"
                  className="block transition duration-200 hover:text-white"
                >
                  +357 26 27 02 02
                </a>

                <a
                  href="tel:+35797975657"
                  className="block transition duration-200 hover:text-white"
                >
                  +357 97 97 56 57
                </a>

                <a
                  href="mailto:info@alexmotosport.com"
                  className="block transition duration-200 hover:text-white"
                >
                  info@alexmotosport.com
                </a>
              </div>

              <a
                href="https://wa.me/35797975657"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#fff1f1] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)]"
              >
                Ask Alex on WhatsApp
              </a>

              <div className="mt-6 space-y-1 text-sm text-white/45">
                <p>Mon to Fri 9am to 6pm</p>
                <p>Sat 9am to 1pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="relative mt-8 border-t border-white/10 pt-5 text-center text-xs text-white/35 md:flex md:items-center md:justify-between md:text-left">
          <p>
            Creative experience crafted by{" "}
            <a
              href="https://createdbygustavo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-200 hover:text-white/70"
            >
              Gustavo
            </a>
          </p>

          <p className="mt-2 md:mt-0">
            Powered by{" "}
            <a
              href="https://ultimateworkzcy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-200 hover:text-white/70"
            >
              UltimateWorkz
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};