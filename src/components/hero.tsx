"use client";
import React from "react";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";
import { MinimalistHero } from "@/components/ui/minimalist-hero"; // Adjust the import path as needed

const MinimalistHeroDemo = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Kedar-29" },
    { icon: Linkedin, href: "https://linkedin.com/in/kedarmhetre" },
    { icon: Twitter, href: "https://twitter.com/" },
    { icon: Instagram, href: "https://instagram.com/" },
  ];

  return (
    <MinimalistHero
      logoText="Kedar Mhetre"
      mainText="Full-Stack Engineer building scalable web apps with React, Next.js, Tailwind, ShadCN, Node.js, and PostgreSQL—crafting seamless UIs and robust backends."
      imageSrc="/profile.png" // replace with your professional image if available
      imageAlt="Portrait of Kedar Mhetre"
      overlayText={{
        part1: "Full-Stack",
        part2: "Engineer",
      }}
      socialLinks={socialLinks}
      locationText="Belagavi, India"
      navLinks={[]}
    />
  );
};

export default MinimalistHeroDemo;
