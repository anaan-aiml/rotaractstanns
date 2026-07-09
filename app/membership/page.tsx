import type { Metadata } from "next";
import { FiCheckCircle } from "react-icons/fi";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/reveal";
import { Card, PlaceholderImage, PremiumLink } from "@/components/ui";
import { registrationFormUrl } from "@/lib/data";
import { pageMeta } from "@/lib/utils";

export const metadata: Metadata = pageMeta.membership;

const benefits = ["Leadership roles", "Service projects", "Fellowship events", "Professional development", "District networking", "Mentorship opportunities"];
const faqs = [
  ["Who can apply?", "Replace this with official eligibility criteria, age range, student/member requirements, and application cycle."],
  ["Is prior volunteering required?", "Placeholder answer. Add the club's real expectations and onboarding process."],
  ["How are members selected?", "Placeholder answer for interviews, forms, induction, dues, and committee placement."]
];

export default function MembershipPage() {
  return (
    <>
      <PageHero eyebrow="Membership" title="A clear pathway from interest to active service." body="Benefits, eligibility, FAQs, and the official registration form for new members and interested participants.">
        <PlaceholderImage label="Upload Membership Campaign Photo Here" aspect="aspect-[4/3]" />
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
        <SectionHeader eyebrow="Benefits" title="What members can gain and contribute." />
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((benefit) => <Card key={benefit}><FiCheckCircle className="mb-5 text-3xl text-primary-pink" /><h2 className="font-display text-2xl font-bold">{benefit}</h2><p className="mt-3 text-muted">Editable benefit copy. Add official examples and member outcomes.</p></Card>)}
        </div>
      </section>
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.9fr_1.1fr] md:px-6">
          <Card><h2 className="font-display text-4xl font-bold">Eligibility</h2><p className="mt-5 leading-8 text-muted">Replace this text with official eligibility, attendance, induction, and dues information. The template keeps details visible and easy to update.</p></Card>
          <Card>
            <h2 className="font-display text-4xl font-bold">Register With Us</h2>
            <p className="mt-5 leading-8 text-muted">Applications and registrations are collected through the official Google Form. Click below to open the form in a new tab.</p>
            <div className="mt-8"><PremiumLink href={registrationFormUrl}>Open Registration Form</PremiumLink></div>
          </Card>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-24 md:px-6">
        <SectionHeader eyebrow="FAQs" title="Answers ready for the official process." />
        <div className="space-y-5">
          {faqs.map(([q, a]) => <Card key={q}><h3 className="font-display text-2xl font-bold">{q}</h3><p className="mt-3 text-muted">{a}</p></Card>)}
        </div>
      </section>
    </>
  );
}
