import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Mladen Bajić · Full Stack Engineer & Team Lead";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0a0c0f",
          color: "#e6e8eb",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#7ce38b" }}>~/mladen-bajic $ whoami</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 700, letterSpacing: -3 }}>Mladen Bajić</div>
          <div style={{ display: "flex", fontSize: 40, color: "#c9ced6" }}>Full Stack Engineer &amp; Team Lead</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#9aa3ae" }}>
          <span>AI-first · Scalable · Full stack</span>
          <span style={{ color: "#7ce38b" }}>Novi Sad, Serbia</span>
        </div>
      </div>
    ),
    size,
  );
}
