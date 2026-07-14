import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import CTABanner from "@/components/CTABanner";
import { services } from "@/lib/content";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Leistungen | KLARSICHT Demo",
};

const iconPaths: Record<string, string> = {
  doc: "M8 3h6l4 4v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z M14 3v4h4",
  scale: "M12 3v18M6 7h12M6 7 3 13a3 3 0 0 0 6 0L6 7ZM18 7l-3 6a3 3 0 0 0 6 0l-3-6ZM9 21h6",
  coin: "M12 8v8M9.5 10.2c0-1 .9-1.7 2.5-1.7s2.5.6 2.5 1.5c0 2-5 1-5 3 0 1 1 1.7 2.5 1.7s2.5-.6 2.5-1.6",
  chart: "M4 19V9M10 19V5M16 19v-7M22 19H2",
  spark: "M12 2 9.6 9.6 2 12l7.6 2.4L12 22l2.4-7.6L22 12l-7.6-2.4Z",
  handshake:
    "m2 12 4-4 4 2 3-3 3 3 4-2 4 4M6 14l3 3a2 2 0 0 0 3-3M12 14l2 2a2 2 0 0 0 3-3l-3-3",
};

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="// Leistungen"
        title="Steuerberatung und Wirtschaftsprüfung, die zusammendenken."
        subline="Sechs Leistungsfelder, ein Team: von der laufenden Buchhaltung bis zur Unternehmensnachfolge."
        image={img.pageHero.leistungen}
        imageAlt="Glasfassade eines modernen Bürogebäudes von unten fotografiert"
      />

      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.key} delay={i * 0.06}>
                <TiltCard className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-mist">
                  <div data-cursor-shape={service.icon} className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={img.services[service.key]}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent" />
                    <span className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl border border-gold-light/40 bg-ink/60 text-gold-light backdrop-blur-sm">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path
                          d={iconPaths[service.icon]}
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    </span>
                    <span className="absolute bottom-3 right-4 font-mono text-lg font-medium text-paper">
                      {service.stat.value}
                    </span>
                  </div>

                  <div className="relative flex flex-1 flex-col justify-between p-7">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -bottom-8 -right-3 select-none font-display text-[7rem] leading-none text-ink/[0.04]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="relative">
                      <h3 className="font-display text-xl font-normal text-ink sm:text-2xl">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-stone">{service.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-ink/12 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-stone"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Erstgespräch dazu vereinbaren <span aria-hidden>→</span>
                    </span>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Welche Leistung passt zu Ihrem Unternehmen?"
        description="Im kostenfreien Erstgespräch sortieren wir gemeinsam, was Sie wirklich brauchen, ganz ohne Verkaufsdruck."
      />
    </>
  );
}
