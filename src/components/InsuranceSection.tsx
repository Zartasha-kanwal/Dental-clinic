import { motion } from "framer-motion";
import { CreditCard, ShieldCheck } from "lucide-react";

const insurancePartners = [
  "Aetna",
  "Cigna",
  "MetLife",
  "Delta Dental",
  "Guardian",
  "United Healthcare",
  "Humana",
  "BlueCross",
];

const InsuranceSection = () => {
  return (
    <section className="py-20 aurora-bg relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          className="text-center mb-10"
        >
          <span className="section-badge mb-5">
            <CreditCard className="w-3 h-3" />
            Insurance & Payments
          </span>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-3">
            We Accept Most Major{" "}
            <span className="text-gradient">Insurance Plans</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Affordable care with flexible payment options. 0% financing
            available.
          </p>
        </motion.div>

        {/* Logos marquee */}
        <div className="relative overflow-hidden">
          <div className="marquee-track">
            {[...insurancePartners, ...insurancePartners].map((name, i) => (
              <div
                key={`ins-${i}`}
                className="glass-card rounded-xl px-6 py-4 flex items-center gap-3 shrink-0 min-w-[180px] hover:scale-105 transition-transform duration-300"
              >
                <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;
