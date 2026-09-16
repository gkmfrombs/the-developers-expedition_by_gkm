
import { motion } from "framer-motion";

interface ExplorerProps {
  discovered: boolean;
}

function Explorer({ discovered }: ExplorerProps) {
  return (
    <motion.div
      className="explorer"
      animate={
        discovered
          ? {
              y: -4,
              rotate: -1,
            }
          : {
              y: [0, -2, 0],
            }
      }
      transition={
        discovered
          ? {
              duration: 0.4,
            }
          : {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
    >
      <div className="explorer-shadow" />

      <div className="explorer-backpack">
        <span />
        <span />
      </div>

      <div className="explorer-body">
        <div className="explorer-jacket" />
      </div>

      <motion.div
        className="explorer-arm"
        animate={
          discovered
            ? {
                rotate: -25,
              }
            : {
                rotate: [0, 3, 0],
              }
        }
        transition={
          discovered
            ? {
                duration: 0.3,
              }
            : {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />

      <div className="explorer-head">
        <div className="explorer-hat" />
      </div>

      <div className="explorer-legs">
        <span className="explorer-leg explorer-leg-left" />
        <span className="explorer-leg explorer-leg-right" />
      </div>

      <div className="explorer-gear">
        <span className="explorer-rope" />
        <span className="explorer-rod" />
      </div>

      {discovered && (
        <motion.div
          className="explorer-reaction"
          initial={{ opacity: 0, scale: 0.5, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          !
        </motion.div>
      )}
    </motion.div>
  );
}

export default Explorer;

