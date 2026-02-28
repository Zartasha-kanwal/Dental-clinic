import { motion } from "framer-motion";
import { Smile, ShieldCheck, Stethoscope, Zap, HeartPulse, ArrowRight } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Smile,
    title: "Teeth Whitening",
    description: "Get a brighter smile in just one visit. Safe, fast, and guaranteed to turn heads.",
    tag: "Popular",
    gradient: "from-primary to-accent",
    detail: "Professional-grade whitening in just 60 minutes",
  },
  {
    icon: ShieldCheck,
    title: "Root Canal",
    description: "Pain-free root canal using modern sedation techniques. Save your tooth without the fear.",
    gradient: "from-accent to-primary/70",
    detail: "99% success rate with gentle sedation options",
  },
  {
    icon: Stethoscope,
    title: "General Checkups",
    description: "Routine exams and cleanings to maintain your oral health year-round.",
    gradient: "from-primary/80 to-accent/80",
    detail: "Comprehensive exam with digital X-rays included",
  },
  {
    icon: Zap,
    title: "Dental Implants",
    description: "Permanent solutions for missing teeth that look and feel completely natural.",
    tag: "Advanced",
    gradient: "from-accent/80 to-primary",
    detail: "Lifetime warranty on all implant procedures",
  },
  {
    icon: HeartPulse,
    title: "Orthodontics",
    description: "Invisible braces for confident smiles fast, discreet, and effective.",
    gradient: "from-primary to-accent/60",
    detail: "Invisible aligners starting from $99/month",
  },
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-28 md:py-40 bg-section-gradient noise-overlay relative overflow-hidden">
      <div className="floating-shape w-[600px] h-[600px] top-10 -right-72 bg-primary" />
      <div className="floating-shape w-80 h-80 bottom-20 -left-40 bg-accent" />

      <div className="container mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="section-badge mb-5">What We Offer</span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-base leading-relaxed">
            Comprehensive dental care tailored for the whole family.
          </p>
        </motion.div>

        {/* service list*/}
        <div className="max-w-4xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div
                className={`relative flex items-center gap-5 md:gap-8 py-7 md:py-8 px-5 md:px-8 rounded-2xl cursor-pointer transition-all duration-600 ${
                  hoveredIndex === i
                    ? "glass-card scale-[1.02] border-primary/15"
                    : ""
                }`}
              >
                {/*glow*/}
                <div className="relative">
                  <div
                    className={`absolute inset-0 rounded-2xl blur-xl transition-opacity duration-700 ${
                      hoveredIndex === i ? "opacity-40" : "opacity-0"
                    } bg-gradient-to-br ${s.gradient}`}
                  />
                  <div
                    className={`relative w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shrink-0 transition-all duration-700 ${
                      hoveredIndex === i ? "scale-110 rotate-[-5deg] shadow-2xl" : "shadow-md"
                    }`}
                  >
                    <s.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-display text-lg md:text-xl font-semibold text-foreground">{s.title}</h3>
                    {s.tag && (
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-primary bg-primary/8 border border-primary/12 rounded-full px-3 py-0.5">
                        {s.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                  <motion.div
                    initial={false}
                    animate={{
                      height: hoveredIndex === i ? "auto" : 0,
                      opacity: hoveredIndex === i ? 1 : 0,
                      marginTop: hoveredIndex === i ? 8 : 0,
                    }}
                    transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-primary text-xs font-medium flex items-center gap-1.5">
                      <ArrowRight className="w-3.5 h-3.5" />
                      {s.detail}
                    </p>
                  </motion.div>
                </div>

                {/* Number */}
                <motion.span
                  animate={{
                    opacity: hoveredIndex === i ? 0.9 : 0.08,
                    scale: hoveredIndex === i ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`hidden md:block font-display text-6xl font-bold transition-colors duration-500 ${
                    hoveredIndex === i ? "text-gradient" : "text-foreground"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>
              </div>

              {i < services.length - 1 && (
                <div className="divider-gradient mx-8 opacity-60" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
