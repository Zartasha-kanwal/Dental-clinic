import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Fatima Noor",
    text: "Dr. Ahmed Raza Khan treated my severe tooth pain the same day. Completely painless and extremely professional experience.",
    rating: 5,
    role: "Root Canal Patient",
    initials: "FN",
    highlight: "Same-day pain relief",
    service: "Root Canal Treatment",
    doctor: "Dr. Ahmed Raza Khan",
  },
  {
    name: "Usman Tariq",
    text: "I got dental implants here and the results look completely natural. Dr. Ahmed explained everything clearly and made the procedure stress-free.",
    rating: 5,
    role: "Implant Patient",
    initials: "UT",
    highlight: "Natural-looking results",
    service: "Dental Implants",
    doctor: "Dr. Ahmed Raza Khan",
  },
  {
    name: "Areeba Malik",
    text: "Dr. Ayesha Siddiqui did my teeth whitening and the difference is incredible. The process was quick, comfortable, and worth it.",
    rating: 5,
    role: "Teeth Whitening Patient",
    initials: "AM",
    highlight: "Noticeably brighter smile",
    service: "Teeth Whitening",
    doctor: "Dr. Ayesha Siddiqui",
  },
  {
    name: "Hassan Rauf",
    text: "Dr. Hira Malik handled my clear aligner treatment perfectly. The aligners fit comfortably and my smile is improving every month.",
    rating: 5,
    role: "Orthodontic Patient",
    initials: "HR",
    highlight: "Comfortable aligners",
    service: "Clear Aligners",
    doctor: "Dr. Hira Malik",
  },
  {
    name: "Zainab Ahmed",
    text: "Dr. Bilal Mahmood made my routine extraction completely stress-free. Very gentle and reassuring throughout.",
    rating: 5,
    role: "General Dentistry Patient",
    initials: "ZA",
    highlight: "Stress-free procedure",
    service: "Tooth Extraction",
    doctor: "Dr. Bilal Mahmood",
  },
  {
    name: "Ali Hamza",
    text: "From consultation to treatment, everything was handled professionally. I highly recommend Dr. Ahmed for advanced dental care.",
    rating: 5,
    role: "Smile Makeover Patient",
    initials: "AH",
    highlight: "Highly professional care",
    service: "Smile Makeover",
    doctor: "Dr. Ahmed Raza Khan",
  },
];

const TestimonialCard = ({ t }) => (
  <div
    className="w-[200px] lg:w-[380px] shrink-0 rounded-[2rem] lg:p-7 p-3 relative overflow-hidden group transition-all duration-500 text-white"
    style={{
      background:
        "linear-gradient(160deg, hsl(200 80% 42%) 0%, hsl(200 80% 28%) 50%, hsl(168 60% 32%) 100%)",
    }}
  >
    <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
      <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full border-2 border-white" />
      <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full border border-white" />
    </div>

    <Quote className="lg:w-9 lg:h-9 w-5 h-5 lg:mb-4 mb-2 text-white/15" />

    <div className="flex gap-0.5 lg:mb-3 mb-2">
      {Array.from({ length: t.rating }).map((_, j) => (
        <Star key={j} className="w-3.5 h-3.5 fill-white text-white/80" />
      ))}
    </div>

    <span className="inline-block text-[10px] font-semibold uppercase tracking-widest rounded-full lg:px-3 px-1 py-1 lg:mb-4 mb-1 bg-white/12 text-white">
      ✨ {t.highlight}
    </span>

    <p className="lg:text-[14px] text-[11px] leading-relaxed lg:mb-6 mb-2 text-white/75">
      "{t.text}"
    </p>

    <div className="h-px lg:mb-5 mb-2 bg-white/40" />

    <div className="flex items-center gap-3">
      <div className="lg:w-10 lg:h-10 h-8 w-8 rounded-full flex items-center justify-center font-semibold text-xs bg-white/15 text-white backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
        {t.initials}
      </div>
      <div>
        <span className="lg:text-sm text-[10px] font-semibold block text-white">
          {t.name}
        </span>
        <span className="text-xs text-white/50">{t.role}</span>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const row1 = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="py-28 md:py-40 aurora-bg relative overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-5">Testimonials</span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
            Loved by Our <span className="text-gradient">Patients</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-base leading-relaxed">
            Hear from real patients who trust our team with their smiles.
          </p>
        </motion.div>
      </div>

      {/* Marquee Row */}
      <div className="relative mb-5">
        <div className="marquee-track">
          {row1.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
