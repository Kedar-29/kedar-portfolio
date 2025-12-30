import { GLSLHills } from "@/components/ui/glsl-hills";
import { MorphingTextlive } from "./morphintext";
import { NameAnimation } from "./name";

export default function HeroSection() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <GLSLHills />

      <div className="space-y-6 pointer-events-none z-10 text-center absolute">
        <h1 className="whitespace-pre-wrap">
          <span className="block text-5xl font-semibold mt-2 pb-[10px] text-primary ">
            <NameAnimation />
          </span>

          {/* Morphing text */}
          <span className="block text-5xl font-semibold mt-2 text-primary">
            <MorphingTextlive />
          </span>
        </h1>

        {/* Description under morphing text */}
        <p className="text-sm text-primary/60 max-w-xl mx-auto mt-4">
          Full-Stack Engineer specializing in modern, scalable web applications
          with React, Next.js, NestJS, MySQL, Prisma ORM, and
          Tailwind—delivering clean UI/UX and high-performance backend systems.
        </p>

        <p className="text-xs text-primary/50 mt-1">Belagavi, India</p>
      </div>
    </div>
  );
}
