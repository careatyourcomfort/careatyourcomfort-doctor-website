import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    "",
    "/about",
    "/services",
    "/contact",
    "/blog",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const servicePages = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: new Date(),
  }));

   const posts: { slug: string; publishedAt: string }[] = await client.fetch(postsQuery);
  const blogPages = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
