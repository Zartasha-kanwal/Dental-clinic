import { useState, useEffect, useRef } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  
  const scrollToSection = (id: string) => {
  const el = document.querySelector(id);
  if (!el) return;

  if (isOpen) {
    setIsOpen(false);
    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth" });
    }, 300); 
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-card shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <img
            src={logo}
            alt="BrightSmile Logo"
            className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
          />
          <span
            className={`font-display text-xl font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            BrightSmile
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={`text-sm font-medium transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-hero-gradient after:transition-all after:duration-300 hover:after:w-full after:rounded-full ${
                scrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            size="sm"
            className="rounded-full shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 transition-all px-5"
          >
            <a href="tel:+1234567890">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-1 transition-colors duration-300 ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden border-t border-border/60 glass-card overflow-hidden"
          >
            <div className="px-4 pb-5 pt-2 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="w-full text-left py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button asChild className="w-full mt-3 rounded-full" size="sm">
                <a href="tel:+1234567890">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;