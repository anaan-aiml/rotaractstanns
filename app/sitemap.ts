import { MetadataRoute } from "next";
import { navItems } from "@/lib/data";
import { siteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  return navItems.map((item) => ({
    url: `${siteUrl}${item.href}`,
    lastModified: new Date("2026-07-06"),
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8
  }));
}
