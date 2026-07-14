"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { services } from "@/lib/content";
import { img } from "@/lib/images";

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

// Feste (nicht zufällige) Rotations-/Versatzwerte pro Karte, damit das Deck
// wie handgefächert wirkt, statt beim Server-Render/Hydration zu flackern.
const ROTATE = [-3, 4, -2.5, 3.5, -4, 2];
const OFFSET_X = [-12, 10, -8, 14, -10, 8];

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
  const rotate = ROTATE[index % ROTATE.length];
  const offsetX = OFFSET_X[index % OFFSET_X.length];

  const target = isFront
    ? { scale: 1, y: 0, x: 0, rotate: 0, rotateX: 0, opacity: 1, filter: "blur(0px)" }
    : isUpcoming
      ? {
          scale: 1 - diff * 0.045,
          y: -diff * 20,
          x: offsetX * (0.45 + diff * 0.18),
          rotate: rotate * (0.4 + diff * 0.22),
          rotateX: 5 + diff * 2.5,
          opacity: 0.85 - diff * 0.24,
          filter: `blur(${diff * 1.1}px)`,
        }
      : isPast
        ? {
            scale: 0.86,
            y: 70,
            x: offsetX * 1.5,
            rotate: rotate * 3.4,
            rotateX: -12,
            opacity: 0,
            filter: "blur(6px)",
          }
        : { scale: 0.8, y: -100, x: 0, rotate: 0, rotateX: 12, opacity: 0, filter: "blur(4px)" };

  return (
    <motion.div
      animate={target}
      initial={false}
      transition={{
        default: { type: "spring", stiffness: 240, damping: 24, mass: 0.9 },
        opacity: { duration: 0.4 },
        filter: { duration: 0.4 },
      }}
      style={{
        zIndex: isFront ? 50 : 50 - Math.abs(diff),
        pointerEvents: isFront ? "auto" : "none",
        transformPerspective: 1400,
      }}
      className="absolute inset-0 flex flex-col overflow-hidden rounded-[1.75rem] border border-ink/10 bg-paper shadow-[0_35px_70px_-30px_rgba(11,20,32,0.4)] sm:flex-row"
      aria-hidden={!isFront}
    >
      <div className="relative h-36 w-full shrink-0 overflow-hidden sm:h-full sm:w-[40%]">
        <Image
          src={img.services[service.key]}
          alt=""
          fill
          sizes="(min-width: 640px) 40vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent sm:bg-gradient-to-r" />
        <span className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl border border-gold-light/40 bg-ink/60 text-gold-light backdrop-blur-sm sm:h-14 sm:w-14">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
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
        <span className="absolute bottom-3 left-4 font-mono text-[11px] tracking-wide text-paper/80 sm:bottom-4">
          0{index + 1} / 0{total}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col justify-between overflow-hidden p-6 sm:p-9">
        <div style={ledgerPattern} className="pointer-events-none absolute inset-0" />
        <span className="pointer-events-none absolute -bottom-8 -right-4 select-none font-display text-[9rem] leading-none text-ink/[0.04] sm:text-[11rem]">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="relative">
          <h3 className="font-display text-xl font-normal text-ink sm:text-3xl">{service.title}</h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone sm:mt-4 sm:text-base">
            {service.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-ink/12 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-stone"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mt-5 flex items-end justify-between border-t border-ink/10 pt-4 sm:mt-6 sm:pt-5">
          <div>
            <p className="font-mono text-lg font-medium text-ink sm:text-2xl">{service.stat.value}</p>
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
// handgefächertes Deck im Bildschirm. Der Scroll-Fortschritt bestimmt einen
// diskreten "aktiven Index" (statt jede Karte einzeln an den Scroll zu
// koppeln) — kommende Karten peeken leicht gedreht/geneigt hinter der
// aktiven hervor (inkl. Tiefenunschärfe), bereits gezeigte werden mit einem
// Dreh nach hinten weggewischt. Federphysik statt linearer Easing-Kurven
// sorgt für ein spürbar "griffigeres" Scrollgefühl.
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
      <div ref={containerRef} style={{ height: `${services.length * 70}vh` }} className="relative">
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center gap-8 px-5 py-16 sm:px-8">
          <div className="relative mx-auto h-[64vh] w-full max-w-3xl">
            <motion.div
              aria-hidden
              animate={{ scale: [1, 1.05, 1], opacity: [0.12, 0.2, 0.12] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-x-10 inset-y-16 -z-10 rounded-full bg-gold blur-[90px]"
            />
            {services.map((service, i) => (
              <Card key={service.key} index={i} active={active} total={services.length} service={service} />
            ))}
          </div>

          <div className="flex w-full max-w-3xl gap-2 px-1">
            {services.map((service, i) => (
              <span key={service.key} className="h-1 flex-1 overflow-hidden rounded-full bg-ink/10">
                <motion.span
                  className="block h-full rounded-full bg-gold"
                  initial={false}
                  animate={{ scaleX: i <= active ? 1 : 0 }}
                  style={{ transformOrigin: "left" }}
                  transition={{ type: "spring", stiffness: 200, damping: 30 }}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
