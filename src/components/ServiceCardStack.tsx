"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { services } from "@/lib/content";

const iconPaths: Record<string, string> = {
  doc: "M8 3h6l4 4v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z M14 3v4h4",
  scale: "M12 3v18M6 7h12M6 7 3 13a3 3 0 0 0 6 0L6 7ZM18 7l-3 6a3 3 0 0 0 6 0l-3-6ZM9 21h6",
  coin: "M12 8v8M9.5 10.2c0-1 .9-1.7 2.5-1.7s2.5.6 2.5 1.5c0 2-5 1-5 3 0 1 1 1.7 2.5 1.7s2.5-.6 2.5-1.6",
  chart: "M4 19V9M10 19V5M16 19v-7M22 19H2",
  spark: "M12 2 9.6 9.6 2 12l7.6 2.4L12 22l2.4-7.6L22 12l-7.6-2.4Z",
  handshake:
    "m2 12 4-4 4 2 3-3 3 3 4-2 4 4M6 14l3 3a2 2 0 0 0 3-3M12 14l2 2a2 2 0 0 0 3-3l-3-3",
};

// Fein gerastertes "Ledger"-Muster als Kartenhintergrund — eine dezente
// Anspielung auf klassisches Buchhaltungspapier statt einer reinen Flächenfarbe.
const ledgerPattern: React.CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(to bottom, transparent, transparent 27px, rgba(11,20,32,0.05) 28px)",
};

function Card({
  index,
  active,
  total,
  service,
}: {
  index: number;
  active: number;
  total: number;
  service: (typeof services)[number];
}) {
  const diff = index - active;
  const isFront = diff === 0;
  const isUpcoming = diff > 0 && diff <= 3;
  const isPast = diff < 0;

  const target = isFront
    ? { scale: 1, y: 0, opacity: 1 }
    : isUpcoming
      ? { scale: 1 - diff * 0.035, y: -diff * 18, opacity: 0.82 - diff * 0.2 }
      : isPast
        ? { scale: 0.94, y: 36, opacity: 0 }
        : { scale: 0.86, y: -70, opacity: 0 };

  return (
    <motion.div
      animate={target}
      initial={false}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ zIndex: isFront ? 50 : 50 - Math.abs(diff), pointerEvents: isFront ? "auto" : "none" }}
      className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-ink/10 bg-paper p-7 shadow-[0_35px_70px_-30px_rgba(11,20,32,0.4)] sm:p-10"
      aria-hidden={!isFront}
    >
      <div style={ledgerPattern} className="pointer-events-none absolute inset-0" />
      <span className="pointer-events-none absolute -bottom-10 -right-4 select-none font-display text-[11rem] leading-none text-ink/[0.04] sm:text-[13rem]">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative flex items-start justify-between">
        <span className="eyebrow text-stone">
          0{index + 1} / 0{total}
        </span>
        <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold-dark">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d={iconPaths[service.icon]}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </span>
      </div>

      <div className="relative">
        <h3 className="font-display text-2xl font-normal text-ink sm:text-4xl">{service.title}</h3>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone sm:text-base">
          {service.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-ink/12 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-stone"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-end justify-between border-t border-ink/10 pt-5">
          <div>
            <p className="font-mono text-xl font-medium text-ink sm:text-2xl">{service.stat.value}</p>
            <p className="text-xs text-stone">{service.stat.label}</p>
          </div>
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-dark hover:text-ink"
          >
            Mehr erfahren <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// Gepinntes "Karteikarten"-Scrollytelling: Leistungs-Karten liegen als
// gestapeltes Deck im Bildschirm. Der Scroll-Fortschritt bestimmt einen
// diskreten "aktiven Index" (statt jede Karte einzeln an den Scroll zu
// koppeln) — die kommenden Karten peeken sichtbar hinter der aktiven hervor,
// bereits gezeigte schieben sich sanft nach hinten weg.
export default function ServiceCardStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const index = Math.min(services.length - 1, Math.max(0, Math.floor(value * services.length)));
    setActive(index);
  });

  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-7xl px-5 pt-20 sm:px-8">
        <p className="eyebrow text-gold-dark">{"// Leistungen"}</p>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-normal text-ink sm:text-5xl">
          Sechs Leistungsfelder, eine Kanzlei.
        </h2>
      </div>
      <div
        ref={containerRef}
        style={{ height: `${services.length * 70}vh` }}
        className="relative"
      >
        <div className="sticky top-0 flex h-screen items-center px-5 py-16 sm:px-8">
          <div className="relative mx-auto h-[64vh] w-full max-w-3xl">
            {services.map((service, i) => (
              <Card key={service.key} index={i} active={active} total={services.length} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
