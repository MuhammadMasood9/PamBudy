import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LayoutGrid } from "lucide-react";
import { useTopCategories } from "@/hooks/useSupabaseData";

gsap.registerPlugin(ScrollTrigger);

const CategoryCardSkeleton = () => (
  <div className="flex-shrink-0 w-36 sm:w-40 rounded-3xl bg-card border border-border/30 p-5 animate-pulse">
    <div className="w-14 h-14 rounded-2xl bg-muted mx-auto mb-3" />
    <div className="h-4 bg-muted rounded-full mx-auto w-3/4 mb-2" />
    <div className="h-3 bg-muted rounded-full mx-auto w-1/2" />
  </div>
);

const colorClasses = [
  "bg-baby-pink-light text-primary",
  "bg-baby-yellow-light text-accent-foreground",
  "bg-baby-peach text-primary",
  "bg-baby-cream text-secondary-foreground",
];

const TopCategoriesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { data: categories, isLoading } = useTopCategories();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".categories-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      gsap.utils.toArray<HTMLElement>(".category-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: i * 0.07,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [categories]);

  return (
    <section ref={sectionRef} id="products" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 categories-title">
          <span className="inline-block gradient-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Shop by Category
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Browse Top Categories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover everything your baby needs, organized into easy-to-browse categories.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <CategoryCardSkeleton key={i} />)
            : categories?.map((category, index) => (
                <div
                  key={category.category_id}
                  className="category-card flex-shrink-0 w-36 sm:w-40 rounded-3xl bg-card border border-border/30 p-5 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 cursor-pointer group text-center"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                      colorClasses[index % colorClasses.length]
                    }`}
                  >
                    {category.image ? (
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-8 h-8 object-contain"
                      />
                    ) : (
                      <LayoutGrid className="w-7 h-7" />
                    )}
                  </div>
                  <p className="font-display font-bold text-sm text-foreground leading-tight mb-1">
                    {category.title}
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">
                    {category.product_count} products
                  </p>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategoriesSection;
