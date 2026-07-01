"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxDividerProps {
  image: string;
  height?: string;
  overlay?: string;
  children?: React.ReactNode;
}

export default function ParallaxDivider({
  image,
  height = "h-64 sm:h-80",
  overlay = "bg-primary/60",
  children,
}: ParallaxDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className={`relative ${height} overflow-hidden`}>
      <motion.div
        style={{ y }}
        className="absolute inset-[-20%] bg-cover bg-center"
        initial={false}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
      </motion.div>
      <div className={`absolute inset-0 ${overlay}`} />
      {children && (
        <div className="relative z-10 h-full flex items-center justify-center text-white text-center px-4">
          {children}
        </div>
      )}
    </div>
  );
}
