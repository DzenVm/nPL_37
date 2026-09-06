export function ClarityIllustration() {
  return (
    <svg className="illustration" viewBox="0 0 480 340" role="img" aria-labelledby="clarity-illustration-title">
      <title id="clarity-illustration-title">Otwarty dokument z listą punktów, symbolizujący przejrzyste zasady</title>
      <rect width="480" height="340" fill="#f0e9db" />
      <path d="M110 70 L240 50 L240 290 L110 310 Z" fill="#faf6ef" stroke="#e2d8c3" strokeWidth="2" />
      <path d="M370 70 L240 50 L240 290 L370 310 Z" fill="#faf6ef" stroke="#e2d8c3" strokeWidth="2" />
      {[0, 1, 2, 3].map((row) => (
        <g key={row}>
          <line
            x1={130}
            y1={110 + row * 42}
            x2={220}
            y2={106 + row * 42}
            stroke="#2f5a7a"
            strokeWidth="5"
            strokeLinecap="round"
            opacity={0.85 - row * 0.12}
          />
          <line
            x1={260}
            y1={106 + row * 42}
            x2={350}
            y2={110 + row * 42}
            stroke="#9c3d1c"
            strokeWidth="5"
            strokeLinecap="round"
            opacity={0.85 - row * 0.12}
          />
        </g>
      ))}
    </svg>
  );
}
