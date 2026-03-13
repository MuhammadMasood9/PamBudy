import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Download", href: "#download" },
];

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!navRef.current) return;
    gsap.fromTo(navRef.current, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 });

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav ref={navRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-card/90 backdrop-blur-xl shadow-soft border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
            <span className="text-primary-foreground font-display font-bold text-base">P</span>
          </div>
          <span className="font-display font-extrabold text-xl text-foreground">Pambuddy</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-200">
              {link.label}
            </a>
          ))}
          <a href="#download" className="gradient-primary text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity shadow-soft">
            Get the App
          </a>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-card/95 backdrop-blur-xl border-b border-border px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="block text-sm font-semibold text-muted-foreground hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#download" className="block gradient-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-bold text-center" onClick={() => setMobileOpen(false)}>
            Get the App
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
