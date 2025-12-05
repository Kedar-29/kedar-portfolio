"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Code2,
  FolderGit2,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export type TimeLine_01Entry = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  items?: string[];
  button?: {
    url: string;
    text: string;
  };
};

export interface TimeLine_01Props {
  title?: string;
  description?: string;
  entries?: TimeLine_01Entry[];
  className?: string;
}

export const defaultEntries: TimeLine_01Entry[] = [
  {
    icon: GraduationCap,
    title: "Master of Computer Applications (MCA)",
    subtitle: "Gogte Institute of Technology, Belagavi • Feb 2024 – Aug 2025",
    description:
      "Pursuing MCA with a focus on full-stack web development, database design, and scalable architecture using modern frameworks like Next.js and Prisma ORM.",
    items: [
      "CGPA: 8.07 (till current semester)",
      "Coursework includes Software Engineering, Web Technologies, and Cloud Computing.",
      "Built several production-grade projects as part of coursework.",
    ],
  },
  {
    icon: GraduationCap,
    title: "Bachelor of Computer Applications (BCA)",
    subtitle: "Gogte College of Commerce, Belagavi • Jun 2020 – Oct 2023",
    description:
      "Completed BCA with a strong foundation in programming, database management, and front-end technologies.",
    items: [
      "CGPA: 7.63",
      "Developed multiple academic and personal web projects.",
      "Awarded Pratibha Puraskar for scoring 94 in Advanced Java.",
    ],
  },
  {
    icon: Briefcase,
    title: "Full Stack Developer Intern",
    subtitle: "Playtech • 2024",
    description:
      "Contributed as a Full Stack Developer Intern, working on scalable solutions using Next.js, NestJS, and MySQL.",
    items: [
      "Integrated REST APIs and optimized backend workflows.",
      "Developed modular and reusable UI components.",
      "Collaborated with design and backend teams for seamless feature delivery.",
    ],
    button: {
      url: "https://playtech.com",
      text: "Company Website",
    },
  },
  {
    icon: FolderGit2,
    title: "Major Projects",
    subtitle: "Independent & Academic Projects • 2023–2025",
    description:
      "Developed multiple real-world web applications focusing on clean design, functionality, and scalability.",
    items: [
      "TechAds – Advertising Management Platform (Next.js, Prisma, MySQL, Leaflet)",
      "Central Contact – Full Stack Communication Platform (Next.js, Prisma, MySQL)",
      "Tactical Panthers – Web Application for Security Services (MERN Stack)",
    ],
    button: {
      url: "https://github.com/Kedar-29",
      text: "View Projects on GitHub",
    },
  },
];

export default function TimeLine_01({
  title = "My Journey & Experience",
  description = "A quick overview of my academic background, professional internship, and hands-on full-stack development projects.",
  entries = defaultEntries,
}: TimeLine_01Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setItemRef = (el: HTMLDivElement | null, i: number) => {
    itemRefs.current[i] = el;
  };
  const setSentinelRef = (el: HTMLDivElement | null, i: number) => {
    sentinelRefs.current[i] = el;
  };

  useEffect(() => {
    if (!sentinelRefs.current.length) return;

    let frame = 0;
    const updateActiveByProximity = () => {
      frame = requestAnimationFrame(updateActiveByProximity);
      const centerY = window.innerHeight / 3;
      let bestIndex = 0;
      let bestDist = Infinity;
      sentinelRefs.current.forEach((node, i) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const dist = Math.abs(mid - centerY);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = i;
        }
      });
      if (bestIndex !== activeIndex) setActiveIndex(bestIndex);
    };

    frame = requestAnimationFrame(updateActiveByProximity);
    return () => cancelAnimationFrame(frame);
  }, [activeIndex]);

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  return (
    <section id="experience" className="py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="mb-6 text-base text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-16 md:mt-24 md:space-y-24">
          {entries.map((entry, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className="relative flex flex-col gap-4 md:flex-row md:gap-16"
                ref={(el) => setItemRef(el, index)}
                aria-current={isActive ? "true" : "false"}
              >
                {/* Sticky meta column */}
                <div className="top-8 flex h-min w-64 shrink-0 items-center gap-4 md:sticky">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <entry.icon className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{entry.title}</span>
                      <span className="text-xs text-muted-foreground">
                        {entry.subtitle}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  ref={(el) => setSentinelRef(el, index)}
                  aria-hidden
                  className="absolute -top-24 left-0 h-12 w-12 opacity-0"
                />

                {/* Content */}
                <article
                  className={
                    "flex flex-col rounded-2xl border p-3 transition-all duration-300 " +
                    (isActive
                      ? "border-gray-50 dark:border-gray-800 bg-gray-50 dark:bg-black shadow-lg"
                      : "border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black")
                  }
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h2
                        className={
                          "text-md font-medium leading-tight md:text-lg transition-colors duration-200 " +
                          (isActive ? "text-foreground" : "text-foreground/70")
                        }
                      >
                        {entry.title}
                      </h2>
                      <p
                        className={
                          "text-xs md:text-sm transition-all duration-300 " +
                          (isActive
                            ? "text-muted-foreground line-clamp-none"
                            : "text-muted-foreground/80 line-clamp-2")
                        }
                      >
                        {entry.description}
                      </p>
                    </div>

                    {/* Expandable details */}
                    <div
                      aria-hidden={!isActive}
                      className={
                        "grid transition-all duration-500 ease-out " +
                        (isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0")
                      }
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-4 pt-2">
                          {entry.items && entry.items.length > 0 && (
                            <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black p-4">
                              <ul className="space-y-2">
                                {entry.items.map((item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="flex items-start gap-2 text-sm text-muted-foreground"
                                  >
                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                                    <span className="leading-relaxed">
                                      {item}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {entry.button && (
                            <div className="flex justify-end">
                              <Button
                                variant="default"
                                size="sm"
                                className="group hover:bg-primary hover:text-primary-foreground font-normal transition-all duration-200"
                                asChild
                              >
                                <a
                                  href={entry.button.url}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {entry.button.text}
                                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
