import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import DestinationGrid from "@/components/DestinationGrid";
import FeaturedPackages from "@/components/FeaturedPackages";
import ParallaxDivider from "@/components/ParallaxDivider";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <DestinationGrid />
      <FeaturedPackages />

      {/* Parallax divider between packages and Why Us */}
      <ParallaxDivider
        image="https://images.unsplash.com/photo-1597074866923-dc0589150458?w=1920&q=80"
        height="h-48 sm:h-64"
        overlay="bg-dark/70"
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-2 font-[var(--font-body)]">
            Your Journey Awaits
          </p>
          <p className="text-xl sm:text-2xl font-bold">
            Every destination tells a story. Let us write yours.
          </p>
        </div>
      </ParallaxDivider>

      <WhyChooseUs />
      <Testimonials />

      {/* Parallax divider before CTA */}
      <ParallaxDivider
        image="https://images.unsplash.com/photo-1585136917767-14b41e43e660?w=1920&q=80"
        height="h-40 sm:h-56"
        overlay="bg-primary/70"
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-2xl sm:text-3xl font-bold">
            <span className="text-accent">500+</span> travellers have trusted us with their dreams
          </p>
        </div>
      </ParallaxDivider>

      <CTABanner />
    </>
  );
}
