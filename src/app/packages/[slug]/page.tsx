import { notFound } from "next/navigation";
import { packages, getPackageBySlug } from "@/data/packages";
import { siteConfig } from "@/data/config";
import PackageDetailClient from "./PackageDetailClient";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return { title: "Package Not Found" };

  return {
    title: `${pkg.title} – ${pkg.duration} | Manyata Travels`,
    description: `${pkg.subtitle}. ${pkg.duration} tour covering ${pkg.destinations.join(", ")}. Starting at ₹${pkg.price.toLocaleString("en-IN")} per person.`,
  };
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  const whatsappUrl = siteConfig.whatsappLink(siteConfig.enquiryMessage(pkg.title));

  return <PackageDetailClient pkg={pkg} whatsappUrl={whatsappUrl} />;
}
