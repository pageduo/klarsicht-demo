import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ImageWipe from "@/components/ImageWipe";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import { company } from "@/lib/content";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Über uns & Kontakt — KLARSICHT Demo",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="// Über uns & Kontakt"
        title={`${company.fullName} — seit ${company.founded} in ${company.city}.`}
        subline={company.subline}
        image={img.pageHero.kontakt}
        imageAlt="Heller Besprechungsraum mit Holztisch"
      />

      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <Reveal className="flex flex-col gap-8">
              <ImageWipe className="aspect-[16/10] rounded-3xl">
                <Image
                  src={img.about}
                  alt="Team von KLARSICHT im hellen Besprechungsraum"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </ImageWipe>

              <p className="text-base leading-relaxed text-stone">
                {company.usp} Was {company.founded} als kleines Beratungsbüro in der HafenCity
                begann, ist heute ein 24-köpfiges Team aus Steuerberater:innen,
                Wirtschaftsprüfer:innen und Digitalisierungsspezialist:innen. Geblieben ist der
                Anspruch: Klarheit statt Aktenordner, Sparringspartner statt reiner
                Zahlenverwaltung. Mehr zu den Menschen dahinter finden Sie auf unserer{" "}
                <Link href="/team" className="underline underline-offset-2 hover:text-ink">
                  Team-Seite
                </Link>
                .
              </p>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <p className="eyebrow mb-2 text-stone">Adresse</p>
                  <p className="text-sm leading-relaxed text-ink">
                    {company.address.street}
                    <br />
                    {company.address.zip} {company.address.city}
                  </p>
                </div>
                <div>
                  <p className="eyebrow mb-2 text-stone">Kontakt</p>
                  <p className="text-sm leading-relaxed text-ink">
                    <a href={company.phoneHref} className="block hover:text-gold-dark">
                      {company.phone}
                    </a>
                    <a href={`mailto:${company.email}`} className="block hover:text-gold-dark">
                      {company.email}
                    </a>
                  </p>
                </div>
                <div className="sm:col-span-2">
                  <p className="eyebrow mb-2 text-stone">Öffnungszeiten</p>
                  <ul className="text-sm leading-relaxed text-ink">
                    {company.hours.map((h) => (
                      <li key={h.day} className="flex justify-between border-b border-ink/10 py-1.5">
                        <span className="text-stone">{h.day}</span>
                        <span>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <p className="eyebrow mb-3 text-stone">Anfahrt</p>
                <MapEmbed
                  query={`${company.address.street}, ${company.address.zip} ${company.address.city}`}
                  title={`Anfahrt zu ${company.fullName}`}
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
