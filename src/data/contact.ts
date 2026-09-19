export interface ContactChannel {
  id: string;
  icon: string;
  label: string;
  value: string;
  href: string;
  external: boolean;
}

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: "email",
    icon: "📧",
    label: "EMAIL",
    value: "gudduiit.m1315@gmail.com",
    href: "mailto:gudduiit.m1315@gmail.com",
    external: false,
  },
  {
    id: "phone",
    icon: "📱",
    label: "PHONE",
    value: "+91 78348 23856",
    href: "tel:+917834823856",
    external: false,
  },
  {
    id: "linkedin",
    icon: "💼",
    label: "LINKEDIN",
    value: "linkedin.com/in/guddu-mishra-z",
    href: "https://www.linkedin.com/in/guddu-mishra-z",
    external: true,
  },
  {
    id: "github",
    icon: "✦",
    label: "GITHUB",
    value: "github.com/gkmfrombs",
    href: "https://github.com/gkmfrombs",
    external: true,
  },
];

export const GITHUB_PROFILE = "https://github.com/gkmfrombs";
