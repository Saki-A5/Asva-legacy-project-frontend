"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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

function TimelineCard({
  label,
  side,
}: {
  label: string;
  side: "left" | "right";
}) {
  const isLeft = side === "left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-[1fr_32px_1fr] items-start"
    >
      {/* LEFT */}
      <div className="flex justify-end pr-6 pb-10">
        {isLeft && (
          <div className="bg-green-100 rounded-xl p-5 max-w-[380px] w-full shadow-md">
            <p className="text-sm text-gray-700 font-semibold leading-relaxed">
              {label}
            </p>
          </div>
        )}
      </div>

      {/* CENTER DOT (static fallback) */}
      <div className="flex flex-col items-center relative">
        <div className="w-3.5 h-3.5 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.2)] mt-6 z-10" />
      </div>

      {/* RIGHT */}
      <div className="pl-6 pb-10">
        {!isLeft && (
          <div className="bg-green-100 rounded-xl p-5 max-w-[380px] w-full shadow-md">
            <p className="text-sm text-gray-700 font-semibold leading-relaxed">
              {label}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function JourneySection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Scroll progress of the whole timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.2", "end 0.9"],
  });

  // Line fills as you scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="history" className="max-w-3xl mx-auto px-6 py-16">
      {/* Title */}
      <motion.h2
  initial={{ opacity: 0, y: 30, scale: 0.98 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
  className="text-4xl md:text-6xl font-extrabold text-center mb-12 text-white relative"
>
  <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-white bg-clip-text text-transparent">
    Our Journey So Far
  </span>

  {/* glow effect */}
  <span className="absolute inset-0 blur-2xl opacity-20 bg-green-500 -z-10" />
</motion.h2>

      {/* TIMELINE WRAPPER */}
      <div ref={containerRef} className="relative">

        {/* BACKGROUND LINE */}
        <div className="absolute left-1/2 -translate-x-1/2 top-6 bottom-0 w-[2px] bg-gray-200" />

        {/* PROGRESS LINE */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-1/2 -translate-x-1/2 top-6 w-[2px] bg-green-500 origin-top shadow-[0_0_10px_rgba(34,197,94,0.6)]"
        />

        {/* 🔵 GLOWING ACTIVE NODE */}
        <motion.div
          style={{
            top: useTransform(scrollYProgress, [0, 1], ["5%", "95%"]),
          }}
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-green-500 shadow-[0_0_25px_rgba(34,197,94,0.9)] z-20"
        />

        {/* CARDS */}
        {events.map((evt) => (
          <TimelineCard key={evt.id} label={evt.label} side={evt.side} />
        ))}
      </div>
    </section>
  );
}