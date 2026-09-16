
import type { Discovery } from "../types/expedition";

export const discoveries: Discovery[] = [
  {
    id: "purchase-value",
    type: "project",
    title: "Predicting Purchase Value",
    description:
      "A machine learning project that predicts customer purchase value from user session data.",
    label: "PROJECT DISCOVERED",
  },

  {
    id: "developer-journal",
    type: "about",
    title: "The Explorer's Journal",
    description:
      "Follow the path behind the developer and discover the story, journey, and background.",
    label: "JOURNAL DISCOVERED",
  },

  {
    id: "equipment",
    type: "skills",
    title: "Expedition Equipment",
    description:
      "Explore the technologies, tools, and skills used to build digital systems.",
    label: "EQUIPMENT DISCOVERED",
  },

  {
    id: "expedition-map",
    type: "resume",
    title: "Expedition Map",
    description:
      "Navigate through education, experience, projects, and technical journey.",
    label: "MAP DISCOVERED",
  },

  {
    id: "digital-artifact",
    type: "ai",
    title: "Unknown Digital Artifact",
    description:
      "Something strange has been detected deeper inside the expedition.",
    label: "UNKNOWN SIGNAL",
  },
];

