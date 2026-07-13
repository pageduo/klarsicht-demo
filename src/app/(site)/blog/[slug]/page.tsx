import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import LegalHero from "@/components/LegalHero";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import { blogPosts } from "@/lib/content";
import { img } from "@/lib/images";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  return { title: post ? `${post.title} — KLARSICHT Demo` : "Artikel — KLARSICHT Demo" };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <LegalHero eyebrow={`// ${post.category}`} title={post.title} />

      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <p className="text-sm text-stone">
              {formatDate(post.date)} · {post.readTime}
            </p>
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl">
              <Image src={img.blog[post.slug]} alt={post.title} fill sizes="100vw" className="object-cover" />
            </div>
            <div className="mt-10 flex flex-col gap-6 text-base leading-relaxed text-ink/85">
              {post.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <Link
              href="/blog"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark hover:text-ink"
            >
              <span aria-hidden>←</span> Zurück zum Blog
            </Link>
          </Reveal>
        </div>
      </section>

      <CTABanner
        title="Fragen zu diesem Thema?"
        description="Wir ordnen gerne ein, was das für Ihr Unternehmen konkret bedeutet."
      />
    </>
  );
}
