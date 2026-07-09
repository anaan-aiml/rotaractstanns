import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Card, PlaceholderImage } from "@/components/ui";
import { contactDetails, socials } from "@/lib/data";
import { pageMeta } from "@/lib/utils";

export const metadata: Metadata = pageMeta.contact;

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Connect, collaborate, and replace every detail with official channels." body="A polished contact page for inquiries, collaborations, membership questions, sponsors, and partners.">
        <PlaceholderImage label="Upload Contact or Campus Photo Here" aspect="aspect-[4/3]" />
      </PageHero>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-24 lg:grid-cols-[1.1fr_0.9fr] md:px-6">
        <Card>
          <h2 className="font-display text-4xl font-bold">Send a Message</h2>
          <ContactForm />
        </Card>
        <div className="space-y-6">
          <Card>
            <h2 className="font-display text-3xl font-bold">Contact Details</h2>
            <div className="mt-6 space-y-4">
              {contactDetails.map((detail) => <p key={detail.label} className="flex gap-3 text-muted"><detail.icon className="mt-1 shrink-0 text-primary-pink" />{detail.label}</p>)}
            </div>
            <div className="mt-6 flex gap-3">{socials.map((social) => <a key={social.label} aria-label={social.label} href={social.href} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full bg-soft-pink text-dark-pink transition hover:-translate-y-1"><social.icon /></a>)}</div>
          </Card>
          <Card>
            <iframe
              title="Map to St. Ann's College for Women"
              src="https://www.google.com/maps?q=St.%20Ann%27s%20College%20for%20Women&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-[4/3] w-full rounded-[24px] border border-border-pink"
            />
          </Card>
        </div>
      </section>
    </>
  );
}
