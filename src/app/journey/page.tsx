"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Rocket, Sparkles, Globe, Target } from "lucide-react";
import MainNavbar from "../components/MainNavbar";

const sections = [
  {
    icon: <Sparkles size={28} />,
    title: "The Beginning",
    text: "ASVA was founded to create a platform where students could lead, innovate, and shape their academic experience.",
  },
  {
    icon: <Rocket size={28} />,
    title: "Rapid Growth",
    text: "We launched academic initiatives, events, and leadership programs that transformed student engagement.",
  },
  {
    icon: <Globe size={28} />,
    title: "Expansion",
    text: "Partnerships, conferences, and collaborations expanded our reach across disciplines.",
  },
  {
    icon: <Target size={28} />,
    title: "The Future",
    text: "We continue building a forward-thinking community focused on innovation and global impact.",
  },
];

export default function JourneyPage() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <>
      <MainNavbar />

      <main ref={ref} className="bg-black text-white pt-24">

        {/* HERO */}
        <section className="h-[70vh] flex items-center justify-center text-center px-6">
          <motion.div style={{ scale }}>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
              Our Journey
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Every step tells a story of growth, impact, and transformation.
            </p>
          </motion.div>
        </section>

        {/* STORY SECTIONS */}
        {sections.map((section, i) => (
          <motion.section
            key={i}
            className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* TEXT */}
            <div className="flex-1">
              <div className="text-green-400 mb-4">{section.icon}</div>

              <h2 className="text-3xl font-bold mb-4">
                {section.title}
              </h2>

              <p className="text-gray-400 leading-relaxed">
                {section.text}
              </p>
            </div>

            {/* VISUAL BLOCK */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-1 h-[300px] rounded-2xl bg-gradient-to-br from-green-500/20 to-transparent border border-white/10 flex items-center justify-center"
            >
              <span className="text-gray-500">
                Image / Illustration
              </span>
            </motion.div>
          </motion.section>
        ))}

        {/* FINAL IMPACT */}
        <section className="text-center py-24 px-6">
          <h2 className="text-4xl font-bold mb-6">
            And We're Just Getting Started
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            The journey continues with innovation, leadership, and limitless possibilities.
          </p>
        </section>

      </main>
    </>
  );
}