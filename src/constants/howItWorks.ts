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
    description: "Tell us about your kids, preferences, skin type, and interests for personalized recommendations.",
  },
  {
    icon: ShoppingBag,
    step: "03",
    title: "Shop & Subscribe",
    description: "Browse products, set up auto-delivery subscriptions, and never run out of essentials.",
  },
  {
    icon: Sparkles,
    step: "04",
    title: "Get AI Insights",
    description: "Ask Fatima anything, get daily mood insights, parenting tips, and connect with the community.",
  },
];

export const HOW_IT_WORKS_SECTION = {
  BADGE: "How It Works",
  TITLE: "Get Started in Minutes",
  DESCRIPTION: "Four simple steps to transform your motherhood journey.",
} as const;
