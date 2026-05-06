"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Scene({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

  return (
    <section ref={ref} className="h-[200vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center">

        {/* BACKGROUND GLOW */}
        <motion.div
          style={{ scale }}
          className="absolute w-[700px] h-[700px] bg-green-500/10 blur-3xl rounded-full"
        />

        {/* CONTENT */}
        <motion.div
          style={{ opacity, y }}
          className="text-center max-w-3xl px-6 relative z-10"
        >
          {/* ICON */}
          <div className="mb-6 flex justify-center text-green-400">
            {icon}
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent">
            {title}
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* OPTIONAL IMAGE SLOT */}
        <div className="absolute bottom-10 w-[320px] h-[200px] bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg" />
      </div>
    </section>
  );
}