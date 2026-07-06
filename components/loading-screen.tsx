"use client";

import gsap from "gsap";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ onComplete: () => setDone(true) })
        .fromTo(".load-mark", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.45, ease: "power3.out" })
        .to(".load-bar", { scaleX: 1, duration: 0.65, ease: "power2.inOut" }, "-=0.1")
        .to(".load-screen", { yPercent: -100, duration: 0.75, ease: "power4.inOut" }, "+=0.1");
    });
    return () => ctx.revert();
  }, []);

  if (done) return null;

  return (
    <div className="load-screen fixed inset-0 z-[100] grid place-items-center bg-white">
      <div className="text-center">
        <div className="load-mark mx-auto grid h-20 w-20 place-items-center rounded-[24px] border border-border-pink bg-soft-pink font-display text-2xl font-bold text-dark-pink shadow-2xl">RA</div>
        <div className="mt-6 h-1 w-56 overflow-hidden rounded-full bg-soft-pink">
          <div className="load-bar h-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-primary-pink to-accent-pink" />
        </div>
      </div>
    </div>
  );
}
