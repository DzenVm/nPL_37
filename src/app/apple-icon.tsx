import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#9c3d1c",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", gap: 26 }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#faf6ef" }} />
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#faf6ef" }} />
          </div>
          <div
            style={{
              width: 96,
              height: 48,
              borderBottom: "10px solid #faf6ef",
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderRadius: "0 0 48px 48px",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
