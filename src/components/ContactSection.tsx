import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Send, Clock, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
    gradient: "from-primary to-primary/60",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us instantly",
    href: "https://wa.me/1234567890?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment",
    gradient: "from-accent to-accent/60",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "123 Smile Street, Downtown",
    href: "#",
    gradient: "from-primary/80 to-accent/80",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Sat: 9AM – 7PM",
    href: "#",
    gradient: "from-accent to-primary",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast({ title: "Please fill in your name and phone number.", variant: "destructive" });
      return;
    }
    toast({ title: "Thank you!", description: "We'll contact you shortly." });
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-section-gradient noise-overlay relative overflow-hidden">
      <div className="floating-shape w-[500px] h-[500px] -bottom-60 right-0 bg-accent" />
      <div className="floating-shape w-96 h-96 top-10 -left-48 bg-primary" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="section-badge mb-5">Contact</span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-base leading-relaxed">
            Ready to book? Contact us by phone, WhatsApp, or fill out the form below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 max-w-6xl mx-auto" >
          {/*  Contact methods  */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactMethods.map((m, i) => (
              <motion.a
                key={m.label}
                href={m.href}
                target={m.href.startsWith("http") ? "_blank" : undefined}
                rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="gradient-border-card block group"
                style={{
                  boxShadow: `
                  0 0 10px hsl(200 80% 35% / 0.6),
                  0 0 5px hsl(168 60% 35% / 0.5),
                  0 0 10px hsl(200 80% 45% / 0.4),
                  0 0 5px hsl(210 25% 15% / 0.3)
                  `,
                }}
              >
                <div className="glass-card rounded-[1.5rem] p-5 flex items-center gap-4">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${m.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-[-5deg] transition-all duration-600 shadow-md`}
                  >
                    <m.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold block">
                      {m.label}
                    </span>
                    <p className="text-sm font-medium text-foreground mt-0.5 truncate">{m.value}</p>
                  </div>
                  {(m.href.startsWith("tel") || m.href.startsWith("http")) && (
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  )}
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Form  */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="rounded-[2rem] relative overflow-hidden glow-pulse">
              <div
                className="absolute inset-0 z-0"
                style={{
                  background: "linear-gradient(155deg, hsl(200 80% 38%) 0%, hsl(200 85% 26%) 45%, hsl(168 55% 30%) 100%)",
                }}
              />
              {/* Animated decorative circles */}
              <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
                <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full border-2 border-white" />
                <div className="absolute bottom-8 left-8 w-32 h-32 rounded-full border border-white" />
                <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full border border-white/50" />
              </div>

              <form onSubmit={handleSubmit} className="relative z-10 p-8 md:p-10 space-y-5">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">Send us a message</h3>
                    <p className="text-white/50 text-sm">We'll get back to you within 24 hours</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <label className="text-sm font-medium text-white/70 mb-1.5 block">Full Name</label>
                    <Input
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      maxLength={100}
                      className={`rounded-xl h-12 bg-white/8 border-white/10 text-black placeholder:text-white/30 focus:bg-white/12 focus:border-white/25 transition-all duration-300 ${
                        focusedField === "name" ? "ring-1 ring-accent/40" : ""
                      }`}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-white/70 mb-1.5 block">Phone Number</label>
                    <Input
                      placeholder="+1 (234) 567-890"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      maxLength={20}
                      className={`rounded-xl h-12 bg-white/8 border-white/10 text-black placeholder:text-white/30 focus:bg-white/12 focus:border-white/25 transition-all duration-300 ${
                        focusedField === "phone" ? "ring-1 ring-accent/40" : ""
                      }`}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-white/70 mb-1.5 block">
                      Message <span className="text-white/30 font-normal">(optional)</span>
                    </label>
                    <Textarea
                      placeholder="Tell us about your needs..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      maxLength={1000}
                      rows={4}
                      className={`rounded-xl bg-white/8 border-white/10 text-black placeholder:text-white/30 focus:bg-white/12 focus:border-white/25 transition-all duration-300 ${
                        focusedField === "message" ? "ring-1 ring-accent/40" : ""
                      }`}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full h-12 bg-white text-primary hover:bg-white/90 shadow-lg shadow-black/15 transition-all text-base font-semibold group"
                >
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
