import type { Metadata } from "next";
import Link from "next/link";
import { contactEmail, siteUrl } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Zasady przetwarzania danych osobowych osób korzystających z serwisu i formularza kontaktowego.",
  alternates: { canonical: "/polityka-prywatnosci" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section">
      <div className="container-narrow prose">
        <p className="breadcrumb">
          <Link href="/">Strona główna</Link> / Polityka prywatności
        </p>
        <h1>Polityka prywatności</h1>
        <p>
          Niniejszy dokument opisuje zasady przetwarzania danych osobowych osób korzystających z serwisu dostępnego
          pod adresem <strong>{siteUrl}</strong> oraz z formularza kontaktowego dostępnego w jego ramach.
        </p>

        <h2>1. Administrator danych</h2>
        <p>
          Administratorem danych osobowych jest podmiot prowadzący serwis dostępny pod adresem {siteUrl}. Kontakt we
          wszystkich sprawach związanych z przetwarzaniem danych osobowych: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </p>

        <h2>2. Jakie dane przetwarzamy i po co</h2>
        <p>
          W formularzu kontaktowym zbierane są: imię, adres e-mail, opcjonalnie numer telefonu, wybrany cel nauki
          oraz treść wiadomości. Dane te przetwarzane są w celu:
        </p>
        <ul>
          <li>udzielenia odpowiedzi na zgłoszenie i przeprowadzenia rozmowy kwalifikującej,</li>
          <li>przygotowania indywidualnej propozycji formatu zajęć i wyceny,</li>
          <li>w przypadku zawarcia umowy — jej wykonania i rozliczenia.</li>
        </ul>
        <p>
          Podstawą prawną przetwarzania jest art. 6 ust. 1 lit. b RODO — podjęcie działań na żądanie osoby, której
          dane dotyczą, przed ewentualnym zawarciem umowy, a w zakresie prowadzonej korespondencji — art. 6 ust. 1
          lit. f RODO, czyli prawnie uzasadniony interes administratora polegający na obsłudze zgłoszeń.
        </p>

        <h2>3. Okres przechowywania danych</h2>
        <p>
          Dane ze zgłoszeń, które nie zakończyły się zawarciem umowy, przechowywane są przez okres prowadzenia
          korespondencji, nie dłużej niż 12 miesięcy od ostatniego kontaktu. Dane związane z zawartą umową
          przechowywane są przez czas jej trwania oraz okres przedawnienia wynikających z niej roszczeń.
        </p>

        <h2>4. Komu przekazujemy dane</h2>
        <p>
          Dane mogą być przekazywane podmiotom technicznie obsługującym serwis — dostawcy infrastruktury hostingowej
          oraz, jeśli formularz kontaktowy korzysta z zewnętrznej usługi wysyłki wiadomości e-mail, dostawcy takiej
          usługi. Podmioty te przetwarzają dane wyłącznie na podstawie umowy powierzenia przetwarzania i wyłącznie w
          zakresie niezbędnym do realizacji usługi.
        </p>

        <h2>5. Twoje prawa</h2>
        <p>W związku z przetwarzaniem danych przysługuje Ci prawo do:</p>
        <ul>
          <li>dostępu do swoich danych i uzyskania ich kopii,</li>
          <li>sprostowania danych,</li>
          <li>usunięcia danych lub ograniczenia ich przetwarzania,</li>
          <li>wniesienia sprzeciwu wobec przetwarzania opartego na uzasadnionym interesie,</li>
          <li>przenoszenia danych,</li>
          <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
        </ul>

        <h2>6. Pliki cookie i technologie śledzące</h2>
        <p>
          Serwis w swojej podstawowej wersji nie wykorzystuje plików cookie do celów analitycznych ani
          marketingowych. Jeżeli w przyszłości zostaną wdrożone narzędzia analityczne lub pomiarowe (np. na potrzeby
          kampanii reklamowych), niniejsza polityka zostanie odpowiednio zaktualizowana, a tam, gdzie wymaga tego
          prawo, wyświetlony zostanie mechanizm uzyskania zgody użytkownika.
        </p>

        <h2>7. Dane techniczne</h2>
        <p>
          Infrastruktura hostingowa serwisu zapisuje standardowe logi techniczne żądań (adres IP, znacznik czasu,
          typ przeglądarki) na potrzeby bezpieczeństwa i diagnostyki błędów. Logi te nie są wykorzystywane do
          profilowania użytkowników.
        </p>

        <h2>8. Zmiany polityki</h2>
        <p>
          Treść niniejszej polityki może być aktualizowana wraz z rozwojem serwisu. Aktualna wersja jest zawsze
          dostępna pod tym adresem.
        </p>
      </div>
    </section>
  );
}
