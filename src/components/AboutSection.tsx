import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  Award,
  DollarSign,
  Sparkles,
  Shield,
  CheckCircle2,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = Date.now();
          const step = () => {
            const progress = Math.min((Date.now() - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const stats = [
  { number: 20, suffix: "+", label: "Years Experience", icon: Award },
  { number: 15, suffix: "K+", label: "Happy Patients", icon: Shield },
  { number: 98, suffix: "%", label: "Satisfaction Rate", icon: Sparkles },
  { number: 0, suffix: "%", label: "Financing", icon: DollarSign },
];

const highlights = [
  "Gentle, pain-free procedures",
  "State-of-the-art sterilization",
  "Same-day emergency appointments",
  "Family-friendly environment",
  "Weekend availability",
  "Insurance accepted",
];

const TiltCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-28 md:py-40 aurora-bg noise-overlay relative"
    >
      <div className="container mx-auto relative z-10">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="section-badge mb-5">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
            Care You Can <span className="text-gradient">Trust</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-base leading-relaxed">
            We combine expertise, affordability, and modern technology for the
            best dental experience possible.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row md:gap-6">
          {/* TiltCard */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-8 md:mb-0 md:w-2/3"
          >
            <TiltCard className="h-full rounded-[2rem] p-8 md:p-10 relative overflow-hidden group cursor-pointer">
              <div
                className="absolute inset-0 z-0"
                style={{
                  background:
                    "linear-gradient(145deg, hsl(200 80% 38%) 0%, hsl(200 85% 28%) 40%, hsl(168 55% 32%) 100%)",
                }}
              />
              {/* rings */}
              <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
                <div className="absolute top-8 right-8 w-48 h-48 rounded-full border-[1.5px] border-white" />
                <div className="absolute bottom-12 right-24 w-28 h-28 rounded-full border border-white" />
                <div className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full border border-white/50" />
              </div>

              <div className="relative z-10 cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-7 group-hover:scale-110 group-hover:rotate-[-5deg] transition-all duration-700">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                  Experienced &<br />
                  <span className="italic font-light opacity-80">
                    Award-Winning
                  </span>
                </h3>
                <p className="text-white/65 text-base leading-relaxed mb-8 max-w-md">
                  Our team brings decades of combined experience, ensuring every
                  visit is comfortable, efficient, and effective.
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {highlights.map((h, i) => (
                    <motion.div
                      key={h}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.07 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span className="text-white/70 text-[13px]">{h}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Stats */}
          <div className="md:w-1/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
                className=" group cursor-pointer  rounded-[1.5rem]"
                style={{
                  boxShadow: `
                  0 0 10px hsl(200 80% 35% / 0.6),
                  0 0 5px hsl(168 60% 35% / 0.5),
                  0 0 10px hsl(200 80% 45% / 0.4),
                  0 0 5px hsl(210 25% 15% / 0.3)
                  `,
                }}
              >
                <div className="glass-card rounded-[1.5rem] p-6 text-center h-full flex flex-col items-center justify-center gap-1 shimmer">
                  <s.icon className="w-5 h-5 text-primary/50 mb-2 group-hover:text-primary group-hover:scale-110 transition-all duration-500" />
                  <span className="text-3xl md:text-4xl font-bold text-gradient font-display block">
                    <AnimatedCounter target={s.number} suffix={s.suffix} />
                  </span>
                  <span className="text-[11px] text-muted-foreground uppercase tracking-widest">
                    {s.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
