export interface LessonStep {
  time: string;
  title: string;
  description: string;
}

export const lessonStructure: LessonStep[] = [
  {
    time: "0–10 min",
    title: "Rozgrzewka w mówieniu",
    description:
      "Krótka rozmowa o tym, co u kogo słychać — po niemiecku, na poziomie, jaki właśnie masz. Nie ocenia się tu poprawności, chodzi o to, żeby przestawić głowę na drugi język.",
  },
  {
    time: "10–20 min",
    title: "Powtórka z poprzednich zajęć",
    description:
      "Trzy, cztery pytania nawiązujące do materiału sprzed tygodnia. Jeśli coś nie wróciło, lektor wraca do tego zanim ruszy dalej — bo budowanie na niepewnym fundamencie tylko odsuwa problem w czasie.",
  },
  {
    time: "20–45 min",
    title: "Nowy materiał na konkretnych przykładach",
    description:
      "Gramatyka wchodzi przez zdania z życia, nie przez tabelki do zakuwania. Reguła pojawia się dopiero wtedy, gdy widać, do czego właściwie służy.",
  },
  {
    time: "45–75 min",
    title: "Ćwiczenia w parach i małych grupach",
    description:
      "Tu dzieje się najwięcej — rozmowy w podgrupach, symulacje sytuacji (rozmowa w urzędzie, u lekarza, z pracodawcą), poprawki na bieżąco, ale bez przerywania w połowie zdania.",
  },
  {
    time: "75–90 min",
    title: "Podsumowanie i zadanie na następny raz",
    description:
      "Lektor zbiera powtarzające się błędy z całych zajęć i pokazuje je zbiorczo na koniec — żeby zapamiętać poprawkę, a nie tylko moment zawstydzenia. Zadanie domowe jest skonkretne i możliwe do zrobienia w 20–30 minut.",
  },
];
