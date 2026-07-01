import Hero from "@/components/Hero";
import DestinationGrid from "@/components/DestinationGrid";
import FeaturedPackages from "@/components/FeaturedPackages";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <DestinationGrid />
      <FeaturedPackages />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  );
}
