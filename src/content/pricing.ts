export interface PricingModel {
  title: string;
  format: string;
  bestFor: string;
  includes: string[];
}

export const pricingModels: PricingModel[] = [
  {
    title: "Grupa robocza",
    format: "do 8 osób, 2 spotkania w tygodniu po 90 minut",
    bestFor: "regularna nauka w stałym tempie, wymiana z innymi uczestnikami na podobnym poziomie",
    includes: [
      "materiały do każdych zajęć w wersji cyfrowej",
      "nagranie lekcji dla osób nieobecnych",
      "krótkie sprawdziany postępu między modułami tematycznymi",
    ],
  },
  {
    title: "Zajęcia indywidualne",
    format: "termin ustalany elastycznie, tempo dopasowane do jednej osoby",
    bestFor: "nieregularny grafik pracy, konkretny cel egzaminacyjny albo potrzeba szybszych postępów",
    includes: [
      "program budowany pod wskazany cel — egzamin, branżę, wyjazd",
      "możliwość zmiany terminu z wyprzedzeniem",
      "materiały dobrane indywidualnie, nie z gotowego zestawu",
    ],
  },
  {
    title: "Pakiet intensywny",
    format: "częstsze spotkania w krótszym okresie, zwykle przed wyjazdem albo egzaminem",
    bestFor: "sytuacje z konkretnym terminem w tle, gdy nie ma czasu na rozłożenie nauki na wiele miesięcy",
    includes: [
      "priorytetowe przygotowanie pod format wybranego egzaminu",
      "dodatkowe materiały do samodzielnej pracy między spotkaniami",
      "bieżąca informacja zwrotna o gotowości do podejścia do egzaminu",
    ],
  },
];

export const pricingNote =
  "Ostateczna cena zależy od formatu zajęć, długości pakietu i poziomu — dlatego nie podajemy jednej kwoty dla wszystkich. Po rozmowie kwalifikującej dostajesz konkretną wycenę dopasowaną do Twojej sytuacji, z możliwością rozłożenia płatności na raty miesięczne. Żadnych kosztów doliczanych po fakcie.";
