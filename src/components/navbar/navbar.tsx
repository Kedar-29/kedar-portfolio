"use client";

import { Home, User, Briefcase, Code2, Award } from "lucide-react";
import { NavBar } from "@/components/navbar/tubelight-navbar";

export function NavBarItem() {
  const navItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "About", url: "#about", icon: User },
    { name: "Experience", url: "#experience", icon: Briefcase },
    { name: "Projects", url: "#projects", icon: Code2 },
    { name: "Contact", url: "#contact", icon: Award },
  ];

  return <NavBar items={navItems} />;
}
