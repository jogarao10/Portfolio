import { motion, useReducedMotion } from "framer-motion";
import "./Projects.css";

const coreProjects = [
  {
    title: "Ticketing System (Issue Tracking & Support Management)",
    techStack: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
    overview:
      "Built a full-stack ticketing system to manage and track user issues efficiently in an organization.",
    features: [
      "JWT-based authentication and authorization",
      "Create, update, assign, and close tickets",
      "Role-based access for Admin, Support, and User roles",
      "Real-time status tracking: Open, In Progress, Resolved, Closed",
      "Comment system for ticket communication",
      "Dashboard for ticket analytics",
    ],
    impact:
      "Improved issue resolution workflow and reduced manual tracking by centralizing support operations.",
  },
  {
    title: "Company Website Design & Development",
    techStack: ["React", "HTML", "CSS", "JavaScript"],
    overview:
      "Designed and developed a responsive company website focused on modern UI/UX and performance.",
    features: [
      "Fully responsive experience across mobile and desktop",
      "Clean UI with structured sections: About, Solutions, Services, Contact",
      "Optimized loading performance",
      "Reusable components for easier scaling",
      "SEO-friendly structure",
    ],
    impact:
      "Enhanced online presence and improved user engagement through a clean, professional interface.",
  },
  {
    title: "Grafana Monitoring Application (Log & Metrics Dashboard)",
    techStack: ["Grafana", "Wazuh", "Spring Boot", "React"],
    overview:
      "Developed a monitoring dashboard to visualize logs and system metrics using Grafana integrated with Wazuh.",
    features: [
      "Real-time log monitoring and visualization",
      "Custom dashboards for security and system metrics",
      "Alerts and notifications for anomalies",
      "Backend API integration",
      "Data filtering and drill-down analysis",
    ],
    impact:
      "Enabled proactive monitoring and faster issue detection, improving reliability and security.",
  },
];

const freelancingProjects = [
  {
    title: "AP Government Home Department - APSPCA Project",
    role: "Full Stack Developer",
    techStack: ["Spring Boot", "React", "MySQL", "Secure Application Design"],
    overview:
      "Built a citizen grievance platform for APSPCA where people can report cases when local police do not register complaints.",
    features: [
      "Enabled citizens to raise complaints against local police, with routing to the APSPCA head office in Vijayawada",
      "Delivered complaint assignment and tracking for sub-offices in Visakhapatnam, Rajahmundry, Vijayawada, and Kurnool",
      "Built role-based modules for handling grievances against police personnel",
      "Implemented progress tracking where each sub-office tracks only its assigned complaints, while head office monitors overall case status",
      "Developed Spring Boot APIs and React modules with strong validation and audit-friendly data handling",
      "Deployed on a local government data center infrastructure",
    ],
    impact:
      "Enabled transparent complaint tracking and faster escalation, improving accountability and citizen protection.",
  },
  {
    title: "DonarGo Application",
    role: "Full Stack Developer",
    techStack: ["Spring Boot", "React", "MySQL", "JWT"],
    overview:
      "Developed a blood-donor discovery platform where seekers can quickly find and connect with nearby matching donors.",
    features: [
      "Implemented paid seeker onboarding flow with the 99-rupee access model",
      "Built blood-group-based donor search with nearby donor listing in map view",
      "Enabled in-app request messaging from seeker to matched donors",
      "Delivered acceptance flow where donor contact details are shared after confirmation",
      "Developed secure authentication and end-to-end workflows across backend and frontend",
      "Hosted on cloud infrastructure for better availability and scale",
    ],
    impact:
      "Reduced time to find matching donors and improved successful blood-need fulfillment through location-aware discovery.",
  },
];

function ProjectCard({ project, index, reducedMotion, lane, featured = false }) {
  return (
    <motion.article
      className={`projects__card projects__card--${lane} ${featured ? "projects__card--featured" : ""}`}
      initial={{ opacity: 0, y: reducedMotion ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reducedMotion ? 0.01 : 0.55,
        ease: "easeOut",
        delay: reducedMotion ? 0 : index * 0.06,
      }}
      whileHover={
        reducedMotion
          ? undefined
          : {
              y: -8,
              transition: { type: "spring", stiffness: 260, damping: 18 },
            }
      }
    >
      <div className="projects__card-top">
        <span className="projects__serial">0{index + 1}</span>
        <span className="projects__lane">{lane === "core" ? "Core Build" : "Freelancing"}</span>
      </div>
      <h3 className="projects__card-title">{project.title}</h3>
      {project.role ? <p className="projects__role">Role: {project.role}</p> : null}
      <p className="projects__overview">{project.overview}</p>

      <div className="projects__meta">
        <p className="projects__label">Tech Stack</p>
        <ul className="projects__stack">
          {project.techStack.map((tech) => (
            <li key={tech}>
              <span className="projects__chip">{tech}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="projects__meta">
        <p className="projects__label">Key Features</p>
        <ul className="projects__features">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <p className="projects__impact">
        <span>Impact:</span> {project.impact}
      </p>
    </motion.article>
  );
}

function Projects() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="projects" id="projects">
      <div className="projects__ambient" aria-hidden>
        <span className="projects__orb projects__orb--a" />
        <span className="projects__orb projects__orb--b" />
        <span className="projects__mesh" />
      </div>
      <div className="projects__inner">
        <header className="projects__header">
          <h2 className="projects__title">
            My <span>Projects</span>
          </h2>
          <p className="projects__lead">
            End-to-end products I built across issue tracking, web platforms, and monitoring systems.
          </p>
        </header>

        <div className="projects__section">
          <h3 className="projects__section-title">Core Projects</h3>
          <div className="projects__grid">
            {coreProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                reducedMotion={reducedMotion}
                lane="core"
                featured={index === 0}
              />
            ))}
          </div>
        </div>

        <div className="projects__section projects__section--freelance">
          <h3 className="projects__section-title">Freelancing Projects</h3>
          <div className="projects__grid projects__grid--freelance">
            {freelancingProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                reducedMotion={reducedMotion}
                lane="freelance"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
