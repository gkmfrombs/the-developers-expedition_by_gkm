export interface ExperienceEntry {
  id: string;
  number: string;
  role: string;
  organization?: string;
  period?: string;
  location?: string;
  description: string;
  highlights: string[];
  techUsed?: string[];
}

const experience: ExperienceEntry[] = [
  {
    id: "fizmaa-fullstack",
    number: "01",
    role: "Full Stack Software Development Intern",
    organization: "Fizmaa",
    period: "Present",
    location: "Remote",
    description:
      "Building FizMaa Cashless, an NFC payment ecosystem for live events that keeps processing checkouts even when the venue loses connectivity.",
    highlights: [
      "Developing a high-performance NFC payment ecosystem capable of offline checkouts over local edge networks",
      "Building a cross-platform companion app and Android POS terminal in React Native for fast, offline-capable transactions",
      "Architecting scalable FastAPI and PostgreSQL services with real-time async sync between event edge servers and the cloud",
      "Designing a real-time admin dashboard in Next.js with WebSockets to monitor transaction velocity and event analytics",
    ],
    techUsed: [
      "React Native",
      "FastAPI",
      "PostgreSQL",
      "Next.js",
      "WebSockets",
      "NFC",
    ],
  },
  {
    id: "microsoft-aicte-analytics",
    number: "02",
    role: "Data Analytics Trainee",
    organization: "Microsoft Elevate & AICTE",
    period: "2026 · 1-month programme",
    location: "Remote",
    description:
      "Worked on hyper-local demand forecasting for quick-commerce dark stores, turning model output into decisions a store manager could act on.",
    highlights: [
      "Designed an interactive Power BI dashboard addressing hyper-local demand forecasting for quick-commerce dark stores",
      "Translated XGBoost regression output into actionable visual insight using Power Query and DAX",
      "Implemented native AI tooling in Power BI to detect traffic anomalies and explain sudden spikes in hourly demand",
      "Cleaned and engineered features from over 8 million historical order records for 7-day forward inventory predictions",
    ],
    techUsed: ["Power BI", "Power Query", "DAX", "XGBoost", "Python"],
  },
];

export default experience;
