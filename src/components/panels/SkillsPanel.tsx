import { motion } from "framer-motion";
import skillCategories from "../../data/skills";

/**
 * SkillsPanel — the toolkit, grouped by what each thing is for.
 *
 * Deliberately plain: one row per group, readable tags, no level
 * indicators or legend to decode.
 */
function SkillsPanel() {
  return (
    <div className="skills-constellation">
      <p className="certificates-intro">
        The technical foundation, grouped by what each tool is for.
      </p>

      <div className="skill-categories">
        {skillCategories.map((category, catIndex) => (
          <motion.section
            key={category.id}
            className="skill-group"
            style={{ ["--section-accent" as string]: category.color }}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.5,
              delay: catIndex * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="skill-group-header">
              <span className="category-icon" aria-hidden="true">
                {category.icon}
              </span>
              <h3>{category.title}</h3>
              <span className="skill-group-count">
                {category.skills.length}
              </span>
            </div>

            <ul className="skill-tags">
              {category.skills.map((skill) => (
                <li key={skill} className="skill-tag">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.section>
        ))}
      </div>
    </div>
  );
}

export default SkillsPanel;
