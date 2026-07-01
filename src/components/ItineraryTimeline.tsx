"use client";

import { useRef } from "react";
import { motion, useScroll, useInView, useTransform } from "framer-motion";
import type { ItineraryDay } from "@/data/packages";

interface ItineraryTimelineProps {
  itinerary: ItineraryDay[];
}

export default function ItineraryTimeline({ itinerary }: ItineraryTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"],
  });

  // Clamp progress so line never overshoots past last circle
  const clampedProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-dark mb-10">Day-by-Day Itinerary</h2>

      <div ref={containerRef} className="relative">
        {/* Track line — static gray, from first circle center to last circle center */}
        <div
          className="absolute w-[2px] bg-primary/12"
          style={{ left: "19px", top: "40px", bottom: "calc(0% + 40px)" }}
        />
        {/* Progress line — scroll-driven fill, same start/end as track */}
        <motion.div
          className="absolute w-[2px] bg-primary origin-top"
          style={{
            left: "19px",
            top: "40px",
            bottom: "calc(0% + 40px)",
            scaleY: clampedProgress,
          }}
        />

        {/* Milestones */}
        <div className="flex flex-col gap-6">
          {itinerary.map((day, index) => (
            <Milestone
              key={day.day}
              day={day}
              index={index}
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
}: {
  day: ItineraryDay;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30% 0px -30% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex gap-4 sm:gap-5"
    >
      {/* Circle column */}
      <div className="flex flex-col items-center shrink-0 pt-5" style={{ width: "40px" }}>
        <div
          className={`w-10 h-10 rounded-full border-[3px] flex items-center justify-center z-10 transition-all duration-500 ${
            isInView
              ? "bg-primary border-primary shadow-md"
              : "bg-white border-primary/30"
          }`}
        >
          <span
            className={`text-sm font-bold transition-colors duration-500 ${
              isInView ? "text-white" : "text-primary"
            }`}
          >
            {day.day}
          </span>
        </div>
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
