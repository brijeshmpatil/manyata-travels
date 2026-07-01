"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";

export default function CTABanner() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1597074866923-dc0589150458?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
        <ScrollAnimation>
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4 font-[var(--font-body)]">
            Start Your Journey
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Explore North India?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto font-[var(--font-body)]">
            Let us craft your perfect getaway. From choosing destinations to
            booking hotels — we handle everything so you can focus on making
            memories.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-light text-dark px-10 py-4 rounded-full text-lg font-semibold transition-colors shadow-xl font-[var(--font-body)]"
            >
              Plan Your Dream Trip
            </Link>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
