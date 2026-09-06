import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 7,
        }}
      >
        <div style={{ display: "flex", gap: 5 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#faf6ef" }} />
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#faf6ef" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
