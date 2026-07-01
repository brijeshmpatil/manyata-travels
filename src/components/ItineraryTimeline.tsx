"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ItineraryDay } from "@/data/packages";

interface ItineraryTimelineProps {
  itinerary: ItineraryDay[];
}

export default function ItineraryTimeline({ itinerary }: ItineraryTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  return (
    <div>
      <h2 className="text-2xl font-bold text-dark mb-10">Day-by-Day Itinerary</h2>

      <div ref={containerRef} className="relative pl-10 sm:pl-12">
        {/* Track — static gray background line */}
        <div className="absolute left-[15px] sm:left-[19px] top-0 bottom-0 w-[2px] bg-primary/15" />

        {/* Progress — animated fill line */}
        <motion.div
          className="absolute left-[15px] sm:left-[19px] top-0 w-[2px] bg-primary origin-top"
          style={{
            height: "100%",
            scaleY: scrollYProgress,
          }}
        />

        <div className="space-y-8">
          {itinerary.map((day, index) => (
            <TimelineMilestone
              key={day.day}
              day={day}
              index={index}
              total={itinerary.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineMilestone({
  day,
  index,
  total,
  progress,
}: {
  day: ItineraryDay;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const threshold = index / (total - 1);
  const isActive = useTransform(progress, (v) => v >= threshold - 0.05);

  return (
    <div className="relative">
      {/* Dot on the line */}
      <div className="absolute -left-10 sm:-left-12 top-1">
        <motion.div
          className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-full border-[3px] flex items-center justify-center transition-colors duration-500"
          style={{
            backgroundColor: useTransform(isActive, (v) =>
              v ? "#6B1D2A" : "#ffffff"
            ),
            borderColor: useTransform(isActive, (v) =>
              v ? "#6B1D2A" : "rgba(107,29,42,0.25)"
            ),
          }}
        >
          <motion.span
            className="text-xs sm:text-sm font-bold transition-colors duration-500"
            style={{
              color: useTransform(isActive, (v) =>
                v ? "#ffffff" : "#6B1D2A"
              ),
            }}
          >
            {day.day}
          </motion.span>
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-light/30 hover:shadow-lg transition-shadow"
      >
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <div className="inline-block bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2 font-[var(--font-body)]">
              Day {day.day}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-dark">{day.title}</h3>
          </div>
          <span className="bg-cream text-primary text-xs px-3 py-1.5 rounded-full shrink-0 font-semibold font-[var(--font-body)] border border-primary/10">
            {day.stay}
          </span>
        </div>
        <p className="text-gray text-sm leading-relaxed font-[var(--font-body)]">
          {day.description}
        </p>
      </motion.div>
    </div>
  );
}
