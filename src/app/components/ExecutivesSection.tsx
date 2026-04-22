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
];

interface ExecCardProps {
  exec: Executive;
}

function ExecCard({ exec }: ExecCardProps) {
  return (
    <div className="relative w-[200px] aspect-[3/4] overflow-hidden rounded-xl bg-[#1a2e20] shadow-lg flex-shrink-0">
      
      {/* Photo background */}
      {exec.imageSrc ? (
        <img
          src={exec.imageSrc}
          alt={exec.name}
          className="w-full h-full object-cover object-top"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#2d4a36] to-[#1a2e20] flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white/30 text-xl font-semibold">
            {exec.name[0]}
          </div>
        </div>
      )}

      {/* Overlay text */}
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 to-transparent">
        <p className="text-white font-semibold text-sm leading-tight mb-1">
          {exec.name}
        </p>
        <p className="text-green-400 text-xs font-medium mb-1">
          {exec.role}
        </p>
        <p className="text-white/70 text-xs leading-relaxed">
          {exec.tagline}
        </p>
      </div>
    </div>
  );
}

export default function ExecutivesSection() {
  return (
    <section
      id="execs"
      className="px-6 py-16 max-w-6xl mx-auto"
    >
      {/* Section header badge */}
      <div className="flex justify-center mb-12">
        <div className="bg-green-600 text-white rounded-md px-10 py-2 font-semibold text-base">
          Meet the Current Executives
        </div>
      </div>

      {/* Cards row */}
      <div className="flex flex-wrap justify-center gap-6">
        {executives.map((exec) => (
          <ExecCard key={exec.name} exec={exec} />
        ))}
      </div>
    </section>
  );
}