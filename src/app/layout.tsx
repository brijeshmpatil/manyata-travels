import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manyata Travels | The Royal & Loyal Journey – North India Tours",
  description:
    "Discover North India with Manyata Travels. Handcrafted tour packages to Ladakh, Kashmir, Manali, Shimla & more. Trusted travel agency based in Dharwad, Karnataka.",
  keywords:
    "Manyata Travels, North India tours, Ladakh tour, Kashmir tour, Manali Shimla tour, travel agency Dharwad, tour packages India",
  openGraph: {
    title: "Manyata Travels | The Royal & Loyal Journey",
    description:
      "Handcrafted North India tour packages. Ladakh, Kashmir, Manali & more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
