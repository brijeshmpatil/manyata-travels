import { packages } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Packages | Manyata Travels",
  description: "Explore our curated North India tour packages. Ladakh, Kashmir, Manali, Shimla and more.",
};

export default function PackagesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-44 sm:pt-40 pb-16 px-4">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3 font-[var(--font-body)]">
            Our Offerings
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Tour Packages</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto font-[var(--font-body)]">
            Choose from our carefully curated North India packages. Each journey is
            designed to give you an unforgettable experience.
          </p>
        </div>
      </section>

      {/* Package Grid */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <PackageCard key={pkg.slug} pkg={pkg} index={index} />
            ))}
          </div>

          {/* Coming soon placeholder */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-12 max-w-2xl mx-auto shadow-sm">
              <h3 className="text-2xl font-bold text-dark mb-3">More Packages Coming Soon</h3>
              <p className="text-gray font-[var(--font-body)]">
                We&apos;re adding new destinations regularly — Rishikesh, Jaipur, Varanasi, Amritsar and more.
                Contact us for custom trip planning!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
