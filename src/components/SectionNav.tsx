"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navPages } from "@/lib/content";

// Persistente Seiten-Übersicht oben rechts: alle Sektionen sind jederzeit mit
// vollem Label sichtbar (kein Hover-Reveal), damit man sich beim Scrollen
// nie neu orientieren muss. Da die Seite mehrseitig (nicht Anker-basiert)
// ist, markiert sich der aktive Eintrag über die aktuelle Route.
export default function SectionNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Seitenübersicht"
      className="fixed right-5 top-24 z-40 hidden w-56 flex-col gap-0.5 rounded-2xl border border-paper/10 bg-ink/90 p-4 shadow-xl backdrop-blur xl:flex"
    >
      <p className="eyebrow mb-2 px-2 text-gold-light/70">Übersicht</p>
      {navPages.map((page) => {
        const isActive =
          page.href === "/" ? pathname === "/" : pathname.startsWith(page.href);
        return (
          <Link
            key={page.href}
            href={page.href}
            className={`group flex items-center gap-3 rounded-lg border-l-2 px-2 py-1.5 transition-colors duration-200 ${
              isActive ? "border-gold bg-paper/[0.06]" : "border-transparent hover:border-paper/25"
            }`}
          >
            <span
              className={`font-mono text-[10px] tabular-nums transition-colors duration-200 ${
                isActive ? "text-gold-light" : "text-paper/40 group-hover:text-paper/60"
              }`}
            >
              {page.number}
            </span>
            <span
              className={`text-sm transition-colors duration-200 ${
                isActive ? "font-medium text-paper" : "text-paper/55 group-hover:text-paper/85"
              }`}
            >
              {page.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
