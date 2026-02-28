import { motion } from "framer-motion";
import { Star, ThumbsUp } from "lucide-react";

const reviews = [
  {
    name: "Dr. Ananya Patel",
    initials: "AP",
    rating: 5,
    time: "2 weeks ago",
    text: "Best dental experience I've ever had! Dr. Patel explained everything clearly and the procedure was completely painless. Highly recommend!",
  },
  {
    name: "Dr. James Holloway",
    initials: "JH",
    rating: 5,
    time: "1 month ago",
    text: "Got my dental implants done here. Dr. Holloway’s precision and expertise made the whole process seamless. Worth every penny!",
  },
  {
    name: "Dr. Sophia Martinez",
    initials: "SM",
    rating: 5,
    time: "3 weeks ago",
    text: "Dr. Martinez made my root canal completely painless and efficient. The clinic is spotless and modern — truly outstanding care.",
  },
  {
    name: "Dr. Ethan Reynolds",
    initials: "ER",
    rating: 4,
    time: "1 month ago",
    text: "Professional service with excellent gum treatment. Dr. Reynolds explained the procedure step by step, and the results were amazing.",
  },
  {
    name: "Dr. Olivia Chen",
    initials: "OC",
    rating: 5,
    time: "2 months ago",
    text: "My children actually enjoy coming to the dentist thanks to Dr. Chen’s gentle and caring approach. Highly recommend her pediatric care!",
  },
  {
    name: "Dr. Michael Grant",
    initials: "MG",
    rating: 5,
    time: "3 weeks ago",
    text: "Switched to BrightSmile for oral surgery. Dr. Grant’s expertise made the procedure smooth and completely stress-free. Amazing experience!",
  },
];

const GoogleReviewsSection = () => {
  return (
    <section className="py-20 bg-section-gradient noise-overlay relative overflow-hidden">
      <div className="floating-shape w-96 h-96 -top-48 -left-48 bg-primary" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-badge mb-5">
            {/* Google colors */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google Reviews
          </span>

          {/* Summary */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="font-display text-5xl md:text-6xl font-bold text-foreground">4.8</span>
            <div className="text-left">
              <div className="flex gap-0.5 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "text-muted"}`} />
                ))}
              </div>
              <p className="text-muted-foreground text-sm">from <span className="font-semibold text-foreground">300+</span> reviews</p>
            </div>
          </div>
        </motion.div>

        {/* Review cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group"
            >
              <div
                className="glass-card rounded-2xl p-5 h-full flex flex-col transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                style={{
                  boxShadow: `0 0 6px hsl(200 80% 35% / 0.2), 0 2px 12px hsl(210 25% 15% / 0.06)`,
                }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-sm font-bold text-primary">
                    {r.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-semibold text-foreground block">{r.name}</span>
                    <span className="text-[11px] text-muted-foreground">{r.time}</span>
                  </div>
                  {/* Google "G" badge */}
                  <svg className="w-5 h-5 shrink-0 opacity-50" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{r.text}"</p>

                {/* Helpful */}
                <div className="mt-3 pt-3 border-t border-border/40 flex items-center gap-2 text-[11px] text-muted-foreground">
                  <ThumbsUp className="w-3 h-3" />
                  <span>Helpful</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
