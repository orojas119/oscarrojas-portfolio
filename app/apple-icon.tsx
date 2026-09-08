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
          backgroundColor: "#1A1A1A",
        }}
      >
        <div
          style={{
            fontSize: 92,
            fontWeight: 700,
            color: "#FFDE4D",
            letterSpacing: -3,
          }}
        >
          OR
        </div>
      </div>
    ),
    { ...size }
  );
}
