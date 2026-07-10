"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

// Bild-Reveal-Wipe: ein Vorhang in Ink-Farbe schiebt sich beim Scrollen ins
// Bild seitlich weg und gibt das Motiv frei, statt es einfach einzublenden.
export default function ImageWipe({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
      <motion.div
        aria-hidden
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "right" }}
        className="absolute inset-0 z-10 bg-ink"
      />
    </div>
  );
}
