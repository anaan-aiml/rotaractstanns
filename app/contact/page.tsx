import type { Metadata } from "next";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { PageHero } from "@/components/page-hero";
import { Card, PlaceholderImage, PremiumButton } from "@/components/ui";
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
          <form className="mt-8 grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input aria-label="Name" placeholder="Name" className="rounded-2xl border border-border-pink bg-white px-5 py-4 outline-primary-pink" />
              <input aria-label="Email" placeholder="Email" className="rounded-2xl border border-border-pink bg-white px-5 py-4 outline-primary-pink" />
            </div>
            <input aria-label="Subject" placeholder="Subject" className="rounded-2xl border border-border-pink bg-white px-5 py-4 outline-primary-pink" />
            <textarea aria-label="Message" placeholder="Message" rows={6} className="rounded-2xl border border-border-pink bg-white px-5 py-4 outline-primary-pink" />
            <PremiumButton>Send Message</PremiumButton>
          </form>
        </Card>
        <div className="space-y-6">
          <Card>
            <h2 className="font-display text-3xl font-bold">Contact Details</h2>
            <div className="mt-6 space-y-4">
              {contactDetails.map((detail) => <p key={detail.label} className="flex gap-3 text-muted"><detail.icon className="mt-1 shrink-0 text-primary-pink" />{detail.label}</p>)}
              <p className="flex gap-3 text-muted"><FiPhone className="mt-1 shrink-0 text-primary-pink" />Replace with official phone number</p>
            </div>
            <div className="mt-6 flex gap-3">{socials.map((social) => <a key={social.label} aria-label={social.label} href={social.href} className="grid h-11 w-11 place-items-center rounded-full bg-soft-pink text-dark-pink transition hover:-translate-y-1"><social.icon /></a>)}</div>
          </Card>
          <Card>
            <div className="grid aspect-[4/3] place-items-center rounded-[24px] border border-dashed border-primary-pink bg-soft-pink/60 text-center text-dark-pink">
              <div><FiMapPin className="mx-auto mb-3 text-4xl" /><p className="font-display text-2xl font-bold">Map Placeholder</p><p className="mt-2 text-sm text-muted">Replace with embedded map or official location.</p></div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
