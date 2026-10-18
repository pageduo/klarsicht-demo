import { DEMO_HINWEIS } from "@/lib/pageduo";

/**
 * Der Hinweis-Kasten, der auf beiden Rechtsseiten gleich lautet.
 *
 * Gleicher Wortlaut an beiden Stellen und nur eine Quelle dafür: Zwei
 * Fassungen desselben Hinweises laufen mit der Zeit auseinander, und beim
 * Satz „ist ein fiktives Unternehmen“ will man das nicht riskieren.
 */
export default function DemoHinweis({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-gold/40 bg-mist/60 p-6 text-sm leading-relaxed text-stone ${className}`}
    >
      <strong className="text-ink">Hinweis:</strong> {DEMO_HINWEIS}
    </div>
  );
}
