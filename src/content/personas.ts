export interface Persona {
  title: string;
  description: string;
}

export const personas: Persona[] = [
  {
    title: "Planujesz pracę w Niemczech, Austrii albo Szwajcarii",
    description:
      "Niezależnie, czy chodzi o opiekę, budowę, gastronomię, IT czy zawód medyczny — pracodawca i urząd oczekują konkretnego poziomu, a nie ogólnego wrażenia, że 'trochę mówisz'. Uczymy słownictwa branżowego dopiero wtedy, gdy fundament gramatyczny na to pozwala.",
  },
  {
    title: "Przygotowujesz się do egzaminu certyfikującego",
    description:
      "Goethe-Zertifikat, telc albo ÖSD wymagają nie tylko znajomości słówek, ale wyczucia formatu egzaminu — jak rozłożyć czas w części pisemnej, czego słuchać w części ze słuchu. To da się przećwiczyć, a nie tylko wykuć.",
  },
  {
    title: "Wracasz do nauki po latach przerwy",
    description:
      "Miałeś niemiecki w liceum, coś zostało, ale nie wiesz, co dokładnie i na jakim to jest poziomie. Rozmowa kwalifikująca przed zapisem właśnie po to istnieje — żeby nie zaczynać ani za nisko, ani za wysoko.",
  },
  {
    title: "Zaczynasz od zera z powodów osobistych",
    description:
      "Partner, rodzina albo plany na stałą przeprowadzkę — motywacja bywa inna niż zawodowa, ale proces nauki wygląda podobnie. Tempo i przykłady dobieramy do Twojej sytuacji, nie do podręcznikowego schematu.",
  },
];

export interface Disqualifier {
  text: string;
}

export const notForYou: Disqualifier[] = [
  { text: "szukasz zajęć dla dziecka albo nastolatka — to kurs skierowany wyłącznie do dorosłych" },
  {
    text: "liczysz na naukę bez żadnej pracy własnej między zajęciami — 90 minut dwa razy w tygodniu nie wystarczy bez powtórek",
  },
  {
    text: "potrzebujesz zaświadczenia o znajomości języka bez faktycznego udziału w kursie — tego po prostu nie robimy",
  },
  {
    text: "chcesz nauczyć się odpowiedzi pod jeden konkretny test, bez realnej umiejętności swobodnej rozmowy",
  },
];
