import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Environment from "./Environment";
import Wildlife from "./Wildlife";
import Explorer from "../fisherman/Explorer";
import ExpeditionHUD from "../ui/ExpeditionHUD";
import TrapButton, {
  type TrapType,
} from "../traps/TrapButton";
import TrapPanel, {
  type PortfolioSection,
} from "../traps/TrapPanel";

type ActiveSection = PortfolioSection | null;

const trapButtons: {
  id: PortfolioSection;
  label: string;
  trap: TrapType;
  icon: string;
}[] = [
  {
    id: "about",
    label: "ABOUT",
    trap: "fishing",
    icon: "🎣",
  },
  {
    id: "projects",
    label: "PROJECTS",
    trap: "mechanical",
    icon: "🪤",
  },
  {
    id: "skills",
    label: "SKILLS",
    trap: "rope",
    icon: "🪢",
  },
  {
    id: "experience",
    label: "EXPERIENCE",
    trap: "tracking",
    icon: "🐾",
  },
  {
    id: "certificates",
    label: "CERTIFICATES",
    trap: "scroll",
    icon: "📜",
  },
  {
    id: "resume",
    label: "RESUME",
    trap: "backpack",
    icon: "🎒",
  },
  {
    id: "github",
    label: "GITHUB",
    trap: "digital",
    icon: "✦",
  },
  {
    id: "contact",
    label: "CONTACT",
    trap: "bottle",
    icon: "🍾",
  },
];

function ExpeditionWorld() {
  const [activeSection, setActiveSection] =
    useState<ActiveSection>(null);

  const [caughtTrap, setCaughtTrap] =
    useState<TrapType | null>(null);

  const handleTrapComplete = (
    section: PortfolioSection,
    trap: TrapType
  ) => {
    setCaughtTrap(null);
    setActiveSection(section);
  };

  const handleClosePanel = () => {
    setActiveSection(null);
  };

  return (
    <main className="expedition-world">
      {/* WORLD */}
      <Environment />
      <Wildlife />

      {/* Cinematic opening */}
      <motion.div
        className="cinematic-vignette"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
      />

      {/* HUD */}
      <ExpeditionHUD discovered={Boolean(activeSection)} />

      {/* HERO */}
      <section className="hero-introduction">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.4,
          }}
        >
          <p className="hero-kicker">
            THE DEVELOPER'S EXPEDITION
          </p>

          <h1>
            GUDDU
            <br />
            <span>MISHRA</span>
          </h1>

          <p className="hero-role">
            Software Developer
            <span>•</span>
            AI/ML Enthusiast
          </p>

          <p className="hero-description">
            I build practical software, machine-learning
            systems, and interactive digital experiences.
          </p>

          <p className="hero-motto">
            CAST. EXPLORE. BUILD. DISCOVER.
          </p>
        </motion.div>
      </section>

      {/* EXPLORER */}
      <Explorer discovered={Boolean(activeSection)} />

      {/* PORTFOLIO BAITS */}
      <section
        className="expedition-baits"
        aria-label="Portfolio navigation"
      >
        <motion.div
          className="bait-heading"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
        >
          <span>CHOOSE YOUR TRAIL</span>
          <p>
            Every path reveals something about the
            expedition.
          </p>
        </motion.div>

        <div className="bait-grid">
          {trapButtons.map((button, index) => (
            <TrapButton
              key={button.id}
              label={button.label}
              icon={button.icon}
              trap={button.trap}
              delay={1.3 + index * 0.08}
              onCaught={() =>
                handleTrapComplete(
                  button.id,
                  button.trap
                )
              }
            />
          ))}
        </div>
      </section>

      {/* TRAP ANIMATION LAYER */}
      <AnimatePresence>
        {caughtTrap && (
          <motion.div
            className="trap-capture-overlay"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <div className="capture-vignette" />

            <motion.div
              className="caught-text"
              initial={{
                opacity: 0,
                scale: 0.5,
                rotate: -8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 0.35,
              }}
            >
              CAUGHT
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* INFORMATION PANEL */}
      <AnimatePresence>
        {activeSection && (
          <TrapPanel
            section={activeSection}
            onClose={handleClosePanel}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

export default ExpeditionWorld;