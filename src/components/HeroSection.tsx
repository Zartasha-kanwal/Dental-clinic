import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dental.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          src={heroImage}
          alt="Modern dental clinic interior with state-of-the-art equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-foreground/20" />
      </div>

      <div className="floating-shape w-[500px] h-[500px] -top-60 -right-60 bg-primary" />
      <div className="floating-shape w-80 h-80 bottom-20 -left-40 bg-accent" />

      <div className="container mx-auto relative z-10 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="section-badge mb-8 inline-flex !bg-primary-foreground/10 !text-primary-foreground/90 !border-primary-foreground/15 backdrop-blur-sm"
          >
            ✨ Trusted by 15,000+ Happy Patients
          </motion.span>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.05] mb-8">
            Same-Day{" "}
            <span className="relative inline-block">
              Pain
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute -bottom-2 left-0 w-full h-1 bg-hero-gradient rounded-full origin-left"
              />
            </span>
            <br />
            <span className="italic font-light text-accent">
              {" "}
              Relief Guaranteed.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 font-body leading-relaxed max-w-lg font-light">
            Emergency appointments available within 60 minutes. Modern, painless
            treatment by certified dental specialists.
          </p>

          {/* list */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-x-6 gap-y-2 mb-10 text-sm text-primary-foreground/60"
          >
            {[
              "Same-day appointments",
              "Pain-free procedures",
              "0% financing",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="text-base group shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all rounded-full px-8"
            >
              <a
                href="https://wa.me/1234567890?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book Free Consultation
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base border-primary-foreground/20 text-primary-foreground bg-primary-foreground/5 hover:bg-primary-foreground/15 backdrop-blur-sm rounded-full px-8"
            >
              <a href="tel:+1234567890">
                <Phone className="w-5 h-5 mr-2" />
                Emergency? Call Now
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-14 flex items-center gap-5"
          >
            <div className="text-primary-foreground/50 text-sm">
              <span className="text-primary-foreground/80 font-medium">
                Open 7 Days
              </span>{" "}
              • 4.8★ Rated • 15,000+ Happy Patients
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
