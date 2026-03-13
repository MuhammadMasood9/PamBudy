import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BabyBottleSvg, BabyMoonSvg } from "./AnimatedSvgIcons";
import { DOWNLOAD_CTA } from "@/constants";

const AppleStoreSvg = () => (
  <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-14 w-auto">
    <rect width="120" height="40" rx="6" fill="#000"/>
    <rect x="0.5" y="0.5" width="119" height="39" rx="5.5" stroke="white" strokeOpacity="0.3"/>
    <path d="M24.5 20.2c0-3.3 2.7-4.9 2.8-5-1.5-2.2-3.9-2.5-4.7-2.5-2 0-3.9 1.2-4.9 1.2-1 0-2.6-1.1-4.3-1.1-2.2 0-4.3 1.3-5.4 3.3-2.3 4 -.6 9.9 1.6 13.2 1.1 1.6 2.4 3.3 4.1 3.3 1.6-.1 2.2-1.1 4.2-1.1 1.9 0 2.5 1.1 4.2 1 1.8 0 2.9-1.6 4-3.2 1.2-1.8 1.7-3.6 1.8-3.7-.1-.1-3.4-1.4-3.4-5.4z" fill="white"/>
    <path d="M21.3 10.9c.9-1.1 1.5-2.6 1.3-4.1-1.3.1-2.8.9-3.7 2-.8 1-1.5 2.5-1.3 4 1.4.1 2.9-.7 3.7-1.9z" fill="white"/>
    <text x="35" y="16" fill="white" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="7" letterSpacing="0.3">Download on the</text>
    <text x="35" y="28" fill="white" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="13" fontWeight="600" letterSpacing="0.2">App Store</text>
  </svg>
);

const GooglePlaySvg = () => (
  <svg viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-14 w-auto">
    <rect width="135" height="40" rx="6" fill="#000"/>
    <rect x="0.5" y="0.5" width="134" height="39" rx="5.5" stroke="white" strokeOpacity="0.3"/>
    <path d="M10.4 7.5c-.4.4-.6 1-.6 1.8v21.4c0 .8.2 1.4.6 1.8l.1.1 12-12v-.3l-12-12-.1.2z" fill="url(#gp1)"/>
    <path d="M26.5 23.6l-4-4v-.3l4-4 .1.1 4.7 2.7c1.3.8 1.3 2 0 2.7l-4.8 2.8z" fill="url(#gp2)"/>
    <path d="M26.6 23.5L22.5 19.4 10.4 31.5c.4.5 1.1.5 2 .1l14.2-8.1z" fill="url(#gp3)"/>
    <path d="M26.6 16.5L12.4 8.4c-.9-.5-1.6-.4-2 .1l12.1 12.1 4.1-4.1z" fill="url(#gp4)"/>
    <defs>
      <linearGradient id="gp1" x1="21.8" y1="8.7" x2="5.0" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00A0FF"/>
        <stop offset="1" stopColor="#00F0FF"/>
      </linearGradient>
      <linearGradient id="gp2" x1="33.8" y1="20" x2="9.6" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFE000"/>
        <stop offset="1" stopColor="#FFBD00"/>
      </linearGradient>
      <linearGradient id="gp3" x1="24.8" y1="22.3" x2="2.1" y2="49.9" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF3A44"/>
        <stop offset="1" stopColor="#C31162"/>
      </linearGradient>
      <linearGradient id="gp4" x1="7.3" y1="-4.2" x2="17.5" y2="10.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#32A071"/>
        <stop offset="1" stopColor="#2DA771"/>
      </linearGradient>
    </defs>
    <text x="40" y="16" fill="white" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="7" letterSpacing="0.3">GET IT ON</text>
    <text x="40" y="28" fill="white" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="13" fontWeight="600" letterSpacing="0.2">Google Play</text>
  </svg>
);

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
              {DOWNLOAD_CTA.TITLE}
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              {DOWNLOAD_CTA.DESCRIPTION}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="hover:scale-105 transition-transform duration-300 shadow-elevated rounded-lg">
                <AppleStoreSvg />
              </button>
              <button className="hover:scale-105 transition-transform duration-300 shadow-elevated rounded-lg">
                <GooglePlaySvg />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
