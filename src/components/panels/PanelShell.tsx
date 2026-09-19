import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { TrapConfig } from "../../data/traps";

interface PanelShellProps {
  config: TrapConfig;
  children: ReactNode;
  onClose?: () => void;
}

/**
 * PanelShell — The shared panel container.
 *
 * Handles:
 *  - backdrop
 *  - positioning (fixed, centered)
 *  - open/close animation
 *  - close button
 *  - internal scrolling
 *  - keyboard (Escape to close)
 *  - trap identity header
 *
 * The domain-specific content is passed as children.
 */
function PanelShell({
  config,
  children,
  onClose,
}: PanelShellProps) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="trap-panel-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        className={`trap-panel panel-${config.id}`}
        role="dialog"
        aria-modal="true"
        aria-label={`${config.label} panel`}
        initial={{
          opacity: 0,
          scale: 0.88,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.92,
          y: 25,
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape") onClose?.();
        }}
        tabIndex={-1}
      >
        {/* Sticky header */}
        <div className="panel-top">
          <span
            className="panel-trap"
            style={{ color: config.color }}
          >
            {config.caughtLabel}
          </span>

          <button
            className="panel-close"
            onClick={onClose}
            aria-label="Close panel"
          >
            ×
          </button>
        </div>

        {/* Content area */}
        <div className="panel-content">
          <span className="panel-eyebrow">
            {config.panelEyebrow}
          </span>

          <h2>{config.panelTitle}</h2>

          {children}
        </div>
      </motion.div>
    </>
  );
}

export default PanelShell;
