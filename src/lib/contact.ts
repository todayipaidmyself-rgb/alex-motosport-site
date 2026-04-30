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

export const openEnquiryMenu = (message: string) => {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent(OPEN_ENQUIRY_MENU_EVENT, {
      detail: { message },
    }),
  );
};
