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
    offset: ["start 80%", "end 50%"],
  });

  return (
    <div>
      <h2 className="text-2xl font-bold text-dark mb-10">Day-by-Day Itinerary</h2>

      <div ref={containerRef} className="relative">
        {/* Track line — static gray */}
        <div
          className="absolute w-[2px] bg-primary/15"
          style={{ left: "19px", top: "40px", bottom: "40px" }}
        />
        {/* Progress line — scroll-driven fill */}
        <motion.div
          className="absolute w-[2px] bg-primary origin-top"
          style={{
            left: "19px",
            top: "40px",
            bottom: "40px",
            scaleY: scrollYProgress,
          }}
        />

        {/* Milestones */}
        <div className="flex flex-col gap-8">
          {itinerary.map((day, index) => (
            <Milestone
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

function Milestone({
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
  const threshold = total > 1 ? index / (total - 1) : 0;
  const isActive = useTransform(progress, (v) => v >= threshold - 0.05);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex gap-5"
    >
      {/* Circle column — fixed width */}
      <div className="flex flex-col items-center shrink-0 pt-5" style={{ width: "40px" }}>
        <motion.div
          className="w-10 h-10 rounded-full border-[3px] flex items-center justify-center z-10 bg-white"
          style={{
            backgroundColor: useTransform(isActive, (v) =>
              v ? "#6B1D2A" : "#ffffff"
            ),
            borderColor: useTransform(isActive, (v) =>
              v ? "#6B1D2A" : "rgba(107,29,42,0.3)"
            ),
          }}
        >
          <motion.span
            className="text-sm font-bold"
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

      {/* Content card */}
      <div className="flex-1 bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-light/30 hover:shadow-md transition-shadow min-w-0">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="min-w-0">
            <span className="inline-block bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2 font-[var(--font-body)]">
              Day {day.day}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-dark">{day.title}</h3>
          </div>
          <span className="bg-cream text-primary text-xs px-3 py-1.5 rounded-full shrink-0 font-semibold font-[var(--font-body)] border border-primary/10">
            {day.stay}
          </span>
        </div>
        <p className="text-gray text-sm leading-relaxed font-[var(--font-body)]">
          {day.description}
        </p>
      </div>
    </motion.div>
  );
}
