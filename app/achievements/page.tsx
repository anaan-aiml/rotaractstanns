import type { Metadata } from "next";
import { FiAward, FiStar } from "react-icons/fi";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/reveal";
import { Card, PlaceholderImage } from "@/components/ui";
import { achievements } from "@/lib/data";
import { pageMeta } from "@/lib/utils";

export const metadata: Metadata = pageMeta.achievements;

export default function AchievementsPage() {
  return (
    <>
      <PageHero eyebrow="Achievements" title="Recognition, milestones, and certificate spaces." body="Use this page for district recognition, awards, certificates, media mentions, and club milestones.">
        <PlaceholderImage src="/placeholders/certificate.svg" label="Replace with Certificate Image" aspect="aspect-[4/3]" />
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
        <SectionHeader eyebrow="Archive" title="A polished record of progress." />
        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((item) => (
            <Card key={item.title}>
              <FiAward className="mb-6 text-4xl text-primary-pink" />
              <h2 className="font-display text-3xl font-bold">{item.title}</h2>
              <p className="mt-4 leading-7 text-muted">{item.body}</p>
            </Card>
          ))}
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {[1, 2].map((item) => (
            <Card key={item}>
              <PlaceholderImage src="/placeholders/certificate.svg" label="Upload Certificate Here" aspect="aspect-[16/11]" />
              <div className="mt-5 flex items-center gap-3 text-dark-pink"><FiStar /><span className="font-bold">Certificate Placeholder {item}</span></div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
