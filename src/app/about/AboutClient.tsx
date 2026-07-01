"use client";

import { motion } from "framer-motion";
import { Compass, Star, Headphones, Heart, Users, MapPin, Calendar, Award } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

const stats = [
  { icon: Users, value: "500+", label: "Happy Travellers" },
  { icon: MapPin, value: "15+", label: "Destinations" },
  { icon: Calendar, value: "100+", label: "Trips Completed" },
  { icon: Award, value: "5+", label: "Years Experience" },
];

const values = [
  {
    icon: Compass,
    title: "Curated Experiences",
    description: "Every trip is thoughtfully planned with handpicked stays, scenic routes, and authentic local experiences that go beyond the ordinary.",
  },
  {
    icon: Star,
    title: "Transparent Pricing",
    description: "What you see is what you pay. No hidden charges, no last-minute surprises. We believe in honest, upfront pricing for every package.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "From the moment you book to your safe return, our dedicated trip managers are available 24/7 to assist you with anything you need.",
  },
  {
    icon: Heart,
    title: "Travel with Trust",
    description: "Years of experience and hundreds of happy travellers vouch for our commitment to delivering royal and loyal journeys every single time.",
  },
];

export default function AboutClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-44 sm:pt-40 pb-20 px-4">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1920&q=80')",
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
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            About Manyata Travels
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg max-w-2xl mx-auto font-[var(--font-body)]"
          >
            Born from a passion for travel and a commitment to excellence, we bring
            you the finest North India experiences from the heart of Dharwad.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-dark mb-6">
                  The Royal & Loyal Journey
                </h2>
                <div className="space-y-4 text-gray text-sm leading-relaxed font-[var(--font-body)]">
                  <p>
                    Manyata Travels was founded with a simple vision — to make the
                    breathtaking beauty of North India accessible to everyone. Based in
                    Dharwad, Karnataka, we specialize in crafting memorable journeys to
                    the most stunning destinations across Northern India.
                  </p>
                  <p>
                    From the snow-capped passes of Ladakh to the serene houseboats of
                    Kashmir, from the adventure-filled valleys of Manali to the spiritual
                    ghats of Varanasi — we curate each trip with attention to every
                    detail.
                  </p>
                  <p>
                    Our tagline, &ldquo;The Royal & Loyal Journey,&rdquo; reflects our
                    commitment to providing premium experiences while staying true to our
                    values of honesty, transparency, and unwavering customer loyalty.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div
                  className="rounded-2xl overflow-hidden h-80 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800&q=80')",
                  }}
                />
                <div className="absolute -bottom-4 -left-4 bg-accent text-dark px-6 py-3 rounded-xl font-bold text-sm shadow-lg">
                  Est. Dharwad, Karnataka
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimation key={stat.label} delay={index * 0.1}>
                <div className="text-center text-white">
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-3xl sm:text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-white/70 text-sm font-[var(--font-body)]">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-14">
              <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3 font-[var(--font-body)]">
                Our Values
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark">
                What Sets Us Apart
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <ScrollAnimation key={value.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-3">{value.title}</h3>
                  <p className="text-gray text-sm leading-relaxed font-[var(--font-body)]">
                    {value.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Office */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-dark mb-4">Visit Our Office</h2>
            <p className="text-gray text-lg mb-8 font-[var(--font-body)]">
              Matoshree Mall, Shop No. 5, First Floor<br />
              Line Bazaar, Dharwad – 580001
            </p>
            <div className="rounded-2xl overflow-hidden h-80 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836.5!2d75.008!3d15.458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI3JzI4LjgiTiA3NcKwMDAnMjguOCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Manyata Travels Office Location"
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
