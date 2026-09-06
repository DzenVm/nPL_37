# Kurs języka niemieckiego online dla dorosłych

Serwis SSR (Next.js App Router, renderowanie dynamiczne przy każdym żądaniu)
dla kursu językowego kierowanego do dorosłych, przygotowany pod kampanię
Google Ads na rynek polski.

## Stos technologiczny

- **Next.js 16 (App Router)** — renderowanie dynamiczne całej witryny
  (`export const dynamic = "force-dynamic"` w `src/app/layout.tsx`), nie
  statyczny eksport.
- **Proxy (dawniej middleware) z nonce'owaną polityką CSP** — `src/proxy.ts`
  generuje losowy nonce przy każdym żądaniu i dokleja go zarówno do
  wewnętrznych skryptów Next.js, jak i własnych skryptów inline (dane
  strukturalne JSON-LD). To realny powód, dla którego cała witryna musi być
  renderowana dynamicznie, a nie tylko kosmetyczna flaga.
- **Własny system projektowy w czystym CSS** (`src/app/tokens.css`,
  `src/app/globals.css`) — bez Tailwinda i bez gotowego UI-kita, płynna skala
  typografii oparta na `clamp()`.
- **Ilustracje jako komponenty SVG pisane ręcznie w kodzie**
  (`src/components/illustrations/`) zamiast zdjęć — brak zależności od
  zewnętrznych plików graficznych, natychmiastowe ładowanie, brak ryzyka
  praw autorskich.
- **Favicon, ikona na ekran główny i obraz Open Graph generowane w locie**
  przez `next/og` (`src/app/icon.tsx`, `apple-icon.tsx`,
  `opengraph-image.tsx`) — żadnych statycznych plików graficznych do
  podmiany.
- Quiz poziomujący i formularz kontaktowy jako komponenty klienckie oparte o
  `useReducer`/`useState`, bez bibliotek formularzy.

## Zmienne środowiskowe

Skopiuj `.env.example` do `.env.local` i uzupełnij:

| Zmienna | Wymagana | Opis |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | tak przed produkcją | Docelowa domena serwisu. Jedyne miejsce w kodzie, które trzeba podmienić — wpływa na metadane SEO, dane strukturalne, `sitemap.xml` i adres kontaktowy (`kontakt@<domena>`). Bez ustawienia serwis działa z placeholderem `twoja-domena.pl`. |
| `RESEND_API_KEY` | nie | Klucz API [Resend](https://resend.com) do wysyłki e-maili ze zgłoszeń z formularza kontaktowego. Bez niego zgłoszenia trafiają wyłącznie do logów serwera (Vercel → Logs) — formularz nadal przyjmuje zgłoszenia i zwraca sukces. |
| `CONTACT_TO_EMAIL` | nie | Nadpisuje adres odbiorcy zgłoszeń (domyślnie `kontakt@<domena>`). |
| `CONTACT_FROM_EMAIL` | nie | Nadpisuje adres nadawcy w wysyłce przez Resend. |

## Rozwój lokalny

```bash
npm install
npm run dev
```

Przydatne komendy:

```bash
npm run lint       # ESLint (flat config eslint-config-next)
npm run typecheck   # tsc --noEmit
npm run build       # build produkcyjny
```

## Wdrożenie na Vercel

1. Zaimportuj repozytorium w Vercel (framework zostanie wykryty automatycznie
   jako Next.js — nie jest wymagany dodatkowy plik konfiguracyjny).
2. W ustawieniach projektu dodaj zmienną `NEXT_PUBLIC_SITE_URL` z docelową
   domeną (patrz tabela wyżej) — bez niej metadane i mapa strony będą
   wskazywać na placeholder.
3. Opcjonalnie dodaj `RESEND_API_KEY`, jeśli formularz kontaktowy ma wysyłać
   e-maile, a nie tylko logować zgłoszenia.
4. Podłącz docelową domenę w zakładce Domains i upewnij się, że
   `NEXT_PUBLIC_SITE_URL` dokładnie ją odzwierciedla (wraz z `https://`).

## Przed uruchomieniem kampanii Google Ads

- Uzupełnij `NEXT_PUBLIC_SITE_URL` docelową domeną.
- Strony `/polityka-prywatnosci` i `/regulamin` odwołują się do „podmiotu
  prowadzącego serwis dostępny pod adresem [domena]" zamiast do nazwy firmy —
  jeśli prowadzisz działalność pod konkretną nazwą/NIP-em, warto to doprecyzować
  przed publikacją.
- Ceny w sekcji „Cennik" celowo nie podają konkretnych kwot (zależą od
  formatu i długości pakietu) — jeśli reklama ma odsyłać do konkretnej oferty
  cenowej, upewnij się, że treść reklamy i strony są spójne.
- Formularz kontaktowy wysyła e-maile tylko przy skonfigurowanym
  `RESEND_API_KEY` — bez niego zgłoszenia trafiają wyłącznie do logów.
