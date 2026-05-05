"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timeline = [
  { year: "2020", text: "ASVA was founded to strengthen student representation." },
  { year: "2021", text: "Launched first academic support initiative." },
  { year: "2022", text: "Hosted major university-wide conference." },
  { year: "2023", text: "Expanded partnerships and leadership programs." },
];

export default function JourneyPage() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.2", "end 0.9"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main ref={ref} className="bg-black text-white px-6 py-20">
      <h1 className="text-center text-5xl font-extrabold mb-20">
        Our Journey
      </h1>

      <div className="relative max-w-3xl mx-auto">
        {/* LINE */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-700" />

        {/* PROGRESS */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-1/2 top-0 w-[2px] bg-green-500 origin-top"
        />

        {timeline.map((item, i) => (
          <motion.div
            key={i}
            className="mb-16 flex items-center justify-between"
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="w-1/2 pr-6 text-right">
              {i % 2 === 0 && (
                <>
                  <h3 className="text-green-400 font-bold">{item.year}</h3>
                  <p className="text-gray-400">{item.text}</p>
                </>
              )}
            </div>

            {/* DOT */}
            <div className="w-4 h-4 bg-green-500 rounded-full z-10 shadow-[0_0_20px_rgba(34,197,94,0.8)]" />

            <div className="w-1/2 pl-6">
              {i % 2 !== 0 && (
                <>
                  <h3 className="text-green-400 font-bold">{item.year}</h3>
                  <p className="text-gray-400">{item.text}</p>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}