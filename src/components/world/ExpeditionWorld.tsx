import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Interactive3DButton from "../ui/Interactive3DButton";
import AboutPanel from "../panels/AboutPanel";
import ProjectsPanel from "../panels/ProjectsPanel";
import SkillsPanel from "../panels/SkillsPanel";
import ExperiencePanel from "../panels/ExperiencePanel";
import CertificatesPanel from "../panels/CertificatesPanel";
import ResumePanel from "../panels/ResumePanel";
import ContactCatch from "../panels/ContactCatch";

const ROLES = [
  "Software Developer",
  "AI/ML Engineer",
  "Backend Developer",
  "UI/UX Enthusiast"
];

const SECTIONS = [
  { id: "about", label: "ABOUT", icon: "👤", Component: AboutPanel },
  { id: "projects", label: "PROJECTS", icon: "🚀", Component: ProjectsPanel },
  { id: "skills", label: "SKILLS", icon: "⚡", Component: SkillsPanel },
  { id: "experience", label: "EXPERIENCE", icon: "💼", Component: ExperiencePanel },
  { id: "certificates", label: "CERTIFICATES", icon: "🎓", Component: CertificatesPanel },
  { id: "resume", label: "RESUME", icon: "📄", Component: ResumePanel },
  { id: "contact", label: "CONTACT", icon: "📫", Component: ContactCatch },
];

export default function ExpeditionWorld() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  
  // About is open on arrival — no click needed to see content.
  const [activeSection, setActiveSection] = useState<string | null>("about");
  const [roleIndex, setRoleIndex] = useState(0);

  // Dynamic Role Switcher
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax for Hero Background
  const bgY = useTransform(scrollYProgress, [0, 0.5], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  // Handle Navigation Click
  const handleNavClick = (sectionId: string) => {
    if (activeSection === sectionId) return;
    setActiveSection(sectionId);
    
    // Smooth scroll to content section
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const ActiveComponent = SECTIONS.find(s => s.id === activeSection)?.Component;

  return (
    <main ref={containerRef} className="professional-portfolio">
      
      {/* --- HERO / INTRO SECTION --- */}
      <section className="hero-section">
        <motion.div 
          className="hero-background"
          style={{ 
            backgroundImage: "url('/assets/environment/basecamp.jpg')", // Keeping the cinematic BG, but styling it cleaner
            y: bgY 
          }}
        />
        <div className="hero-overlay" />

        <motion.div 
          className="hero-content-wrapper"
          style={{ opacity: heroOpacity }}
        >
          <motion.div 
            className="profile-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src="/assets/profile.jpeg" alt="Guddu Mishra" className="profile-image" />
            <div className="profile-glow" />

            <motion.button
              type="button"
              className="hire-button"
              onClick={() => handleNavClick("contact")}
              initial={{ opacity: 0, scale: 0.6, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
            >
              <span aria-hidden="true">✦</span> HIRE ME
            </motion.button>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            GUDDU MISHRA
          </motion.h1>

          <div className="role-switcher-container">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                className="dynamic-role"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                {ROLES[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p 
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Building practical software, machine learning systems, and exceptional digital experiences.
          </motion.p>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Interactive3DButton 
              label="VIEW PROJECTS" 
              icon="🚀" 
              onClick={() => handleNavClick("projects")} 
            />
            <Interactive3DButton
              label="DOWNLOAD RESUME"
              icon="📄"
              onClick={() => handleNavClick("resume")}
            />
          </motion.div>

          <motion.div 
            className="scroll-down-hint"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            onClick={() => handleNavClick("about")}
          >
            <span>↓</span>
          </motion.div>
        </motion.div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section ref={contentRef} className="content-section">
        
        {/* Sticky Navigation */}
        <nav className="portfolio-nav">
          <div className="nav-container">
            {SECTIONS.map((section, i) => (
              <motion.button
                key={section.id}
                className={`nav-button ${activeSection === section.id ? "active" : ""}`}
                onClick={() => handleNavClick(section.id)}
                initial={{ opacity: 0, y: -16, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: 0.2 + i * 0.09,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="nav-icon">{section.icon}</span>
                <span className="nav-label">{section.label}</span>
                {activeSection === section.id && (
                  <motion.div layoutId="nav-indicator" className="nav-indicator" />
                )}
              </motion.button>
            ))}
          </div>
        </nav>

        {/* Dynamic Content Area */}
        <div className="content-display-area">
          <AnimatePresence mode="wait">
            {activeSection ? (
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.4 }}
                className="content-panel-wrapper"
              >
                {ActiveComponent && <ActiveComponent />}
              </motion.div>
            ) : (
              <motion.div 
                className="empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p>Select a section from the navigation menu.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </section>
      
      {/* Footer spacer */}
      <footer className="portfolio-footer">
        <p>© {new Date().getFullYear()} Guddu Mishra. All rights reserved.</p>
      </footer>
    </main>
  );
}