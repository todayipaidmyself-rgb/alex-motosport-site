 "use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import MenuIcon from "@/assets/icons/menu.svg";

export const Navbar = () => {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/bikes-gear", label: "Bikes & Gear" },
    { href: "/journal", label: "Journal" },
    { href: "/shop", label: "Shop" },
  ];

  return (
    <section className="py-4 bg-black">
      <div className="px-4">
        <div className="flex justify-between items-center">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,rgba(185,28,28,0.35),rgb(252,214,255),rgb(41,216,255),rgb(248,154,191),rgba(185,28,28,0.3))] blur-md">
            </div>
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
          <div className="border border-white border-opacity-30 size-10 inline-flex justify-center items-center rounded-lg md:hidden">
            <MenuIcon className="text-white" />
          </div>
          <nav className="text-white/60 items-center gap-6 hidden md:flex">
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
        </div>
      </div>
    </section>
  );
};
