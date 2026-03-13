import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const navRef = useRef<HTMLElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!navRef.current) return;
    gsap.fromTo(navRef.current, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 });

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!drawerRef.current || !overlayRef.current) return;

    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      gsap.set(drawerRef.current, { x: "-100%" });
      gsap.set(overlayRef.current, { opacity: 0, display: "block" });
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(drawerRef.current, { x: "0%", duration: 0.4, ease: "power3.out" });

      gsap.fromTo(
        ".drawer-link",
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.35, stagger: 0.06, ease: "power3.out", delay: 0.15 }
      );
    } else {
      document.body.style.overflow = "";
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.25, ease: "power2.in", onComplete: () => { if (overlayRef.current) overlayRef.current.style.display = "none"; } });
      gsap.to(drawerRef.current, { x: "-100%", duration: 0.35, ease: "power3.in" });
    }
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <nav ref={navRef} className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-card/90 backdrop-blur-xl shadow-soft border-b border-border" : "bg-transparent"}`}>
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Pambuddy" className="h-14 w-14 object-contain" />
            <span className="font-display font-extrabold text-2xl -ml-1">
              <span className="text-foreground">pam</span><span className="bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">buddy</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={isHomePage ? link.href : `/${link.href}`}
                className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={isHomePage ? "#download" : "/#download"}
              className="gradient-primary text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity shadow-soft"
            >
              Get the App
            </a>
          </div>

          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-foreground hover:bg-muted transition-colors duration-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 bg-foreground/40 backdrop-blur-sm hidden"
        onClick={closeMenu}
      />

      <div
        ref={drawerRef}
        className="fixed top-0 left-0 z-50 h-full w-72 bg-card shadow-elevated flex flex-col"
        style={{ transform: "translateX(-100%)" }}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-border flex-shrink-0">
          <a href="/" className="flex items-center gap-1 hover:opacity-80 transition-opacity" onClick={closeMenu}>
            <img src={logo} alt="Pambuddy" className="h-12 w-12 object-contain" />
            <span className="font-display font-extrabold text-xl -ml-1">
              <span className="text-foreground">pam</span><span className="bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">buddy</span>
            </span>
          </a>
          <button
            className="w-9 h-9 flex items-center justify-center rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto px-4 py-6 gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={isHomePage ? link.href : `/${link.href}`}
              className="drawer-link flex items-center px-4 py-3 rounded-2xl text-sm font-semibold text-muted-foreground hover:text-primary hover:bg-baby-pink-light transition-all duration-200"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="px-4 pb-8 flex-shrink-0">
          <a
            href={isHomePage ? "#download" : "/#download"}
            className="drawer-link block gradient-primary text-primary-foreground px-5 py-3.5 rounded-2xl text-sm font-bold text-center shadow-soft hover:opacity-90 transition-opacity"
            onClick={closeMenu}
          >
            Get the App
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
