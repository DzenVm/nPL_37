import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf6ef",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", gap: 20 }}>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#9c3d1c" }} />
            <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#9c3d1c" }} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 58, fontWeight: 700, color: "#211c15", lineHeight: 1.15, display: "flex" }}>
            Niemiecki online dla dorosłych
          </div>
          <div style={{ fontSize: 32, color: "#514a3d", display: "flex" }}>
            Małe grupy · poziomy A1–C1 · konkretny cel nauki
          </div>
        </div>
        <div style={{ display: "flex", gap: 40, fontSize: 26, color: "#9c3d1c", fontWeight: 600 }}>
          <div style={{ display: "flex" }}>≤ 8 osób w grupie</div>
          <div style={{ display: "flex" }}>90 minut zajęć</div>
          <div style={{ display: "flex" }}>2 spotkania / tydzień</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
