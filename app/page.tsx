"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { FiChevronDown, FiHeart, FiUsers } from "react-icons/fi";
import { Card, PlaceholderImage, PremiumButton, PremiumLink } from "@/components/ui";
import { Reveal, SectionHeader } from "@/components/reveal";
import { events, projects, stats } from "@/lib/data";

const heroWords = ["Service.", "Leadership.", "Fellowship.", "Impact."];

function TypedLine() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex((value) => (value + 1) % heroWords.length), 1700);
    return () => clearInterval(timer);
  }, []);
  return <span className="text-primary-pink">{heroWords[index]}</span>;
}

function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(useTransform(mx, [0, 1], [-20, 20]), { stiffness: 80, damping: 20 });
  const y = useSpring(useTransform(my, [0, 1], [-16, 16]), { stiffness: 80, damping: 20 });

  return (
    <section onMouseMove={(e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mx.set((e.clientX - rect.left) / rect.width);
      my.set((e.clientY - rect.top) / rect.height);
    }} className="animated-gradient relative flex min-h-screen items-center overflow-hidden px-4 pb-12 pt-28 md:px-6">
      <motion.div style={{ x, y }} className="absolute left-[8%] top-[18%] h-24 w-24 rounded-[2rem] bg-accent-pink/20 blur-sm" />
      <motion.div style={{ x: y, y: x }} className="absolute right-[10%] top-[24%] h-36 w-36 rounded-full border border-primary-pink/20 bg-white/40" />
      <motion.div animate={{ y: [0, -18, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-[18%] left-[16%] h-20 w-20 rounded-full bg-soft-pink shadow-2xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-extrabold leading-[1.03] text-foreground md:text-6xl lg:text-7xl">
              Rotaract Club of St. Ann&apos;s
            </h1>
            <p className="mt-5 text-2xl font-semibold text-foreground md:text-3xl">Built for <TypedLine /></p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">A polished, fully editable nonprofit website experience with marked spaces for official logo, club photographs, board portraits, sponsor logos, certificates, videos, and future campaigns.</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <PremiumLink href="/membership">Join Rotaract</PremiumLink>
              <PremiumLink href="/projects" variant="ghost">Explore Projects</PremiumLink>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="glass glow-border relative rounded-[32px] p-4">
            <PlaceholderImage priority label="Upload Club Group Photo Here" aspect="aspect-[5/4]" />
            <div className="absolute -bottom-6 left-6 right-6 grid gap-3 rounded-[24px] border border-border-pink bg-white/85 p-4 shadow-2xl backdrop-blur-xl sm:grid-cols-2">
              <div className="flex items-center gap-3"><FiHeart className="text-primary-pink" /><span className="text-sm font-bold">Service-first community</span></div>
              <div className="flex items-center gap-3"><FiUsers className="text-primary-pink" /><span className="text-sm font-bold">Replace with official club photo</span></div>
            </div>
          </div>
        </Reveal>
      </div>
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary-pink">
        <FiChevronDown size={28} />
      </motion.div>
    </section>
  );
}

function StatCard({ value, suffix, label, icon: Icon }: (typeof stats)[number]) {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / 1200, 1);
      setShown(Math.round(progress * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);
  return <Card><Icon className="mb-6 text-3xl text-primary-pink" /><p className="font-display text-5xl font-bold">{shown}{suffix}</p><p className="mt-2 text-muted">{label}</p></Card>;
}

export default function Home() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
        <SectionHeader eyebrow="Introduction" title="A refined digital home for a service-minded club." body="This template is designed to be replaced with real content later while already feeling premium, complete, and launch-ready." />
        <div className="grid gap-5 md:grid-cols-4">{stats.map((stat) => <StatCard key={stat.label} {...stat} />)}</div>
      </section>
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
          <Reveal><PlaceholderImage label="Replace with Official Rotaract Club Photograph" aspect="aspect-[4/3]" /></Reveal>
          <Reveal delay={0.1}>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-primary-pink">About Preview</p>
            <h2 className="font-display text-4xl font-bold md:text-6xl">Service that feels organized, human, and ambitious.</h2>
            <p className="mt-6 text-lg leading-8 text-muted">Use this space for club history, district alignment, meeting culture, flagship events, and the unique voice of St. Ann&apos;s Rotaract.</p>
            <div className="mt-8"><PremiumLink href="/about" variant="ghost">Read About Us</PremiumLink></div>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
        <SectionHeader eyebrow="Featured" title="Events and projects with room for the real story." />
        <div className="grid gap-6 lg:grid-cols-2">
          {events.slice(0, 2).map((event) => <Card key={event.title}><PlaceholderImage label="Upload Event Banner Here" aspect="aspect-[16/9]" /><p className="mt-5 text-sm font-bold text-primary-pink">{event.date} • {event.venue}</p><h3 className="mt-2 font-display text-2xl font-bold">{event.title}</h3><p className="mt-3 text-muted">{event.desc}</p></Card>)}
          {projects.slice(0, 2).map((project) => <Card key={project.title}><PlaceholderImage label="Upload Project Image Here" aspect="aspect-[16/9]" /><p className="mt-5 text-sm font-bold text-primary-pink">{project.impact}</p><h3 className="mt-2 font-display text-2xl font-bold">{project.title}</h3><p className="mt-3 text-muted">{project.desc}</p></Card>)}
        </div>
      </section>
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[0.8fr_1.2fr] md:px-6">
          <Reveal><PlaceholderImage src="/placeholders/profile.svg" label="Upload President Photo Here" aspect="aspect-[4/5]" /></Reveal>
          <Reveal delay={0.1}><Card><p className="text-sm font-bold uppercase tracking-[0.28em] text-primary-pink">President&apos;s Message</p><blockquote className="mt-6 font-display text-3xl font-bold leading-tight md:text-5xl">“Replace this message with the president&apos;s official welcome note, vision for the year, and invitation to serve.”</blockquote><p className="mt-6 text-muted">President Name • Rotaract Club of St. Ann&apos;s</p></Card></Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
        <SectionHeader eyebrow="Voices" title="Testimonials ready for real member stories." />
        <div className="grid gap-6 md:grid-cols-3">{["Member testimonial placeholder.", "Partner testimonial placeholder.", "Alumni testimonial placeholder."].map((quote) => <Card key={quote}><p className="text-xl font-semibold leading-8">“{quote} Replace with authentic words after launch.”</p><p className="mt-6 text-sm font-bold text-primary-pink">Name Placeholder</p></Card>)}</div>
      </section>
      <section className="px-4 pb-24 md:px-6">
        <div className="animated-gradient mx-auto max-w-7xl rounded-[36px] border border-border-pink px-6 py-16 text-center shadow-2xl md:px-16">
          <h2 className="font-display text-4xl font-bold md:text-6xl">Ready to create visible community impact?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">Join the club, subscribe for updates, or replace this CTA with the year&apos;s membership campaign.</p>
          <div className="mt-8 flex justify-center"><PremiumLink href="/membership">Start Membership Application</PremiumLink></div>
        </div>
      </section>
    </>
  );
}
