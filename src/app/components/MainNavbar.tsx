"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function MainNavbar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined) {
      setHidden(latest > previous && latest > 100);
    }
  });

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Journey", href: "/journey" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-white/10"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="text-white font-bold text-lg">
            <Image
              src="/asva logo.png"
              alt="ASVA Logo"
              width={36}
              height={36}
              priority
              />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="relative group">
                <span
                  className={`${
                    pathname === item.href
                      ? "text-green-400"
                      : "text-gray-300"
                  }`}
                >
                  {item.name}
                </span>

                {/* underline glow */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: open ? "0%" : "100%" }}
        className="fixed top-0 right-0 w-[70%] h-screen bg-black z-50 p-6 flex flex-col gap-6"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="text-lg text-white"
          >
            {item.name}
          </Link>
        ))}
      </motion.div>
    </>
  );
}