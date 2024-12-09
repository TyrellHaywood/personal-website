// dependencies
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

// components
import TileCorners from "../HoverStates/TileCorners";
import GridLines from "../HoverStates/GridLines";

interface CommunityTarget {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
}

interface CommunityTargetShowcaseProps {
  community: CommunityTarget;
  isHovered: boolean;
}

const transitionConfig = (delay = 0) => ({
  type: "spring",
  stiffness: 80,
  duration: 0.2,
  delay: delay,
});

const ProjectTargetShowcase = ({ community }: CommunityTargetShowcaseProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a href="" className="w-full md:ml-[50px]">
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
          src="/images/placeholder.svg"
          width={600}
          height={400}
          alt={community.title}
          layout="responsive"
          objectFit="contain"
          className="w-full"
        />
        {/* corners */}
        <TileCorners isHovered={true} />
        {/* grid lines */}
        <GridLines isHovered={isHovered} />
      </motion.div>
      <div className="flex flex-col gap-4">
        <motion.h1
          className={`w-fit mt-4 mb-2 flex-shrink-0 p-font text-xl lg:text-3xl font-light transition-all duration-[200ms] ease-in-out ${
            isHovered
              ? "border-[1px] border-[--corange] underline decoration-[--cblue] decoration-1"
              : ""
          }`}
        >
          {community.title}
        </motion.h1>
        <p className="p-font text-sm md:text-base lg:text-xl">
          {community.description}
        </p>
      </div>
    </a>
  );
};

export default ProjectTargetShowcase;
