import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Tag, ShoppingCart, Package } from "lucide-react";
import { useTopDiscountedProducts } from "@/hooks/useSupabaseData";

gsap.registerPlugin(ScrollTrigger);

const ProductCardSkeleton = () => (
  <div className="flex flex-col rounded-3xl bg-card border border-border/30 overflow-hidden shadow-card animate-pulse h-full">
    <div className="w-full h-48 bg-muted flex-shrink-0" />
    <div className="p-5 flex flex-col flex-1 gap-3">
      <div className="h-4 bg-muted rounded-full w-3/4" />
      <div className="h-3 bg-muted rounded-full w-1/2" />
      <div className="flex gap-2 pt-1">
        <div className="h-5 bg-muted rounded-full w-16" />
        <div className="h-5 bg-muted rounded-full w-12" />
      </div>
      <div className="flex items-center justify-between mt-auto pt-2">
        <div className="h-4 bg-muted rounded-full w-20" />
        <div className="h-8 bg-muted rounded-xl w-20" />
      </div>
    </div>
  </div>
);

const TopDiscountedSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { data: products, isLoading } = useTopDiscountedProducts();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".discounted-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      gsap.utils.toArray<HTMLElement>(".product-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [products]);

  return (
    <section ref={sectionRef} className="py-20 gradient-warm relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 discounted-title">
          <span className="inline-block gradient-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Hot Deals
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Top Discounted Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Grab the best deals on baby essentials — handpicked offers just for you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
            : products?.map((product) => (
                <div
                  key={`${product.product_id}-${product.size}`}
                  className="product-card group flex flex-col rounded-3xl bg-card border border-border/30 overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 h-full"
                >
                  <div className="relative overflow-hidden bg-muted h-48 flex-shrink-0">
                    {product.feature_image ? (
                      <img
                        src={product.feature_image}
                        alt={product.product_name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-baby-pink-light">
                        <Package className="w-16 h-16 text-primary/30" />
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 gradient-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-soft">
                        <Tag className="w-3 h-3" />
                        {product.discount_percent}% OFF
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-foreground text-sm leading-snug mb-1 line-clamp-2 min-h-[2.5rem]">
                      {product.product_name}
                    </h3>

                    <p className="text-xs text-muted-foreground mb-3 font-medium">
                      Size: {product.size}
                    </p>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="font-display font-extrabold text-lg text-primary">
                        ${product.discounted_price.toFixed(2)}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.original_price.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-2 border-t border-border/30">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <ShoppingCart className="w-3.5 h-3.5" />
                        {product.stock.toLocaleString()} in stock
                      </span>
                      <button className="gradient-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-opacity duration-200">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default TopDiscountedSection;
