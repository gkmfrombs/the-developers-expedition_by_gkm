import { motion } from "framer-motion";

interface DiscoveryMarkerProps {
  discovered: boolean;
  onDiscover: () => void;
}

function DiscoveryMarker({
  discovered,
  onDiscover,
}: DiscoveryMarkerProps) {
  if (discovered) {
    return (
      <motion.div
        className="discovery-reveal"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <span className="reveal-symbol">✦</span>

        <div>
          <small>DISCOVERY FOUND</small>
          <strong>EXPEDITION MAP</strong>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.button
      className="discovery-marker"
      onClick={onDiscover}
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.95,
      }}
      aria-label="Investigate the mysterious movement"
    >
      <motion.span
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      <div className="marker-ring" />

      <div className="marker-text">
        <small>SOMETHING MOVED</small>
        <strong>INVESTIGATE</strong>
      </div>
    </motion.button>
  );
}

export default DiscoveryMarker;