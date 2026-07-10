"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Zwei Cursor-Modi, gesteuert über Data-Attribute auf beliebigen Elementen:
//  - data-cursor="Label"        → Textpille folgt dem Cursor (z. B. "Ansehen").
//  - data-cursor-shape="doc"    → Cyan-Bubble mit einem zum Inhalt passenden
//                                  Icon (z. B. Dokument-Icon über Leistungs-,
//                                  Waage-Icon über Prüfungs-Karten).
const shapeIcons: Record<string, React.ReactNode> = {
  doc: (
    <path
      d="M8 3h6l4 4v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z M14 3v4h4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  scale: (
    <path
      d="M12 3v18M6 7h12M6 7 3 13a3 3 0 0 0 6 0L6 7ZM18 7l-3 6a3 3 0 0 0 6 0l-3-6ZM9 21h6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  coin: (
    <>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path
        d="M12 8v8M9.5 10.2c0-1 .9-1.7 2.5-1.7s2.5.6 2.5 1.5c0 2-5 1-5 3 0 1 1 1.7 2.5 1.7s2.5-.6 2.5-1.6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
      />
    </>
  ),
  chart: (
    <path
      d="M4 19V9M10 19V5M16 19v-7M22 19H2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      fill="none"
    />
  ),
  spark: (
    <path
      d="M12 2 9.6 9.6 2 12l7.6 2.4L12 22l2.4-7.6L22 12l-7.6-2.4Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  handshake: (
    <path
      d="m2 12 4-4 4 2 3-3 3 3 4-2 4 4M6 14l3 3a2 2 0 0 0 3-3M12 14l2 2a2 2 0 0 0 3-3l-3-3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
};

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 300, mass: 0.5 });
  const springY = useSpring(y, { damping: 30, stiffness: 300, mass: 0.5 });
  const [label, setLabel] = useState<string | null>(null);
  const [shape, setShape] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    // matchMedia isn't available during SSR, so this must run post-mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      const labelTarget = target.closest("[data-cursor]");
      const shapeTarget = target.closest("[data-cursor-shape]");
      setLabel(labelTarget ? labelTarget.getAttribute("data-cursor") : null);
      setShape(shapeTarget ? shapeTarget.getAttribute("data-cursor-shape") : null);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  const active = shape ? `shape:${shape}` : label ? `label:${label}` : null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:flex"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
    >
      <AnimatePresence>
        {active && shape && (
          <motion.div
            key={active}
            initial={{ scale: 0, opacity: 0, rotate: -15 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan text-ink shadow-lg"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              {shapeIcons[shape] ?? null}
            </svg>
          </motion.div>
        )}
        {active && !shape && label && (
          <motion.div
            key={active}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex h-24 w-24 items-center justify-center rounded-full bg-ink text-center font-display text-sm italic text-paper shadow-lg"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
