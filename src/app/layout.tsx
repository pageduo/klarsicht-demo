import type { Metadata } from "next";
import { Instrument_Serif, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const title = "KLARSICHT Steuerberatung & Wirtschaftsprüfung — Hamburg | Demo-Website";
const description =
  "Demo-Website für eine moderne Steuerberatungs- und Wirtschaftsprüfungskanzlei in Hamburg: Steuerberatung, Jahresabschlussprüfung, Unternehmensberatung und Nachfolgeplanung. Diese Seite ist eine Agentur-Demo und kein echtes Unternehmen.";

export const metadata: Metadata = {
  title,
  description,
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title,
    description,
    locale: "de_DE",
    type: "website",
    images: ["https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${instrumentSerif.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
