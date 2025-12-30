"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Playtech, Belagavi",
    duration: "01",
    time: "1 Year · Full-Time",
    status: "Current",
    desc: `
• Developed end-to-end modules using Next.js, NestJS, and MySQL.
• Built reusable UI components and REST API integrations (+25% dev speed).
• Optimized database queries and workflows, reducing API errors by 40%.
• Improved dashboard load performance by 30%.
• Tech: Next.js, NestJS, MySQL, Prisma, Git, Postman
    `,
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    duration: "02",
    time: "8 Months · Freelance",
    status: "Completed",
    desc: `
• Built MERN security agency app with RBAC, dashboards & Google Maps.
• Developed service websites with contact & email systems.
• Created business portfolio websites to improve online presence.
• Designed and built my own portfolio with clean UI/UX.
• Tech: React, Node.js, Express, MongoDB, HTML, CSS
    `,
  },
];

export default function ExperienceHorizontal() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // ⬇️ IMPORTANT: Reduced overshoot so last card fully centers
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-60%"]);

  const titleOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0]);
  const titleY = useTransform(smoothProgress, [0, 0.12], [0, -50]);

  return (
    <section
      ref={targetRef}
      className="
        relative h-[600vh]
        bg-white dark:bg-[#050505]
        transition-colors duration-500
      "
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* ================= HEADER ================= */}
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="absolute left-[10vw] z-10"
        >
          <h2 className="text-[10vw] font-medium tracking-tighter leading-none text-neutral-900 dark:text-white">
            Experience
          </h2>

          <p className="text-xl md:text-2xl mt-6 max-w-sm ml-4 font-light text-neutral-600 dark:text-neutral-500">
            A journey through professional roles and real-world impact.
          </p>
        </motion.div>

        {/* ================= HORIZONTAL TRACK ================= */}
        <motion.div
          style={{ x }}
          className="flex items-center gap-[8vw] px-[10vw]"
        >
          {/* Spacer for title */}
          <div className="w-[85vw] flex-shrink-0" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative flex flex-col flex-shrink-0 w-[85vw] md:w-[55vw]"
            >
              {/* Header */}
              <div className="flex justify-between items-end mb-8 pb-6 border-b border-neutral-200 dark:border-white/10">
                <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white">
                  {exp.role}
                </h3>

                <span className="text-2xl font-mono text-neutral-400 dark:text-neutral-600">
                  {exp.duration}
                </span>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 mb-10 text-neutral-600 dark:text-neutral-400">
                <span className="uppercase tracking-widest text-sm">
                  {exp.company}
                </span>

                <span className="h-1 w-1 rounded-full bg-neutral-400 dark:bg-neutral-600" />

                <span className="text-sm">{exp.time}</span>

                <span
                  className={`text-xs px-3 py-1 rounded-full border ${
                    exp.status === "Current"
                      ? "border-green-500 text-green-600 dark:border-green-400 dark:text-green-400"
                      : "border-neutral-300 text-neutral-600 dark:border-neutral-600 dark:text-neutral-400"
                  }`}
                >
                  {exp.status}
                </span>
              </div>

              {/* Description */}
              <p className="whitespace-pre-line text-lg md:text-xl leading-relaxed font-light max-w-3xl text-neutral-700 dark:text-neutral-400">
                {exp.desc}
              </p>
            </div>
          ))}

          {/* ✅ END SPACER — allows last card to fully display */}
          <div className="w-[60vw] flex-shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}
