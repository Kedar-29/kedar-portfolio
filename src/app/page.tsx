"use client";

import AboutSection from "@/components/aboutsection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import { Footersectiom } from "@/components/footer";
import HeroSection from "@/components/herosec/herosection";
import { NavBarItem } from "@/components/navbar/navbar";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <div className="scroll-smooth">
      {/* NAVBAR */}
      <NavBarItem />

      {/* HERO */}
      <section id="home" className="scroll-mt-24">
        <HeroSection />
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24">
        <AboutSection />
      </section>

      {/* EXPERIENCE */}
      <section id="experiance" className="scroll-mt-24">
        <ExperienceSection />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-24">
        <ProjectSection />
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24">
        <ContactSection />
      </section>

      {/* FOOTER */}
      <Footersectiom />
    </div>
  );
}
