"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

function Card({
  index,
  total,
  scrollYProgress,
  service,
}: {
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  service: (typeof services)[number];
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const isFirst = index === 0;
  const isLast = index === total - 1;
  // Kleiner Anteil des eigenen Fensters, in dem ein- bzw. ausgeblendet wird —
  // so überschneiden sich nie zwei Karten gleichzeitig lesbar. Die erste Karte
  // braucht kein Einblenden (sie ist von Anfang an sichtbar), die letzte kein
  // Ausblenden (sie bleibt am Ende einfach stehen) — offsets müssen für Framer
  // Motions WAAPI-Pfad strikt innerhalb [0, 1] und streng monoton bleiben.
  const fade = 0.4 / total;

  const y = useTransform(
    scrollYProgress,
    isFirst ? [0, 1] : [start - fade, start],
    isFirst ? [0, 0] : [48, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    isLast ? [0, 1] : [end, end + fade],
    isLast ? [1, 1] : [1, 0.9]
  );
  const opacity = useTransform(
    scrollYProgress,
    isFirst ? [end, end + fade] : isLast ? [start - fade, start] : [start - fade, start, end, end + fade],
    isFirst ? [1, 0] : isLast ? [0, 1] : [0, 1, 1, 0]
  );

  return (
    <motion.div
      style={{ y, scale, opacity, zIndex: index }}
      className="absolute inset-0 flex flex-col justify-between rounded-[2rem] border border-ink/10 bg-paper p-8 shadow-[0_30px_60px_-25px_rgba(11,20,32,0.35)] sm:p-12"
    >
      <div className="flex items-start justify-between">
        <span className="eyebrow text-stone">
          0{index + 1} / 0{total}
        </span>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan/15 text-cyan-dark">
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
      </div>

      <div>
        <h3 className="font-display text-2xl font-normal text-ink sm:text-4xl">{service.title}</h3>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone sm:text-base">
          {service.description}
        </p>
        <Link
          href="/leistungen"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-dark hover:text-ink"
        >
          Mehr erfahren <span aria-hidden>→</span>
        </Link>
      </div>
    </motion.div>
  );
}

// Gepinntes "Karteikarten"-Scrollytelling: Leistungs-Karten liegen gestapelt
// im Bildschirm, jede neue Karte schiebt sich beim Scrollen nach vorn,
// während die vorherige zurück und ein Stück nach hinten skaliert wird.
export default function ServiceCardStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-7xl px-5 pt-20 sm:px-8">
        <p className="eyebrow text-cyan-dark">{"// Leistungen"}</p>
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
          <div className="relative mx-auto h-[60vh] w-full max-w-3xl">
            {services.map((service, i) => (
              <Card
                key={service.key}
                index={i}
                total={services.length}
                scrollYProgress={scrollYProgress}
                service={service}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
