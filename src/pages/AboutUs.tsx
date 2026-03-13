import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageLayout from "@/components/layout/PageLayout";
import { Heart, Users, Target, Award, Sparkles, ShoppingCart, Bot, Star, ArrowRight, Download, CheckCircle } from "lucide-react";
import { COMPANY_INFO, COMPANY_VALUES, ABOUT_STATS, ABOUT_SECTIONS, ROUTES } from "@/constants";
import logo from "@/assets/logo.png";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-hero-content", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el, i) => {
        gsap.fromTo(el, { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.7, delay: i * 0.1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      gsap.utils.toArray<HTMLElement>(".stat-number").forEach((el) => {
        gsap.fromTo(el, { scale: 0.5, opacity: 0 }, {
          scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <PageLayout>
      <div className="overflow-hidden">

        <section ref={heroRef} className="relative gradient-hero py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-baby-yellow-light/60 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-baby-pink-light/40 blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="about-hero-content text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-soft border border-border/50 mb-8">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">Our Story</span>
              </div>
              <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-6">
                Built for{" "}
                <span className="text-gradient-primary">Every Woman</span>
                <br />
                by Women
              </h1>
              <p className="text-muted-foreground text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed mb-10">
                {COMPANY_INFO.DESCRIPTION}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={ROUTES.CONTACT} className="gradient-primary text-primary-foreground px-8 py-4 rounded-2xl font-display font-bold text-lg shadow-elevated hover:opacity-90 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2">
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/#download" className="bg-card text-foreground px-8 py-4 rounded-2xl font-display font-semibold text-lg shadow-card border border-border hover:border-primary/30 transition-all duration-300 inline-flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download App
                </a>
              </div>
            </div>
          </div>
        </section>

        <section ref={statsRef} className="py-16 bg-card border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {ABOUT_STATS.map((stat) => (
                <div key={stat.label} className="stat-number text-center">
                  <p className="font-display font-extrabold text-4xl sm:text-5xl text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground font-semibold text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="fade-up">
                <span className="inline-block gradient-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                  {ABOUT_SECTIONS.STORY.TITLE}
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight mb-8">
                  From a Simple Idea to 50K+ Happy Women
                </h2>
                <div className="space-y-5">
                  {ABOUT_SECTIONS.STORY.CONTENT.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed text-lg">{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className="fade-up grid grid-cols-2 gap-4">
                {[
                  { icon: ShoppingCart, label: "Products Available", value: "10K+", color: "bg-baby-pink-light text-primary" },
                  { icon: Users, label: "Active Women", value: "50K+", color: "bg-baby-yellow-light text-accent-foreground" },
                  { icon: Bot, label: "AI Interactions Daily", value: "5K+", color: "bg-baby-peach text-primary" },
                  { icon: Star, label: "App Store Rating", value: "4.9★", color: "bg-baby-cream text-secondary-foreground" },
                ].map((item, i) => (
                  <div key={i} className="gradient-card rounded-3xl p-6 border border-border/50 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                    <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-4`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <p className="font-display font-extrabold text-2xl text-primary mb-1">{item.value}</p>
                    <p className="text-xs text-muted-foreground font-semibold">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 gradient-warm">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="fade-up text-center mb-4">
              <span className="inline-block bg-baby-yellow-light text-accent-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                {ABOUT_SECTIONS.MISSION.TITLE}
              </span>
            </div>
            <div className="fade-up relative bg-card rounded-3xl p-10 sm:p-16 border border-border/50 shadow-elevated text-center">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full gradient-primary flex items-center justify-center shadow-elevated">
                <Heart className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
              </div>
              <p className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground leading-relaxed max-w-4xl mx-auto">
                "{ABOUT_SECTIONS.MISSION.CONTENT}"
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="fade-up text-center mb-14">
              <span className="inline-block gradient-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                What We Stand For
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground">
                Our Core Values
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {COMPANY_VALUES.map((value) => (
                <div
                  key={value.title}
                  className="fade-up group gradient-card rounded-3xl p-7 border border-border/50 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 text-center"
                >
                  <div className={`w-16 h-16 rounded-2xl ${value.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-card border-y border-border/50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="fade-up text-center mb-14">
              <span className="inline-block bg-baby-yellow-light text-accent-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Why Choose Us
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground">
                {ABOUT_SECTIONS.DIFFERENTIATORS.TITLE}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {ABOUT_SECTIONS.DIFFERENTIATORS.ITEMS.map((item, index) => (
                <div
                  key={index}
                  className="fade-up flex gap-5 bg-background rounded-3xl p-7 border border-border/50 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0 mt-1 shadow-soft">
                    <CheckCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">{item.TITLE}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.DESCRIPTION}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-baby-yellow-light/50 blur-3xl" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="fade-up max-w-3xl mx-auto text-center">
              <img src={logo} alt="Pambuddy" className="h-20 w-20 object-contain mx-auto mb-6" />
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-foreground mb-5">
                {ABOUT_SECTIONS.JOIN.TITLE}
              </h2>
              <p className="text-muted-foreground text-xl leading-relaxed mb-10">
                {ABOUT_SECTIONS.JOIN.DESCRIPTION}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#download"
                  className="gradient-primary text-primary-foreground px-10 py-4 rounded-2xl font-display font-bold text-lg shadow-elevated hover:opacity-90 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Free
                </a>
                <a
                  href={ROUTES.CONTACT}
                  className="bg-card text-foreground px-10 py-4 rounded-2xl font-display font-semibold text-lg shadow-card border border-border hover:border-primary/30 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
};

export default AboutUs;
