import { useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import certificateCategories from "../../data/certificates";
import type { CertificateData } from "../../data/certificates";
import DocumentViewer from "../ui/DocumentViewer";
import type { ViewableDocument } from "../ui/DocumentViewer";

interface CardProps {
  cert: CertificateData;
  index: number;
  onOpen: (cert: CertificateData) => void;
}

/**
 * One certificate, tilting under the pointer and rising into place
 * as it scrolls into view.
 */
function CertificateCard({ cert, index, onOpen }: CardProps) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const spring = { stiffness: 220, damping: 22, mass: 0.6 };
  const rotateY = useSpring(
    useTransform(px, [0, 1], [-14, 14]),
    spring
  );
  const rotateX = useSpring(
    useTransform(py, [0, 1], [11, -11]),
    spring
  );

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };

  const recentre = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      className="cert-stage"
      initial={{ opacity: 0, y: 90, scale: 0.88 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.75,
        delay: 0.05 * index,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className={`cert-card cert-card--${cert.orientation}`}
        style={{ rotateX, rotateY }}
        onMouseMove={handleMove}
        onMouseLeave={recentre}
        whileHover={{ z: 60 }}
      >
        <button
          type="button"
          className="cert-open"
          onClick={() => onOpen(cert)}
          aria-label={`View ${cert.title} full size`}
        >
          <img
            src={cert.image}
            alt={cert.title}
            width={cert.width}
            height={cert.height}
            loading="lazy"
          />
          <span className="cert-sheen" aria-hidden="true" />
          <span className="cert-zoom" aria-hidden="true">
            ⤢ Click to focus
          </span>
        </button>
      </motion.div>

      <div className="cert-meta">
        <h3>{cert.title}</h3>
        <span className="cert-issuer">{cert.issuer}</span>
        <span className="cert-date">{cert.date}</span>
        {cert.note && <p className="cert-note">{cert.note}</p>}
      </div>
    </motion.div>
  );
}

/**
 * CertificatesPanel — the credentials archive.
 *
 * Cards arrive one at a time as you scroll, tilt in 3D under the
 * pointer, and lift out of the page into a full-screen reader when
 * clicked. Categories come straight from the data file.
 */
function CertificatesPanel() {
  const [focused, setFocused] = useState<ViewableDocument | null>(null);

  const open = (cert: CertificateData) =>
    setFocused({
      image: cert.image,
      title: cert.title,
      subtitle: `${cert.issuer} · ${cert.date}`,
    });


  return (
    <div className="certificates-archive">
      <p className="certificates-intro">
        Verified credentials earned along the way — click any
        certificate to bring it forward and read it in full.
      </p>

      {certificateCategories.map((category) => (
        <section key={category.id} className="cert-category">
          <div className="cert-category-header">
            <span className="cert-category-icon" aria-hidden="true">
              {category.icon}
            </span>
            <h2>{category.label}</h2>
            <span className="cert-category-line" aria-hidden="true" />
          </div>
          <p className="cert-category-blurb">{category.blurb}</p>

          <div className="cert-track">
            {category.items.map((cert, i) => (
              <CertificateCard
                key={cert.id}
                cert={cert}
                index={i}
                onOpen={open}
              />
            ))}
          </div>
        </section>
      ))}

      <DocumentViewer doc={focused} onClose={() => setFocused(null)} />
    </div>
  );
}

export default CertificatesPanel;
