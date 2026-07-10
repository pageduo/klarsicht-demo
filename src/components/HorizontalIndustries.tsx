"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { industries } from "@/lib/content";
import { img } from "@/lib/images";

// Löst sich bewusst vom reinen Oben-nach-unten-Scrollen: der vertikale
// Scroll-Fortschritt innerhalb der gepinnten Sektion treibt eine horizontale
// Verschiebung der Branchen-Kacheln an.
export default function HorizontalIndustries() {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-7xl px-5 pt-20 sm:px-8">
        <p className="eyebrow text-cyan-light">{"// Branchen"}</p>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-normal text-paper sm:text-5xl">
          Wir kennen Ihre Branche von innen.
        </h2>
      </div>

      <div ref={outerRef} className="relative" style={{ height: "260vh" }}>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div ref={trackRef} style={{ x }} className="flex gap-6 px-5 sm:px-8">
            {industries.map((industry) => (
              <div
                key={industry.key}
                className="relative flex h-[60vh] w-[78vw] shrink-0 flex-col justify-end overflow-hidden rounded-[2rem] sm:w-[46vw] lg:w-[32vw]"
              >
                <Image
                  src={img.industries[industry.key]}
                  alt={industry.label}
                  fill
                  sizes="(min-width: 1024px) 32vw, (min-width: 640px) 46vw, 78vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="relative p-7">
                  <h3 className="font-display text-xl font-normal text-paper sm:text-2xl">
                    {industry.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/70">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
