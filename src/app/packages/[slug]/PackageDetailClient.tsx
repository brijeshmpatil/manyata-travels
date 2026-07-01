"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Hotel, Check, X, MessageCircle } from "lucide-react";
import type { TravelPackage } from "@/data/packages";
import ScrollAnimation from "@/components/ScrollAnimation";

interface PackageDetailClientProps {
  pkg: TravelPackage;
  whatsappUrl: string;
}

export default function PackageDetailClient({ pkg, whatsappUrl }: PackageDetailClientProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${pkg.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-2 font-[var(--font-body)]">
              {pkg.subtitle}
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{pkg.title}</h1>
            <div className="flex flex-wrap gap-4 text-white/80 text-sm font-[var(--font-body)]">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {pkg.duration}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {pkg.destinations.length} Destinations
              </span>
              <span className="flex items-center gap-1">
                <Hotel className="w-4 h-4" /> 3-Star Hotels
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Destinations */}
            <ScrollAnimation>
              <div className="flex flex-wrap gap-3">
                {pkg.destinations.map((dest) => (
                  <span
                    key={dest}
                    className="bg-cream text-primary px-4 py-2 rounded-full text-sm font-medium font-[var(--font-body)]"
                  >
                    {dest}
                  </span>
                ))}
              </div>
            </ScrollAnimation>

            {/* Highlights */}
            <ScrollAnimation>
              <h2 className="text-2xl font-bold text-dark mb-6">Trip Highlights</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {pkg.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="bg-cream rounded-xl p-4 text-center text-sm font-medium text-dark font-[var(--font-body)]"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </ScrollAnimation>

            {/* Itinerary */}
            <ScrollAnimation>
              <h2 className="text-2xl font-bold text-dark mb-10">Day-by-Day Itinerary</h2>
              <div className="relative">
                {/* Continuous line — center of first circle to center of last circle */}
                <div
                  className="absolute w-0.5 bg-primary/30 left-[19px] sm:left-[23px]"
                  style={{ top: "20px", height: "calc(100% - 40px)" }}
                />

                <div className="space-y-6">
                  {pkg.itinerary.map((day, index) => (
                    <ScrollAnimation key={day.day} delay={index * 0.08}>
                      <div className="relative flex gap-5 sm:gap-7">
                        {/* Day number circle */}
                        <div className="relative z-10 shrink-0">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center shadow-lg ring-4 ring-white">
                            <span className="text-sm sm:text-base text-white font-bold">{day.day}</span>
                          </div>
                        </div>

                        {/* Content card */}
                        <div className="flex-1 bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-light/30 hover:shadow-lg transition-shadow">
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <div>
                              <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-1 font-[var(--font-body)]">
                                Day {day.day}
                              </p>
                              <h3 className="text-lg font-bold text-dark">{day.title}</h3>
                            </div>
                            <span className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-xs px-4 py-1.5 rounded-full shrink-0 font-semibold font-[var(--font-body)] border border-primary/10">
                              {day.stay}
                            </span>
                          </div>
                          <p className="text-gray text-sm leading-relaxed font-[var(--font-body)]">
                            {day.description}
                          </p>
                        </div>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* Inclusions / Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollAnimation>
                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-3">
                    {pkg.inclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-dark/80 font-[var(--font-body)]">
                        <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={0.1}>
                <div className="bg-red-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500" />
                    What&apos;s Not Included
                  </h3>
                  <ul className="space-y-3">
                    {pkg.exclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-dark/80 font-[var(--font-body)]">
                        <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Price Card */}
              <ScrollAnimation direction="right">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-light/50">
                  <p className="text-gray text-sm uppercase tracking-wider mb-1 font-[var(--font-body)]">
                    Per Person
                  </p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-bold text-primary">
                      ₹{pkg.price.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <p className="text-gray text-xs mb-6 font-[var(--font-body)]">{pkg.priceNote}</p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white py-4 rounded-xl text-base font-semibold transition-colors mb-3 font-[var(--font-body)]"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Enquire on WhatsApp
                  </a>

                  <a
                    href={`tel:+919742026462`}
                    className="flex items-center justify-center gap-2 w-full border-2 border-primary text-primary hover:bg-primary hover:text-white py-4 rounded-xl text-base font-semibold transition-all font-[var(--font-body)]"
                  >
                    Call to Book
                  </a>
                </div>
              </ScrollAnimation>

              {/* Note */}
              <ScrollAnimation direction="right" delay={0.1}>
                <div className="bg-cream rounded-2xl p-6 border border-accent/30">
                  <p className="text-sm text-dark/80 leading-relaxed font-[var(--font-body)]">
                    <strong className="text-primary">Note:</strong> Pricing is subject to
                    change during New Year and other peak seasons. Contact us for the latest rates.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
