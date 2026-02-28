import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    text: "Dr. Patel made my smile makeover completely painless — highly recommended! The entire team was so friendly and professional throughout.",
    rating: 5,
    role: "Smile Makeover Patient",
    initials: "SM",
    highlight: "Completely painless",
    service: "Smile Makeover",
    doctor: "Dr. Ananya Patel",
  },
  {
    name: "James Rodriguez",
    text: "I got dental implants here and couldn't be happier. Dr. Holloway ensured zero pain during the procedure and the results look natural.",
    rating: 5,
    role: "Implant Patient",
    initials: "JR",
    highlight: "Zero pain and natural results",
    service: "Dental Implants",
    doctor: "Dr. James Holloway",
  },
  {
    name: "Priya Sharma",
    text: "Dr. Martinez’s teeth whitening procedure was quick and comfortable. My teeth are brighter than ever, and the results exceeded my expectations!",
    rating: 5,
    role: "Teeth Whitening Patient",
    initials: "PS",
    highlight: "Brighter than ever",
    service: "Teeth Whitening",
    doctor: "Dr. Sophia Martinez",
  },
  {
    name: "David Chen",
    text: "Professional orthodontic care from Dr. Reynolds. My invisible aligners fit perfectly, and follow-ups keep everything on track.",
    rating: 5,
    role: "Orthodontic Patient",
    initials: "DC",
    highlight: "Perfect fit aligners",
    service: "Orthodontics",
    doctor: "Dr. Ethan Reynolds",
  },
  {
    name: "Emily Brooks",
    text: "Dr. Chen made my child’s first dental visit enjoyable and stress-free. Exceptional pediatric care and very gentle approach.",
    rating: 5,
    role: "Pediatric Patient",
    initials: "EB",
    highlight: "Stress-free dental visit",
    service: "Children’s Dentistry",
    doctor: "Dr. Olivia Chen",
  },
  {
    name: "Marcus Okafor",
    text: "Dr. Grant performed my oral surgery flawlessly. Pain-free, efficient, and I felt completely safe throughout the procedure.",
    rating: 5,
    role: "Oral Surgery Patient",
    initials: "MO",
    highlight: "Pain-free and efficient",
    service: "Oral & Maxillofacial Surgery",
    doctor: "Dr. Michael Grant",
  },
];

const TestimonialCard = ({ t }: { t: (typeof testimonials)[0] }) => (
  <div
    className="w-[200px] lg:w-[380px] shrink-0 rounded-[2rem] lg:p-7 p-3 relative overflow-hidden group transition-all duration-500 text-white"
    style={{
      background:
        "linear-gradient(160deg, hsl(200 80% 42%) 0%, hsl(200 80% 28%) 50%, hsl(168 60% 32%) 100%)",
    }}
  >
    {/* rings */}
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
      <div className="lg:w-10 lg:h-10 h-8 w-8 rounded-full flex items-center justify-center font-semibold g:text-sm text-xs bg-white/15 text-white backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
        {t.initials}
      </div>
      <div>
        <span className="lg:text-sm text-[10px]  font-semibold block text-white">
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
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-5">Testimonials</span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
            Loved by Our <span className="text-gradient">Patients</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-base leading-relaxed">
            Hear from real people who trust us with their smiles.
          </p>
        </motion.div>
      </div>

      {/* Marquee row 1 */}
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
