import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/reveal";
import { Card, PlaceholderImage } from "@/components/ui";
import { projects } from "@/lib/data";
import { pageMeta } from "@/lib/utils";

export const metadata: Metadata = pageMeta.projects;

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Projects" title="Impact avenues built to scale with real club work." body="Each project card includes a future image slot, description, category, and impact metric.">
        <PlaceholderImage label="Upload Project Hero Image Here" aspect="aspect-[4/3]" />
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
        <SectionHeader eyebrow="Avenues" title="Community service, environment, education, health, and fundraising." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title}>
              <PlaceholderImage label="Upload Project Image Here" aspect="aspect-[4/3]" />
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-primary-pink">{project.category}</p>
              <h2 className="mt-2 font-display text-3xl font-bold">{project.title}</h2>
              <p className="mt-3 leading-7 text-muted">{project.desc}</p>
              <div className="mt-6 rounded-2xl bg-soft-pink p-4 font-display text-2xl font-bold text-dark-pink">{project.impact}</div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
