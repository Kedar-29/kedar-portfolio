"use client";

import { Home, User, Briefcase, Award, Code2 } from "lucide-react";
import { NavBar } from "@/components/navbar/tubelight-navbar";

export function NavBarItem() {
  const navItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "About", url: "#about", icon: User },
    { name: "Experiance", url: "#experiance", icon: Briefcase },
    { name: "Projects", url: "#projects", icon: Code2 },
    { name: "Contact", url: "#contact", icon: Award },
  ];

  return <NavBar items={navItems} />;
}
