"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 rounded-3xl bg-slate p-10 text-center text-paper">
        <p className="font-display text-2xl font-normal">Vielen Dank!</p>
        <p className="max-w-sm text-sm leading-relaxed text-paper/70">
          Dies ist eine Demo-Website ohne echten Formularversand. In der echten Umsetzung würde
          Ihre Anfrage jetzt bei uns eingehen und wir würden uns innerhalb eines Werktags melden.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 rounded-3xl bg-slate p-8 sm:p-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          required
          type="text"
          placeholder="Name"
          className="rounded-xl border border-paper/15 bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper/40 focus:border-gold focus:outline-none"
        />
        <input
          required
          type="email"
          placeholder="E-Mail"
          className="rounded-xl border border-paper/15 bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper/40 focus:border-gold focus:outline-none"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="tel"
          placeholder="Telefon (optional)"
          className="rounded-xl border border-paper/15 bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper/40 focus:border-gold focus:outline-none"
        />
        <select
          defaultValue=""
          className="rounded-xl border border-paper/15 bg-transparent px-4 py-3 text-sm text-paper focus:border-gold focus:outline-none"
        >
          <option value="" disabled className="text-ink">
            Anliegen wählen
          </option>
          <option className="text-ink">Steuerberatung</option>
          <option className="text-ink">Wirtschaftsprüfung</option>
          <option className="text-ink">Unternehmensberatung</option>
          <option className="text-ink">Sonstiges</option>
        </select>
      </div>
      <textarea
        required
        placeholder="Ihre Nachricht (z. B. Unternehmensgröße, Anliegen, Zeitrahmen)"
        rows={4}
        className="resize-none rounded-xl border border-paper/15 bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper/40 focus:border-gold focus:outline-none"
      />
      <label className="flex items-start gap-3 text-xs leading-relaxed text-paper/60">
        <input required type="checkbox" className="mt-0.5 h-4 w-4 accent-gold" />
        <span>
          Ich habe die{" "}
          <Link href="/datenschutz" className="underline underline-offset-2">
            Datenschutzerklärung
          </Link>{" "}
          gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage
          einverstanden.
        </span>
      </label>
      <button
        type="submit"
        className="mt-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-gold-light"
      >
        Nachricht senden
      </button>
      <p className="text-[11px] text-paper/40">
        Demo-Formular ohne echten Versand. Es werden keine Daten übertragen oder gespeichert.
      </p>
    </form>
  );
}
