import { motion } from "framer-motion";

export type PortfolioSection =
  | "about"
  | "projects"
  | "skills"
  | "experience"
  | "certificates"
  | "resume"
  | "github"
  | "contact";

interface TrapPanelProps {
  section: PortfolioSection;
  onClose: () => void;
}

function TrapPanel({
  section,
  onClose,
}: TrapPanelProps) {
  const content = getSectionContent(section);

  return (
    <motion.div
      className={`trap-panel panel-${section}`}
      initial={{
        opacity: 0,
        scale: 0.85,
        y: 50,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
        y: 30,
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
    >
      <div className="panel-top">
        <span className="panel-trap">
          {content.trap}
        </span>

        <button
          className="panel-close"
          onClick={onClose}
          aria-label="Close panel"
        >
          ×
        </button>
      </div>

      <div className="panel-content">
        <span className="panel-eyebrow">
          {content.eyebrow}
        </span>

        <h2>{content.title}</h2>

        {content.body}

        {content.action && (
          <button
            className="panel-action"
            onClick={content.action.onClick}
          >
            {content.action.label}
          </button>
        )}
      </div>
    </motion.div>
  );
}

function getSectionContent(
  section: PortfolioSection
) {
  switch (section) {
    case "about":
      return {
        trap: "🎣 CAUGHT BY THE LINE",
        eyebrow: "ABOUT THE EXPLORER",
        title: "WHO IS GUDDU?",
        body: (
          <div className="panel-text">
            <p>
              I'm Guddu Mishra, a software developer
              and AI/ML enthusiast focused on building
              practical and useful digital systems.
            </p>

            <p>
              I'm currently pursuing a BS in Data
              Science and Applications from IIT Madras.
            </p>

            <p>
              I enjoy working across software
              development, machine learning, GenAI,
              APIs, and interactive applications.
            </p>
          </div>
        ),
      };

    case "projects":
      return {
        trap: "🪤 TRAP TRIGGERED",
        eyebrow: "THE HUNTED ARTIFACTS",
        title: "PROJECTS",
        body: (
          <div className="project-list">
            <article className="project-card">
              <span>01</span>
              <h3>
                Predicting Purchase Value
              </h3>
              <p>
                Machine-learning regression system
                using user session data.
              </p>
              <small>
                Python · Scikit-learn · Random Forest
              </small>
            </article>

            <article className="project-card">
              <span>02</span>
              <h3>
                LLM Automation System
              </h3>
              <p>
                FastAPI-based automation system using
                LLM tool calling.
              </p>
              <small>
                FastAPI · LLM · Docker · Python
              </small>
            </article>

            <article className="project-card">
              <span>03</span>
              <h3>
                AI Anime Recommender
              </h3>
              <p>
                Interactive recommendation experience
                built around AI-assisted discovery.
              </p>
              <small>
                AI · Web Development · Vercel
              </small>
            </article>

            <article className="project-card">
              <span>04</span>
              <h3>
                ML Security Experiment
              </h3>
              <p>
                Data-poisoning experiment tracked with
                MLflow.
              </p>
              <small>
                ML · Security · MLflow
              </small>
            </article>
          </div>
        ),
      };

    case "skills":
      return {
        trap: "🪢 ROPE SECURED",
        eyebrow: "EXPEDITION EQUIPMENT",
        title: "SKILLS",
        body: (
          <div className="skills-grid">
            <div>
              <h3>Programming</h3>
              <p>
                Python · C · JavaScript · TypeScript
              </p>
            </div>

            <div>
              <h3>AI / ML</h3>
              <p>
                Scikit-learn · Pandas · MLflow
                · Deep Learning
              </p>
            </div>

            <div>
              <h3>Development</h3>
              <p>
                React · FastAPI · Flask · REST APIs
              </p>
            </div>

            <div>
              <h3>Tools</h3>
              <p>
                Git · GitHub · Docker · Vite
              </p>
            </div>

            <div>
              <h3>Currently Exploring</h3>
              <p>
                GenAI · AI Engineering · Industry 4.0
              </p>
            </div>
          </div>
        ),
      };

    case "experience":
      return {
        trap: "🐾 TRAIL FOUND",
        eyebrow: "TRACKING THE JOURNEY",
        title: "EXPERIENCE",
        body: (
          <div className="experience-list">
            <article>
              <span className="experience-marker">
                01
              </span>

              <div>
                <h3>
                  Student Developer
                </h3>

                <p>
                  Building software and machine-learning
                  projects while studying Data Science
                  and Applications at IIT Madras.
                </p>
              </div>
            </article>

            <article>
              <span className="experience-marker">
                02
              </span>

              <div>
                <h3>
                  Team Backend Developer
                </h3>

                <p>
                  Working on backend architecture,
                  APIs, data handling and integration
                  for team software projects.
                </p>
              </div>
            </article>
          </div>
        ),
      };

    case "certificates":
      return {
        trap: "📜 SCROLL UNROLLED",
        eyebrow: "EXPEDITION RECORDS",
        title: "CERTIFICATES",
        body: (
          <div className="certificate-list">
            <div className="certificate-item">
              <span>01</span>
              <div>
                <h3>
                  Data Science & Applications
                </h3>
                <p>
                  IIT Madras
                </p>
              </div>
            </div>

            <div className="certificate-item">
              <span>02</span>
              <div>
                <h3>
                  Machine Learning / AI
                </h3>
                <p>
                  Add your verified certificates here.
                </p>
              </div>
            </div>
          </div>
        ),
      };

    case "resume":
      return {
        trap: "🎒 PACK FOUND",
        eyebrow: "FIELD DOCUMENT",
        title: "RESUME",
        body: (
          <div className="resume-content">
            <p>
              Download my resume to see my complete
              education, technical skills, projects,
              and experience.
            </p>

            <div className="resume-actions">
              <button
                className="panel-action"
                onClick={() => {
                  window.open(
                    "/resume.pdf",
                    "_blank"
                  );
                }}
              >
                VIEW RESUME
              </button>

              <a
                className="panel-secondary-action"
                href="/resume.pdf"
                download
              >
                DOWNLOAD PDF
              </a>
            </div>
          </div>
        ),
      };

    case "github":
      return {
        trap: "✦ DIGITAL TRAIL FOUND",
        eyebrow: "THE CODE TRAIL",
        title: "GITHUB",
        body: (
          <div className="github-content">
            <p>
              Explore the repositories, experiments,
              assignments and software projects behind
              this expedition.
            </p>

            <button
              className="panel-action"
              onClick={() => {
                window.open(
                  "https://github.com/gkmfrombs",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              OPEN GITHUB
            </button>
          </div>
        ),
      };

    case "contact":
      return {
        trap: "🍾 MESSAGE RETRIEVED",
        eyebrow: "MESSAGE IN A BOTTLE",
        title: "CONTACT",
        body: (
          <div className="contact-content">
            <p>
              Have a project, opportunity, or idea?
              Send a message and let's connect.
            </p>

            <div className="contact-links">
              <a href="mailto:your-email@example.com">
                EMAIL
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LINKEDIN
              </a>

              <a
                href="https://github.com/gkmfrombs"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB
              </a>
            </div>
          </div>
        ),
      };
  }
}

export default TrapPanel;