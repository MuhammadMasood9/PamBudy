import { LucideIcon } from "lucide-react";
import { Download, UserPlus, ShoppingBag, Sparkles } from "lucide-react";

export interface HowItWorksStep {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    icon: Download,
    step: "01",
    title: "Download & Sign Up",
    description: "Get the app for free and create your account with email or Google sign-in.",
  },
  {
    icon: UserPlus,
    step: "02",
    title: "Set Up Your Profile",
    description: "Tell us about your lifestyle, kids, preferences, and interests — so we can personalize everything just for you.",
  },
  {
    icon: ShoppingBag,
    step: "03",
    title: "Shop & Subscribe",
    description: "Browse baby and women's products, set up auto-delivery subscriptions, and never run out of your essentials.",
  },
  {
    icon: Sparkles,
    step: "04",
    title: "Get AI Insights",
    description: "Ask Fatima anything — get daily wellness insights, health tips, parenting advice, and connect with a community of women.",
  },
];

export const HOW_IT_WORKS_SECTION = {
  BADGE: "How It Works",
  TITLE: "Get Started in Minutes",
  DESCRIPTION: "Four simple steps to transform your everyday life — as a woman, a mother, or both.",
} as const;
