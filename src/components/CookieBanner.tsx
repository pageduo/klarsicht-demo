"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PAGEDUO_URL } from "@/lib/pageduo";

export const COOKIE_CONSENT_KEY = "klarsicht-demo-cookie-consent";
export const COOKIE_CONSENT_EVENT = "klarsicht-demo-cookie-consent-change";

export function getStoredConsent() {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(COOKIE_CONSENT_KEY);
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // localStorage isn't available during SSR, so the initial (hidden) render
    // must match the server, then correct itself once mounted on the client.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(!getStoredConsent());
  }, []);

  const decide = (value: "accepted" | "declined") => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] px-4 pb-16 sm:px-6 sm:pb-4">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-mist bg-paper/95 p-5 shadow-2xl backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm leading-relaxed text-stone">
          <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-dark">
            Demo-Ansicht
          </p>
          <p>
            Diese Demo setzt keine Cookies. Dieser Balken zeigt nur, wie ein Einwilligungsbanner
            auf der fertigen Seite aussähe.{" "}
            <Link href="/datenschutz" className="underline underline-offset-2 hover:text-ink">
              Datenschutzerklärung
            </Link>{" "}
            ·{" "}
            <a
              href={`${PAGEDUO_URL}/cookies`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-ink"
            >
              Cookie-Hinweise von PageDuo
            </a>
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => decide("declined")}
            className="rounded-full border border-ink/20 px-4 py-2 text-sm font-medium text-ink transition hover:bg-mist"
          >
            Ablehnen
          </button>
          <button
            onClick={() => decide("accepted")}
            className="rounded-full bg-slate px-4 py-2 text-sm font-medium text-paper transition hover:bg-ink"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
