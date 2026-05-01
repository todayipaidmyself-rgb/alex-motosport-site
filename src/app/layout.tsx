import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import { Banner } from "@/sections/Banner";
import { Navbar } from "@/sections/Navbar";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

const siteTitle = "Alex Motosport | Bikes, Gear & Repairs in Paphos";
const siteDescription =
  "Motocross and enduro bikes, riding gear, parts sourcing and repair support in Paphos, Cyprus.";

export const metadata: Metadata = {
  metadataBase: new URL("https://alexmotosport.com"),

  title: siteTitle,
  description: siteDescription,

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: "Alex Motosport",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alex Motosport bikes, gear and repairs in Paphos, Cyprus",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(dmSans.className, "antialiased")}>
        <Navbar />
        <Banner />
        {children}
      </body>
    </html>
  );
}