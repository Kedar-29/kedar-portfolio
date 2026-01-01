"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiNestjs,
  SiMysql,
  SiGit,
  SiPostgresql,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiPostman,
  SiSwagger,
  SiPrisma,
  SiSpringboot,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function AboutSection() {
  const skills = [
    { id: 1, icon: <SiReact color="#61DAFB" />, name: "React.js" },
    { id: 2, icon: <SiNextdotjs color="#000000" />, name: "Next.js" },
    { id: 3, icon: <SiExpress color="#000000" />, name: "Express" },
    { id: 4, icon: <SiNestjs color="#E0234E" />, name: "NestJS" },
    { id: 5, icon: <SiMysql color="#4479A1" />, name: "MySQL" },
    { id: 6, icon: <SiGit color="#F05032" />, name: "Git" },
    { id: 7, icon: <FaJava color="#007396" />, name: "Java" },
    { id: 8, icon: <SiSpringboot color="#6DB33F" />, name: "Spring Boot" },
    { id: 9, icon: <SiPostgresql color="#336791" />, name: "PostgreSQL" },
    { id: 10, icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
    { id: 11, icon: <SiHtml5 color="#E34F26" />, name: "HTML5" },
    { id: 12, icon: <SiCss3 color="#1572B6" />, name: "CSS3" },
    { id: 13, icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
    { id: 14, icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
    { id: 15, icon: <SiTailwindcss color="#06B6D4" />, name: "Tailwind CSS" },
    { id: 16, icon: <SiPostman color="#FF6C37" />, name: "Postman" },
    { id: 17, icon: <SiSwagger color="#85EA2D" />, name: "Swagger" },
    { id: 18, icon: <SiPrisma color="#0C344B" />, name: "Prisma ORM" },
  ];

  return (
    <section className="relative w-full py-28 px-8 overflow-hidden bg-background">
      {/* ================= Background Blobs ================= */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      {/* ================= About Section ================= */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-5xl font-extrabold leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 text-transparent bg-clip-text">
              Me
            </span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            I’m{" "}
            <span className="font-semibold text-foreground">Kedar Mhetre</span>,
            a Full-Stack Engineer focused on creating modern, scalable, and
            visually appealing web applications. I specialize in clean UI/UX,
            high-performance backend systems, and building efficient full-stack
            solutions using the latest technologies.
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="relative p-2 rounded-3xl bg-primary/10 hover:shadow-2xl hover:shadow-primary/40 transition-all">
            <div className="absolute inset-0 rounded-3xl blur-xl bg-primary/10 animate-pulse-slow" />

            <Image
              src="/kedaronecopy.png"
              width={300}
              height={500}
              alt="Kedar"
              className="relative z-10 rounded-3xl shadow-2xl border border-white/20 object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* ================= Tech Stack ================= */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mt-20 mb-6 text-3xl font-bold text-center relative z-10"
      >
        My Tech Stack
      </motion.h3>

      {/* ================= Marquee ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-[90%] mx-auto relative z-10"
      >
        <Marquee gradient={false} speed={60} pauseOnHover>
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center mx-6 group hover:scale-110 transition-transform duration-300"
            >
              <div className="text-5xl p-5 rounded-2xl bg-card/50 border border-white/10 shadow-lg group-hover:shadow-primary/50">
                {skill.icon}
              </div>
              <p className="text-sm mt-3 font-medium text-muted-foreground group-hover:text-foreground">
                {skill.name}
              </p>
            </div>
          ))}
        </Marquee>
      </motion.div>

      {/* ================= Animations ================= */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          30% {
            transform: translate(-30px, 50px) scale(1.1);
          }
          60% {
            transform: translate(50px, -20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 15s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 5s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
