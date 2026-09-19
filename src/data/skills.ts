export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    icon: "⌨️",
    color: "#4ad8ff",
    skills: ["Python", "JavaScript", "Java", "C", "SQL", "Bash", "DAX"],
  },
  {
    id: "frameworks",
    title: "Frameworks & Web",
    icon: "🧩",
    color: "#a78bfa",
    skills: [
      "FastAPI",
      "Django",
      "Flask",
      "React",
      "Next.js",
      "Vue.js",
      "React Native",
      "Flutter",
      "REST APIs",
      "Bootstrap",
    ],
  },
  {
    id: "data-ml",
    title: "Machine Learning & Data",
    icon: "🧠",
    color: "#5eead4",
    skills: [
      "scikit-learn",
      "TensorFlow",
      "Keras",
      "Pandas",
      "NumPy",
      "OpenCV",
      "Matplotlib",
      "Seaborn",
      "Power BI",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "🗄️",
    color: "#ffb457",
    skills: ["PostgreSQL", "SQLite", "SQLAlchemy", "Redis"],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    icon: "🛠️",
    color: "#ff7ea8",
    skills: [
      "Git & GitHub",
      "Docker",
      "Linux CLI",
      "Celery",
      "VS Code",
      "Google Colab",
    ],
  },
];

export default skillCategories;
