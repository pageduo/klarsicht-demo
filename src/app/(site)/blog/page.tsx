import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/lib/content";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Blog — KLARSICHT Demo",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="// Blog"
        title="Neues aus der Steuerwelt."
        subline="Einordnungen zu Gesetzesänderungen, Digitalisierung und Beratungspraxis — kompakt und ohne Paragrafen-Wüste."
        image={img.pageHero.blog}
        imageAlt="Kursverlauf auf einem dunklen Bildschirm"
      />

      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06}>
                <Link href={`/blog/${post.slug}`} data-cursor="Artikel lesen" className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={img.blog[post.slug]}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                  <p className="mt-5 eyebrow text-cyan-dark">{post.category}</p>
                  <h3 className="mt-2 font-display text-xl font-normal text-ink transition-colors group-hover:text-cyan-dark">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{post.excerpt}</p>
                  <p className="mt-4 text-xs text-stone">
                    {formatDate(post.date)} · {post.readTime}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
