import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      background: "var(--black)",
      color: "rgba(255,255,255,0.6)",
      padding: "3rem 2rem 2rem",
      marginTop: "4rem",
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "2rem",
        paddingBottom: "2rem",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
      className="footer-grid">
        <div>
          <div style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1.25rem",
            color: "white",
            marginBottom: "0.75rem",
          }}>ASVA</div>
          <p style={{ fontSize: "0.83rem", lineHeight: 1.7, maxWidth: "220px" }}>
            Building Leaders. Driving Impact. Strengthening Our Academic Community.
          </p>
        </div>
        <div>
          <p style={{ color: "white", fontWeight: 600, fontSize: "0.875rem", marginBottom: "1rem" }}>Quick Links</p>
          {["Overview", "About", "History", "Execs", "Events"].map(l => (
            <Link key={l} href={`#${l.toLowerCase()}`} style={{
              display: "block",
              color: "rgba(255,255,255,0.55)",
              textDecoration: "none",
              fontSize: "0.82rem",
              marginBottom: "0.5rem",
              transition: "color 0.2s",
            }}>{l}</Link>
          ))}
        </div>
        <div>
          <p style={{ color: "white", fontWeight: 600, fontSize: "0.875rem", marginBottom: "1rem" }}>Get Involved</p>
          <Link href="#join" style={{
            display: "inline-block",
            padding: "0.5rem 1.25rem",
            borderRadius: "2rem",
            background: "var(--green)",
            color: "white",
            textDecoration: "none",
            fontSize: "0.85rem",
            fontWeight: 500,
          }}>Join ASVA</Link>
        </div>
      </div>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        paddingTop: "1.5rem",
        fontSize: "0.78rem",
        textAlign: "center",
      }}>
        © {new Date().getFullYear()} ASVA. All rights reserved.
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
