import { ReactNode } from "react";
import Navbar from "@/components/landing/Navbar";
import MarqueeBanner from "@/components/landing/MarqueeBanner";
import Footer from "@/components/landing/Footer";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MarqueeBanner />
      <Navbar />
      <main className="flex-1 pt-[104px]">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
