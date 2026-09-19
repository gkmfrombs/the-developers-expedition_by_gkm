export interface ResumeVariant {
  id: string;
  title: string;
  focus: string;
  blurb: string;
  preview: string;
  file: string;
  downloadName: string;
  width: number;
  height: number;
  accent: string;
}

/**
 * Two tailored resumes. The panel shows both so a visitor can pick
 * the one that matches the role they're hiring for.
 */
const resumes: ResumeVariant[] = [
  {
    id: "software-development",
    title: "Software Development",
    focus: "FULL STACK · BACKEND",
    blurb:
      "Full-stack and backend focus — FastAPI services, React front-ends and cross-platform apps.",
    preview: "/assets/resume/resume-software-development.jpg",
    file: "/assets/resume/Guddu_Mishra_Software_Development_Resume.pdf",
    downloadName: "Guddu_Mishra_Software_Development_Resume.pdf",
    width: 1160,
    height: 1500,
    accent: "#4ad8ff",
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    focus: "DATA · MACHINE LEARNING",
    blurb:
      "Analytics and machine-learning focus — BI dashboards, forecasting models and data pipelines.",
    preview: "/assets/resume/resume-data-analytics.jpg",
    file: "/assets/resume/Guddu_Mishra_Data_Analytics_Resume.pdf",
    downloadName: "Guddu_Mishra_Data_Analytics_Resume.pdf",
    width: 1160,
    height: 1500,
    accent: "#ffb457",
  },
];

export default resumes;
