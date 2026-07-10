import Link from "next/link";
import Reveal from "./Reveal";
import { company } from "@/lib/content";

export default function CTABanner({
  title = "Bereit für eine Kanzlei, die mitdenkt?",
  description = "Vereinbaren Sie ein kostenfreies Erstgespräch — wir melden uns in der Regel innerhalb eines Werktags mit einem Terminvorschlag.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-cyan py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-normal leading-tight text-ink sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/75 sm:text-lg">{description}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt"
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-slate"
            >
              Erstgespräch vereinbaren
            </Link>
            <a
              href={company.phoneHref}
              className="rounded-full border border-ink/30 px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-ink/10"
            >
              {company.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
