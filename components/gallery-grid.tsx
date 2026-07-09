"use client";

import { useState } from "react";
import { FiX } from "react-icons/fi";
import { galleryItems } from "@/lib/data";
import { PlaceholderImage } from "@/components/ui";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const categories = ["All", ...Array.from(new Set(galleryItems.map((item) => item.category)))];
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<(typeof galleryItems)[number] | null>(null);
  const visible = active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button key={category} onClick={() => setActive(category)} className={cn("rounded-full border px-5 py-3 text-sm font-bold transition", active === category ? "border-primary-pink bg-primary-pink text-white shadow-lg shadow-slate-200" : "border-border-pink bg-white text-dark-pink")}>{category}</button>
        ))}
      </div>
      <div className="masonry">
        {visible.map((item) => (
          <button key={item.id} onClick={() => setLightbox(item)} className="group mb-4 block w-full break-inside-avoid text-left">
            <PlaceholderImage label={item.label} aspect={item.tall ? "aspect-[3/4]" : "aspect-[4/3]"} />
          </button>
        ))}
      </div>
      {lightbox ? (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-foreground/70 p-4 backdrop-blur-xl" onClick={() => setLightbox(null)}>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button aria-label="Close gallery lightbox" onClick={() => setLightbox(null)} className="absolute -top-14 right-0 grid h-11 w-11 place-items-center rounded-full bg-white text-dark-pink"><FiX /></button>
            <PlaceholderImage label={`${lightbox.label} - ${lightbox.category}`} aspect="aspect-[16/10]" />
          </div>
        </div>
      ) : null}
    </>
  );
}
