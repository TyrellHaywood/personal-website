"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const transitionConfig = (delay = 0) => ({
  type: "spring",
  stiffness: 80,
  duration: 0.5,
  delay: delay,
});

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
}

interface ProjectTabProps {
  project: Project;
  isSelected: boolean;
  onClick: (id: number) => void;
}

const ProjectTab = ({ project, isSelected, onClick }: ProjectTabProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className="w-full h-[25px] lg:h-[45px] flex items-center my-[10px]"
      onClick={() => onClick(project.id)}
      transition={transitionConfig()}
      initial={{ backgroundColor: "transparent" }}
      animate={{
        backgroundColor: isSelected
          ? "rgba(0, 0, 0, 0.05)"
          : "rgba(0, 0, 0, 0.0)",
      }}
      whileHover={{
        backgroundColor: isSelected
          ? "rgba(0, 0, 0, 0.07)"
          : "rgba(0, 0, 0, 0.05)",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <h3
        className={`flex-shrink-0 p-font text-xl lg:text-3xl ${
          isSelected ? "font-[350]" : "font-light"
        }`}
      >
        {project.title}
      </h3>
      <motion.div
        className={`flex-grow border-t lg:border-t-2 border-dotted border-spacing-[10px] mx-1 rounded-md`}
        transition={transitionConfig()}
        initial={{ borderColor: "black" }}
        animate={{
          borderColor: isHovered || isSelected ? "var(--corange)" : "black",
        }}
      ></motion.div>
      <h3
        className={`flex-shrink-0 p-font text-xl lg:text-3xl ${
          isSelected ? "font-normal" : "font-light"
        }`}
      >
        {project.year}
      </h3>
    </motion.button>
  );
};

export default ProjectTab;
