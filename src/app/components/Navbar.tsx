"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, LogIn } from "lucide-react";

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
  const [activeSection, setActiveSection] = useState("overview");

  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // ── scroll background effect (UNCHANGED)
//   useEffect(() => {
//    const handleScroll = (e: any, href: string) => {
//   e.preventDefault();

//   const el = document.querySelector(href);
//   if (!el) return;

//   const offset = 80;
//   const top = el.getBoundingClientRect().top + window.scrollY - offset;

//   window.scrollTo({ top, behavior: "smooth" });

//   setActiveSection(href.replace("#", "")); // 👈 manual control now
//   setOpen(false);
// };
//   }, []);

  // ── scroll spy
//   useEffect(() => {
//   const sections = navLinks
//     .map((l) => document.querySelector(l.href))
//     .filter(Boolean);

//   const observer = new IntersectionObserver(
//     (entries) => {
//       const visible = entries
//         .filter((entry) => entry.isIntersecting)
//         .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

//       if (visible.length > 0) {
//         setActiveSection(visible[0].target.id);
//       }
//     },
//     {
//       root: null,
//       threshold: [0.2, 0.4, 0.6],
//     }
//   );

//   sections.forEach((sec) => sec && observer.observe(sec));

//   return () => observer.disconnect();
// }, []);

  // ── smooth scroll override (fix navbar offset issue)
  const handleScroll = (e: React.MouseEvent, href: string) => {
  e.preventDefault();

  const el = document.querySelector(href);
  if (!el) return;

  const offset = 80;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top, behavior: "smooth" });

  setActiveSection(href.replace("#", "")); // ✅ ONLY HERE

  setOpen(false);
};

  // ── magnetic effect
  const handleMouseMove = (e: any, i: number) => {
    const el = linkRefs.current[i];
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const resetMagnet = (i: number) => {
    const el = linkRefs.current[i];
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200"
          : "bg-white"
      }`}
    >
      <div className="h-16 px-6 flex items-center justify-between max-w-7xl mx-auto">

        {/* Logo (UNCHANGED) */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/asva logo.png"
            alt="ASVA Logo"
            width={36}
            height={36}
            priority
          />
        </Link>

        {/* Desktop Nav (ENHANCED ONLY) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l, i) => (
            <a
  key={l.label}
  href={l.href}
  ref={(el) => {
  linkRefs.current[i] = el;
}}
  onClick={(e) => handleScroll(e, l.href)}
  onMouseMove={(e) => handleMouseMove(e, i)}
  onMouseLeave={() => resetMagnet(i)}
  className={`relative text-sm font-medium transition group ${
    activeSection === l.href.replace("#", "")
      ? "text-green-700"
      : "text-gray-600 hover:text-green-700"
  }`}
>
  {l.label}

  {/* underline */}
  <span
  className={`absolute left-0 -bottom-1 h-[2px] bg-green-600 transition-all duration-300
    ${
      activeSection === l.href.replace("#", "")
        ? "w-full"
        : "w-0 group-hover:w-full"
    }
  `}
/>
</a>
          ))}
        </div>

        {/* Desktop CTA (UNCHANGED + LOGIN ADDED) */}
        <div className="hidden md:flex items-center gap-3">

          {/* LOGIN BUTTON */}
          <Link
            href="/login"
            className="px-5 py-2 text-sm rounded-full border border-gray-300 hover:border-gray-400 transition flex items-center gap-2"
          >
            Login
          </Link>

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

        {/* Mobile Button (UNCHANGED) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-900"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU (ONLY LOGIN ADDED) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-b border-gray-200 ${
          open ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="px-6 flex flex-col gap-4">

          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleScroll(e, l.href)}
              className="text-gray-700 font-medium hover:text-green-700 transition"
            >
              {l.label}
            </a>
          ))}

          <div className="flex gap-3 pt-2 flex-wrap">

            {/* LOGIN ADDED */}
            <Link
              href="/login"
              className="px-5 py-2 text-sm rounded-full border border-gray-300 flex items-center gap-2"
            >
              <LogIn size={14} />
              Login
            </Link>

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