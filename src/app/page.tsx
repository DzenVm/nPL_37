import Link from "next/link";
import { headers } from "next/headers";
import { HeroIllustration } from "@/components/illustrations/hero-illustration";
import { LevelsIllustration } from "@/components/illustrations/levels-illustration";
import { FormatIllustration } from "@/components/illustrations/format-illustration";
import { RhythmIllustration } from "@/components/illustrations/rhythm-illustration";
import { ClarityIllustration } from "@/components/illustrations/clarity-illustration";
import { ContactIllustration } from "@/components/illustrations/contact-illustration";
import { LevelExplorer } from "@/components/level-explorer";
import { LevelCheckQuiz } from "@/components/level-check/level-check-quiz";
import { ContactForm } from "@/components/contact-form";
import { curriculum } from "@/content/curriculum";
import { faq } from "@/content/faq";
import { personas, notForYou } from "@/content/personas";
import { commonMistakes } from "@/content/common-mistakes";
import { lessonStructure } from "@/content/lesson-structure";
import { pricingModels, pricingNote } from "@/content/pricing";
import { nextCohortStart, formatPolishDate, formatPolishWeekday } from "@/lib/dates";
import { siteUrl } from "@/content/site-config";

export default async function HomePage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  const cohortDate = nextCohortStart();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Kurs języka niemieckiego online dla dorosłych",
    description:
      "Zajęcia z niemieckiego online dla dorosłych, w małych grupach do 8 osób lub indywidualnie, na poziomach od A1 do C1.",
    inLanguage: "pl",
    educationalLevel: "A1-C1",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      startDate: cohortDate.toISOString().slice(0, 10),
    },
    url: siteUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero" id="hero">
        <div className="container hero__grid">
          <div>
            <span className="eyebrow">Niemiecki dla dorosłych · online · A1–C1</span>
            <h1>Niemiecki, którego użyjesz w rozmowie o pracę, a nie tylko na kartkówce</h1>
            <p className="lede">
              Małe grupy do ośmiu osób albo zajęcia indywidualne, prowadzone na żywo. Program budujemy pod konkretny
              powód nauki — wyjazd do pracy, egzamin certyfikujący, powrót po latach przerwy albo start od zera.
            </p>
            <div className="hero__actions">
              <Link href="#zapisz-sie" className="btn btn--primary">
                Umów rozmowę kwalifikującą
              </Link>
              <Link href="#sprawdz-poziom" className="btn btn--ghost">
                Sprawdź swój poziom
              </Link>
            </div>
            <p className="hero__cohort">
              Najbliższa grupa początkująca rusza w {formatPolishWeekday(cohortDate)},{" "}
              {formatPolishDate(cohortDate)}. Nowe grupy uruchamiamy co dwa tygodnie.
            </p>
            <div className="hero__facts">
              <div>
                <span className="hero__fact-value">≤ 8</span>
                <span className="hero__fact-label">osób w grupie</span>
              </div>
              <div>
                <span className="hero__fact-value">90 min</span>
                <span className="hero__fact-label">długość zajęć</span>
              </div>
              <div>
                <span className="hero__fact-value">A1–C1</span>
                <span className="hero__fact-label">pełen zakres poziomów</span>
              </div>
              <div>
                <span className="hero__fact-value">2×</span>
                <span className="hero__fact-label">spotkania tygodniowo</span>
              </div>
            </div>
          </div>
          <div className="figure-frame">
            <HeroIllustration />
          </div>
        </div>
      </section>

      <section className="section section--alt" id="dla-kogo">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Dla kogo</span>
            <h2>Cztery sytuacje, z którymi zgłasza się większość osób</h2>
            <p className="lede">Motywacja bywa różna, ale sposób nauki, który działa u dorosłych, jest zaskakująco podobny.</p>
          </div>
          <div className="grid grid--2">
            {personas.map((persona) => (
              <div key={persona.title} className="card">
                <h3>{persona.title}</h3>
                <p style={{ marginBottom: 0, color: "var(--ink-soft)" }}>{persona.description}</p>
              </div>
            ))}
          </div>

          <div className="card" style={{ marginTop: "2rem" }}>
            <h3>Ten kurs prawdopodobnie nie jest dla Ciebie, jeśli…</h3>
            <ul className="plain-list">
              {notForYou.map((item) => (
                <li key={item.text}>{item.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="jak-wyglada">
        <div className="container">
          <div className="hero__grid" style={{ alignItems: "start" }}>
            <div>
              <span className="eyebrow">Format zajęć</span>
              <h2>Jak wygląda nauka w praktyce</h2>
              <p className="lede">
                Zajęcia odbywają się na żywo, poprzez wideorozmowę — bez samodzielnego przechodzenia przez nagrania
                czy platformę do samouczenia się. Grupa liczy maksymalnie osiem osób, żeby każdy miał realny czas
                mówienia, a nie tylko słuchania.
              </p>
              <h3 style={{ marginTop: "2rem" }}>Pojedyncza lekcja — minuta po minucie</h3>
              <ul className="timeline">
                {lessonStructure.map((step) => (
                  <li key={step.title}>
                    <span className="timeline__time">{step.time}</span>
                    <strong>{step.title}</strong>
                    <p style={{ marginBottom: 0, color: "var(--ink-soft)" }}>{step.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="figure-frame">
              <FormatIllustration />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="program">
        <div className="container">
          <div className="hero__grid" style={{ alignItems: "start", marginBottom: "2.5rem" }}>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <span className="eyebrow">Program nauki</span>
              <h2>Pięć poziomów, jeden spójny tor</h2>
              <p className="lede">
                Każdy poziom ma jasno opisane, co po nim faktycznie potrafisz zrobić — nie tylko jakiej gramatyki się
                nauczyłeś.
              </p>
            </div>
            <div className="figure-frame">
              <LevelsIllustration />
            </div>
          </div>
          <div className="card">
            <LevelExplorer levels={curriculum} />
          </div>
        </div>
      </section>

      <section className="section" id="sprawdz-poziom">
        <div className="container">
          <div className="section-head" style={{ margin: "0 auto 2rem", textAlign: "center" }}>
            <span className="eyebrow">Wstępne rozeznanie</span>
            <h2>Sprawdź, od czego prawdopodobnie zaczniesz</h2>
            <p className="lede">
              Pięć krótkich stwierdzeń, ułożonych od najprostszego do najtrudniejszego. Zatrzymaj się tam, gdzie
              przestajesz odpowiadać „tak” — to realny orientacyjny wynik, a nie wróżenie z fusów.
            </p>
          </div>
          <div className="container-narrow" style={{ padding: 0 }}>
            <LevelCheckQuiz />
          </div>
        </div>
      </section>

      <section className="section section--alt" id="rytm">
        <div className="container">
          <div className="hero__grid" style={{ alignItems: "start" }}>
            <div className="figure-frame" style={{ order: 2 }}>
              <RhythmIllustration />
            </div>
            <div>
              <span className="eyebrow">Rytm zajęć</span>
              <h2>Regularność liczy się bardziej niż długość pojedynczej lekcji</h2>
              <p className="lede">
                Standardowy układ to dwa stałe dni w tygodniu, o tych samych porach — mózg przyzwyczaja się do
                rytmu szybciej niż do długich, sporadycznych sesji raz na jakiś czas. Nowe grupy początkujące
                startują co dwa tygodnie, więc nie trzeba czekać miesiącami na dogodny moment.
              </p>
              <p>
                Najbliższy taki start: <strong>{formatPolishWeekday(cohortDate)}, {formatPolishDate(cohortDate)}</strong>.
                Dokładny harmonogram grup na wyższych poziomach ustalamy podczas rozmowy kwalifikującej, dopasowując go
                do już istniejących grup.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="bledy">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Z doświadczenia lektorów</span>
            <h2>Błędy, które popełnia niemal każdy dorosły na starcie</h2>
            <p className="lede">Nie po to, żeby zniechęcić — po to, żeby wiedzieć, na co zwrócić uwagę wcześniej niż większość.</p>
          </div>
          <div className="grid grid--3">
            {commonMistakes.map((mistake) => (
              <div key={mistake.title} className="card card--flush">
                <h4>{mistake.title}</h4>
                <p style={{ marginBottom: 0, color: "var(--ink-soft)" }}>{mistake.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container-narrow">
          <span className="eyebrow">Bez obiecywania cudów</span>
          <h2>Ile naprawdę zajmuje dojście do poziomu B1</h2>
          <p>
            Orientacyjnie mówi się o kilkuset godzinach nauki liczonych łącznie od zera — zwykle w okolicach
            350–400 godzin zajęć i pracy własnej razem wziętych. To duży rozstrzał, bo zależy od tego, ile czasu
            poświęcasz między lekcjami, jak często odwołujesz zajęcia i czy masz kontakt z językiem poza kursem,
            choćby przez podcasty czy serial z napisami.
          </p>
          <p>
            Dlatego nie podajemy sztywnej liczby tygodni jako obietnicy — podajemy realny zakres i uczciwie mówimy,
            od czego on zależy. Kto ćwiczy regularnie 15–20 minut dziennie poza zajęciami, dochodzi do B1 wyraźnie
            szybciej niż osoba, która ogranicza się wyłącznie do dwóch spotkań w tygodniu.
          </p>
        </div>
      </section>

      <section className="section" id="cennik">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Cennik</span>
            <h2>Trzy formaty, jedna zasada przejrzystości</h2>
            <p className="lede">{pricingNote}</p>
          </div>
          <div className="grid grid--3">
            {pricingModels.map((model) => (
              <div key={model.title} className="card">
                <span className="pricing-card__label">{model.title}</span>
                <p className="pricing-card__format">{model.format}</p>
                <p style={{ color: "var(--ink-soft)" }}>{model.bestFor}</p>
                <ul className="check-list">
                  {model.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="faq">
        <div className="container">
          <div className="hero__grid" style={{ alignItems: "start" }}>
            <div>
              <span className="eyebrow">Pytania i odpowiedzi</span>
              <h2>To, o co pytają najczęściej przed zapisem</h2>
              <div className="accordion">
                {faq.map((item) => (
                  <details key={item.question} className="accordion-item">
                    <summary>
                      {item.question}
                      <span className="accordion-item__icon" aria-hidden="true" />
                    </summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
            <div className="figure-frame">
              <ClarityIllustration />
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="zapisz-sie">
        <div className="container">
          <div className="hero__grid" style={{ alignItems: "start" }}>
            <div className="figure-frame" style={{ order: 2 }}>
              <ContactIllustration />
            </div>
            <div>
              <span className="eyebrow">Zapisy</span>
              <h2>Zacznij od krótkiej rozmowy, nie od przelewu</h2>
              <p className="lede">
                Zanim ustalimy cokolwiek finansowo, rozmawiamy o Twoim aktualnym poziomie i celu. Dopiero to pozwala
                zaproponować format, który ma sens — grupę, zajęcia indywidualne albo pakiet intensywny.
              </p>
              <div className="card card--flush">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
