import Link from "next/link";
import { contactEmail, pageTitle } from "@/content/site-config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <p style={{ maxWidth: "34rem" }}>{pageTitle}. Zajęcia prowadzone online, w małych grupach lub indywidualnie,
            dla osób dorosłych uczących się z konkretnego powodu — zawodowego, egzaminacyjnego albo osobistego.</p>
          <p>
            Kontakt:{" "}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </p>
        </div>
        <nav aria-label="Nawigacja w stopce">
          <ul className="site-footer__list">
            <li><Link href="/#program">Program nauki</Link></li>
            <li><Link href="/#cennik">Cennik</Link></li>
            <li><Link href="/#faq">Pytania i odpowiedzi</Link></li>
            <li><Link href="/kontakt">Kontakt i zapisy</Link></li>
          </ul>
        </nav>
        <nav aria-label="Informacje formalne">
          <ul className="site-footer__list">
            <li><Link href="/polityka-prywatnosci">Polityka prywatności</Link></li>
            <li><Link href="/regulamin">Regulamin</Link></li>
          </ul>
        </nav>
      </div>
      <div className="container" style={{ marginTop: "2rem", fontSize: "var(--step--1)" }}>
        <p style={{ margin: 0 }}>
          Kurs nie jest kierowany do dzieci ani młodzieży szkolnej. Ceny i dostępność terminów ustalane są indywidualnie po rozmowie kwalifikującej.
        </p>
      </div>
    </footer>
  );
}
