"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/config";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Toggle body class so WhatsApp button can hide
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("drawer-open");
    } else {
      document.body.classList.remove("drawer-open");
    }
    return () => document.body.classList.remove("drawer-open");
  }, [isOpen]);

  const isHome = pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : isHome
          ? "bg-transparent"
          : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Logo
              size="sm"
              color={isScrolled ? "dark" : "light"}
            />
            <div>
              <h1
                className={`text-xl font-bold leading-tight transition-colors ${
                  isScrolled ? "text-primary" : "text-white"
                }`}
              >
                {siteConfig.name}
              </h1>
              <p
                className={`text-[10px] tracking-[0.2em] uppercase transition-colors ${
                  isScrolled ? "text-primary-light" : "text-white/80"
                }`}
              >
                {siteConfig.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide transition-colors ${
                  isScrolled
                    ? pathname === link.href
                      ? "text-primary"
                      : "text-dark hover:text-primary"
                    : pathname === link.href
                    ? "text-accent"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                      isScrolled ? "bg-primary" : "bg-accent"
                    }`}
                  />
                )}
              </Link>
            ))}
            <a
              href={`tel:+91${siteConfig.phone}`}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isScrolled
                  ? "bg-primary text-white hover:bg-primary-light"
                  : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
              }`}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-dark" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer — slides from right */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="md:hidden fixed top-0 right-0 h-full w-full bg-white z-50 shadow-2xl flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-light">
                <div className="flex items-center gap-2">
                  <Logo size="sm" color="dark" />
                  <span className="font-bold text-primary text-sm">{siteConfig.name}</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-full bg-cream flex items-center justify-center text-dark"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex-1 py-6 px-5">
                <nav className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center py-3 px-4 rounded-xl text-base font-medium transition-all ${
                          pathname === link.href
                            ? "bg-primary/10 text-primary"
                            : "text-dark hover:bg-cream hover:text-primary"
                        }`}
                      >
                        {link.label}
                        {pathname === link.href && (
                          <div className="ml-auto w-2 h-2 rounded-full bg-primary" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Drawer footer — contact info */}
              <div className="p-5 border-t border-gray-light bg-cream/50 space-y-3">
                <a
                  href={`tel:+91${siteConfig.phone}`}
                  className="flex items-center gap-3 text-sm text-dark font-medium font-[var(--font-body)]"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  +91 {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-sm text-gray font-[var(--font-body)]"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  {siteConfig.email}
                </a>
                <a
                  href={siteConfig.whatsappLink("Hi! I'd like to know about your packages.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 rounded-xl text-sm font-semibold mt-3 font-[var(--font-body)]"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
