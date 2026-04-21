import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="overview" style={{
      position: "relative",
      minHeight: "520px",
      background: "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.62) 60%, rgba(0,0,0,0.82) 100%), var(--black)",
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden",
      borderRadius: "0 0 1.5rem 1.5rem",
    }}>
      {/* Background image overlay — replace src with actual image */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        zIndex: 0,
        opacity: 0.75,
      }} />

      {/* Fallback gradient atmosphere if no image */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(135deg, #0d1f15 0%, #1a3a26 40%, #0a1a10 100%)",
        zIndex: -1,
      }} />

      <div style={{
        position: "relative",
        zIndex: 1,
        padding: "3rem 2.5rem",
        maxWidth: "720px",
      }}>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
          color: "white",
          lineHeight: 1.15,
          marginBottom: "1rem",
          letterSpacing: "-0.01em",
        }}>
          ASVA — Building Leaders.<br />
          Driving Impact. Strengthening<br />
          Our Academic Community.
        </h1>

        <p style={{
          color: "rgba(255,255,255,0.82)",
          fontSize: "0.95rem",
          lineHeight: 1.6,
          marginBottom: "1.75rem",
          maxWidth: "480px",
          fontWeight: 300,
        }}>
          The official association representing students, advancing academic excellence,
          leadership, and meaningful campus engagement.
        </p>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <Link href="#join" style={{
            padding: "0.6rem 1.5rem",
            borderRadius: "2rem",
            border: "1.5px solid rgba(255,255,255,0.6)",
            color: "white",
            textDecoration: "none",
            fontSize: "0.9rem",
            fontWeight: 500,
            backdropFilter: "blur(4px)",
            background: "rgba(255,255,255,0.08)",
            transition: "all 0.2s",
          }}>Join ASVA</Link>
          <Link href="#events" style={{
            padding: "0.6rem 1.5rem",
            borderRadius: "2rem",
            background: "var(--green)",
            color: "white",
            textDecoration: "none",
            fontSize: "0.9rem",
            fontWeight: 500,
            transition: "all 0.2s",
          }}>Upcoming Events</Link>
        </div>
      </div>
    </section>
  );
}
