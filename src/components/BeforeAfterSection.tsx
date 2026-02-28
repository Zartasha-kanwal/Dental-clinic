import { motion } from "framer-motion";
import { useState } from "react";
import teeth_whitening_before from "../assets/teeth-whitening-before.jpg";
import teeth_whitening_after from "../assets/teeth-whitening-after.jpg";
import smile_makeover_before from "../assets/smile-makeover-before.jpg";
import smile_makeover_after from "../assets/smile-makeover-after.jpg";
import dental_implants_before from "../assets/dental-implants-before.jpg";
import dental_implants_after from "../assets/dental-implants-after.jpg";
import orthodontics_before from "../assets/orthodontic-before.jpg";
import orthodontics_after from "../assets/orthodontic-after.jpg";


const cases = [
  {
    label: "Teeth Whitening",
    tag: "Popular",
    before: teeth_whitening_before,
    after: teeth_whitening_after,
    beforeColor: "from-yellow-200/60 to-yellow-400/40",
    afterColor: "from-white to-primary/10",
    description: "Professional whitening — 8 shades brighter in one session",
  },
  {
    label: "Smile Makeover",
    tag: "Premium",
    before: smile_makeover_before,
    after: smile_makeover_after,
    beforeColor: "from-orange-200/50 to-orange-300/40",
    afterColor: "from-white to-accent/10",
    description: "Complete smile transformation with veneers & bonding",
  },
  {
    label: "Dental Implants",
    tag: "Advanced",
    before: dental_implants_before,
    after: dental_implants_after,
    beforeColor: "from-red-200/40 to-red-300/30",
    afterColor: "from-white to-primary/10",
    description: "Natural-looking permanent tooth replacement",
  },
  {
    label: "Orthodontics",
    tag: "Aligners",
    before: orthodontics_before,
    after: orthodontics_after,
    beforeColor: "from-amber-200/50 to-amber-300/40",
    afterColor: "from-white to-accent/10",
    description: "Invisible aligners for a perfectly aligned smile",
  },
];

const BeforeAfterSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-28 md:py-40 bg-section-gradient noise-overlay relative overflow-hidden">
      <div className="floating-shape w-[500px] h-[500px] top-20 -right-60 bg-primary" />
      <div className="floating-shape w-72 h-72 bottom-0 -left-36 bg-accent" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-5">Results</span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
            Before & <span className="text-gradient">After</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-base leading-relaxed">
            Real results from real patients. See the transformations for yourself.
          </p>
        </motion.div>

        {/* Case selector tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {cases.map((c, i) => (
            <motion.button
              key={c.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              onClick={() => setActiveIndex(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-400 ${
                activeIndex === i
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20"
                  : "glass-card text-muted-foreground hover:text-foreground hover:scale-105"
              }`}
            >
              {c.label}
            </motion.button>
          ))}
        </div>

        {/* Active case display */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="gradient-border-card rounded-[2rem] overflow-hidden">
            <div className="glass-card rounded-[2rem] p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Before */}
                <div className="relative group">
                  <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${cases[activeIndex].beforeColor} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                      <div className="absolute top-4 right-4 w-24 h-24 rounded-full border border-foreground" />
                    </div>
                    <img
  src={cases[activeIndex].before}
  alt={`${cases[activeIndex].label} before`}
  className="w-full h-full object-cover"
/>
                  </div>
                  <div className="absolute top-3 left-3 bg-foreground/80 text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Before
                  </div>
                </div>

                {/* After */}
                <div className="relative group">
                  <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${cases[activeIndex].afterColor} flex items-center justify-center relative overflow-hidden shimmer`}>
                    <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                      <div className="absolute bottom-4 left-4 w-20 h-20 rounded-full border border-primary" />
                    </div>
                    <img
  src={cases[activeIndex].after}
  alt={`${cases[activeIndex].label} after`}
  className="w-full h-full object-cover"
/>
                  </div>
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-primary to-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    After
                  </div>
                </div>
              </div>

              {/* Info bar */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display text-xl font-bold text-foreground">{cases[activeIndex].label}</h3>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-primary bg-primary/8 border border-primary/12 rounded-full px-3 py-0.5">
                      {cases[activeIndex].tag}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{cases[activeIndex].description}</p>
                </div>
                <a
                  href="#contact"
                  className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105"
                >
                  Get This Result
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
