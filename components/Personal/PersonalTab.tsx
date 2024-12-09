"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const transitionConfig = (delay = 0) => ({
  type: "spring",
  stiffness: 80,
  duration: 0.5,
  delay: delay,
});

interface Personal {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
}

interface PersonalTabProps {
  personal: Personal;
  isSelected: boolean;
  isHovered: boolean;
  onClick: (id: number) => void;
  setHoveredPersonalId: React.Dispatch<React.SetStateAction<number | null>>;
}

const PersonalTab = ({
  personal,
  isSelected,
  isHovered,
  onClick,
  setHoveredPersonalId,
}: PersonalTabProps) => {
  return (
    <motion.button
      className={`w-full h-[25px] lg:h-[45px] flex items-center py-4 ${
        isHovered || isSelected ? "shadow-lg" : ""
      }`}
      onClick={() => onClick(personal.id)}
      transition={transitionConfig()}
      initial={{ backgroundColor: "transparent" }}
      animate={{
        backgroundColor:
          isSelected || isHovered
            ? "rgba(0, 0, 0, 0.05)"
            : "rgba(0, 0, 0, 0.0)",
      }}
      whileHover={{
        backgroundColor: isSelected
          ? "rgba(0, 0, 0, 0.07)"
          : "rgba(0, 0, 0, 0.05)",
      }}
      onHoverStart={() => {
        setHoveredPersonalId(personal.id);
      }}
      onHoverEnd={() => {
        setHoveredPersonalId(null);
      }}
    >
      <h3
        className={`flex-shrink-0 p-font text-xl lg:text-3xl ${
          isSelected ? "font-normal" : "font-light"
        }`}
      >
        {personal.title}
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
        {personal.year}
      </h3>
    </motion.button>
  );
};

export default PersonalTab;
