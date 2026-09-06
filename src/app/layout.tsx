import type { Metadata } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { pageTitle, siteUrl } from "@/content/site-config";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageTitle,
    template: `%s — ${pageTitle}`,
  },
  description:
    "Zajęcia z niemieckiego online dla dorosłych: małe grupy do 8 osób, poziomy od A1 do C1, przygotowanie do pracy za granicą i egzaminów Goethe-Zertifikat, telc, ÖSD.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteUrl,
    title: pageTitle,
    description:
      "Niemiecki online dla dorosłych: małe grupy, konkretny cel, poziomy od A1 do C1.",
  },
};

// Renderowanie dynamiczne całej witryny — wymagane przez nonce w polityce CSP
// (middleware.ts), który musi być świeży przy każdym żądaniu.
export const dynamic = "force-dynamic";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${fraunces.variable} ${publicSans.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Przejdź do treści głównej
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
