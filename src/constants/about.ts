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
    description: "We understand the challenges women face at every stage of life and design every feature with their real needs in mind.",
    color: "bg-baby-pink-light text-primary",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "We believe in the power of women supporting women — creating a safe, welcoming space for mothers, expecting moms, and all women.",
    color: "bg-baby-yellow-light text-accent-foreground",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We continuously innovate to bring cutting-edge AI tools, health insights, and shopping experiences tailored for women.",
    color: "bg-baby-peach text-primary",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do — from product quality to community experience and customer support.",
    color: "bg-baby-cream text-secondary-foreground",
  },
];

export const ABOUT_SECTIONS = {
  STORY: {
    TITLE: "Our Story",
    CONTENT: [
      "Pambuddy was born from a simple observation: women — whether mothers, expecting moms, or simply navigating daily life — deserve a smarter, more caring companion. We noticed women juggling multiple apps just to manage their lives: shopping for baby and personal essentials, seeking health and parenting advice, managing subscriptions, and trying to stay connected with others.",
      "We envisioned a single platform that brings everything a woman needs into one place. With AI-powered insights, seamless shopping for baby and women's products, smart subscription management, and a supportive community, Pambuddy became the perfect companion for every modern woman.",
      "Today, we're proud to serve over 50,000 women who trust Pambuddy to simplify their lives. Our mission remains unchanged: to be the perfect buddy for every woman, at every stage of her journey.",
    ],
  },
  MISSION: {
    TITLE: "Our Mission",
    CONTENT: "To empower every woman — mothers, expecting moms, and beyond — with innovative technology, personalized health and parenting support, and a caring community that makes life more manageable, fulfilling, and joyful.",
  },
  DIFFERENTIATORS: {
    TITLE: "What Makes Us Different",
    ITEMS: [
      {
        TITLE: "All-in-One Platform",
        DESCRIPTION: "Pambuddy combines baby and women's shopping, AI health coaching, subscription management, community support, and a wallet system — all in one seamless app built for women.",
      },
      {
        TITLE: "AI-Powered Insights",
        DESCRIPTION: "Our AI coach, Fatima, provides personalized health advice, parenting tips, mood tracking, and daily wellness insights tailored to each woman's unique lifestyle and stage of life.",
      },
      {
        TITLE: "Community First",
        DESCRIPTION: "We've built a safe, supportive community where women can connect, share experiences, ask questions, and find encouragement — whether they're mothers, expecting, or just here for themselves.",
      },
      {
        TITLE: "Smart Subscriptions",
        DESCRIPTION: "Never run out of essentials again. Our intelligent subscription system helps women set up automatic deliveries for diapers, formula, personal care products, and more on their preferred schedule.",
      },
    ],
  },
  JOIN: {
    TITLE: "Join Our Journey",
    DESCRIPTION: "We're constantly evolving based on feedback from our community of women. Your voice matters, and we're committed to making Pambuddy the best possible companion for every woman, everywhere.",
  },
} as const;
