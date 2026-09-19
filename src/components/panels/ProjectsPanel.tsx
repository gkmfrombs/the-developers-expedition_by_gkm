import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../../data/projects";
import type { ProjectData } from "../../data/projects";
import { GITHUB_PROFILE } from "../../data/contact";

interface CardProps {
  project: ProjectData;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

function ProjectCard({ project, index, isExpanded, onToggle }: CardProps) {
  const accent = project.accent;

  return (
    <motion.article
      className={`project-expedition-card ${isExpanded ? "expanded" : ""}`}
      style={{
        ["--project-accent" as string]: accent,
        borderColor: isExpanded ? accent : undefined,
      }}
      initial={{ opacity: 0, y: 64, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="project-card-row">
        <button
          className="project-card-header"
          onClick={onToggle}
          aria-expanded={isExpanded}
        >
          <div className="project-card-number">
            <span style={{ color: accent }}>{project.number}</span>
          </div>

          <div className="project-card-info">
            <span
              className="project-domain-badge"
              style={{ color: accent, borderColor: `${accent}40` }}
            >
              {project.category}
            </span>
            <h3>{project.title}</h3>
            <p>{project.tagline}</p>
          </div>

          <span className="project-expand-icon" style={{ color: accent }}>
            {isExpanded ? "−" : "+"}
          </span>
        </button>

        <a
          className="project-github"
          href={project.githubUrl ?? GITHUB_PROFILE}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} on GitHub`}
          title="View on GitHub"
        >
          <svg viewBox="0 0 16 16" aria-hidden="true" width="17" height="17">
            <path
              fill="currentColor"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
            />
          </svg>
        </a>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="project-detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="project-detail-inner">
              <div className="project-sections">
                <div className="project-section">
                  <span className="section-label">PROBLEM</span>
                  <p>{project.problem}</p>
                </div>

                <div className="project-section">
                  <span className="section-label">APPROACH</span>
                  <p>{project.approach}</p>
                </div>
              </div>

              {project.metrics && (
                <div className="project-metrics">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="metric-box">
                      <span className="metric-label">{m.label}</span>
                      <span className="metric-value" style={{ color: accent }}>
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {project.result && (
                <div className="project-result">
                  <span className="section-label">OUTCOME</span>
                  <span className="result-value" style={{ color: accent }}>
                    {project.result}
                  </span>
                </div>
              )}

              <div className="project-tech">
                <span className="section-label">BUILT WITH</span>
                <div className="tech-badges">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="tech-badge"
                      style={{ color: accent, borderColor: `${accent}40` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

/**
 * ProjectsPanel — the work, grouped by the kind of problem it solves.
 *
 * Cards arrive one at a time as they scroll into view and expand in
 * place for the detail.
 */
function ProjectsPanel() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = [...new Set(projects.map((p) => p.category))];

  return (
    <div className="projects-command-center">
      <p className="certificates-intro">
        Work across full-stack engineering, analytics and machine
        learning — expand any project for the detail.
      </p>

      {categories.map((category) => (
        <section key={category} className="project-group">
          <div className="cert-category-header">
            <h2>{category}</h2>
            <span className="cert-category-line" aria-hidden="true" />
          </div>

          <div className="project-list">
            {projects
              .filter((p) => p.category === category)
              .map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  isExpanded={expandedId === project.id}
                  onToggle={() =>
                    setExpandedId(
                      expandedId === project.id ? null : project.id
                    )
                  }
                />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProjectsPanel;
