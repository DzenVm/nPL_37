import type { Metadata } from "next";
import Link from "next/link";
import { LevelExplorer } from "@/components/level-explorer";
import { curriculum } from "@/content/curriculum";

export const metadata: Metadata = {
  title: "Program nauki po poziomach",
  description:
    "Szczegółowy program kursu niemieckiego dla dorosłych: poziomy A1–C1, zakres gramatyki, tematy i sposób weryfikacji postępów.",
  alternates: { canonical: "/program" },
};

export default function ProgramPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Strona główna</Link> / Program nauki
          </p>
          <div className="section-head">
            <span className="eyebrow">Program nauki</span>
            <h1>Co dokładnie wchodzi w skład każdego poziomu</h1>
            <p className="lede">
              Poniżej pełny rozkład materiału — z podziałem na to, co po danym poziomie faktycznie potrafisz zrobić,
              jaka gramatyka jest w centrum uwagi i ile czasu to zwykle zajmuje. Bez marketingowego skrótu „biegła
              znajomość” bez pokrycia w konkretach.
            </p>
          </div>
          <div className="card">
            <LevelExplorer levels={curriculum} />
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container-narrow">
          <span className="eyebrow">Weryfikacja postępów</span>
          <h2>Przejście na kolejny poziom nie jest automatyczne</h2>
          <p>
            Między modułami tematycznymi pojawia się krótki sprawdzian — głównie ustny, bo to mówienie, a nie test
            wyboru, pokazuje realną gotowość do pracy na trudniejszym materiale. Jeśli coś nie zostało utrwalone,
            wracamy do tego, zamiast przechodzić dalej na wyrost.
          </p>
          <p>
            Dla osób przygotowujących się do konkretnego egzaminu — Goethe-Zertifikat, telc albo ÖSD — dodatkowo
            przeprowadzamy próbny test w formacie zbliżonym do właściwego egzaminu, żeby oswoić się z jego strukturą
            i rozłożeniem czasu, a nie tylko ze słownictwem.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <span className="eyebrow">Materiały i praca własna</span>
          <h2>Co dostajesz i ile pracy zostaje po Twojej stronie</h2>
          <p>
            Materiały do zajęć — teksty, nagrania, ćwiczenia gramatyczne — przygotowuje prowadzący pod konkretną
            grupę i przesyła w wersji cyfrowej po każdej lekcji, nie przed nią. Dzięki temu zajęcia nie zamieniają się
            w czytanie gotowego materiału na głos.
          </p>
          <p>
            Zadanie na kolejne spotkanie jest zawsze konkretne i policzalne — zwykle 20–30 minut pracy. To
            realistyczny czas do utrzymania nawet przy pełnym grafiku zawodowym, a jednocześnie wystarczający, żeby
            nowy materiał zdążył się utrwalić.
          </p>
          <div className="hero__actions">
            <Link href="/kontakt" className="btn btn--primary">
              Zapytaj o dostępne terminy
            </Link>
            <Link href="/#sprawdz-poziom" className="btn btn--ghost">
              Sprawdź swój poziom
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
