import { motion } from "framer-motion";
import { Award, GraduationCap, Calendar, ArrowRight } from "lucide-react";

const doctors = [
  {
    name: "Dr. Ananya Patel",
    qualifications: "BDS, MDS (Prosthodontics)",
    experience: "18+ Years",
    specialization: "Cosmetic & Restorative Dentistry",
    bio: "A pioneer in smile makeovers with advanced training from NYU College of Dentistry. Dr. Patel has transformed over 5,000 smiles using cutting-edge techniques.",
    initials: "AP",
    gradient: "from-blue-500 to-blue-400",
  },
  {
    name: "Dr. James Holloway",
    qualifications: "BDS, MDS (Orthodontics), FICOI",
    experience: "12+ Years",
    specialization: "Implantology & Orthodontics",
    bio: "Board-certified implantologist and Fellow of the ICOI. Dr. Holloway specializes in full-mouth rehabilitation and invisible aligner treatments.",
    initials: "JH",
    gradient: "from-blue-600 to-blue-500",
  },
  {
    name: "Dr. Sophia Martinez",
    qualifications: "DDS, MS (Endodontics)",
    experience: "10+ Years",
    specialization: "Root Canal & Microscope Dentistry",
    bio: "Specialist in painless root canal treatments using advanced microscopic technology for precision and comfort-focused care.",
    initials: "SM",
    gradient: "from-blue-400 to-blue-300",
  },
  {
    name: "Dr. Ethan Reynolds",
    qualifications: "DDS (Periodontics)",
    experience: "14+ Years",
    specialization: "Gum Surgery & Laser Dentistry",
    bio: "Expert in laser-assisted gum treatments and periodontal regeneration procedures with minimally invasive techniques.",
    initials: "ER",
    gradient: "from-blue-700 to-blue-500",
  },
  {
    name: "Dr. Olivia Chen",
    qualifications: "BDS, MDS (Pediatric Dentistry)",
    experience: "9+ Years",
    specialization: "Children’s Dentistry",
    bio: "Dedicated to creating a stress-free dental experience for children with preventive care and behavioral management expertise.",
    initials: "OC",
    gradient: "from-blue-500 to-blue-400",
  },
  {
    name: "Dr. Michael Grant",
    qualifications: "DDS, MBA (Oral Surgery)",
    experience: "16+ Years",
    specialization: "Oral & Maxillofacial Surgery",
    bio: "Specialist in wisdom tooth extractions, facial trauma care, and advanced surgical procedures with hospital-based training.",
    initials: "MG",
    gradient: "from-blue-600 to-blue-400",
  },
];

const DoctorsSection = () => {
  return (
    <section id="doctors" className="py-20 bg-section-gradient noise-overlay relative overflow-hidden">
      <div className="floating-shape w-[500px] h-[500px] -top-60 -left-60 bg-primary" />
      <div className="floating-shape w-80 h-80 bottom-10 -right-40 bg-accent" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="section-badge mb-5">Our Experts</span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
            Meet Our <span className="text-gradient">Doctors</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-base leading-relaxed">
            World-class dental professionals committed to your perfect smile.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group"
            >
              <div className="gradient-border-card rounded-[2rem] overflow-hidden cursor-pointer">
                <div className="glass-card rounded-[2rem] p-7 md:p-9 relative overflow-hidden">
                  {/* Decorative rings */}
                  <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border-2 border-foreground" />
                    <div className="absolute bottom-8 left-8 w-24 h-24 rounded-full border border-foreground" />
                  </div>

                  {/* Avatar + Name */}
                  <div className="flex items-start gap-5 mb-6 relative z-10">
                    <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${doc.gradient} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 group-hover:rotate-[-3deg] transition-all duration-700`}>
                      <span className="text-2xl md:text-3xl font-bold text-white font-display">{doc.initials}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">{doc.name}</h3>
                      <p className="text-primary text-sm font-medium mb-2">{doc.qualifications}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest text-accent bg-accent/8 border border-accent/12 rounded-full px-3 py-0.5">
                          <Calendar className="w-3 h-3" />
                          {doc.experience}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest text-primary bg-primary/8 border border-primary/12 rounded-full px-3 py-0.5">
                          <GraduationCap className="w-3 h-3" />
                          {doc.specialization}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative z-10">
                    {doc.bio}
                  </p>

                  {/* Divider */}
                  <div className="divider-gradient opacity-100s mb-5" />

                  {/* Stats row */}
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Award className="w-3.5 h-3.5 text-primary" />
                      <span>Board Certified</span>
                    </div>
                    <div className="w-px h-3 bg-border" />
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <span>5000+ Procedures</span>
                    </div>
                    <div className="ml-auto">
                      <a href="#contact" className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors group/link">
                        Book Appointment
                        <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
