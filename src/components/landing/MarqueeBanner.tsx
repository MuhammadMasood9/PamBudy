import { Tag, Sparkles, Star, Truck, Gift, Zap } from "lucide-react";

const items = [
  { icon: Tag, text: "Up to 50% OFF on Diapers" },
  { icon: Star, text: "Pampers — Top Rated Brand" },
  { icon: Zap, text: "Flash Sale: Baby Formula" },
  { icon: Truck, text: "Free Delivery on Orders $30+" },
  { icon: Gift, text: "Earn Pam Coins on Every Purchase" },
  { icon: Sparkles, text: "New: Bonpapa Skincare Range" },
  { icon: Tag, text: "Buy 2 Get 1 Free on Wipes" },
  { icon: Star, text: "Johnson's Baby — 30% OFF" },
  { icon: Zap, text: "Limited Offer: Baby Bottles" },
  { icon: Truck, text: "Same-Day Delivery Available" },
  { icon: Gift, text: "First Order? Get 15% OFF" },
  { icon: Sparkles, text: "Huggies — Best Sellers" },
];

const MarqueeBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary via-pink-500 to-primary overflow-hidden py-2.5">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-2 text-primary-foreground text-sm font-semibold mx-8"
          >
            <item.icon className="w-3.5 h-3.5 flex-shrink-0" />
            {item.text}
            <span className="mx-4 opacity-50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
