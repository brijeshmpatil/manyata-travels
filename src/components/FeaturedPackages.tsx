"use client";

import Link from "next/link";
import { getFeaturedPackages } from "@/data/packages";
import PackageCard from "./PackageCard";
import ScrollAnimation from "./ScrollAnimation";

export default function FeaturedPackages() {
  const featured = getFeaturedPackages();

  return (
    <section className="py-16 px-4 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-14">
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3 font-[var(--font-body)]">
              Our Packages
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark">
              Handpicked Travel Packages
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((pkg, index) => (
            <PackageCard key={pkg.slug} pkg={pkg} index={index} />
          ))}
        </div>

        <ScrollAnimation>
          <div className="text-center mt-12">
            <Link
              href="/packages"
              className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full text-sm font-semibold transition-all font-[var(--font-body)]"
            >
              View All Packages
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
