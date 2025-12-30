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

  // ⬇️ Reduced overshoot so LAST card fully enters viewport
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-65%"]);

  const titleOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);
  const titleY = useTransform(smoothProgress, [0, 0.1], [0, -50]);

  const projects = [
    {
      title: "OneInbox",
      type: "01",
      img: "/projects/oneinbox.png",
      category: "Product & Platforms",
      desc: "We design, develop, and optimize brand and commerce websites.",
    },
    {
      title: "TechAds",
      type: "02",
      img: "/projects/techads.png",
      category: "Data & AI",
      desc: "Turning data into an advantage as a strategic ingredient.",
    },
    {
      title: "Tact-Panther",
      type: "03",
      img: "/projects/tactpanther.png",
      category: "Marketing & Content",
      desc: "Creating seamless stories and journeys that drive loyalty.",
    },
    {
      title: "ReviewHub",
      type: "04",
      img: "/projects/reviewhub.png",
      category: "Brand Strategy",
      desc: "Differentiated identities defined by a brand's vision.",
    },
    {
      title: "WeCare",
      type: "05",
      img: "/projects/wecare.png",
      category: "Customer Experience",
      desc: "Exceptional experiences for businesses and customers.",
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
              {/* Category */}
              <div className="flex justify-between items-end mb-6 pb-4 border-b border-neutral-200 dark:border-white/10">
                <h3 className="text-2xl md:text-4xl font-medium tracking-tight flex items-baseline gap-4 text-neutral-900 dark:text-white">
                  {p.category}
                  <span className="text-xl font-mono text-neutral-400 dark:text-neutral-600">
                    {p.type}
                  </span>
                </h3>
              </div>

              {/* Image */}
              <div className="relative aspect-[15/10] w-full overflow-hidden rounded-sm bg-neutral-100 dark:bg-neutral-900">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover opacity-90 dark:opacity-80 transition-all duration-[1.5s] ease-[cubic-bezier(0.2,1,0.3,1)] group-hover:scale-105 group-hover:opacity-100"
                />

                {/* Explore */}
                <div className="absolute bottom-6 left-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="px-5 py-3 md:px-8 md:py-4 rounded-sm flex items-center gap-4 text-xs md:text-sm font-bold uppercase tracking-widest bg-black text-white dark:bg-white dark:text-black"
                  >
                    Explore
                    <span className="border p-1 border-white/20 dark:border-black/20">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.64645 11.3536L11.3536 3.64645M11.3536 3.64645H3.5M11.3536 3.64645V11.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                      </svg>
                    </span>
                  </motion.button>
                </div>
              </div>

              {/* Description */}
              <div className="mt-8 max-w-xl">
                <p className="text-base md:text-lg leading-relaxed font-light text-neutral-700 dark:text-neutral-400">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}

          {/* ✅ END SPACER — allows LAST project to fully settle */}
          <div className="w-[55vw] flex-shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}
