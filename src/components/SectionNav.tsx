"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navPages } from "@/lib/content";

// Die primäre Seiten-Navigation der Website: eine nummerierte, vertikale
// Leiste am rechten Bildschirmrand statt einer klassischen Kopfzeilen-Nav.
// Da die Seite mehrseitig (nicht Anker-basiert) ist, markiert sich der
// aktive Eintrag über die aktuelle Route statt über einen Scroll-Observer.
export default function SectionNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Seitennavigation"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 rounded-full border border-paper/10 bg-ink/85 px-3 py-4 shadow-lg backdrop-blur xl:flex"
    >
      {navPages.map((page) => {
        const isActive =
          page.href === "/" ? pathname === "/" : pathname.startsWith(page.href);
        return (
          <Link key={page.href} href={page.href} className="group flex items-center gap-3">
            <span
              className={`whitespace-nowrap font-mono text-[11px] tracking-wide transition-all duration-300 ${
                isActive
                  ? "translate-x-0 opacity-100 text-paper"
                  : "pointer-events-none translate-x-2 opacity-0 text-paper/70 group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100"
              }`}
            >
              {page.number} — {page.label}
            </span>
            <span
              className={`h-2 w-2 shrink-0 rounded-full border transition-all duration-300 ${
                isActive
                  ? "scale-125 border-cyan bg-cyan"
                  : "border-paper/40 bg-transparent group-hover:border-cyan"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}
