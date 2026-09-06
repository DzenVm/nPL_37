"use client";

import { useId, useState } from "react";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "ok" } | { kind: "error"; message: string };

const goals = [
  "Praca lub przeprowadzka za granicę",
  "Przygotowanie do egzaminu (Goethe, telc, ÖSD)",
  "Powrót do nauki po przerwie",
  "Nauka od podstaw",
  "Inny cel",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const formId = useId();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ kind: "sending" });

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      goal: data.get("goal"),
      message: data.get("message"),
      consent: data.get("consent") === "on",
      website: data.get("website"),
    };

    try {
      const response = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        setStatus({
          kind: "error",
          message: result.error || "Nie udało się wysłać formularza. Spróbuj ponownie.",
        });
        return;
      }

      form.reset();
      setStatus({ kind: "ok" });
    } catch {
      setStatus({ kind: "error", message: "Brak połączenia. Spróbuj ponownie za chwilę." });
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      <div className="grid grid--2">
        <div className="form-field">
          <label htmlFor={`${formId}-name`}>Imię</label>
          <input id={`${formId}-name`} name="name" type="text" required maxLength={120} />
        </div>
        <div className="form-field">
          <label htmlFor={`${formId}-email`}>E-mail</label>
          <input id={`${formId}-email`} name="email" type="email" required maxLength={200} />
        </div>
      </div>

      <div className="grid grid--2">
        <div className="form-field">
          <label htmlFor={`${formId}-phone`}>Telefon (opcjonalnie)</label>
          <input id={`${formId}-phone`} name="phone" type="tel" maxLength={20} />
        </div>
        <div className="form-field">
          <label htmlFor={`${formId}-goal`}>Twój cel nauki</label>
          <select id={`${formId}-goal`} name="goal" required defaultValue="">
            <option value="" disabled>
              Wybierz z listy
            </option>
            {goals.map((goal) => (
              <option key={goal} value={goal}>
                {goal}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor={`${formId}-message`}>Kilka słów o Twojej sytuacji (opcjonalnie)</label>
        <textarea
          id={`${formId}-message`}
          name="message"
          maxLength={2000}
          placeholder="Np. obecny poziom, termin wyjazdu, egzamin, do którego się przygotowujesz."
        />
      </div>

      <div className="form-field" style={{ flexDirection: "row", alignItems: "flex-start", display: "flex", gap: "0.6em" }}>
        <input id={`${formId}-consent`} name="consent" type="checkbox" required style={{ marginTop: "0.3em" }} />
        <label htmlFor={`${formId}-consent`} style={{ fontWeight: 400 }}>
          Zgadzam się na przetwarzanie podanych danych w celu kontaktu w sprawie zapisu na kurs, zgodnie z{" "}
          <a href="/polityka-prywatnosci">polityką prywatności</a>.
        </label>
      </div>

      <button type="submit" className="btn btn--primary btn--block" disabled={status.kind === "sending"}>
        {status.kind === "sending" ? "Wysyłanie…" : "Wyślij zgłoszenie"}
      </button>

      <p className="form-hint" style={{ marginTop: "0.75rem" }}>
        Odpowiadamy zwykle w ciągu 1–2 dni roboczych.
      </p>

      {status.kind === "ok" && (
        <p className="form-status form-status--ok" role="status">
          Zgłoszenie wysłane. Odezwiemy się na podany adres e-mail.
        </p>
      )}
      {status.kind === "error" && (
        <p className="form-status form-status--error" role="alert">
          {status.message}
        </p>
      )}
    </form>
  );
}
