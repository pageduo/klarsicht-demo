"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import clsx from "clsx";

// Blur-Up beim Laden: das Bild startet leicht verschwommen/skaliert und
// schärft sich sobald es geladen ist, statt hart einzuploppen.
export default function BlurImage({ className, onLoad, alt, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      {...props}
      alt={alt}
      className={clsx(
        "transition-all duration-700 ease-out",
        loaded ? "scale-100 blur-0" : "scale-105 blur-md",
        className
      )}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
    />
  );
}
