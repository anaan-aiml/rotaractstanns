"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ eyebrow, title, body, align = "center" }: { eyebrow: string; title: string; body?: string; align?: "center" | "left" }) {
  return (
    <Reveal className={cn("mx-auto mb-12 max-w-3xl", align === "center" ? "text-center" : "text-left mx-0")}>
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-primary-pink">{eyebrow}</p>
      <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-6xl">{title}</h2>
      {body ? <p className="mt-5 text-lg leading-8 text-muted">{body}</p> : null}
    </Reveal>
  );
}
