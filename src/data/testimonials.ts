export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  trip: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Rahul Sharma",
    location: "Bangalore",
    rating: 5,
    text: "Our Ladakh trip with Manyata Travels was absolutely incredible! Everything was perfectly organized — from the hotels to the travel routes. The team was always just a call away. Highly recommended!",
    trip: "Ladakh – Leh",
    avatar: "RS"
  },
  {
    name: "Priya Desai",
    location: "Mumbai",
    rating: 5,
    text: "Kashmir was a dream come true! The houseboat stay on Dal Lake was magical. Manyata Travels made sure every detail was taken care of. Will definitely book with them again.",
    trip: "Kashmir",
    avatar: "PD"
  },
  {
    name: "Amit Kulkarni",
    location: "Dharwad",
    rating: 5,
    text: "Best travel agency in Dharwad! We did the Manali-Shimla trip with our family and it was hassle-free. Great hotels, punctual drivers, and amazing food arrangements.",
    trip: "Manali – Shimla",
    avatar: "AK"
  },
  {
    name: "Sneha Patil",
    location: "Hubli",
    rating: 5,
    text: "What I loved most about Manyata Travels is their transparency. No hidden costs, no surprises. The Ladakh trip was worth every rupee. The team truly lives up to their 'Royal & Loyal Journey' tagline!",
    trip: "Ladakh – Leh",
    avatar: "SP"
  },
  {
    name: "Vikram Joshi",
    location: "Pune",
    rating: 5,
    text: "Booked our honeymoon trip to Kashmir through Manyata Travels. From the Shikara ride to Gulmarg Gondola — everything was perfectly planned. Thank you for making our special trip unforgettable!",
    trip: "Kashmir",
    avatar: "VJ"
  }
];
