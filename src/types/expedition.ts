
export type DiscoveryType =
  | "project"
  | "about"
  | "skills"
  | "certificate"
  | "resume"
  | "github"
  | "contact"
  | "ai";

export interface Discovery {
  id: string;
  type: DiscoveryType;
  title: string;
  description: string;
  label: string;
}

