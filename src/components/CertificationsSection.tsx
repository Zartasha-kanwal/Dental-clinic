import { motion } from "framer-motion";
import { ShieldCheck, Award, BadgeCheck, Star } from "lucide-react";

const certifications = [
  { icon: ShieldCheck, label: "ADA Member", subtitle: "American Dental Association" },
  { icon: Award, label: "ISO 9001", subtitle: "Certified Clinic" },
  { icon: BadgeCheck, label: "NABH Accredited", subtitle: "Quality Healthcare" },
  { icon: Star, label: "JCI Accredited", subtitle: "International Standards" },
  { icon: ShieldCheck, label: "FDA Approved", subtitle: "Materials & Equipment" },
];

const CertificationsSection = () => {
  return (
    <section className="py-20 md:py-28 aurora-bg relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-badge mb-5">Credentials</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Certified. Recognized. <span className="text-gradient">Trusted.</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-base leading-relaxed">
            Our clinic meets the highest international standards for dental care.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, type: "spring" }}
              className="group"
            >
              <div
                className="glass-card rounded-2xl px-6 py-5 flex flex-col items-center text-center min-w-[140px] shimmer cursor-pointer transition-all duration-500 hover:scale-105"
                style={{
                  boxShadow: `0 0 8px hsl(200 80% 35% / 0.3), 0 0 4px hsl(168 60% 35% / 0.2)`,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-[-5deg] transition-all duration-700 shadow-md">
                  <cert.icon className="w-6 h-6 text-white" />
                </div>
                <span className="font-display text-sm font-bold text-foreground mb-0.5">{cert.label}</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest">{cert.subtitle}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
