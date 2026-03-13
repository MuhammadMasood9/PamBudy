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
    quote: "Pambuddy changed my life! The subscription feature means I never run out of diapers, and the AI coach gives me real peace of mind about my baby's health.",
    rating: 5,
    avatar: "F",
  },
  {
    name: "Ayesha K.",
    role: "First-time mom",
    quote: "The community feature is amazing — I found so many women going through the same things. And the shopping discounts with Pam Coins are a huge bonus!",
    rating: 5,
    avatar: "A",
  },
  {
    name: "Sara N.",
    role: "Working woman",
    quote: "I use Pambuddy not just for baby products — the women's wellness section and Ask Fatima feature have been a game changer for my daily health routine.",
    rating: 5,
    avatar: "S",
  },
  {
    name: "Maryam R.",
    role: "Expecting mom",
    quote: "From pregnancy tips to baby shopping, Pambuddy covers everything. The AI insights are so personalized — it truly feels like a buddy that knows me.",
    rating: 5,
    avatar: "M",
  },
];

export const TESTIMONIALS_SECTION = {
  BADGE: "Testimonials",
  TITLE: "Loved by Women Everywhere",
  DESCRIPTION: "Join thousands of happy women and mothers who trust Pambuddy every day.",
} as const;
