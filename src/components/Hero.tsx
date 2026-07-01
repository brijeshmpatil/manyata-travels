"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown, Search, MapPin, Star, Users, Shield } from "lucide-react";
import { packages } from "@/data/packages";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const match = packages.find(
      (p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.destinations.some((d) =>
          d.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
    if (match) {
      router.push(`/packages/${match.slug}`);
    } else {
      router.push("/packages");
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/hero-video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-accent text-sm sm:text-base tracking-[0.3em] uppercase mb-4"
        >
          The Royal & Loyal Journey
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          Discover the Soul of{" "}
          <span className="text-accent">North India</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto font-[var(--font-body)]"
        >
          From the snow-capped peaks of Ladakh to the serene valleys of Kashmir
          — experience handcrafted journeys that create memories for a lifetime.
        </motion.p>

        {/* Search Bar */}
        <motion.form
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center max-w-xl mx-auto mb-8 bg-white/15 backdrop-blur-md rounded-full border border-white/20 overflow-hidden"
        >
          <div className="flex items-center flex-1 px-5 py-3">
            <MapPin className="w-5 h-5 text-accent mr-3 shrink-0" />
            <input
              type="text"
              placeholder="Search destinations — Ladakh, Kashmir, Manali..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-white placeholder-white/50 outline-none w-full text-sm font-[var(--font-body)]"
            />
          </div>
          <button
            type="submit"
            className="bg-accent hover:bg-accent-light text-dark px-6 py-3 m-1.5 rounded-full font-semibold text-sm transition-colors flex items-center gap-2 font-[var(--font-body)]"
          >
            <Search className="w-4 h-4" />
            <span className="hidden sm:inline">Search</span>
          </button>
        </motion.form>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
        >
          <Link
            href="/packages"
            className="bg-accent hover:bg-accent-light text-dark px-8 py-4 rounded-full text-base font-semibold transition-all hover:scale-105 shadow-lg font-[var(--font-body)]"
          >
            Explore Packages
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white/40 hover:border-white text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:bg-white/10 font-[var(--font-body)]"
          >
            Plan Your Trip
          </Link>
        </motion.div>

        {/* Trust Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-10"
        >
          <div className="flex items-center gap-2 text-white/80">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-accent" />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm leading-tight">500+</p>
              <p className="text-white/60 text-xs font-[var(--font-body)]">Happy Travellers</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Star className="w-5 h-5 text-accent" />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm leading-tight">4.8/5</p>
              <p className="text-white/60 text-xs font-[var(--font-body)]">Google Rating</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-accent" />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm leading-tight">100%</p>
              <p className="text-white/60 text-xs font-[var(--font-body)]">Safe & Trusted</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
