import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section container-narrow">
      <span className="eyebrow">Błąd 404</span>
      <h1>Ta podstrona nie istnieje</h1>
      <p className="lede">
        Możliwe, że link był nieaktualny albo strona została przeniesiona. Wróć na stronę główną albo od razu
        przejdź do programu nauki.
      </p>
      <div className="hero__actions">
        <Link href="/" className="btn btn--primary">
          Strona główna
        </Link>
        <Link href="/program" className="btn btn--ghost">
          Program nauki
        </Link>
      </div>
    </section>
  );
}
