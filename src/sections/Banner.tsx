import { getWhatsAppUrl, whatsappMessages } from "@/lib/contact";

export const Banner = () => {
  return (
    <section className="bg-[linear-gradient(to_right,rgb(252,214,255,.7),rgb(41,216,255,.7),rgb(255,253,128,.7),rgb(248,154,191,.7),rgb(252,214,255,.7))] bg-opacity-70 py-3 text-center">
      <div className="container">
        <p className="font-medium">
          <a
            href={getWhatsAppUrl(whatsappMessages.general)}
            className="underline underline-offset-4"
          >
            Paphos-Based Motocross Store, Enquire Direct via WhatsApp →
          </a>
        </p>
      </div>
    </section>
  );
};