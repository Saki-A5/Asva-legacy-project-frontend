interface TimelineEvent {
  id: number;
  label: string;
  side: "left" | "right";
}

const events: TimelineEvent[] = [
  { id: 1, label: "Founded to strengthen student representation", side: "right" },
  { id: 2, label: "First academic support initiative launched", side: "left" },
  { id: 3, label: "Hosted major campus-wide conference", side: "right" },
  { id: 4, label: "Expanded partnerships and student opportunities", side: "left" },
];

interface TimelineCardProps {
  label: string;
  side: "left" | "right";
}

function TimelineCard({ label, side }: TimelineCardProps) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 32px 1fr",
      alignItems: "start",
      gap: "0",
      marginBottom: "0",
    }}>
      {/* Left slot */}
      <div style={{
        display: "flex",
        justifyContent: "flex-end",
        paddingRight: "1.5rem",
        paddingBottom: "2.5rem",
      }}>
        {side === "left" && (
          <div style={{
            background: "var(--green-light)",
            borderRadius: "var(--radius)",
            padding: "1.25rem 1.5rem",
            maxWidth: "380px",
            width: "100%",
            minHeight: "100px",
            boxShadow: "var(--shadow-card)",
            fontWeight: 600,
            fontSize: "text-lg",
          }}>
            <p style={{ fontSize: "0.875rem", color: "var(--gray-700)", lineHeight: 1.5 }}>{label}</p>
          </div>
        )}
      </div>

      {/* Center dot + line */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <div style={{
          width: 14, height: 14,
          borderRadius: "50%",
          background: "var(--green)",
          flexShrink: 0,
          marginTop: "1.4rem",
          boxShadow: "0 0 0 3px var(--green-mid)",
          zIndex: 1,
        }} />
      </div>

      {/* Right slot */}
      <div style={{
        paddingLeft: "1.5rem",
        paddingBottom: "2.5rem",
      }}>
        {side === "right" && (
          <div style={{
            background: "var(--green-light)",
            borderRadius: "var(--radius)",
            padding: "1.25rem 1.5rem",
            maxWidth: "380px",
            width: "100%",
            minHeight: "100px",
            boxShadow: "var(--shadow-card)",
            fontWeight: 600,
            fontSize: "text-lg",
          }}>
            <p style={{ fontSize: "0.875rem", color: "var(--gray-700)", lineHeight: 1.5 }}>{label}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function JourneySection() {
  return (
    <section id="history" style={{
      padding: "4rem 1.5rem",
      maxWidth: "860px",
      margin: "0 auto",
    }}>
      <h2  className="!text-6xl white font-extrabold" style={{
        fontFamily: "var(--font-display)",
        marginBottom: "3rem",
      }}>Our Journey So Far</h2>

      {/* Timeline container */}
      <div style={{ position: "relative" }}>
        {/* Vertical line */}
        <div style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: "1.6rem",
          bottom: 0,
          width: 2,
          background: "green",
          zIndex: 0,
        }} />

        {events.map((evt) => (
          <TimelineCard key={evt.id} label={evt.label} side={evt.side} />
        ))}
      </div>
    </section>
  );
}
