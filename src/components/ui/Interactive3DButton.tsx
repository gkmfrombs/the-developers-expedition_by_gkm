import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface Interactive3DButtonProps {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
}

export default function Interactive3DButton({ label, onClick, icon }: Interactive3DButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to button (0 to 100%)
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setHoverPosition({ x, y });
  };

  return (
    <motion.button
      ref={buttonRef}
      className="interactive-3d-button"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoverPosition({ x: 50, y: 50 }); // Reset to center
      }}
      onClick={onClick}
      style={
        {
          "--mouse-x": `${hoverPosition.x}%`,
          "--mouse-y": `${hoverPosition.y}%`,
        } as React.CSSProperties
      }
      animate={{
        rotateX: isHovered ? (hoverPosition.y - 50) * -0.4 : 0,
        rotateY: isHovered ? (hoverPosition.x - 50) * 0.4 : 0,
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 0.5,
      }}
    >
      <div className="button-glow" />
      <div className="button-content">
        {icon && <span className="button-icon">{icon}</span>}
        <span className="button-label">{label}</span>
      </div>
    </motion.button>
  );
}
