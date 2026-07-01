"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";

const recentBookings = [
  { name: "Rahul S.", city: "Bangalore", package: "Ladakh – Leh", time: "2 hours ago" },
  { name: "Priya M.", city: "Mumbai", package: "Kashmir", time: "4 hours ago" },
  { name: "Amit K.", city: "Pune", package: "Manali – Shimla", time: "5 hours ago" },
  { name: "Sneha D.", city: "Hubli", package: "Ladakh – Leh", time: "6 hours ago" },
  { name: "Vikram J.", city: "Dharwad", package: "Kashmir", time: "8 hours ago" },
  { name: "Pooja R.", city: "Hyderabad", package: "Ladakh – Leh", time: "12 hours ago" },
];

export default function SocialProofToast() {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);

  const showNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = (prev + 1) % recentBookings.length;
      return next;
    });
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 4000);
  }, []);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      showNext();
    }, 15000);

    const interval = setInterval(() => {
      showNext();
    }, 25000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [showNext]);

  const booking = currentIndex >= 0 ? recentBookings[currentIndex] : null;

  return (
    <AnimatePresence>
      {isVisible && booking && (
        <motion.div
          initial={{ opacity: 0, x: -100, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", damping: 20 }}
          className="fixed bottom-6 left-4 sm:left-6 z-40 bg-white rounded-2xl shadow-2xl border border-gray-light/50 p-4 max-w-xs"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-dark text-sm font-semibold font-[var(--font-body)]">
                {booking.name} from {booking.city}
              </p>
              <p className="text-gray text-xs font-[var(--font-body)]">
                booked <span className="text-primary font-medium">{booking.package}</span>
              </p>
              <p className="text-gray/60 text-[10px] mt-1 font-[var(--font-body)]">
                {booking.time}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
