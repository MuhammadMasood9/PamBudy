import { LucideIcon } from "lucide-react";
import { Heart, Users, Target, Award } from "lucide-react";

export interface CompanyValue {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export const COMPANY_VALUES: CompanyValue[] = [
  {
    icon: Heart,
    title: "Empathy First",
    description: "We understand the challenges mothers face daily and design every feature with their needs in mind.",
    color: "bg-baby-pink-light text-primary",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "We believe in the power of mothers supporting mothers, creating a safe and welcoming space for all.",
    color: "bg-baby-yellow-light text-accent-foreground",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We continuously innovate to provide cutting-edge solutions that make motherhood easier and more enjoyable.",
    color: "bg-baby-peach text-primary",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from product quality to customer service.",
    color: "bg-baby-cream text-secondary-foreground",
  },
];

export const ABOUT_SECTIONS = {
  STORY: {
    TITLE: "Our Story",
    CONTENT: [
      "Pambuddy was born from a simple observation: motherhood is one of the most beautiful yet challenging journeys a woman can experience. We noticed that mothers were juggling multiple apps, websites, and tools just to manage their daily lives—shopping for baby essentials, seeking parenting advice, managing subscriptions, and connecting with other mothers.",
      "We envisioned a single, comprehensive platform that would bring everything a mother needs into one place. With AI-powered insights, seamless shopping experiences, smart subscription management, and a supportive community, Pambuddy became the perfect companion for modern mothers.",
      "Today, we're proud to serve over 50,000 mothers who trust Pambuddy to simplify their lives and enhance their parenting journey. Our mission remains unchanged: to be the perfect buddy for every mother, every step of the way.",
    ],
  },
  MISSION: {
    TITLE: "Our Mission",
    CONTENT: "To empower mothers with innovative technology, personalized support, and a caring community that makes motherhood more manageable, enjoyable, and fulfilling. We believe every mother deserves access to the best tools, resources, and support network to thrive in her parenting journey.",
  },
  DIFFERENTIATORS: {
    TITLE: "What Makes Us Different",
    ITEMS: [
      {
        TITLE: "All-in-One Platform",
        DESCRIPTION: "Unlike other apps that focus on a single aspect of motherhood, Pambuddy combines shopping, AI coaching, subscription management, community support, and wallet features in one seamless experience.",
      },
      {
        TITLE: "AI-Powered Insights",
        DESCRIPTION: "Our AI coach, Fatima, provides personalized parenting advice, health insights, mood tracking, and daily tips tailored to each mother's unique journey.",
      },
      {
        TITLE: "Community First",
        DESCRIPTION: "We've built a safe, supportive community where mothers can connect, share experiences, ask questions, and find encouragement from others who understand their journey.",
      },
      {
        TITLE: "Smart Subscriptions",
        DESCRIPTION: "Never run out of essentials again. Our intelligent subscription system helps mothers set up automatic deliveries for diapers, formula, and other baby products on their preferred schedule.",
      },
    ],
  },
  JOIN: {
    TITLE: "Join Our Journey",
    DESCRIPTION: "We're constantly evolving and improving based on feedback from our community. Your voice matters, and we're committed to making Pambuddy the best possible companion for mothers everywhere.",
  },
} as const;
