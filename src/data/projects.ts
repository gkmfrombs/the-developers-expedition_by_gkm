export interface ProjectData {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  accent: string;
  problem: string;
  approach: string;
  techStack: string[];
  result?: string;
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  demoUrl?: string;
}

const projects: ProjectData[] = [
  {
    id: "school-management-system",
    number: "01",
    title: "School Management System",
    tagline: "Role-based school platform with a Gen AI assistant",
    category: "FULL STACK · GEN AI",
    accent: "#4ad8ff",
    problem:
      "Schools run on manual administrative overhead — timetables, fee tracking, attendance and announcements all handled separately, with no single place for admins, teachers, students and parents to work from.",
    approach:
      "Built a centralised platform with role-based access control across four distinct portals, backed by FastAPI and PostgreSQL. Groq, Llama and LangGraph power an automated chatbot and notice board for context-aware queries and announcements, with React dashboards secured by JWT sessions.",
    techStack: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "LangGraph",
      "Groq",
      "Llama",
      "JWT",
    ],
    result:
      "Four secured portals covering timetabling, fees and attendance",
    metrics: [
      { label: "USER PORTALS", value: "4" },
      { label: "ACCESS MODEL", value: "RBAC + JWT" },
      { label: "AI LAYER", value: "Groq · Llama" },
    ],
  },
  {
    id: "bdm-capstone",
    number: "02",
    title: "Sales & Inventory Analytics Capstone",
    tagline: "Business Data Management capstone for a B2C retailer",
    category: "DATA ANALYTICS",
    accent: "#ffb457",
    problem:
      "A B2C retail business tracked sales manually, with no visibility into which products actually drove revenue or how demand shifted week to week.",
    approach:
      "Digitised and cleaned twelve weeks of manual sales records across 60+ products to surface cyclical demand and seasonal trends, applied ABC segmentation to rank products by revenue contribution, and forecast short-term demand with a Random Forest regressor.",
    techStack: ["Python", "Pandas", "Excel", "Random Forest"],
    result:
      "54.9% of inventory items drove nearly 80% of total revenue",
    metrics: [
      { label: "PRODUCTS", value: "60+" },
      { label: "PERIOD", value: "12 weeks" },
      { label: "ABC INSIGHT", value: "54.9% → 80%" },
    ],
  },
  {
    id: "maritime-survivor-classification",
    number: "03",
    title: "Maritime Survivor Classification",
    tagline: "Predicting survival outcomes from incident data",
    category: "MACHINE LEARNING",
    accent: "#a78bfa",
    problem:
      "Predict passenger survival outcomes from complex, incomplete maritime incident records.",
    approach:
      "Ran exploratory data analysis to understand the dataset, handled missing values, and engineered predictive features before training and tuning a classification model.",
    techStack: ["Python", "scikit-learn", "Pandas"],
  },
  {
    id: "house-price-regression",
    number: "04",
    title: "House Price Prediction",
    tagline: "Regression model for real-estate valuation",
    category: "MACHINE LEARNING",
    accent: "#5eead4",
    problem:
      "Estimate real-estate values from historical house price data and identify which factors actually drive price.",
    approach:
      "Built preprocessing pipelines and trained classic regression algorithms, comparing them to minimise prediction error and surface the strongest pricing drivers.",
    techStack: ["Python", "scikit-learn", "Pandas"],
  },
];

export default projects;
