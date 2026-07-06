import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/reveal";
import { PlaceholderImage } from "@/components/ui";
import { pageMeta } from "@/lib/utils";

export const metadata: Metadata = pageMeta.gallery;

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="A filterable masonry gallery for real club memories." body="The gallery intentionally uses labeled placeholder frames only. Replace them with event, project, fellowship, award, and video imagery later.">
        <PlaceholderImage label="Replace with Club Photo" aspect="aspect-[4/3]" />
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
        <SectionHeader eyebrow="Media" title="Hover, filter, and open the lightbox." />
        <GalleryGrid />
      </section>
    </>
  );
}
