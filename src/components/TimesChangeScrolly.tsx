"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { timesChangeStages } from "@/lib/content";
import { videos } from "@/lib/videos";
import { img } from "@/lib/images";

// Gepinntes Apple-Style-Scrollytelling: das Video bleibt fixiert im
// Bildschirm, seine Wiedergabeposition wird direkt vom Scroll-Fortschritt
// gesteuert (kein Autoplay) und der begleitende Text wechselt in Etappen.
export default function TimesChangeScrolly() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const video = videoRef.current;
    if (video && video.duration) {
      video.currentTime = value * video.duration;
    }
    const index = Math.min(
      timesChangeStages.length - 1,
      Math.max(0, Math.floor(value * timesChangeStages.length))
    );
    setActive(index);
  });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReady(!prefersReducedMotion);
  }, []);

  const stage = timesChangeStages[active];

  return (
    <section className="bg-ink">
      <div
        ref={containerRef}
        style={{ height: `${timesChangeStages.length * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {ready ? (
            <video
              ref={videoRef}
              className="h-full w-full object-cover opacity-60"
              muted
              playsInline
              preload="auto"
              poster={img.scrollyPoster}
            >
              <source src={videos.timesChange} type="video/mp4" />
            </video>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={img.scrollyPoster} alt="" className="h-full w-full object-cover opacity-60" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/70" />

          <div className="absolute inset-0 flex flex-col justify-end px-5 pb-20 sm:px-8 sm:pb-28">
            <div className="mx-auto w-full max-w-3xl">
              <p className="eyebrow text-cyan-light">{"// Die Steuerwelt im Wandel"}</p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={stage.time}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="mt-4 font-display text-2xl font-normal leading-tight text-paper sm:text-4xl">
                    {stage.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-paper/75 sm:text-base">
                    {stage.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex gap-2">
                {timesChangeStages.map((s, i) => (
                  <span
                    key={s.time}
                    className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                      i <= active ? "bg-cyan" : "bg-paper/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
