"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition duration-300", scrolled ? "py-3" : "py-5")}>
      <nav className={cn("mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 transition duration-300 md:px-6", scrolled ? "glass" : "bg-transparent")}>
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/brand/rotaract-logo-navbar.png"
            alt="Rotaract Club of St. Ann's logo"
            width={284}
            height={64}
            priority
            className="h-12 w-auto object-contain sm:h-14"
          />
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={cn("relative rounded-full px-3 py-2 text-sm font-semibold text-muted transition hover:text-primary-pink", active && "text-dark-pink")}>
                {item.label}
                <span className={cn("absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-primary-pink transition-transform", active ? "scale-x-100" : "scale-x-0")} />
              </Link>
            );
          })}
        </div>
        <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="rounded-full border border-border-pink bg-white/80 p-3 text-dark-pink shadow-lg lg:hidden">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>
      {open ? (
        <div className="mx-auto mt-3 max-w-7xl px-4 lg:hidden">
          <div className="glass grid rounded-[24px] p-3">
            {navItems.map((item) => (
              <Link onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 font-semibold text-muted hover:bg-soft-pink hover:text-dark-pink" key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
