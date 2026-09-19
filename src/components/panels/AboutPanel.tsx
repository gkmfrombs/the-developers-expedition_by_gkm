import { motion } from "framer-motion";

/**
 * AboutPanel — the short professional introduction.
 */
function AboutPanel() {
  return (
    <div className="about-journal">

      {/* Introduction */}
      <motion.div
        className="journal-entry"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        <p className="journal-intro">
          I'm <strong>Guddu Kumar Mishra</strong>, a
          software developer and AI/ML enthusiast
          focused on building practical and useful
          digital systems that solve real problems.
        </p>
      </motion.div>

      {/* Expedition Profile */}
      <motion.div
        className="expedition-profile"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
      >
        <h3 className="profile-heading">
          <span className="heading-line" />
          PROFESSIONAL PROFILE
        </h3>

        <div className="profile-grid">
          <div className="profile-item">
            <span className="profile-label">
              EDUCATION
            </span>
            <p>
              BS in Data Science &amp; Applications
            </p>
            <span className="profile-institution">
              IIT Madras
            </span>
          </div>

          <div className="profile-item">
            <span className="profile-label">
              FOCUS AREAS
            </span>
            <p>
              Software Development, Machine Learning,
              Generative AI, Backend Engineering
            </p>
          </div>

          <div className="profile-item">
            <span className="profile-label">
              WHAT I BUILD
            </span>
            <p>
              ML pipelines, intelligent automation
              systems, interactive web applications,
              REST APIs, and full-stack tools
            </p>
          </div>

          <div className="profile-item">
            <span className="profile-label">
              APPROACH
            </span>
            <p>
              Practical first. I focus on building
              systems that work, scale, and deliver
              measurable results — not just prototypes.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Expedition stamp */}
      <motion.div
        className="expedition-stamp"
        initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
        animate={{ opacity: 0.15, scale: 1, rotate: -4 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        VERIFIED EXPLORER
      </motion.div>
    </div>
  );
}

export default AboutPanel;
