# Medien-Audit — KLARSICHT

Stand: 31.10.2026 · Branch `legal/medien-audit` · Prüfer: Claude Opus 5 im Auftrag von PageDuo

Geprüft wurden alle Bilder, Videos, Grafiken, Schriften und Icon-Bibliotheken
dieses Repositorys auf Herkunft, Lizenzlage und Kennzeichnungspflicht nach
Art. 50 Abs. 4 EU AI Act (in Kraft seit 02.08.2026).

**Grundregel dieses Dokuments: Es wird nichts geraten.** Wo die Herkunft nicht
belegbar ist, steht „unklar" — nicht die wahrscheinlichste Vermutung.

---

## Überblick

| Ampel | Anzahl | |
|---|---|---|
| 🟢 GRÜN | 1 | die Schriften |
| 🟡 GELB | 28 | Unsplash-Motive: Quelle belegt, Lizenz und KI-Status nicht |
| 🔴 ROT | 0 | — |

Kein Medium wurde gekennzeichnet, gelöscht oder ausgetauscht. Das war in
diesem Schritt so vorgesehen.

---

## Der eine Befund, der alles andere trägt

Die Unsplash-Fotoseiten sind **nicht erreichbar**. Die lange Zahlenkette in
`images.unsplash.com/photo-1600880292203-757bb62b4baf` ist die Kennung des
Bildservers, nicht der Adressteil der Fotoseite; `unsplash.com/photos/<diese ID>`
antwortet mit 404. Ohne die Fotoseite lässt sich je Bild nicht feststellen:

- wer es aufgenommen hat,
- ob die freie Unsplash-Lizenz oder die abweichende **Unsplash+**-Lizenz gilt,
- ob Unsplash es als **KI-generiert** ausweist.

Der Dateikopf von `src/lib/images.ts` nennt die Unsplash-Lizenz und hält fest, die Motive seien
visuell geprüft worden. Das ist eine Angabe im Repo und zählt als Hinweis —
aber nicht als Nachweis gegenüber einem Rechteinhaber. Deshalb stehen alle
Unsplash-Motive auf 🟡, nicht auf 🟢.

**Was 🟢 daraus machen würde:** je Motiv die Fotoseite über die Bildersuche von
Unsplash auflösen und Fotograf, Lizenzart und KI-Kennzeichnung notieren. Oder
die Motive durch eigene beziehungsweise beauftragte Fotografie ersetzen — was
der Dateikopf für den echten Kundenbetrieb ohnehin vorsieht.

---

## Inventar

### Extern eingebundene Fotos (Unsplash)

Alle 26 Motive werden vom Bildserver `images.unsplash.com` geladen und liegen
**nicht** im Repository. Für sie gilt durchgehend: Quelle Unsplash (durch den
Auslieferungshost belegt), Fotograf **unklar**, Lizenzart **unklar**, KI
**unklar**, fotorealistisch ja, Ampel 🟡, keine Kennzeichnung gesetzt.

| Einsatzort im Code | Unsplash-ID | Motiv laut Repo |
|---|---|---|
| `hero` | `1600880292203-757bb62b4baf` | Zwei Kolleg:innen klatschen sich am Schreibtisch ab — bewusst kein steifes Architekturfoto, sondern eine warme, erfolgsorientierte Hero-Bühne. |
| `about` | `1521791136064-7986c2920216` | "Über uns" — Handschlag in Nahaufnahme, steht für Vertrauen und Mandatsbeginn. |
| `pageHero.leistungen, industries.immobilien` | `1554469384-e58fac16e23a` | Glasfassade eines modernen Bürogebäudes von unten — Bühne für die Leistungsübersicht. |
| `pageHero.ablauf, blog` | `1521737604893-d14cc237f11d` | Team bei einer Besprechung an einem großen Holztisch. |
| `pageHero.team, industries.mittelstand` | `1531973576160-7125cd663d86` | Offenes Büro mit Arbeitsplätzen und zwei Kolleg:innen am Tisch. |
| `pageHero.blog` | `1611974789855-9c2a0a7236a3` | Kursverlauf auf einem dunklen Bildschirm — Finanz-/Datenwelt als Blog-Bühne. |
| `pageHero.karriere, industries.handel` | `1497366754035-f200968a6e72` | Leerer, lichtdurchfluteter Büro-Flur — Einladung, Teil des Teams zu werden. |
| `pageHero.kontakt` | `1497366811353-6870744d04b2` | Heller Besprechungsraum mit Holztisch, Bühne für Über uns & Kontakt. |
| `scrollyPoster, blog` | `1551288049-bebda4e38f71` | Poster-/Fallback-Bild für die scroll-gesteuerte Videosequenz auf der Startseite — Analytics-Dashboard auf einem Laptop-Bildschirm. |
| `services` | `1554224154-26032ffc0d07` | *(im Repo nicht beschrieben)* |
| `services.wirtschaftspruefung` | `1450101499163-c8848c66ca85` | *(im Repo nicht beschrieben)* |
| `services.privatpersonen` | `1560472355-536de3962603` | *(im Repo nicht beschrieben)* |
| `services.unternehmensberatung` | `1556761175-b413da4baf72` | *(im Repo nicht beschrieben)* |
| `services.gruendung` | `1573167243872-43c6433b9d40` | *(im Repo nicht beschrieben)* |
| `services.nachfolge` | `1507679799987-c73779587ccf` | *(im Repo nicht beschrieben)* |
| `industries.startups, blog` | `1460925895917-afdab827c52f` | *(im Repo nicht beschrieben)* |
| `industries.freiberufler` | `1497215728101-856f4ea42174` | *(im Repo nicht beschrieben)* |
| `industries.nachfolge, blog` | `1542744173-8e7e53415bb0` | *(im Repo nicht beschrieben)* |
| `team.insa` | `1494790108377-be9c29b29330` | *(im Repo nicht beschrieben)* |
| `team.kian` | `1580489944761-15a19d654956` | *(im Repo nicht beschrieben)* |
| `team.lene` | `1560250097-0b93528c311a` | *(im Repo nicht beschrieben)* |
| `team.timo` | `1519085360753-af0119f7cbe7` | *(im Repo nicht beschrieben)* |
| `team.sena` | `1573496359142-b8d87734a5a2` | *(im Repo nicht beschrieben)* |
| `team.jonas` | `1607346256330-dee7af15f7c5` | *(im Repo nicht beschrieben)* |
| `blog` | `1454165804606-c3d57bc86b40` | *(im Repo nicht beschrieben)* |
| `blog` | `1526304640581-d334cdbbf45e` | *(im Repo nicht beschrieben)* |

### Extern eingebundene Videos (Pexels)

Geladen von `videos.pexels.com`, **nicht** im Repository. Für alle gilt:
Quelle Pexels (durch den Auslieferungshost belegt), Urheber **unklar**,
Lizenzart **unklar**, KI **unklar**, fotorealistisch ja, Ampel 🟡, keine
Kennzeichnung gesetzt. Die Video-Seite bei Pexels lässt sich aus der
Datei-ID nicht herleiten, genauso wenig wie bei Unsplash.

| Einsatzort im Code | Datei-ID | Motiv laut Repo |
|---|---|---|
| `timesChange` | `3129671` | Büro-/Teamszene, wird scroll-gesteuert abgespielt (kein Autoplay) in der "Die Steuerwelt im Wandel"-Sektion auf der Startseite. |
| `blogHero` | `3129576` | Ruhig loopendes Büro-/Beratungsvideo als Autoplay-Hintergrund im Blog-Header — bewusst gedeckt und mit dunklem Verlauf überlagert, im Stil klassischer Beratungsseiten (PwC, Deloitte u. Ä.). |

### Schriften

Eingebunden über `next/font/google`. Next.js lädt die Schriftdateien zur
Bauzeit herunter und liefert sie von der eigenen Domain aus; beim Seitenaufruf
entsteht **kein Aufruf an Google**. Google Fonts stehen unter der SIL Open
Font License. 🟢

### Icon-Bibliotheken

Keine. Die Symbole sind Inline-SVG im Quelltext. 🟢

---

## Zusätzliche Prüfungen

### Öffentliches Repository und Weitergabe der Originaldateien

`pageduo/klarsicht-demo` ist auf GitHub **öffentlich**. Jede im Repository liegende
Bilddatei wird damit als Originaldatei zum Download angeboten.

Im Repository liegen keine Fotos — die Unsplash-Motive werden extern geladen.
Betroffen sind nur die Gerüstgrafiken aus der Next.js-Vorlage (MIT) und das
Favicon. Beide dürfen weitergegeben werden. **Kein Befund.**

### Externe Aufrufe beim Seitenaufruf

Beim Laden der Live-Seite werden die Motive von `images.unsplash.com` geholt.
Dabei erfährt Unsplash die **IP-Adresse jedes Besuchers**, dazu Zeitpunkt,
Browser und die verweisende Seite. Eine Einwilligung wird nicht eingeholt, und
die Datenschutzerklärung der Demo verweist auf PageDuo, deren Erklärung sagt:
„Beim Aufruf werden keine Inhalte von Drittanbietern geladen."

**Das deckt sich nicht.** Entweder die Bilder wandern ins Repository (sofern die
Lizenz das erlaubt — siehe oben, derzeit ungeklärt), oder die Datenschutz-
erklärung muss den Abruf benennen. Hier wurde nichts umgebaut.

---

## KI-Kennzeichnung

**Es wurde keine gesetzt.** Art. 50 Abs. 4 EU AI Act verlangt die Offenlegung bei
KI-erzeugten Medien, die echt wirken. Ob eines der Motive KI-erzeugt ist, lässt
sich ohne die Unsplash-Fotoseiten nicht feststellen — und die Regel aus dem
Prüfauftrag lautet: Bei „unklar" **nicht** kennzeichnen, sondern melden.

Eine Kennzeichnung auf Verdacht wäre nicht die sichere Seite, sondern eine
falsche Angabe über ein möglicherweise von Hand fotografiertes Bild.

## Bildnachweise

Keine erforderlich. Die Unsplash-Lizenz verlangt keine Namensnennung. Sollte sich
bei der Klärung herausstellen, dass ein Motiv unter Unsplash+ steht, ist dessen
Lizenz gesondert zu prüfen.

---

## Klärung nötig

| Was | Wie viele | Warum offen |
|---|---|---|
| KI-Status der Unsplash-Motive | 26 | Fotoseite nicht erreichbar |
| Lizenzart (frei oder Unsplash+) | 26 | dito |

---

## Werkzeuge und Methode

`exiftool`, `ffprobe` und ImageMagick stehen auf diesem Rechner nicht zur
Verfügung. Die Metadaten wurden deshalb direkt aus den Dateien gelesen: JPEG-
Segmente (EXIF, XMP, IPTC, Kommentar, C2PA), PNG-Textkammern und die Kopf-Atome
von MP4. Gesucht wurde nach `Software`, `Artist`, `Creator`, `Credit`,
`Copyright`, `DigitalSourceType` sowie nach Spuren bekannter KI-Werkzeuge.

Dazu: Git-Historie der Dateien, Kommentare und Dokumente im Repo, Sichtprüfung,
und für die externen Aufrufe eine Aufzeichnung aller Netzwerk-Anfragen der
Live-Seite.
