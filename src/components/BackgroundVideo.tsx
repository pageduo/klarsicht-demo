"use client";

import { useEffect, useState } from "react";

// Autoplay-Hintergrundvideo mit Foto-Fallback: falls das Video nicht laden
// kann oder Nutzer:innen reduzierte Bewegung bevorzugen, bleibt einfach das
// Poster-Bild stehen — es gibt also nie einen leeren/kaputten Zustand.
export default function BackgroundVideo({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const [allowVideo, setAllowVideo] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // matchMedia isn't available during SSR, so this must run post-mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAllowVideo(!prefersReducedMotion);
  }, []);

  if (!allowVideo || failed) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={poster} alt="" className={`h-full w-full object-cover ${className}`} />;
  }

  return (
    <video
      className={`h-full w-full object-cover ${className}`}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      onError={() => setFailed(true)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
