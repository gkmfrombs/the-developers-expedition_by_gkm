
import { motion } from "framer-motion";
import type { Discovery } from "../../types/expedition";

interface DiscoveryCardProps {
  discovery: Discovery;
  onClose: () => void;
}

function DiscoveryCard({
  discovery,
  onClose,
}: DiscoveryCardProps) {
  return (
    <motion.div
      className="discovery-card"
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: 20,
        scale: 0.96,
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
    >
      <div className="discovery-card-label">
        {discovery.label}
      </div>

      <h2>{discovery.title}</h2>

      <p>{discovery.description}</p>

      <button onClick={onClose}>
        RETURN TO EXPEDITION
      </button>
    </motion.div>
  );
}

export default DiscoveryCard;

