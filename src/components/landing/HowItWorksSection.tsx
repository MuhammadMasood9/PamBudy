import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HOW_IT_WORKS_STEPS, HOW_IT_WORKS_SECTION } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hiw-title", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      gsap.utils.toArray<HTMLElement>(".hiw-step").forEach((el, i) => {
        gsap.fromTo(el, { x: i % 2 === 0 ? -60 : 60, opacity: 0 }, {
          x: 0, opacity: 1, duration: 0.8, delay: i * 0.15, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // Animate the connecting line
      gsap.fromTo(".hiw-line", { scaleY: 0 }, {
        scaleY: 1, duration: 1.5, ease: "power2.out",
        scrollTrigger: { trigger: ".hiw-line", start: "top 80%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 hiw-title">
          <span className="inline-block bg-baby-yellow-light text-accent-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {HOW_IT_WORKS_SECTION.BADGE}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            {HOW_IT_WORKS_SECTION.TITLE}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {HOW_IT_WORKS_SECTION.DESCRIPTION}
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Connecting line */}
          <div className="hiw-line absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-baby-pink-light to-accent origin-top hidden sm:block" />

          <div className="space-y-12">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <div key={step.step} className={`hiw-step relative flex items-start gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:gap-12`}>
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="gradient-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-elevated transition-shadow duration-300">
                    <span className="text-sm font-bold text-primary">{step.step}</span>
                    <h3 className="font-display font-bold text-xl text-foreground mt-1 mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-16 h-16 rounded-full gradient-primary items-center justify-center shadow-elevated flex-shrink-0 relative z-10">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
