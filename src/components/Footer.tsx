import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-foreground text-primary-foreground pt-20 pb-8 overflow-hidden">
      <div className="floating-shape w-[500px] h-[500px] -top-60 -right-60 bg-primary opacity-[0.04]" />
      <div className="floating-shape w-72 h-72 bottom-20 -left-36 bg-accent opacity-[0.04]" />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-14">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <img
                src={logo}
                alt="BrightSmile Dental Logo"
                className="w-10 h-10"
              />

              <span className="font-display text-xl font-bold">
                BrightSmile Dental
              </span>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed max-w-xs">
              Trusted dental care with modern technology since 2010. Your smile,
              our priority
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-5 text-primary-foreground/80 text-sm uppercase tracking-widest">
              Quick Links
            </h4>
            <div className="space-y-3 text-sm text-primary-foreground/50">
              {["About Us", "Services", "Testimonials", "Contact"].map(
                (label) => (
                  <a
                    key={label}
                    href={`#${label.toLowerCase().replace(" ", "")}`}
                    className="block hover:text-primary-foreground hover:translate-x-1 transition-all duration-300"
                  >
                    {label}
                  </a>
                ),
              )}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-5 text-primary-foreground/80 text-sm uppercase tracking-widest">
              Contact Info
            </h4>
            <div className="space-y-4 text-sm text-primary-foreground/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/5 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href="tel:+1234567890"
                  className="hover:text-primary-foreground transition-colors"
                >
                  +92 42 1234 5678
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/5 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href="mailto:hello@brightsmile.com"
                  className="hover:text-primary-foreground transition-colors"
                >
                  hello@brightsmile.com.pk
                </a>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/5 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>
                  1Plot 45, Main Boulevard, Gulberg II Lahore, Punjab, Pakistan
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="divider-gradient opacity-20" />

        <div className="pt-6 text-center text-xs text-primary-foreground/30">
          © {new Date().getFullYear()} BrightSmile Dental Clinic. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
