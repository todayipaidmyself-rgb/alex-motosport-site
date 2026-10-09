export type BikeProduct = {
  id: string;
  name: string;
  variant?: string;
  enquiryName?: string;
  specs: string;
  price: string;
  image: string;
  recentlyAdded?: boolean;
  categories?: BikeCategory[];
  highlights?: {
    label: string;
    value: string;
  }[];
};

export type BikeCategory = "motorbikes" | "quads-atvs" | "karts" | "electric";

export const bikeCategoryLabels: Record<BikeCategory, string> = {
  motorbikes: "Motorbikes",
  "quads-atvs": "Quads & ATVs",
  karts: "Karts",
  electric: "Electric",
};

export const bikeAvailabilityNote =
  "Current availability is confirmed directly with Alex Motosport.";

export const bikeProducts: BikeProduct[] = [
  // Product facts and photos verified against Motorace on 2026-10-08.
  // Supplier stock/prices are not confirmation of Alex Motosport stock/prices.
  {
    id: "kayo-a125-pro-grey-pro",
    name: "Kayo A125 Pro",
    variant: "Grey Pro",
    enquiryName: "Kayo A125 Pro - Grey Pro",
    specs:
      "Youth ATV with a 123.6cc four-stroke engine, automatic transmission with reverse and electric start. Adjustable suspension and hydraulic disc brakes front and rear.",
    price: "Price on enquiry",
    image: "/images/catalog/kayo/a125-pro-grey.webp",
    recentlyAdded: true,
    categories: ["quads-atvs"],
    highlights: [
      { label: "Engine", value: "123.6cc 4-stroke" },
      { label: "Transmission", value: "Automatic + reverse" },
      { label: "Start", value: "Electric start" },
    ],
  },
  {
    id: "kayo-k2-pro-black-red",
    name: "Kayo K2 Pro",
    variant: "Black / Red",
    enquiryName: "Kayo K2 Pro - Black / Red",
    specs:
      "249.9cc four-stroke engine with a five-speed manual gearbox and electric/kick start. Adjustable rear suspension, hydraulic brakes and 21-inch front / 18-inch rear wheels.",
    price: "Price on enquiry",
    image: "/images/catalog/kayo/k2-pro-black-red.webp",
    recentlyAdded: true,
    categories: ["motorbikes"],
    highlights: [
      { label: "Engine", value: "249.9cc 4-stroke" },
      { label: "Transmission", value: "5-speed manual" },
      { label: "Wheels", value: "21in front / 18in rear" },
    ],
  },
  {
    id: "kayo-t4-300-orange-white",
    name: "Kayo T4 300",
    variant: "Orange / White",
    enquiryName: "Kayo T4 300 - Orange / White",
    specs:
      "285.8cc four-stroke engine with a six-speed manual gearbox and electric start. Adjustable front and rear suspension, 21-inch front / 18-inch rear wheels and a 940mm seat height.",
    price: "Price on enquiry",
    image: "/images/catalog/kayo/t4-300-orange-white.webp",
    recentlyAdded: true,
    categories: ["motorbikes"],
    highlights: [
      { label: "Engine", value: "285.8cc 4-stroke" },
      { label: "Transmission", value: "6-speed manual" },
      { label: "Wheels", value: "21in front / 18in rear" },
    ],
  },
  {
    id: "kt50",
    name: "KT50",
    specs: "Kayo model available through Alex Motosport",
    price: "Price on enquiry",
    image: "/images/catalog/kayo/kt50-3_1_1.png",
    categories: ["motorbikes"],
  },
  {
    id: "a50",
    name: "A50",
    specs: "Kayo model available through Alex Motosport",
    price: "Price on enquiry",
    image: "/images/catalog/kayo/a50-prof-pic2.jpg",
    categories: ["quads-atvs"],
  },
  {
    id: "ea50-electric",
    name: "EA50 Electric",
    specs: "Kayo model available through Alex Motosport",
    price: "Price on enquiry",
    image: "/images/catalog/kayo/ea50-electric3.jpg",
    categories: ["quads-atvs", "electric"],
  },
  {
    id: "s70-cart-category",
    name: "S70 Cart Category",
    specs: "Kayo model available through Alex Motosport",
    price: "Price on enquiry",
    image: "/images/catalog/kayo/s70-cart-category (1).jpg",
    categories: ["karts"],
  },
  {
    id: "mini-gp-category",
    name: "MiniGP Category",
    specs: "Kayo model available through Alex Motosport",
    price: "Price on enquiry",
    image: "/images/catalog/kayo/minigp-category.jpg",
    categories: ["motorbikes"],
  },
  {
    id: "ay70",
    name: "AY70",
    specs: "Kayo model available through Alex Motosport",
    price: "Price on enquiry",
    image: "/images/catalog/kayo/ay70.jpg",
    categories: ["quads-atvs"],
  },
  {
    id: "at180",
    name: "AT180",
    specs: "Kayo model available through Alex Motosport",
    price: "Price on enquiry",
    image: "/images/catalog/kayo/3_19.jpg",
    categories: ["quads-atvs"],
  },
  {
    id: "at110",
    name: "AT110",
    specs: "Kayo model available through Alex Motosport",
    price: "Price on enquiry",
    image: "/images/catalog/kayo/at110_01_1.png",
    categories: ["quads-atvs"],
  },
  {
    id: "kayo-tt140-colour-1",
    name: "Kayo TT140",
    specs: "Kayo model available through Alex Motosport",
    price: "Price on enquiry",
    image: "/images/catalog/kayo/kayo-tt140-new-color_1.png",
    categories: ["motorbikes"],
  },
  {
    id: "kmb60",
    name: "KMB60",
    specs: "Kayo model available through Alex Motosport",
    price: "Price on enquiry",
    image: "/images/catalog/kayo/kmb60-profile-magento_1.jpg",
    categories: ["motorbikes"],
  },
  {
    id: "kayo-tt140-colour-2",
    name: "Kayo TT140",
    specs: "Kayo model available through Alex Motosport",
    price: "Price on enquiry",
    image: "/images/catalog/kayo/kayo-tt140-new-color.png",
    categories: ["motorbikes"],
  },
];

export const featuredBikeProducts = bikeProducts.filter(
  (bike) => bike.recentlyAdded,
);

export const availableBikeCategories = Array.from(
  new Set(
    bikeProducts.flatMap((bike) => bike.categories ?? []),
  ),
) as BikeCategory[];
