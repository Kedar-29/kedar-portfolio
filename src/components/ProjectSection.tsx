"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";

export default function AgencyDarkHorizontal() {
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

  const x = useTransform(smoothProgress, [0, 1], ["0%", "-65%"]);
  const titleOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);
  const titleY = useTransform(smoothProgress, [0, 0.1], [0, -50]);

  const projects = [
    {
      title: "OneInbox",
      type: "01",
      img: "/projects/oneinbox.png",
      category: "Open Source Development",
      desc: `soon`,
      skills: ["Next.js", "TypeScript", "Prisma", "Open Source"],
      github: "#",
      demoUrl: "#",
      demoLabel: "Live demo",
    },
    {
      title: "TechAds",
      type: "02",
      img: "/techads/cover.png",
      category: "Next.js Application",
      desc: `A centralized digital advertising platform for managing, scheduling, and monitoring campaigns across multiple devices with role-based access and real-time insights.`,
      skills: ["Next.js", "Prisma", "JWT", "Leaflet", "ShadCN UI"],
      github: "https://github.com/Kedar-29/tech-ads.git",
      demoUrl: "#",
      demoLabel: "Live demo",
    },
    {
      title: "FlowDesk",
      type: "03",
      img: "/flow/cover.png",
      category: "Full Stack Development",
      desc: `A full-stack customer and project management system with secure data handling and role-based access. Designed for scalable, real-world business workflows.`,

      skills: ["Next.js", "PostgreSQL", "Prisma", "SaaS"],
      github: "https://github.com/Kedar-29/FlowDesk.git",
      demoUrl: "#contact",
      demoLabel: "Contact for demo",
    },
    {
      title: "Security agency management",
      type: "04",
      img: "/security_service/cover.png",
      category: "MERN Stack Application",
      desc: `A centralized system designed to manage security services, workforce operations, and client requests efficiently using role-based access and structured workflows.`,
      skills: ["MongoDB", "Express", "React", "Node.js"],
      github:
        "https://github.com/Kedar-29/security-agency-management-system.git",
      demoUrl: "#contact",
      demoLabel: "Contact for demo",
    },
    {
      title: "WeCare",
      type: "05",
      img: "/wecare/cover.png",
      category: "Web Application",
      desc: `A web-based hospital management system has secure, role-based access to appointments, patient records, medical history, improving efficiency and coordination across hospital staff and patients.`,
      skills: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
      github:
        "https://github.com/Kedar-29/WeCare-Hospital-Management-System.git",
      demoUrl: "#contact",
      demoLabel: "Contact for demo",
    },
  ];

  return (
    <section
      ref={targetRef}
      className="
        relative h-[700vh]
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
            Selected Works
          </h2>
          <p className="text-xl md:text-2xl mt-6 max-w-sm ml-4 font-light text-neutral-600 dark:text-neutral-500">
            Designing and developing products that make a real impact.
          </p>
        </motion.div>

        {/* ================= HORIZONTAL TRACK ================= */}
        <motion.div
          style={{ x }}
          className="flex items-center gap-[6vw] px-[10vw]"
        >
          {/* START SPACER */}
          <div className="w-[75vw] flex-shrink-0" />

          {projects.map((p, index) => (
            <div
              key={index}
              className="group relative flex flex-col flex-shrink-0 w-[75vw] md:w-[42vw]"
            >
              {/* Title */}
              <div className="mb-3 pb-1">
                <div className="flex items-baseline gap-4 mb-2">
                  <h3 className="text-2xl md:text-4xl font-medium tracking-tight text-neutral-900 dark:text-white">
                    {p.title}
                  </h3>
                  <span className="text-xl font-mono text-neutral-400 dark:text-neutral-600">
                    {p.type}
                  </span>
                </div>
                <p className="text-base md:text-lg font-light text-neutral-600 dark:text-neutral-500">
                  {p.category}
                </p>
              </div>

              {/* Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-neutral-100 dark:bg-neutral-900">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover opacity-90 dark:opacity-80 transition-all duration-[1.5s] ease-[cubic-bezier(0.2,1,0.3,1)] group-hover:scale-105 group-hover:opacity-100"
                />

                {/* Bottom gradient for tag readability */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-28 md:h-32
                    bg-gradient-to-t from-black/80 via-black/40 to-transparent
                    dark:from-black/90 dark:via-black/60 dark:to-transparent
                  "
                />

                {/* Skills tags overlay */}
                <div className="absolute bottom-6 left-6 flex flex-wrap gap-3 z-20">
                  {p.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="
                        px-4 py-2 text-xs md:text-sm rounded-full
                        border border-white/40 dark:border-white/40
                        bg-white/10 dark:bg-white/10
                        text-white
                        uppercase tracking-wider
                        backdrop-blur-sm
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description + Skills */}
              <div className="mt-8 w-full">
                <p className="whitespace-pre-line text-base md:text-lg leading-relaxed font-light text-neutral-700 dark:text-neutral-400">
                  {p.desc}
                </p>

                {/* Links */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-full border border-neutral-800/80 dark:border-white/40 text-xs md:text-sm font-medium tracking-wide text-neutral-900 dark:text-white bg-white/80 dark:bg-transparent hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
                    >
                      GitHub
                    </a>
                  )}

                  {p.demoUrl && p.demoLabel && (
                    <a
                      href={p.demoUrl}
                      target={p.demoUrl.startsWith("http") ? "_blank" : "_self"}
                      rel={
                        p.demoUrl.startsWith("http") ? "noreferrer" : undefined
                      }
                      className="px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide bg-neutral-900 text-white dark:bg-white dark:text-black hover:bg-black dark:hover:bg-neutral-200 transition-colors"
                    >
                      {p.demoLabel}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* END SPACER */}
          <div className="w-[55vw] flex-shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}
