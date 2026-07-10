import type { Metadata } from "next";
import Image from "next/image";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { PageHero } from "@/components/page-hero";
import { Reveal, SectionHeader } from "@/components/reveal";
import { Card } from "@/components/ui";
import { boardGroups } from "@/lib/data";
import { pageMeta } from "@/lib/utils";

export const metadata: Metadata = pageMeta.board;

export default function BoardPage() {
  return (
    <>
      <PageHero eyebrow="Board Members" title="Meet the Executive Board Members." body="The Rotaract Club of St. Ann's is led by a dedicated executive board committed to service, leadership, fellowship, and member growth.">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] border border-border-pink bg-white shadow-2xl">
          <Image
            src="/club/group-photo.png"
            alt="Rotaract Club of St. Ann's executive board group photo"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-contain object-center"
          />
        </div>
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
        {boardGroups.map((group) => (
          <div key={group.title} className="mb-20 last:mb-0">
            <SectionHeader eyebrow="Leadership" title={group.title} />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {group.members.map((member, index) => {
                const details = Array.isArray(member)
                  ? { name: member[0], position: member[1], bio: member[2], image: "/placeholders/profile.svg" }
                  : member;

                return (
                <Reveal key={`${group.title}-${details.position}`} delay={index * 0.05}>
                  <Card>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-border-pink bg-soft-pink">
                      <Image
                        src={details.image}
                        alt={`${details.name} - ${details.position}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-top transition duration-500 hover:scale-105"
                      />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-bold">{details.name}</h3>
                    <p className="mt-1 font-bold text-primary-pink">{details.position}</p>
                    <p className="mt-3 leading-7 text-muted">{details.bio}</p>
                    <div className="mt-5 flex gap-3 text-dark-pink"><FiInstagram /><FiLinkedin /></div>
                  </Card>
                </Reveal>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
