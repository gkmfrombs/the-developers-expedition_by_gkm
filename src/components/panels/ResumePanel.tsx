import { useState } from "react";
import { motion } from "framer-motion";
import resumes from "../../data/resumes";
import type { ResumeVariant } from "../../data/resumes";
import DocumentViewer from "../ui/DocumentViewer";
import type { ViewableDocument } from "../ui/DocumentViewer";

/**
 * ResumePanel — two tailored resumes, presented like the certificates.
 *
 * Each one previews as a card, opens full size for reading, and can be
 * downloaded either from the card or from inside the reader.
 */
function ResumePanel() {
  const [focused, setFocused] = useState<ViewableDocument | null>(null);

  const open = (resume: ResumeVariant) =>
    setFocused({
      image: resume.preview,
      title: `${resume.title} Resume`,
      subtitle: "Guddu Kumar Mishra · " + resume.focus,
      downloadHref: resume.file,
      downloadName: resume.downloadName,
    });

  return (
    <div className="resume-field-pack">
      <p className="certificates-intro">
        Two versions, depending on what you're hiring for — click either
        to read it in full, or download the PDF directly.
      </p>

      <div className="resume-grid">
        {resumes.map((resume, i) => (
          <motion.div
            key={resume.id}
            className="resume-card"
            style={{ ["--section-accent" as string]: resume.accent }}
            initial={{ opacity: 0, y: 70, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="resume-focus-tag">{resume.focus}</span>

            <button
              type="button"
              className="cert-open resume-open"
              onClick={() => open(resume)}
              aria-label={`Read the ${resume.title} resume`}
            >
              <img
                src={resume.preview}
                alt={`${resume.title} resume preview`}
                width={resume.width}
                height={resume.height}
                loading="lazy"
              />
              <span className="cert-sheen" aria-hidden="true" />
              <span className="cert-zoom" aria-hidden="true">
                ⤢ Click to read
              </span>
            </button>

            <div className="resume-card-body">
              <h3>{resume.title}</h3>
              <p>{resume.blurb}</p>

              <a
                className="resume-download"
                href={resume.file}
                download={resume.downloadName}
              >
                ↓ Download PDF
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <DocumentViewer doc={focused} onClose={() => setFocused(null)} />
    </div>
  );
}

export default ResumePanel;
