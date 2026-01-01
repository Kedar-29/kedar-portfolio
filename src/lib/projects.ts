export type Project = {
  slug: string;
  title: string;
  type: string;
  img: string;
  category: string;
  desc: string;
  // Optional gallery of additional images
  images?: string[];
};

export const projects: Project[] = [
  {
    slug: "oneinbox",
    title: "OneInbox",
    type: "01",
    img: "/projects/oneinbox.png",
    category: "Open Source Development",
    desc: "soon",
  },
  {
    slug: "techads",
    title: "TechAds",
    type: "02",
    img: "/techads/cover.png",
    category: "Next.js Application",
    desc: "Centralized control for digital ads, devices, and billing.",
  },
  {
    slug: "flowdesk",
    title: "FlowDesk",
    type: "03",
    img: "/flow/cover.png",
    category: "Full Stack Development",
    desc: "A modern SaaS platform for managing customers and projects.",
  },
  {
    slug: "security-agency-management",
    title: "Security agency management",
    type: "04",
    img: "/security_service/cover.png",
    category: "MERN Stack Application",
    desc: "Centralized platform for managing agency workforce operations.",
  },
  {
    slug: "wecare",
    title: "WeCare",
    type: "05",
    img: "/wecare/cover.png",
    category: "Web Application",
    desc: "Hospital management system for workforce operations.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
