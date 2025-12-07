"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
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
    <section className="w-full py-28 px-8 flex flex-col items-center relative overflow-hidden bg-background">
      {/* 
        NEW: Enhanced Background Glow/Animation
        A subtle, moving gradient to add depth and animation to the section background. 
      */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      {/* About + Image */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT — About Text (Using a smoother fade-in-up animation) */}
        <div
          className="space-y-6 animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
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
            solutions using the latest technologies. With hands-on experience in
            React.js, Next.js, NestJS, MySQL, and Prisma ORM, I deliver seamless
            and professional digital experiences.
          </p>
        </div>

        {/* RIGHT — Image (Using a smoother fade-in-up animation with a slight delay) */}
        <div
          className="flex justify-center relative animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          {/* Subtle pulse and glow border added to the image container */}
          <div className="relative p-2 rounded-3xl bg-primary/10 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/40">
            <div className="absolute inset-0 rounded-3xl blur-xl bg-primary/10 animate-pulse-slow"></div>

            <Image
              src="/kedar.jpg"
              width={300}
              height={500}
              alt="Kedar"
              className="
    rounded-3xl shadow-2xl border border-white/20 relative z-10 object-cover 
  
   
  "
            />
          </div>
        </div>
      </div>

      {/* My Tech Stack Title (Smoother animation) */}
      <h3
        className="mt-20 mb-6 text-3xl font-bold text-center animate-fadeInUp"
        style={{ animationDelay: "0.6s" }}
      >
        My Tech Stack
      </h3>

      {/* MARQUEE */}
      <div className="w-[90%] mx-auto relative z-10">
        <Marquee gradient={false} speed={60} pauseOnHover={true}>
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center mx-6 transition-transform duration-500 hover:scale-[1.15] cursor-pointer group" // More aggressive hover scale
            >
              <div
                className="
                  text-5xl p-5 rounded-2xl bg-card/50 backdrop-blur-sm
                  border border-white/10 shadow-lg 
                  group-hover:shadow-primary/50 group-hover:bg-primary/20
                  group-hover:text-primary transition-all duration-300 ease-in-out
                " // Enhanced hover style
              >
                {skill.icon}
              </div>
              <p className="text-sm mt-3 font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {skill.name}
              </p>
            </div>
          ))}
        </Marquee>
      </div>

      {/* NEW: Animation Styles for 21dev-like smoothness */}
      <style>{`
        /* Smoother Entrance Animation */
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0; /* Ensures it starts invisible */
        }
        
        /* Continuous Background Blob Animation */
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          30% { transform: translate(-30px, 50px) scale(1.1); }
          60% { transform: translate(50px, -20px) scale(0.9); }
          80% { transform: translate(-10px, 30px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 15s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }

        /* Slow Pulse for Image Glow */
        @keyframes pulse-slow {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.6; }
        }
        .animate-pulse-slow {
            animation: pulse-slow 5s infinite ease-in-out;
        }

      `}</style>
    </section>
  );
}
