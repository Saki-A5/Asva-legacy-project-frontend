import { Rocket, Eye } from "lucide-react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function MissionCard({ icon, title, description }: CardProps) {
  return (
    <div style={{
      background: "white",
      borderRadius: "var(--radius)",
      padding: "1.25rem",
      flex: 1,
      minWidth: "180px",
      boxShadow: "var(--shadow-card)",
    }}>
      <div style={{
        width: 36, height: 36, borderRadius: "50%",
        background: "var(--green-light)",
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: "0.75rem",
        color: "var(--green-dark)",
      }}>
        {icon}
      </div>
      <h3 style={{
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: "1.05rem",
        color: "var(--green-dark)",
        marginBottom: "0.5rem",
      }}>{title}</h3>
      <p style={{
        fontSize: "0.82rem",
        color: "var(--gray-700)",
        lineHeight: 1.6,
      }}>{description}</p>
    </div>
  );
}

export default function WhoWeAreSection() {
  return (
    <section id="about" style={{
      padding: "4rem 1.5rem",
      maxWidth: "1100px",
      margin: "0 auto",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
        alignItems: "center",
      }}
      className="who-grid">
        {/* Image */}
        <div style={{
          borderRadius: "var(--radius)",
          overflow: "hidden",
          aspectRatio: "4/3",
          background: "var(--gray-200)",
          position: "relative",
        }}>
          {/* Replace with Next.js Image component + actual src */}
          <div style={{
            width: "100%", height: "100%",
            background: "linear-gradient(135deg, #1a3a26 0%, #22c55e22 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>Group Photo</span>
          </div>
        </div>

        {/* Content */}
        <div style={{
          background: "var(--green-light)",
          borderRadius: "var(--radius)",
          padding: "2rem",
        }}>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            color: "var(--gray-900)",
            marginBottom: "1rem",
          }}>Who We Are</h2>

          <p style={{
            fontSize: "0.9rem",
            color: "var(--gray-700)",
            lineHeight: 1.75,
            marginBottom: "1.5rem",
          }}>
            ASVA is the recognized student association committed to representing student interests,
            promoting academic excellence, and fostering leadership and collaboration across the
            university. We serve as a bridge between students, faculty, and administration —
            ensuring transparency, engagement, and growth.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <MissionCard
              icon={<Rocket size={16} />}
              title="The Mission"
              description="To empower students through representation, innovation, and academic support."
            />
            <MissionCard
              icon={<Eye size={16} />}
              title="The Vision"
              description="To build a strong, inclusive, and forward-thinking student community that drives institutional growth and student success."
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .who-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
