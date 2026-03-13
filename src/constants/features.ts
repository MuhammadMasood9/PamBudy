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
    title: "Shop Baby Essentials",
    description: "Browse 100+ categories of baby products from top brands like Pampers, Bonpapa, and more. Add to cart, read reviews, and buy with ease.",
    color: "bg-baby-pink-light text-primary",
  },
  {
    icon: Bot,
    title: "AI Parenting Coach",
    description: "Ask Fatima — your personal AI assistant that answers health questions, provides daily insights, mood tracking, and expert parenting tips.",
    color: "bg-baby-yellow-light text-accent-foreground",
  },
  {
    icon: CalendarClock,
    title: "Smart Subscriptions",
    description: "Set up weekly, semi-monthly, or monthly auto-deliveries for essentials. Never run out of diapers or formula again.",
    color: "bg-baby-peach text-primary",
  },
  {
    icon: Users,
    title: "Mothers Community",
    description: "Connect with other moms, share experiences, ask questions, and post anonymously. A safe space to support each other.",
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
    description: "Get personalized mood insights, tips of the day, and child development activities like Peekaboo games for your kids.",
    color: "bg-baby-yellow-light text-accent-foreground",
  },
];

export const FEATURES_SECTION = {
  BADGE: "Why Pambuddy?",
  TITLE: "Everything a Mother Needs",
  DESCRIPTION: "From shopping essentials to AI-powered guidance — Pambuddy is the all-in-one companion for modern mothers.",
} as const;
