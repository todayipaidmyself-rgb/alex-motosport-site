"use client";

import { FormEvent, useEffect, useState } from "react";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/contact";

type EnquiryMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  sourceMessage?: string;
};

export const EnquiryMenu = ({
  isOpen,
  onClose,
  sourceMessage,
}: EnquiryMenuProps) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setMessage(sourceMessage || "");
    }
  }, [isOpen, sourceMessage]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowConfirmation(true);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] transition duration-300 ${
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        aria-label="Close enquiry menu backdrop"
        onClick={onClose}
        className="absolute inset-0 bg-black/80"
      />

      <div className="absolute inset-0 overflow-y-auto bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.12),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(217,75,75,0.12),transparent_32%)]" />

        <div
          className={`relative min-h-screen transition duration-500 ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="container flex min-h-screen flex-col px-4 py-6 md:py-8">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-white/70 transition duration-300 hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d94b4b]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                aria-label="Close enquiry menu"
              >
                ×
              </button>
            </div>

            <div className="grid flex-1 grid-cols-1 gap-8 py-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12">
              <div className="max-w-xl">
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">Enquiry</p>
                <h2 className="mt-4 text-4xl font-bold tracking-tighter text-white md:text-6xl">
                  Ask Alex Motosport
                </h2>
                <p className="mt-5 max-w-lg text-base text-white/70 md:text-lg">
                  Send a bike, gear, repair or product sourcing enquiry. We&apos;ll help you
                  confirm availability, pricing and the best next step.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={getWhatsAppUrl(sourceMessage || whatsappMessages.general)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-black transition duration-300 hover:bg-[#fff1f1] hover:shadow-[0_0_24px_rgba(217,75,75,0.24),0_0_32px_rgba(168,85,247,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d94b4b]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    WhatsApp Alex
                  </a>
                  <a
                    href="tel:+35726270202"
                    className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition duration-300 hover:border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d94b4b]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    Call Shop
                  </a>
                </div>

                <a
                  href="mailto:info@alexmotosport.com"
                  className="mt-6 inline-flex text-white/70 transition duration-300 hover:text-white"
                >
                  info@alexmotosport.com
                </a>

                <div className="mt-8 space-y-2 text-sm text-white/60 md:text-base">
                  <p>Paphos, Cyprus</p>
                  <p>Mon–Fri 9am–6pm · Sat 9am–1pm</p>
                  <p>Agiou Spyridonos, 19, SHOP 4, 8022, Pafos</p>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm md:p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="enquiry-name" className="mb-2 block text-sm text-white/60">
                      Name
                    </label>
                    <input
                      id="enquiry-name"
                      name="name"
                      type="text"
                      className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-white placeholder:text-white/30 focus:border-white/20 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="enquiry-phone" className="mb-2 block text-sm text-white/60">
                      Phone
                    </label>
                    <input
                      id="enquiry-phone"
                      name="phone"
                      type="tel"
                      className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-white placeholder:text-white/30 focus:border-white/20 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="enquiry-subject" className="mb-2 block text-sm text-white/60">
                      What are you looking for?
                    </label>
                    <input
                      id="enquiry-subject"
                      name="subject"
                      type="text"
                      placeholder="Bike, helmet, repair, part, product link..."
                      className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-white placeholder:text-white/30 focus:border-white/20 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="enquiry-message" className="mb-2 block text-sm text-white/60">
                      Message / Product link
                    </label>
                    <textarea
                      id="enquiry-message"
                      name="message"
                      rows={6}
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/30 focus:border-white/20 focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-black transition duration-300 hover:bg-[#fff1f1] hover:shadow-[0_0_24px_rgba(217,75,75,0.24),0_0_32px_rgba(168,85,247,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d94b4b]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      Send Enquiry
                    </button>
                    {showConfirmation && (
                      <p className="mt-3 text-sm text-white/60">
                        Thanks — please use WhatsApp for the fastest reply while online form
                        handling is being connected.
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
