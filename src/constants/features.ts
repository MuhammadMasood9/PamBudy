import { LucideIcon } from "lucide-react";
import { ShoppingCart, Bot, CalendarClock, Users, Wallet, Lightbulb } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export const FEATURES: Feature[] = [
  {
    icon: ShoppingCart,
    title: "Shop Baby & Women's Essentials",
    description: "Browse 100+ categories of baby and women's products from top brands. Add to cart, read reviews, and buy with ease.",
    color: "bg-baby-pink-light text-primary",
  },
  {
    icon: Bot,
    title: "AI Health & Parenting Coach",
    description: "Ask Fatima — your personal AI assistant for health questions, parenting advice, mood tracking, and personalized daily insights for every woman.",
    color: "bg-baby-yellow-light text-accent-foreground",
  },
  {
    icon: CalendarClock,
    title: "Smart Subscriptions",
    description: "Set up weekly, semi-monthly, or monthly auto-deliveries for essentials. Never run out of diapers, formula, or personal care products again.",
    color: "bg-baby-peach text-primary",
  },
  {
    icon: Users,
    title: "Women's Community",
    description: "Connect with women and moms, share experiences, ask questions, and post anonymously. A safe space built for every woman.",
    color: "bg-baby-cream text-secondary-foreground",
  },
  {
    icon: Wallet,
    title: "Pam Wallet & Coins",
    description: "Earn Pam Coins on purchases, enjoy exclusive discounts, and manage your spending with the built-in wallet system.",
    color: "bg-baby-pink-light text-primary",
  },
  {
    icon: Lightbulb,
    title: "Daily Insights",
    description: "Get personalized wellness insights, daily tips, and child development activities — tailored to your lifestyle and stage of life.",
    color: "bg-baby-yellow-light text-accent-foreground",
  },
];

export const FEATURES_SECTION = {
  BADGE: "Why Pambuddy?",
  TITLE: "Everything a Woman Needs",
  DESCRIPTION: "From shopping essentials to AI-powered health guidance — Pambuddy is the all-in-one companion for every modern woman.",
} as const;
