const FALLBACK_HOST = "maetuwe.website";

function resolveHost(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;
  if (!raw) return FALLBACK_HOST;
  try {
    return new URL(raw).host;
  } catch {
    return raw.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
}

export const siteHost = resolveHost();
export const siteUrl = `https://${siteHost}`;
export const contactEmail = `kontakt@${siteHost}`;

// Krótki, opisowy tytuł serwisu — nie jest to nazwa marki ani logotyp,
// wyłącznie funkcjonalny opis tematu strony używany w <title> i nagłówkach.
export const pageTitle = "Kurs języka niemieckiego online dla dorosłych";
export const shortTitle = "Niemiecki online dla dorosłych";
