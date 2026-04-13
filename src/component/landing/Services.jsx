import { motion, useReducedMotion } from "framer-motion";
import {
  AppWindow,
  Blocks,
  Bot,
  CloudCog,
  Database,
  LayoutDashboard,
  LockKeyhole,
  Smartphone,
  SquareTerminal,
  Workflow,
} from "lucide-react";
import "./Services.css";

const services = [
  {
    title: "Full Stack Application Development",
    description:
      "Build complete, scalable web applications using modern frontend and backend technologies with clean architecture.",
    icon: AppWindow,
  },
  {
    title: "Backend API & System Design",
    description:
      "Design robust REST APIs, business logic, and scalable system architecture with security and performance in mind.",
    icon: SquareTerminal,
  },
  {
    title: "Frontend & Mobile UI Development",
    description:
      "Create responsive web interfaces and mobile-ready applications with focus on user experience and performance.",
    icon: Smartphone,
  },
  {
    title: "Cloud, Deployment & DevOps",
    description:
      "Deploy applications to cloud platforms, manage environments, and ensure smooth CI/CD workflows.",
    icon: CloudCog,
  },
  {
    title: "Database Design & Optimization",
    description:
      "Design efficient database structures, optimize queries, and ensure data integrity and performance.",
    icon: Database,
  },
  {
    title: "Dashboard & Monitoring Solutions",
    description:
      "Build real-time dashboards and monitoring systems for logs, metrics, and system health using modern tools.",
    icon: LayoutDashboard,
  },
  {
    title: "Authentication, Security & Protection",
    description:
      "Implement secure authentication, authorization, and protect applications from common vulnerabilities.",
    icon: LockKeyhole,
  },
  {
    title: "AI Integration, Agents & Automation",
    description:
      "Add AI-powered workflows, automation systems, and intelligent agents to reduce manual effort and accelerate delivery.",
    icon: Bot,
  },
  {
    title: "Custom Business Solutions",
    description:
      "Solve real-world business problems by building tailored applications aligned with client needs.",
    icon: Blocks,
  },
  {
    title: "System Architecture & Consulting",
    description:
      "Design scalable architecture and guide projects with best practices for long-term success.",
    icon: Workflow,
  },
];

function Services() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="services" id="services">
      <div className="services__inner">
        <header className="services__header">
          <p className="services__eyebrow">What I Offer</p>
          <h2 className="services__title">Services</h2>
          <p className="services__lead">
            End-to-end solutions to design, build, secure, and scale modern applications.
          </p>
        </header>

        <div className="services__grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                className="services__card"
                initial={{ opacity: 0, y: reducedMotion ? 0 : 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.48,
                  ease: "easeOut",
                  delay: reducedMotion ? 0 : index * 0.04,
                }}
                whileHover={
                  reducedMotion
                    ? undefined
                    : {
                        y: -6,
                        scale: 1.01,
                        transition: { type: "spring", stiffness: 280, damping: 20 },
                      }
                }
              >
                <div className="services__icon-wrap" aria-hidden>
                  <Icon size={18} />
                </div>
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-description">{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
