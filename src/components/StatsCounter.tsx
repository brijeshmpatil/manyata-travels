"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, MapPin, Calendar, Star } from "lucide-react";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Happy Travellers" },
  { icon: MapPin, value: 15, suffix: "+", label: "Destinations" },
  { icon: Calendar, value: 100, suffix: "+", label: "Trips Completed" },
  { icon: Star, value: 4.8, suffix: "/5", label: "Google Rating", isDecimal: true },
];

function AnimatedNumber({
  value,
  suffix,
  isDecimal = false,
}: {
  value: number;
  suffix: string;
  isDecimal?: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      const progress = Math.min(current / steps, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * value);

      if (current >= steps) clearInterval(timer);
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-16 px-4 bg-primary relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center text-white"
            >
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-accent" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold mb-1">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  isDecimal={stat.isDecimal}
                />
              </div>
              <div className="text-white/70 text-sm font-[var(--font-body)]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
