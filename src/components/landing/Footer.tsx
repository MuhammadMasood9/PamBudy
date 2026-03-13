import { useLocation } from "react-router-dom";
import { Heart } from "lucide-react";
import { NAV_LINKS, COMPANY_INFO, FOOTER_LINKS } from "@/constants";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <a href="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">P</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">{COMPANY_INFO.NAME}</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {COMPANY_INFO.TAGLINE}
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  {isHomePage ? (
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <a href={`/${link.href}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.COMPANY.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.LEGAL.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">{COMPANY_INFO.COPYRIGHT}</p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            {COMPANY_INFO.FOOTER_MESSAGE}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
