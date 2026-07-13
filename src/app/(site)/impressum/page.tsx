import type { Metadata } from "next";
import LegalHero from "@/components/LegalHero";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Impressum (Platzhalter) | KLARSICHT Demo",
};

export default function ImpressumPage() {
  return (
    <>
      <LegalHero eyebrow="// Rechtliches" title="Impressum" />
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-10 text-sm leading-relaxed text-stone">
          <section>
            <h2 className="mb-3 font-display text-xl font-normal text-ink">
              Angaben gemäß § 5 DDG (Platzhalter)
            </h2>
            <p>
              {company.fullName} (fiktiv)
              <br />
              {company.address.street}
              <br />
              {company.address.zip} {company.address.city}
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-normal text-ink">Kontakt</h2>
            <p>
              Telefon: {company.phone}
              <br />
              E-Mail: {company.email}
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-normal text-ink">Vertretungsberechtigt</h2>
            <p>Dr. Insa Brammer (fiktive Geschäftsführung, Platzhaltername)</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-normal text-ink">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p>DE 000 000 000 (Platzhalter, keine reale USt-IdNr.)</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-normal text-ink">
              Berufsrechtliche Angaben (Platzhalter)
            </h2>
            <p>
              Berufsbezeichnung: Steuerberater:in / Wirtschaftsprüfer:in (Deutschland), verliehen
              in Deutschland. Zuständige Kammern: Steuerberaterkammer Hamburg und
              Wirtschaftsprüferkammer (fiktiv, Platzhalter für reale Mitgliedsnummern). Es gelten
              das Steuerberatungsgesetz (StBerG) sowie die Wirtschaftsprüferordnung (WPO), einsehbar
              unter den jeweiligen Kammer-Websites.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-normal text-ink">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>Dr. Insa Brammer, Anschrift wie oben (Platzhalter)</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-normal text-ink">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit. Da dieses Unternehmen fiktiv ist, existiert hierzu kein realer Verweis. Eine
              echte Kanzleiseite würde an dieser Stelle auf ec.europa.eu/consumers/odr verlinken.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-normal text-ink">Bildnachweise</h2>
            <p>
              Die auf dieser Demo-Website verwendeten Fotografien stammen von Unsplash-Fotograf:innen,
              das Videomaterial von Pexels-Videograf:innen, beide im Rahmen der jeweiligen
              kostenfreien Lizenz zu Demonstrationszwecken genutzt. Für eine echte Kanzleiseite sind
              eigene oder lizenzierte Aufnahmen zu verwenden.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
