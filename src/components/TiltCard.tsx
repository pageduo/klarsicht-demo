"use client";

import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Sanfter 3D-Tilt-Effekt: die Karte neigt sich in Richtung des Cursors,
// begrenzt auf wenige Grad, damit es hochwertig statt spielerisch wirkt.
export default function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);
  const springX = useSpring(rawX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rawY, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(springY, [0, 1], [7, -7]);
  const rotateY = useTransform(springX, [0, 1], [-7, 7]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    rawX.set((e.clientX - bounds.left) / bounds.width);
    rawY.set((e.clientY - bounds.top) / bounds.height);
  };

  const onMouseLeave = () => {
    rawX.set(0.5);
    rawY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
