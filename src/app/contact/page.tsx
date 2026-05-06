"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    // simulate submission (replace with backend later)
    setTimeout(() => {
      setLoading(false);
      alert("Message sent successfully 🚀");
    }, 1500);
  };

  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent">
          Contact Us
        </h1>

        <p className="text-gray-400 mt-6">
          Have questions, ideas, or want to collaborate? Reach out to us.
        </p>
      </motion.div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT: CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-white">
            Get in touch
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            ASVA is always open to collaboration, innovation, and new ideas.
            Whether you're a student, partner, or organization — we’d love to hear from you.
          </p>

          <div className="space-y-4 mt-6">

            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="text-green-400" size={18} />
              <span>asvaabuad@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="text-green-400" size={18} />
              <span>0903-823-1348</span>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <Instagram className="text-green-400" size={18} />
              <span>@asvaabuad</span>
            </div>
          </div>

          {/* GLOW CARD */}
          <div className="mt-10 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg relative overflow-hidden">
            <div className="absolute -inset-10 bg-green-500/10 blur-3xl" />

            <p className="relative text-sm text-gray-300 leading-relaxed">
              “We are committed to building a community of innovation,
              leadership, and excellence. Let’s build something impactful together.”
            </p>
          </div>
        </motion.div>

        {/* RIGHT: FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 space-y-6 relative overflow-hidden"
        >
          {/* glow */}
          <div className="absolute -inset-10 bg-green-500/10 blur-3xl" />

          <div className="relative z-10 space-y-6">

            {/* NAME */}
            <div>
              <label className="text-sm text-gray-400">Full Name</label>
              <input
                required
                type="text"
                className="w-full mt-2 px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:outline-none focus:border-green-400 transition"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-400">Email</label>
              <input
                required
                type="email"
                className="w-full mt-2 px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:outline-none focus:border-green-400 transition"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                required
                rows={5}
                className="w-full mt-2 px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:outline-none focus:border-green-400 transition"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-lg transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>

          </div>
        </motion.form>
      </div>

    </main>
  );
}