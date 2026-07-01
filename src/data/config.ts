export const siteConfig = {
  name: "Manyata Travels",
  tagline: "The Royal & Loyal Journey",
  phone: "9742026462",
  whatsapp: "919742026462",
  email: "manyatatravels1@gmail.com",
  address: {
    building: "Matoshree Mall",
    detail: "Shop No. 5, First Floor",
    street: "Line Bazaar",
    city: "Dharwad",
    pincode: "580001",
    state: "Karnataka",
    full: "Matoshree Mall, Shop No. 5, First Floor, Line Bazaar, Dharwad – 580001"
  },
  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#"
  },
  whatsappLink: (message: string) =>
    `https://wa.me/919742026462?text=${encodeURIComponent(message)}`,
  enquiryMessage: (packageName: string) =>
    `Hi! I'm interested in the *${packageName}* package from Manyata Travels. Could you please share more details about availability, pricing, and booking?`,
  contactFormMessage: (data: {
    name: string;
    phone: string;
    email: string;
    travelDate: string;
    destination: string;
    guests: string;
    message: string;
  }) =>
    `*New Enquiry from Website*\n\n` +
    `*Name:* ${data.name}\n` +
    `*Phone:* ${data.phone}\n` +
    `*Email:* ${data.email}\n` +
    `*Travel Date:* ${data.travelDate}\n` +
    `*Destination:* ${data.destination}\n` +
    `*Guests:* ${data.guests}\n` +
    `*Message:* ${data.message}`
};
