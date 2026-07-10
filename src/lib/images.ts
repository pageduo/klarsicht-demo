// Kuratierte, lizenzfreie Unsplash-Motive (Unsplash-Lizenz: kostenlose kommerzielle Nutzung).
// Jede Bild-ID wurde einzeln per HTTP-Statuscode verifiziert UND als Vorschau visuell
// geprüft (Inhalt passt zur Bildunterschrift, keine fremden Firmenlogos/Wahrzeichen
// sichtbar), bevor sie hier eingetragen wurde. Für den echten Kundenbetrieb durch
// eigene / beauftragte Fotografie ersetzen.
function unsplash(id: string, w = 1600) {
  return `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;
}

export const img = {
  // Zwei Kolleg:innen klatschen sich am Schreibtisch ab — bewusst kein steifes
  // Architekturfoto, sondern eine warme, erfolgsorientierte Hero-Bühne.
  hero: unsplash("1600880292203-757bb62b4baf", 2400),

  // "Über uns" — Handschlag in Nahaufnahme, steht für Vertrauen und Mandatsbeginn.
  about: unsplash("1521791136064-7986c2920216", 1800),

  pageHero: {
    // Glasfassade eines modernen Bürogebäudes von unten — Bühne für die Leistungsübersicht.
    leistungen: unsplash("1554469384-e58fac16e23a", 2000),
    // Team bei einer Besprechung an einem großen Holztisch.
    ablauf: unsplash("1521737604893-d14cc237f11d", 2000),
    // Offenes Büro mit Arbeitsplätzen und zwei Kolleg:innen am Tisch.
    team: unsplash("1531973576160-7125cd663d86", 2000),
    // Kursverlauf auf einem dunklen Bildschirm — Finanz-/Datenwelt als Blog-Bühne.
    blog: unsplash("1611974789855-9c2a0a7236a3", 2000),
    // Leerer, lichtdurchfluteter Büro-Flur — Einladung, Teil des Teams zu werden.
    karriere: unsplash("1497366754035-f200968a6e72", 2000),
    // Heller Besprechungsraum mit Holztisch, Bühne für Über uns & Kontakt.
    kontakt: unsplash("1497366811353-6870744d04b2", 2000),
  } as Record<string, string>,

  // Poster-/Fallback-Bild für die scroll-gesteuerte Videosequenz auf der Startseite —
  // Analytics-Dashboard auf einem Laptop-Bildschirm.
  scrollyPoster: unsplash("1551288049-bebda4e38f71", 2000),

  // Branchen-Kacheln der horizontalen Scroll-Sektion.
  industries: {
    mittelstand: unsplash("1531973576160-7125cd663d86"),
    startups: unsplash("1460925895917-afdab827c52f"),
    freiberufler: unsplash("1497215728101-856f4ea42174"),
    immobilien: unsplash("1554469384-e58fac16e23a"),
    handel: unsplash("1497366754035-f200968a6e72"),
    nachfolge: unsplash("1542744173-8e7e53415bb0"),
  } as Record<string, string>,

  team: {
    insa: unsplash("1494790108377-be9c29b29330", 900),
    kian: unsplash("1580489944761-15a19d654956", 900),
    lene: unsplash("1560250097-0b93528c311a", 900),
    timo: unsplash("1519085360753-af0119f7cbe7", 900),
    sena: unsplash("1573496359142-b8d87734a5a2", 900),
    jonas: unsplash("1607346256330-dee7af15f7c5", 900),
  } as Record<string, string>,

  blog: {
    "wachstumschancengesetz-2026": unsplash("1454165804606-c3d57bc86b40"),
    "e-rechnungspflicht-fahrplan": unsplash("1551288049-bebda4e38f71"),
    "jahresabschluss-digital": unsplash("1460925895917-afdab827c52f"),
    "unternehmensnachfolge-fallstricke": unsplash("1526304640581-d334cdbbf45e"),
    "homeoffice-pauschale-2026": unsplash("1521737604893-d14cc237f11d"),
    "esg-berichtspflicht-wp": unsplash("1542744173-8e7e53415bb0"),
  } as Record<string, string>,
};
