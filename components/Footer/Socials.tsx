"use client";

// dependencies
import React, { useState } from "react";
import { motion } from "framer-motion";

// icons
import { GithubLogo, LinkedinLogo, InstagramLogo, XLogo, BookmarkSimple } from "@phosphor-icons/react";

// components
import TileCorners from "../HoverStates/TileCorners";

const transitionConfig = (delay = 0) => ({
  type: "spring",
  stiffness: 80,
  duration: 0.5,
  delay: delay,
});

const Socials = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const socialLinks = [
    {
      id: "github",
      href: "https://github.com/TyrellHaywood",
      icon: GithubLogo,
    },
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/tyrellhaywood",
      icon: LinkedinLogo,
    },
    {
      id: "instagram",
      href: "https://www.instagram.com/tyrell.haywood/",
      icon: InstagramLogo,
    },
    {
      id: "x",
      href: "https://x.com/tyrellchaywood",
      icon: XLogo,
    },
    {
      id: "substack",
      href: "https://substack.com/@tyrellhaywood?",
      icon: BookmarkSimple,
    },
  ];

  return (
    <div className="w-auto h-auto flex gap-4">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        const isHovered = hoveredLink === social.id;

        return (
          <motion.a
            key={social.id}
            href={social.href}
            onMouseEnter={() => setHoveredLink(social.id)}
            onMouseLeave={() => setHoveredLink(null)}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            animate="animate"
            transition={transitionConfig(0)}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative ${
              isHovered ? "border-[1px] border-[--cblue]" : ""
            }`}
          >
            <Icon weight="light" size={40} />
            {/* corners */}
            <TileCorners isHovered={isHovered} />
          </motion.a>
        );
      })}
    </div>
  );
};

export default Socials;
