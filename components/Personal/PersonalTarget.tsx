// dependencies
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

// components
import TileCorners from "../HoverStates/TileCorners";
import GridLines from "../HoverStates/GridLines";

interface PersonalTarget {
  id: number;
  title: string;
  image: string;
  textArea: string | JSX.Element;
  year: number | string;
  description: string;
  link: string;
}

interface PersonalTargetShowcaseProps {
  personal: PersonalTarget;
  isHovered: boolean;
}

const transitionConfig = (delay = 0) => ({
  type: "spring",
  stiffness: 80,
  duration: 0.2,
  delay: delay,
});

const PersonalTargetShowcase = ({ personal }: PersonalTargetShowcaseProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="w-full max-w-[768px] md:ml-[50px]">
      <a href={personal.link} target="_blank" rel="noopener noreferrer">
        <motion.div
          className="w-full border-[1px] border-[--cblue] relative"
          initial={{ borderColor: "var(--cblue)" }}
          whileHover={{ borderColor: "var(--corange)" }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          animate="animate"
          transition={transitionConfig()}
        >
          <Image
            src={personal.image}
            width={600}
            height={400}
            alt={personal.title}
            layout="responsive"
            objectFit="contain"
            className={`w-full ${isHovered ? "shadow-lg" : ""}`}
          />
          {/* corners */}
          <TileCorners isHovered={true} />
          {/* grid lines */}
          <GridLines isHovered={isHovered} />
        </motion.div>
      </a>
      <div className="flex flex-col">
        <motion.h1
          className={`w-fit mt-4 mb-2 flex-shrink-0 p-font text-xl font-light transition-all duration-[200ms] ease-in-out ${
            isHovered
              ? "border-[1px] border-[--corange] underline decoration-[--cblue] decoration-1"
              : ""
          }`}
        >
          {personal.title}
        </motion.h1>
        <p className="p-font text-sm md:text-base font-light">
          {personal.textArea}
        </p>
      </div>
    </div>
  );
};

export default PersonalTargetShowcase;
