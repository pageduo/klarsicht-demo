import Link from "next/link";
import { company, navPages } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl font-normal italic">
              {company.name}
              <span className="text-gold-light">.</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
              {company.subline}
            </p>
            <div className="mt-6 flex gap-4 text-sm text-paper/60">
              {company.social.map((s) => (
                <span key={s.label} title="Demo-Website ohne echtes Social-Media-Profil">
                  {s.label}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4 text-paper/40">Sitemap</p>
            <ul className="flex flex-col gap-2 text-sm">
              {navPages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-paper/70 hover:text-paper">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 text-paper/40">Kontakt</p>
            <ul className="flex flex-col gap-2 text-sm text-paper/70">
              <li>
                {company.address.street}, {company.address.zip} {company.address.city}
              </li>
              <li>
                <span className="block">{company.phone}</span>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-paper">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 text-paper/40">Rechtliches</p>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/impressum" className="text-paper/70 hover:text-paper">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-paper/70 hover:text-paper">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/datenschutz#cookies" className="text-paper/70 hover:text-paper">
                  Cookie-Hinweise
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Demo-Kennzeichnung: die letzte Zeile der Seite, auf jeder Seite */}
        <div className="mt-14 flex flex-col gap-2 border-t border-paper/10 pt-8 text-xs text-paper/50 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2">
          <p>
            © {new Date().getFullYear()} · Demo-Vorlage von PageDuo – kein echtes Unternehmen.
            Alle Namen, Daten und Inhalte sind fiktiv.
          </p>
          <p className="flex gap-2">
            <Link href="/impressum" className="underline underline-offset-4 hover:text-paper">
              Impressum
            </Link>
            <span aria-hidden className="text-paper/25">·</span>
            <Link href="/datenschutz" className="underline underline-offset-4 hover:text-paper">
              Datenschutz
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
