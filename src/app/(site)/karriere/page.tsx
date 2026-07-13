import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { jobs, company } from "@/lib/content";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Karriere — KLARSICHT Demo",
};

export default function KarrierePage() {
  return (
    <>
      <PageHero
        eyebrow="// Karriere"
        title="Steuerberatung, wie sie sich anfühlen sollte."
        subline="Digital, kollegial und ohne Aktenordner-Romantik — offene Stellen bei KLARSICHT."
        image={img.pageHero.karriere}
        imageAlt="Lichtdurchfluteter Büro-Flur bei KLARSICHT"
      />

      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="flex flex-col">
            {jobs.map((job, i) => (
              <Reveal key={job.title} delay={i * 0.07}>
                <div className="flex flex-col gap-3 border-t border-ink/10 py-8 first:border-t-0 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-normal text-ink sm:text-2xl">
                      {job.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone">
                      {job.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-4">
                    <span className="eyebrow rounded-full bg-gold/15 px-3 py-1.5 text-gold-dark">
                      {job.type}
                    </span>
                    <a
                      href={`mailto:${company.email}?subject=Bewerbung: ${encodeURIComponent(job.title)}`}
                      className="text-sm font-semibold text-gold-dark hover:text-ink"
                    >
                      Bewerben →
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-14 rounded-3xl bg-slate p-8 text-center sm:p-12">
            <h3 className="font-display text-2xl font-normal text-paper">Keine passende Stelle dabei?</h3>
            <p className="mt-3 text-sm leading-relaxed text-paper/70">
              Wir freuen uns auch über Initiativbewerbungen — schreiben Sie uns einfach kurz, wer
              Sie sind und was Sie suchen.
            </p>
            <a
              href={`mailto:${company.email}?subject=Initiativbewerbung`}
              className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition hover:bg-gold-light"
            >
              Initiativ bewerben
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
