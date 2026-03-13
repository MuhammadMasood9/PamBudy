import { useEffect, useRef } from "react";
import gsap from "gsap";
import PageLayout from "@/components/layout/PageLayout";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    gsap.fromTo(
      contentRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );
  }, []);

  return (
    <PageLayout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div ref={contentRef} className="space-y-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-4">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-foreground mb-4">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground text-lg">
                Last updated: March 13, 2026
              </p>
            </div>

            <div className="prose prose-slate max-w-none space-y-8">
              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Pambuddy, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Information We Collect
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                      Personal Information
                    </h3>
                    <p className="leading-relaxed">
                      We collect information that you provide directly to us, including your name, email address, phone number, shipping address, payment information, and any other information you choose to provide.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                      Usage Data
                    </h3>
                    <p className="leading-relaxed">
                      We automatically collect information about how you interact with our app, including device information, IP address, browser type, access times, and pages viewed.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                      Health and Wellness Data
                    </h3>
                    <p className="leading-relaxed">
                      With your consent, we may collect health-related information you provide through our AI Coach feature, including mood tracking, health questions, and parenting insights.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  How We Use Your Information
                </h2>
                <ul className="space-y-3 text-muted-foreground list-disc list-inside leading-relaxed">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To process transactions and send related information</li>
                  <li>To send you technical notices, updates, and support messages</li>
                  <li>To provide personalized AI-powered parenting insights and recommendations</li>
                  <li>To respond to your comments, questions, and requests</li>
                  <li>To monitor and analyze trends, usage, and activities</li>
                  <li>To detect, prevent, and address technical issues and fraudulent activity</li>
                </ul>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Information Sharing and Disclosure
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="space-y-3 text-muted-foreground list-disc list-inside leading-relaxed">
                  <li>With service providers who assist us in operating our app and conducting our business</li>
                  <li>When required by law or to protect our rights and safety</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Your Rights and Choices
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="space-y-3 text-muted-foreground list-disc list-inside leading-relaxed">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify inaccurate or incomplete information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to or restrict processing of your data</li>
                  <li>Withdraw consent at any time</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Children's Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are designed for mothers and parents. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 space-y-2 text-muted-foreground">
                  <p>Email: privacy@pambuddy.com</p>
                  <p>Address: Pambuddy Privacy Team</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;
