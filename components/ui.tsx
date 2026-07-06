"use client";

import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { FiArrowRight, FiImage } from "react-icons/fi";
import { cn } from "@/lib/utils";

export function PremiumButton({ children, className, variant = "primary", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "ghost" }) {
  return (
    <button
      className={cn(
        "group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-bold shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95",
        variant === "primary"
          ? "bg-gradient-to-r from-primary-pink to-accent-pink text-white shadow-pink-200"
          : "border border-border-pink bg-white/75 text-dark-pink backdrop-blur-xl",
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 -translate-x-full bg-white/20 transition duration-500 group-hover:translate-x-full" />
      <span className="relative inline-flex items-center gap-2">{children}<FiArrowRight /></span>
    </button>
  );
}

export function PremiumLink({ children, className, variant = "primary", href }: { children: ReactNode; className?: string; variant?: "primary" | "ghost"; href: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-bold shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95",
        variant === "primary"
          ? "bg-gradient-to-r from-primary-pink to-accent-pink text-white shadow-pink-200"
          : "border border-border-pink bg-white/75 text-dark-pink backdrop-blur-xl",
        className
      )}
    >
      <span className="absolute inset-0 -translate-x-full bg-white/20 transition duration-500 group-hover:translate-x-full" />
      <span className="relative inline-flex items-center gap-2">{children}<FiArrowRight /></span>
    </Link>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable glareMaxOpacity={0.14} scale={1.01} transitionSpeed={1400}>
      <div className={cn("glass glow-border h-full rounded-[24px] p-6 transition duration-300 hover:-translate-y-1", className)}>
        {children}
      </div>
    </Tilt>
  );
}

export function PlaceholderImage({ label, src = "/placeholders/photo.svg", aspect = "aspect-[4/3]", className, priority = false }: { label: string; src?: string; aspect?: string; className?: string; priority?: boolean }) {
  return (
    <div className={cn("placeholder-grid relative overflow-hidden rounded-[24px] border border-border-pink bg-soft-pink/50", aspect, className)}>
      <Image src={src} alt={label} fill priority={priority} sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-90 transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-center text-sm font-bold text-dark-pink shadow-lg backdrop-blur-xl">
        <span className="inline-flex items-center gap-2"><FiImage />{label}</span>
      </div>
    </div>
  );
}
