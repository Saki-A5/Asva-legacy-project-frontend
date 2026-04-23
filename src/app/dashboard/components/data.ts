// export const documents = [/* unchanged */];
// export const links = [/* unchanged */];
// export const internships = [/* unchanged */];
// export const certificates = [/* unchanged */];
export const notifications = [/* unchanged */];

import { Certificate, Document, LinkItem, Internship, } from "@/app/join/components/types";

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "ASVA Leadership Summit 2024",
    issuer: "ASVA",
    date: "Dec 14, 2024",
    status: "issued",
  },
  {
    id: 2,
    title: "Academic Excellence Award",
    issuer: "Faculty of Sciences",
    date: "Nov 28, 2024",
    status: "issued",
  },
  {
    id: 3,
    title: "Community Service Recognition",
    issuer: "ASVA",
    date: "Mar 10, 2025",
    status: "issued",
  },
  {
    id: 4,
    title: "Innovation Challenge — Runner Up",
    issuer: "ASVA x TechNova",
    date: "Apr 5, 2025",
    status: "pending",
  },
];


export const documents: Document[] = [
  {
    id: 1,
    title: "2024/2025 Academic Calendar",
    category: "Academic",
    date: "Apr 18, 2025",
    size: "1.2 MB",
    type: "pdf",
  },
];

export const links: LinkItem[] = [
  {
    id: 1,
    title: "University Portal Login",
    url: "https://portal.university.edu",
    category: "Portal",
    date: "Apr 1, 2025",
  },
];

export const internships: Internship[] = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "TechNova Lagos",
    type: "Full-time",
    deadline: "May 10, 2025",
    location: "Lagos, Nigeria",
    tags: ["Tech", "Paid"],
  },
];
