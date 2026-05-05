"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function MainNavbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/60 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="text-white font-bold text-lg">
          ASVA
        </Link>

        {/* LINKS */}
        <div className="flex items-center gap-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/journey" className="hover:text-white transition">
            Journey
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}