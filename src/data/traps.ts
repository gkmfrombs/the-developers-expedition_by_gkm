/**
 * Central trap configuration.
 *
 * Every trap button, animation, and panel reads from
 * this single source of truth.
 */

export type TrapType =
  | "fishing"
  | "mechanical"
  | "rope"
  | "tracking"
  | "scroll"
  | "backpack"
  | "digital"
  | "bottle";

export type PortfolioSection =
  | "about"
  | "projects"
  | "skills"
  | "experience"
  | "certificates"
  | "resume"
  | "github"
  | "contact";

export interface TrapConfig {
  id: PortfolioSection;
  label: string;
  trap: TrapType;
  icon: string;
  action: string;
  caughtLabel: string;
  panelEyebrow: string;
  panelTitle: string;
  color: string;
  accentColor: string;
  durationMs: number;
}

const traps: TrapConfig[] = [
  {
    id: "about",
    label: "ABOUT",
    trap: "fishing",
    icon: "🎣",
    action: "CAST",
    caughtLabel: "🎣 CAUGHT BY THE LINE",
    panelEyebrow: "ABOUT THE EXPLORER",
    panelTitle: "WHO IS GUDDU?",
    color: "#d8ad5b",
    accentColor: "rgba(216, 173, 91, 0.15)",
    durationMs: 1100,
  },
  {
    id: "projects",
    label: "PROJECTS",
    trap: "mechanical",
    icon: "🪤",
    action: "SNAP",
    caughtLabel: "🪤 TRAP TRIGGERED",
    panelEyebrow: "THE HUNTED ARTIFACTS",
    panelTitle: "PROJECTS",
    color: "#e8a849",
    accentColor: "rgba(232, 168, 73, 0.15)",
    durationMs: 850,
  },
  {
    id: "skills",
    label: "SKILLS",
    trap: "rope",
    icon: "🪢",
    action: "PULL",
    caughtLabel: "🪢 ROPE SECURED",
    panelEyebrow: "EXPEDITION EQUIPMENT",
    panelTitle: "SKILLS",
    color: "#a8c97a",
    accentColor: "rgba(168, 201, 122, 0.12)",
    durationMs: 900,
  },
  {
    id: "experience",
    label: "EXPERIENCE",
    trap: "tracking",
    icon: "🐾",
    action: "TRACK",
    caughtLabel: "🐾 TRAIL FOUND",
    panelEyebrow: "TRACKING THE JOURNEY",
    panelTitle: "EXPERIENCE",
    color: "#7ab5c9",
    accentColor: "rgba(122, 181, 201, 0.12)",
    durationMs: 900,
  },
  {
    id: "certificates",
    label: "CERTIFICATES",
    trap: "scroll",
    icon: "📜",
    action: "UNROLL",
    caughtLabel: "📜 SCROLL UNROLLED",
    panelEyebrow: "EXPEDITION RECORDS",
    panelTitle: "CERTIFICATES",
    color: "#d4a853",
    accentColor: "rgba(212, 168, 83, 0.12)",
    durationMs: 850,
  },
  {
    id: "resume",
    label: "RESUME",
    trap: "backpack",
    icon: "🎒",
    action: "OPEN",
    caughtLabel: "🎒 PACK FOUND",
    panelEyebrow: "FIELD DOCUMENT",
    panelTitle: "RESUME",
    color: "#8fbd76",
    accentColor: "rgba(143, 189, 118, 0.12)",
    durationMs: 800,
  },
  {
    id: "github",
    label: "GITHUB",
    trap: "digital",
    icon: "✦",
    action: "TRACE",
    caughtLabel: "✦ DIGITAL TRAIL FOUND",
    panelEyebrow: "THE CODE TRAIL",
    panelTitle: "GITHUB",
    color: "#4ad8ff",
    accentColor: "rgba(74, 216, 255, 0.1)",
    durationMs: 900,
  },
  {
    id: "contact",
    label: "CONTACT",
    trap: "bottle",
    icon: "🍾",
    action: "RETRIEVE",
    caughtLabel: "🍾 MESSAGE RETRIEVED",
    panelEyebrow: "MESSAGE IN A BOTTLE",
    panelTitle: "CONTACT",
    color: "#6bc9b8",
    accentColor: "rgba(107, 201, 184, 0.1)",
    durationMs: 850,
  },
];

export default traps;

export function getTrapConfig(
  id: PortfolioSection
): TrapConfig {
  const config = traps.find((t) => t.id === id);
  if (!config) throw new Error(`Unknown trap: ${id}`);
  return config;
}
