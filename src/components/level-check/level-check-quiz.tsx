"use client";

import { useReducer } from "react";
import Link from "next/link";
import { levelStatements, recommendationFor } from "./questions";

interface QuizState {
  index: number;
  confirmedCount: number;
  finished: boolean;
}

type QuizAction = { type: "answer"; value: boolean } | { type: "reset" };

const initialState: QuizState = { index: 0, confirmedCount: 0, finished: false };

function reducer(state: QuizState, action: QuizAction): QuizState {
  if (action.type === "reset") return initialState;

  if (action.value === false) {
    return { ...state, finished: true };
  }

  const nextIndex = state.index + 1;
  const nextConfirmed = state.confirmedCount + 1;

  if (nextIndex >= levelStatements.length) {
    return { index: nextIndex, confirmedCount: nextConfirmed, finished: true };
  }

  return { index: nextIndex, confirmedCount: nextConfirmed, finished: false };
}

export function LevelCheckQuiz() {
  const [state, dispatch] = useReducer(reducer, initialState);

  if (state.finished) {
    const recommendation = recommendationFor(state.confirmedCount);
    return (
      <div className="card quiz-result">
        <p className="quiz-progress">Wynik wstępnego rozeznania</p>
        <span className="quiz-result__level">{recommendation.heading}</span>
        <p>{recommendation.detail}</p>
        <div className="hero__actions" style={{ justifyContent: "center" }}>
          <Link href="/kontakt" className="btn btn--primary">
            Umów rozmowę kwalifikującą
          </Link>
          <button type="button" className="btn btn--ghost" onClick={() => dispatch({ type: "reset" })}>
            Sprawdź jeszcze raz
          </button>
        </div>
      </div>
    );
  }

  const current = levelStatements[state.index]!;

  return (
    <div className="card">
      <p className="quiz-progress">
        Pytanie {state.index + 1} z {levelStatements.length}
      </p>
      <h3>{current.statement}</h3>
      <div className="quiz-options">
        <button type="button" className="quiz-option" onClick={() => dispatch({ type: "answer", value: true })}>
          Tak, to potrafię
        </button>
        <button type="button" className="quiz-option" onClick={() => dispatch({ type: "answer", value: false })}>
          Jeszcze nie
        </button>
      </div>
    </div>
  );
}
