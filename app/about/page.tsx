import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal, SectionHeader } from "@/components/reveal";
import { Card, PlaceholderImage } from "@/components/ui";
import { values } from "@/lib/data";
import { pageMeta } from "@/lib/utils";

export const metadata: Metadata = pageMeta.about;

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="A club story ready for official history." body="Replace these refined placeholders with the real charter story, district context, founding members, annual theme, and club culture.">
        <PlaceholderImage label="Upload Club History Photo Here" aspect="aspect-[4/3]" />
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {["Club History", "Vision", "Mission"].map((title, index) => (
            <Reveal key={title} delay={index * 0.06}><Card><h2 className="font-display text-3xl font-bold">{title}</h2><p className="mt-4 leading-7 text-muted">Editable placeholder copy for {title.toLowerCase()}. Add official wording, year-specific priorities, and meaningful local context.</p></Card></Reveal>
          ))}
        </div>
      </section>
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader eyebrow="Core Values" title="The operating system for meaningful service." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => <Card key={value.title}><value.icon className="mb-6 text-3xl text-primary-pink" /><h3 className="font-display text-2xl font-bold">{value.title}</h3><p className="mt-3 text-muted">{value.body}</p></Card>)}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-24 md:grid-cols-2 md:px-6">
        <Card><h2 className="font-display text-4xl font-bold">Rotary & Rotaract Overview</h2><p className="mt-5 leading-8 text-muted">Use this space to explain Rotaract, the Rotary connection, district structure, avenues of service, and how members participate in a wider movement.</p></Card>
        <Card><h2 className="font-display text-4xl font-bold">Why Join</h2><p className="mt-5 leading-8 text-muted">Replace with specific member benefits: friendships, leadership roles, practical skills, service experiences, mentorship, and local impact.</p></Card>
      </section>
    </>
  );
}
