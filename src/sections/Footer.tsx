import Image from "next/image";
import Link from "next/link";
import InstaIcon from "@/assets/icons/insta.svg";
import XSocialIcon from "@/assets/icons/x-social.svg";
import TiktokIcon from "@/assets/icons/tiktok.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";

export const Footer = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/12 bg-black py-8 text-white/60 md:py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.08),transparent_30%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(217,75,75,0.08),transparent_32%)]"></div>
      <div className="container">
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_0.8fr_1fr] md:gap-10">
          <div className="text-center md:text-left">
            <Image
              src="/images/brands/alex-motosport-logo.png"
              alt="Alex Motosport logo"
              width={280}
              height={96}
              className="mx-auto mb-4 h-auto w-[150px] md:mx-0 md:w-[176px]"
            />
            <div className="select-none">
              <p className="mb-2 text-white/80">Your Bike. Our Pride &amp; Passion.</p>
              <p className="max-w-sm text-white/55">
                Local support for bikes, riding gear, parts, accessories and trusted sourcing
                across Paphos and Cyprus.
              </p>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-sm uppercase tracking-[0.22em] text-white/45">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/" className="transition duration-200 hover:text-white">Home</Link></li>
              <li><Link href="/bikes-gear" className="transition duration-200 hover:text-white">Bikes &amp; Gear</Link></li>
              <li><Link href="/journal" className="transition duration-200 hover:text-white">Journal</Link></li>
              <li><Link href="/shop" className="transition duration-200 hover:text-white">Shop</Link></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-sm uppercase tracking-[0.22em] text-white/45">Contact &amp; Enquiry</h3>
            <div className="mt-4 space-y-2 text-white/60">
              <p>Paphos, Cyprus</p>
              <a href="tel:+35726270202" className="block transition duration-200 hover:text-white">
                +357 26 27 02 02
              </a>
              <a href="tel:+35797975657" className="block transition duration-200 hover:text-white">
                +357 97 97 56 57
              </a>
              <a
                href="mailto:info@alexmotosport.com"
                className="block transition duration-200 hover:text-white"
              >
                info@alexmotosport.com
              </a>
            </div>
            <div className="mt-4">
              <a
                href="https://wa.me/35797975657"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-black transition duration-300 hover:bg-[#fff1f1] hover:shadow-[0_0_24px_rgba(217,75,75,0.24),0_0_32px_rgba(168,85,247,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d94b4b]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Ask Alex on WhatsApp
              </a>
            </div>
            <p className="mt-3 text-sm text-white/45">Mon–Fri 9am–6pm · Sat 9am–1pm</p>
            <ul className="mt-5 flex justify-center gap-2.5 md:justify-start">
              <li className="cursor-pointer transition duration-200 hover:text-white"><XSocialIcon /></li>
              <li className="cursor-pointer transition duration-200 hover:text-white"><InstaIcon /></li>
              <li className="cursor-pointer transition duration-200 hover:text-white"><TiktokIcon /></li>
              <li className="cursor-pointer transition duration-200 hover:text-white"><YoutubeIcon /></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
