export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  stay: string;
}

export interface TravelPackage {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  days: number;
  nights: number;
  price: number;
  priceNote: string;
  destinations: string[];
  heroImage: string;
  cardImage: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  featured: boolean;
}

export const packages: TravelPackage[] = [
  {
    slug: "ladakh-leh-2026",
    title: "Ladakh – Leh",
    subtitle: "Where Mountains Touch the Sky",
    duration: "6 Days / 5 Nights",
    days: 6,
    nights: 5,
    price: 32600,
    priceNote: "Excluding Flights",
    destinations: ["Leh", "Khardung La", "Nubra Valley", "Pangong Lake", "Tso Moriri"],
    heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80",
    cardImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    highlights: ["Shanti Stupa", "Camel Safari", "Khardung La Pass", "Pangong Lake", "Diskit Monastery", "Leh Market"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Leh",
        description: "Early morning flight towards Srinagar. Upon arrival at Leh Airport, transfer to the hotel and rest for acclimatization due to the high altitude. In the evening, visit Shanti Stupa and Leh Palace for beautiful sunset views, followed by a stroll through the local Leh Market.",
        stay: "Leh"
      },
      {
        day: 2,
        title: "Leh Local Sightseeing",
        description: "After breakfast, proceed for local sightseeing covering Hall of Fame, Magnetic Hill, Indus–Zanskar Confluence and Gurudwara Pathar Sahib. Return to Leh by evening and enjoy leisure time at the market or cafes.",
        stay: "Leh"
      },
      {
        day: 3,
        title: "Leh to Nubra Valley",
        description: "After breakfast, drive towards Nubra Valley via the world-famous Khardung La Pass. Upon arrival, visit Diskit Monastery and enjoy the double-humped camel ride at Hunder Sand Dunes.",
        stay: "Nubra Valley"
      },
      {
        day: 4,
        title: "Nubra Valley to Pangong Lake",
        description: "Post breakfast, proceed towards the breathtaking Pangong Lake via the scenic Shyok route. On arrival, witness the changing shades of the crystal-clear lake surrounded by majestic mountains.",
        stay: "Pangong Camp"
      },
      {
        day: 5,
        title: "Pangong Lake to Leh",
        description: "After enjoying the sunrise at Pangong Lake, drive back to Leh via Chang La Pass. En route, visit Thiksey Monastery and Shey Palace. Reach Leh by evening and relax at the hotel.",
        stay: "Leh"
      },
      {
        day: 6,
        title: "Leisure / Monastery Visit & Departure",
        description: "After breakfast, enjoy a relaxed day exploring nearby attractions such as Hemis Monastery or spend time shopping for local handicrafts, pashmina shawls and souvenirs in Leh Market. Transfer to Leh Airport for your onward journey.",
        stay: "Departure"
      }
    ],
    inclusions: [
      "Travel by comfortable A/C or non-A/C vehicles depending on group size",
      "Accommodation in 3-Star hotels on twin-sharing basis",
      "Morning tea/coffee, breakfast, dinner, and two 1L water bottles per person per day",
      "Guide and driver tips, hotel and restaurant tips"
    ],
    exclusions: [
      "Flight tickets (booking assistance available, charges as per bill)",
      "Lunch (except as specified in inclusions)",
      "Vehicle not at disposal on any of the islands",
      "Other meals, laundry, telephone calls, and incidentals",
      "Personal expenses, room service, alcoholic and non-alcoholic beverages",
      "Expenses arising due to unforeseen circumstances",
      "Horse riding, adventure activity tickets and any tips"
    ],
    featured: true
  },
  {
    slug: "kashmir-paradise-2026",
    title: "Kashmir – Paradise on Earth",
    subtitle: "Experience Heaven's Own Valley",
    duration: "7 Days / 6 Nights",
    days: 7,
    nights: 6,
    price: 28500,
    priceNote: "Excluding Flights",
    destinations: ["Srinagar", "Gulmarg", "Pahalgam", "Sonmarg"],
    heroImage: "https://images.unsplash.com/photo-1597074866923-dc0589150458?w=1920&q=80",
    cardImage: "https://images.unsplash.com/photo-1597074866923-dc0589150458?w=800&q=80",
    highlights: ["Dal Lake Shikara", "Gulmarg Gondola", "Betaab Valley", "Mughal Gardens", "Thajiwas Glacier", "Local Cuisine"],
    itinerary: [
      { day: 1, title: "Arrival in Srinagar", description: "Arrive at Srinagar Airport. Transfer to houseboat on Dal Lake. Evening Shikara ride watching the sunset over the lake. Overnight stay on houseboat.", stay: "Srinagar" },
      { day: 2, title: "Srinagar Local Sightseeing", description: "Visit the famous Mughal Gardens — Nishat Bagh, Shalimar Bagh, and Chashme Shahi. Explore the local markets and enjoy Kashmiri Wazwan cuisine.", stay: "Srinagar" },
      { day: 3, title: "Srinagar to Gulmarg", description: "Drive to Gulmarg, the 'Meadow of Flowers'. Enjoy Gondola ride (Phase 1 & 2) with panoramic views of Himalayan peaks. Optional skiing/snowboarding.", stay: "Gulmarg" },
      { day: 4, title: "Gulmarg to Pahalgam", description: "Drive to Pahalgam, the 'Valley of Shepherds'. Visit Betaab Valley and Aru Valley. Enjoy the scenic beauty and peaceful atmosphere.", stay: "Pahalgam" },
      { day: 5, title: "Pahalgam Exploration", description: "Full day exploring Pahalgam. Visit Chandanwari, enjoy horse riding, or take a leisurely walk along the Lidder River.", stay: "Pahalgam" },
      { day: 6, title: "Pahalgam to Sonmarg", description: "Drive to Sonmarg, the 'Meadow of Gold'. Visit the stunning Thajiwas Glacier. Enjoy the breathtaking views of snow-capped mountains.", stay: "Sonmarg" },
      { day: 7, title: "Departure", description: "After breakfast, drive back to Srinagar Airport for your onward journey with memories of paradise.", stay: "Departure" }
    ],
    inclusions: [
      "Travel by comfortable A/C or non-A/C vehicles depending on group size",
      "Accommodation in 3-Star hotels/houseboat on twin-sharing basis",
      "Morning tea/coffee, breakfast, dinner included",
      "Guide and driver tips included"
    ],
    exclusions: [
      "Flight tickets",
      "Lunch",
      "Personal expenses and beverages",
      "Adventure activity charges",
      "Gondola tickets",
      "Horse riding charges"
    ],
    featured: true
  },
  {
    slug: "manali-shimla-2026",
    title: "Manali – Shimla",
    subtitle: "Hills, Valleys & Colonial Charm",
    duration: "6 Days / 5 Nights",
    days: 6,
    nights: 5,
    price: 22500,
    priceNote: "Excluding Flights",
    destinations: ["Manali", "Solang Valley", "Rohtang Pass", "Kullu", "Shimla"],
    heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80",
    cardImage: "https://images.unsplash.com/photo-1585136917767-14b41e43e660?w=800&q=80",
    highlights: ["Solang Valley", "Rohtang Pass", "Hadimba Temple", "Mall Road Shimla", "Kullu Valley", "Toy Train"],
    itinerary: [
      { day: 1, title: "Arrival in Manali", description: "Arrive in Manali. Check into hotel and rest. Evening visit to Mall Road and Hadimba Temple.", stay: "Manali" },
      { day: 2, title: "Solang Valley Excursion", description: "Full day excursion to Solang Valley. Enjoy adventure activities like paragliding, zorbing, and rope-way. Visit Atal Tunnel.", stay: "Manali" },
      { day: 3, title: "Rohtang Pass / Sissu", description: "Drive to Rohtang Pass (subject to permit). Enjoy snow activities and stunning views. Visit Sissu waterfall on return.", stay: "Manali" },
      { day: 4, title: "Manali to Shimla", description: "Scenic drive from Manali to Shimla via Kullu Valley. Stop at Kullu for river rafting (optional). Reach Shimla by evening.", stay: "Shimla" },
      { day: 5, title: "Shimla Sightseeing", description: "Visit The Ridge, Mall Road, Christ Church, Jakhoo Temple, and Kufri. Enjoy the colonial charm of this hill station.", stay: "Shimla" },
      { day: 6, title: "Departure", description: "After breakfast, transfer to Chandigarh Airport/Railway Station for your onward journey.", stay: "Departure" }
    ],
    inclusions: [
      "Travel by comfortable A/C Volvo or similar vehicle",
      "Accommodation in 3-Star hotels on twin-sharing basis",
      "Breakfast and dinner included",
      "All toll taxes and parking charges"
    ],
    exclusions: [
      "Flight/train tickets",
      "Lunch and beverages",
      "Adventure activity charges",
      "Rohtang Pass permit fees",
      "Personal expenses"
    ],
    featured: true
  }
];

export function getPackageBySlug(slug: string): TravelPackage | undefined {
  return packages.find(p => p.slug === slug);
}

export function getFeaturedPackages(): TravelPackage[] {
  return packages.filter(p => p.featured);
}
