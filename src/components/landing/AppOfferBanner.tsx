import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download, Tag, Sparkles, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AppOfferBanner = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".offer-left",
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(
        ".offer-right",
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.15, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(
        ".offer-badge",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "elastic.out(1, 0.5)", delay: 0.4, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl gradient-primary p-8 sm:p-10 lg:p-12">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/10 rounded-full blur-xl" />
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8">
            <Sparkles className="w-8 h-8 text-white/30 animate-pulse-soft" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="offer-left text-center lg:text-left max-w-xl">
              <div className="offer-badge inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                <Tag className="w-3.5 h-3.5" />
                LIMITED TIME OFFER
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primary-foreground leading-tight mb-3">
                Download the App &<br />
                <span className="text-white/80">Save Up to</span>{" "}
                <span>200</span>{" "}
                <span className="text-white/80">on Your First Order</span>
              </h2>
              <p className="text-primary-foreground/80 text-base sm:text-lg leading-relaxed">
                New users get exclusive discounts, free delivery on their first order, and 500 bonus Pam Coins — redeemable on every purchase.
              </p>
            </div>

            <div className="offer-right flex flex-col items-center lg:items-end gap-5 flex-shrink-0">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "200", label: "First Order Off" },
                  { value: "500", label: "Pam Coins Bonus" },
                  { value: "Free", label: "First Delivery" },
                  { value: "50%", label: "Max Discount" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/15 backdrop-blur-sm rounded-2xl px-5 py-3 text-center">
                    <p className="font-display font-extrabold text-2xl text-white">{stat.value}</p>
                    <p className="text-primary-foreground/70 text-xs font-medium mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
              <a
                href="#download"
                className="flex items-center gap-2 bg-white text-primary font-display font-bold text-base px-8 py-4 rounded-2xl shadow-elevated hover:scale-105 transition-transform duration-300 w-full justify-center"
              >
                <Download className="w-5 h-5" />
                Get the App Free
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppOfferBanner;
