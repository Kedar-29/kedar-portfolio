import { Hexagon, Github, Twitter, Linkedin } from "lucide-react";
import { Footer } from "@/components/ui/footer";

function Footersectiom() {
  return (
    <div className="w-full dark:bg-[#050505]">
      <Footer
        logo={<Hexagon className="h-10 w-10" />}
        brandName="Kedar Mhetre"
        socialLinks={[
          {
            icon: <Twitter className="h-5 w-5" />,
            href: "https://x.com/kedarmhetre_29",
            label: "Twitter",
          },
          {
            icon: <Github className="h-5 w-5" />,
            href: "https://github.com/Kedar-29",
            label: "GitHub",
          },
          {
            icon: <Linkedin className="h-5 w-5" />,
            href: "https://www.linkedin.com/in/kedarmhetre/",
            label: "LinkedIn",
          },
        ]}
        mainLinks={[
          { href: "#About", label: "About" },
          { href: "/about", label: "Experience" },
          { href: "/blog", label: "Projects" },
          { href: "/contact", label: "Contact" },
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
        ]}
        copyright={{
          text: "© 2025 Kedar Mhetre",
          license: "All rights reserved",
        }}
      />
    </div>
  );
}

export { Footersectiom };
