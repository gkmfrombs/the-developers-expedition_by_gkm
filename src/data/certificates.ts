export interface CertificateData {
  id: string;
  title: string;
  issuer: string;
  date: string;
  note?: string;
  image: string;
  /** Drives the card's aspect ratio so nothing is letterboxed. */
  orientation: "landscape" | "portrait";
  /** Intrinsic pixel size — reserves layout space before the image loads,
   *  so the scroll reveal fires one card at a time. */
  width: number;
  height: number;
}

export interface CertificateCategory {
  id: string;
  label: string;
  icon: string;
  blurb: string;
  items: CertificateData[];
}

/**
 * Certificates, grouped by category.
 *
 * To add a new group (workshops, skills, competitions…), push another
 * entry onto this array — the panel renders whatever is here, so no
 * component changes are needed.
 */
const certificateCategories: CertificateCategory[] = [
  {
    id: "education",
    label: "EDUCATION",
    icon: "🎓",
    blurb: "Degree and diploma credentials from IIT Madras.",
    items: [
      {
        id: "diploma-programming",
        title: "Diploma in Programming",
        issuer: "Indian Institute of Technology Madras",
        date: "15 September 2024",
        image: "/assets/certificates/diploma-programming.jpg",
        width: 1600,
        height: 1131,
        orientation: "landscape",
      },
      {
        id: "diploma-data-science",
        title: "Diploma in Data Science",
        issuer: "Indian Institute of Technology Madras",
        date: "15 September 2025",
        image: "/assets/certificates/diploma-data-science.jpg",
        width: 1600,
        height: 1133,
        orientation: "landscape",
      },
      {
        id: "iitm-degree",
        title: "BSc in Programming and Data Science",
        issuer: "IIT Madras — BS Degree Office",
        date: "15 May 2026",
        note: "Credit requirements completed by the January 2026 term.",
        image: "/assets/certificates/iitm-degree.jpg",
        width: 1132,
        height: 1600,
        orientation: "portrait",
      },
    ],
  },
  {
    id: "workshops",
    label: "WORKSHOPS",
    icon: "🛠️",
    blurb: "Hands-on training sessions and short courses.",
    items: [
      {
        id: "workshop-data-visualization",
        title: "Data Visualization Using Matplotlib & Seaborn",
        issuer: "IIT Madras — BS Degree Program",
        date: "18–20 January 2026",
        note: "Certificate of Participation.",
        image: "/assets/certificates/workshop-data-visualization.jpg",
        width: 1600,
        height: 1132,
        orientation: "landscape",
      },
    ],
  },
  {
    id: "hackathons",
    label: "HACKATHONS",
    icon: "🏆",
    blurb: "Competitions and team challenges.",
    items: [
      {
        id: "hackathon-syngenta",
        title: "Syngenta Hackathon 2026 — 1st Place",
        issuer: "Syngenta · IIT Madras Paradox",
        date: "2026",
        note: "Awarded to team Code Apes for first position.",
        image: "/assets/certificates/hackathon-syngenta.jpg",
        width: 1600,
        height: 1148,
        orientation: "landscape",
      },
    ],
  },
];

export default certificateCategories;
