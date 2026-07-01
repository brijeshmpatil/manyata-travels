import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Manyata Travels",
  description: "Learn about Manyata Travels — your trusted travel partner for North India tours based in Dharwad, Karnataka.",
};

export default function AboutPage() {
  return <AboutClient />;
}
