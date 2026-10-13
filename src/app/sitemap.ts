import type { MetadataRoute } from "next";
import { articles } from "@/data/journal";

const baseUrl = "https://alexmotosport.com";



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
    ...articles.map((article) => ({
      url: `${baseUrl}/journal/${article.slug}`,
      lastModified: article.date ? new Date(article.date) : now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}