import { motion } from "framer-motion";
import { ShieldCheck, Award, BadgeCheck, Star } from "lucide-react";

const certifications = [
  {
    icon: ShieldCheck,
    label: "PDA Member",
    subtitle: "Pakistan Dental Association",
  },
  {
    icon: BadgeCheck,
    label: "PMDC Registered",
    subtitle: "Pakistan Medical & Dental Council",
  },
  {
    icon: Award,
    label: "ISO 9001 Certified",
    subtitle: "Quality Management System",
  },
  {
    icon: Star,
    label: "Certified Implant Center",
    subtitle: "Advanced Implantology Training",
  },
];

const CertificationsSection = () => {
  return (
    <section className="py-20 md:py-28 aurora-bg relative overflow-hidden">
      <div className="container mx-auto relative z-10 px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-5">Our Credentials</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Certified. Registered.{" "}
            <span className="text-gradient">Trusted.</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-base leading-relaxed">
            We follow nationally approved standards and internationally
            recognized dental protocols to ensure safe, ethical, and
            high-quality care.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="glass-card rounded-2xl px-8 py-6 flex flex-col items-center text-center min-w-[180px] transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-500">
                  <cert.icon className="w-7 h-7 text-white" />
                </div>

                <span className="font-display text-base font-bold text-foreground mb-1">
                  {cert.label}
                </span>

                <span className="text-xs text-muted-foreground uppercase tracking-widest">
                  {cert.subtitle}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
