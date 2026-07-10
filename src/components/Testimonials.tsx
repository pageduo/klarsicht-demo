import Reveal from "./Reveal";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-cyan-dark">{"// Stimmen von Mandant:innen"}</p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-normal text-ink sm:text-5xl">
            Vertrauen, das über die Buchhaltung hinausgeht.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="flex flex-col justify-between rounded-3xl bg-mist p-8">
              <p className="font-display text-lg font-normal leading-snug text-ink italic">
                „{t.quote}“
              </p>
              <div className="mt-8">
                <p className="text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-sm text-stone">{t.context}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-stone">
          Aus Vertraulichkeitsgründen anonymisiert — wie in unserer echten Mandantenkommunikation.
        </p>
      </div>
    </section>
  );
}
