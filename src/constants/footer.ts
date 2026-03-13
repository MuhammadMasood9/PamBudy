import { ROUTES } from "./navigation";

export const FOOTER_LINKS = {
  FEATURES: ["Shopping", "AI Coach", "Subscriptions", "Community", "Wallet"],
  COMPANY: [
    { label: "About Us", href: ROUTES.ABOUT_US },
    { label: "Contact", href: ROUTES.CONTACT },
    { label: "Blog", href: "#" },
  ],
  LEGAL: [
    { label: "Privacy Policy", href: ROUTES.PRIVACY_POLICY },
    { label: "Terms of Service", href: ROUTES.TERMS_AND_CONDITIONS },
  ],
} as const;
