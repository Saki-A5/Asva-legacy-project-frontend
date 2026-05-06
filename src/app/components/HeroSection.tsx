"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/hero-image.png",
  "/asva logo.jpg",
  "/a.jpg",
  "/b.jpg",
  "/c.jpg",
  "/d.jpg",
  // "/hero-image-7.png",
  // "/hero-image-8.png",
  // "/hero-image-9.png",
  // "/hero-image-10.png",
  // "/hero-image-11.png",
  // "/hero-image-12.png",
  // "/hero-image-13.png",
  // "/hero-image-14.png",
  // "/hero-image-15.png",
  // "/hero-image-16.png",
];

const INTERVAL = 4000; // 4 seconds per image

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="overview"
      className="relative flex items-end h-[520px] sm:mx-4 overflow-hidden sm:rounded-2xl"
    >
      {/* Carousel images */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt="Hero background"
            fill
            priority={current === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

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