"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Overview", href: "#overv" },
  { label: "About", href: "#about" },
  { label: "History", href: "#history" },
  { label: "Execs", href: "#execs" },
  { label: "Events", href: "#events" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "white",
      borderBottom: "1px solid var(--gray-200)",
      padding: "0 2rem",
      height: "64px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}>
      {/* Logo */}
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
        <Image
          src="/asva logo.png"
          alt="ASVA Logo"
          width={36}
          height={36}
          priority
        />
      </Link>

      {/* Desktop Links */}
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="desktop-nav">
        {navLinks.map((l) => (
          <Link key={l.label} href={l.href} style={{
            textDecoration: "none",
            color: "var(--gray-700)",
            fontSize: "0.875rem",
            fontWeight: 400,
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--green-dark)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--gray-700)")}
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* CTA Buttons */}
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }} className="desktop-nav">
        <Link href="#join" style={{
          padding: "0.45rem 1.2rem",
          borderRadius: "2rem",
          border: "1.5px solid var(--gray-300)",
          color: "var(--gray-900)",
          textDecoration: "none",
          fontSize: "0.85rem",
          fontWeight: 500,
          background: "white",
          transition: "all 0.2s",
        }}>Join ASVA</Link>
        <Link href="#events" style={{
          padding: "0.45rem 1.2rem",
          borderRadius: "2rem",
          background: "var(--green)",
          color: "white",
          textDecoration: "none",
          fontSize: "0.85rem",
          fontWeight: 500,
          transition: "all 0.2s",
        }}>Upcoming Events</Link>
      </div>

      {/* Mobile toggle */}
      <button onClick={() => setOpen(!open)} style={{
        display: "none",
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "var(--gray-900)",
      }} className="mobile-menu-btn">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          position: "absolute",
          top: "64px",
          left: 0,
          right: 0,
          background: "white",
          padding: "1.5rem 2rem",
          borderBottom: "1px solid var(--gray-200)",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        }}>
          {navLinks.map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
              textDecoration: "none", color: "var(--gray-700)", fontSize: "1rem", fontWeight: 500,
            }}>{l.label}</Link>
          ))}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link href="#join" style={{
              padding: "0.5rem 1.4rem", borderRadius: "2rem",
              border: "1.5px solid var(--gray-300)", color: "var(--gray-900)",
              textDecoration: "none", fontSize: "0.9rem", fontWeight: 500,
            }}>Join ASVA</Link>
            <Link href="#events" style={{
              padding: "0.5rem 1.4rem", borderRadius: "2rem",
              background: "var(--green)", color: "white",
              textDecoration: "none", fontSize: "0.9rem", fontWeight: 500,
            }}>Upcoming Events</Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
