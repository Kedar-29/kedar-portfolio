"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProjectSection() {
  const projects = [
    {
      title: "OneInbox – Unified Email Management",
      desc: "A unified inbox platform that merges multiple accounts into one dashboard to boost productivity and streamline communication.",
      img: "/projects/oneinbox.png",
      tags: ["Next.js", "TypeScript", "Node.js", "+3"],
      type: "Web Application",
    },
    {
      title: "TechAds – Advertisement & Device Management",
      desc: "A complete advertising ecosystem with device control, client management, video scheduling, invoicing and real-time monitoring.",
      img: "/projects/techads.png",
      tags: ["Next.js", "Prisma", "SQL", "ShadCN"],
      type: "Full-Stack App",
    },
    {
      title: "Tact-Panther – Smart Task Manager",
      desc: "A modern task manager for tracking progress, analytics-driven insights and daily productivity optimization.",
      img: "/projects/tactpanther.png",
      tags: ["React", "Firebase", "Tailwind"],
      type: "Web App",
    },
    {
      title: "ReviewHub – AI Review System",
      desc: "An AI-powered sentiment analysis platform used to extract meaningful insights from customer reviews.",
      img: "/projects/reviewhub.png",
      tags: ["Next.js", "AI/ML", "Vector DB", "+4"],
      type: "AI Web App",
    },
    {
      title: "WeCare Hospital – Healthcare Management",
      desc: "A complete hospital ERP with patient records, appointments, doctor dashboards, billing, prescriptions and reports.",
      img: "/projects/wecare.png",
      tags: ["Next.js", "PostgreSQL", "Express.js"],
      type: "ERP System",
    },
    {
      title: "Project & Customer Management System",
      desc: "A project workflow, billing, task tracking and client management suite for businesses and agencies.",
      img: "/projects/pcms.png",
      tags: ["React", "Node.js", "MongoDB"],
      type: "Management System",
    },
  ];

  return (
    <section className="w-full py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Selected Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-10">
        {projects.map((p, index) => (
          <div
            key={index}
            className="bg-[#0f0f0f] border border-[#1b1b1b] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {/* IMAGE */}
            <div className="relative h-60 w-full group overflow-hidden">
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover group-hover:scale-105 transition-all duration-500"
              />

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <button className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium flex items-center gap-2">
                  View Details <ArrowUpRight size={14} />
                </button>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-xl font-semibold leading-snug">{p.title}</h3>

              <p className="text-neutral-400 text-sm mt-3 line-clamp-3">
                {p.desc}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md text-xs bg-[#181818] border border-[#272727]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* FOOTER */}
              <div className="mt-6 flex justify-between items-center text-sm text-neutral-400 border-t border-neutral-800 pt-4">
                <span>{p.type}</span>
                <button className="text-green-400 hover:underline">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
