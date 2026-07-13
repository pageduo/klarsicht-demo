"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { navPages } from "@/lib/content";

// Kompakte, eingeklappte Zahlen-Leiste am rechten Bildschirmrand statt einer
// dauerhaft aufgeklappten Liste: die volle Übersicht mit Klarnamen blendet
// sich erst bei Hover sanft ein (Spring statt linearer Easing-Kurve), die
// aktive Seite bleibt über eine layoutId-Highlight-Pille auch beim
// Seitenwechsel als "magic move" sichtbar verbunden.
export default function SectionNav() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.nav
      aria-label="Seitennavigation"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ width: hovered ? 240 : 52 }}
      transition={{ type: "spring", stiffness: 340, damping: 34 }}
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-0.5 overflow-hidden rounded-2xl border border-paper/10 bg-ink/85 py-3 shadow-xl backdrop-blur xl:flex"
    >
      {navPages.map((page) => {
        const isActive = page.href === "/" ? pathname === "/" : pathname.startsWith(page.href);
        return (
          <Link
            key={page.href}
            href={page.href}
            className="relative flex h-9 shrink-0 items-center px-2"
          >
            {isActive && (
              <motion.span
                layoutId="nav-active-highlight"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                className="absolute inset-x-1 inset-y-0.5 rounded-lg bg-gold/15"
              />
            )}
            <span
              className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center font-mono text-[10px] tabular-nums transition-colors duration-200 ${
                isActive ? "text-gold-light" : "text-paper/45"
              }`}
            >
              {page.number}
            </span>
            <motion.span
              animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -6 }}
              transition={{ duration: 0.22, delay: hovered ? 0.03 : 0, ease: [0.16, 1, 0.3, 1] }}
              className={`relative z-10 whitespace-nowrap text-sm ${
                isActive ? "font-medium text-paper" : "text-paper/60"
              }`}
            >
              {page.label}
            </motion.span>
          </Link>
        );
      })}
    </motion.nav>
  );
}
