const steps = [
  { x: 40, h: 60, color: "#6b7a3f", label: "A1" },
  { x: 130, h: 100, color: "#3f6b62", label: "A2" },
  { x: 220, h: 140, color: "#2f5a7a", label: "B1" },
  { x: 310, h: 180, color: "#6a4a8a", label: "B2" },
  { x: 400, h: 220, color: "#9c3d1c", label: "C1" },
];

export function LevelsIllustration() {
  const baseline = 300;
  return (
    <svg className="illustration" viewBox="0 0 480 340" role="img" aria-labelledby="levels-illustration-title">
      <title id="levels-illustration-title">Pięć rosnących słupków symbolizujących poziomy od A1 do C1</title>
      <rect width="480" height="340" fill="#f0e9db" />
      <line x1="20" y1={baseline} x2="460" y2={baseline} stroke="#e2d8c3" strokeWidth="2" />
      {steps.map((step) => (
        <g key={step.label}>
          <rect
            x={step.x}
            y={baseline - step.h}
            width="48"
            height={step.h}
            rx="10"
            fill={step.color}
            opacity="0.88"
          />
          <circle cx={step.x + 24} cy={baseline - step.h - 16} r="6" fill={step.color} />
        </g>
      ))}
    </svg>
  );
}
