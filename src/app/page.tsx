import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import DestinationGrid from "@/components/DestinationGrid";
import FeaturedPackages from "@/components/FeaturedPackages";
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
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  );
}
