import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import screenShopping from "@/assets/screen-shopping.png";
import screenAI from "@/assets/screen-ai-coach.png";
import screenCommunity from "@/assets/screen-community.png";
import screenSubscription from "@/assets/screen-subscription.png";

gsap.registerPlugin(ScrollTrigger);

const screenshots = [
  { src: screenShopping, label: "Shop Products", description: "Browse 100+ categories from top brands" },
  { src: screenAI, label: "AI Coach", description: "Your personal parenting assistant" },
  { src: screenCommunity, label: "Community", description: "Connect with other mothers" },
  { src: screenSubscription, label: "Subscriptions", description: "Auto-delivery for essentials" },
];

const ScreenshotsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const screensRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".screenshots-title", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      screensRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el, { y: 100, opacity: 0, rotation: i % 2 === 0 ? -5 : 5 }, {
          y: 0, opacity: 1, rotation: 0, duration: 1, delay: i * 0.15, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="screenshots" className="py-24 gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 screenshots-title">
          <span className="inline-block bg-card text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4 shadow-soft">
            App Preview
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            See Pambuddy in Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A beautiful, intuitive experience designed for mothers by mothers.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {screenshots.map((screen, index) => (
            <div
              key={screen.label}
              ref={(el) => { if (el) screensRef.current[index] = el; }}
              className="group"
            >
              <div className="relative bg-card rounded-2xl sm:rounded-3xl shadow-elevated overflow-hidden border-2 border-border/30 group-hover:shadow-card group-hover:-translate-y-2 transition-all duration-300">
                <img src={screen.src} alt={screen.label} className="w-full h-auto" loading="lazy" />
              </div>
              <div className="text-center mt-3 sm:mt-4">
                <h3 className="font-display font-bold text-foreground text-sm sm:text-base">{screen.label}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{screen.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
