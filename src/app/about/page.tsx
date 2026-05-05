"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import MainNavbar from "../components/MainNavbar";

export default function AboutPage() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <>
    <MainNavbar />
    <main
      ref={ref}
      className="bg-black text-white overflow-hidden pt-24"
    >
      {/* HERO */}
      <section className="h-[80vh] flex items-center justify-center relative text-center px-6">
        <motion.div style={{ y: yHero }}>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            About ASVA
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Building leadership, empowering students, and shaping the future of the academic community.
          </p>
        </motion.div>

        {/* glow */}
        <div className="absolute inset-0 bg-green-500/10 blur-3xl -z-10" />
      </section>

      {/* IMAGE SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative h-[400px] rounded-2xl overflow-hidden"
        >
          {/* placeholder */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            Replace with real image
          </div>

          <Image
            src="/about-image.jpg"
            alt="About"
            fill
            className="object-cover opacity-40"
          />
        </motion.div>
      </section>

      {/* STORY */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-10">
        {[
          "ASVA was founded with the goal of strengthening student representation and creating a unified academic voice.",
          "Over time, the association evolved into a dynamic platform that supports academic excellence, leadership, and collaboration.",
          "Today, ASVA stands as a bridge between students, faculty, and administration."
        ].map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            {text}
          </motion.p>
        ))}
      </section>

      {/* VALUES */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
        {["Leadership", "Innovation", "Community"].map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10"
          >
            <h3 className="text-xl font-bold mb-2">{item}</h3>
            <p className="text-gray-400 text-sm">
              Description placeholder — replace with real content from your document.
            </p>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4">
          Join the Movement
        </h2>
        <p className="text-gray-400 mb-6">
          Be part of something bigger than yourself.
        </p>
        <button className="bg-green-500 px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition">
          Get Involved
        </button>
      </section>
    </main>
  </>
  );
}