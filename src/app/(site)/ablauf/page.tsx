import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import { processSteps } from "@/lib/content";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Ablauf — KLARSICHT Demo",
};

export default function AblaufPage() {
  return (
    <>
      <PageHero
        eyebrow="// Ablauf"
        title="Von der ersten Anfrage bis zur laufenden Betreuung."
        subline="Fünf Schritte, transparent kommuniziert — ohne wochenlange Funkstille."
        image={img.pageHero.ablauf}
        imageAlt="Team bespricht Unterlagen am Konferenztisch"
      />

      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="flex flex-col">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                <div className="flex gap-6 border-t border-ink/10 py-8 first:border-t-0 sm:gap-10">
                  <span className="font-mono text-sm text-cyan-dark">{step.number}</span>
                  <div>
                    <h3 className="font-display text-xl font-normal text-ink sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Starten wir mit einem Erstgespräch?"
        description="30 Minuten, kostenfrei, unverbindlich — persönlich in Hamburg oder per Videocall."
      />
    </>
  );
}
