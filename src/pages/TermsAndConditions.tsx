import { useEffect, useRef } from "react";
import gsap from "gsap";
import PageLayout from "@/components/layout/PageLayout";
import { FileText } from "lucide-react";

const TermsAndConditions = () => {
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
                <FileText className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-foreground mb-4">
                Terms and Conditions
              </h1>
              <p className="text-muted-foreground text-lg">
                Last updated: March 13, 2026
              </p>
            </div>

            <div className="prose prose-slate max-w-none space-y-8">
              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Agreement to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using Pambuddy, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access or use our services.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Use License
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of Pambuddy for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="space-y-3 text-muted-foreground list-disc list-inside leading-relaxed">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained in Pambuddy</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or mirror the materials on any other server</li>
                </ul>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  User Accounts
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for:
                </p>
                <ul className="space-y-3 text-muted-foreground list-disc list-inside leading-relaxed">
                  <li>Maintaining the security of your account and password</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use of your account</li>
                  <li>Ensuring that your account information remains accurate and up-to-date</li>
                </ul>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Products and Services
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pambuddy provides a platform for purchasing baby products, AI-powered parenting insights, subscription services, and community features. We reserve the right to:
                </p>
                <ul className="space-y-3 text-muted-foreground list-disc list-inside leading-relaxed">
                  <li>Modify or discontinue products or services at any time</li>
                  <li>Refuse or cancel orders at our sole discretion</li>
                  <li>Limit quantities purchased per person, per household, or per order</li>
                  <li>Correct any errors, inaccuracies, or omissions in product descriptions or pricing</li>
                </ul>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Payment Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All purchases are subject to product availability. We reserve the right to refuse or cancel any order. In the event of cancellation, we will refund the amount paid. Prices are subject to change without notice. You are responsible for all applicable taxes and fees.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Subscriptions
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Subscription services automatically renew unless cancelled. You may cancel your subscription at any time through your account settings. Cancellation takes effect at the end of the current billing period. No refunds are provided for partial subscription periods.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The service and its original content, features, and functionality are owned by Pambuddy and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  User Content
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You retain ownership of any content you post, upload, or share through our services. By posting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content for the purpose of operating and promoting our services. You agree not to post content that:
                </p>
                <ul className="space-y-3 text-muted-foreground list-disc list-inside leading-relaxed">
                  <li>Is illegal, harmful, or violates any laws</li>
                  <li>Infringes on the rights of others</li>
                  <li>Contains viruses or malicious code</li>
                  <li>Is spam, misleading, or fraudulent</li>
                </ul>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Disclaimer
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The information provided by our AI Coach feature is for general informational purposes only and should not be considered medical, legal, or professional advice. Always consult with qualified professionals for specific advice related to your situation.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall Pambuddy, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Termination
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your account and access to our services immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use the service will cease immediately.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Changes to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the service after changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <div className="mt-4 space-y-2 text-muted-foreground">
                  <p>Email: legal@pambuddy.com</p>
                  <p>Address: Pambuddy Legal Department</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsAndConditions;
