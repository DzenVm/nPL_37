export interface LevelStatement {
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  statement: string;
}

// Kolejność rosnąca trudności — pytamy, aż użytkownik natrafi na coś,
// czego jeszcze nie potrafi. To miejsce wyznacza sensowny punkt startu.
export const levelStatements: LevelStatement[] = [
  {
    level: "A1",
    statement: "Potrafisz przedstawić się po niemiecku i podać podstawowe informacje o sobie.",
  },
  {
    level: "A2",
    statement: "Potrafisz opowiedzieć o swoim dniu i wcześniejszych doświadczeniach w czasie przeszłym.",
  },
  {
    level: "B1",
    statement: "Potrafisz swobodnie rozmawiać o pracy i uzasadnić swoje zdanie w dyskusji.",
  },
  {
    level: "B2",
    statement: "Rozumiesz tekst specjalistyczny z własnej branży i bierzesz udział w dyskusji zawodowej.",
  },
  {
    level: "C1",
    statement: "Czujesz się swobodnie podczas spotkań firmowych albo wykładów prowadzonych po niemiecku.",
  },
];

export function recommendationFor(confirmedCount: number): { heading: string; detail: string } {
  if (confirmedCount === 0) {
    return {
      heading: "A1",
      detail: "Zaczynasz od podstaw — to zupełnie naturalny punkt wyjścia, jeśli wcześniej nie miałeś kontaktu z językiem albo zostało z niego niewiele.",
    };
  }
  if (confirmedCount >= levelStatements.length) {
    return {
      heading: "C1 lub indywidualnie",
      detail: "Twoje umiejętności wykraczają poza standardowy program grupowy — sensowniejsza będzie rozmowa o celu (egzamin, praca, studia) i dobranie zajęć indywidualnych.",
    };
  }
  const next = levelStatements[confirmedCount]!;
  return {
    heading: next.level,
    detail: `To poziom, na którym prawdopodobnie zaczniesz naukę — potwierdzi to jeszcze krótka rozmowa z lektorem przed zapisem.`,
  };
}
