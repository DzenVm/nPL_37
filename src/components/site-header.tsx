import Link from "next/link";
import { pageTitle } from "@/content/site-config";

const links = [
  { href: "/#program", label: "Program" },
  { href: "/#dla-kogo", label: "Dla kogo" },
  { href: "/#cennik", label: "Cennik" },
  { href: "/#faq", label: "Pytania" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__bar">
        <Link href="/" className="site-header__title">
          {pageTitle}
        </Link>
        <nav className="site-nav" aria-label="Nawigacja główna">
          <ul className="site-nav__list">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/#zapisz-sie" className="btn btn--primary">
          Zapisz się
        </Link>
      </div>
    </header>
  );
}
