"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { siteConfig } from "@/data/config";
import { packages } from "@/data/packages";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    travelDate: "",
    destination: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = siteConfig.contactFormMessage(formData);
    const url = siteConfig.whatsappLink(message);
    window.open(url, "_blank");
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-44 sm:pt-40 pb-20 px-4">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1585136917767-14b41e43e660?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent text-sm tracking-[0.2em] uppercase mb-3 font-[var(--font-body)]"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg max-w-2xl mx-auto font-[var(--font-body)]"
          >
            Have questions? Fill out the form and we&apos;ll connect with you instantly on WhatsApp!
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollAnimation>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-dark mb-2">Send Us an Enquiry</h2>
                  <p className="text-gray text-sm mb-8 font-[var(--font-body)]">
                    Fill in your details and click submit — it will open WhatsApp with your
                    enquiry pre-filled. Just hit send!
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-dark mb-2 font-[var(--font-body)]">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => updateField("name", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-[var(--font-body)]"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark mb-2 font-[var(--font-body)]">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-[var(--font-body)]"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-dark mb-2 font-[var(--font-body)]">
                          Email
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-[var(--font-body)]"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark mb-2 font-[var(--font-body)]">
                          Preferred Travel Date
                        </label>
                        <input
                          type="date"
                          value={formData.travelDate}
                          onChange={(e) => updateField("travelDate", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-[var(--font-body)]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-dark mb-2 font-[var(--font-body)]">
                          Destination
                        </label>
                        <select
                          value={formData.destination}
                          onChange={(e) => updateField("destination", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white font-[var(--font-body)]"
                        >
                          <option value="">Select destination</option>
                          {packages.map((pkg) => (
                            <option key={pkg.slug} value={pkg.title}>
                              {pkg.title}
                            </option>
                          ))}
                          <option value="Custom">Custom / Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark mb-2 font-[var(--font-body)]">
                          Number of Guests
                        </label>
                        <input
                          type="number"
                          min="1"
                          value={formData.guests}
                          onChange={(e) => updateField("guests", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-[var(--font-body)]"
                          placeholder="e.g. 4"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark mb-2 font-[var(--font-body)]">
                        Your Message
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => updateField("message", e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gray-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none font-[var(--font-body)]"
                        placeholder="Tell us about your travel plans, preferences, or any questions..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white py-4 rounded-xl text-base font-semibold transition-colors shadow-lg font-[var(--font-body)]"
                    >
                      <Send className="w-5 h-5" />
                      Send Enquiry via WhatsApp
                    </motion.button>
                  </form>
                </div>
              </ScrollAnimation>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ScrollAnimation direction="right">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-lg font-bold text-dark mb-6">Contact Information</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-dark text-sm">Office Address</p>
                        <p className="text-gray text-sm font-[var(--font-body)]">
                          {siteConfig.address.full}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-dark text-sm">Phone / WhatsApp</p>
                        <a
                          href={`tel:+91${siteConfig.phone}`}
                          className="text-primary text-sm font-medium font-[var(--font-body)]"
                        >
                          +91 {siteConfig.phone}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-dark text-sm">Email</p>
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="text-primary text-sm font-medium font-[var(--font-body)]"
                        >
                          {siteConfig.email}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-dark text-sm">Working Hours</p>
                        <p className="text-gray text-sm font-[var(--font-body)]">
                          Mon – Sat: 10:00 AM – 7:00 PM
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="right" delay={0.1}>
                <a
                  href={siteConfig.whatsappLink("Hi! I'd like to discuss my travel plans.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#25D366] text-white p-6 rounded-2xl shadow-lg hover:bg-[#20BD5A] transition-colors"
                >
                  <MessageCircle className="w-8 h-8" />
                  <div>
                    <p className="font-bold">Chat on WhatsApp</p>
                    <p className="text-white/80 text-sm font-[var(--font-body)]">
                      Quick response guaranteed
                    </p>
                  </div>
                </a>
              </ScrollAnimation>

              {/* Map */}
              <ScrollAnimation direction="right" delay={0.2}>
                <div className="rounded-2xl overflow-hidden h-64 shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836.5!2d75.008!3d15.458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI3JzI4LjgiTiA3NcKwMDAnMjguOCJF!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Manyata Travels Office"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
