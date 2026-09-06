import { NextResponse } from "next/server";
import { validateContactPayload } from "@/lib/validate";
import { contactEmail } from "@/content/site-config";

export const runtime = "nodejs";

const submissionsByIp = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const history = (submissionsByIp.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  history.push(now);
  submissionsByIp.set(ip, history);
  return history.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Zbyt wiele zgłoszeń — spróbuj ponownie później." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Nieprawidłowe dane." }, { status: 400 });
  }

  // Pole-pułapka: niewidoczne dla człowieka, uzupełniane wyłącznie przez boty.
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (body.consent !== true) {
    return NextResponse.json(
      { ok: false, error: "Zgoda na przetwarzanie danych jest wymagana do wysłania formularza." },
      { status: 400 },
    );
  }

  const { valid, errors } = validateContactPayload(body);
  if (!valid) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const payload = {
    name: String(body.name).trim(),
    email: String(body.email).trim(),
    phone: typeof body.phone === "string" ? body.phone.trim() : "",
    goal: String(body.goal).trim(),
    message: typeof body.message === "string" ? body.message.trim() : "",
  };

  const resendApiKey = process.env.RESEND_API_KEY;
  const deliverTo = process.env.CONTACT_TO_EMAIL || contactEmail;

  if (resendApiKey) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL || `zgloszenia@${deliverTo.split("@")[1]}`,
          to: deliverTo,
          reply_to: payload.email,
          subject: `Nowe zgłoszenie: ${payload.goal}`,
          text: `Imię: ${payload.name}\nE-mail: ${payload.email}\nTelefon: ${payload.phone || "—"}\nCel nauki: ${payload.goal}\n\nWiadomość:\n${payload.message || "—"}`,
        }),
      });

      if (!response.ok) {
        console.error("Nie udało się wysłać zgłoszenia przez Resend", await response.text());
        return NextResponse.json(
          { ok: false, error: "Nie udało się wysłać formularza. Napisz bezpośrednio na adres kontaktowy." },
          { status: 502 },
        );
      }
    } catch (error) {
      console.error("Błąd podczas wysyłki zgłoszenia", error);
      return NextResponse.json(
        { ok: false, error: "Nie udało się wysłać formularza. Napisz bezpośrednio na adres kontaktowy." },
        { status: 502 },
      );
    }
  } else {
    console.info("Zgłoszenie kontaktowe (RESEND_API_KEY nieustawiony — tylko log):", payload);
  }

  return NextResponse.json({ ok: true });
}
