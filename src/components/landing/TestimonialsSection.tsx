import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Fatima H.",
    role: "Mom of 2",
    quote: "Pambuddy changed my life! The subscription feature means I never run out of diapers, and the AI coach gives me peace of mind about my baby's health.",
    rating: 5,
    avatar: "F",
  },
  {
    name: "Ayesha K.",
    role: "First-time mom",
    quote: "The community feature is amazing — I found so many mothers going through the same things. And the shopping discounts with Pam Coins are a bonus!",
    rating: 5,
    avatar: "A",
  },
  {
    name: "Tahmeeda S.",
    role: "Mom of twins",
    quote: "I love how I can set up weekly deliveries for different products. The AI insights about my mood and kids' development are incredibly helpful.",
    rating: 5,
    avatar: "T",
  },
  {
    name: "Maryam R.",
    role: "Working mom",
    quote: "Finally an app that understands what mothers really need. Shopping, advice, and community all in one place. The Ask Fatima feature is brilliant!",
    rating: 5,
    avatar: "M",
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".testimonial-title", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      gsap.utils.toArray<HTMLElement>(".testimonial-card").forEach((card, i) => {
        gsap.fromTo(card, { y: 50, opacity: 0, scale: 0.95 }, {
          y: 0, opacity: 1, scale: 1, duration: 0.7, delay: i * 0.12, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 85%" },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 gradient-warm relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 testimonial-title">
          <span className="inline-block gradient-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Loved by Mothers Everywhere
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of happy mothers who trust Pambuddy for their parenting journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card bg-card rounded-3xl p-6 shadow-card border border-border/30 hover:shadow-elevated transition-shadow duration-300">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-baby-yellow fill-baby-yellow" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed text-sm">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-sm">{t.avatar}</span>
                </div>
                <div>
                  <p className="font-display font-bold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
