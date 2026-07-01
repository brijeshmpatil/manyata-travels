import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquiryPopup from "@/components/EnquiryPopup";
import ScrollProgress from "@/components/ScrollProgress";
import SocialProofToast from "@/components/SocialProofToast";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <EnquiryPopup />
        <SocialProofToast />
      </body>
    </html>
  );
}
