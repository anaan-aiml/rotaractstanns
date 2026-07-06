import { ReactNode } from "react";

export function PageHero({ eyebrow, title, body, children }: { eyebrow: string; title: string; body: string; children?: ReactNode }) {
  return (
    <section className="animated-gradient relative overflow-hidden px-4 pb-20 pt-36 md:px-6">
      <div className="absolute right-[-6rem] top-20 h-72 w-72 rounded-full bg-accent-pink/15 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[1fr_0.75fr]">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-primary-pink">{eyebrow}</p>
          <h1 className="font-display text-5xl font-extrabold leading-tight md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{body}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
