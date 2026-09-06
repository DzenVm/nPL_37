import type { Metadata } from "next";
import Link from "next/link";
import { contactEmail, siteUrl } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Regulamin",
  description: "Zasady uczestnictwa w kursie języka niemieckiego online dla dorosłych.",
  alternates: { canonical: "/regulamin" },
};

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container-narrow prose">
        <p className="breadcrumb">
          <Link href="/">Strona główna</Link> / Regulamin
        </p>
        <h1>Regulamin uczestnictwa w kursie</h1>
        <p>
          Regulamin określa zasady korzystania z zajęć organizowanych za pośrednictwem serwisu dostępnego pod
          adresem <strong>{siteUrl}</strong>, zwanego dalej Organizatorem.
        </p>

        <h2>1. Uczestnicy</h2>
        <p>
          Zajęcia skierowane są wyłącznie do osób pełnoletnich. Przystąpienie do kursu następuje po przeprowadzeniu
          rozmowy kwalifikującej, która pozwala dobrać właściwy poziom i format zajęć.
        </p>

        <h2>2. Zapisy i przydział do grupy</h2>
        <p>
          Zgłoszenie przez formularz kontaktowy nie jest jednoznaczne z zapisem na kurs — stanowi wyłącznie prośbę o
          kontakt w celu ustalenia szczegółów. Przydział do konkretnej grupy następuje po rozmowie kwalifikującej i
          potwierdzeniu dostępności miejsc na wybranym poziomie.
        </p>

        <h2>3. Płatności</h2>
        <p>
          Cena zależy od formatu zajęć (grupowe, indywidualne, intensywne), długości pakietu oraz poziomu i jest
          każdorazowo ustalana indywidualnie przed rozpoczęciem zajęć. Możliwy jest podział płatności na raty
          miesięczne. Uczestnik przed rozpoczęciem kursu otrzymuje pisemne (mailowe) potwierdzenie ceny i warunków
          płatności.
        </p>

        <h2>4. Rezygnacja i zwroty</h2>
        <p>
          Rezygnacja zgłoszona przed rozpoczęciem opłaconego pakietu skutkuje pełnym zwrotem wpłaconej kwoty.
          Rezygnacja w trakcie trwania pakietu rozliczana jest proporcjonalnie do liczby zajęć, które faktycznie się
          odbyły lub zostały udostępnione w formie nagrania.
        </p>

        <h2>5. Odwoływanie i przekładanie zajęć</h2>
        <p>
          Uczestnik zajęć grupowych, który nie może wziąć udziału w danej lekcji, otrzymuje materiały i nagranie z jej
          przebiegu. Uczestnik zajęć indywidualnych może przełożyć termin z odpowiednim wyprzedzeniem, ustalonym
          podczas rozmowy kwalifikującej. Odwołanie zajęć z przyczyn leżących po stronie Organizatora skutkuje ich
          odrobieniem w innym terminie bez dodatkowych kosztów.
        </p>

        <h2>6. Materiały do zajęć</h2>
        <p>
          Materiały przekazywane uczestnikom przeznaczone są wyłącznie do ich własnego użytku edukacyjnego. Ich
          dalsze rozpowszechnianie, odsprzedaż lub udostępnianie osobom trzecim bez zgody Organizatora jest
          niedozwolone.
        </p>

        <h2>7. Reklamacje</h2>
        <p>
          Reklamacje dotyczące przebiegu zajęć można zgłaszać na adres <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          Reklamacja powinna zawierać opis sytuacji oraz oczekiwany sposób jej rozwiązania. Odpowiedź udzielana jest w
          terminie do 14 dni od otrzymania zgłoszenia.
        </p>

        <h2>8. Postanowienia końcowe</h2>
        <p>
          W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy prawa polskiego, w
          szczególności Kodeksu cywilnego. Organizator zastrzega sobie możliwość zmiany regulaminu; zmiany nie
          dotyczą pakietów opłaconych i rozpoczętych przed ich wejściem w życie.
        </p>
      </div>
    </section>
  );
}
