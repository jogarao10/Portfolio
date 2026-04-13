import { motion, useReducedMotion } from "framer-motion";
import { BriefcaseBusiness, Building2 } from "lucide-react";
import "./Experience.css";

const experienceItems = [
  {
    title: "Rhinexa India Pvt. Ltd.",
    role: "Full Stack Developer",
    duration: "Jan 2025 - Present",
    type: "Company",
    icon: Building2,
    description:
      "Working on full-stack application development with a focus on backend APIs, frontend modules, and production-ready delivery.",
  },
  {
    title: "Freelancing Projects",
    role: "Full Stack Developer",
    duration: "Jan 2024 - Present",
    type: "Independent",
    icon: BriefcaseBusiness,
    description:
      "Building custom business applications independently, handling end-to-end implementation from requirement analysis to deployment.",
  },
];

function Experience() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="experience" id="experience">
      <div className="experience__ambient" aria-hidden>
        <span className="experience__orb experience__orb--a" />
        <span className="experience__orb experience__orb--b" />
      </div>
      <div className="experience__inner">
        <motion.header
          className="experience__header"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reducedMotion ? 0.01 : 0.5, ease: "easeOut" }}
        >
          <p className="experience__eyebrow">Career timeline</p>
          <h2 className="experience__title">
            My <span>Experience</span>
          </h2>
          <p className="experience__lead">Professional and freelance journey with continuous full-stack delivery.</p>
        </motion.header>

        <div className="experience__timeline">
          {experienceItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="experience__card"
                initial={{ opacity: 0, y: reducedMotion ? 0 : 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.52,
                  ease: "easeOut",
                  delay: reducedMotion ? 0 : index * 0.08,
                }}
                whileHover={
                  reducedMotion
                    ? undefined
                    : { y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }
                }
              >
                <div className="experience__card-top">
                  <span className="experience__icon" aria-hidden>
                    <Icon size={16} />
                  </span>
                  <span className="experience__type">{item.type}</span>
                </div>
                <p className="experience__duration">{item.duration}</p>
                <h3 className="experience__company">{item.title}</h3>
                <p className="experience__role">{item.role}</p>
                <div className="experience__divider" aria-hidden />
              <p className="experience__description">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
