"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { company, navPages } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Auf Unterseiten ist der Bereich unter dem Header nicht durchgehend
  // dunkel wie auf der Startseite, daher startet der Header dort direkt im
  // kompakten/soliden Zustand.
  const compact = scrolled || !isHome;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          compact
            ? "bg-paper/90 shadow-sm backdrop-blur-md"
            : "bg-gradient-to-b from-ink/60 to-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href="/"
            className={`font-display text-lg font-normal italic tracking-wide transition-colors ${
              compact ? "text-ink" : "text-paper"
            }`}
          >
            {company.name}
            <span className={compact ? "text-cyan-dark" : "text-cyan-light"}>.</span>
          </Link>

          <div className="flex items-center gap-4">
            <a
              href={company.phoneHref}
              className={`hidden font-mono text-sm sm:block ${
                compact ? "text-ink" : "text-paper"
              }`}
            >
              {company.phone}
            </a>
            <Link
              href="/kontakt"
              className="hidden rounded-full bg-cyan px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-cyan-light sm:block"
            >
              Erstgespräch vereinbaren
            </Link>
            <button
              aria-label="Menü öffnen"
              onClick={() => setMenuOpen(true)}
              className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 xl:hidden ${
                compact ? "text-ink" : "text-paper"
              }`}
            >
              <span className="h-px w-6 bg-current" />
              <span className="h-px w-6 bg-current" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink text-paper xl:hidden"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <span className="font-display text-lg font-normal italic">{company.name}</span>
              <button
                aria-label="Menü schließen"
                onClick={() => setMenuOpen(false)}
                className="relative h-10 w-10"
              >
                <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-paper" />
                <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-paper" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-start justify-center gap-2 overflow-y-auto px-8 py-10">
              {navPages.map((page, i) => (
                <motion.div
                  key={page.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={page.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-2xl font-normal text-paper/90 transition hover:text-cyan-light sm:text-3xl"
                  >
                    <span className="mr-3 font-mono text-sm text-cyan-light">{page.number}</span>
                    {page.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="flex flex-col gap-2 px-8 pb-10 text-sm text-paper/70">
              <a href={company.phoneHref}>{company.phone}</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
