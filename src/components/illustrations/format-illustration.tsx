const seats = [
  [90, 70],
  [230, 50],
  [370, 78],
  [60, 190],
  [400, 200],
  [130, 300],
  [340, 300],
];

export function FormatIllustration() {
  return (
    <svg className="illustration" viewBox="0 0 480 360" role="img" aria-labelledby="format-illustration-title">
      <title id="format-illustration-title">Osiem punktów rozmieszczonych wokół owalnego stołu, symbolizujących małą grupę zajęciową</title>
      <rect width="480" height="360" fill="#f0e9db" />
      <ellipse cx="240" cy="180" rx="150" ry="95" fill="#faf6ef" stroke="#e2d8c3" strokeWidth="2" />
      <ellipse cx="240" cy="180" rx="90" ry="55" fill="none" stroke="#e2d8c3" strokeWidth="2" strokeDasharray="6 8" />
      {seats.map(([x, y], index) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="16" fill={index === 0 ? "#9c3d1c" : "#2f5a7a"} opacity={index === 0 ? 1 : 0.75} />
      ))}
      <circle cx="240" cy="180" r="10" fill="#514a3d" />
    </svg>
  );
}
