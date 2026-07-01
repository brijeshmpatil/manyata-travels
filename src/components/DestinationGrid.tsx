"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { destinations } from "@/data/destinations";
import ScrollAnimation from "./ScrollAnimation";

export default function DestinationGrid() {
  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-14">
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3 font-[var(--font-body)]">
              Popular Destinations
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark">
              Where Would You Like to Go?
            </h2>
            <p className="text-gray mt-4 max-w-2xl mx-auto font-[var(--font-body)]">
              Explore handpicked destinations across North India — from adventure to spiritual journeys.
            </p>
          </div>
        </ScrollAnimation>

        {/* Circular destination icons */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-16">
          {destinations.map((dest, index) => (
            <ScrollAnimation key={dest.name} delay={index * 0.08}>
              <DestinationCircle destination={dest} />
            </ScrollAnimation>
          ))}
        </div>

        {/* Featured destination cards — larger visual cards for top 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.slice(0, 3).map((dest, index) => (
            <ScrollAnimation key={`card-${dest.name}`} delay={index * 0.1}>
              <DestinationCard destination={dest} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

function DestinationCircle({ destination }: { destination: (typeof destinations)[0] }) {
  const inner = (
    <>
      <motion.div
        whileHover={{ scale: 1.1, y: -4 }}
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-4 ring-transparent group-hover:ring-accent transition-all shadow-lg"
      >
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url('${destination.image}')` }}
        />
      </motion.div>
      <div className="text-center">
        <p className="font-bold text-dark text-sm group-hover:text-primary transition-colors">
          {destination.name}
        </p>
        <p className="text-gray text-xs font-[var(--font-body)]">{destination.tagline}</p>
      </div>
    </>
  );

  if (destination.slug) {
    return (
      <Link href={`/packages/${destination.slug}`} className="group flex flex-col items-center gap-3 cursor-pointer">
        {inner}
      </Link>
    );
  }

  return (
    <div className="group flex flex-col items-center gap-3 cursor-pointer">
      {inner}
    </div>
  );
}

function DestinationCard({ destination }: { destination: (typeof destinations)[0] }) {
  const content = (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url('${destination.image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-accent text-xs tracking-wider uppercase mb-1 font-[var(--font-body)]">
          {destination.tagline}
        </p>
        <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
      </div>
      {destination.slug && (
        <div className="absolute top-4 right-4 bg-accent text-dark text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity font-[var(--font-body)]">
          View Package →
        </div>
      )}
    </motion.div>
  );

  if (destination.slug) {
    return <Link href={`/packages/${destination.slug}`}>{content}</Link>;
  }
  return content;
}
