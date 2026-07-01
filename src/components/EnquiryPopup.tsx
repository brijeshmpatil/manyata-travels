"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Gift } from "lucide-react";
import { siteConfig } from "@/data/config";

export default function EnquiryPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("popup-dismissed");
    if (dismissed) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("popup-dismissed", "true");
  };

  const handleEnquire = () => {
    const message =
      "Hi! I saw the special offer on your website. I'd like to know more about your North India packages and the early bird discount!";
    window.open(siteConfig.whatsappLink(message), "_blank");
    handleClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 z-[200] backdrop-blur-sm"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 40 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[201] w-[90%] max-w-md"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              {/* Header image */}
              <div
                className="relative h-44 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/30" />
                <button
                  onClick={handleClose}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                  aria-label="Close popup"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Gift className="w-5 h-5 text-accent" />
                    <span className="text-accent text-xs font-bold uppercase tracking-wider font-[var(--font-body)]">
                      Special Offer
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold leading-tight">
                    Plan Your Dream Trip to North India!
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray text-sm mb-2 font-[var(--font-body)]">
                  Get <span className="text-primary font-bold">early bird discounts</span> on
                  our Ladakh, Kashmir & Manali packages. Limited slots available for this season!
                </p>

                <div className="flex items-center gap-2 mb-5 bg-cream rounded-xl p-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-xs text-dark font-medium font-[var(--font-body)]">
                    12 people are looking at packages right now
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleEnquire}
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white py-3.5 rounded-xl text-sm font-semibold transition-colors font-[var(--font-body)]"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Get Offer on WhatsApp
                  </button>
                  <button
                    onClick={handleClose}
                    className="text-gray text-xs hover:text-dark transition-colors font-[var(--font-body)]"
                  >
                    Maybe later
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
