/**
 * Standort als eigene Zeichnung statt als fremde Karte.
 *
 * Vorher hing hier ein Google-Maps-iframe hinter einer Zwei-Klick-Lösung.
 * Die war datenschutzrechtlich sauber, löste aber ein Problem, das diese
 * Demo gar nicht hat: Die Adresse ist frei erfunden. Eine echte Karte hätte
 * entweder auf einen fremden Hauseingang gezeigt oder ins Leere — beides
 * schlechter als eine Zeichnung, die ehrlich sagt, dass sie eine ist.
 *
 * Kein Screenshot, keine Kacheln, kein externer Request beim Seitenaufruf.
 */

/** Zeigt auf die Stadt, nicht auf die erfundene Hausnummer. */
export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Hamburg";

export default function MapEmbed({ ort, title }: { ort: string; title: string }) {
  return (
    <div
      role="img"
      aria-label={title}
      className="relative flex aspect-[4/3] w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl bg-mist p-8 text-center"
    >
      <svg
        viewBox="0 0 400 200"
        className="pointer-events-none absolute inset-0 h-full w-full text-slate opacity-10"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <path
          d="M-10 128 C 60 128, 96 108, 150 108 L 258 108 C 312 108, 348 92, 410 92 L 410 116 C 348 116, 312 132, 258 132 L 150 132 C 96 132, 60 152, -10 152 Z"
          fill="currentColor"
        />
        <path
          d="M236 44 C 262 36, 286 50, 282 70 C 278 90, 248 96, 238 84 C 228 72, 222 50, 236 44 Z"
          fill="currentColor"
        />
      </svg>

      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="relative text-slate" aria-hidden>
        <path d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11Z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <p className="relative font-display text-xl text-ink">{ort}</p>
      <p className="relative text-xs uppercase tracking-[0.2em] text-stone">
        Adresse fiktiv · 53.55° N · 9.99° E
      </p>
      <p className="relative max-w-xs text-sm leading-relaxed text-stone">
        Diese Demo bindet keine Karte ein. Beim Aufruf der Seite werden keine Daten an Google
        übertragen.
      </p>
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative rounded-full bg-slate px-6 py-3 text-sm font-semibold text-paper transition hover:bg-ink"
      >
        In Google Maps öffnen ↗
      </a>
    </div>
  );
}
