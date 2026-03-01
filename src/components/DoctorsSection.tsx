import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const leadDoctor = {
  name: "Dr. Ahmed Raza Khan",
  qualifications: "MDS (Operative Dentistry & Endodontics)",
  role: "Founder & Lead Dental Surgeon",
  experience: "14+ Years Experience",
  highlight: "3,800+ Successful Procedures",
  specialization: "Painless Root Canal & Smile Makeovers",
  bio: "Dr. Ahmed Raza Khan is the founder and chief dental surgeon at BrightSmile Dental. With over 14 years of experience, he has successfully treated more than 3,800 patients using modern, minimally invasive techniques. He specializes in same-day root canal treatments, smile makeovers, and advanced restorative procedures with a strong focus on patient comfort and long-term results.",
  initials: "AK",
  gradient: "from-blue-600 to-blue-500",
};

const supportingDoctors = [
  {
    name: "Dr. Ayesha Siddiqui",
    qualifications: "BDS (Cosmetic Dentistry)",
    experience: "8+ Years Experience",
    specialization: "Teeth Whitening & Veneers",
    bio: "Focused on aesthetic dentistry and natural-looking smile enhancements using modern cosmetic techniques.",
    initials: "AS",
    gradient: "from-blue-500 to-blue-400",
  },
  {
    name: "Dr. Bilal Mahmood",
    qualifications: "BDS (General Dentistry)",
    experience: "6+ Years Experience",
    specialization: "Preventive & Family Dentistry",
    bio: "Specialist in routine checkups, painless extractions, and comprehensive preventive dental care.",
    initials: "BM",
    gradient: "from-blue-500 to-blue-400",
  },
  {
    name: "Dr. Hira Malik",
    qualifications: "MDS (Orthodontics)",
    experience: "10+ Years Experience",
    specialization: "Braces & Clear Aligners",
    bio: "Expert in modern orthodontic treatments including clear aligners and advanced brace systems for teens and adults.",
    initials: "HM",
    gradient: "from-blue-500 to-blue-400",
  },
];

const DoctorsSection = () => {
  return (
    <section
      id="doctors"
      className="py-24 bg-section-gradient noise-overlay relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="section-badge mb-5">Our Experts</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
            Meet Our <span className="text-gradient">Lead Specialist</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Experienced dental professionals dedicated to delivering painless,
            modern, and trusted care.
          </p>
        </motion.div>

        {/* Lead Doctor */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto mb-20 cursor-pointer"
        >
          <div className="gradient-border-card rounded-[2rem] overflow-hidden">
            <div className="glass-card rounded-[2rem] p-10 md:p-14">
              <div className="grid md:grid-cols-3 gap-10 items-center">
                <div
                  className={`w-40 h-40 rounded-3xl bg-gradient-to-br ${leadDoctor.gradient} flex items-center justify-center shadow-xl`}
                >
                  <span className="text-5xl font-bold text-white font-display">
                    {leadDoctor.initials}
                  </span>
                </div>

                <div className="md:col-span-2">
                  <h3 className="font-display text-3xl font-bold mb-2">
                    {leadDoctor.name}
                  </h3>

                  <p className="text-primary font-medium mb-2">
                    {leadDoctor.role}
                  </p>

                  <p className="text-muted-foreground mb-4 text-sm">
                    {leadDoctor.qualifications}
                  </p>

                  <p className="text-muted-foreground mb-4">
                    {leadDoctor.experience} • {leadDoctor.specialization}
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {leadDoctor.bio}
                  </p>

                  <div className="flex items-center gap-6 flex-wrap">
                    <span className="text-sm font-semibold text-accent">
                      {leadDoctor.highlight}
                    </span>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
                    >
                      Book Appointment
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Supporting Doctors */}
        <div className="text-center mb-12">
          <h3 className="font-display text-2xl md:text-3xl font-bold">
            Our Dental Specialists
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {supportingDoctors.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="gradient-border-card rounded-[2rem] overflow-hidden cursor-pointer">
                <div className="glass-card rounded-[2rem] p-8">
                  <div className="flex items-start gap-5 mb-4">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${doc.gradient} flex items-center justify-center`}
                    >
                      <span className="text-2xl font-bold text-white font-display">
                        {doc.initials}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-display text-xl font-bold">
                        {doc.name}
                      </h4>

                      <p className="text-primary text-sm">
                        {doc.qualifications}
                      </p>

                      <p className="text-xs text-muted-foreground mt-1">
                        {doc.experience} • {doc.specialization}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {doc.bio}
                  </p>
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
