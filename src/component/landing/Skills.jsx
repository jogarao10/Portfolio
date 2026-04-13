import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import "./Skills.css";

const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "J2EE", "Python"],
    span: "sm",
  },
  {
    title: "Backend & frameworks",
    items: ["Spring", "Spring Boot", "Hibernate", "Microservices", "JDBC", "Servlets", "JSP"],
    span: "lg",
  },
  {
    title: "Frontend",
    items: ["HTML", "CSS", "React", "JavaScript", "React Native "],
    span: "fe",
  },
  {
    title: "Data",
    items: ["MySQL", "Oracle", "SQL", "PostgreSQL"],
    span: "data",
  },
  {
    title: "DevOps & tooling",
    items: [
      "AWS",
      "CI/CD",
      "Deployment",
      "Git",
      "Monitoring",
      "Grafana",
      "GitHub",
      "Maven",
      "Docker",
    ],
    span: "devops",
  },
];

const headerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.04 },
  },
};

function headerChild(reduced) {
  return {
    hidden: { opacity: 0, y: reduced ? 0 : 26, filter: reduced ? "none" : "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: reduced
        ? { duration: 0.01 }
        : { type: "spring", stiffness: 80, damping: 18, mass: 0.85 },
    },
  };
}

function cardBodyVariants(reduced) {
  return {
    hidden: {
      opacity: 0,
      y: reduced ? 0 : 44,
      rotateX: reduced ? 0 : 11,
      filter: reduced ? "none" : "blur(14px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: reduced
        ? { duration: 0.01 }
        : {
            type: "spring",
            stiffness: 64,
            damping: 14,
            mass: 0.95,
            staggerChildren: 0.11,
            delayChildren: 0.05,
          },
    },
  };
}

function headVariants(reduced) {
  return {
    hidden: { opacity: 0, x: reduced ? 0 : -14 },
    visible: {
      opacity: 1,
      x: 0,
      transition: reduced ? { duration: 0.01 } : { type: "spring", stiffness: 220, damping: 20 },
    },
  };
}

const tagListOuter = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.038, delayChildren: 0.02 },
  },
};

function tagItem(reduced) {
  return {
    hidden: { opacity: 0, scale: reduced ? 1 : 0.78, y: reduced ? 0 : 12 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: reduced
        ? { duration: 0.01 }
        : { type: "spring", stiffness: 440, damping: 25 },
    },
  };
}

function Skills() {
  const reduced = useReducedMotion();
  const rootRef = useRef(null);
  const headerInView = useInView(rootRef, { once: true, margin: "-12% 0px -55% 0px" });

  return (
    <section className="skills" id="skills" ref={rootRef}>
      <div className="skills__ambient" aria-hidden>
        <span className="skills__orb skills__orb--a" />
        <span className="skills__orb skills__orb--b" />
        <span className="skills__grid-lines" />
      </div>

      <div className="skills__inner">
        <motion.header
          className="skills__header"
          variants={headerContainer}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <motion.p className="skills__eyebrow" variants={headerChild(reduced)}>
            Stack &amp; craft
          </motion.p>
          <motion.h2 className="skills__title" variants={headerChild(reduced)}>
            My <span className="skills__title-accent">Skills</span>
          </motion.h2>
          <motion.p className="skills__lead" variants={headerChild(reduced)}>
            A living toolkit for APIs, interfaces, and shipping with confidence from
            commit to cloud.
          </motion.p>
        </motion.header>

        <ul className="skills__grid" style={{ perspective: reduced ? undefined : 1180 }}>
          {skillGroups.map((group) => (
            <li key={group.title} className={`skills__card skills__card--${group.span}`}>
              <span className="skills__card-shine" aria-hidden />
              <motion.div
                className="skills__card-body"
                variants={cardBodyVariants(reduced)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.32, margin: "0px 0px -12% 0px" }}
                whileHover={
                  reduced
                    ? undefined
                    : {
                        y: -6,
                        transition: { type: "spring", stiffness: 400, damping: 18 },
                      }
                }
              >
                <motion.div className="skills__card-head" variants={headVariants(reduced)}>
                  <span className="skills__pulse" aria-hidden />
                  <h3 className="skills__card-title">{group.title}</h3>
                </motion.div>
                <motion.ul className="skills__tags" variants={tagListOuter}>
                  {group.items.map((item) => (
                    <motion.li key={item} variants={tagItem(reduced)}>
                      <span className="skills__tag">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
