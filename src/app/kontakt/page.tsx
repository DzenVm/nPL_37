import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { ContactIllustration } from "@/components/illustrations/contact-illustration";
import { contactEmail } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Kontakt i zapisy",
  description: "Umów rozmowę kwalifikującą przed zapisem na kurs niemieckiego online dla dorosłych.",
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="breadcrumb">
          <Link href="/">Strona główna</Link> / Kontakt
        </p>
        <div className="hero__grid" style={{ alignItems: "start" }}>
          <div>
            <span className="eyebrow">Kontakt i zapisy</span>
            <h1>Napisz, zanim się zapiszesz</h1>
            <p className="lede">
              Formularz trafia bezpośrednio do osoby, która prowadzi rozmowy kwalifikujące — nie do ogólnej skrzynki
              odbiorczej. Odpowiadamy zwykle w ciągu 1–2 dni roboczych, w dni robocze.
            </p>
            <p>
              Wolisz napisać od razu, bez formularza? Adres to{" "}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
            </p>
            <h2 style={{ marginTop: "2rem" }}>Co dzieje się po wysłaniu zgłoszenia</h2>
            <ol style={{ color: "var(--ink-soft)" }}>
              <li>Krótka wiadomość zwrotna z propozycją terminu rozmowy — telefonicznej albo mailowej.</li>
              <li>Rozmowa o obecnym poziomie, celu nauki i dostępności czasowej.</li>
              <li>Propozycja formatu — grupa, zajęcia indywidualne albo pakiet intensywny — wraz z wyceną.</li>
            </ol>
            <div className="card card--flush" style={{ marginTop: "2rem" }}>
              <ContactForm />
            </div>
          </div>
          <div className="figure-frame">
            <ContactIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
