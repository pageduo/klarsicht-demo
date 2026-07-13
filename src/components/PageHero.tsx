import Image from "next/image";
import { ReactNode } from "react";
import Parallax from "./Parallax";
import BackgroundVideo from "./BackgroundVideo";

export default function PageHero({
  eyebrow,
  title,
  subline,
  image,
  imageAlt,
  video,
  children,
}: {
  eyebrow: string;
  title: string;
  subline?: string;
  image?: string;
  imageAlt?: string;
  video?: string;
  children?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden bg-slate pb-16 pt-32 sm:pt-40">
      {video && image && (
        <>
          <div className="absolute inset-0">
            <BackgroundVideo src={video} poster={image} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate via-slate/90 to-slate/50" />
        </>
      )}
      {!video && image && (
        <>
          <Parallax strength={40}>
            <Image
              src={image}
              alt={imageAlt ?? ""}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-t from-slate via-slate/85 to-slate/40" />
        </>
      )}
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <p className="eyebrow text-gold-light">{eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-display text-3xl font-normal leading-tight text-paper sm:text-5xl">
          {title}
        </h1>
        {subline && <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/70">{subline}</p>}
        {children}
      </div>
    </div>
  );
}
