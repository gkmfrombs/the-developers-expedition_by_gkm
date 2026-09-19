import { motion } from "framer-motion";

/**
 * GithubPanel — Digital Territory bridge.
 *
 * Glowing data-node aesthetic bridging
 * the natural and digital worlds.
 */
function GithubPanel() {
  return (
    <div className="github-territory">
      {/* Digital node visualization */}
      <motion.div
        className="digital-nodes"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            className="digital-node"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${15 + i * 14}%`,
              top: `${20 + ((i * 37) % 30)}%`,
            }}
          />
        ))}
      </motion.div>

      <motion.div
        className="github-info"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <p>
          Explore the source code, experiments,
          research projects, and development work
          behind this expedition. Every project,
          pipeline, and system is documented in the
          repositories.
        </p>

        <div className="github-profile-card">
          <span className="github-avatar">
            ✦
          </span>
          <div>
            <span className="github-handle">
              gkmfrombs
            </span>
            <span className="github-bio">
              Software Developer · AI/ML · IIT Madras
            </span>
          </div>
        </div>

        <div className="github-highlights">
          <div className="github-stat">
            <span className="stat-label">
              REPOSITORIES
            </span>
            <span className="stat-value">
              Public & Active
            </span>
          </div>
          <div className="github-stat">
            <span className="stat-label">
              FOCUS
            </span>
            <span className="stat-value">
              ML · APIs · Web · Automation
            </span>
          </div>
        </div>

        <button
          className="panel-action github-action"
          onClick={() => {
            window.open(
              "https://github.com/gkmfrombs",
              "_blank",
              "noopener,noreferrer"
            );
          }}
        >
          OPEN GITHUB →
        </button>
      </motion.div>
    </div>
  );
}

export default GithubPanel;
