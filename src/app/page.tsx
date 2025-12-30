"use client";

import HeroSection from "@/components/herosec/herosection";
import AboutSection from "@/components/aboutsection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import { Footersectiom } from "@/components/footer";
import { NavBarItem } from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <NavBarItem />

      <section id="home" className="scroll-mt-28">
        <HeroSection />
      </section>

      <section id="about" className="scroll-mt-28">
        <AboutSection />
      </section>

      <section id="experience" className="scroll-mt-28">
        <ExperienceSection />
      </section>

      <section id="projects" className="scroll-mt-28">
        <ProjectSection />
      </section>

      <section id="contact" className="scroll-mt-28">
        <ContactSection />
      </section>

      <Footersectiom />
    </div>
  );
}
