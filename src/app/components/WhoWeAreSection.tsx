"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Rocket, Eye } from "lucide-react";

/* -------------------- CARD -------------------- */

function MissionCard({
  icon,
  title,
  description,
  delay = 0,
}: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        scale: 1.03,
        rotateX: 6,
        rotateY: -6,
      }}
      className="relative flex-1 min-w-[180px] rounded-xl p-5 bg-white shadow-md hover:shadow-xl transition-transform"
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    >
      {/* glass glow behind card */}
      <div className="absolute inset-0 -z-10 rounded-xl bg-green-200/30 blur-xl opacity-60" />

      <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center mb-3 text-green-700">
        {icon}
      </div>

      <h3 className="font-semibold text-lg text-green-800 mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-700 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

/* -------------------- SECTION -------------------- */

export default function WhoWeAreSection() {
  const ref = useRef(null);

  /* Parallax image scroll */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      id="about"
      ref={ref}
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* IMAGE (PARALLAX + ANIMATED BACKGROUND) */}
        <motion.div
          style={{ y: yImg, scale: scaleImg }}
          className="relative rounded-2xl overflow-hidden aspect-[4/3]"
        >
          {/* animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-700/30 to-green-400/30 animate-pulse" />

          {/* subtle moving glow */}
          <div className="absolute -inset-20 bg-green-300/20 blur-3xl animate-pulse" />

          {/* placeholder image layer */}
          <div className="relative w-full h-full flex items-center justify-center">
            <span className="text-white/30 text-sm">
              Group Photo
            </span>
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-green-100 rounded-2xl p-8"
        >
          <h2 className="font-bold text-3xl mb-4">
            Who We Are
          </h2>

          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            ASVA is the recognized student association committed to representing student interests,
            promoting academic excellence, and fostering leadership and collaboration across the
            university. We serve as a bridge between students, faculty, and administration —
            ensuring transparency, engagement, and growth.
          </p>

          {/* CARDS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <MissionCard
              icon={<Rocket size={16} />}
              title="The Mission"
              description="To empower students through representation, innovation, and academic support."
              delay={0.1}
            />

            <MissionCard
              icon={<Eye size={16} />}
              title="The Vision"
              description="To build a strong, inclusive, and forward-thinking student community that drives institutional growth and student success."
              delay={0.2}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}