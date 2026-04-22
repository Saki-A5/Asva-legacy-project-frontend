import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="overview" className="relative flex min-h-[520px] items-end overflow-hidden rounded-b-[24px] 
    bg-[linear-gradient(to_bottom, rgba(0, 0, 0, 0.18)_0%, rgba(0,0,0,0.82)_100%), var(--black)]">
      {/* Background image overlay */}
      <div className="relative w-[90%] h-[520px] mx-auto z-[1] bg-[url('/hero image.png')] bg-cover bg-cover bg-center bg-no-repeat flex items-end">
        {/* <Image 
        src="/hero image.png"
        alt="hero"
        fill
        className="object-cover"
        sizes="90vw"/> */}

        <div className="w-full mx-auto px-[5%] pb-[48px]">
        <h1 className="text-md font-bold text-white leading-[100%]" style={{
          // fontFamily: "var(--font-display)",
        }}>
          ASVA — Building Leaders.<br />
          Driving Impact. Strengthening<br />
          Our Academic Community.
        </h1>

        <p className="text-sm text-white mt-8 max-w-[600px] ">
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
      </div>

      {/* Fallback gradient atmosphere if no image */}
      {/* <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(135deg, #0d1f15 0%, #1a3a26 40%, #0a1a10 100%)",
        zIndex: -1,
      }} /> */}

      
    </section>
  );
}
