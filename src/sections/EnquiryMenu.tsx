"use client";

import { useEffect, useState, FormEvent } from "react";
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
  const [message, setMessage] = useState("");
  const [pageUrl, setPageUrl] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setMessage(sourceMessage || "");
      setPageUrl(window.location.href);
      setIsSubmitted(false);
      setSubmitError("");
    }
  }, [isOpen, sourceMessage]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitError("");

    const formData = new FormData(event.currentTarget);

    try {
      const res = await fetch("https://formspree.io/f/mgodekee", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed");

      setIsSubmitted(true);
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or message Alex on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[100] ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      } transition`}
    >
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />

      <div className="relative min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-2xl rounded-3xl bg-[#050505] border border-white/10 p-6">

          {isSubmitted ? (
            // ✅ SUCCESS STATE
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                Enquiry sent
              </p>

              <h2 className="text-3xl font-bold text-white">
                Thanks — Alex Motosport has received your message.
              </h2>

              <p className="text-white/70">
                We’ll get back to you as soon as possible.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={onClose}
                  className="bg-white text-black px-5 py-3 rounded-lg"
                >
                  Close
                </button>

                <a
                  href={getWhatsAppUrl(sourceMessage || whatsappMessages.general)}
                  target="_blank"
                  className="border border-white/10 px-5 py-3 rounded-lg text-white"
                >
                  WhatsApp Alex
                </a>
              </div>
            </div>
          ) : (
            // ✅ FORM
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="sourceMessage" value={sourceMessage || ""} />
              <input type="hidden" name="pageUrl" value={pageUrl} />

              <input
                name="name"
                placeholder="Name"
                required
                className="w-full h-12 px-4 rounded-xl bg-white/5 text-white"
              />

              <input
                name="phone"
                placeholder="Phone"
                className="w-full h-12 px-4 rounded-xl bg-white/5 text-white"
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full h-12 px-4 rounded-xl bg-white/5 text-white"
              />

              <input
                name="subject"
                placeholder="What are you looking for?"
                className="w-full h-12 px-4 rounded-xl bg-white/5 text-white"
              />

              <textarea
                name="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 text-white"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-white text-black rounded-lg"
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
              </button>

              {submitError && (
                <p className="text-red-400 text-sm">{submitError}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};