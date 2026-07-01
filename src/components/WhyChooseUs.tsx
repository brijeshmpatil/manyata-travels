"use client";

import { Compass, Star, Headphones, Heart } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const reasons = [
  {
    icon: Compass,
    title: "Curated Trips",
    description: "Handpicked stays, routes & experiences tailored for every traveller.",
    gradient: "from-primary/20 to-accent/10",
  },
  {
    icon: Star,
    title: "Best Value",
    description: "Transparent pricing with no hidden costs or surprises.",
    gradient: "from-accent/20 to-primary/10",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated trip manager from booking to safe return.",
    gradient: "from-primary/20 to-accent/10",
  },
  {
    icon: Heart,
    title: "Trusted",
    description: "Years of experience crafting royal & loyal journeys.",
    gradient: "from-accent/20 to-primary/10",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3 font-[var(--font-body)]">
              Why Manyata Travels
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark">
              Why Travel With Us?
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <ScrollAnimation key={reason.title} delay={index * 0.1} parallax parallaxSpeed={0.03}>
              <div className="bg-white p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center justify-start group border border-transparent hover:border-accent/20">
                <div className={`w-18 h-18 bg-gradient-to-br ${reason.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm`}
                  style={{ width: '72px', height: '72px' }}
                >
                  <reason.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
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
