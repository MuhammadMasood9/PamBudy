import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import PageLayout from "@/components/layout/PageLayout";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CONTACT_INFO } from "@/constants";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    if (!contentRef.current) return;
    gsap.fromTo(
      contentRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log("Contact form submission:", data);
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setIsSubmitted(true);
      reset();
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div ref={contentRef} className="space-y-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-4">
                <Mail className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-foreground mb-4">
                Get in Touch
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Have a question or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground text-sm">Send us an email anytime</p>
                      <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="text-primary hover:underline text-sm font-medium mt-1 inline-block">
                        {CONTACT_INFO.EMAIL}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground text-sm">{CONTACT_INFO.PHONE_HOURS}</p>
                      <a href={`tel:${CONTACT_INFO.PHONE.replace(/\s/g, "")}`} className="text-primary hover:underline text-sm font-medium mt-1 inline-block">
                        {CONTACT_INFO.PHONE}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-foreground mb-1">Office</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {CONTACT_INFO.ADDRESS.STREET}<br />
                        {CONTACT_INFO.ADDRESS.SUITE}<br />
                        {CONTACT_INFO.ADDRESS.CITY}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-baby-pink-light mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                        Thank You!
                      </h3>
                      <p className="text-muted-foreground">
                        Your message has been sent successfully. We'll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-foreground font-semibold">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            {...register("name")}
                            placeholder="John Doe"
                            className={errors.name ? "border-destructive" : ""}
                          />
                          {errors.name && (
                            <p className="text-sm text-destructive">{errors.name.message}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-foreground font-semibold">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            {...register("email")}
                            placeholder="john@example.com"
                            className={errors.email ? "border-destructive" : ""}
                          />
                          {errors.email && (
                            <p className="text-sm text-destructive">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground font-semibold">
                          Phone Number <span className="text-muted-foreground font-normal">(Optional)</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register("phone")}
                          placeholder="+1 (234) 567-890"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-foreground font-semibold">
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          {...register("subject")}
                          placeholder="How can we help you?"
                          className={errors.subject ? "border-destructive" : ""}
                        />
                        {errors.subject && (
                          <p className="text-sm text-destructive">{errors.subject.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-foreground font-semibold">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          {...register("message")}
                          placeholder="Tell us more about your inquiry..."
                          rows={6}
                          className={errors.message ? "border-destructive" : ""}
                        />
                        {errors.message && (
                          <p className="text-sm text-destructive">{errors.message.message}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto gradient-primary text-primary-foreground px-8 py-6 text-base font-bold hover:opacity-90 transition-opacity"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin mr-2">⏳</span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
