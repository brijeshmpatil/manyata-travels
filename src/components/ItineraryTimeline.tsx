"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import type { ItineraryDay } from "@/data/packages";

interface ItineraryTimelineProps {
  itinerary: ItineraryDay[];
}

export default function ItineraryTimeline({ itinerary }: ItineraryTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastDotRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 60%"],
  });

  // Track which milestones the line has reached
  const [activeIndex, setActiveIndex] = useState(-1);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const count = itinerary.length;
    const idx = Math.floor(v * count);
    const clamped = Math.min(idx, count - 1);
    if (clamped > activeIndex) {
      setActiveIndex(clamped);
    }
  });

  // Dynamically calculate line height: from first dot center to last dot center
  const updateLineHeight = useCallback(() => {
    if (!containerRef.current || !lastDotRef.current) return;
    const containerTop = containerRef.current.getBoundingClientRect().top;
    const lastDotRect = lastDotRef.current.getBoundingClientRect();
    const lastDotCenter = lastDotRect.top + lastDotRect.height / 2 - containerTop;
    // First dot center is at top: 40px (pt-5=20px + half of 40px circle = 20px)
    const firstDotCenter = 40;
    setLineHeight(lastDotCenter - firstDotCenter);
  }, []);

  useEffect(() => {
    updateLineHeight();
    window.addEventListener("resize", updateLineHeight);
    return () => window.removeEventListener("resize", updateLineHeight);
  }, [updateLineHeight]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-dark mb-10">Day-by-Day Itinerary</h2>

      <div ref={containerRef} className="relative">
        {/* Track line — dynamic height from first to last dot */}
        <div
          className="absolute w-[2px] bg-primary/12 left-[19px]"
          style={{ top: "40px", height: lineHeight > 0 ? `${lineHeight}px` : "0px" }}
        />
        {/* Progress line — scroll-driven fill */}
        <motion.div
          className="absolute w-[2px] bg-primary origin-top left-[19px]"
          style={{
            top: "40px",
            height: lineHeight > 0 ? `${lineHeight}px` : "0px",
            scaleY: scrollYProgress,
          }}
        />

        {/* Milestones */}
        <div className="flex flex-col gap-6">
          {itinerary.map((day, index) => (
            <Milestone
              key={day.day}
              day={day}
              index={index}
              isActive={index <= activeIndex}
              isLast={index === itinerary.length - 1}
              lastDotRef={index === itinerary.length - 1 ? lastDotRef : undefined}
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
  isActive,
  isLast,
  lastDotRef,
}: {
  day: ItineraryDay;
  index: number;
  isActive: boolean;
  isLast: boolean;
  lastDotRef?: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex gap-4 sm:gap-5"
    >
      {/* Circle column */}
      <div className="flex flex-col items-center shrink-0 pt-5" style={{ width: "40px" }}>
        <div
          ref={isLast ? lastDotRef : undefined}
          className={`w-10 h-10 rounded-full border-[3px] flex items-center justify-center z-10 transition-all duration-500 ${
            isActive
              ? "bg-primary border-primary shadow-md"
              : "bg-white border-primary/25"
          }`}
        >
          <span
            className={`text-sm font-bold transition-colors duration-500 ${
              isActive ? "text-white" : "text-primary/50"
            }`}
          >
            {day.day}
          </span>
        </div>
      </div>

      {/* Content card */}
      <div
        className={`flex-1 rounded-2xl p-5 sm:p-6 border transition-all duration-500 min-w-0 ${
          isActive
            ? "bg-white shadow-md border-gray-light/30"
            : "bg-gray-light/20 shadow-none border-gray-light/20"
        }`}
      >
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="min-w-0">
            <span
              className={`inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2 font-[var(--font-body)] transition-colors duration-500 ${
                isActive ? "bg-primary/10 text-primary" : "bg-gray-light/50 text-gray"
              }`}
            >
              Day {day.day}
            </span>
            <h3
              className={`text-base sm:text-lg font-bold transition-colors duration-500 ${
                isActive ? "text-dark" : "text-gray"
              }`}
            >
              {day.title}
            </h3>
          </div>
          <span
            className={`text-xs px-3 py-1.5 rounded-full shrink-0 font-semibold font-[var(--font-body)] border transition-colors duration-500 ${
              isActive
                ? "bg-cream text-primary border-primary/10"
                : "bg-gray-light/30 text-gray border-gray-light/30"
            }`}
          >
            {day.stay}
          </span>
        </div>
        <p
          className={`text-sm leading-relaxed font-[var(--font-body)] transition-colors duration-500 ${
            isActive ? "text-gray" : "text-gray/50"
          }`}
        >
          {day.description}
        </p>
      </div>
    </motion.div>
  );
}
