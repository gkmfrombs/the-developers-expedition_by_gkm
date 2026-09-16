import { motion } from "framer-motion";

export type TrapType =
  | "fishing"
  | "mechanical"
  | "rope"
  | "tracking"
  | "scroll"
  | "backpack"
  | "digital"
  | "bottle";

interface TrapButtonProps {
  label: string;
  icon: string;
  trap: TrapType;
  delay: number;
  onCaught: () => void;
}

function TrapButton({
  label,
  icon,
  trap,
  delay,
  onCaught,
}: TrapButtonProps) {
  const handleClick = () => {
    onCaught();
  };

  return (
    <motion.button
      className={`trap-button trap-${trap}`}
      initial={{
        opacity: 0,
        y: -80,
        scale: 0.6,
        rotate: -8,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
      }}
      whileHover={{
        y: -8,
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.92,
      }}
      transition={{
        delay,
        duration: 0.7,
        type: "spring",
        stiffness: 150,
        damping: 12,
      }}
      onClick={handleClick}
      aria-label={`Open ${label}`}
    >
      <span className="trap-line" />

      <span className="trap-icon">
        {icon}
      </span>

      <span className="trap-label">
        {label}
      </span>

      <span className="trap-subtitle">
        {getTrapText(trap)}
      </span>
    </motion.button>
  );
}

function getTrapText(trap: TrapType) {
  switch (trap) {
    case "fishing":
      return "CAST";
    case "mechanical":
      return "SNAP";
    case "rope":
      return "PULL";
    case "tracking":
      return "TRACK";
    case "scroll":
      return "UNROLL";
    case "backpack":
      return "OPEN";
    case "digital":
      return "TRACE";
    case "bottle":
      return "RETRIEVE";
    default:
      return "EXPLORE";
  }
}

export default TrapButton;