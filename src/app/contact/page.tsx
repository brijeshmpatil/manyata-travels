import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Manyata Travels",
  description: "Get in touch with Manyata Travels for bookings, enquiries, and custom trip planning. We respond on WhatsApp!",
};

export default function ContactPage() {
  return <ContactClient />;
}
