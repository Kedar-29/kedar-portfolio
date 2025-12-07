import { GLSLHills } from "@/components/ui/glsl-hills";
import { MorphingTextlive } from "./morphintext";
import { NameAnimation } from "./name";

export default function HeroSection() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <GLSLHills />

      <div className="space-y-6 pointer-events-none z-10 text-center absolute">
        <h1 className="whitespace-pre-wrap">
          {/* Custom font for name */}
          <NameAnimation />

          {/* Morphing text */}
          <span className="block text-5xl font-semibold mt-2 text-primary">
            <MorphingTextlive />
          </span>
        </h1>

        {/* Description under morphing text */}
        <p className="text-sm text-primary/60 max-w-xl mx-auto mt-4">
          Full-Stack Engineer building scalable web apps with React, Next.js,
          Tailwind, ShadCN, Node.js, and PostgreSQL—crafting seamless UIs and
          robust backends.
        </p>

        <p className="text-xs text-primary/50 mt-1">Belagavi, India</p>
      </div>
    </div>
  );
}
