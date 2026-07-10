"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiChevronDown, FiHeart, FiUsers } from "react-icons/fi";
import { Card, PlaceholderImage, PremiumLink } from "@/components/ui";
import { Reveal, SectionHeader } from "@/components/reveal";
import { featuredAvenues, registrationFormUrl, stats } from "@/lib/data";

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
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">Empowering students to serve with purpose, build confidence, create meaningful friendships, and lead initiatives that make a real difference in the community.</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <PremiumLink href={registrationFormUrl}>Join Rotaract</PremiumLink>
              <PremiumLink href="/projects" variant="ghost">Explore Projects</PremiumLink>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="glass glow-border relative rounded-[32px] p-4">
            <div className="group relative aspect-[16/9] overflow-hidden rounded-[24px] border border-border-pink bg-white">
              <Image
                src="/club/group-photo.png"
                alt="Rotaract Club of St. Ann's group photo"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-contain object-center transition duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 grid gap-3 rounded-[24px] border border-border-pink bg-white/85 p-4 shadow-2xl backdrop-blur-xl sm:grid-cols-2">
              <div className="flex items-center gap-3"><FiHeart className="text-primary-pink" /><span className="text-sm font-bold">Service-first community</span></div>
              <div className="flex items-center gap-3"><FiUsers className="text-primary-pink" /><span className="text-sm font-bold">St. Ann&apos;s Rotaract team</span></div>
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
        <SectionHeader eyebrow="Introduction" title="Where service meets leadership and fellowship." body="The Rotaract Club of St. Ann's College for Women brings students together to learn, lead, and serve through meaningful projects, orientation programs, professional development, and community-focused initiatives." />
        <div className="grid gap-5 md:grid-cols-4">{stats.map((stat) => <StatCard key={stat.label} {...stat} />)}</div>
      </section>
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] border border-border-pink bg-white shadow-2xl">
              <Image
                src="/club/group-photo.png"
                alt="Rotaract Club of St. Ann's team"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-center"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-primary-pink">About Preview</p>
            <h2 className="font-display text-4xl font-bold md:text-6xl">A student-led club built on action, growth, and impact.</h2>
            <p className="mt-6 text-lg leading-8 text-muted">Chartered in 2005, the club has continued to create opportunities for students to develop confidence, organize initiatives, build friendships, and contribute to society with purpose.</p>
            <div className="mt-8"><PremiumLink href="/about" variant="ghost">Read About Us</PremiumLink></div>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
        <SectionHeader eyebrow="Featured" title="Explore the avenues of Rotaract." body="These areas help members discover where they want to serve, lead, and grow. Photos can be added to each card later." />
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredAvenues.map((avenue) => (
            <Card key={avenue.title}>
              <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] border border-border-pink bg-white">
                <Image
                  src="/club/group-photo.png"
                  alt={`Rotaract Club of St. Ann's ${avenue.title} avenue`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-center"
                />
              </div>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-primary-pink">Rotaract Avenue</p>
              <h3 className="mt-2 font-display text-2xl font-bold">{avenue.title}</h3>
              <p className="mt-3 leading-7 text-muted">{avenue.desc}</p>
            </Card>
          ))}
        </div>
      </section>
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[0.8fr_1.2fr] md:px-6">
          <Reveal><PlaceholderImage src="/board/syeda-hafsa-hussain.png" label="Rtr. Syeda Hafsa Hussain" aspect="aspect-[4/5]" /></Reveal>
          <Reveal delay={0.1}><Card><p className="text-sm font-bold uppercase tracking-[0.28em] text-primary-pink">President&apos;s Message</p><blockquote className="mt-6 font-display text-3xl font-bold leading-tight md:text-5xl">“Rotaract is a space where we learn to lead, serve with empathy, and grow together through every initiative we take up.”</blockquote><p className="mt-6 text-muted">Rtr. Syeda Hafsa Hussain • President</p></Card></Reveal>
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
          <div className="mt-8 flex justify-center"><PremiumLink href={registrationFormUrl}>Register Now</PremiumLink></div>
        </div>
      </section>
    </>
  );
}
