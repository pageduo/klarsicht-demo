import type { Metadata } from "next";
import LegalHero from "@/components/LegalHero";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "FAQ — KLARSICHT Demo",
};

export default function FAQPage() {
  return (
    <>
      <LegalHero eyebrow="// Häufige Fragen" title="Fragen, die uns oft gestellt werden." />
      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <FAQAccordion />
        </div>
      </section>
      <CTABanner
        title="Ihre Frage war nicht dabei?"
        description="Melden Sie sich direkt — im Erstgespräch klären wir alles Weitere."
      />
    </>
  );
}
