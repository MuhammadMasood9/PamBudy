import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Coins, Truck, BadgePercent, RefreshCcw, ShieldCheck, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const perks = [
  {
    icon: BadgePercent,
    title: "Exclusive In-App Deals",
    description: "Access members-only discounts up to 50% off on top baby brands — only available inside the app.",
    color: "bg-baby-pink-light text-primary",
    glow: "from-pink-100 to-pink-50",
  },
  {
    icon: Coins,
    title: "Earn Pam Coins",
    description: "Every purchase earns you Pam Coins. Redeem them for discounts, free products, or premium features.",
    color: "bg-baby-yellow-light text-yellow-600",
    glow: "from-yellow-100 to-yellow-50",
  },
  {
    icon: RefreshCcw,
    title: "Auto-Delivery Subscriptions",
    description: "Never run out of diapers or formula. Subscribe & save — get recurring orders delivered on your schedule.",
    color: "bg-baby-peach text-orange-500",
    glow: "from-orange-100 to-orange-50",
  },
  {
    icon: Truck,
    title: "Free Fast Delivery",
    description: "Free delivery on every order over $30. Same-day delivery available in select cities.",
    color: "bg-baby-pink-light text-primary",
    glow: "from-pink-100 to-pink-50",
  },
  {
    icon: ShieldCheck,
    title: "100% Safe & Authentic",
    description: "Every product is verified authentic. Backed by our quality guarantee and easy returns policy.",
    color: "bg-baby-yellow-light text-green-600",
    glow: "from-green-100 to-green-50",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Recommendations",
    description: "Our AI coach suggests the right products based on your baby's age, needs, and your shopping history.",
    color: "bg-baby-peach text-purple-500",
    glow: "from-purple-100 to-purple-50",
  },
];

const WhyShopSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".why-shop-title",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.utils.toArray<HTMLElement>(".perk-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0, opacity: 1, scale: 1, duration: 0.6, delay: i * 0.08, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-baby-pink-light/30 rounded-full blur-3xl -z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 why-shop-title">
          <span className="inline-block gradient-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Why Shop on Pambuddy
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            More Than Just Shopping
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pambuddy is built for mothers — every feature is designed to save you time, money, and stress.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="perk-card group bg-card border border-border/40 rounded-3xl p-6 shadow-card hover:shadow-elevated hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-2xl ${perk.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <perk.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{perk.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{perk.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-baby-pink-light/60 to-baby-yellow-light/60 border border-border/40 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-extrabold text-2xl sm:text-3xl text-foreground mb-1">
              Join <span className="text-gradient-primary">50,000+</span> mothers already saving
            </p>
            <p className="text-muted-foreground text-base">Average user saves $180/month on baby essentials.</p>
          </div>
          <a
            href="#download"
            className="flex-shrink-0 flex items-center gap-2 gradient-primary text-primary-foreground font-display font-bold text-base px-8 py-4 rounded-2xl shadow-elevated hover:opacity-90 hover:scale-105 transition-all duration-300"
          >
            Start Saving Today
            <BadgePercent className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyShopSection;
