"use client";

import clsx from "clsx";
import { OPEN_ENQUIRY_MENU_EVENT, whatsappMessages } from "@/lib/contact";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import MenuIcon from "@/assets/icons/menu.svg";
import { EnquiryMenu } from "@/sections/EnquiryMenu";

export const Navbar = () => {
  const pathname = usePathname();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sourceMessage, setSourceMessage] = useState(whatsappMessages.general);

  const links = [
    { href: "/", label: "Home" },
    { href: "/bikes-gear", label: "Bikes & Gear" },
    { href: "/journal", label: "Journal" },
    { href: "/shop", label: "Shop" },
  ];

  useEffect(() => {
    const handleOpenEnquiryMenu = (event: Event) => {
      const customEvent = event as CustomEvent<{ message?: string }>;
      setSourceMessage(customEvent.detail?.message || whatsappMessages.general);
      setIsEnquiryOpen(true);
    };

    window.addEventListener(
      OPEN_ENQUIRY_MENU_EVENT,
      handleOpenEnquiryMenu as EventListener,
    );

    return () => {
      window.removeEventListener(
        OPEN_ENQUIRY_MENU_EVENT,
        handleOpenEnquiryMenu as EventListener,
      );
    };
  }, []);

  return (
    <>
      <section className="bg-black py-4">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="relative">
              <div className="absolute bottom-0 top-2 w-full bg-[linear-gradient(to_right,rgba(185,28,28,0.35),rgb(252,214,255),rgb(41,216,255),rgb(248,154,191),rgba(185,28,28,0.3))] blur-md" />
              <Link href="/" className="relative block w-[110px] md:w-[140px]">
                <Image
                  src="/images/brands/alex-motosport-logo.png"
                  alt="Alex Motosport logo"
                  width={280}
                  height={96}
                  className="h-auto w-full"
                  priority
                />
              </Link>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <button
                type="button"
                onClick={() => {
                  setSourceMessage(whatsappMessages.general);
                  setIsEnquiryOpen(true);
                }}
                className="inline-flex min-h-10 items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition duration-300 hover:bg-[#fff1f1] hover:shadow-[0_0_20px_rgba(217,75,75,0.2),0_0_24px_rgba(168,85,247,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d94b4b]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Enquire
              </button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((current) => !current)}
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-white border-opacity-30"
              >
                <MenuIcon className="text-white" />
              </button>
            </div>

            <div className="hidden items-center gap-5 md:flex">
              <nav className="flex items-center gap-6 text-white/60">
                {links.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={clsx(
                        "relative rounded-md px-1 py-1 transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d94b4b]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                        isActive
                          ? "text-white"
                          : "hover:text-white hover:[text-shadow:0_0_12px_rgba(217,75,75,0.28)]",
                      )}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 h-px w-full bg-[linear-gradient(to_right,rgba(217,75,75,0.9),rgba(168,85,247,0.7))]" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              <button
                type="button"
                onClick={() => {
                  setSourceMessage(whatsappMessages.general);
                  setIsEnquiryOpen(true);
                }}
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-black transition duration-300 hover:bg-[#fff1f1] hover:shadow-[0_0_24px_rgba(217,75,75,0.24),0_0_32px_rgba(168,85,247,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d94b4b]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Enquire
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="mt-4 rounded-2xl border border-white/10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4 text-white/70 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_60px_rgba(0,0,0,0.35)] md:hidden">
              <nav className="flex flex-col gap-2">
                {links.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={clsx(
                        "rounded-lg px-3 py-3 transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d94b4b]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                        isActive
                          ? "bg-white/10 text-white"
                          : "hover:bg-white/5 hover:text-white",
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </section>

      <EnquiryMenu
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        sourceMessage={sourceMessage}
      />
    </>
  );
};