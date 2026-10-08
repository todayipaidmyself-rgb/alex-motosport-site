export const BUSINESS_NAME = "Alex Motosport CY LTD";

export const BUSINESS_ADDRESS = {
  streetAddress: "47 Hellados Avenue, Shops 4–5",
  addressLocality: "Paphos",
  postalCode: "8020",
  addressCountry: "Cyprus",
} as const;

export const BUSINESS_ADDRESS_LINES = [
  BUSINESS_ADDRESS.streetAddress,
  `${BUSINESS_ADDRESS.addressLocality} ${BUSINESS_ADDRESS.postalCode}`,
  BUSINESS_ADDRESS.addressCountry,
] as const;

export const BUSINESS_PHONE_DISPLAY = "+357 26 270202";
export const BUSINESS_PHONE_LINK = "tel:+35726270202";

export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Alex+Motosport+Hellados+47+Paphos";

export const WHATSAPP_NUMBER = "35797975657";

export const getWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const whatsappMessages = {
  general: "Hi Alex Motosport, I’d like to make an enquiry.",
  home: "Hi Alex Motosport, I’m interested in your bikes, gear, parts or sourcing support.",
  bikesGear: "Hi Alex Motosport, I’m looking for help with bikes, gear, parts or repairs.",
  product: (productName: string) =>
    `Hi Alex Motosport, I’m interested in ${productName}. Can you confirm availability and pricing?`,
  sourcing:
    "Hi Alex Motosport, I’ve found a product I’d like help sourcing. Can I send you the link?",
  repairs: "Hi Alex Motosport, I’d like help with bike repairs or servicing.",
};

export const OPEN_ENQUIRY_MENU_EVENT = "alex-open-enquiry-menu";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS_NAME,
  url: "https://alexmotosport.com",
  image: "https://alexmotosport.com/og-image.jpg",
  telephone: BUSINESS_PHONE_DISPLAY,
  hasMap: GOOGLE_MAPS_URL,
  address: {
    "@type": "PostalAddress",
    ...BUSINESS_ADDRESS,
  },
  sameAs: [
    "https://www.instagram.com/alex_motosport_cy/?igsh=NHN3b3U4OG5hc2ts",
    "https://www.tiktok.com/@alexconstantinouwrx?_r=1&_t=ZN-95zf23qneH0",
  ],
} as const;

export const openEnquiryMenu = (message: string) => {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent(OPEN_ENQUIRY_MENU_EVENT, {
      detail: { message },
    }),
  );
};
