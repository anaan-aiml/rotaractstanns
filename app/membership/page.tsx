import type { Metadata } from "next";
import Image from "next/image";
import { FiCalendar, FiCheckCircle, FiClock, FiMapPin } from "react-icons/fi";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/reveal";
import { Card, PremiumLink } from "@/components/ui";
import { registrationFormUrl } from "@/lib/data";
import { pageMeta } from "@/lib/utils";

export const metadata: Metadata = pageMeta.membership;

const benefits = ["Leadership roles", "Service projects", "Fellowship events", "Professional development", "District networking", "Mentorship opportunities"];
const faqs = [
  ["Who can apply?", "Anyone with genuine interest, curiosity, and the willingness to grow can apply. Rotaract welcomes students who want to learn, serve, take initiative, and become more confident through real experiences."],
  ["Is prior knowledge required?", "No prior knowledge or previous volunteering experience is required. If you are open to learning, ready to participate, and excited to contribute, you can begin your Rotaract journey with us."],
  ["How are cabinet members selected?", "Cabinet members are selected through an interview process that looks at commitment, communication, responsibility, teamwork, and the willingness to lead. The focus is on potential, sincerity, and readiness to contribute to the club."]
];

export default function MembershipPage() {
  return (
    <>
      <PageHero eyebrow="Membership" title="A clear pathway from interest to active service." body="Benefits, eligibility, FAQs, and the official registration form for new members and interested participants.">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] border border-border-pink bg-white shadow-2xl">
          <Image
            src="/club/group-photo.png"
            alt="Rotaract Club of St. Ann's members"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-contain object-center"
          />
        </div>
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
        <SectionHeader eyebrow="Benefits" title="What members can gain and contribute." />
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((benefit) => <Card key={benefit}><FiCheckCircle className="mb-5 text-3xl text-primary-pink" /><h2 className="font-display text-2xl font-bold">{benefit}</h2><p className="mt-3 text-muted">Editable benefit copy. Add official examples and member outcomes.</p></Card>)}
        </div>
      </section>
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 lg:grid-cols-[0.9fr_1.1fr] md:px-6">
          <Card className="p-3">
            <div className="relative aspect-[1131/1600] overflow-hidden rounded-[20px] border border-border-pink bg-soft-pink">
              <Image
                src="/events/orientation-session.png"
                alt="Orientation Session poster for Rotaract Club of St. Ann's College for Women"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </Card>
          <Card className="h-fit">
            <h2 className="font-display text-4xl font-bold">Register With Us</h2>
            <p className="mt-5 leading-8 text-muted">Join the orientation session and begin your Rotaract journey with St. Ann&apos;s.</p>
            <div className="mt-7 grid gap-4">
              <div className="flex gap-3 rounded-2xl bg-soft-pink/70 p-4 text-sm font-semibold text-foreground"><FiCalendar className="mt-0.5 shrink-0 text-primary-pink" />8th July, 2026</div>
              <div className="flex gap-3 rounded-2xl bg-soft-pink/70 p-4 text-sm font-semibold text-foreground"><FiClock className="mt-0.5 shrink-0 text-primary-pink" />12.30 pm to 2.30 pm for 1st Years • 7.30 pm to 8.30 pm for 2nd & 3rd Years</div>
              <div className="flex gap-3 rounded-2xl bg-soft-pink/70 p-4 text-sm font-semibold text-foreground"><FiMapPin className="mt-0.5 shrink-0 text-primary-pink" />St Joseph&apos;s Auditorium / Google Meet</div>
            </div>
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
