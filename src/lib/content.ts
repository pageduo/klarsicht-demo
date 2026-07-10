export const company = {
  name: "KLARSICHT",
  fullName: "KLARSICHT Steuerberatung & Wirtschaftsprüfung PartG mbB",
  founded: 2014,
  city: "Hamburg",
  claim: "Zahlen mit Klarheit.",
  claimSecondLine: "Beratung mit Weitblick.",
  subline:
    "Eine Hamburger Kanzlei für Steuerberatung, Wirtschaftsprüfung und Unternehmensberatung — digital, direkt und ohne Aktenstaub.",
  usp:
    "Wir verbinden Steuerberatung und Wirtschaftsprüfung unter einem Dach — mit einem Mandantenportal statt Papierstapeln und Beraterinnen und Beratern, die in Szenarien denken statt nur in Paragrafen.",
  phone: "+49 40 2288 4170",
  phoneHref: "tel:+494022884170",
  email: "mandat@klarsicht-demo.de",
  address: {
    street: "Am Sandtorkai 32",
    zip: "20457",
    city: "Hamburg",
  },
  hours: [
    { day: "Montag – Donnerstag", time: "8:30 – 18:00 Uhr" },
    { day: "Freitag", time: "8:30 – 15:00 Uhr" },
    { day: "Termine außerhalb", time: "nach Vereinbarung, auch remote" },
  ],
  social: [{ label: "LinkedIn" }, { label: "Xing" }],
};

export const navPages = [
  { href: "/", label: "Start", number: "01" },
  { href: "/leistungen", label: "Leistungen", number: "02" },
  { href: "/ablauf", label: "Ablauf", number: "03" },
  { href: "/team", label: "Team", number: "04" },
  { href: "/blog", label: "Blog", number: "05" },
  { href: "/karriere", label: "Karriere", number: "06" },
  { href: "/faq", label: "FAQ", number: "07" },
  { href: "/kontakt", label: "Über uns & Kontakt", number: "08" },
] as const;

export const stats = [
  { value: 11, suffix: "", label: "Jahre am Markt" },
  { value: 480, suffix: "+", label: "betreute Mandate" },
  { value: 97, suffix: "%", label: "Mandantenbindung" },
  { value: 24, suffix: "", label: "Kolleg:innen im Team" },
];

export const trustBadges = [
  "Steuerberaterkammer Hamburg",
  "Wirtschaftsprüferkammer",
  "Mitglied DStV",
  "DATEV-Kanzlei",
];

export const services = [
  {
    key: "steuerberatung-unternehmen",
    title: "Steuerberatung für Unternehmen",
    short: "Laufende Buchhaltung, Jahresabschlüsse und Steuererklärungen — digital vorbereitet.",
    description:
      "Laufende Finanzbuchhaltung, Jahresabschlüsse und Steuererklärungen für Kapital- und Personengesellschaften, angebunden an DATEV, Lexoffice oder sevDesk — je nachdem, was in Ihrem Unternehmen bereits läuft.",
    icon: "doc",
  },
  {
    key: "wirtschaftspruefung",
    title: "Wirtschaftsprüfung & Jahresabschlussprüfung",
    short: "Gesetzliche und freiwillige Prüfungen nach HGB und IFRS.",
    description:
      "Gesetzliche und freiwillige Abschlussprüfungen nach HGB und IFRS, Sonderprüfungen und prüfungsnahe Beratung — mit einem Prüfungsteam, das organisatorisch getrennt von der laufenden Steuerberatung arbeitet.",
    icon: "scale",
  },
  {
    key: "privatpersonen",
    title: "Steuerberatung für Privatpersonen & Vermögende",
    short: "Einkommensteuer, Immobilien und Vermögensstrukturierung.",
    description:
      "Einkommensteuererklärungen, Beratung zu vermieteten Immobilien, Kapitalerträgen und Vermögensstrukturierung für Privatpersonen mit komplexeren steuerlichen Sachverhalten.",
    icon: "coin",
  },
  {
    key: "unternehmensberatung",
    title: "Unternehmensberatung & Controlling",
    short: "Liquiditätsplanung, Reporting und digitale Finanzprozesse.",
    description:
      "Liquiditätsplanung, betriebswirtschaftliches Reporting und Digitalisierung der Finanzprozesse — von der ersten Excel-Tabelle bis zum monatlichen Management-Report.",
    icon: "chart",
  },
  {
    key: "gruendung",
    title: "Existenzgründung & Start-ups",
    short: "Rechtsformwahl, Finanzierungsrunden und Cap-Table-Themen.",
    description:
      "Beratung bei Rechtsformwahl und Gründung, laufende Betreuung durch Finanzierungsrunden und steuerliche Begleitung bei Cap-Table- und ESOP-Themen für wachsende Start-ups.",
    icon: "spark",
  },
  {
    key: "nachfolge",
    title: "Nachfolge- & Vermögensnachfolgeplanung",
    short: "Unternehmensnachfolge, Erbschaft- und Schenkungsteuer.",
    description:
      "Steuerlich und menschlich sensible Begleitung von Unternehmensnachfolgen sowie Beratung zu Erbschaft- und Schenkungsteuer, oft über mehrere Generationen hinweg geplant.",
    icon: "handshake",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Erstgespräch",
    description:
      "30 Minuten, kostenfrei und unverbindlich: Wir hören uns Ihren Status quo und Ihr Zielbild an — persönlich in Hamburg oder per Videocall.",
  },
  {
    number: "02",
    title: "Analyse & Angebot",
    description:
      "Wir sichten Ihre Unterlagen und die bisherige Struktur und erstellen ein transparentes Pauschalangebot ohne versteckte Positionen.",
  },
  {
    number: "03",
    title: "Digitale Aufnahme",
    description:
      "Anbindung an unser Mandantenportal und Ihre bestehende Buchhaltungssoftware — DATEV, Lexoffice oder sevDesk, ganz ohne Aktenordner.",
  },
  {
    number: "04",
    title: "Laufende Betreuung",
    description:
      "Eine feste Ansprechperson, kurze Wege und monatliches Reporting, damit Sie jederzeit wissen, wo Ihr Unternehmen steht.",
  },
  {
    number: "05",
    title: "Abschluss & Weiterentwicklung",
    description:
      "Jahresabschluss, Steueroptimierung für das Folgejahr und ein gemeinsamer Blick auf die nächsten strategischen Schritte.",
  },
] as const;

// Etappen der scroll-gesteuerten "Zeiten ändern sich"-Videosequenz auf der
// Startseite (gepinntes Apple-Style-Scrollytelling: Video bleibt fixiert,
// nur der Text wechselt beim Weiterscrollen).
export const timesChangeStages = [
  {
    time: "0:00",
    title: "Die Steuerwelt verändert sich schneller als je zuvor.",
    description:
      "E-Rechnungspflicht, neue Meldefristen, sich jährlich ändernde Abschreibungsregeln — was gestern galt, ist heute schon wieder Geschichte.",
  },
  {
    time: "0:07",
    title: "Digitalisierung ist kein Projekt mehr, sondern Alltag.",
    description:
      "Belege per App, Auswertungen in Echtzeit, Abstimmung im gemeinsamen Portal statt im Ordner-Pendelverkehr.",
  },
  {
    time: "0:14",
    title: "Neue Gesetze bedeuten auch neue Chancen.",
    description:
      "Förderprogramme, Abschreibungsmodelle und Strukturierungsoptionen entstehen so schnell, wie alte verschwinden — wer sie kennt, ist im Vorteil.",
  },
  {
    time: "0:21",
    title: "Wir behalten den Überblick — für Sie.",
    description:
      "Damit Sie sich auf Ihr Unternehmen konzentrieren können, während wir uns um die Zahlen und ihre Bedeutung kümmern.",
  },
] as const;

export const industries = [
  {
    key: "mittelstand",
    label: "Mittelstand & Familienunternehmen",
    description: "Traditionsbetriebe mit Blick auf Generationenwechsel und Digitalisierung.",
  },
  {
    key: "startups",
    label: "Start-ups & Gründer:innen",
    description: "Von der Seed-Runde bis zur Series A — steuerlich sattelfest wachsen.",
  },
  {
    key: "freiberufler",
    label: "Freiberufler:innen & Kanzleien",
    description: "Ärzt:innen, Architekt:innen, Kanzleien — Beratung, die die Branche kennt.",
  },
  {
    key: "immobilien",
    label: "Immobilien & Vermögende Privatpersonen",
    description: "Vermietung, Verwaltung und Vermögensstrukturierung aus einer Hand.",
  },
  {
    key: "handel",
    label: "Handel & E-Commerce",
    description: "Multichannel-Buchhaltung, Umsatzsteuer im EU-Ausland, Marktplatz-Reporting.",
  },
  {
    key: "nachfolge",
    label: "Unternehmensnachfolge",
    description: "Übergaben, die steuerlich klug und menschlich sauber gelöst werden.",
  },
] as const;

export const team = [
  {
    key: "insa",
    name: "Dr. Insa Brammer",
    role: "Gründerin & Steuerberaterin",
    bio: "Gründete KLARSICHT 2014 mit dem Anspruch, Steuerberatung digital und verständlich zu machen. Fokus: Unternehmenssteuerrecht.",
    cursorShape: "doc",
  },
  {
    key: "kian",
    name: "Kian Feldmann",
    role: "Wirtschaftsprüfer & Partner",
    bio: "Leitet den Prüfungsbereich und verantwortet gesetzliche wie freiwillige Jahresabschlussprüfungen nach HGB und IFRS.",
    cursorShape: "scale",
  },
  {
    key: "lene",
    name: "Lene Ohlsen",
    role: "Steuerberaterin, Vermögensnachfolge",
    bio: "Begleitet Unternehmer:innen und Familien bei Nachfolge-, Erbschaft- und Schenkungsteuerfragen — mit Feingefühl für sensible Themen.",
    cursorShape: "handshake",
  },
  {
    key: "timo",
    name: "Timo Reimers",
    role: "Leitung Digitalisierung & Mandantenportal",
    bio: "Verantwortet die Anbindung von Mandant:innen an DATEV, Lexoffice und das hauseigene Mandantenportal.",
    cursorShape: "chart",
  },
  {
    key: "sena",
    name: "Sena Aksoy",
    role: "Steuerfachwirtin, Finanzbuchhaltung",
    bio: "Kümmert sich um die laufende Finanzbuchhaltung und ist erste Ansprechpartnerin für Belege und Fristen.",
    cursorShape: "coin",
  },
  {
    key: "jonas",
    name: "Jonas Petersen",
    role: "Berater Unternehmensnachfolge & M&A",
    bio: "Begleitet Unternehmenskäufe, -verkäufe und Nachfolgeregelungen von der ersten Bewertung bis zum Closing.",
    cursorShape: "spark",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Endlich eine Kanzlei, die unsere Finanzprozesse digitalisiert hat, statt uns mit Papierstapeln zurückzulassen.",
    name: "Geschäftsführerin",
    context: "E-Commerce-Unternehmen, Hamburg",
  },
  {
    quote:
      "Die Jahresabschlussprüfung war zum ersten Mal ein echter Sparringspartner-Prozess, kein reines Abhaken von Checklisten.",
    name: "CFO",
    context: "Logistikunternehmen, Norddeutschland",
  },
  {
    quote:
      "Unsere Nachfolge war ein sensibles Thema — KLARSICHT hat uns menschlich und fachlich sicher durch den Prozess geführt.",
    name: "Inhaberfamilie",
    context: "Familienunternehmen in dritter Generation",
  },
] as const;

export const faqs = [
  {
    question: "Ab wann lohnt sich ein Wechsel zu einer neuen Kanzlei?",
    answer:
      "Praktisch jederzeit — ein Kanzleiwechsel ist auch unterjährig unkompliziert möglich. Wir übernehmen die Abstimmung mit Ihrer bisherigen Steuerberatung und sorgen für einen lückenlosen Übergang der laufenden Fristen.",
  },
  {
    question: "Arbeiten Sie mit DATEV oder auch mit Lexoffice und sevDesk?",
    answer:
      "Beides. Wir sind DATEV-Kanzlei, betreuen aber ebenso Mandant:innen, die bereits mit Lexoffice, sevDesk oder einer anderen Cloud-Buchhaltung arbeiten — wichtig ist uns die digitale Anbindung, nicht das konkrete Tool.",
  },
  {
    question: "Übernehmen Sie Prüfung und laufende Beratung gleichzeitig?",
    answer:
      "Bei gesetzlichen Pflichtprüfungen sind Prüfungs- und Beratungsteam aus Unabhängigkeitsgründen strikt getrennt organisiert. Bei freiwilligen Prüfungen sind kombinierte Mandate möglich — wir klären das transparent im Erstgespräch.",
  },
  {
    question: "Wie schnell bekomme ich einen Termin für ein Erstgespräch?",
    answer:
      "In der Regel innerhalb einer Woche, bei dringenden Anliegen auch kurzfristiger. Das Erstgespräch ist kostenfrei und unverbindlich und dauert etwa 30 Minuten.",
  },
  {
    question: "Betreuen Sie auch Unternehmen mit Auslandsbezug?",
    answer:
      "Ja, insbesondere bei umsatzsteuerlichen Fragen im EU-Ausland, grenzüberschreitenden Lieferketten und internationalen Konzernstrukturen arbeiten wir eng mit spezialisierten Partnerkanzleien im Ausland zusammen.",
  },
  {
    question: "Was kostet die laufende Steuerberatung?",
    answer:
      "Die Gebühren richten sich nach der Steuerberatervergütungsverordnung (StBVV) und dem Umfang Ihrer Buchhaltung. Nach dem Erstgespräch erhalten Sie ein transparentes Pauschalangebot statt einer Abrechnung nach Einzelposten.",
  },
] as const;

export const jobs = [
  {
    title: "Steuerberater:in / Berufsanwärter:in",
    type: "Vollzeit",
    description:
      "Eigenverantwortliche Betreuung eines festen Mandantenstamms aus Mittelstand und Start-ups, Unterstützung bei der Berufsexamensvorbereitung möglich.",
  },
  {
    title: "Wirtschaftsprüfer:in / Prüfungsassistent:in",
    type: "Vollzeit",
    description:
      "Mitarbeit an gesetzlichen und freiwilligen Jahresabschlussprüfungen nach HGB und IFRS im Prüfungsteam.",
  },
  {
    title: "Steuerfachangestellte:r",
    type: "Vollzeit / Teilzeit",
    description:
      "Laufende Finanzbuchhaltung und Lohnbuchhaltung für einen festen Mandantenkreis, digital über unser Mandantenportal.",
  },
  {
    title: "Werkstudent:in Digitalisierung & Mandantenportal",
    type: "Werkstudium",
    description:
      "Unterstützung beim Ausbau unseres Mandantenportals und der Automatisierung wiederkehrender Buchhaltungsprozesse.",
  },
] as const;

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "wachstumschancengesetz-2026",
    title: "Wachstumschancengesetz: Was Unternehmen 2026 wirklich beachten müssen",
    category: "Steuerrecht",
    date: "2026-06-18",
    readTime: "6 Min. Lesezeit",
    excerpt:
      "Zwischen degressiver Abschreibung, erweiterten Verlustverrechnungen und neuen Schwellenwerten: ein Überblick über die Änderungen, die tatsächlich Kasseneffekte haben.",
    body: [
      "Das Wachstumschancengesetz bringt seit seiner stufenweisen Einführung eine Reihe von Änderungen mit sich, die für Unternehmen jeder Größe relevant sind — von der degressiven Abschreibung für bewegliche Wirtschaftsgüter bis zur erweiterten Verlustverrechnung.",
      "Für den Mittelstand besonders relevant: die angepassten Schwellenwerte bei der Ist-Besteuerung und die erweiterten Möglichkeiten bei der Sonderabschreibung für kleine und mittlere Unternehmen. Wer investiert, sollte den Zeitpunkt genau planen.",
      "Unser Rat: Prüfen Sie gemeinsam mit Ihrer Steuerberatung, welche Investitionen sich in diesem und im kommenden Jahr steuerlich unterschiedlich auswirken — die Reihenfolge kann einen spürbaren Unterschied machen.",
    ],
  },
  {
    slug: "e-rechnungspflicht-fahrplan",
    title: "E-Rechnungspflicht: Der Fahrplan für den deutschen Mittelstand",
    category: "Digitalisierung",
    date: "2026-05-04",
    readTime: "5 Min. Lesezeit",
    excerpt:
      "Die verpflichtende E-Rechnung im B2B-Bereich betrifft praktisch jedes Unternehmen. Wir ordnen die Übergangsfristen ein und zeigen, worauf es bei der Umstellung ankommt.",
    body: [
      "Seit Einführung der verpflichtenden E-Rechnung im B2B-Bereich gelten gestaffelte Übergangsfristen, abhängig von der Unternehmensgröße. Wer noch keine geeignete Softwarelösung im Einsatz hat, sollte jetzt handeln, statt auf den letzten Stichtag zu warten.",
      "Wichtig zu wissen: E-Rechnung bedeutet nicht PDF per E-Mail, sondern ein strukturiertes, maschinenlesbares Format wie XRechnung oder ZUGFeRD. Die Umstellung betrifft sowohl den Rechnungsversand als auch den -empfang.",
      "Wir unterstützen unsere Mandant:innen bei der Auswahl und Anbindung einer passenden Lösung — meist lässt sich das direkt mit der ohnehin laufenden Digitalisierung der Buchhaltung verbinden.",
    ],
  },
  {
    slug: "jahresabschluss-digital",
    title: "Jahresabschluss digital: Wie ein Mandantenportal Monate Zeit spart",
    category: "Digitalisierung",
    date: "2026-03-27",
    readTime: "4 Min. Lesezeit",
    excerpt:
      "Belegchaos, E-Mail-Pingpong, verlorene Anhänge: Wie ein zentrales Mandantenportal den Weg zum fertigen Jahresabschluss spürbar verkürzt.",
    body: [
      "Der klassische Weg zum Jahresabschluss ist oft von Wartezeiten geprägt: fehlende Belege, unklare Rückfragen per E-Mail, Abstimmungen, die sich über Wochen ziehen. Ein zentrales Mandantenportal löst genau diese Reibungspunkte.",
      "In unserem Portal sehen Mandant:innen jederzeit den Bearbeitungsstand, laden Belege direkt hoch und beantworten Rückfragen an einem Ort — ohne dass etwas in Postfächern untergeht.",
      "Das Ergebnis in der Praxis: Jahresabschlüsse, die früher im Schnitt bis in den Sommer dauerten, liegen heute für die meisten unserer Mandate deutlich früher vor.",
    ],
  },
  {
    slug: "unternehmensnachfolge-fallstricke",
    title: "Unternehmensnachfolge: Die 5 häufigsten steuerlichen Fallstricke",
    category: "Beratung",
    date: "2026-02-11",
    readTime: "7 Min. Lesezeit",
    excerpt:
      "Vom falschen Übergabezeitpunkt bis zur unklaren Bewertung: Diese fünf Stolpersteine sehen wir in Nachfolgeprozessen immer wieder — und wie man sie vermeidet.",
    body: [
      "Unternehmensnachfolgen scheitern selten an der grundsätzlichen Bereitschaft zur Übergabe, sondern an handwerklichen Fehlern in der steuerlichen und rechtlichen Vorbereitung.",
      "Der häufigste Fehler: Der Übergabezeitpunkt wird nicht mit der Unternehmensbewertung und den geltenden Verschonungsregeln der Erbschaftsteuer abgestimmt. Auch eine unklare Trennung von Privat- und Betriebsvermögen führt regelmäßig zu unnötigen Steuerlasten.",
      "Wer frühzeitig — im Idealfall drei bis fünf Jahre vor der geplanten Übergabe — mit der Planung beginnt, hat deutlich mehr Gestaltungsspielraum als bei einer kurzfristig angestoßenen Nachfolge.",
    ],
  },
  {
    slug: "homeoffice-pauschale-2026",
    title: "Homeoffice-Pauschale und Reisekosten: Was sich 2026 ändert",
    category: "Steuerrecht",
    date: "2026-01-22",
    readTime: "4 Min. Lesezeit",
    excerpt:
      "Angepasste Pauschbeträge und neue Nachweispflichten bei Reisekosten — ein kompakter Überblick für Arbeitgeber:innen und Angestellte.",
    body: [
      "Die Homeoffice-Pauschale und die Verpflegungsmehraufwendungen bei Dienstreisen werden regelmäßig angepasst. Für Arbeitgeber:innen lohnt sich ein Blick auf die aktuellen Pauschbeträge, bevor die Lohnabrechnung für das neue Jahr aufgesetzt wird.",
      "Bei Reisekosten gilt weiterhin: Ohne saubere Belege und eine nachvollziehbare Reisekostenabrechnung drohen bei einer Betriebsprüfung Rückfragen. Digitale Reisekosten-Tools helfen, das Belegchaos von vornherein zu vermeiden.",
      "Wir empfehlen, die eigenen Reisekostenrichtlinien einmal jährlich mit der aktuellen Rechtslage abzugleichen — das dauert meist nur ein kurzes Gespräch.",
    ],
  },
  {
    slug: "esg-berichtspflicht-wp",
    title: "ESG-Berichtspflicht: Wann Wirtschaftsprüfung zur Pflicht wird",
    category: "Prüfung",
    date: "2025-11-30",
    readTime: "6 Min. Lesezeit",
    excerpt:
      "Nachhaltigkeitsberichterstattung ist längst nicht mehr nur ein Thema für Konzerne. Wir ordnen ein, ab welcher Größenordnung eine externe Prüfung relevant wird.",
    body: [
      "Mit der schrittweisen Ausweitung der Nachhaltigkeitsberichtspflichten rücken auch mittelständische Unternehmen zunehmend in den Anwendungsbereich — sei es direkt oder als Zulieferer größerer, bereits berichtspflichtiger Unternehmen.",
      "Eine externe Prüfung der Nachhaltigkeitsberichterstattung stellt sicher, dass die Angaben nicht nur intern plausibel, sondern auch extern belastbar sind — ein Aspekt, der zunehmend auch bei Finanzierungsgesprächen eine Rolle spielt.",
      "Unser Rat: Auch wenn Ihr Unternehmen aktuell noch nicht berichtspflichtig ist, lohnt sich ein früher Blick auf die relevanten Kennzahlen — die Anforderungen kommen erfahrungsgemäß schneller, als viele erwarten.",
    ],
  },
];

export const defaultAccent = "#16BFAE";
