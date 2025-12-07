"use client";

import React from "react";
import { Timeline, TimelineItem } from "@/components/ui/modern-timeline";

const timelineItems: TimelineItem[] = [
  {
    title: "Full Stack Developer ",
    description: `
      Company: Playtech, Belagavi

      • Developed complete end-to-end modules across frontend, backend, and database using Next.js, NestJS, and MySQL.
      • Built reusable UI components and integrated REST APIs, increasing development speed by 25%.
      • Optimized database queries and improved workflows, reducing API errors by 40% and boosting dashboard load speed by 30%.
      • Tech: Next.js, NestJS, MySQL, Prisma ORM, Git, Postman
    `,
    date: "1 year",
    category: "Full-Time",

    status: "current",
  },
  {
    title: "Freelance Web Developer",
    description: `
      Self-Employed

      • Built a full-stack MERN security agency application with RBAC, job applications, email alerts, dashboards, and Google Maps integration.
      • Developed a modern security service website with service showcase and contact system.
      • Created a portfolio website for an ice cube company, enhancing online presence.
      • Designed and developed my personal portfolio with clean UI/UX for professional branding.
      • Tech: React.js, Node.js, Express.js, MongoDB, HTML/CSS, JavaScript
    `,
    date: "8 months",
    category: "Freelance",

    status: "completed",
  },
];

export default function ExperienceSection() {
  return (
    <div className="min-h-screen bg-background">
      <header className="text-center py-16 px-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
          Experience
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A look into my professional journey — from full-time engineering work
          to impactful freelance projects.
        </p>
      </header>

      <main>
        <Timeline items={timelineItems} />
      </main>
    </div>
  );
}
