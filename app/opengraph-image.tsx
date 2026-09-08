import { ImageResponse } from "next/og";

export const alt = "Oscar Rojas — Data & Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F9F6F0",
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 9,
            textTransform: "uppercase",
            color: "rgba(26,26,26,0.5)",
            marginBottom: 24,
            display: "flex",
          }}
        >
          Data &amp; Software Engineer
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            lineHeight: 0.92,
          }}
        >
          <div style={{ display: "flex", fontSize: 168, fontWeight: 700, color: "#1A1A1A", letterSpacing: -4 }}>
            OSCAR
          </div>
          <div style={{ display: "flex", fontSize: 168, fontWeight: 700, color: "#1A1A1A", letterSpacing: -4 }}>
            ROJAS
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 36,
            fontSize: 21,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: "rgba(26,26,26,0.55)",
          }}
        >
          <span>Python</span>
          <span style={{ margin: "0 18px", color: "rgba(26,26,26,0.25)" }}>·</span>
          <span>TypeScript</span>
          <span style={{ margin: "0 18px", color: "rgba(26,26,26,0.25)" }}>·</span>
          <span>Azure</span>
          <span style={{ margin: "0 18px", color: "rgba(26,26,26,0.25)" }}>·</span>
          <span>SQL</span>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 16,
            backgroundColor: "#FFDE4D",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
