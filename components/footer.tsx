"use client";

import Link from "next/link";
import { FiArrowUp } from "react-icons/fi";
import { contactDetails, navItems, socials } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-dark-pink via-primary-pink to-accent-pink text-white">
      <div className="absolute inset-0 opacity-20 placeholder-grid" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1.2fr_0.8fr_1fr] md:px-6">
        <div>
          <h2 className="font-display text-4xl font-bold">Rotaract Club of St. Ann&apos;s</h2>
          <p className="mt-4 max-w-md text-white/78">Premium editable template for service, leadership, fellowship, and measurable community impact.</p>
          <form className="mt-7 flex max-w-md gap-2 rounded-full bg-white/18 p-2 backdrop-blur-xl">
            <input aria-label="Newsletter email" placeholder="Email for newsletter" className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-white/65" />
            <button className="rounded-full bg-white px-5 py-3 text-sm font-bold text-dark-pink shadow-lg">Join</button>
          </form>
        </div>
        <div>
          <p className="font-bold">Quick Links</p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/78">
            {navItems.map((item) => <Link className="hover:text-white" key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
        </div>
        <div>
          <p className="font-bold">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-white/78">
            {contactDetails.map((detail) => <p key={detail.label} className="flex gap-3"><detail.icon className="mt-1 shrink-0" />{detail.label}</p>)}
          </div>
          <div className="mt-6 flex gap-3">
            {socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="grid h-11 w-11 place-items-center rounded-full bg-white/16 backdrop-blur transition hover:-translate-y-1 hover:bg-white/25"><social.icon /></a>)}
          </div>
        </div>
      </div>
      <div className="relative mx-auto flex max-w-7xl items-center justify-between border-t border-white/20 px-4 py-5 text-sm text-white/70 md:px-6">
        <p>Copyright 2026 Rotaract Club of St. Ann&apos;s. Template content pending replacement.</p>
        <button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="grid h-10 w-10 place-items-center rounded-full bg-white/15"><FiArrowUp /></button>
      </div>
    </footer>
  );
}
