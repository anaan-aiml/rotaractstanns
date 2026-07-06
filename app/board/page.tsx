import type { Metadata } from "next";
import { FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { PageHero } from "@/components/page-hero";
import { Reveal, SectionHeader } from "@/components/reveal";
import { Card, PlaceholderImage } from "@/components/ui";
import { boardGroups } from "@/lib/data";
import { pageMeta } from "@/lib/utils";

export const metadata: Metadata = pageMeta.board;

export default function BoardPage() {
  return (
    <>
      <PageHero eyebrow="Board Members" title="Leadership profiles with clear replacement spaces." body="Every portrait, bio, title, and social link is intentionally placeholder content for the official board.">
        <PlaceholderImage src="/placeholders/profile.svg" label="Upload Board Group Photo Here" aspect="aspect-[4/3]" />
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
        {boardGroups.map((group) => (
          <div key={group.title} className="mb-20 last:mb-0">
            <SectionHeader eyebrow="Leadership" title={group.title} />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {group.members.map(([name, position, bio], index) => (
                <Reveal key={`${group.title}-${position}`} delay={index * 0.05}>
                  <Card>
                    <PlaceholderImage src="/placeholders/profile.svg" label="Board Member Image" aspect="aspect-[4/5]" />
                    <h3 className="mt-6 font-display text-2xl font-bold">{name}</h3>
                    <p className="mt-1 font-bold text-primary-pink">{position}</p>
                    <p className="mt-3 leading-7 text-muted">{bio}</p>
                    <div className="mt-5 flex gap-3 text-dark-pink"><FiInstagram /><FiLinkedin /><FiMail /></div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
