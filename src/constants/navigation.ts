export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Products", href: "#products" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Testimonials", href: "#testimonials" },
];

export const ROUTES = {
  HOME: "/",
  ABOUT_US: "/about-us",
  CONTACT: "/contact",
  PRIVACY_POLICY: "/privacy-policy",
  TERMS_AND_CONDITIONS: "/terms-and-conditions",
} as const;
