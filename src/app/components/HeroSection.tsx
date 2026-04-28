"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="overview"
      className="relative flex items-end h-screen sm:h-[520px] sm:mx-4 overflow-hidden sm:rounded-2xl"
    >
      <Image
        src="/hero-image.png"
        alt="Hero background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/20 to-black/80" />

      {/* Animated content */}
      <motion.div
        className="relative z-20 w-[95%] pl-5 sm:pl-10 pb-10 pt-[280px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-white font-bold leading-tight mb-3 max-w-[900px] text-[clamp(22px,4vw,36px)]">
          ASVA — Building Leaders. Driving Impact. Strengthening Our Academic Community.
        </h1>

        <p className="text-white/90 text-sm leading-relaxed mb-5 max-w-[500px] text-justify">
          The official association representing students, advancing academic excellence,
          leadership, and meaningful campus engagement.
        </p>

        <div className="flex flex-wrap gap-2.5">
          <Link
            href="#join"
            className="px-5 py-2 rounded-full text-sm font-medium text-white border border-white/60 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition"
          >
            Join ASVA
          </Link>

          <Link
            href="#events"
            className="px-5 py-2 rounded-full text-sm font-medium text-white bg-green-500 hover:bg-green-600 transition"
          >
            Upcoming Events
          </Link>
        </div>
      </motion.div>
    </section>
  );
}