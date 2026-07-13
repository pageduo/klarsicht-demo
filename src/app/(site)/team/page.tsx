import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import BlurImage from "@/components/BlurImage";
import CTABanner from "@/components/CTABanner";
import { team } from "@/lib/content";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Team — KLARSICHT Demo",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="// Das Team"
        title="Die Köpfe hinter Ihren Zahlen."
        subline="Steuerberater:innen, Wirtschaftsprüfer:innen und Digitalisierungsspezialist:innen unter einem Dach."
        image={img.pageHero.team}
        imageAlt="Offenes Büro mit Kolleg:innen am Arbeitsplatz"
      />

      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.key} delay={i * 0.07}>
                <TiltCard className="group">
                  <div
                    data-cursor-shape={member.cursorShape}
                    className="relative aspect-[4/5] overflow-hidden rounded-2xl"
                  >
                    <BlurImage
                      src={img.team[member.key]}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-normal text-ink">{member.name}</h3>
                  <p className="text-sm font-medium text-gold-dark">{member.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{member.bio}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Lernen Sie uns persönlich kennen."
        description="Im Erstgespräch merken Sie schnell, ob die Chemie stimmt — genau wie im Team selbst."
      />
    </>
  );
}
