const columns = 7;
const rows = 3;
const cellSize = 52;
const gap = 10;
const originX = 30;
const originY = 40;
const highlighted = new Set([1, 3, 8, 10, 15, 17]);

export function RhythmIllustration() {
  const cells = [];
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < columns; col += 1) {
      const index = row * columns + col;
      cells.push({
        index,
        x: originX + col * (cellSize + gap),
        y: originY + row * (cellSize + gap),
      });
    }
  }

  return (
    <svg className="illustration" viewBox="0 0 480 260" role="img" aria-labelledby="rhythm-illustration-title">
      <title id="rhythm-illustration-title">
        Siatka kalendarza z powtarzającym się rytmem dwóch dni zajęć w tygodniu
      </title>
      <rect width="480" height="260" fill="#f0e9db" />
      {cells.map((cell) => (
        <rect
          key={cell.index}
          x={cell.x}
          y={cell.y}
          width={cellSize}
          height={cellSize}
          rx="10"
          fill={highlighted.has(cell.index) ? "#9c3d1c" : "#faf6ef"}
          stroke="#e2d8c3"
          strokeWidth="2"
          opacity={highlighted.has(cell.index) ? 0.92 : 1}
        />
      ))}
    </svg>
  );
}
