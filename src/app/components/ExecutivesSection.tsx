interface Executive {
  name: string;
  role: string;
  tagline: string;
  imageSrc?: string;
}

const executives: Executive[] = [
  {
    name: "Mojoyinoluwa Sholotan",
    role: "President",
    tagline: "To bring new innovations while managing such a productive team",
  },
  // Add more executives here
];

interface ExecCardProps {
  exec: Executive;
}

function ExecCard({ exec }: ExecCardProps) {
  return (
    <div style={{
      position: "relative",
      borderRadius: "var(--radius)",
      overflow: "hidden",
      width: "200px",
      aspectRatio: "3/4",
      background: "#1a2e20",
      flexShrink: 0,
      boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
    }}>
      {/* Photo background */}
      {exec.imageSrc ? (
        <img
          src={exec.imageSrc}
          alt={exec.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
        />
      ) : (
        <div style={{
          width: "100%", height: "100%",
          background: "linear-gradient(160deg, #2d4a36 0%, #1a2e20 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{
            width: 60, height: 60, borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "rgba(255,255,255,0.3)",
            fontSize: "1.5rem",
            fontFamily: "var(--font-display)",
          }}>
            {exec.name[0]}
          </div>
        </div>
      )}

      {/* Overlay text */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "1rem",
        background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
      }}>
        <p style={{
          color: "white",
          fontWeight: 600,
          fontSize: "0.85rem",
          lineHeight: 1.3,
          marginBottom: "0.15rem",
        }}>{exec.name}</p>
        <p style={{
          color: "var(--green)",
          fontSize: "0.75rem",
          fontWeight: 500,
          marginBottom: "0.35rem",
        }}>{exec.role}</p>
        <p style={{
          color: "rgba(255,255,255,0.65)",
          fontSize: "0.7rem",
          lineHeight: 1.4,
        }}>{exec.tagline}</p>
      </div>
    </div>
  );
}

export default function ExecutivesSection() {
  return (
    <section id="execs" style={{
      padding: "4rem 1.5rem",
      maxWidth: "1100px",
      margin: "0 auto",
    }}>
      {/* Section header badge */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "3rem",
      }}>
        <div style={{
          background: "var(--green)",
          color: "white",
          borderRadius: "var(--radius-sm)",
          padding: "0.6rem 2.5rem",
          fontWeight: 600,
          fontSize: "1rem",
          letterSpacing: "0.01em",
        }}>
          Meet the Current Executives
        </div>
      </div>

      {/* Cards row */}
      <div style={{
        display: "flex",
        gap: "1.5rem",
        flexWrap: "wrap",
        justifyContent: "center",
      }}>
        {executives.map((exec) => (
          <ExecCard key={exec.name} exec={exec} />
        ))}
      </div>
    </section>
  );
}
