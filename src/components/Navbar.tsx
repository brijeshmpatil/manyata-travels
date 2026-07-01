"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-light overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block text-lg font-medium py-2 ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-dark hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:+91${siteConfig.phone}`}
                className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-medium w-fit"
              >
                <Phone className="w-4 h-4" />
                +91 {siteConfig.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
