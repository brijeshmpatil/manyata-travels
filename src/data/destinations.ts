export interface Destination {
  name: string;
  tagline: string;
  image: string;
  slug: string;
}

export const destinations: Destination[] = [
  {
    name: "Ladakh",
    tagline: "Land of High Passes",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    slug: "ladakh-leh-2026"
  },
  {
    name: "Kashmir",
    tagline: "Paradise on Earth",
    image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800&q=80",
    slug: "kashmir-paradise-2026"
  },
  {
    name: "Manali",
    tagline: "Valley of the Gods",
    image: "https://images.unsplash.com/photo-1626621331169-5f34be280ed9?w=800&q=80",
    slug: "manali-shimla-2026"
  },
  {
    name: "Rishikesh",
    tagline: "Yoga Capital of the World",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
    slug: ""
  },
  {
    name: "Jaipur",
    tagline: "The Pink City",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
    slug: ""
  },
  {
    name: "Varanasi",
    tagline: "The Spiritual Heart of India",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80",
    slug: ""
  }
];
