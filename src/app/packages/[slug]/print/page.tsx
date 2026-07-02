import { notFound } from "next/navigation";
import { packages, getPackageBySlug } from "@/data/packages";
import PrintableItinerary from "./PrintableItinerary";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

export default async function PrintPage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  return <PrintableItinerary pkg={pkg} />;
}
