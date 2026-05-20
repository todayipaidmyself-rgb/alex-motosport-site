import type { MetadataRoute } from "next";

const baseUrl = "https://alexmotosport.com";

const journalSlugs = [
  "best-dirt-bikes-cyprus",
  "where-to-ride-cyprus",
  "motorbike-repairs-cyprus",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/bikes-gear`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/journal`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...journalSlugs.map((slug) => ({
      url: `${baseUrl}/journal/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}