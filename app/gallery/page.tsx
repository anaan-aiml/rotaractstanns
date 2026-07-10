import type { Metadata } from "next";
import Image from "next/image";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/reveal";
import { pageMeta } from "@/lib/utils";

export const metadata: Metadata = pageMeta.gallery;

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="A filterable masonry gallery for real club memories." body="The gallery intentionally uses labeled placeholder frames only. Replace them with event, project, fellowship, award, and video imagery later.">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] border border-border-pink bg-white shadow-2xl">
          <Image
            src="/club/group-photo.png"
            alt="Rotaract Club of St. Ann's group photo"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-contain object-center"
          />
        </div>
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
        <SectionHeader eyebrow="Media" title="Hover, filter, and open the lightbox." />
        <GalleryGrid />
      </section>
    </>
  );
}
