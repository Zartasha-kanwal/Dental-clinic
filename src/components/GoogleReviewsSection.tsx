import { motion } from "framer-motion";
import { Star, ThumbsUp } from "lucide-react";

const reviews = [
  {
    name: "Ahmed Raza",
    initials: "AR",
    rating: 5,
    time: "2 weeks ago",
    text: "I was extremely nervous about my root canal, but the procedure was completely painless. The doctor explained everything clearly and the clinic was very clean. Highly recommended.",
  },
  {
    name: "Fatima Khan",
    initials: "FK",
    rating: 5,
    time: "1 month ago",
    text: "Got dental implants done here. The process was smooth and professional from consultation to follow-up. Very satisfied with the results.",
  },
  {
    name: "Usman Ali",
    initials: "UA",
    rating: 5,
    time: "3 weeks ago",
    text: "Best dental experience I’ve had in Lahore. Quick appointment, no long waiting time, and truly pain-free treatment.",
  },
  {
    name: "Ayesha Siddiqui",
    initials: "AS",
    rating: 4,
    time: "1 month ago",
    text: "Very professional staff and modern equipment. The doctor guided me step by step during my gum treatment.",
  },
  {
    name: "Bilal Ahmed",
    initials: "BA",
    rating: 5,
    time: "2 months ago",
    text: "Brought my mother for a smile makeover consultation. The results exceeded our expectations. Excellent service.",
  },
  {
    name: "Hina Malik",
    initials: "HM",
    rating: 5,
    time: "3 weeks ago",
    text: "Clean environment, friendly team, and transparent pricing. I felt comfortable throughout the entire procedure.",
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
          <span className="section-badge mb-5">Google Reviews</span>

          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="font-display text-5xl md:text-6xl font-bold text-foreground">
              4.8
            </span>
            <div className="text-left">
              <div className="flex gap-0.5 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-sm">
                from{" "}
                <span className="font-semibold text-foreground">
                  312 verified reviews
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Review cards */}
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
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-sm font-bold text-primary">
                    {r.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-semibold text-foreground block">
                      {r.name}
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      {r.time}
                    </span>
                  </div>
                </div>

                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  "{r.text}"
                </p>

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
