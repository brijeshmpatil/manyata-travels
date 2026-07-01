"use client";

import { Compass, Star, Headphones, Heart } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const reasons = [
  {
    icon: Compass,
    title: "Curated Trips",
    description: "Handpicked stays, routes & experiences tailored for every traveller.",
  },
  {
    icon: Star,
    title: "Best Value",
    description: "Transparent pricing with no hidden costs or surprises.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated trip manager from booking to safe return.",
  },
  {
    icon: Heart,
    title: "Trusted",
    description: "Years of experience crafting royal & loyal journeys.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-cream">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-14">
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3 font-[var(--font-body)]">
              Why Manyata Travels
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark">
              Why Travel With Us?
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <ScrollAnimation key={reason.title} delay={index * 0.1}>
              <div className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-shadow group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-3">{reason.title}</h3>
                <p className="text-gray text-sm leading-relaxed font-[var(--font-body)]">
                  {reason.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
