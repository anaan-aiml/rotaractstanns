import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/reveal";
import { Card, PlaceholderImage, PremiumLink } from "@/components/ui";
import { events, registrationFormUrl } from "@/lib/data";
import { pageMeta, siteUrl } from "@/lib/utils";

export const metadata: Metadata = pageMeta.events;

export default function EventsPage() {
  const eventSchema = events.map((event) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    startDate: event.schemaDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: { "@type": "Place", name: event.venue },
    image: [`${siteUrl}/placeholders/photo.svg`],
    description: event.desc,
    organizer: { "@type": "Organization", name: "Rotaract Club of St. Ann's" }
  }));

  return (
    <>
      <PageHero eyebrow="Events" title="Programs that bring members together." body="Explore upcoming orientations, service initiatives, leadership sessions, and fellowship experiences organized by the Rotaract Club of St. Ann's.">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] border border-border-pink bg-white shadow-2xl">
          <Image
            src="/club/saintanns.jpg"
            alt="Rotaract Club of St. Ann's group photo"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-contain object-center"
          />
        </div>
      </PageHero>
      {["Upcoming", "Past"].map((type) => (
        <section key={type} className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <SectionHeader eyebrow={type} title={`${type} Events`} />
          <div className="grid gap-6 md:grid-cols-2">
            {events.filter((event) => event.type === type).map((event) => (
              <Card key={event.title}>
                <PlaceholderImage label="Upload Event Banner Here" aspect="aspect-[16/9]" />
                <p className="mt-5 text-sm font-bold text-primary-pink">{event.date} • {event.venue}</p>
                <h2 className="mt-2 font-display text-3xl font-bold">{event.title}</h2>
                <p className="mt-3 leading-7 text-muted">{event.desc}</p>
                <div className="mt-6"><PremiumLink href={type === "Upcoming" ? registrationFormUrl : "/gallery"}>{type === "Upcoming" ? "Register Now" : "View Details"}</PremiumLink></div>
              </Card>
            ))}
          </div>
        </section>
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
    </>
  );
}
