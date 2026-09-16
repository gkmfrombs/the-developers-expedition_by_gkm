import { motion } from "framer-motion";

interface ExpeditionHUDProps {
  discovered: boolean;
}

function ExpeditionHUD({
  discovered,
}: ExpeditionHUDProps) {
  return (
    <motion.header
      className="expedition-hud"
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      <div className="hud-brand">
        <span className="hud-number">
          EXPEDITION 01
        </span>

        <strong>
          THE DEVELOPER'S EXPEDITION
        </strong>
      </div>

      <div className="hud-status">
        <span className="status-dot" />

        {discovered
          ? "TRAIL ACTIVE"
          : "EXPEDITION ACTIVE"}
      </div>
    </motion.header>
  );
}

export default ExpeditionHUD;