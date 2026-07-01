"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { destinations } from "@/data/destinations";
import ScrollAnimation from "./ScrollAnimation";

export default function DestinationGrid() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-14">
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3 font-[var(--font-body)]">
              Popular Destinations
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark">
              Where Would You Like to Go?
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <ScrollAnimation key={dest.name} delay={index * 0.1}>
              <DestinationCard destination={dest} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

function DestinationCard({ destination }: { destination: (typeof destinations)[0] }) {
  const content = (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url('${destination.image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center gap-2 text-accent mb-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm tracking-wider uppercase font-[var(--font-body)]">
            {destination.tagline}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
      </div>
    </motion.div>
  );

  if (destination.slug) {
    return <Link href={`/packages/${destination.slug}`}>{content}</Link>;
  }

  return content;
}
