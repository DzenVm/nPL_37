export interface CurriculumLevel {
  code: "A1" | "A2" | "B1" | "B2" | "C1";
  title: string;
  forWhom: string;
  canDo: string[];
  grammarFocus: string[];
  topics: string[];
  hours: string;
  pace: string;
}

export const curriculum: CurriculumLevel[] = [
  {
    code: "A1",
    title: "Pierwszy kontakt z językiem",
    forWhom:
      "Zaczynasz od zera albo pamiętasz z liceum pojedyncze słowa i chcesz to uporządkować.",
    canDo: [
      "przedstawić się, powiedzieć skąd jesteś i czym się zajmujesz",
      "zapytać o drogę, cenę czy godzinę i zrozumieć krótką odpowiedź",
      "wypełnić prosty formularz z danymi osobowymi",
      "załatwić podstawową sprawę w sklepie, restauracji czy na poczcie",
      "odczytać ogłoszenia i szyldy w miejscach publicznych",
    ],
    grammarFocus: [
      "rodzajniki der/die/das i ich odmiana w mianowniku i bierniku",
      "szyk zdania prostego oznajmującego i pytającego",
      "czasowniki regularne w czasie teraźniejszym, haben i sein",
      "liczba mnoga rzeczowników — bez łatwej reguły, ale z systemem",
    ],
    topics: [
      "liczby, czas, dni tygodnia",
      "rodzina, zawody, wygląd",
      "jedzenie i zakupy",
      "mieszkanie i okolica",
    ],
    hours: "90–120 godzin lekcyjnych",
    pace: "przy dwóch spotkaniach tygodniowo to zwykle 4–5 miesięcy",
  },
  {
    code: "A2",
    title: "Radzenie sobie w codziennych sytuacjach",
    forWhom:
      "Masz już podstawy i chcesz swobodnie załatwiać sprawy, a nie tylko układać pojedyncze zdania.",
    canDo: [
      "opowiedzieć o swoim dniu, planach i wcześniejszych doświadczeniach",
      "porozmawiać o pracy, wykształceniu i obowiązkach",
      "napisać krótką wiadomość, e-mail albo usprawiedliwienie",
      "umówić się na wizytę, przełożyć albo odwołać spotkanie",
      "zrozumieć sens prostej rozmowy telefonicznej czy instrukcji w pracy",
    ],
    grammarFocus: [
      "Perfekt, czyli czas przeszły złożony, w mowie potocznej",
      "odmiana przymiotnika w podstawowym zakresie",
      "przyimki rządzące celownikiem i biernikiem",
      "zdania złożone ze spójnikami weil i dass",
    ],
    topics: [
      "podróże i transport",
      "zdrowie i wizyta u lekarza",
      "praca i codzienne obowiązki",
      "opisywanie ludzi, miejsc i wydarzeń",
    ],
    hours: "180–220 godzin łącznie od zera",
    pace: "kolejne 4–5 miesięcy nauki po zakończeniu poziomu A1",
  },
  {
    code: "B1",
    title: "Samodzielność językowa",
    forWhom:
      "To poziom, po który sięga większość osób planujących pracę czy przeprowadzkę do Niemiec, Austrii lub Szwajcarii — i pod który zwykle zdaje się egzamin telc lub Goethe-Zertifikat B1.",
    canDo: [
      "swobodnie rozmawiać o pracy, rodzinie i sprawach społecznych",
      "uzasadnić swoje zdanie, wyrazić wątpliwość, dogadać drobne ustalenia",
      "napisać dłuższy e-mail formalny — do pracodawcy, urzędu albo wynajmującego mieszkanie",
      "zrozumieć większość wiadomości i podcastów o znanej tematyce",
      "przejść rozmowę kwalifikacyjną na stanowisko niewymagające języka specjalistycznego",
    ],
    grammarFocus: [
      "Präteritum czasowników modalnych i posiłkowych",
      "strona bierna (Passiv) w czasie teraźniejszym",
      "zdania podrzędne z czasownikiem na końcu",
      "Konjunktiv II w grzecznych prośbach i zdaniach warunkowych",
    ],
    topics: [
      "praca i kariera za granicą",
      "sprawy urzędowe i mieszkaniowe",
      "zdrowie i ubezpieczenia",
      "wyrażanie i uzasadnianie opinii",
    ],
    hours: "350–400 godzin łącznie",
    pace: "zwykle 6–8 miesięcy po poziomie A2, zależnie od tempa i regularności",
  },
  {
    code: "B2",
    title: "Praca i studia w języku niemieckim",
    forWhom:
      "Chcesz używać niemieckiego zawodowo na co dzień, studiować albo przygotować się do matury rozszerzonej czy egzaminu certyfikującego na tym poziomie.",
    canDo: [
      "brać udział w dyskusji zawodowej i bronić swojego stanowiska argumentami",
      "rozumieć teksty specjalistyczne z własnej branży po wstępnym przygotowaniu słownictwa",
      "napisać pismo, skargę czy odwołanie zgodne z niemiecką konwencją korespondencji urzędowej",
      "swobodnie rozmawiać przez telefon w sprawach zawodowych",
      "śledzić wykład czy prezentację bez potrzeby tłumaczenia w głowie",
    ],
    grammarFocus: [
      "Konjunktiv II w pełnym zakresie zastosowań",
      "strona bierna we wszystkich czasach",
      "zdania z podwójnym spójnikiem typu je… desto",
      "szyk zdania przy emfazie i inwersji",
    ],
    topics: [
      "rynek pracy i negocjacje",
      "tematy społeczne, gospodarcze i środowiskowe",
      "niuanse kulturowe w komunikacji zawodowej",
    ],
    hours: "500–600 godzin łącznie",
    pace: "orientacyjnie 8–10 miesięcy po poziomie B1",
  },
  {
    code: "C1",
    title: "Swoboda akademicka i zawodowa",
    forWhom:
      "Niemiecki jest już Twoim narzędziem pracy albo studiów — dopracowujemy styl, rejestr i pewność w trudniejszych sytuacjach.",
    canDo: [
      "rozumieć spotkania zarządu, wykłady i teksty specjalistyczne bez większego wysiłku",
      "redagować teksty o strukturze zbliżonej do tej, jaką tworzy rodzimy użytkownik języka",
      "rozpoznawać niuanse stylistyczne, ironię i różnice w rejestrze wypowiedzi",
      "przygotować się do Goethe-Zertifikat C1 albo telc C1 pod kątem konkretnego celu zawodowego",
    ],
    grammarFocus: [
      "pełny zakres form gramatycznych i ich stylistyczne odcienie",
      "idiomatyka i frazeologia branżowa",
      "różnice między rejestrem formalnym a potocznym",
    ],
    topics: [
      "prezentacje i negocjacje na poziomie eksperckim",
      "teksty specjalistyczne z wybranej dziedziny",
      "przygotowanie do uznania kwalifikacji zawodowych w Niemczech",
    ],
    hours: "od 700 godzin wzwyż, zależnie od punktu startowego",
    pace: "ten etap prowadzimy w małych grupach albo indywidualnie — tempo ustalamy pod konkretny cel",
  },
];
