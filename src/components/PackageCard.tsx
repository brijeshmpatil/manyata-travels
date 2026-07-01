"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, MapPin, Users } from "lucide-react";
import type { TravelPackage } from "@/data/packages";
import { siteConfig } from "@/data/config";

interface PackageCardProps {
  pkg: TravelPackage;
  index?: number;
}

export default function PackageCard({ pkg, index = 0 }: PackageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col h-full"
    >
      {/* Image */}
      <Link href={`/packages/${pkg.slug}`} className="block relative h-56 overflow-hidden shrink-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url('${pkg.cardImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-4 right-4 bg-accent text-dark px-4 py-1.5 rounded-lg text-sm font-bold font-[var(--font-body)]">
          <span className="text-[10px] font-normal block leading-tight">Starting from</span>
          ₹{pkg.price.toLocaleString("en-IN")}
        </div>
        <div className="absolute bottom-4 left-4 flex gap-2">
          <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium font-[var(--font-body)]">
            {pkg.duration}
          </span>
        </div>
        {pkg.isSample ? (
          <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-amber-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide font-[var(--font-body)]">
            Sample Itinerary
          </div>
        ) : (
          <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide font-[var(--font-body)]">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Limited Seats
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <Link href={`/packages/${pkg.slug}`}>
          <h3 className="text-xl font-bold text-dark mb-1 group-hover:text-primary transition-colors">
            {pkg.title}
          </h3>
        </Link>
        <p className="text-gray text-sm mb-4 font-[var(--font-body)]">{pkg.subtitle}</p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-gray text-sm mb-5 font-[var(--font-body)]">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {pkg.days}D / {pkg.nights}N
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {pkg.destinations.length} Places
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            Group
          </span>
        </div>

        {/* Destinations tags */}
        <div className="flex flex-wrap gap-2 mb-5 flex-1 content-start">
          {pkg.destinations.slice(0, 4).map((d) => (
            <span
              key={d}
              className="bg-cream text-primary text-xs px-3 py-1 rounded-full font-medium font-[var(--font-body)] h-fit"
            >
              {d}
            </span>
          ))}
          {pkg.destinations.length > 4 && (
            <span className="bg-cream text-gray text-xs px-3 py-1 rounded-full font-[var(--font-body)] h-fit">
              +{pkg.destinations.length - 4} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Link
            href={`/packages/${pkg.slug}`}
            className="flex-1 text-center bg-primary hover:bg-primary-light text-white py-3 rounded-xl text-sm font-semibold transition-colors font-[var(--font-body)]"
          >
            View Details
          </Link>
          <a
            href={siteConfig.whatsappLink(siteConfig.enquiryMessage(pkg.title))}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center border-2 border-primary text-primary hover:bg-primary hover:text-white py-3 rounded-xl text-sm font-semibold transition-all font-[var(--font-body)]"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </motion.div>
  );
}
