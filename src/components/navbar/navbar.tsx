"use client";

import { Home, User, Briefcase, Award, Code2 } from "lucide-react";
import { NavBar } from "@/components/navbar/tubelight-navbar";

export function NavBarItem() {
  const navItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "About", url: "#about", icon: User },
    { name: "Projects", url: "#projects", icon: Briefcase },
    { name: "Skills", url: "#skills", icon: Code2 },
    { name: "Certificates", url: "#certificates", icon: Award },
  ];

  return <NavBar items={navItems} />;
}
