import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export interface ViewableDocument {
  image: string;
  title: string;
  subtitle: string;
  downloadHref?: string;
  downloadName?: string;
}

interface Props {
  doc: ViewableDocument | null;
  onClose: () => void;
}

/**
 * DocumentViewer — lifts a certificate or resume out of the page so it
 * can actually be read, with an optional download.
 *
 * Portalled to <body> because the panel wrapper animates `filter`,
 * which would otherwise trap a fixed-position overlay inside it.
 */
function DocumentViewer({ doc, onClose }: Props) {
  useEffect(() => {
    if (!doc) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [doc, onClose]);

  return createPortal(
    <AnimatePresence>
      {doc && (
        <motion.div
          className="cert-focus"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={doc.title}
        >
          <motion.figure
            className="cert-focus-frame"
            initial={{ opacity: 0, scale: 0.72, y: 50, rotateX: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.82, y: 30, rotateX: 10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={doc.image} alt={doc.title} />
            <figcaption>
              <strong>{doc.title}</strong>
              <span>{doc.subtitle}</span>
              {doc.downloadHref && (
                <a
                  className="focus-download"
                  href={doc.downloadHref}
                  download={doc.downloadName}
                >
                  ↓ Download PDF
                </a>
              )}
            </figcaption>
          </motion.figure>

          <button
            type="button"
            className="cert-focus-close"
            onClick={onClose}
          >
            <span aria-hidden="true">×</span> Close
          </button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default DocumentViewer;
