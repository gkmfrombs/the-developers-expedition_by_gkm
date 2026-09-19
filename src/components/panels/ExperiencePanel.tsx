import { motion } from "framer-motion";
import experience from "../../data/experience";

/**
 * ExperiencePanel — Expedition Timeline.
 *
 * Vertical trail with footprint markers connecting milestones.
 */
function ExperiencePanel() {
  return (
    <div className="experience-timeline">
      <p className="experience-intro">
        The trail of the expedition — roles, responsibilities,
        and territories explored along the journey.
      </p>

      <div className="timeline-trail">
        {experience.map((entry, index) => (
          <motion.article
            key={entry.id}
            className="timeline-entry"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.15 + index * 0.12,
              duration: 0.5,
            }}
          >
            {/* Trail marker */}
            <div className="trail-marker">
              <span className="marker-number">
                {entry.number}
              </span>
              <span className="marker-line" />
              <span className="marker-footprint">
                🐾
              </span>
            </div>

            {/* Entry content */}
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{entry.role}</h3>
                {entry.organization && (
                  <span className="timeline-org">
                    {entry.organization}
                  </span>
                )}
                {entry.period && (
                  <span className="timeline-period">
                    {entry.period}
                  </span>
                )}
              </div>

              <p className="timeline-description">
                {entry.description}
              </p>

              {/* Highlights */}
              <ul className="timeline-highlights">
                {entry.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay:
                        0.3 +
                        index * 0.12 +
                        i * 0.05,
                    }}
                  >
                    {h}
                  </motion.li>
                ))}
              </ul>

              {/* Tech used */}
              {entry.techUsed && (
                <div className="timeline-tech">
                  {entry.techUsed.map((tech) => (
                    <span
                      key={tech}
                      className="timeline-tech-badge"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export default ExperiencePanel;
