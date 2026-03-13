import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroMother from "@/assets/hero-mother.png";
import FloatingElements from "./FloatingElements";
import { BabyStarSvg, BabyHeartSvg } from "./AnimatedSvgIcons";
import { ArrowRight, Download, Star } from "lucide-react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(badgeRef.current, { y: -20, opacity: 0, scale: 0.8 }, { y: 0, opacity: 1, scale: 1, duration: 0.6, delay: 0.3 })
        .fromTo(headingRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.3")
        .fromTo(subRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
        .fromTo(ctaRef.current, { y: 30, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 0.6 }, "-=0.4")
        .fromTo(imageRef.current, { y: 80, opacity: 0, scale: 0.8 }, { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "elastic.out(1, 0.5)" }, "-=0.8")
        .fromTo(statsRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen gradient-hero flex items-center pt-16 overflow-hidden">
      <FloatingElements />
      <div className="container mx-auto px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left space-y-6 relative z-10">
            <div ref={badgeRef} className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft border border-border/50">
              <div className="flex -space-x-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 text-baby-yellow fill-baby-yellow" />
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">Trusted by 50K+ Mothers</span>
            </div>

            <h1 ref={headingRef} className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-foreground">
              Your Perfect{" "}
              <span className="text-gradient-primary">Buddy</span>
              <br />
              for Motherhood
            </h1>

            <p ref={subRef} className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Shop baby essentials, get AI-powered parenting insights, set up auto-delivery subscriptions, and connect with a community of amazing mothers — all in one app.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#download" className="gradient-primary text-primary-foreground px-8 py-4 rounded-2xl font-display font-bold text-lg shadow-elevated hover:opacity-90 transition-all duration-300 hover:scale-105 text-center inline-flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download Free
              </a>
              <a href="#features" className="bg-card text-foreground px-8 py-4 rounded-2xl font-display font-semibold text-lg shadow-card border border-border hover:border-primary/30 transition-all duration-300 text-center inline-flex items-center justify-center gap-2">
                Explore Features
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div ref={statsRef} className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4">
              {[
                { value: "100+", label: "Product Categories" },
                { value: "50K+", label: "Happy Mothers" },
                { value: "4.9", label: "App Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display font-extrabold text-2xl text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute -top-6 -left-4 lg:left-8 z-20 animate-float">
              <BabyStarSvg className="w-16 h-16 sm:w-20 sm:h-20" />
            </div>
            <div className="absolute -bottom-4 -right-4 lg:right-8 z-20 animate-float-slow">
              <BabyHeartSvg className="w-14 h-14 sm:w-18 sm:h-18" />
            </div>
            <div ref={imageRef} className="relative w-72 sm:w-80 lg:w-[420px]">
              <div className="absolute inset-0 rounded-full bg-baby-pink-light opacity-40 blur-3xl scale-125" />
              <div className="absolute inset-0 rounded-full bg-baby-yellow-light opacity-30 blur-2xl scale-110 -translate-y-8" />
              <img src={heroMother} alt="Pambuddy - Your perfect buddy for motherhood" className="relative z-10 w-full h-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
