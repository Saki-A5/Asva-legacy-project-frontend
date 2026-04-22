"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "About", href: "#about" },
  { label: "History", href: "#history" },
  { label: "Execs", href: "#execs" },
  { label: "Events", href: "#events" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // simple scroll effect for glass navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200"
          : "bg-white"
      }`}
    >
      <div className="h-16 px-6 flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/asva logo.png"
            alt="ASVA Logo"
            width={36}
            height={36}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm text-gray-600 hover:text-green-700 transition font-medium relative group"
            >
              {l.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-600 transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/join"
            className="px-5 py-2 text-sm rounded-full border border-gray-300 hover:border-gray-400 transition"
          >
            Join ASVA
          </Link>

          <Link
            href="#events"
            className="px-5 py-2 text-sm rounded-full bg-green-500 hover:bg-green-600 text-white transition"
          >
            Upcoming Events
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-900"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU (animated) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-b border-gray-200 ${
          open ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="px-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 font-medium hover:text-green-700 transition"
            >
              {l.label}
            </Link>
          ))}

          <div className="flex gap-3 pt-2 flex-wrap">
            <Link
              href="/join"
              className="px-5 py-2 text-sm rounded-full border border-gray-300"
            >
              Join ASVA
            </Link>

            <Link
              href="#events"
              className="px-5 py-2 text-sm rounded-full bg-green-500 text-white"
            >
              Upcoming Events
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}