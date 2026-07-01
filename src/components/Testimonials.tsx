"use client";

import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import ScrollAnimation from "./ScrollAnimation";

export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-14">
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3 font-[var(--font-body)]">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark">
              What Our Travellers Say
            </h2>
          </div>
        </ScrollAnimation>

        {/* Stack on mobile, grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <ScrollAnimation key={testimonial.name} delay={index * 0.1}>
              <div className="bg-cream rounded-2xl p-8 flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-dark/80 text-sm leading-relaxed mb-6 flex-1 font-[var(--font-body)]">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-dark text-sm">{testimonial.name}</p>
                    <p className="text-gray text-xs font-[var(--font-body)]">
                      {testimonial.trip} &middot; {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Second row */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {testimonials.slice(3).map((testimonial, index) => (
            <ScrollAnimation key={testimonial.name} delay={index * 0.1}>
              <div className="bg-cream rounded-2xl p-8 flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-dark/80 text-sm leading-relaxed mb-6 flex-1 font-[var(--font-body)]">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-dark text-sm">{testimonial.name}</p>
                    <p className="text-gray text-xs font-[var(--font-body)]">
                      {testimonial.trip} &middot; {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
