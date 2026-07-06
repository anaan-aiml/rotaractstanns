import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/reveal";
import { Card, PlaceholderImage, PremiumButton } from "@/components/ui";
import { events } from "@/lib/data";
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
      <PageHero eyebrow="Events" title="Premium event cards for upcoming and past programs." body="Swap in official dates, venues, registrations, banners, and detailed event writeups.">
        <PlaceholderImage label="Upload Event Hero Banner Here" aspect="aspect-[4/3]" />
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
                <div className="mt-6"><PremiumButton>{type === "Upcoming" ? "Register Interest" : "View Details"}</PremiumButton></div>
              </Card>
            ))}
          </div>
        </section>
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
    </>
  );
}
