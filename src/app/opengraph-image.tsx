import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#101211",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 28, fontWeight: 900 }}>Ace Project Hub</div>
          <div style={{ width: 64, height: 8, background: "#00c7d4" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 900, letterSpacing: -6, lineHeight: 0.92 }}>
            Apps, tools, and experiments.
          </div>
          <div style={{ maxWidth: 820, marginTop: 28, fontSize: 32, color: "rgba(255,255,255,.68)" }}>
            A formal umbrella website for Ace&apos;s independent projects.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
