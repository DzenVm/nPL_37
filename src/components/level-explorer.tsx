"use client";

import { useState } from "react";
import type { CurriculumLevel } from "@/content/curriculum";

export function LevelExplorer({ levels }: { levels: CurriculumLevel[] }) {
  const firstLevel = levels[0]!;
  const [activeCode, setActiveCode] = useState(firstLevel.code);
  const active = levels.find((level) => level.code === activeCode) ?? firstLevel;

  return (
    <div>
      <div className="level-tabs" role="tablist" aria-label="Poziomy nauki">
        {levels.map((level) => (
          <button
            key={level.code}
            type="button"
            role="tab"
            aria-selected={level.code === activeCode}
            className="level-tab"
            onClick={() => setActiveCode(level.code)}
          >
            {level.code}
          </button>
        ))}
      </div>

      <div role="tabpanel">
        <div className="level-panel__head">
          <span className="level-badge">{active.code}</span>
          <h3 style={{ margin: 0 }}>{active.title}</h3>
        </div>
        <p className="lede">{active.forWhom}</p>
        <div className="level-meta">
          <span><strong>Nakład czasu:</strong> {active.hours}</span>
          <span><strong>Tempo:</strong> {active.pace}</span>
        </div>

        <div className="grid grid--2">
          <div>
            <h4>Po tym poziomie potrafisz</h4>
            <ul className="check-list">
              {active.canDo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Gramatyka w centrum uwagi</h4>
            <ul className="check-list">
              {active.grammarFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h4 style={{ marginTop: "1.5rem" }}>Tematy</h4>
            <p className="lede" style={{ marginBottom: 0 }}>{active.topics.join(" · ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
