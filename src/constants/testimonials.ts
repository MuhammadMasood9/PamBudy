export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Fatima H.",
    role: "Mom of 2",
    quote: "Pambuddy changed my life! The subscription feature means I never run out of diapers, and the AI coach gives me peace of mind about my baby's health.",
    rating: 5,
    avatar: "F",
  },
  {
    name: "Ayesha K.",
    role: "First-time mom",
    quote: "The community feature is amazing — I found so many mothers going through the same things. And the shopping discounts with Pam Coins are a bonus!",
    rating: 5,
    avatar: "A",
  },
  {
    name: "Tahmeeda S.",
    role: "Mom of twins",
    quote: "I love how I can set up weekly deliveries for different products. The AI insights about my mood and kids' development are incredibly helpful.",
    rating: 5,
    avatar: "T",
  },
  {
    name: "Maryam R.",
    role: "Working mom",
    quote: "Finally an app that understands what mothers really need. Shopping, advice, and community all in one place. The Ask Fatima feature is brilliant!",
    rating: 5,
    avatar: "M",
  },
];

export const TESTIMONIALS_SECTION = {
  BADGE: "Testimonials",
  TITLE: "Loved by Mothers Everywhere",
  DESCRIPTION: "Join thousands of happy mothers who trust Pambuddy for their parenting journey.",
} as const;
