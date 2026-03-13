import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FEATURES, FEATURES_SECTION } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".features-title", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card, { y: 60, opacity: 0, scale: 0.95 }, {
          y: 0, opacity: 1, scale: 1, duration: 0.6, delay: i * 0.1, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 85%" },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="py-24 gradient-warm relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 features-title">
          <span className="inline-block gradient-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {FEATURES_SECTION.BADGE}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            {FEATURES_SECTION.TITLE}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {FEATURES_SECTION.DESCRIPTION}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => { if (el) cardsRef.current[index] = el; }}
              className="group gradient-card rounded-3xl p-6 sm:p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
