import Image from "next/image";
import Link from "next/link";
import Parallax from "./Parallax";
import Reveal from "./Reveal";
import { company, trustBadges } from "@/lib/content";
import { img } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Parallax strength={60}>
          <Image
            src={img.hero}
            alt="Zwei Kolleg:innen klatschen sich am Schreibtisch nach einem erfolgreichen Abschluss ab"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pb-20 pt-40 sm:px-8 sm:pb-28">
        <Reveal>
          <p className="eyebrow text-gold-light">{"// Steuerberatung & Wirtschaftsprüfung Hamburg"}</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-normal leading-[1.05] text-paper sm:text-6xl lg:text-7xl">
            {company.claim}
            <br />
            <span className="italic text-gold-light">{company.claimSecondLine}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">
            {company.subline}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/kontakt"
              data-cursor="Erstgespräch →"
              className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-gold-light"
            >
              Erstgespräch vereinbaren
            </Link>
            <Link
              href="/leistungen"
              className="rounded-full border border-paper/30 px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-paper/10"
            >
              Leistungen ansehen
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3">
          {trustBadges.map((badge) => (
            <span key={badge} className="font-mono text-[11px] uppercase tracking-wide text-paper/50">
              {badge}
            </span>
          ))}
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-paper/60 sm:flex">
        <span className="eyebrow">Scrollen</span>
        <span className="h-10 w-px animate-pulse bg-paper/40" />
      </div>
    </section>
  );
}
