import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BabyBottleSvg, BabyMoonSvg } from "./AnimatedSvgIcons";
import { Apple, Smartphone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const DownloadCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bottleRef = useRef<HTMLDivElement>(null);
  const moonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cta-content", { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      gsap.fromTo(bottleRef.current, { x: -100, opacity: 0, rotation: -20 }, {
        x: 0, opacity: 1, rotation: 0, duration: 1, ease: "elastic.out(1, 0.5)",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
      gsap.fromTo(moonRef.current, { x: 100, opacity: 0, rotation: 20 }, {
        x: 0, opacity: 1, rotation: 0, duration: 1, ease: "elastic.out(1, 0.5)",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });

      gsap.to(bottleRef.current, { y: -10, rotation: -5, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(moonRef.current, { y: 8, rotation: 5, duration: 2.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="download" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative gradient-primary rounded-[2rem] p-10 sm:p-16 text-center overflow-hidden">
          <div ref={bottleRef} className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 opacity-30">
            <BabyBottleSvg className="w-16 sm:w-24 h-auto" />
          </div>
          <div ref={moonRef} className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 opacity-30">
            <BabyMoonSvg className="w-16 sm:w-24 h-auto" />
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-baby-pink-glow opacity-20 blur-3xl rounded-full" />

          <div className="cta-content relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-4">
              Join 50,000+ Happy Mothers
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Download Pambuddy today and experience the smartest way to shop, learn, and connect as a mother.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-card text-foreground px-8 py-4 rounded-2xl font-display font-bold text-lg shadow-elevated hover:scale-105 transition-transform duration-300 inline-flex items-center justify-center gap-3">
                <Apple className="w-6 h-6" />
                App Store
              </button>
              <button className="bg-card/20 text-primary-foreground border-2 border-primary-foreground/30 px-8 py-4 rounded-2xl font-display font-bold text-lg hover:bg-card/30 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3">
                <Smartphone className="w-6 h-6" />
                Google Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
