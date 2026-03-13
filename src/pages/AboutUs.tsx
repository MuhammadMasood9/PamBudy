import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageLayout from "@/components/layout/PageLayout";
import { Sparkles } from "lucide-react";
import { COMPANY_INFO, COMPANY_VALUES, ABOUT_STATS, ABOUT_SECTIONS } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    gsap.fromTo(
      contentRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".about-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%" },
          }
        );
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageLayout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div ref={contentRef} className="space-y-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-4">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
                About {COMPANY_INFO.NAME}
              </h1>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                {COMPANY_INFO.DESCRIPTION}
              </p>
            </div>

            <section className="bg-card rounded-3xl p-8 sm:p-12 border border-border/50 shadow-card">
              <h2 className="font-display font-bold text-3xl text-foreground mb-6">{ABOUT_SECTIONS.STORY.TITLE}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {ABOUT_SECTIONS.STORY.CONTENT.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display font-bold text-3xl text-foreground mb-8 text-center">{ABOUT_SECTIONS.MISSION.TITLE}</h2>
              <div className="bg-gradient-to-br from-baby-pink-light to-baby-yellow-light rounded-3xl p-8 sm:p-12 border border-border/50 shadow-card">
                <p className="text-lg text-foreground leading-relaxed text-center max-w-3xl mx-auto">
                  {ABOUT_SECTIONS.MISSION.CONTENT}
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display font-bold text-3xl text-foreground mb-8 text-center">Our Values</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {COMPANY_VALUES.map((value, index) => (
                  <div
                    key={value.title}
                    className="about-card bg-card rounded-2xl p-6 border border-border/50 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${value.color} flex items-center justify-center mb-4`}>
                      <value.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display font-bold text-3xl text-foreground mb-8 text-center">By The Numbers</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {ABOUT_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="about-card bg-card rounded-2xl p-6 border border-border/50 shadow-card text-center"
                  >
                    <p className="font-display font-extrabold text-3xl text-primary mb-2">{stat.value}</p>
                    <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-card rounded-3xl p-8 sm:p-12 border border-border/50 shadow-card">
              <h2 className="font-display font-bold text-3xl text-foreground mb-6">{ABOUT_SECTIONS.DIFFERENTIATORS.TITLE}</h2>
              <div className="space-y-6">
                {ABOUT_SECTIONS.DIFFERENTIATORS.ITEMS.map((item, index) => (
                  <div key={index}>
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">{item.TITLE}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.DESCRIPTION}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-baby-pink-light/50 to-baby-yellow-light/50 rounded-3xl p-8 sm:p-12 border border-border/50">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-display font-bold text-3xl text-foreground mb-4">{ABOUT_SECTIONS.JOIN.TITLE}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {ABOUT_SECTIONS.JOIN.DESCRIPTION}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="gradient-primary text-primary-foreground px-8 py-4 rounded-2xl font-display font-bold text-lg shadow-elevated hover:opacity-90 transition-opacity text-center"
                  >
                    Get in Touch
                  </a>
                  <a
                    href="/#download"
                    className="bg-card text-foreground px-8 py-4 rounded-2xl font-display font-semibold text-lg shadow-card border border-border hover:border-primary/30 transition-all duration-300 text-center"
                  >
                    Download App
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutUs;
