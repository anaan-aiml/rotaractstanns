import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Reveal, SectionHeader } from "@/components/reveal";
import { Card } from "@/components/ui";
import { values } from "@/lib/data";
import { pageMeta } from "@/lib/utils";

export const metadata: Metadata = pageMeta.about;

const aboutHighlights = [
  {
    title: "Club History",
    body: "Chartered in 2005, the Rotaract Club of St. Ann's College for Women has grown as a student-led platform for service, leadership, and fellowship. Over the years, the club has encouraged members to step beyond the classroom, organize meaningful initiatives, and contribute to society with confidence and compassion."
  },
  {
    title: "Vision",
    body: "To nurture socially responsible young women who lead with empathy, act with integrity, and create a positive difference in their communities. The club envisions a space where every member discovers her voice, builds confidence, and contributes to a better world."
  },
  {
    title: "Mission",
    body: "To provide opportunities for service, professional growth, teamwork, and community engagement through impactful projects and collaborative experiences. Our mission is to help members learn by doing, serve with purpose, and grow as thoughtful leaders."
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="A legacy of service, leadership, and fellowship." body="The Rotaract Club of St. Ann's College for Women brings students together to serve the community, develop leadership skills, and grow through meaningful action.">
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
        <div className="grid gap-6 lg:grid-cols-3">
          {aboutHighlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}><Card><h2 className="font-display text-3xl font-bold">{item.title}</h2><p className="mt-4 leading-7 text-muted">{item.body}</p></Card></Reveal>
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
        <Card><h2 className="font-display text-4xl font-bold">Rotary & Rotaract Overview</h2><p className="mt-5 leading-8 text-muted">Rotaract is a global youth movement connected to Rotary International, bringing young people together through service, leadership, and fellowship. Through district activities, club projects, and avenues such as community service, international relations, professional development, and club administration, members become part of a wider network committed to creating lasting impact.</p></Card>
        <Card><h2 className="font-display text-4xl font-bold">Why Join</h2><p className="mt-5 leading-8 text-muted">Joining Rotaract gives students the chance to make friends, build leadership confidence, learn practical skills, and participate in meaningful service experiences. Members gain exposure to teamwork, event planning, public speaking, mentorship, networking, and community-focused action while creating memories that go beyond college life.</p></Card>
      </section>
    </>
  );
}
