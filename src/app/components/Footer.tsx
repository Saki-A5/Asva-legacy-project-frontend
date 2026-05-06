import Link from "next/link";
import { Mail, Phone, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white/60 mt-16 px-6 pt-12 pb-8">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 pb-8 border-b border-white/10">
        
        {/* Brand */}
        <div>
          <div className="font-bold text-xl text-white mb-3">
            ASVA
          </div>
          <p className="text-sm leading-7 max-w-[220px] text-white/60">
            Building Leaders. Driving Impact. Strengthening Our Academic Community.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-white font-semibold text-sm mb-4">
            Quick Links
          </p>

          {["Overview", "About", "History", "Execs", "Events"].map((l) => (
            <Link
              key={l}
              href={`#${l.toLowerCase()}`}
              className="block text-sm text-white/50 hover:text-white transition-colors mb-2"
            >
              {l}
            </Link>
          ))}
        </div>

        {/* CONTACT (UPGRADED) */}
        <div>
          <p className="text-white font-semibold text-sm mb-4">
            Contact Us
          </p>

          <div className="space-y-3 text-sm">
            
            <div className="flex items-center gap-2 text-white/60">
              <Mail size={14} />
              <span>asvaabuad@gmail.com</span>
            </div>

            <div className="flex items-center gap-2 text-white/60">
              <Phone size={14} />
              <span>0903-823-1348</span>
            </div>

            <div className="flex items-center gap-2 text-white/60">
              <Instagram size={14} />
              <span>@asvaabuad</span>
            </div>

            {/* LINK TO FULL PAGE */}
            <Link
              href="/contact"
              className="inline-block mt-3 text-green-400 hover:text-green-300 transition"
            >
              View Contact Page →
            </Link>

            {/* CTA MOVED HERE */}
            <Link
              href="#join"
              className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-black text-sm font-medium px-5 py-2 rounded-full transition"
            >
              Join ASVA
            </Link>

          </div>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto pt-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} ASVA. All rights reserved.
      </div>
    </footer>
  );
}