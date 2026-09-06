const WARSAW_TZ = "Europe/Warsaw";

// Ustalona kotwica: poniedziałek, od którego liczymy cykl startów grup co 14 dni.
// Dzięki temu data jest wyliczana w locie na serwerze przy każdym żądaniu,
// a nie wpisana na sztywno w treść strony.
const CYCLE_ANCHOR = Date.UTC(2025, 0, 6); // poniedziałek 6 stycznia 2025
const CYCLE_LENGTH_DAYS = 14;
const MIN_LEAD_DAYS = 4; // minimalny czas na dopięcie formalności przed startem

function warsawNow(): Date {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: WARSAW_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const parts = formatter.formatToParts(now);
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value);
  return new Date(Date.UTC(get("year"), get("month") - 1, get("day")));
}

export function nextCohortStart(): Date {
  const today = warsawNow();
  const earliest = new Date(today.getTime() + MIN_LEAD_DAYS * 86_400_000);
  const daysSinceAnchor = Math.floor((earliest.getTime() - CYCLE_ANCHOR) / 86_400_000);
  const remainder = ((daysSinceAnchor % CYCLE_LENGTH_DAYS) + CYCLE_LENGTH_DAYS) % CYCLE_LENGTH_DAYS;
  const daysToAdd = remainder === 0 ? 0 : CYCLE_LENGTH_DAYS - remainder;
  return new Date(earliest.getTime() + daysToAdd * 86_400_000);
}

const POLISH_MONTHS = [
  "stycznia",
  "lutego",
  "marca",
  "kwietnia",
  "maja",
  "czerwca",
  "lipca",
  "sierpnia",
  "września",
  "października",
  "listopada",
  "grudnia",
];

export function formatPolishDate(date: Date): string {
  const day = date.getUTCDate();
  const month = POLISH_MONTHS[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  return `${day} ${month} ${year}`;
}

export function formatPolishWeekday(date: Date): string {
  return new Intl.DateTimeFormat("pl-PL", { weekday: "long", timeZone: "UTC" }).format(date);
}
