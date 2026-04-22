import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="overview"
      className="flex items-end mx-4"
      style={{ position: "relative", height: "520px", overflow: "hidden", borderRadius: "24px" }}
    >
      <Image
        src="/hero-image.png"
        alt="Hero background"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center top" }}
      />

      {/* Gradient — heavy at bottom for text readability */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 10,
        background: "linear-gradient(to bottom, rgba(253, 142, 142, 0.05) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.78) 100%)"
      }} />

      {/* Text content */}
      <div style={{ position: "relative", zIndex: 20, width: "95%", padding: "280px 0 40px 40px" }}>
        <h1 style={{ fontSize: "clamp(22px, 4vw, 36px)", fontWeight: 700, color: "white", lineHeight: 1.2, marginBottom: "12px", maxWidth: "900px" }}>
          ASVA — Building Leaders. Driving Impact. Strengthening Our Academic Community.
        </h1>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.9)", lineHeight: 1.65, marginBottom: "20px", maxWidth: "500px", textAlign: "justify" }}>
          The official association representing students, advancing academic excellence,
          leadership, and meaningful campus engagement.
        </p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Link href="#join" style={{
            padding: "8px 20px", borderRadius: "999px", fontSize: "13px", fontWeight: 500,
            color: "white", textDecoration: "none",
            border: "1.5px solid rgba(255,255,255,0.6)",
            background: "rgba(255,255,255,0.1)", backdropFilter: "blur(4px)"
          }}>
            Join ASVA
          </Link>
          <Link href="#events" style={{
            padding: "8px 20px", borderRadius: "999px", fontSize: "13px", fontWeight: 500,
            color: "white", textDecoration: "none", background: "#22c55e"
          }}>
            Upcoming Events
          </Link>
        </div>
      </div>
    </section>
  );
}